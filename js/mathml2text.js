/**
 * mathml2text
 */

;
(function() {
    'use strict';

    const ponctuations = [
        44, // ,
        59, // ;
    ];

    const miTexte = {
        'ln': 'logarithme népérien de',
        'arccos': 'arc cosinus',
        'arcsin': 'arc sinus',
        'arctan': 'arc tangente',
        'cos': 'cosinus',
        'sin': 'sinus',
        'tan': 'tangente',
        'ch': 'cosinus hyperbolique',
        'sh': 'sinus hyperbolique',
        'th': 'tangente hyperbolique',
        'Card': 'cardinal de'
    }

    const varsansup = [
        8477, //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
        8450, //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
        8469, //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
        8473, // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
        8474, // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
        8484 // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
    ];
    const varintegral = [
        8747, //INTEGRAL ∫ &int; &‌#8747; &‌#x222B;
        8748, //DOUBLE INTEGRAL ∬ &‌#8748; &‌#x222C;
        8749, //TRIPLE INTEGRAL ∭ &‌#8749; &‌#x222D;
        10764, //QUADRUPLE INTEGRAL ⨌ &‌#10764; &‌#x2A0C;
        8750, //CONTOUR INTEGRAL ∮ &‌#8750; &‌#x222E;
        8751, //SURFACE INTEGRAL ∯ &‌#8751; &‌#x222F;
        8752 //VOLUME INTEGRAL ∰ &‌#8752; &‌#x2230;
    ];

    const texte = {
        'mmultiscripts_ig': '%1 indice inférieur %5 à gauche',
        'mmultiscripts_eg': '%1 indice supérieur %6 à gauche',
        'mmultiscripts_ieg': '%1 précédé de %5 en indice et de %6 en exposant',
        'mfrac': '%1 sur %2',
        'msup': '%1 exposant %2',
        'msup_sans': '%1 %2',
        'carre': '%1 au carré',
        'cube': '%1 au cube',
        'msub': '%1 indice %2',
        'msqrt': 'racine carrée de %1',
        'msubsup': '%1 indice %2 exposant %3',
        'msubsup_sans': '%1 %2 %3',
        'msubsup2': '%1 indice %2 au carré',
        'msubsup3': '%1 indice %2 au cube',
        'mroot': 'racine %2ème de %1',
        'mroot3': 'racine cubique de %1',
        'integrale': '%1 de %2 à %3 de',
        'integrale2': '%1 sur %2 de',
        'limite1': 'limite quand %2 de',
        'limite2': 'limite quand %2, %3, de',
        'somme': 'somme pour %2 à %3 de',
        'somme2': 'somme pour %2 de',
        'produit': 'produit pour %2 à %3 de',
        'produit2': 'produit pour %2 de',
        'log_base': 'logarithme en base %2 de',
        'vecteur': 'vecteur %1',
        'angle': 'angle %1',
        'barre': 'mesure algébrique de %1',
        'arc': 'arc %1',
        'matrice': 'la matrice %1',
        'determinant': 'le déterminant %1',
        'systeme_equation': 'le système d\'équations %1',
        'valeur_absolue': 'valeur absolue de %1',
        'norme': 'norme de %1',
        'intervalle_ferme': 'l\'intervalle fermé %1',
        'intervalle_ouvert': 'l\'intervalle ouvert %1',
        'intervalle_og_fd': 'l\'intervalle %1 ouvert à gauche et fermé à droite',
        'intervalle_fg_od': 'l\'intervalle %1 fermé à gauche et ouvert à droite',
        'ensemble': 'l\'ensemble d\'éléments %1',
        'combinaison': 'combinaison de %2 parmi %3'
    }

    let mesPosTexte = {};

    Object.keys(texte).forEach(k => {
        let montexte = texte[k];
        montexte = montexte.replace(/\'/g, '¤prime¤');
        let regex = new RegExp('%([0-9])', 'g');
        let tsplit = montexte.split(/%[0-9]/);
        // position des %[0-9]
        let mesPos = [];
        var array1;
        while ((array1 = regex.exec(montexte)) !== null) {
            mesPos.push({
                name: array1[1] - 1,
                pos: montexte.indexOf(array1[0]),
            });
            regex.lastIndex;

        }

        mesPos.sort((a, b) => a.pos - b.pos);
        mesPosTexte[k] = {
            value: tsplit,
            mesPositons: mesPos
        };

    });



    const casPart = {
        "'''": 'tierce',
        "''": 'seconde',
        "'": 'prime',
    };
    let mesFonctions = {};
    let writeEq = {};
    /**
     *  mathml2text constructor
     */
    let options = {
        'ponctuation': false, // ponctuation en toutes lettres
        'descMatrice': false // description matrice (lignes colonnes)
    };
    let monTxtMath = txtMathFR;
    Mathml2braille.prototype.mathml2text = function() {
        mesFonctions = this._mesFonctions;
        writeEq = this._writeEq;



        if (arguments[0] && typeof arguments[0] === "object") {
            options = mesFonctions._extendDefaults(options, arguments[0]);
        }

        if (!options.ponctuation) {
            monTxtMath = Object.keys(txtMathFR)
                .filter(key => ponctuations.indexOf(Number.parseInt(key)) === -1)
                .reduce((res, key) => (res[key] = txtMathFR[key], res), {});
        } else {
            monTxtMath = txtMathFR;
        }


        let mesFormules = this._formules;

        mesFormules.forEach(form => {
            let formClone = form.cloneNode(true);
            let i = 0;
            rewrite._miTexte(formClone);
            writeEq._ajoutmfenced(formClone);
            writeEq._reecritureMultiscripts(formClone);

            rewrite._ilExisteUnique(formClone);
            rewrite._fonctionDe(formClone);
            let mesFenced = formClone.querySelectorAll('mfenced');
            i = mesFenced.length;
            while (i--) {
                let mfenced = mesFenced[i];
                let nodeBefore = mfenced.previousElementSibling;

                if (nodeBefore && nodeBefore.tagName.toLowerCase() === 'mi' && nodeBefore.textContent.trim().length === 1) {
                    // ressemble à une fonction
                    let open = mfenced.getAttribute('open') || '(';
                    let close = mfenced.getAttribute('close') || ')';
                    if (open === '(' && close === ')') {
                        rewrite._fonctions(mfenced);
                    }
                } else if (mfenced.getAttribute('separators')) {
                    rewrite._mfenced(mfenced);
                    render._mfenced(mfenced);
                } else {
                    render._mfenced(mfenced);
                }

            }

            let mesOver = formClone.querySelectorAll('mover');
            i = mesOver.length;
            while (i--) {
                let enfants = mesOver[i].children;
                let vecteurs = [8594];
                let angles = [
                    8743, // angle
                    94 //angle
                ];
                let barres = [
                    175, //barre
                    95 //barre mathtype qui met un _
                ];
                let arcs = [
                    9180, //arc
                    8994 //arc
                ];
                // 8594, //vecteur
                // 175, //barre
                // 95, //barre mathtype qui met un _
                // 732, //tilde
                // 126, //tilde'
                // 9180, //arc
                // 8994, //arc
                // 8995, // arc smile
                // 8743, // angle
                // 94, //angle
                // 8744, // angle vers le bas

                let cca = enfants[1].textContent.trim().charCodeAt();
                (vecteurs.indexOf(cca) !== -1) && render._vecteur(mesOver[i]);
                (angles.indexOf(cca) !== -1) && render._angle(mesOver[i]);
                (barres.indexOf(cca) !== -1) && render._barre(mesOver[i]);
                (arcs.indexOf(cca) !== -1) && render._arc(mesOver[i]);
            }

            let mesMultiscripts = formClone.querySelectorAll('mmultiscripts');
            i = mesMultiscripts.length;
            while (i--) {
                render._mmultiscripts(mesMultiscripts[i]);
            }

            let mesSqrt = formClone.querySelectorAll('msqrt');
            i = mesSqrt.length;
            while (i--) {
                render._msqrt(mesSqrt[i]);
            }
            let mesRoot = formClone.querySelectorAll('mroot');
            i = mesRoot.length;
            while (i--) {
                render._mroot(mesRoot[i]);
            }

            let mesFrac = formClone.querySelectorAll('mfrac');
            i = mesFrac.length;
            while (i--) {
                render._mfrac(mesFrac[i]);
            }

            let mesSup = formClone.querySelectorAll('msup');
            i = mesSup.length;
            while (i--) {
                render._msup(mesSup[i]);
            }

            let mesSub = formClone.querySelectorAll('msub');
            mesSub.forEach(elt => {
                render._msub(elt);
            });

            let mesSubSup = formClone.querySelectorAll('msubsup');
            i = mesSubSup.length;
            while (i--) {
                render._msubsup(mesSubSup[i]);
            }

            let mesUnder = formClone.querySelectorAll('munder');
            mesUnder.forEach(elt => {
                render._munder(elt);
            });

            let mesUnderOver = formClone.querySelectorAll('munderover');
            i = mesUnderOver.length;
            while (i--) {
                render._munderover(mesUnderOver[i]);
            }

            // let mesTables=formClone.querySelectorAll('mtable');
            // i=mesTables.length;
            // while(i--){
            //     let mtable=mesTables[i];
            //     if(mesFonctions.hasParent(mtable,'mfenced')){

            //     }
            // }

            render._writeForm(form, formClone);


        });

    }


    var render = {
        /**
         * @param {string} clmath 
         * @return {dom} toutes les formules
         */
        get_formule: function(clmath) {
            return document.querySelectorAll(clmath);
        },
        _munderover: function(munderover) {
            switch (munderover.children[0].textContent.trim()) {
                case '∑':
                    render._writeText(munderover, 'somme');
                    break;
                case '∏':
                    render._writeText(munderover, 'produit');
                    break;
                default:
                    break;
            }
        },
        _mfenced: function(mfenced) {
            if (mesFonctions.hasChild(mfenced, 'mtable')) {
                render._matrice(mfenced);
                return;
            }
            let open = mfenced.getAttribute('open') || '(';
            let close = mfenced.getAttribute('close') || ')';
            let separators = mfenced.getAttribute('separators');
            let row = document.createElement('mrow');
            let parent = mfenced.parentNode;
            // intervalle
            // L’intervalle []est un INTERVALLE FERMÉen ce sens que les crochets sont tournés/fermésvers l’intérieur.L’intervalle ][est  un INTERVALLE  OUVERTen  ce  sens  que  les  crochets  sont  tournés/ouvertsvers l’extérieur.Les intervalles [[et ]]sont des INTERVALLES SEMI-OUVERTS.Par exemple, on dit que l’intervalle [[est fermé à gauche et ouvert à droite et que l’intervalle ]]est ouvert à gauche et fermé à droite.Les réels et sont appelés les BORNESde l’intervalle.Lorsque l’une des bornes est (qu’on lit «moins l’infini») ou (qu’on lit «plus l’infini»), on dit que l’intervalle est NON BORNÉ
            const crochets = ['[', ']', '{', '}'];
            if (separators && crochets.indexOf(open) !== -1 && crochets.indexOf(close) !== -1) {
                while (mfenced.children[0]) {
                    row.appendChild(document.createTextNode('\n'));
                    row.appendChild(mfenced.children[0]);
                }
                // row = render._writeGuillemet(row);
                let row2 = document.createElement('mrow');
                row2.appendChild(row)
                parent.replaceChild(row2, mfenced);
                if (open === '[' && close === ']') {
                    // intervalle fermé
                    render._writeText(row2, 'intervalle_ferme');
                    return;
                } else if (open === ']' && close === '[') {
                    // intervalle ouvert
                    render._writeText(row2, 'intervalle_ouvert');
                    return;
                } else if (open === ']' && close === ']') {
                    // intervalle semi-ouvert
                    render._writeText(row2, 'intervalle_og_fd');
                    return;
                } else if (open === '[' && close === '[') {
                    // intervalle semi-ouvert
                    render._writeText(row2, 'intervalle_fg_od');
                    return;
                } else if (open === '{' && close === '}') {
                    // ensemble
                    render._writeText(row2, 'ensemble');
                    return;
                }

            }
            //  norme et valeur absolue
            const paraNorme = ['∥', '||', '‖'];
            const paraAbsolue = ['∣', '|'];
            if (open === close && paraNorme.indexOf(open) !== -1) {
                render._writeText(mfenced, 'norme');
                return;
            } else if (open === close && paraAbsolue.indexOf(open) !== -1) {
                render._writeText(mfenced, 'valeur_absolue');
                return;
            }
            row.appendChild(mesFonctions.block(mfenced.cloneNode(true), open, close));
            parent.replaceChild(row, mfenced);
        },
        /**
         * 
         * @param {HTMLElement} mfrac 
         */
        _mfrac: function(mfrac) {
            render._writeText(mfrac);
        },
        _msup: function(msup) {

            if (varsansup.indexOf(msup.children[0].textContent.trim().charCodeAt()) !== -1) {
                render._writeText(msup, 'msup_sans');
            } else {

                switch (msup.children[1].textContent.trim()) {
                    case '2':
                        render._writeText(msup, 'carre');
                        break;
                    case '3':
                        render._writeText(msup, 'cube');
                        break;
                    default:
                        render._writeText(msup);
                        break;
                }
            }


        },
        _msub: function(msub) {
            let enfants = msub.children;

            if (varintegral.indexOf(enfants[0].textContent.trim().charCodeAt()) !== -1) {
                render._integrale(msub);
                return;
            }
            switch (enfants[0].textContent.trim()) {
                case 'log':
                    render._writeText(msub, 'log_base');
                    break;
                default:
                    render._writeText(msub);
                    break;
            }

        },
        _msubsup: function(msubsup) {
            let enfants = msubsup.children;
            // combinaison
            if (enfants[0].textContent.trim() === 'C') {
                render._writeText(msubsup, 'combinaison');
                return;
            }
            if (varintegral.indexOf(enfants[0].textContent.trim().charCodeAt()) !== -1) {
                render._integrale(msubsup);
                return;
            }
            if (varsansup.indexOf(enfants[0].textContent.trim().charCodeAt()) !== -1) {
                render._writeText(msubsup, 'msubsup_sans');
                return;
            }
            switch (enfants[2].textContent.trim()) {
                case '2':
                    render._writeText(msubsup, 'msubsup2');
                    break;
                case '3':
                    render._writeText(msubsup, 'msubsup3');
                    break;
                default:
                    render._writeText(msubsup);
                    break;
            }

        },
        _mmultiscripts: function(mmultiscripts) {
            let enfants = mmultiscripts.children;
            let tagName = [];
            let l = enfants.length;
            let i = 0;
            for (; i !== l; i++) {
                tagName.push(enfants[i].tagName.toLowerCase());
            }
            if (tagName[1] === 'none' && tagName[2] === 'none' && tagName[4] === 'none') {
                render._writeText(mmultiscripts, 'mmultiscripts_eg');
            } else if (tagName[1] === 'none' && tagName[2] === 'none' && tagName[5] === 'none') {
                render._writeText(mmultiscripts, 'mmultiscripts_ig');
            } else if (tagName[1] === 'none' && tagName[2] === 'none' && tagName[4] !== 'none' && tagName[5] !== 'none') {
                render._writeText(mmultiscripts, 'mmultiscripts_ieg');

            }

        },
        _msqrt: function(msqrt) {
            let enfant = msqrt.children;
            if (enfant.length > 1) {
                let row = document.createElement('mrow');
                while (enfant[0]) {
                    row.appendChild(document.createTextNode('\n'));
                    row.appendChild(enfant[0]);
                    row.appendChild(document.createTextNode('\n'));
                }
                msqrt.appendChild(row);
            }

            render._writeText(msqrt);

        },
        _mroot: function(mroot) {

            switch (mroot.children[1].textContent.trim()) {
                case '3':
                    render._writeText(mroot, 'mroot3');
                    break;

                default:
                    render._writeText(mroot);
                    break;
            }
        },
        _munder: function(munder) {

            switch (munder.children[0].textContent.trim().toLowerCase()) {
                case 'lim':
                    rewrite._limiteFleche(munder);
                    if (mesFonctions.hasChild(munder, 'mtable')) {
                        rewrite._limite(munder);
                        render._writeText(munder, 'limite2');
                    } else {
                        render._writeText(munder, 'limite1');
                    }
                    break;
                case '∑':
                    render._writeText(munder, 'somme2');
                    break;
                case '∏':
                    render._writeText(munder, 'produit2');
                    break;
                default:
                    break;
            }
        },
        _integrale: function(elt) {
            if (elt.children.length === 3) {
                render._writeText(elt, 'integrale');
            } else if (elt.children.length === 2) {
                render._writeText(elt, 'integrale2');

            }
        },
        _vecteur: function(elt) {
            render._writeText(elt, 'vecteur');
        },
        _angle: function(elt) {
            render._writeText(elt, 'angle');
        },
        _barre: function(elt) {
            render._writeText(elt, 'barre');
        },
        _arc: function(elt) {
            render._writeText(elt, 'arc');
        },
        _matrice: function(mfenced) {
            let open = mfenced.getAttribute('open') || '(';
            let close = mfenced.getAttribute('close') || ')';

            // déterminant ; matrice et système d'équations
            let boolD = (close === '|') && (open === '|');
            let boolM = (open === '(' && close === ')') || (open === '[' && close === ']');
            let boolS = open !== close && open === '{';
            if (boolS) {
                rewrite._table(mfenced.children[0], 'lignes');
            } else {
                rewrite._table(mfenced.children[0]);
            }
            boolD && render._writeText(mfenced, 'determinant');
            boolM && render._writeText(mfenced, 'matrice');
            boolS && render._writeText(mfenced, 'systeme_equation');


        },
        /**
         * écrit le texte avec "const texte"
         * @param {HTMLElement} elt 
         */
        _writeText: function(elt) {
            let eltTagName = arguments[1] && arguments[1] || elt.tagName;
            let parent = elt.parentNode;
            let enfant = elt.children;
            let row = document.createElement('row');
            let mesPos = mesPosTexte[eltTagName].mesPositons;
            let mesValues = mesPosTexte[eltTagName].value;
            mesValues.forEach((t, i) => {
                row.appendChild(document.createTextNode(t));
                if (i !== mesValues.length - 1) {
                    let monEnfant = enfant[mesPos[i].name];

                    if (monEnfant.children.length > 1) {
                        monEnfant = render._writeGuillemet(monEnfant);
                    }
                    row.appendChild(monEnfant.cloneNode(true));
                }
            });
            const tagNameOut = ['msqrt', 'msubsup', 'mmultiscripts','munder'];
            const tagNameParentOut = ['bloc', 'math']
            if (row.children.length > 1 && tagNameOut.indexOf(elt.tagName.toLowerCase()) === -1 && tagNameParentOut.indexOf(parent.tagName.toLowerCase()) === -1) {
                row = render._writeGuillemet(row);
            }

            parent.replaceChild(row, elt);
        },
        /**
         * 
         * @param {HTMLCollection} form 
         * @param {HTMLCollection} formClone 
         */
        _writeForm: function(form, formClone) {
            let span = document.createElement('span');
            span.classList.add('ecriture_auto');
            let txt = formClone.textContent;
            // txt = txt.replace(/\s+/g, ' ');
            Object.keys(casPart).forEach(d => {
                txt = txt.replace(new RegExp('\\' + d, 'g'), casPart[d]);
            });


            Object.keys(monTxtMath).forEach(d => {
                txt = txt.replace(new RegExp('\\' + String.fromCharCode(d), 'g'), ' ' + monTxtMath[d] + ' ');
            });
            txt = txt.replace(/\s+/g, ' ');

            txt = txt.replace(/¤prime¤/g, '\'');
            txt = render._guillemetsDANSguillemets(txt);
            span.textContent = txt;
            form.parentNode.insertBefore(span, form);
        },
        /**
         * 
         * @param {HTMLElement} elt 
         */
        _writeGuillemet: function(elt) {
            return mesFonctions.block(elt.cloneNode(true), '«', '»');
        },
        _guillemetsDANSguillemets: function(txt) {
            let gOuvert = [];
            let gFerme = [];
            let posG2 = [];
            // position des guillemets ouverts
            let pos = txt.indexOf('«');
            while (pos !== -1) {
                gOuvert.push(pos);
                pos = txt.indexOf("«", pos + 1);
            }
            // position des guillemets fermés
            pos = txt.indexOf('»');
            while (pos !== -1) {
                gFerme.push(pos);
                pos = txt.indexOf("»", pos + 1);
            }

            let gOF = gOuvert.concat(gFerme);
            // clone array
            let arrayO = gOuvert.slice(0);
            let arrayF = gFerme.slice(0);
            let mesG = [];
            arrayO.sort((a, b) => b - a);
            arrayF.forEach(p => {
                let found = arrayO.find(m => p - m > 0);
                mesG.push([p, found]);
                arrayO.splice(arrayO.indexOf(found), 1);

            });

            mesG.forEach(a => {
                let found = gOF.find(m => m > a[1] && m < a[0]);
                while (found) {
                    posG2.push(found);
                    gOF.splice(gOF.indexOf(found), 1);
                    found = gOF.find(m => m > a[1] && m < a[0]);
                }
            });


            // remplace  « et » par "
            posG2.forEach(pos => {
                txt = txt.substring(0, pos) + '"' + txt.substring(pos + 1, txt.length);
            });

            return txt;


        }
    };





    var rewrite = {
        /**
         * récrit le caractère double-struck
         * @param {HTMLElement} mi 
         */
        _doubleStruck: function(mi) {
            // 8477: 'grand r', //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
            // 8450: 'grand c', //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
            // 8469: 'grand n', //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
            // 8473: 'grand p', // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
            // 8474: 'grand q', // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
            // 8484: 'grand z', // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
            switch (mi.textContent) {
                case 'R':
                    mi.textContent = String.fromCharCode(8477);
                    break;
                case 'C':
                    mi.textContent = String.fromCharCode(8450);
                    break;
                case 'N':
                    mi.textContent = String.fromCharCode(8469);
                    break;
                case 'P':
                    mi.textContent = String.fromCharCode(8473);
                    break;
                case 'Q':
                    mi.textContent = String.fromCharCode(8474);
                    break;
                case 'Z':
                    mi.textContent = String.fromCharCode(8484);
                    break;
                default:
                    break;
            }
        },
        /**
         * récrit la limite quand une table est dans munder
         * @param {HTMLElement} munder 
         */
        _limite: function(munder) {
            let df = document.createDocumentFragment();
            let mtable = munder.querySelector('mtable');
            let mrow1 = document.createElement('mrow');
            mrow1.appendChild(munder.querySelector('mtr'));
            let mrow2 = document.createElement('mrow');
            mrow2.appendChild(munder.querySelector('mtr'));
            df.appendChild(mrow1);
            df.appendChild(mrow2);
            munder.replaceChild(df, mtable);
        },
        _limiteFleche: function(munder) {
            let fleche = [
                8594 // → 8594 2192 &rarr; RIGHTWARDS ARROW
            ];
            let mesmo = munder.querySelectorAll('mo');
            let i = mesmo.length;
            while (i--) {
                let txt = mesmo[i].textContent.trim();
                if (fleche.indexOf(txt.charCodeAt()) !== -1) {
                    let mtxt = document.createElement('mtxt');
                    mtxt.textContent = 'tend vers';
                    mesmo[i].parentNode.replaceChild(mtxt, mesmo[i]);

                }
            }
        },
        _mfenced: function(mfenced) {
            let sep = mfenced.getAttribute('separators');
            let mo = document.createElement('mo');
            mo.textContent = sep;
            let enfants = mfenced.children;
            let i = enfants.length;
            while (i--) {
                (i !== 0) && mfenced.insertBefore(mo.cloneNode(true), enfants[i]);
            }
        },
        _miTexte: function(form) {
            let mesMi = form.querySelectorAll('mi');
            let i = mesMi.length;
            while (i--) {
                let boolDoubleStruck = mesMi[i].getAttribute('mathvariant') && (mesMi[i].getAttribute('mathvariant') === 'double-struck');
                if (boolDoubleStruck) {
                    rewrite._doubleStruck(mesMi[i]);
                }
                let txt = mesMi[i].textContent.trim();
                mesMi[i].textContent = miTexte[txt] && miTexte[txt] || mesMi[i].textContent;
            }

        },
        /**
         * Recherche les "il existe un unique"
         * @param {HTMLCollection} form 
         */
        _ilExisteUnique(form) {
            let mesMi = form.querySelectorAll('mi');
            let i = mesMi.length;
            while (i--) {
                if (mesMi[i].textContent.trim() === '∃') {
                    if (mesMi[i].nextElementSibling && mesMi[i].nextElementSibling.textContent.trim() === '!') {
                        let mtext = document.createElement('mtext');
                        let parent = mesMi[i].parentNode;
                        mtext.appendChild(document.createTextNode('un unique'));
                        parent.replaceChild(mtext, mesMi[i].nextElementSibling);
                    }
                }

            }
        },
        /**
         * recherche les fonctions et les récrit
         * @param {HTMLCollection} form 
         */
        _fonctions: function(mfenced) {
            let parent = mfenced.parentNode;
            let mtext = document.createElement('mtext');
            mtext.appendChild(document.createTextNode('\n'));
            mtext.appendChild(document.createTextNode('de'));
            mtext.appendChild(document.createTextNode('\n'));
            while (mfenced.children[0]) {
                mtext.appendChild(mfenced.children[0]);
            }
            parent.replaceChild(mtext, mfenced);
        },
        /**
         * Cherche et modifie les fonctions du style 
         * f: R → R
         * x ↦ y
         * @param {HTMLCollection} form 
         */
        _fonctionDe: function(form) {
            let mtable = form.querySelector('mtable');
            if (mtable) {
                let txt = mtable.textContent;
                if (txt.indexOf('→') !== -1 && txt.indexOf('↦') !== -1) {
                    let mesmo = mtable.querySelectorAll('mo');
                    mesmo.forEach(m => {
                        switch (m.textContent.trim()) {
                            case '→':
                                m.textContent = 'dans';
                                break;
                            case '↦':
                                m.textContent = 'associe';
                                break;
                            case ':':
                                m.textContent = 'de';
                                break;
                            default:
                                break;
                        }
                    });
                    let mestd = mtable.querySelectorAll('mtd');
                    let row = document.createElement('mrow');

                    for (let i = 0; i !== mestd.length; i++) {
                        row.appendChild(mestd[i]);
                        (i !== mestd.length - 1) && row.appendChild(document.createTextNode('qui a\n'));
                    }
                    mtable.parentNode.replaceChild(row, mtable);
                }
            }
        },
        _table: function(mtable) {
            let mesTr = mtable.querySelectorAll('mtr');
            let mrow = document.createElement('mrow');
            let k = 0;
            let ligne = mesTr.length;
            let colonne = mesTr[0].querySelectorAll('mtd').length;
            let textNode = '(' + ligne + ' lignes et ' + colonne + ' colonnes)\n';
            if (arguments[1]) {
                switch (arguments[1]) {
                    case 'lignes':
                        textNode = '(' + ligne + ' lignes)\n';
                        break;
                    case 'colonnes':
                        textNode = '(' + colonne + ' colonnes)\n';
                        break;
                    default:
                        break;
                }
            }
            options.descMatrice && mrow.appendChild(document.createTextNode(textNode));
            for (; k !== ligne; k++) {
                let mesTd = mesTr[k].querySelectorAll('mtd');
                let i = 0;
                let ltd = mesTd.length;
                for (; i !== ltd; i++) {
                    let td = mesTd[i];
                    if (td.textContent.trim() === '') {
                        td.appendChild(document.createTextNode('case vide'));
                    }
                    mrow.appendChild(td);
                    mrow.appendChild(document.createTextNode('\n'));
                    (i !== ltd - 1) && mrow.appendChild(document.createTextNode(';'));
                    mrow.appendChild(document.createTextNode('\n'));

                }
                (k !== ligne - 1) && mrow.appendChild(document.createTextNode('ligne suivante'));
            }
            mtable.parentNode.replaceChild(mrow, mtable);
        }
    };

})();
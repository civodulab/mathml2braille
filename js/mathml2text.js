/**
 * mathml2text
 */

;
(function() {
    'use strict';
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
        'th': 'tangente hyperbolique'
    }

    const varsansup = [
        8477, //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
        8450, //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
        8469, //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
        8473, // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
        8474, // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
        8484
    ];
    // elts.push(multi[1]); //post1 indice
    // elts.push(multi[2]); //post2 exposant
    // elts.push(multi[3]);
    // elts.push(multi[4]); //pre1 indice
    // elts.push(multi[5]); //pre2 exposant
    const texte = {
        'mmultiscripts':'%1 indice inférieur %5 à gauche indice supérieur %6 à gauche indice %2 exposant %3',
        'mfrac': '%1 divisé par %2',
        'msup': '%1 exposant %2',
        'msup_sans': '%1 %2',
        'carre': '%1 au carré',
        'cube': '%1 au cube',
        'msub': '%1 indice %2',
        'msqrt': 'racine carré de %1',
        'msubsup': '%1 indice %2 exposant %3',
        'msubsup_sans': '%1 %2 %3',
        'msubsup2': '%1 indice %2 au carré',
        'msubsup3': '%1 indice %2 au cube',
        'mroot': 'racine %2ème de %1',
        'mroot3': 'racine cubique de %1',
        'integrale1': 'intégrale de %1 à %2',
        'limite1': 'limite quand %2 de',
        'limite2': 'limite quand %2, %3, de',
        'somme': 'somme pour %2 à %3 de',
        'produit': 'produit pour %2 à %3 de',
        'log_base': 'logarithme en base %2 de'
    }

    let mesPosTexte = {};
    Object.keys(texte).forEach(k => {
        let montexte = texte[k];
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

    Mathml2braille.prototype.mathml2text = function() {
        mesFonctions = this._mesFonctions;
        writeEq = this._writeEq;

        let mesFormules = this._formules;
        mesFormules.forEach(form => {
            let formClone = form.cloneNode(true);
            let i = 0;
            rewrite._miTexte(formClone);
            writeEq._ajoutmfenced(formClone);
            writeEq._reecritureMultiscripts(formClone);

            let mesFenced = formClone.querySelectorAll('mfenced');
            i = mesFenced.length;
            while (i--) {
                render._mfenced(mesFenced[i]);
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
            let open = mfenced.getAttribute('open') || '(';
            let close = mfenced.getAttribute('close') || ')';
            let row = document.createElement('mrow');
            let parent = mfenced.parentNode;
            row.appendChild(mesFonctions.block(mfenced.cloneNode(true), open, close));
            parent.replaceChild(row, mfenced);
        },
        /**
         * 
         * @param {HTMLElement} mfrac 
         * @return {HTMLElement} la phrase
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
            switch (msub.children[0].textContent.trim()) {
                case 'log':
                    render._writeText(msub, 'log_base');

                    break;

                default:
                    render._writeText(msub);

                    break;
            }

        },
        _msubsup: function(msubsup) {
            if (varsansup.indexOf(msubsup.children[0].textContent.trim().charCodeAt()) !== -1) {
                render._writeText(msubsup, 'msubsup_sans');
            } else {
                switch (msubsup.children[2].textContent.trim()) {
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
            }
        },
        _mmultiscripts: function(mmultiscripts) {
            render._writeText(mmultiscripts);
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
                    if (mesFonctions.hasChild(munder, 'mtable')) {
                        rewrite._limite(munder);
                        render._writeText(munder, 'limite2');
                    } else {
                        render._writeText(munder, 'limite1');
                    }
                    break;

                default:
                    break;
            }
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
            if (parent.children.length > 1) {
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
            // txt=txt.replace(/(\n)*/g,' ');
            txt = txt.replace(/\s+/g, ' ');
            Object.keys(casPart).forEach(d => {
                txt = txt.replace(new RegExp('\\' + d, 'g'), casPart[d]);
            });
            Object.keys(txtMathFR).forEach(d => {
                txt = txt.replace(new RegExp('\\' + String.fromCharCode(d), 'g'), txtMathFR[d]);
            });
            span.textContent = txt;
            form.parentNode.insertBefore(span, form);
        },
        /**
         * 
         * @param {HTMLElement} elt 
         */
        _writeGuillemet: function(elt) {
            return mesFonctions.block(elt.cloneNode(true), '«', '»');
        }
    };

    var rewrite = {
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
        _miTexte: function(form) {
            let mesMi = form.querySelectorAll('mi');
            let i = mesMi.length;
            while (i--) {
                let txt = mesMi[i].textContent.trim();
                mesMi[i].textContent = miTexte[txt] && miTexte[txt] || mesMi[i].textContent;
            }
        },
        /**
         * recherche les fonctions et les récrit
         * @param {HTMLCollection} form 
         */
        _fonctions: function(form) {

        }

    };

})();
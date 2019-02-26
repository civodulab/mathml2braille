/**
 * mathml2text
 */

// (function (exports) {
//     var PASSWORD = 'gloubiboulga';

//     var User = function (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.isAuthenticated = false;
//     };
//     exports.User = User;

//     User.prototype.toString = function () {
//         return this.firstName + ' ' + this.lastName;
//     };

//     User.prototype.authenticate = function (password) {
//         if (password == PASSWORD) {
//             this.isAuthenticated = true;
//         }
//     };
// })(this);





;
(function(window, document) {
    'use strict';

    const texte = {
        'mfrac': '%1 divisé par %2',
        'msup': '%1 exposant %2',
        'msub': '%1 indice %2',
        'msqrt': 'racine carré de %1',
        'msubsup': '%1 indice %2 exposant %3',
        'mroot': 'racine %2ème de %1',
        'integrale1': 'intégrale de %1 à %2',
        'limite1': '%1 quand %2 de',
        'limite2': '%1 quand %2, %3, de',
    }

    let mesPosTexte = {};
    Object.keys(texte).forEach(k => {
        let montexte = texte[k];
        let tsplit = montexte.split(/%[0-9]/);
        // position des %[0-9]
        let mesPos = [];
        let i;
        for (i = 1; i !== tsplit.length; i++) {
            mesPos.push({
                name: i - 1,
                pos: montexte.indexOf('%' + i),
            });
        }
        mesPos.sort((a, b) => a.pos - b.pos);
        mesPosTexte[k] = {
            value: tsplit,
            mesPositons: mesPos
        };

    });

    const dico = {
        "'''": 'tierce',
        "''": 'seconde',
        "'": 'prime',
        '=': 'égale',
        '≠': 'différent de',
        '×': 'fois',
        '*': 'étoile',
        '+': 'plus',
        '−': 'moins',
        '-': 'moins',
        '÷': 'divisé par',
        '∪': 'union',
        '∞': 'l\'infini',
        '∉': 'n\'appartient pas à',
        '⊂': 'est inclus dans',
        '⊆': 'est inclus au sens large dans',
        '⊄': 'n\'est pas inclus dans',
        '∩': 'inter',
        '∅': 'l\'ensemble vide',
        ',': 'virgule',
        '∘': 'rond',
        '>': 'strictement supérieur à',
        '⩽': 'inférieur ou égale à',
        '≤': 'inférieur ou égale à',
        '→': 'tend vers',
        '∂': 'd rond',
        'ℝ': 'grand r',
        '↦': 'a pour image',
        '±': 'plus ou moins'

    };
    let mesFonctions = {};
    /**
     *  mathml2text constructor
     */

    mathml2braille.prototype.mathml2text = function() {
        mesFonctions = this._mesFonctions;

        let mesFormules = this._formules;
        mesFormules.forEach(form => {
            let formClone = form.cloneNode(true);

            let mesRoot = formClone.querySelectorAll('mroot');
            let i = mesRoot.length;
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

            let mesSqrt = formClone.querySelectorAll('msqrt');
            mesSqrt.forEach(elt => {
                render._msqrt(elt);
            });
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
        /**
         * 
         * @param {HTMLElement} mfrac 
         * @return {HTMLElement} la phrase
         */
        _mfrac: function(mfrac) {
            render._writeText(mfrac);
        },
        _msup: function(msup) {
            render._writeText(msup);

        },
        _msub: function(msub) {

            render._writeText(msub);

        },
        _msubsup: function(msubsup) {

            render._writeText(msubsup);

        },
        _msqrt: function(msub) {
            render._writeText(msub);

        },
        _mroot: function(mroot) {
            render._writeText(mroot);
        },
        _munder: function(munder) {
            let enfant = munder.children;

            switch (enfant[0].textContent.trim().toLowerCase()) {
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
            Object.keys(dico).forEach(d => {
                txt = txt.replace(new RegExp('\\' + d, 'g'), dico[d]);
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
        }
    };


    //  window.mathml2text = mathml2text;
})(window, document);
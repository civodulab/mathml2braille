/**
 * mathml2text
 */
;
(function (window, document) {
    'use strict';

    const texte = {
        'mfrac': '%1 divisé par %2',
        'msup': '%1 exposant %2',
        'msub': '%1 indice %2',
        'msqrt': 'racine carré de %1',
        'integrale1': 'intégrale de %1 à %2',
        'limite1': 'limite quand %1 tend vers %2 de',
        'limite2': 'limite quand %1 tend vers %2, %3, de',

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
        '+': 'plus',
        '−': 'moins',
        '-': 'moins',
        '÷': 'divisé par',
        '∪': 'union',
        '∞': 'l\'infini',
        '∉': 'n\'appartient pas à',
        '⊂': 'est inclus dans',
        '⊄': 'n\'est pas inclus dans',
        '∩': 'inter',
        '∅': 'ensemble vide',
        ',': 'virgule',
        '∘': 'rond',
        '>': 'strictement supérieur à'

    };

    /**
     *  mathml2text constructor
     */
    mathml2braille.prototype.mathml2text = function () {

        let mesFormules = this._formules;
        mesFormules.forEach(form => {
            let formClone = form.cloneNode(true);
            let mesFrac = formClone.querySelectorAll('mfrac');
            mesFrac.forEach(elt => {
                render._mfrac(elt);
            });

            let mesSup = formClone.querySelectorAll('msup');
            mesSup.forEach(elt => {
                render._msup(elt);
            });
            let mesSub = formClone.querySelectorAll('msub');
            mesSub.forEach(elt => {
                render._msub(elt);
            });

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
        get_formule: function (clmath) {
            return document.querySelectorAll(clmath);
        },
        /**
         * 
         * @param {dom} mfrac 
         * @return {dom} la phrase
         */
        _mfrac: function (mfrac) {
            render._writeText(mfrac);

        },
        _msup: function (msup) {
            render._writeText(msup);

        },
        _msub: function (msub) {
           
            render._writeText(msub);

        },
        _msqrt: function (msub) {
            render._writeText(msub);

        },
        _mfenced: function (mfenced) {

        },
        _munder:function(munder){
            let enfant = munder.children;
            switch (enfant[0].textContent.trim().toLowerCase()) {
                case 'lim':
                    // console.log(hasChild(enfant[1], 'mtable'));

                    break;

                default:
                    break;
            }
        },
        /**
         * écrit le texte avec "const texte"
         * @param {dom} elt 
         */
        _writeText: function (elt) {
            let eltTagName = arguments[1] && arguments[1] || elt.tagName;
            let parent = elt.parentNode;
            let enfant = elt.children;
            let row = document.createElement('row');
            let mesPos = mesPosTexte[eltTagName].mesPositons;
            let mesValues = mesPosTexte[eltTagName].value;

            mesValues.forEach((t, i) => {
                row.appendChild(document.createTextNode(t));
                (i !== mesValues.length - 1) && row.appendChild(enfant[mesPos[i].name].cloneNode(true));
            });
            parent.replaceChild(row, elt);
        },
        /**
         * 
         * @param {*} form 
         * @param {*} formClone 
         */
        _writeForm: function (form, formClone) {
            let span = document.createElement('span');
            span.classList.add('ecriture_auto');
            let txt = formClone.textContent;
            Object.keys(dico).forEach(d => {
                txt = txt.replace(new RegExp('\\' + d, 'g'), dico[d]);
            });

            span.textContent = txt;
            return form.parentNode.insertBefore(span, form);
        }
    }

    //  window.mathml2text = mathml2text;
})(window, document);
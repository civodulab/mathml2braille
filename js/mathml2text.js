/**
 * mathml2text
 */
;
(function (window, document) {
    'use strict';

    var texte = {
        'mfrac': '%1 divisé par %2',
        'msup': '%1 exposant %2',
        'msub':'%1 indice %2'
    }
    var dico = {
        '=': 'égale',
        '+': 'plus',
        '-': 'moins',
        '÷': 'divisé par',
        '∪': 'union',
        '∞': 'infini',
        '∉': 'n\'appartient pas à',
        '⊂': 'est inclus dans',
        '⊄': 'n\'est pas inclus dans',
        '∩': 'inter',
        '∅': 'ensemble vide'
    };

    /**
     *  mathml2text constructor
     */
    mathml2braille.prototype.mathml2text = function () {

        let mesFormules = this._formules;
        mesFormules.forEach(form => {
            let formClone = form.cloneNode(true);
            let mesFrac = formClone.querySelectorAll('mfrac');
            mesFrac.forEach(frac => {
                render._mfrac(frac);
            });
            render.apercu(form, formClone);
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
            let parent = mfrac.parentNode;
            let elt = mfrac.children;
            let row = document.createElement('row');
            let t1 = texte.mfrac.split('%1');
            let t2 = t1[1].split('%2');
            row.appendChild(document.createTextNode(t1[0]));
            row.appendChild(elt[0]);
            row.appendChild(document.createTextNode(t2[0]));
            row.appendChild(elt[0]);
            row.appendChild(document.createTextNode(t2[1]));

            parent.replaceChild(row, mfrac);
            return mfrac;
        },
        /**
         * 
         * @param {*} form 
         * @param {*} formClone 
         */
        apercu: function (form, formClone) {
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
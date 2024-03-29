/**
 * Convertit les équations mathML en Braille Unicode
 * @name Mathml2braille
 * @param {string} [clmath=math] - class ou tagname à mettre dans la balise math
 * @param {object} [optionsBraille] 
 * @author Ludovic BAL <ludo.bal62@gmail.com>
 * @version 2.0
 * @constructor
 * 
 * @example
 * 
 * const optionsBraille = {
 *      'coupureFormule':true,
 *      'chimie':true
 * };
 * 
 * let mathml2braille = new Mathml2braille('.classmathML', optionsBraille);
 */
(function(exports, undefined) {
    // body
    'use strict';

    // Fonctions prototypes
    /**
     * Vérifie si la chaîne est numérique
     * @method
     * @memberof String
     * @name String#isNumeric
     * 
     */
    String.prototype.isNumeric = function() {
        if (Math.sign(this) === -1) return false;
        let n = this.replace(/\./g, '').replace(',', '.').replace(/\n|\r|\t|\s/g, '');
        return !isNaN(parseFloat(n)) && isFinite(n);
    }


    String.prototype.trimCar = function(car) {
        let deb = new RegExp('^' + car);
        let fin = new RegExp(car + '$');
        return this.replace(deb, '').replace(fin, '');
    }


    String.prototype.trimall = function() {
        return this.replace(/\s*/gi, '');
    };


    /**
     * String Prototype braille
     * Convertit texte en braille unicode
     * @param {array} maTable optionel
     * @returns {string}
     */
    String.prototype.braille = function(maTable) {
        // Source
        // http://symbolcodes.tlt.psu.edu/bylanguage/braillechart.html
        let maString = this.trimCar('-');
        var brailleUnicode = {
                'BLANK': 10240,
                1: 10241,
                12: 10243,
                123: 10247,
                1234: 10255,
                12345: 10271,
                123456: 10303,
                1234567: 10367,
                12345678: 10495,
                1234568: 10431,
                123457: 10335,
                1234578: 10463,
                123458: 10399,
                12346: 10287,
                123467: 10351,
                1234678: 10479,
                123468: 10415,
                12347: 10319,
                123478: 10447,
                12348: 10383,
                1235: 10263,
                12356: 10295,
                123567: 10359,
                1235678: 10487,
                123568: 10423,
                12357: 10327,
                123578: 10455,
                12358: 10391,
                1236: 10279,
                12367: 10343,
                123678: 10471,
                12368: 10407,
                1237: 10311,
                12378: 10439,
                1238: 10375,
                124: 10251,
                1245: 10267,
                12456: 10299,
                124567: 10363,
                1245678: 10491,
                124568: 10427,
                12457: 10331,
                124578: 10459,
                12458: 10395,
                1246: 10283,
                12467: 10347,
                124678: 10475,
                12468: 10411,
                1247: 10315,
                12478: 10443,
                1248: 10379,
                125: 10259,
                1256: 10291,
                12567: 10355,
                125678: 10483,
                12568: 10419,
                1257: 10323,
                12578: 10451,
                1258: 10387,
                126: 10275,
                1267: 10339,
                12678: 10467,
                1268: 10403,
                127: 10307,
                1278: 10435,
                128: 10371,
                13: 10245,
                134: 10253,
                1345: 10269,
                13456: 10301,
                134567: 10365,
                1345678: 10493,
                134568: 10429,
                13457: 10333,
                134578: 10461,
                13458: 10397,
                1346: 10285,
                13467: 10349,
                134678: 10477,
                13468: 10413,
                1347: 10317,
                13478: 10445,
                1348: 10381,
                135: 10261,
                1356: 10293,
                13567: 10357,
                135678: 10485,
                13568: 10421,
                1357: 10325,
                13578: 10453,
                1358: 10389,
                136: 10277,
                1367: 10341,
                13678: 10469,
                1368: 10405,
                137: 10309,
                1378: 10437,
                138: 10373,
                14: 10249,
                145: 10265,
                1456: 10297,
                14567: 10361,
                145678: 10489,
                14568: 10425,
                1457: 10329,
                14578: 10457,
                1458: 10393,
                146: 10281,
                1467: 10345,
                14678: 10473,
                1468: 10409,
                147: 10313,
                1478: 10441,
                148: 10377,
                15: 10257,
                156: 10289,
                1567: 10353,
                15678: 10481,
                1568: 10417,
                157: 10321,
                1578: 10449,
                158: 10385,
                16: 10273,
                167: 10337,
                1678: 10465,
                168: 10401,
                17: 10305,
                178: 10433,
                18: 10369,
                2: 10242,
                23: 10246,
                234: 10254,
                2345: 10270,
                23456: 10302,
                234567: 10366,
                2345678: 10494,
                234568: 10430,
                23457: 10334,
                234578: 10462,
                23458: 10398,
                2346: 10286,
                23467: 10350,
                234678: 10478,
                23468: 10414,
                2347: 10318,
                23478: 10446,
                2348: 10382,
                235: 10262,
                2356: 10294,
                23567: 10358,
                235678: 10486,
                23568: 10422,
                2357: 10326,
                23578: 10454,
                2358: 10390,
                236: 10278,
                2367: 10342,
                23678: 10470,
                2368: 10406,
                237: 10310,
                2378: 10438,
                238: 10374,
                24: 10250,
                245: 10266,
                2456: 10298,
                24567: 10362,
                245678: 10490,
                24568: 10426,
                2457: 10330,
                24578: 10458,
                2458: 10394,
                246: 10282,
                2467: 10346,
                24678: 10474,
                2468: 10410,
                247: 10314,
                2478: 10442,
                248: 10378,
                25: 10258,
                256: 10290,
                2567: 10354,
                25678: 10482,
                2568: 10418,
                257: 10322,
                2578: 10450,
                258: 10386,
                26: 10274,
                267: 10338,
                2678: 10466,
                268: 10402,
                27: 10306,
                278: 10434,
                28: 10370,
                3: 10244,
                34: 10252,
                345: 10268,
                3456: 10300,
                34567: 10364,
                345678: 10492,
                34568: 10428,
                3457: 10332,
                34578: 10460,
                3458: 10396,
                346: 10284,
                3467: 10348,
                34678: 10476,
                3468: 10412,
                347: 10316,
                3478: 10444,
                348: 10380,
                35: 10260,
                356: 10292,
                3567: 10356,
                35678: 10484,
                3568: 10420,
                357: 10324,
                3578: 10452,
                358: 10388,
                36: 10276,
                367: 10340,
                3678: 10468,
                368: 10404,
                37: 10308,
                378: 10436,
                38: 10372,
                4: 10248,
                45: 10264,
                456: 10296,
                4567: 10360,
                45678: 10488,
                4568: 10424,
                457: 10328,
                4578: 10456,
                458: 10392,
                46: 10280,
                467: 10344,
                4678: 10472,
                468: 10408,
                47: 10312,
                478: 10440,
                48: 10376,
                5: 10256,
                56: 10288,
                567: 10352,
                5678: 10480,
                568: 10416,
                57: 10320,
                578: 10448,
                58: 10384,
                6: 10272,
                67: 10336,
                678: 10464,
                68: 10400,
                7: 10304,
                78: 10432,
                8: 10368
            },
            tmpTable = maTable && maTable || brailleUnicode,
            txt = maTable && maString.split('') || maString.split('-'),
            l = txt.length,
            i = 0;
        for (; i !== l; i++) {
            if (!tmpTable[txt[i]]) {
                return 'caractère "' + txt[i] + ' ; ' + txt[i].charCodeAt() + '" non défini';
            }
            maTable && txt.splice(i, 1, brailleUnicode[maTable[txt[i]]]) || txt.splice(i, 1, brailleUnicode[txt[i]]);
        }
        return String.fromCharCode.apply(String, txt);
    };

    /**
     * Savoir si un element a comme parent un node.
     * @param {HTMLElement} element
     * @param {string} parentTagname
     * @returns {boolean}
     */
    HTMLElement.prototype.hasParent = function(parentTagname) {
        parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
        var l = parentTagname.length,
            parent,
            parentTag,
            i = 0;
        for (; i !== l; i++) {
            parent = this.parentElement;
            parentTag = parent.tagName.toLowerCase();
            while (parent && parentTag !== 'math') {
                if (parent.tagName.toLowerCase() === parentTagname[i]) return true;
                parent = parent.parentElement;
                parentTag = parent.tagName.toLowerCase();
            }
        }
        return false;
    }

    Object.prototype.hasChild = function(parentTagname) {
        parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
        var l = parentTagname.length,
            i = 0;
        for (; i !== l; i++) {
            var node = this.getElementsByTagName(parentTagname[i]);
            if (node[0] || this.tagName.toLowerCase() === parentTagname[i]) return true;
        }
        return false;
    }


    /** 
     * @var mesFonctions
     * @namespace
     */
    var mesFonctions = {
        /**
         * Savoir si un element a comme parent un node.
         * @memberof mesFonctions
         * @param {HTMLElement} element
         * @param {string} parentTagname
         * @returns {boolean}
         */
        hasParent: function(element, parentTagname) {
            parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
            var l = parentTagname.length,
                parent,
                parentTag,
                i = 0;
            for (; i !== l; i++) {
                parent = element.parentElement;
                parentTag = parent.tagName.toLowerCase();
                while (parent && parentTag !== 'math') {
                    if (parent.tagName.toLowerCase() === parentTagname[i]) return true;
                    parent = parent.parentElement;
                    parentTag = parent.tagName.toLowerCase();
                }
            }
            return false;
        },
        /**
         * Savoir si un element contient un node
         * @memberof mesFonctions
         * @param {HTMLElement} element
         * @param {string} parentTagname
         * @returns {boolean} true ou false
         */
        hasChild: function(element, parentTagname) {
            parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
            var l = parentTagname.length,
                i = 0;
            for (; i !== l; i++) {
                var node = element.getElementsByTagName(parentTagname[i]);
                if (node[0] || element.tagName.toLowerCase() === parentTagname[i]) return true;
            }
            return false;
        },
        /**
         * nombre d'éléments dans le dom
         * @memberof mesFonctions
         * @param {HTMLElement} element
         * @returns {long}
         */
        nbChildrens: function(element) {
            return element.querySelectorAll('*').length;
        },
        /**
         * les éléments dont le tagname contient "tag"
         * @memberof mesFonctions
         * @param {htmlelement} element 
         * @param {string} tag
         * @returns {array}
         */
        getElementsByContainTagName: function(element, tag) {
            tag = Array.isArray(tag) && tag || [tag];
            var a = [],
                n = element.getElementsByTagName('*'),
                l = n.length,
                i = 0;
            for (; i !== l; i++) {
                var node = n[i].tagName.toUpperCase(),
                    ltag = tag.length,
                    j = 0;
                for (; j !== ltag; j++) {
                    tag[j] = tag[j].toUpperCase();
                    (node.indexOf(tag[j]) !== -1) && a.push(n[i]);
                }
            }
            return a;
        },
        /**
         * encadre l'élément avec les caractères openBloc et endBloc
         * @memberof mesFonctions
         * @param {HTMLElement} element
         * @param {string} openBloc
         * @param {string} endBloc
         * @returns {HTMLElement}
         */
        block: function(element, openBloc, endBloc) {
            (openBloc === undefined) && (openBloc = mathBraille.caracMath.blocks.open);
            (endBloc === undefined) && (endBloc = mathBraille.caracMath.blocks.close);
            var df = document.createElement('bloc'),
                blocOuverture = document.createElement('blocOuverture'),
                blocFermeture = document.createElement('blocFermeture');
            blocOuverture.appendChild(document.createTextNode(openBloc));
            blocFermeture.appendChild(document.createTextNode(endBloc));

            df.appendChild(blocOuverture);
            df.appendChild(document.createTextNode('\n'));
            df.appendChild(element);
            df.appendChild(document.createTextNode('\n'));
            df.appendChild(blocFermeture);
            return df;
        },
        /**
         * génére les optionsBraille
         * @memberof mesFonctions
         * @param {object} source - optionsBraille par défaut
         * @param {object} properties - nouvelles optionsBraille
         * @returns {object}
         */
        _extendDefaults: function(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }

    };



    /**
     * @var optionsBraille
     * @type {object}
     * @property {boolean} [remplaceFormule=false]
     * @property {long} [coupureFormule=false]
     * @property {string} [codeBrailleMath=fr] fr, nemeth et ueb
     * @property {string} [codeSysteme=SI]
     * @property {boolean} [matriceLineaire=false]
     * @property {long} [maxCaracCell=10]
     * @property {boolean} [chimie=false]
     */
    var optionsBraille = {};

    /**
     * Indique si une matrice est complexe
     * @function hardmat
     * @param {htmlelement} m équation en html
     * @returns {boolean}
     */
    var hardmat;


    var mbraille = function(clmath) {
            this._mesFonctions = mesFonctions;
            this._writeEq = writeEq;
            optionsBraille = {
                'remplaceFormule': false,
                'coupureFormule': 0,
                'codeBrailleMath': 'fr',
                'codeSysteme': 'SI',
                'matriceLineaire': false,
                'maxCaracCell': 20, //correspond à peu près au nombre limite de carac dans la cellule avant de basculer en mode linéaire
                'chimie': false
            };
            if (!clmath) {
                clmath = 'math';
            } else if (typeof clmath === 'object') {
                optionsBraille = mesFonctions._extendDefaults(optionsBraille, clmath);
                clmath = 'math';
            } else if (arguments[1] && typeof arguments[1] === "object") {
                optionsBraille = mesFonctions._extendDefaults(optionsBraille, arguments[1]);
            }

            var mesFormules = clmath && document.querySelectorAll(clmath),
                l = mesFormules.length,
                i = 0;
            this._formules = mesFormules;
            for (; i !== l; i++) {
                mathBraille = allVar[optionsBraille.codeBrailleMath].mathBraille;
                mesFormules[i].setAttribute('aria-hidden', true);
                var parent = mesFormules[i].parentNode,
                    m = document.createElement('math'),
                    maForm = document.createElement('span');
                m.innerHTML = mesFormules[i].innerHTML;
                // TODO: mes fonctions
                writeEq._supprimeprefix(m);
                writeEq._superflus(m);
                writeEq._inutile(m);
                writeEq._tableSeul(m);
                writeEq._mspace(m);
                writeEq._espace(m)

                //menclose
                writeEq._menclose(m);

                // mover /munder  chimie
                optionsBraille.chimie && writeEq._moverChimie(m);
                optionsBraille.chimie && writeEq._munderChimie(m);

                // munderover sur flèche
                optionsBraille.chimie && writeEq._munderoverChimie(m);

                if (optionsBraille.codeBrailleMath === 'nemeth') {
                    writeEq._numDecimalNemeth(m);
                    writeEq._espaceNemeth(m);
                }

                hardmat = writeEq._boolHardMatrice(m);

                writeEq._ajoutmfenced(m);

                // résolution problèmes blocs
                writeEq._pbBlocs(m); // cas particulier de blocs (limite, cosinus, sinus, etc.)
                writeEq._pbIntegrale(m);

                /*
                NEW
                ajout de balises descriptives                
                */
                writeEq._newMfracBloc(m);
                writeEq._newMsqrtBloc(m);
                writeEq._newMrootBloc(m);

                writeEq._reecritureMultiscripts(m);
                writeEq._newMmultiscriptsBloc(m);


                writeEq._newMsubsupBloc(m);

                writeEq._newMunderover(m);
                // console.log(m.innerHTML);

                writeEq._newMsupBloc(m);
                writeEq._newMsubBloc(m);

                writeEq._newPlacementMultiscript(m);


                /*
                NEW réécriture
                écriture de l'équation selon les nouvelles balises
                */

                writeEq._newMfracWrite(m);
                writeEq._newMsqrtWrite(m);
                writeEq._newMrootWrite(m);
                writeEq._newIndiceExposantWrite(m);

                writeEq._newBlocBase(m);

                try {
                    writeEq._mover(m, 'mover');
                } catch (error) {
                    console.log(error);
                }
                try {
                    writeEq._munder(m);
                } catch (error) {
                    console.log(error);

                }
                writeEq._mfenced(m);

                writeEq._mn(m);

                writeEq._mo(m);

                writeEq._mi(m);
                writeEq._mtext(m);
                // console.log(m.innerHTML);

                (optionsBraille.matriceLineaire || hardmat) && writeEq._matriceLineaire(m);
                writeEq._writeform(m);
                maForm.innerHTML = m.innerHTML;
                maForm.classList.add('js-mathmlConverti');
                parent.insertBefore(maForm, mesFormules[i].nextSibling);
                if (optionsBraille.remplaceFormule) {
                    mesFormules[i].setAttribute('style', 'display:none');
                } else {
                    mesFormules[i].removeAttribute('style');
                }

            }
        },
        brailledirect = function(maClass, codeBrailleMath) {
            codeBrailleMath = codeBrailleMath && codeBrailleMath || 'fr';
            var tbf6 = document.querySelectorAll(maClass),
                l = tbf6.length,
                i = 0;
            for (; i !== l; i++) {
                var maTable = allVar[codeBrailleMath].TBdbt;
                tbf6[i].textContent = tbf6[i].textContent.braille(maTable);
            }
        };








    // var langueDoc = document.getElementsByTagName('html')[0].getAttribute('lang') || document.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'fr',

    var mathBraille = {};

    /* variables pour les matrices */
    const braillemarqueCell = '-124578-',
        braillemarqueMat = '-1234567-',
        braillemarqueClose = '-1278-',
        braillemarqueRetourLigne = '-12345678-',
        marqueCell = braillemarqueCell.braille(),
        marqueMat = braillemarqueMat.braille(),
        marqueClose = braillemarqueClose.braille(),
        marqueRetourLigne = braillemarqueRetourLigne.braille(),
        espace = String.fromCharCode(10240);
    /* fin variables matrice */

    /** 
     * Ensemble de fonctions qui réécrivent l'équation html
     * @var writeEq
     * @namespace 
     */
    let writeEq = {
        /**
         * Réécrit les munderover
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _munderoverChimie: function(monEquation) {
            var munderover = monEquation.getElementsByTagName('munderover'),
                i = 0,
                l = munderover.length;
            for (; i < l; i++) {
                let parent = munderover[i].parentNode;
                let elt = munderover[i].children;
                if (elt[0].textContent.trim().charCodeAt() === 8652) {
                    let mfenced = document.createElement('mfenced');
                    let mrow = document.createElement('mrow');
                    mfenced.appendChild(elt[2]);
                    mfenced.appendChild(document.createTextNode('-23-'));
                    mfenced.appendChild(elt[1]);
                    mrow.appendChild(elt[0]);
                    mrow.appendChild(mfenced);

                    parent.replaceChild(mrow, munderover[i]);
                }


                // <mo>&#x21CC;</mo>
            }
        },
        _menclose: function(monEquation) {
            var menclose = monEquation.getElementsByTagName('menclose'),
                i = menclose.length;
            while (i--) {
                let parent = menclose[i].parentNode;
                switch (menclose[i].getAttribute('notation')) {
                    case 'radical':
                        let sqrt = document.createElement('msqrt');
                        sqrt.innerHTML = menclose[i].innerHTML;
                        parent.replaceChild(sqrt, menclose[i]);
                        break;
                    default:
                        let mrow = document.createElement('mrow');
                        mrow.innerHTML = menclose[i].innerHTML;
                        parent.replaceChild(mrow, menclose[i]);
                        break;
                }
            }


        },
        /**
         * Réécrit les mover si chimie
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _moverChimie: function(monEquation) {
            var mover = monEquation.getElementsByTagName('mover'),
                i = mover.length;
            while (i--) {
                let elt = mover[i].children;
                let parent = mover[i].parentNode;

                if (elt[0].textContent.trim().charCodeAt() === 8652) {
                    let mfenced = document.createElement('mfenced');
                    let mrow = document.createElement('mrow');
                    mfenced.appendChild(elt[1]);
                    mfenced.appendChild(document.createTextNode('-23-'));
                    mfenced.appendChild(document.createTextNode('-5-2-'));
                    mrow.appendChild(elt[0]);
                    mrow.appendChild(mfenced);
                    parent.replaceChild(mrow, mover[i]);
                } else if (elt[1].tagName.toLowerCase() === 'mi') {
                    let mfenced = document.createElement('mfenced'),
                        mi = document.createElement('mi');
                    mi.innerHTML = elt[1].innerHTML;
                    mfenced.appendChild(mi);
                    mover[i].replaceChild(mfenced, elt[1]);
                } else {
                    let mrow = document.createElement('mrow');
                    mrow.appendChild(elt[0]);
                    mrow.appendChild(elt[0]);
                    parent.replaceChild(mrow, mover[i]);

                }
            }
        },
        /**
         * Réécrit les munder si chimie
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _munderChimie: function(monEquation) {
            var mover = monEquation.getElementsByTagName('munder'),
                i = 0,
                l = mover.length;
            for (; i < l; i++) {
                let elt = mover[i].children;
                if (elt[1].tagName.toLowerCase() === 'mo') {

                    let parent = mover[i].parentNode;
                    let mrow = document.createElement('mrow');
                    mrow.innerHTML = mover[i].innerHTML;
                    parent.replaceChild(mrow, mover[i]);
                }
            }
        },
        /**
         * Réécrit les mspace
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _mspace: function(monEquation) {
            var space = monEquation.getElementsByTagName('mspace');
            while (space[0]) {
                var parent = space[0].parentNode;
                var mtext = document.createElement('mi');
                mtext.textContent = ' ';
                parent.replaceChild(mtext, space[0]);
            }
        },
        /**
         * Recherche les mtext avec un espace pour mettre un espace
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _espace: function(monEquation) {
            var mtext = monEquation.querySelectorAll('mtext');
            mtext.forEach(t => {
                (t.textContent.charCodeAt() === 160) && (t.textContent = ' ');
            });
        },
        /**
         * Réécrit la décimal pour le code nemeth si SI
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _numDecimalNemeth: function(monEquation) {
            var mo = monEquation.getElementsByTagName('mo'),
                lmo = mo.length,
                i = 0;
            for (; i !== lmo; i++) {
                var elt = mo[i];
                if (elt.textContent.trim() === ',' && optionsBraille.codeSysteme === 'SI') {
                    if (elt.previousElementSibling.tagName.toLowerCase() === 'mn' && elt.nextElementSibling.tagName.toLowerCase() === 'mn') {
                        elt.textContent = '.';
                    } else if (elt.nextElementSibling.textContent.charCodeAt() !== 160) {
                        var bloc = document.createElement('space-bloc'),
                            parent = elt.parentNode;
                        bloc.appendChild(document.createTextNode(mathBraille.caracMath.espaceInsecable));
                        parent.insertBefore(bloc, elt.nextSibling);
                    }
                }
            }
        },
        /**
         * Réécrit la décimal pour le code nemeth si SI
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _espaceNemeth: function(monEquation) {
            var bloc,
                mo = monEquation.getElementsByTagName('mo'),
                lmo = mo.length,
                i = 0;
            while (i !== lmo) {
                var boolparent = mesFonctions.hasParent(mo[i], ['msub', 'msup']);
                // var boolparent = mo[i].hasParent(['msub', 'msup']);
                // var boolparent=false;
                if (mo[i].textContent.charCodeAt() === 160 && !boolparent) {
                    var parent = mo[i].parentNode;
                    bloc = document.createElement('space-bloc');
                    bloc.appendChild(document.createTextNode(mathBraille.caracMath.espaceInsecable));
                    parent.replaceChild(bloc, mo[i]);
                    lmo--;
                    i--;
                }
                i++;
            }
        },
        /**
         * Réécrit la décimal pour le code nemeth si SI
         * @memberof writeEq
         * @param {htmlelement} monEquation
         * @returns {htmlelement}
         */
        _pbIntegrale: function(monEquation) {
            var subsup = monEquation.getElementsByTagName('msubsup'),
                lsubsup = subsup.length,
                i = 0;
            for (; i !== lsubsup; i++) {
                var enfants = subsup[i].children,
                    next = subsup[i].nextElementSibling,
                    parent = subsup[i].parentNode;

                if (enfants[0].textContent.charCodeAt() === 8747 && (next && next.tagName.toLowerCase() === 'mn')) {
                    parent.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.open), subsup[i].nextSibling);
                    while (next && next.textContent !== 'd') {
                        // bloc.appendChild(next);
                        next = next.nextElementSibling;
                    }
                    if (next && next.nextElementSibling.tagName === 'mi') {
                        parent.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.close), next);

                    }
                }
            }
        },
        _pbBlocs: function(monEquation) {
            var zap = ['msub', 'msup'],
                qui = ['cos', 'sin', 'lim', 'ch', 'sh', 'ln', 'log', 'Card', 'tan', 'arctan', 'arcsin', 'arccos', 'arccotan'],
                mi = monEquation.getElementsByTagName('mi'),
                lmi = mi.length,
                i = 0;
            for (; i !== lmi; i++) {
                var txt = mi[i].textContent.trimall(),
                    parent = mi[i].parentNode,
                    first,
                    last,
                    lastprevious;
                if (qui.indexOf(txt) !== -1) {
                    if (txt === 'lim') {
                        while (parent.tagName.toLowerCase() !== 'munder') {
                            parent = parent.parentNode;
                        }
                        if (parent.nextElementSibling.tagName.toLowerCase() === 'mfrac') {
                            var frac = parent.nextElementSibling;
                            parent = parent.parentNode;
                            var bloc = document.createElement('mfrac');
                            bloc.innerHTML = frac.innerHTML;
                            parent.replaceChild(mesFonctions.block(bloc), frac);
                        }
                        continue;

                    } else if (zap.indexOf(parent.tagName.toLowerCase()) === -1) {
                        parent = mi[i];
                    }
                    first = parent.nextElementSibling;
                    last = first;
                    if ((first && first.tagName.toLowerCase() === 'mfenced') || (first && first.textContent.indexOf('(') !== -1) || (first && mesFonctions.nbChildrens(first) > 1)) continue;

                    if (parent.nextElementSibling.tagName.toLowerCase() === 'mfrac') {
                        frac = parent.nextElementSibling;
                        parent = parent.parentNode;
                        bloc = document.createElement('mfrac');
                        bloc.innerHTML = frac.innerHTML;
                        parent.replaceChild(mesFonctions.block(bloc), frac);
                        continue;
                    }
                    while (last && (last.tagName.toLowerCase() !== 'mo' && last.textContent.trimall().length === 1)) {
                        lastprevious = last;
                        last = last.nextElementSibling;
                    }

                    if (last) {
                        last = last.previousElementSibling;
                        parent.parentNode.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.open), first);
                        parent.parentNode.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.close), last.nextSibling);
                    } else if (lastprevious) {
                        parent.parentNode.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.open), first);
                        parent.parentNode.insertBefore(document.createTextNode(mathBraille.caracMath.blocks.close), lastprevious.nextSibling);
                    }

                }

            }
        },
        _tableSeul: function(monEquation) {
            var tbl = monEquation.getElementsByTagName('mtable'),
                bloc = document.createElement('mtable-bloc');
            if (tbl.length > 0 && monEquation.children.length === 1) {
                var Tagenfant = monEquation.children[0].tagName,
                    parent = tbl[0].parentNode;
                if (Tagenfant.toLowerCase() === 'mtable') {
                    var tr = tbl[0].getElementsByTagName('mtr'),
                        ltr = tr.length,
                        i = 0;
                    for (; i !== ltr; i++) {
                        (i !== ltr - 1) && tr[i].appendChild(document.createTextNode(braillemarqueRetourLigne));
                    }
                    while (tr[0]) {
                        bloc.appendChild(tr[0]);
                    }
                    parent.replaceChild(bloc, tbl[0]);
                }
            }
        },
        _boolHardMatrice: function(monEquation) {
            var tbl = monEquation.getElementsByTagName('mtable');
            if (tbl.length > 1) return true;
            if (tbl.length === 0) return false;
            var td = tbl[0].getElementsByTagName('mtd'),
                ltd = td.length,
                i = 0,
                tailleCell = 0;
            for (; i !== ltd; i++) {
                var t = td[i].textContent.replace(/\s*/gi, '').length;
                (tailleCell <= t) && (tailleCell = t);
            }
            if (tailleCell >= optionsBraille.maxCaracCell) return true;
            return false;
        },
        _supprimeprefix: function(monEquation) {
            let mesDom = monEquation.querySelectorAll('*');
            mesDom.forEach(dom => {
                let tag = dom.tagName.split(':'),
                    parent = dom.parentNode;
                if (tag.length > 1) {
                    let tmp = document.createElement(tag[1]);
                    tmp.innerHTML = dom.innerHTML;
                    parent.replaceChild(tmp, dom);
                }
            });
        },
        _inutile: function(monEquation) {

            var mesTags = ['annotation-xml', 'annotation'],
                l = mesTags.length,
                i = 0;
            for (; i !== l; i++) {
                var inutile = monEquation.getElementsByTagName(mesTags[i]);
                while (inutile[0]) {
                    var parent = inutile[0].parentNode;
                    parent.removeChild(inutile[0]);
                }
            }
        },

        _superflus: function(monEquation) {
            let mesTags = ['mstyle', 'annotation'],
                l = mesTags.length,
                i = 0,
                df = document.createDocumentFragment();
            // parent;
            for (; i !== l; i++) {
                let superflus = monEquation.getElementsByTagName(mesTags[i]);
                // let lsuperflus=superflus.length;
                // let j=lsuperflus-1;
                // for (; j !== -1; j--) {

                while (superflus[0]) {
                    let enfants = superflus[0].children;
                    let parent = superflus[0].parentNode;
                    let mrow = document.createElement('mrow');
                    while (enfants[0]) {
                        mrow.appendChild(enfants[0]);
                    }
                    // superflus[0].replaceWith(df);
                    parent.replaceChild(mrow, superflus[0]);
                }
            }
        },
        /**
         * Ajoute mfenced si mtable 
         * @param {HTMLCollection} monEquation 
         */
        _ajoutmfenced: function(monEquation) {

                let mo = monEquation.querySelectorAll('mo');
                const paraOpen = ['(', '[', '{', '|', '‖'];
                const paraClose = [')', ']', '}', '|', '‖'];
                mo.forEach(m => {
                    let fenced = document.createElement('mfenced');
                    let parent = m.parentNode;
                    let i = paraOpen.indexOf(m.textContent);
                    let next = m.nextElementSibling;
                    // si table
                    if ((i !== -1 && m.nextElementSibling) && (m.nextElementSibling.tagName.toLowerCase() === 'mtable' || mesFonctions.hasChild(m.nextElementSibling, 'mtable'))) {
                        // if ((i !== -1 && next) && (next.tagName.toLowerCase() === 'mtable' ||next.hasChild('mtable'))) {
                        fenced.setAttribute('open', paraOpen[i]);
                        fenced.setAttribute('close', '');
                        fenced.appendChild(m.nextElementSibling);
                        if (m.nextElementSibling && m.nextElementSibling.textContent === paraClose[i]) {
                            fenced.setAttribute('close', paraClose[i]);
                            parent.removeChild(m.nextElementSibling);
                        }
                        parent.replaceChild(fenced, m);
                    }
                    // si row
                    if ((i !== -1 && m.nextElementSibling) && (m.nextElementSibling.tagName.toLowerCase() === 'mrow' )) {
                        // if ((i !== -1 && next) && (next.tagName.toLowerCase() === 'mtable' ||next.hasChild('mtable'))) {
                        fenced.setAttribute('open', paraOpen[i]);
                        fenced.setAttribute('close', '');
                        fenced.appendChild(m.nextElementSibling);
                        if (m.nextElementSibling && m.nextElementSibling.textContent === paraClose[i]) {
                            fenced.setAttribute('close', paraClose[i]);
                            parent.removeChild(m.nextElementSibling);
                        }
                        
                        fenced.innerHTML=fenced.children[0].innerHTML;
                       
                        parent.replaceChild(fenced, m);
                        if(parent.children.length === 1){
                            var grandParent=parent.parentNode;
                            var enfant=parent.children[0];
                            grandParent.replaceChild(enfant, parent);
                            
                        }
                        // console.log('mrow',parent.innerHTML);

                    }
                })

            }




            // TODO: multiscript

            ,
        _reecritureMultiscripts: function(eq) {
            let multis = eq.querySelectorAll('mmultiscripts');
            multis.forEach(m => {
                let multi = m.children,
                    elts = [];
                if (multi[1].tagName.toLowerCase() === 'mprescripts') {
                    elts.push(document.createElement('none')); //post1 indice
                    elts.push(document.createElement('none')); //post2 exposant
                    elts.push(multi[1]);
                    elts.push(multi[2]); //pre1 indice
                    elts.push(multi[3]); //pre2 exposant
                } else {
                    elts.push(multi[1]); //post1 indice
                    elts.push(multi[2]); //post2 exposant
                    elts.push(multi[3]);
                    elts.push(multi[4]); //pre1 indice
                    elts.push(multi[5]); //pre2 exposant
                }
                elts.forEach(elt => m.appendChild(elt));
            });

        },
        _newMmultiscriptsBloc: function(eq) {
            var multiscripts = eq.getElementsByTagName('mmultiscripts'),
                lmultiscripts = multiscripts.length,
                i = 0;
            for (; i !== lmultiscripts; i++) {
                var elts = multiscripts[i].children,
                    monMulti = document.createElement('mmultiscripts'),
                    k = 0,
                    lelts = elts.length;
                for (; k !== lelts; k++) {
                    var lvl = writeEq._newNiveauIndiceExposant(elts[k]),
                        id = document.createElement(elts[k].tagName.toLowerCase());
                    id.innerHTML = elts[k].innerHTML;

                    if (lvl !== -1) {
                        var bloc = document.createElement('blocmulti-' + lvl);
                        if (writeEq._conditionsIndiceNum(elts[0], elts[1], lvl) && k === 1) {
                            bloc = document.createElement('blocIndiceNum-' + lvl);
                        }
                        bloc.appendChild(id);
                        monMulti.appendChild(bloc);
                    } else {
                        if (k === 0) {
                            bloc = document.createElement('blocbase');
                            bloc.appendChild(id);
                            monMulti.appendChild(bloc);
                        } else {
                            monMulti.appendChild(id);
                        }


                    }

                }
                multiscripts[i].innerHTML = monMulti.innerHTML;


            }
        },
        _newPlacementMultiscript: function(eq) {
                var multiscripts = eq.getElementsByTagName('mmultiscripts');
                while (multiscripts[0]) {
                    var parent = multiscripts[0].parentElement,
                        bloc = document.createElement('mmultiscripts-f'),
                        enfants = multiscripts[0].children;
                    if (optionsBraille.chimie) {
                        bloc.appendChild(enfants[0]);
                        bloc.appendChild(document.createTextNode(mathBraille.caracMath.point6)); // insertion pt 6
                        bloc.appendChild(enfants[3]);
                        bloc.appendChild(document.createTextNode(mathBraille.caracMath.point6)); // insertion pt 6
                        bloc.appendChild(enfants[3]);
                        bloc.appendChild(enfants[0]);
                        bloc.appendChild(enfants[0]);
                    } else {
                        bloc.appendChild(enfants[5]);
                        bloc.appendChild(enfants[4]);
                        bloc.appendChild(enfants[0]);
                        bloc.appendChild(enfants[0]);
                        bloc.appendChild(enfants[0]);
                    }
                    if (multiscripts[0].nextElementSibling || multiscripts[0].previousElementSibling) {
                        bloc = mesFonctions.block(bloc);
                    }
                    // console.log(bloc.innerHTML);
                    parent.replaceChild(bloc, multiscripts[0]);
                }


            }

            // TODO: mfenced
            ,
        _mfenced: function(monEquation) {
            var fenced = monEquation.getElementsByTagName('mfenced'),
                open,
                close,
                sep,
                mtable,
                parent,
                monBlock;
            while (fenced[0]) {
                monBlock = document.createElement('mfenced-block');
                open = fenced[0].getAttribute('open');
                (open === null) && (open = '(');
                (open.split('').length === 1) && (open = open.charCodeAt());
                close = fenced[0].getAttribute('close');
                (close === null) && (close = ')');
                (close.split('').length === 1) && (close = close.charCodeAt());
                mtable = fenced[0].getElementsByTagName('mtable');
                parent = fenced[0].parentNode;
                sep = fenced[0].getAttribute('separators');

                if (sep) {
                    var s = sep.split(''),
                        slast,
                        enfants = fenced[0].children,
                        i = 0;
                    let row = document.createElement('mrow');
                    while (enfants[0]) {
                        let mo = document.createElement('mo');

                        s[i] = s[i] || slast;
                        mo.appendChild(document.createTextNode(s[i]));
                        slast = s[i] && s[i];
                        row.appendChild(enfants[0]);
                        enfants[0] && row.appendChild(mo);
                        i++;
                    }
                    fenced[0].appendChild(row);

                }
                monBlock.innerHTML = fenced[0].innerHTML;
                var monBool = mtable.length !== 0 && (optionsBraille.matriceLineaire || hardmat);

                switch (open) {
                    case 40: // para (
                        open = monBool && mathBraille.caracMath.grandeparenthese2.open || mathBraille.caracMath.parenthese.open;
                        break;
                    case 91: //'[':
                        open = monBool && mathBraille.caracMath.grandcrochet2.open || mathBraille.caracMath.crochet.open;
                        break;
                    case 93: //']':
                        open = monBool && mathBraille.caracMath.grandcrochet2.close || mathBraille.caracMath.crochet.close;
                        break;
                    case 123: //'{':
                        open = monBool && (mathBraille.caracMath.grandeaccolade.open) || ((close !== '') && mathBraille.caracMath.accolade.open || mathBraille.caracMath.grandeaccolade.open);
                        break;
                    case 8739:
                    case 124: //'|':
                        open = monBool && mathBraille.caracMath.grandebarre.open || mathBraille.caracMath.barre.open;
                        break;
                    case 8214:
                    case 8741:
                    case '||':
                        open = monBool && mathBraille.caracMath.grandedoublebarre.open || mathBraille.caracMath.doublebarre.open;
                        break;
                    case 10214: // crochet double ouvert
                        open = mathBraille.caracMath.crochetdouble.open;
                        break;
                }
                switch (close) {
                    case 41: // )
                        close = monBool && mathBraille.caracMath.grandeparenthese2.close || mathBraille.caracMath.parenthese.close;
                        break;
                    case 93: //']':
                        close = monBool && mathBraille.caracMath.grandcrochet2.close || mathBraille.caracMath.crochet.close;
                        break;
                    case 91: //'[':
                        close = monBool && mathBraille.caracMath.grandcrochet2.open || mathBraille.caracMath.crochet.open;
                        break;
                    case 125: //'}':
                        close = monBool && mathBraille.caracMath.grandeaccolade.close || mathBraille.caracMath.accolade.close;
                        break;
                    case 124: // '|':
                        close = monBool && mathBraille.caracMath.grandebarre.close || mathBraille.caracMath.barre.close;
                        break;
                    case 8214:
                    case 8741:
                    case '||':
                        close = monBool && mathBraille.caracMath.grandedoublebarre.close || mathBraille.caracMath.doublebarre.close;
                        break;
                    case 10215: // crochet double fermé
                        close = mathBraille.caracMath.crochetdouble.close;
                        break;
                }
                (!optionsBraille.matriceLineaire && !hardmat) && writeEq._matriceBlock(open, close, monBlock);
                parent.replaceChild(mesFonctions.block(monBlock, open, close), fenced[0]);
            }
        },
        _matriceBlock: function(open, close, monBlock) {
            var tbl = monBlock.getElementsByTagName('mtable'),
                ltbl = tbl.length,
                parent, txtNode,
                tr, td, ltd, ltr,
                j, k,
                i = 0;
            for (; i !== ltbl; i++) {
                parent = tbl[i].parentNode;
                parent.insertBefore(document.createTextNode(braillemarqueMat), tbl[i]);
                close && parent.insertBefore(document.createTextNode(braillemarqueClose), tbl[i]);
                tr = tbl[i].getElementsByTagName('mtr');
                ltr = tr.length;
                j = 0;
                for (; j !== ltr; j++) {
                    txtNode = close && (close + braillemarqueRetourLigne + open) || braillemarqueRetourLigne;
                    (j !== ltr - 1) && tbl[i].insertBefore(document.createTextNode(txtNode), tr[j].nextSibling);
                    td = tr[j].getElementsByTagName('mtd');
                    ltd = td.length;
                    k = 0;
                    for (; k !== ltd; k++) {
                        parent = td[k].parentNode;
                        (td[k].textContent.trim().length === 0) && td[k].appendChild(document.createTextNode(mathBraille.caracMath.matrice.caseVide));
                        (k !== ltd - 1) && parent.insertBefore(document.createTextNode(mathBraille.caracMath.espaceInsecable), td[k].nextSibling);
                        parent.insertBefore(document.createTextNode(braillemarqueCell), td[k].nextSibling);
                        parent.insertBefore(document.createTextNode(braillemarqueCell), td[k]);
                    }
                }
            }
            return monBlock;
        },
        _matriceLineaire: function(monEquation) {
                var tbl = monEquation.getElementsByTagName('mtable'),
                    ltbl = tbl.length,
                    tr, td, ltd, ltr,
                    j, k,
                    i = 0;
                for (; i !== ltbl; i++) {
                    tr = tbl[i].getElementsByTagName('mtr');
                    ltr = tr.length;
                    j = 0;
                    for (; j !== ltr; j++) {
                        (j !== ltr - 1) && tr[j].appendChild(document.createTextNode(mathBraille.caracMath.matrice.sepLigne + mathBraille.caracMath.espaceInsecable));
                    }
                    td = tbl[i].getElementsByTagName('mtd');
                    ltd = td.length;
                    k = 0;
                    for (; k !== ltd; k++) {
                        (td[k].textContent.trim().length === 0) && td[k].appendChild(document.createTextNode(mathBraille.caracMath.matrice.caseVide));
                        (k !== ltd - 1) && td[k].appendChild(document.createTextNode(mathBraille.caracMath.espaceInsecable));
                    }
                }
            }

            // TODO: subsup

            ,
        _newMsubsupBloc: function(eq, tag) {
                tag = tag && tag || 'msubsup';
                let msubsup = eq.getElementsByTagName(tag),
                    nomBloc = (tag === 'munderover') && 'blocunderover-' || 'blocsubsup-',
                    indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';
                while (msubsup[0]) {
                    let parent = msubsup[0].parentNode,
                        bloc = document.createElement(tag + '-f'),
                        lvlsub = writeEq._newNiveauIndiceExposant(msubsup[0].children[1]),
                        lvlsup = writeEq._newNiveauIndiceExposant(msubsup[0].children[2]),
                        blocsup = lvlsup === -1 && document.createElement('bloc') || document.createElement(nomBloc + lvlsup),
                        blocsub = lvlsub === -1 && document.createElement('bloc') || document.createElement(nomBloc + lvlsub);
                    blocsub = (writeEq._conditionsIndiceNum(msubsup[0].children[0], msubsup[0].children[1], lvlsub)) && document.createElement('blocIndiceNum-' + lvlsub) || blocsub;
                    blocsup.appendChild(msubsup[0].children[2]);
                    blocsub.appendChild(msubsup[0].children[1]);
                    bloc.appendChild(msubsup[0].children[0]);
                    bloc.appendChild(blocsub);
                    bloc.appendChild(blocsup);
                    bloc = mesFonctions.block(bloc, '', indicateurBase);
                    parent.replaceChild(bloc, msubsup[0])
                }
            }


            // TODO: traitement texte
            ,
        _majus: function(monEquation, tagName) {

            var mn = monEquation.getElementsByTagName(tagName),
                l = mn.length,
                i = 0;
            for (; i !== l; i++) {
                let scriptBool = mn[i].getAttribute('mathvariant') && (mn[i].getAttribute('mathvariant') === 'script');
                let doubleStruckBool = mn[i].getAttribute('mathvariant') && (mn[i].getAttribute('mathvariant') === 'double-struck');
                if (scriptBool) {
                    mn[i].textContent = mn[i].textContent.toLowerCase();
                }
                if (mn[i].textContent.trim() === ';' && optionsBraille.chimie) {
                    mn[i].textContent = mathBraille.caracMath.point6 + mathBraille.caracDec[mn[i].textContent.trim().charCodeAt()];
                } else if (mn[i].textContent === ' ') {
                    mn[i].textContent = mathBraille.caracMath.espaceInsecable;
                } else {
                    var num = mn[i].textContent.length > 1 && mn[i].textContent.trim().split('') || mn[i].textContent.split(''),
                        carac = '',
                        lnum = num.length,
                        j = 0;
                    mn[i].textContent = '';
                    for (; j < lnum; j++) {
                        let moncar;
                        if (optionsBraille.chimie) {
                            if (mathBraille.caracDec[num[j].charCodeAt()] && mathBraille.caracDec[num[j].charCodeAt()].chimie) {
                                moncar = mathBraille.caracDec[num[j].charCodeAt()].chimie;
                            } else {
                                moncar = mathBraille.caracDec[num[j].charCodeAt()];
                            }
                        } else {
                            if (mathBraille.caracDec[num[j].charCodeAt()] && mathBraille.caracDec[num[j].charCodeAt()].math) {
                                moncar = mathBraille.caracDec[num[j].charCodeAt()].math;
                            } else {
                                moncar = mathBraille.caracDec[num[j].charCodeAt()];
                            }
                        }
                        carac = moncar || num[j];
                        carac = scriptBool && mathBraille.caracMath.majusculeronde + carac || carac;
                        carac = doubleStruckBool && mathBraille.caracMath.majuscule + carac || carac;
                        mn[i].textContent += carac;
                    }
                }

            }
        },

        _mi: function(monEquation) {
            writeEq._majus(monEquation, 'mi');
        },
        _mo: function(monEquation) {
            writeEq._majus(monEquation, 'mo');
        },
        _mtext: function(monEquation) {
            writeEq._majus(monEquation, 'mtext');
        },
        _mn: function(monEquation) {
            if (optionsBraille.codeBrailleMath === 'ueb') {
                var moNum = [',', '.'];
                var mn = monEquation.getElementsByTagName('mn'),
                    l = mn.length,
                    i = 0;
                for (; i !== l; i++) {
                    var parent = mn[i].parentNode;
                    var moAvant = mn[i].previousElementSibling;
                    if (!moAvant) {
                        parent.insertBefore(document.createTextNode(mathBraille.caracMath.indicateurNumerique), mn[i]);
                    } else if (moAvant && moNum.indexOf(moAvant.textContent.trim()) === -1) {
                        parent.insertBefore(document.createTextNode(mathBraille.caracMath.indicateurNumerique), mn[i]);
                    }

                }

            }
            writeEq._majus(monEquation, 'mn');

        },
        _mover: function(monEquation, tagName) {

            tagName = tagName || 'mover';
            var mover = monEquation.getElementsByTagName(tagName),
                monbool = false;
            while (mover[0]) {

                var tbl = mover[0].getElementsByTagName('mtable');
                if (tbl.length !== 0) {
                    writeEq._tableUnder(mover[0]);
                }
                var bloc = document.createElement(tagName + 'bloc'),
                    parent = mover[0].parentNode,
                    elt = mover[0].children,
                    carCode = String(elt[1].textContent.trim().charCodeAt()),
                    sep = '',
                    myArray = Object.keys(mathBraille.caracDec.susouscrit);

                if (myArray.indexOf(carCode) !== -1) {
                    if (tagName.toLowerCase() === 'munder') {
                        bloc.appendChild(document.createTextNode(mathBraille.caracMath.majuscule));
                    }
                    bloc.appendChild(document.createTextNode(mathBraille.caracDec.susouscrit[carCode]));
                    (mesFonctions.hasChild(elt[0], 'mo') && elt[0].tagName.toLowerCase() !== 'mfenced') && bloc.appendChild(mesFonctions.block(elt[0])) || bloc.appendChild(elt[0]);
                } else {
                    var enfant1 = elt[0],
                        enfant2 = elt[1];

                    switch (tagName.toLowerCase()) {
                        case 'mover':
                            sep = mathBraille.caracMath.suscrit;
                            optionsBraille.chimie && (sep = '');

                            break;
                        case 'munder':
                            sep = mathBraille.caracMath.souscrit;
                            sep = optionsBraille.chimie && mathBraille.caracMath.point6 + sep || sep;
                            break;


                        case 'mroot':
                            if (mover[0].nextElementSibling && mover[0].nextElementSibling.tagName.toLowerCase() !== 'mo') {
                                monbool = true;
                            }
                            sep = mathBraille.caracMath.racine;
                            enfant1 = elt[1];
                            enfant2 = elt[0];
                            bloc.appendChild(document.createTextNode(mathBraille.caracMath.exposant));
                            break;
                    }

                    (mesFonctions.nbChildrens(enfant1) > 1 && !enfant1.textContent.isNumeric()) && bloc.appendChild(mesFonctions.block(enfant1)) || bloc.appendChild(enfant1);
                    bloc.appendChild(document.createTextNode(sep));
                    (mesFonctions.nbChildrens(enfant2) > 1 && !enfant2.textContent.isNumeric()) && bloc.appendChild(mesFonctions.block(enfant2)) || bloc.appendChild(enfant2);
                }
                bloc = monbool && mesFonctions.block(bloc) || bloc;
                parent.replaceChild(bloc, mover[0]);
            }
        },
        _tableUnder: function(under) {
            var bloc = document.createElement('mrow'),
                tbl = under.getElementsByTagName('mtable'),
                tr = tbl[0].getElementsByTagName('mtr'),
                ltr = tr.length,
                j = 0;

            for (; j !== ltr; j++) {
                (j !== ltr - 1) && tr[j].appendChild(document.createTextNode('-2-'));
            }
            var parent = tbl[0].parentNode;
            while (tr[0]) {
                bloc.appendChild(tr[0]);
            }

            parent.replaceChild(bloc, tbl[0]);
            return under;
        },
        _munder: function(monEquation) {

            writeEq._mover(monEquation, 'munder');


        },
        _newMunderover: function(eq) {
                writeEq._newMsubsupBloc(eq, 'munderover')
            }




            //TODO: Fraction

            ,
        _newMfracBloc: function(eq) {
            var mfrac = eq.getElementsByTagName('mfrac');
            while (mfrac[0]) {
                var complexe = writeEq._boolFracComplexity(mfrac[0]),
                    parent = mfrac[0].parentNode,
                    bloc = document.createElement('mfrac-' + complexe),
                    bevelled = mfrac[0].getAttribute('bevelled');
                bevelled && bloc.setAttribute('bevelled', bevelled);
                bloc.innerHTML = mfrac[0].innerHTML;
                parent.replaceChild(bloc, mfrac[0]);
            }
        },
        _newMfracWrite: function(eq) {
                var mfrac = mesFonctions.getElementsByContainTagName(eq, 'mfrac'),
                    indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '',
                    i = 0,
                    lmfrac = mfrac.length;
                for (; i < lmfrac; i++) {
                    var element = mfrac[i],
                        tagName = element.tagName.split('-'),
                        bloc = document.createElement('bloc'),
                        blocSep = document.createElement('sep'),
                        mnamebloc = ['msup', 'msub'],
                        parent = element.parentNode,
                        elt = element.children,
                        enfant1 = elt[0],
                        enfant2 = elt[1],
                        boolEnfant1 = (enfant1.children.length === 2 && enfant1.children[0].textContent.trimall().length > 1),
                        boolEnfant2 = (enfant2.children.length === 2 && enfant2.children[0].textContent.trimall().length > 1),
                        sep = '';


                    if (mathBraille.caracMath.indicateurFraction) {
                        var indicFrac = mathBraille.caracMath.indicateurFraction[tagName[1]],
                            open = indicFrac.open,
                            close = indicFrac.close,
                            bevelled = element.getAttribute('bevelled');

                        sep = (bevelled) && mathBraille.caracMath.fraction[tagName[1]].oblique || mathBraille.caracMath.fraction[tagName[1]].horizontale;
                    } else {
                        sep = mathBraille.caracMath.fraction;
                    }
                    blocSep.appendChild(document.createTextNode(sep));
                    blocSep = (mnamebloc.indexOf(enfant1.tagName.split('-')[0]) !== -1) && mesFonctions.block(blocSep, indicateurBase, '') || blocSep;

                    enfant1 = (mesFonctions.nbChildrens(enfant1) > 1 && !boolEnfant1) && mesFonctions.block(enfant1) || enfant1;
                    enfant2 = (mesFonctions.nbChildrens(enfant2) > 1 && !boolEnfant2) && mesFonctions.block(enfant2) || enfant2;

                    bloc.appendChild(enfant1);
                    bloc.appendChild(blocSep);
                    bloc.appendChild(enfant2);

                    bloc = mathBraille.caracMath.indicateurFraction && mesFonctions.block(bloc, open, close) || bloc;
                    parent.replaceChild(bloc, element);

                }
            }

            /**
             * Détermine si la fraction est 
             * simple, complexe ,hypercomplexe ou fractionnaire
             * @param {*} frac fraction
             * @return {num} 0 simple, 1 complexe, 2 hypercomplexe 
             */
            ,
        _boolFracComplexity: function(frac) {
            var numerateur = frac.children[0],
                denominateur = frac.children[1],
                num = numerateur.getElementsByTagName('mfrac'),
                denom = denominateur.getElementsByTagName('mfrac'),
                lnum = num.length,
                ldenom = denom.length;
            var comp = ['simple', 'complexe', 'hypercomplexe'];
            var numcomp = 0;
            if (frac.previousElementSibling && frac.previousElementSibling.tagName.toLowerCase() === 'mn') {
                var parent = frac.parentElement.tagName;
                if (parent !== 'mfrac') return 'fractionnaire';
            }
            if ((numerateur.tagName.toLowerCase() !== 'mfrac' && lnum === 0) && (denominateur.tagName.toLowerCase() !== 'mfrac' && ldenom === 0)) {
                if (numerateur.textContent.indexOf('/') !== -1 || denominateur.textContent.indexOf('/') !== -1) {
                    return 'complexe';
                }
                return 'simple';
            }
            numcomp = (numcomp < writeEq._testEnfants(denominateur)) && writeEq._testEnfants(denominateur) || numcomp;
            numcomp = (numcomp < writeEq._testEnfants(numerateur)) && writeEq._testEnfants(numerateur) || numcomp;

            return comp[numcomp];



        },
        _testEnfants: function(elt) {
                var comp = 0;

                if (elt.tagName.toLowerCase() === 'mfrac') {
                    if (writeEq._boolFracComplexity(elt) === 'simple') {
                        comp = 1;
                    } else {
                        comp = 2;
                    }
                } else if (elt.tagName.toLowerCase() === 'msub' || elt.tagName.toLowerCase() === 'msup') {
                    comp = 0;
                } else {
                    var eltenfant = elt.children,
                        i = 0,
                        leltenfant = eltenfant.length;
                    for (; i !== leltenfant; i++) {

                        if (eltenfant[i].tagName.toLowerCase() === 'mfrac') {
                            if (writeEq._boolFracComplexity(eltenfant[i]) === 'simple' || writeEq._boolFracComplexity(eltenfant[i]) === 'fractionnaire') {
                                comp = 1;
                            } else {
                                comp = 2;
                            }
                        }
                    }
                }

                return comp;
            }


            /****** Fin Fraction */


            ,
        _countParent: function(monEquation, tagname) {
            var nodeTag = monEquation.getElementsByTagName(tagname),
                parent = nodeTag[0] && nodeTag[0].parentElement,
                k = 0;
            while (parent && parent.tagname.toLowerCase() !== 'math') {
                k++;
                parent = parent.parentElement;
            }
            return k === 0 && 10000 || k;
        },
        _virguleNemeth: function(msub) {
                var lmsub = msub.length,
                    i = 0;
                for (; i !== lmsub; i++) {
                    var mo = msub[i].getElementsByTagName('mo'),
                        lmo = mo.length,
                        j = 0,
                        bloc, parent, bool;
                    while (j !== lmo) {
                        var elt = mo[j],
                            nextElt = elt.nextElementSibling;
                        parent = elt.parentNode;
                        bloc = document.createElement('mo-bloc');
                        bool = (nextElt && (nextElt.textContent.charCodeAt() === 160 || nextElt.textContent === '-BLANK-'));
                        switch (elt.textContent.charCodeAt()) {
                            case 44:
                                bool && bloc.appendChild(document.createTextNode(mathBraille.caracMath.separateurIndiceExposant.virgule));
                                bool && parent.replaceChild(bloc, elt);
                                nextElt.textContent === '-BLANK-' && parent.removeChild(nextElt);
                                lmo--;
                                j--
                                break;
                            case 59:
                                bool && bloc.appendChild(document.createTextNode(mathBraille.caracMath.separateurIndiceExposant.pointvirgule));
                                bool && parent.replaceChild(bloc, elt);
                                lmo--;
                                j--;
                                break;

                        }
                        j++;
                    }

                }
            }


            // TODO: Exposant indice



            ,
        _newMsupBloc: function(eq) {
            var msup = eq.getElementsByTagName('msup');
            while (msup[0]) {
                var parent = msup[0].parentElement,
                    lvl = writeEq._newNiveauIndiceExposant(msup[0].children[1]),
                    bloc = document.createElement('msup-f'),
                    bloc2 = lvl === -1 && document.createElement('bloc') || document.createElement('blocsubsup-' + lvl);
                bloc.innerHTML = msup[0].innerHTML;
                bloc2.appendChild(bloc.children[1]);
                parent.replaceChild(bloc, msup[0]);
                bloc.appendChild(bloc2);
            }
        },
        _conditionsIndiceNum: function(elt1, elt2, lvl) {
            var funcTrue = ['log', 'sin', 'cos', 'arcsin', 'CO'];
            var funcFalse = ['∫'];
            if (funcFalse.indexOf(elt1.textContent.trimall()) !== -1) return false;
            if (mesFonctions.hasChild(elt2, ['msub', 'msup', 'msubsup', 'mmultiscripts', 'blocIndiceNum'])) return false;
            if (elt1.textContent.trimall().split('').length > 1 && funcTrue.indexOf(elt1.textContent.trimall()) === -1) {
                return false;
            }
            if (lvl !== -1 && lvl.split('').length === 1) {
                if (!elt1.textContent.trimall().isNumeric()) {
                    if (elt2.textContent.trimall().isNumeric()) {
                        return true;
                    }
                }
            }
            return false;
        },
        _newMsubBloc: function(eq) {
            var msub = eq.getElementsByTagName('msub');
            while (msub[0]) {
                var parent = msub[0].parentElement,
                    lvl = writeEq._newNiveauIndiceExposant(msub[0].children[1]),
                    bloc = document.createElement('msub-f'),
                    bloc2 = lvl === -1 && document.createElement('bloc') || document.createElement('blocsubsup-' + lvl);
                bloc2 = (writeEq._conditionsIndiceNum(msub[0].children[0], msub[0].children[1], lvl)) && document.createElement('blocIndiceNum-' + lvl) || bloc2;
                bloc.innerHTML = msub[0].innerHTML;
                bloc2.appendChild(bloc.children[1]);
                parent.replaceChild(bloc, msub[0]);
                bloc.appendChild(bloc2);
            }
        },
        _newNiveauIndiceExposant: function(elt) {
            var tagElt = elt.tagName.split('-')[0],
                exlu = ['none', 'mmultiscripts', 'mprescripts'];
            if (exlu.indexOf(tagElt) !== -1) return -1; //pour msub et msup
            var parent = elt.parentElement,
                tagName = parent.tagName.split('-'),
                enfant = elt,
                lvl = '';

            while (tagName[0].toLowerCase() !== 'math') {

                switch (tagName[0].toLowerCase()) {
                    case 'msup':
                        lvl += 'e';
                        break;
                    case 'msub':
                        lvl += 'i';
                        break;
                    case 'mmultiscripts':
                        var pos = writeEq._positionDansParent(enfant);
                        if (pos === 2 || pos === 5) {
                            lvl += 'e';
                        } else if (pos === 1 || pos === 4) {
                            lvl += 'i';
                        }

                        break;
                    case 'munderover':
                    case 'msubsup':
                        pos = writeEq._positionDansParent(enfant);
                        if (pos === 1) {
                            lvl += 'i';
                        } else if (pos === 2) {
                            lvl += 'e';
                        }
                        break;
                        // case 'mfenced':
                        //     var l = lvl.split('');
                        //     l.pop();
                        //     lvl = l.join('');
                        //     break;
                    default:
                        break;
                }


                enfant = parent;
                parent = parent.parentElement;
                tagName = parent.tagName.split('-');
                // console.log(lvl);
            }
            return (lvl === '') && -1 || lvl;
        },
        _positionDansParent: function(elt) {
            var parent = elt.parentElement,
                enfants = parent.children,
                lenfants = enfants.length,
                i = 0;
            for (; i !== lenfants; i++) {
                if (enfants[i] === elt) return i;
            }
            return -1;
        },
        _newIndiceExposantWrite: function(eq) {
            var indExp = ['msup', 'msub'],
                indice = mathBraille.caracMath.indice,
                exposant = mathBraille.caracMath.exposant,
                indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';
            var ie = mesFonctions.getElementsByContainTagName(eq, ['blocsubsup', 'blocmulti', 'blocIndiceNum', 'blocunderover']),
                lie = ie.length,
                j = lie - 1;

            for (; j !== -1; j--) {
                var elt = ie[j],
                    tagName = elt.tagName.toLowerCase().split('-'),
                    parent = elt.parentNode;
                if (tagName[1] && (!(tagName[0] === 'blocIndiceNum') || optionsBraille.codeBrailleMath === 'fr')) {
                    var boolFrChimie = optionsBraille.chimie && optionsBraille.codeBrailleMath === 'fr' && !mesFonctions.hasParent(elt, ['mmultiscripts-f', 'mmultiscripts']);
                    // var boolFrChimie = optionsBraille.chimie && optionsBraille.codeBrailleMath === 'fr' && !(elt.hasParent(['mmultiscripts-f', 'mmultiscripts']));
                    var txt = tagName[1].split(''),
                        bloc = (elt.children[0].children.length === 0 || indExp.indexOf(tagName[0] !== -1)) && document.createElement(elt.tagName.toLowerCase()) || document.createElement('bloc');
                    bloc.innerHTML = elt.innerHTML;
                    if ((tagName[0] === 'blocunderover')) {
                        exposant = mathBraille.caracMath.suscrit;
                        indice = mathBraille.caracMath.souscrit;
                    } else {
                        indice = !boolFrChimie && mathBraille.caracMath.indice || '';
                        exposant = mathBraille.caracMath.exposant;

                    }
                    bloc = mesFonctions.nbChildrens(bloc.children[0]) > 1 && mesFonctions.block(bloc) || bloc;
                    if (!(elt.previousElementSibling && elt.previousElementSibling.textContent.trim() === '|')) {
                        let k = 0,
                            ltext = txt.length;
                        for (; k !== ltext; k++) {
                            bloc = (txt[k].toLowerCase() === 'e') && mesFonctions.block(bloc, exposant, '') || bloc;
                            bloc = (txt[k].toLowerCase() === 'i') && mesFonctions.block(bloc, indice, '') || bloc;
                            if (optionsBraille.codeBrailleMath === 'fr') {
                                break;
                            }
                        }
                    }
                    var nextElt = elt.nextElementSibling;

                    while (nextElt && nextElt.tagName.toLowerCase() === 'bloc') {
                        nextElt = nextElt.nextElementSibling;

                    }
                    var indicBaseDom = ['mi', 'mo', 'mn'];
                    if (nextElt && indicBaseDom.indexOf(nextElt.tagName.toLowerCase()) !== -1) {
                        if (txt.length > 1) indicateurBase = txt[0];
                        bloc = mesFonctions.block(bloc, '', indicateurBase);
                    }
                    parent.replaceChild(bloc, elt);
                }
            }
        },
        _newBlocBase: function(eq) {
                var bb = eq.getElementsByTagName('blocbase'),

                    indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';

                while (bb[0]) {
                    var parent = bb[0].parentNode,
                        bloc = document.createElement('blocbase-f');
                    bloc.innerHTML = bb[0].innerHTML;

                    bloc = mesFonctions.block(bloc, indicateurBase, '');

                    parent.replaceChild(bloc, bb[0]);
                }
            }

            /** TODO: Radicaux */
            ,
        _newMsqrtBloc: function(eq, tagName) {
            tagName = tagName || 'msqrt';
            var racine = eq.getElementsByTagName(tagName);
            while (racine[0]) {
                var parent = racine[0].parentNode,
                    k = writeEq._radicauxEmboites(racine[0]),
                    bloc = document.createElement(tagName + '-' + k);
                bloc.innerHTML = racine[0].innerHTML;
                parent.replaceChild(bloc, racine[0]);
            }
        },
        _radicauxEmboites: function(racine) {
            var k = 0,
                tagName,
                parent = racine.parentNode;
            while (parent) {
                tagName = parent.tagName.toLowerCase().split('-');
                (tagName[0] === 'msqrt' || tagName[0] === 'mroot') && k++;
                parent = parent.parentNode;
            }
            return k;

        },
        _newMsqrtWrite: function(eq) {
            var racine = mesFonctions.getElementsByContainTagName(eq, 'msqrt'),
                lracine = racine.length,
                i;
            if (racine[0]) {
                i = lracine - 1;
            } else {
                i = -1;
            }
            for (; i !== -1; i--) {
                var elt = racine[i],
                    tagName = elt.tagName.toLowerCase().split('-'),
                    parent = elt.parentNode,
                    bloc = document.createElement('bloc'),
                    enfants = elt.children,
                    radical = mathBraille.caracMath.racine,
                    ordre = mathBraille.caracMath.ordreRadical && mathBraille.caracMath.ordreRadical.repeat(tagName[1]),
                    finRadical = mathBraille.caracMath.finRacine;

                bloc.innerHTML = elt.innerHTML;
                // // français
                if (enfants.length === 1) {
                    if (enfants[0].tagName.toLowerCase() === 'mrow' || enfants[0].tagName.toLowerCase() === 'mpadded') {
                        bloc = mesFonctions.nbChildrens(enfants[0]) > 1 && mesFonctions.block(bloc) || bloc;
                    }
                } else {
                    bloc = mesFonctions.block(bloc);
                }
                // fin fran
                bloc = finRadical && mesFonctions.block(bloc, ordre + radical, ordre + finRadical) || mesFonctions.block(bloc, radical, '');

                parent.replaceChild(bloc, elt);
            }

        },
        _newMrootBloc: function(eq) {
            writeEq._newMsqrtBloc(eq, 'mroot');
        },
        _newMrootWrite: function(eq) {
            var mroot = mesFonctions.getElementsByContainTagName(eq, 'mroot'),
                lroot = mroot.length,
                i;
            if (mroot[0]) {
                i = lroot - 1;
            } else {
                i = -1;
            }
            for (; i !== -1; i--) {
                var elt = mroot[i],
                    tagName = elt.tagName.toLowerCase().split('-'),
                    parent = elt.parentNode,
                    bloc = document.createElement('bloc'),
                    bloccontenu = document.createElement('bloc'),
                    enfants = elt.children,
                    enfant0 = enfants[0],
                    enfant1 = enfants[1],
                    monbool,
                    radical = mathBraille.caracMath.racine,
                    ordre = mathBraille.caracMath.ordreRadical && mathBraille.caracMath.ordreRadical.repeat(tagName[1]),
                    finRadical = mathBraille.caracMath.finRacine,
                    indiceRadical = mathBraille.caracMath.indiceRadical;

                bloccontenu.appendChild(enfant0);

                var child1 = enfant0.children;
                /******  français ******/
                if (elt.nextElementSibling && elt.nextElementSibling.tagName.toLowerCase() !== 'mo') {
                    monbool = true;
                }
                if (elt.previousElementSibling && elt.previousElementSibling.tagName.toLowerCase() !== 'mo') {
                    monbool = true;
                }
                if (child1.length === 1) {
                    if (child1[0].tagName.toLowerCase() === 'mrow' || child1[0].tagName.toLowerCase() === 'mpadded') {
                        bloccontenu = mesFonctions.nbChildrens(child1[0]) > 1 && mesFonctions.block(bloccontenu) || bloccontenu;
                    }
                } else if (child1.length >= 1) {
                    bloccontenu = mesFonctions.block(bloccontenu);
                }
                /******** fin fran *************/

                bloccontenu = finRadical && mesFonctions.block(bloccontenu, radical, '') || mesFonctions.block(bloccontenu, radical, '');
                bloc.appendChild(enfant1);
                bloc.appendChild(bloccontenu);
                bloc = finRadical && mesFonctions.block(bloc, ordre + indiceRadical, ordre + finRadical) || mesFonctions.block(bloc, mathBraille.caracMath.exposant, '');
                bloc = (!finRadical && monbool) && mesFonctions.block(bloc) || bloc;
                parent.replaceChild(bloc, elt);

            }
        },
        _retourChariotMatrice: function(monEquation) {
            var txt, nbcar, close, idx, j, spc = "";
            txt = monEquation.textContent.split('');
            nbcar = txt.indexOf(marqueMat);

            let paraBool = monEquation.textContent.indexOf(marqueRetourLigne + mathBraille.caracMath.parenthese.open.braille()) === -1 && monEquation.textContent.indexOf(marqueRetourLigne + mathBraille.caracMath.crochet.open.braille()) == -1 && monEquation.textContent.indexOf(marqueRetourLigne + mathBraille.caracMath.barre.open.braille()) == -1;

            nbcar !== -1 && txt.splice(nbcar, 1);
            close = txt.indexOf(marqueClose);
            if (close !== -1) {
                txt.splice(close, 1);
                if (paraBool) {
                    nbcar = (nbcar !== -1) && (nbcar - 2) || 0;
                } else {
                    nbcar = (nbcar !== -1) && (nbcar - 1) || 0;
                }
            } else {
                nbcar = (nbcar !== -1) && nbcar || 0;
            }
            j = 0;
            for (; j !== nbcar; j++) {
                spc += espace;
            }
            idx = txt.indexOf(marqueRetourLigne);
            while (idx !== -1) {
                txt.splice(idx, 1, '<br/>' + spc);
                idx = txt.indexOf(marqueRetourLigne, idx + 1);
            }
            return txt.join('');
        },
        _calculEspaceMTD: function(monEquation) {
            var espaceEnTrop = new RegExp(espace + marqueCell + espace, 'g');
            monEquation.textContent = monEquation.textContent.replace(espaceEnTrop, espace + marqueCell)
            var regex = new RegExp(marqueRetourLigne, 'gi'),
                nbligne = monEquation.textContent.match(regex) && (monEquation.textContent.match(regex).length + 1);

            if (nbligne === null) return monEquation.textContent;
            var txt = monEquation.textContent.split(''),
                lcell = [],
                llcell,
                lcol = [],
                llcol,
                posmarque = [],
                marque1 = txt.indexOf(marqueCell),
                marque2 = txt.indexOf(marqueCell, marque1 + 1),
                i, j, l, spc;

            while (marque1 !== -1) {
                l = marque2 - marque1 - 1;
                lcell.push(l);
                posmarque.push(marque2);
                marque1 = txt.indexOf(marqueCell, marque2 + 1);
                marque2 = txt.indexOf(marqueCell, marque1 + 1);
            }
            llcell = lcell.length;
            llcol = llcell / nbligne;
            lcol.length = llcol;
            lcol.fill(0);
            i = 0;
            for (; i !== llcell; i++) {
                (lcell[i] > lcol[i % llcol]) && (lcol[i % llcol] = lcell[i]);
            }
            j = 0;
            for (; j !== llcell; j++) {
                marque2 = posmarque[j];
                l = lcol[j % llcol] - lcell[j];
                spc = "";
                if (l > 0) {
                    for (i = 1; i <= l; i++) {
                        spc += espace;
                    }
                    txt.splice(marque2, 1, spc);
                }
            }
            txt = txt.filter(writeEq._filtremarque);
            return txt.join('');
        },
        _filtremarque: function(element) {
            return element !== marqueCell;
        },
        _indicateurNumerique: function(monEquation) {
            var txt = monEquation.textContent.split('');
            var num = ['⠴', '⠂', '⠆', '⠒', '⠲', '⠢', '⠖', '⠶', '⠦', '⠔'];
            if (num.indexOf(txt[0]) !== -1) {
                txt.splice(0, 0, mathBraille.caracMath.indicateurNumerique.braille());
            }
            var elt = 'BLANK'.braille(),
                sp = txt.indexOf(elt);
            while (sp !== -1) {
                if (num.indexOf(txt[sp + 1]) !== -1) {
                    txt.splice(sp + 1, 0, mathBraille.caracMath.indicateurNumerique.braille());
                }
                sp = txt.indexOf(elt, sp + 1);
            }
            return txt.join('');
        },
        _writeform: function(monEquation) {
            monEquation.textContent = monEquation.textContent.trimall();
            monEquation.textContent = monEquation.textContent.replace(/-EMPTY-/g, '');
            monEquation.textContent = monEquation.textContent.replace(/--/gi, '-');

            monEquation.textContent = monEquation.textContent.braille();
            monEquation.textContent = writeEq._petitsSoucis(monEquation);
            // console.log(monEquation.innerHTML);

            (!optionsBraille.matriceLineaire && !hardmat) && (monEquation.innerHTML = writeEq._calculEspaceMTD(monEquation));
            // console.log(monEquation.innerHTML);

            monEquation.innerHTML = writeEq._retourChariotMatrice(monEquation);

            if (optionsBraille.codeBrailleMath === 'nemeth') {
                monEquation.innerHTML = writeEq._indicateurNumerique(monEquation);
            }

            monEquation.innerHTML = (optionsBraille.coupureFormule !== 0) && writeEq._coupureFormule(monEquation, optionsBraille.coupureFormule) || monEquation.innerHTML;
        },
        _petitsSoucis: function(monEquation) {
            let txt = monEquation.textContent.replace(/⠈⠖⠖/g, '⠈⠰⠖⠆⠖');
            txt = txt.replace(/⠈⠤⠤/g, '⠈⠰⠤⠆⠤');
            return txt;
        },
        _coupureFormule: function(monEquation, long) {
            if (monEquation.innerHTML.indexOf('<br') !== -1) {
                return monEquation.innerHTML;
            }
            long = parseInt(long);
            let texte = monEquation.textContent;
            let texteCoupe = '';
            let textePlus = '';
            let cesure = mathBraille.caracMath.coupureFormule.braille() + '<br />';
            if ((long !== 0) || (long - 1 > 0)) {
                let nbSplit = Math.floor(texte.length / (long - 1)) + 1;
                for (let i = 0; i !== nbSplit; i++) {
                    textePlus = (i !== nbSplit - 1) && texte.slice(i * (long - 1), (i + 1) * (long - 1)) || texte.slice(i * (long - 1));
                    texteCoupe += (i !== nbSplit - 1) && (textePlus + cesure) || (textePlus);
                }
            }

            return texteCoupe;
        }
    };
    exports.Mathml2braille = mbraille;
    exports.Brailledirect = brailledirect;
})(this);
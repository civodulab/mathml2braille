/**
 * mathml2braille
 * Convertit les équations mathML en Braille Unicode
 * @author Ludovic BAL <ludo.bal62@gmail.com>
 * @version 1.0
 * 
 */
(function (w, d, undefined) {
    'use strict';
    String.prototype.isNumeric = function () {
        if (Math.sign(this) === -1) return false;
        return !isNaN(parseFloat(this)) && isFinite(this);
    }
    String.prototype.trimCar = function (car) {
        let deb = new RegExp('^' + car);
        let fin = new RegExp(car + '$');
        return this.replace(deb, '').replace(fin, '');
    }
    Object.prototype.hasParent = function (parentTagname) {
        parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
        var l = parentTagname.length,
            parent,
            i = 0;
        for (; i !== l; i++) {
            parent = this.parentNode;
            while (parent && parent.tagName !== 'math') {
                if (parent.tagName === parentTagname[i]) return true;
                parent = parent.parentNode;
            }
        }
        return false;
    }


    Object.prototype.hasChild = function (parentTagname) {
        parentTagname = Array.isArray(parentTagname) && parentTagname || [parentTagname];
        var l = parentTagname.length,
            i = 0;
        for (; i !== l; i++) {
            var node = this.getElementsByTagName(parentTagname[i]);
            if (node[0] || this.tagName === parentTagname[i]) return true;
        }
        return false;
    }


    Object.prototype.nbChildrens = function () {
        return this.querySelectorAll('*').length;
    }



    String.prototype.trimall = function () {
        return this.replace(/\s*/gi, '');
    };


    /**
     * String Prototype braille
     * Convertit texte en braille unicode
     * @param {array} maTable optionel
     * @returns {string}
     */

    String.prototype.braille = function (maTable) {
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
                return 'caractère ' + txt[i] + ' non défini';
            }
            maTable && txt.splice(i, 1, brailleUnicode[maTable[txt[i]]]) || txt.splice(i, 1, brailleUnicode[txt[i]]);
        }
        return String.fromCharCode.apply(String, txt);
    };

    /**
     * getElementsByContainTagName
     * 
     * @param {string} tag 
     * @returns {array}
     */
    Object.prototype.getElementsByContainTagName = function (tag) {
        tag = Array.isArray(tag) && tag || [tag];
        var a = [],
            n = this.getElementsByTagName('*'),
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
    };

    /**
     * block
     * 
     * @param {string} openBloc 
     * @param {string} endBloc 
     * @returns {string}
     */
    Object.prototype.block = function (openBloc, endBloc) {
        (openBloc === undefined) && (openBloc = mathBraille.caracMath.blocks.open);
        (endBloc === undefined) && (endBloc = mathBraille.caracMath.blocks.close);
        var df = d.createElement('bloc'),
            blocOuverture = d.createElement('blocOuverture'),
            blocFermeture = d.createElement('blocFermeture');
        blocOuverture.appendChild(d.createTextNode(openBloc));
        blocFermeture.appendChild(d.createTextNode(endBloc));

        df.appendChild(blocOuverture);
        df.appendChild(this);
        df.appendChild(blocFermeture);
        return df;
    };

    // var langueDoc = d.getElementsByTagName('html')[0].getAttribute('lang') || d.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'fr',
    var mathBraille = {},
        /* variables pour les matrices */
        braillemarqueCell = '-124578-',
        braillemarqueMat = '-1234567-',
        braillemarqueClose = '-1278-',
        braillemarqueRetourLigne = '-12345678-',
        marqueCell = braillemarqueCell.braille(),
        marqueMat = braillemarqueMat.braille(),
        marqueClose = braillemarqueClose.braille(),
        marqueRetourLigne = braillemarqueRetourLigne.braille(),
        espace = String.fromCharCode(10240),
        /* fin variables matrice */
        mathml = function (clmath) {
            var options = {
                'coupureFormule': 0,
                'codeBrailleMath': 'fr',
                'codeSysteme': 'SI',
                'matriceLineaire': false,
                'maxCaracCell': 10, //correspond à peu près au nombre limite de carac dans la cellule avant de basculer en mode linéaire
                'chimie': false
            };
            if (clmath && typeof clmath === 'object') {
                arguments[1] = clmath;
                clmath = undefined;
            }

            if (arguments[1] && typeof arguments[1] === "object") {
                options = _extendDefaults(options, arguments[1]);
            }
            var mesFormules = clmath && d.querySelectorAll(clmath) || d.getElementsByContainTagName('math'),
                l = mesFormules.length,
                i = 0;
            for (; i !== l; i++) {
                mathBraille = allVar[options.codeBrailleMath].mathBraille;
                mesFormules[i].setAttribute('aria-hidden', true);
                var parent = mesFormules[i].parentNode,
                    m = d.createElement('math'),
                    maForm = d.createElement('span');
                m.innerHTML = mesFormules[i].innerHTML;
                _supprimeprefix(m);
                _superflus(m);
                _inutile(m);
                _tableSeul(m);
                _mspace(m);
                if (options.codeBrailleMath === 'nemeth') {
                    _numDecimalNemeth(m, options);
                    _espaceNemeth(m);
                }

                var hardmat = _boolHardMatrice(m, options);
                _ajoutmfenced(m);

                // résolution problèmes blocs
                _pbBlocs(m); // cas particulier de blocs (limite, cosinus, sinus, etc.)
                _pbIntegrale(m);

                // Note: mes fonctions
                /*
                NEW
                ajout de balises descriptives                
                */
                _newMfracBloc(m);
                _newMsqrtBloc(m);
                _newMrootBloc(m);

                _reecritureMultiscripts(m);
                _newMmultiscriptsBloc(m);


                _newMsubsupBloc(m);
                _newMunderover(m);
                // console.log(m.innerHTML);

                _newMsupBloc(m);
                _newMsubBloc(m);

                _newPlacementMultiscript(m, options);


                /*
                NEW réécriture
                écriture de l'équation selon les nouvelles balises
                */

                _newMfracWrite(m);
                _newMsqrtWrite(m);
                _newMrootWrite(m);
                _newIndiceExposantWrite(m, options);

                _newBlocBase(m);

                // _newMmultiscriptsWrite(m);

                // _mmultiscripts(m, options);
                // _mfrac(m, options);
                // _mroot(m);
                // _msqrt(m, options);
                _mover(m, 'mover', options);
                _munder(m, options);
                // _msubsup(m, options);
                // _munderover(m);
                // _msupORmsub(m, options);
                // _msup(m, options);
                // _msub(m, options);
                // _msubsup(m, options);
                // _munderover(m);
                _mfenced(m, options, hardmat);
                console.log(m.innerHTML);

                _mn(m, options);

                _mo(m);

                _mi(m);
                _mtext(m);

                (options.matriceLineaire || hardmat) && _matriceLineaire(m);
                _writeform(m, options, hardmat);
                maForm.innerHTML = m.innerHTML;
                maForm.classList.add('js-mathmlConverti');
                //  maForm.appendChild(m);

                parent.insertBefore(maForm, mesFormules[i].nextSibling);

            }
            // Note: à supprimer à la fin
            stat();
        },
        brailledirect = function (maClass, codeBrailleMath) {
            codeBrailleMath = codeBrailleMath && codeBrailleMath || 'fr';
            var tbf6 = d.querySelectorAll(maClass),
                l = tbf6.length,
                i = 0;
            for (; i !== l; i++) {
                var maTable = allVar[codeBrailleMath].TBdbt;
                tbf6[i].textContent = tbf6[i].textContent.braille(maTable);
            }
        };
    //Note: A supprimer à la fin 
    function stat() {
        var converti = document.querySelectorAll('.js-mathmlConverti'),
            // braille = document.querySelectorAll('.mathbraille'),
            lconverti = converti.length,
            g = 0,
            b = 0,
            pourcent = 0,
            i = 0;
        for (; i !== lconverti; i++) {
            var parent = converti[i].parentElement,
                math2 = parent.querySelector('.mathbraille2'),
                math = parent.querySelector('.mathbraille'),
                txt = converti[i].innerHTML.replace(/⠐(<br[^>]+\/>|<br[^>]+><\/br>)/g, '');
            txt = txt.replace(/(<br[^>]+\/>|<br[^>]+><\/br>)/g, '');

            if (math.textContent !== '') {
                if (txt === math.textContent.trimall()) {
                    parent.classList.add('good');
                    g++
                } else if (math2 && (math2.textContent.trimall() === txt)) {
                    parent.classList.add('good');
                    g++
                } else {
                    parent.classList.add('bad');
                    b++
                }
            }

        }
        pourcent = Math.round(100 * g / (b + g));
        d.getElementById('stat').innerHTML = g + ' équations bonnes sur ' + (b + g) + ' - ' + pourcent + '%';
    }
    /************************************/
    function _mspace(monEquation) {
        var space = monEquation.getElementsByTagName('mspace');
        while (space[0]) {
            var parent = space[0].parentNode;
            var mtext = d.createElement('mi');
            mtext.textContent = ' ';
            parent.replaceChild(mtext, space[0]);
        }
    }


    function _extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function _numDecimalNemeth(monEquation, o) {
        var mo = monEquation.getElementsByTagName('mo'),
            lmo = mo.length,
            i = 0;
        for (; i !== lmo; i++) {
            var elt = mo[i];
            if (elt.textContent.trim() === ',' && o.codeSysteme === 'SI') {
                if (elt.previousElementSibling.tagName === 'mn' && elt.nextElementSibling.tagName === 'mn') {
                    elt.textContent = '.';
                } else if (elt.nextElementSibling.textContent.charCodeAt() !== 160) {
                    var bloc = d.createElement('space-bloc'),
                        parent = elt.parentNode;
                    bloc.appendChild(d.createTextNode(mathBraille.caracMath.espaceInsecable));
                    parent.insertBefore(bloc, elt.nextSibling);
                }
            }
        }
    }


    function _espaceNemeth(monEquation) {
        var bloc,
            mo = monEquation.getElementsByTagName('mo'),
            lmo = mo.length,
            i = 0;
        while (i !== lmo) {
            var boolparent = mo[i].hasParent(['msub', 'msup']);
            // var boolparent=false;
            if (mo[i].textContent.charCodeAt() === 160 && !boolparent) {
                var parent = mo[i].parentNode;
                bloc = d.createElement('space-bloc');
                bloc.appendChild(d.createTextNode(mathBraille.caracMath.espaceInsecable));
                parent.replaceChild(bloc, mo[i]);
                lmo--;
                i--;
            }
            i++;
        }
    }

    function _pbIntegrale(monEquation) {
        var subsup = monEquation.getElementsByTagName('msubsup'),
            lsubsup = subsup.length,
            i = 0;
        for (; i !== lsubsup; i++) {
            var enfants = subsup[i].children,
                next = subsup[i].nextElementSibling,
                parent = subsup[i].parentNode;

            if (enfants[0].textContent.charCodeAt() === 8747 && next.tagName === 'mn') {
                parent.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.open), subsup[i].nextSibling);
                while (next && next.textContent !== 'd') {
                    // bloc.appendChild(next);
                    next = next.nextElementSibling;
                }
                if (next && next.nextElementSibling.tagName === 'mi') {
                    parent.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.close), next);

                }
                // parent.insertBefore(bloc.block(),subsup[i].nextSibling);
            }
        }
    }

    function _pbBlocs(monEquation) {
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
                    while (parent.tagName !== 'munder') {
                        parent = parent.parentNode;
                    }
                    if (parent.nextElementSibling.tagName === 'mfrac') {
                        var frac = parent.nextElementSibling;
                        parent = parent.parentNode;
                        var bloc = d.createElement('mfrac');
                        bloc.innerHTML = frac.innerHTML;
                        parent.replaceChild(bloc.block(), frac);
                    }
                    continue;

                } else if (zap.indexOf(parent.tagName) === -1) {
                    parent = mi[i];
                }
                first = parent.nextElementSibling;
                last = first;
                if ((first && first.tagName === 'mfenced') || (first && first.textContent.indexOf('(') !== -1) || (first && first.nbChildrens() > 1)) continue;

                if (parent.nextElementSibling.tagName === 'mfrac') {
                    frac = parent.nextElementSibling;
                    parent = parent.parentNode;
                    bloc = d.createElement('mfrac');
                    bloc.innerHTML = frac.innerHTML;
                    parent.replaceChild(bloc.block(), frac);
                    continue;
                }
                while (last && (last.tagName !== 'mo' && last.textContent.trimall().length === 1)) {
                    lastprevious = last;
                    last = last.nextElementSibling;
                }

                if (last) {
                    last = last.previousElementSibling;
                    parent.parentNode.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.open), first);
                    parent.parentNode.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.close), last.nextSibling);
                } else if (lastprevious) {
                    parent.parentNode.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.open), first);
                    parent.parentNode.insertBefore(d.createTextNode(mathBraille.caracMath.blocks.close), lastprevious.nextSibling);
                }

            }

        }
    }

    function _tableSeul(monEquation) {
        var tbl = monEquation.getElementsByTagName('mtable'),
            bloc = d.createElement('mtable-bloc');
        if (tbl.length > 0 && monEquation.children.length === 1) {
            var Tagenfant = monEquation.children[0].tagName,
                parent = tbl[0].parentNode;
            if (Tagenfant.toLowerCase() === 'mtable') {
                var tr = tbl[0].getElementsByTagName('mtr'),
                    ltr = tr.length,
                    i = 0;
                for (; i !== ltr; i++) {
                    (i !== ltr - 1) && tr[i].appendChild(d.createTextNode(braillemarqueRetourLigne));
                }
                while (tr[0]) {
                    bloc.appendChild(tr[0]);
                }
                parent.replaceChild(bloc, tbl[0]);
            }
        }
    }

    function _boolHardMatrice(monEquation, options) {
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
        if (tailleCell >= options.maxCaracCell) return true;
        return false;
    }

    function _supprimeprefix(monEquation) {
        var mesDom = monEquation.getElementsByTagName('*'),
            l = mesDom.length,
            i = 0;
        for (; i !== l; i++) {
            var tag = mesDom[i].tagName.split(':'),
                parent = mesDom[i].parentNode;
            if (tag.length > 1) {
                var tmp = d.createElement(tag[1]);
                tmp.innerHTML = mesDom[i].innerHTML;
                parent.replaceChild(tmp, mesDom[i]);
            }
        }
    }

    function _inutile(monEquation) {
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
    }

    function _superflus(monEquation) {
        var mesTags = ['mstyle'],
            l = mesTags.length,
            i = 0,
            df = d.createDocumentFragment(),
            parent;
        for (; i !== l; i++) {
            var superflus = monEquation.getElementsByTagName(mesTags[i]);
            while (superflus[0]) {
                var enfants = superflus[0].children;
                parent = superflus[0].parentNode;
                while (enfants[0]) {
                    df.appendChild(enfants[0]);
                }
                parent.replaceChild(df, superflus[0]);
            }
        }
    }


    function _ajoutmfenced(monEquation) {

        var mo = monEquation.querySelectorAll('mo');
        const paraOpen = ['(', '[', '{', '|', '‖'];
        const paraClose = [')', ']', '}', '|', '‖'];
        mo.forEach(m => {
            let fenced = d.createElement('mfenced');
            let parent = m.parentNode;
            let fermeture;
            let i = paraOpen.indexOf(m.textContent);

            if ((i !== -1 && m.nextElementSibling) && (m.nextElementSibling.tagName === 'mtable' || m.nextElementSibling.hasChild('mtable'))) {
                fenced.setAttribute('open', paraOpen[i]);
                fenced.setAttribute('close', '');
                fenced.appendChild(m.nextElementSibling);
                if (m.nextElementSibling && m.nextElementSibling.textContent === paraClose[i]) {
                    fenced.setAttribute('close', paraClose[i]);
                    parent.removeChild(m.nextElementSibling);
                }
                parent.replaceChild(fenced, m);
            }
        })

    }

    function _ajoutmfenced_old(monEquation) {
        var tbl = monEquation.getElementsByTagName('mtable'),
            ltbl = tbl.length,
            i = 0,
            fenced,
            boolfenced,
            open,
            close,
            parent;
        for (; i !== ltbl; i++) {
            boolfenced = _boolMfenced(tbl[i]);

            if (!boolfenced) { //recherche parenthèse
                parent = tbl[i].parentNode;

                while (parent.children.length <= 1 && parent.tagName.toLowerCase() !== 'math') {
                    parent = parent.parentNode;
                }
                fenced = d.createElement('mfenced');

                if (parent.children.length === 3) {
                    open = parent.children[0].textContent;
                    close = parent.children[2].textContent;
                    parent.removeChild(parent.children[0]);
                    parent.removeChild(parent.children[1]);
                    fenced.setAttribute('open', open);
                    fenced.setAttribute('close', close);
                    fenced.appendChild(parent.children[0]);
                    parent.appendChild(fenced);
                } else if (parent.children.length === 2) {
                    if (parent.children[0].tagName === 'mo') {
                        open = parent.children[0].textContent;
                        fenced.setAttribute('open', open);
                        fenced.setAttribute('close', '');
                        parent.removeChild(parent.children[0]);
                        fenced.appendChild(parent.children[0]);
                        parent.appendChild(fenced);
                    } else if (parent.children[1].tagName === 'mo') {
                        close = parent.children[1].textContent;
                        fenced.setAttribute('open', '');
                        fenced.setAttribute('close', close);
                        parent.removeChild(parent.children[1]);
                        fenced.appendChild(parent.children[0]);
                        parent.appendChild(fenced);
                    }
                }
            }

        }
    }

    function _boolMfenced(table) {
        var parent = table.parentElement;
        var previousParent = parent.previousElementSibling;
        var para = ['(', '{', '['];
        var eltAvant = table.previousElementSibling;
        // console.log(eltAvant);

        while (parent.tagName.toLowerCase() !== 'math') {
            if (parent.tagName.toLowerCase() === 'mfenced') {
                return true;
            } else if (!eltAvant) {
                if (previousParent && (para.indexOf(previousParent.textContent) === -1)) {
                    return true;
                }
            } else if (eltAvant && (para.indexOf(eltAvant.textContent) === -1)) {
                return true;
            } else if (previousParent && (para.indexOf(previousParent.textContent) === -1)) {
                return true;
            }
            parent = parent.parentNode;

        }
        return false;
    }

    function _boolMfenced_old(table) {
        var parent = table.parentNode;
        while (parent.tagName.toLowerCase() !== 'math') {
            if (parent.tagName.toLowerCase() === 'mfenced') {
                return true;
            } else {
                parent = parent.parentNode;
            }
        }
        return false;
    }

    // TODO: multiscript

    function _reecritureMultiscripts(eq) {
        var multis = eq.getElementsByTagName('mmultiscripts'),
            lmultis = multis.length,
            i = 0;
        for (; i !== lmultis; i++) {
            var multi = multis[i].children,
                elts = [];
            if (multi[1].tagName.toLowerCase() === 'mprescripts') {
                elts.push(d.createElement('none')); //post1 indice
                elts.push(d.createElement('none')); //post2 exposant
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
            for (var j = 0; j < elts.length; j++) {
                multis[i].appendChild(elts[j]);
            }
        }
    }




    function _newMmultiscriptsBloc(eq) {
        var multiscripts = eq.getElementsByTagName('mmultiscripts'),
            lmultiscripts = multiscripts.length,
            i = 0;
        for (; i !== lmultiscripts; i++) {
            var elts = multiscripts[i].children,
                monMulti = d.createElement('mmultiscripts');

            for (var k = 0; k !== elts.length; k++) {

                var lvl = _newNiveauIndiceExposant(elts[k]),
                    id = d.createElement(elts[k].tagName);
                id.innerHTML = elts[k].innerHTML;

                if (lvl !== -1) {
                    var bloc = d.createElement('blocmulti-' + lvl);
                    if (_conditionsIndiceNum(elts[0], elts[1], lvl) && k === 1) {
                        bloc = d.createElement('blocIndiceNum-' + lvl);
                    }
                    bloc.appendChild(id);
                    monMulti.appendChild(bloc);
                } else {
                    if (k === 0) {
                        bloc = d.createElement('blocbase');
                        bloc.appendChild(id);
                        monMulti.appendChild(bloc);
                    } else {
                        monMulti.appendChild(id);
                    }


                }

            }
            multiscripts[i].innerHTML = monMulti.innerHTML;


        }
    }

    function _newPlacementMultiscript(eq, o) {
        var multiscripts = eq.getElementsByTagName('mmultiscripts');
        while (multiscripts[0]) {
            var parent = multiscripts[0].parentElement,
                bloc = d.createElement('mmultiscripts-f'),
                enfants = multiscripts[0].children;
            if (o.chimie) {
                bloc.appendChild(enfants[0]);
                bloc.appendChild(d.createTextNode(mathBraille.caracMath.point6)); // insertion pt 6
                bloc.appendChild(enfants[3]);
                bloc.appendChild(d.createTextNode(mathBraille.caracMath.point6)); // insertion pt 6
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
                bloc = bloc.block();
            }
            // console.log(bloc.innerHTML);
            parent.replaceChild(bloc, multiscripts[0]);
        }


    }

    function _newMmultiscriptsWrite(eq) {
        var multiscripts = eq.getElementsByTagName('mmultiscripts');


    }



    function _mmultiscripts(monEquation, o) {
        var multiscripts = monEquation.getElementsByTagName('mmultiscripts'),
            monbool = (multiscripts.length > 1),
            boolparent = false,
            indice = mathBraille.caracMath.indice,
            exposant = mathBraille.caracMath.exposant,
            baseNemethPrevious,
            baseNemeth = mathBraille.caracMath.point5;

        // var lmulti;
        var lmulti = 0;

        while (multiscripts[0]) {
            // lmulti = multiscripts.length - 1;

            var elt = multiscripts[lmulti].children,
                parent = multiscripts[lmulti].parentNode,
                df = d.createElement('mmultiscripts-block'),
                base = elt[0],
                post1 = elt[1].children[0],
                post2 = elt[2].children[0],
                pre1 = elt[4].children[0],
                pre2 = elt[5].children[0];
            indice = o.chimie && mathBraille.caracMath.point6 + indice || indice;
            exposant = o.chimie && mathBraille.caracMath.point6 + exposant || exposant;
            boolparent = multiscripts[lmulti].hasChild(['mmultiscripts']);
            multiscripts[lmulti].hasParent('msub') && (baseNemeth = indice);
            multiscripts[lmulti].hasParent('msup') && (baseNemeth = exposant);

            // écriture
            o.chimie && df.appendChild(base);

            if (pre1.tagName.toLowerCase() !== 'none') {
                df.appendChild(d.createTextNode(indice));
                baseNemethPrevious = boolparent && indice || baseNemeth;
                (pre1.nbChildrens() > 1) && df.appendChild(pre1.block()) || df.appendChild(pre1);
                // pre1.hasChild(['msup', 'msub']) && _msupORmsub(pre1, o, 'indice');
            }
            if (pre2.tagName.toLowerCase() !== 'none') {
                df.appendChild(d.createTextNode(exposant));
                baseNemethPrevious = boolparent && exposant || baseNemeth;
                (pre2.nbChildrens() > 1) && df.appendChild(pre2.block()) || df.appendChild(pre2);

                // pre2.hasChild(['msup', 'msub']) && _msupORmsub(pre2, o, 'exposant');

            }
            (o.codeBrailleMath === 'nemeth') && df.appendChild(d.createTextNode(baseNemeth));
            !o.chimie && df.appendChild(base);
            if (post1.tagName.toLowerCase() !== 'none') {
                // !post1.textContent.trimall().isNumeric() && df.appendChild(d.createTextNode(indice));
                (post1.nbChildrens() > 1) && df.appendChild(post1.block()) || df.appendChild(post1);
                // post1.hasChild(['msup', 'msub']) && _msupORmsub(post1, o, 'indice');
            }
            if (post2.tagName.toLowerCase() !== 'none') {
                // df.appendChild(d.createTextNode(exposant));
                (post2.nbChildrens() > 1) && df.appendChild(post2.block()) || df.appendChild(post2);
                // post2.hasChild(['msup', 'msub']) && _msupORmsub(post2, o, 'exposant');

            }
            baseNemeth = baseNemethPrevious;

            df = monbool && df.block() || df;
            parent.replaceChild(df, multiscripts[lmulti]);
        }
    }

    function _mfenced(monEquation, options, hardmat) {
        var fenced = monEquation.getElementsByTagName('mfenced'),
            open,
            close,
            sep,
            mtable,
            parent,
            block;
        while (fenced[0]) {
            block = d.createElement('mfenced-block');
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
                    lenfants = enfants.length,
                    i = 0;
                for (; i !== lenfants - 1; i++) {
                    s[i] = s[i] || slast;
                    enfants[i].appendChild(d.createTextNode(s[i]));
                    slast = s[i] && s[i];
                }
            }
            block.innerHTML = fenced[0].innerHTML;
            var monBool = mtable.length !== 0 && (options.matriceLineaire || hardmat);

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
            (!options.matriceLineaire && !hardmat) && _matriceBlock(open, close, block);
            parent.replaceChild(block.block(open, close), fenced[0]);
        }
    }


    function _matriceBlock(open, close, block) {
        var tbl = block.getElementsByTagName('mtable'),
            ltbl = tbl.length,
            parent, txtNode,
            tr, td, ltd, ltr,
            j, k,
            i = 0;
        for (; i !== ltbl; i++) {
            parent = tbl[i].parentNode;
            parent.insertBefore(d.createTextNode(braillemarqueMat), tbl[i]);
            close && parent.insertBefore(d.createTextNode(braillemarqueClose), tbl[i]);
            tr = tbl[i].getElementsByTagName('mtr');
            ltr = tr.length;
            j = 0;
            for (; j !== ltr; j++) {
                txtNode = close && (close + braillemarqueRetourLigne + open) || braillemarqueRetourLigne;
                (j !== ltr - 1) && tbl[i].insertBefore(d.createTextNode(txtNode), tr[j].nextSibling);
                td = tr[j].getElementsByTagName('mtd');
                ltd = td.length;
                k = 0;
                for (; k !== ltd; k++) {
                    parent = td[k].parentNode;
                    (td[k].textContent.trim().length === 0) && td[k].appendChild(d.createTextNode(mathBraille.caracMath.matrice.caseVide));
                    (k !== ltd - 1) && parent.insertBefore(d.createTextNode(mathBraille.caracMath.espaceInsecable), td[k].nextSibling);
                    parent.insertBefore(d.createTextNode(braillemarqueCell), td[k].nextSibling);
                    parent.insertBefore(d.createTextNode(braillemarqueCell), td[k]);
                }
            }
        }
        return block;
    }

    function _matriceLineaire(monEquation) {
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
                (j !== ltr - 1) && tr[j].appendChild(d.createTextNode(mathBraille.caracMath.matrice.sepLigne + mathBraille.caracMath.espaceInsecable));
            }
            td = tbl[i].getElementsByTagName('mtd');
            ltd = td.length;
            k = 0;
            for (; k !== ltd; k++) {
                (td[k].textContent.trim().length === 0) && td[k].appendChild(d.createTextNode(mathBraille.caracMath.matrice.caseVide));
                (k !== ltd - 1) && td[k].appendChild(d.createTextNode(mathBraille.caracMath.espaceInsecable));
            }
        }
    }

    // TODO: subsup

    function _newMsubsupBloc(eq, tag) {
        tag = tag && tag || 'msubsup';
        var msubsup = eq.getElementsByTagName(tag),
            nomBloc = (tag === 'munderover') && 'blocunderover-' || 'blocsubsup-',
            indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';
        while (msubsup[0]) {
            var parent = msubsup[0].parentNode,
                bloc = d.createElement(tag + '-f'),
                lvlsub = _newNiveauIndiceExposant(msubsup[0].children[1]),
                lvlsup = _newNiveauIndiceExposant(msubsup[0].children[2]),
                blocsup = lvlsup === -1 && d.createElement('bloc') || d.createElement(nomBloc + lvlsup),
                blocsub = lvlsub === -1 && d.createElement('bloc') || d.createElement(nomBloc + lvlsub);
            blocsub = (_conditionsIndiceNum(msubsup[0].children[0], msubsup[0].children[1], lvlsub)) && d.createElement('blocIndiceNum-' + lvlsub) || blocsub;
            blocsup.appendChild(msubsup[0].children[2]);
            blocsub.appendChild(msubsup[0].children[1]);
            bloc.appendChild(msubsup[0].children[0]);
            bloc.appendChild(blocsub);
            bloc.appendChild(blocsup);
            bloc = bloc.block('', indicateurBase);
            parent.replaceChild(bloc, msubsup[0])
        }
    }


    // function _msubsup(monEquation, o, tagName) {
    //     tagName = tagName || 'msubsup';
    //     var msubsup = monEquation.getElementsByTagName(tagName),
    //         indice = mathBraille.caracMath.indice,
    //         exposant = mathBraille.caracMath.exposant;
    //     while (msubsup[0]) {
    //         var elt = msubsup[0].children,
    //             parent = msubsup[0].parentNode,
    //             sep1 = d.createTextNode(indice),
    //             sep2 = d.createTextNode(exposant),
    //             df = d.createElement(tagName + 'bloc');

    //         sep1 = (o && o.chimie) && d.createTextNode('') || sep1;
    //         df.appendChild(elt[0]);
    //         (tagName === 'munderover') && df.appendChild(sep1.cloneNode());
    //         df.appendChild(sep1);
    //         elt[0].hasChild(['msub', 'msup']) && _msupORmsub(elt[0], o, 'indice');
    //         (elt[0].children.length > 1) && df.appendChild(elt[0].block()) || df.appendChild(elt[0]);
    //         (tagName === 'munderover') && df.appendChild(sep2.cloneNode());
    //         df.appendChild(sep2);
    //         elt[0].hasChild(['msub', 'msup']) && _msupORmsub(elt[0], o, 'exposant');
    //         (elt[0].children.length > 1) && df.appendChild(elt[0].block()) || df.appendChild(elt[0]);

    //         parent.replaceChild(df, msubsup[0]);

    //     }
    // }

    function _majus(monEquation, tagName) {

        var mn = monEquation.getElementsByTagName(tagName),
            l = mn.length,
            i = 0;
        for (; i !== l; i++) {
            // mn[i].textContent.trimall().majusculeBraille(mathBraille.caracMath.majuscule)
            var num = mn[i].textContent.length > 1 && mn[i].textContent.trim().split('') || mn[i].textContent.split(''),
                carac = '',
                lnum = num.length,
                j = 0;
            mn[i].textContent = '';
            for (; j < lnum; j++) {

                carac = mathBraille.caracDec[num[j].charCodeAt()] || num[j];

                mn[i].textContent += carac;
            }
        }
    }

    function _mo(monEquation) {
        _majus(monEquation, 'mo');
    }

    function _mtext(monEquation) {
        _majus(monEquation, 'mtext');
    }

    function _mn(monEquation, o) {
        if (o.codeBrailleMath === 'ueb') {
            var moNum = [',', '.'];
            var mn = monEquation.getElementsByTagName('mn'),
                l = mn.length,
                i = 0;
            for (; i !== l; i++) {
                var parent = mn[i].parentNode;
                var moAvant = mn[i].previousElementSibling;
                if (!moAvant) {
                    parent.insertBefore(d.createTextNode(mathBraille.caracMath.indicateurNumerique), mn[i]);
                } else if (moAvant && moNum.indexOf(moAvant.textContent.trim()) === -1) {
                    parent.insertBefore(d.createTextNode(mathBraille.caracMath.indicateurNumerique), mn[i]);
                }

            }

        }
        _majus(monEquation, 'mn');

    }

    function _mi(monEquation) {
        _majus(monEquation, 'mi');
    }

    function _mover(monEquation, tagName, options) {

        tagName = tagName || 'mover';
        var mover = monEquation.getElementsByTagName(tagName),
            monbool = false;
        while (mover[0]) {
            var tbl = mover[0].getElementsByTagName('mtable');
            if (tbl.length !== 0) {
                _tableUnder(mover[0]);
            }
            var bloc = d.createElement(tagName + 'bloc'),
                parent = mover[0].parentNode,
                elt = mover[0].children,
                carCode = String(elt[1].textContent.trim().charCodeAt()),
                sep = '',
                myArray = Object.keys(mathBraille.caracDec.susouscrit);

            if (myArray.indexOf(carCode) !== -1) {
                if (tagName === 'munder') {
                    bloc.appendChild(d.createTextNode(mathBraille.caracMath.majuscule));
                }
                bloc.appendChild(d.createTextNode(mathBraille.caracDec.susouscrit[carCode]));
                bloc.appendChild(elt[0]);
            } else {
                var enfant1 = elt[0],
                    enfant2 = elt[1];
                switch (tagName) {
                    case 'mover':
                        sep = mathBraille.caracMath.suscrit;
                        options.chimie && (sep = '');
                        break;
                    case 'munder':
                        sep = mathBraille.caracMath.souscrit;
                        sep = options.chimie && mathBraille.caracMath.point6 + sep || sep;
                        break;
                        // case 'msup':
                        //     sep = mathBraille.caracMath.exposant;
                        //     break;
                        // case 'msub':
                        //     sep = (enfant1.textContent.trim() !== '|') && mathBraille.caracMath.indice || sep;
                        //     options.chimie && (sep = '');
                        //     break;

                    case 'mroot':
                        if (mover[0].nextElementSibling && mover[0].nextElementSibling.tagName !== 'mo') {
                            monbool = true;
                        }
                        sep = mathBraille.caracMath.racine;
                        enfant1 = elt[1];
                        enfant2 = elt[0];
                        bloc.appendChild(d.createTextNode(mathBraille.caracMath.exposant));
                        break;
                }

                (enfant1.nbChildrens() > 1) && bloc.appendChild(enfant1.block()) || bloc.appendChild(enfant1);
                bloc.appendChild(d.createTextNode(sep));
                (enfant2.nbChildrens() > 1) && bloc.appendChild(enfant2.block()) || bloc.appendChild(enfant2);
            }
            bloc = monbool && bloc.block() || bloc;
            parent.replaceChild(bloc, mover[0]);
        }
    }

    function _tableUnder(under) {
        var bloc = d.createElement('mrow'),
            tbl = under.getElementsByTagName('mtable'),
            tr = tbl[0].getElementsByTagName('mtr'),
            ltr = tr.length,
            j = 0;

        for (; j !== ltr; j++) {
            (j !== ltr - 1) && tr[j].appendChild(d.createTextNode('-2-'));
        }
        var parent = tbl[0].parentNode;
        while (tr[0]) {
            bloc.appendChild(tr[0]);
        }

        parent.replaceChild(bloc, tbl[0]);
        return under;
    }

    function _munder(monEquation, o) {
        _mover(monEquation, 'munder', o);
    }

    function _newMunderover(eq) {
        _newMsubsupBloc(eq, 'munderover')
    }




    //**** TODO: Fraction */

    function _newMfracBloc(eq) {
        var mfrac = eq.getElementsByTagName('mfrac');
        while (mfrac[0]) {
            var complexe = _boolFracComplexity(mfrac[0]),
                parent = mfrac[0].parentNode,
                bloc = d.createElement('mfrac-' + complexe),
                bevelled = mfrac[0].getAttribute('bevelled');
            bevelled && bloc.setAttribute('bevelled', bevelled);
            bloc.innerHTML = mfrac[0].innerHTML;
            parent.replaceChild(bloc, mfrac[0]);
        }
    }

    function _newMfracWrite(eq) {
        var mfrac = eq.getElementsByContainTagName('mfrac'),
            indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';
        for (var i = 0; i < mfrac.length; i++) {
            var element = mfrac[i],
                tagName = element.tagName.split('-'),
                bloc = d.createElement('bloc'),
                blocSep = d.createElement('sep'),
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
            blocSep.appendChild(d.createTextNode(sep));
            blocSep = (mnamebloc.indexOf(enfant1.tagName.split('-')[0]) !== -1) && blocSep.block(indicateurBase, '') || blocSep;

            enfant1 = (enfant1.nbChildrens() > 1 && !boolEnfant1) && enfant1.block() || enfant1;
            enfant2 = (enfant2.nbChildrens() > 1 && !boolEnfant2) && enfant2.block() || enfant2;

            bloc.appendChild(enfant1);
            bloc.appendChild(blocSep);
            bloc.appendChild(enfant2);

            bloc = mathBraille.caracMath.indicateurFraction && bloc.block(open, close) || bloc;
            parent.replaceChild(bloc, element);

        }
    }

    /**
     * Détermine si la fraction est 
     * simple, complexe ,hypercomplexe ou fractionnaire
     * @param {*} frac fraction
     * @return {num} 0 simple, 1 complexe, 2 hypercomplexe 
     */
    function _boolFracComplexity(frac) {
        var numerateur = frac.children[0],
            denominateur = frac.children[1],
            num = numerateur.getElementsByTagName('mfrac'),
            denom = denominateur.getElementsByTagName('mfrac'),
            lnum = num.length,
            ldenom = denom.length;
        var comp = ['simple', 'complexe', 'hypercomplexe'];
        var numcomp = 0;
        if (frac.previousElementSibling && frac.previousElementSibling.tagName === 'mn') {
            var parent = frac.parentElement.tagName;
            if (parent !== 'mfrac') return 'fractionnaire';
        }
        if ((numerateur.tagName !== 'mfrac' && lnum === 0) && (denominateur.tagName !== 'mfrac' && ldenom === 0)) {
            if (numerateur.textContent.indexOf('/') !== -1 || denominateur.textContent.indexOf('/') !== -1) {
                return 'complexe';
            }
            return 'simple';
        }
        numcomp = (numcomp < _testEnfants(denominateur)) && _testEnfants(denominateur) || numcomp;
        numcomp = (numcomp < _testEnfants(numerateur)) && _testEnfants(numerateur) || numcomp;




        return comp[numcomp];

        function _testEnfants(elt) {
            var comp = 0;

            if (elt.tagName === 'mfrac') {
                if (_boolFracComplexity(elt) === 'simple') {
                    comp = 1;
                } else {
                    comp = 2;
                }
            } else if (elt.tagName === 'msub' || elt.tagName === 'msup') {
                comp = 0;
            } else {
                var eltenfant = elt.children;
                for (var i = 0; i < eltenfant.length; i++) {

                    if (eltenfant[i].tagName === 'mfrac') {
                        if (_boolFracComplexity(eltenfant[i]) === 'simple' || _boolFracComplexity(eltenfant[i]) === 'fractionnaire') {
                            comp = 1;
                        } else {
                            comp = 2;
                        }
                    }
                }
            }

            return comp;
        }

    }



    /****** Fin Fraction */


    function _countParent(monEquation, tagname) {
        var nodeTag = monEquation.getElementsByTagName(tagname),
            parent = nodeTag[0] && nodeTag[0].parentElement,
            k = 0;
        while (parent && parent.tagname.toLowerCase() !== 'math') {
            k++;
            parent = parent.parentElement;
        }
        return k === 0 && 10000 || k;
    }


    function _virguleNemeth(msub) {
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
                bloc = d.createElement('mo-bloc');
                bool = (nextElt && (nextElt.textContent.charCodeAt() === 160 || nextElt.textContent === '-BLANK-'));
                switch (elt.textContent.charCodeAt()) {
                    case 44:
                        bool && bloc.appendChild(d.createTextNode(mathBraille.caracMath.separateurIndiceExposant.virgule));
                        bool && parent.replaceChild(bloc, elt);
                        nextElt.textContent === '-BLANK-' && parent.removeChild(nextElt);
                        lmo--;
                        j--
                        break;
                    case 59:
                        bool && bloc.appendChild(d.createTextNode(mathBraille.caracMath.separateurIndiceExposant.pointvirgule));
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

    function _newMsupBloc(eq) {
        var msup = eq.getElementsByTagName('msup');
        while (msup[0]) {
            var parent = msup[0].parentElement,
                lvl = _newNiveauIndiceExposant(msup[0].children[1]),
                bloc = d.createElement('msup-f'),
                bloc2 = lvl === -1 && d.createElement('bloc') || d.createElement('blocsubsup-' + lvl);
            // console.log(lvl);
            bloc.innerHTML = msup[0].innerHTML;
            bloc2.appendChild(bloc.children[1]);
            parent.replaceChild(bloc, msup[0]);
            bloc.appendChild(bloc2);

        }
    }

    function _conditionsIndiceNum(elt1, elt2, lvl) {
        var funcTrue = ['log', 'sin', 'cos', 'arcsin', 'CO'];
        var funcFalse = ['∫'];
        if (funcFalse.indexOf(elt1.textContent.trimall()) !== -1) return false;
        if (elt2.hasChild(['msub', 'msup', 'msubsup', 'mmultiscripts', 'blocIndiceNum'])) return false;
        if (elt1.textContent.trimall().split('').length > 1 && funcTrue.indexOf(elt1.textContent.trimall()) === -1) {
            return false;
        }
        if (lvl !== -1 && lvl.split('').length === 1) {
            // if (lvl !== -1) {
            if (!elt1.textContent.trimall().isNumeric()) {
                if (elt2.textContent.trimall().isNumeric()) {
                    return true;
                }
            }
        }
        return false;
    }

    function _newMsubBloc(eq) {
        var msub = eq.getElementsByTagName('msub');
        while (msub[0]) {
            var parent = msub[0].parentElement,
                lvl = _newNiveauIndiceExposant(msub[0].children[1]),
                bloc = d.createElement('msub-f'),
                bloc2 = lvl === -1 && d.createElement('bloc') || d.createElement('blocsubsup-' + lvl);
            bloc2 = (_conditionsIndiceNum(msub[0].children[0], msub[0].children[1], lvl)) && d.createElement('blocIndiceNum-' + lvl) || bloc2;

            bloc.innerHTML = msub[0].innerHTML;
            bloc2.appendChild(bloc.children[1]);
            parent.replaceChild(bloc, msub[0]);
            bloc.appendChild(bloc2);
        }
    }


    function _newNiveauIndiceExposant(elt) {
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
                    var pos = _positionDansParent(enfant);
                    if (pos === 2 || pos === 5) {
                        lvl += 'e';
                    } else if (pos === 1 || pos === 4) {
                        lvl += 'i';
                    }

                    break;
                case 'munderover':
                case 'msubsup':
                    pos = _positionDansParent(enfant);
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
    }

    function _positionDansParent(elt) {
        var parent = elt.parentElement,
            enfants = parent.children,
            lenfants = enfants.length,
            i = 0;
        for (; i !== lenfants; i++) {
            if (enfants[i] === elt) return i;
        }
        return -1;
    }

    function _newIndiceExposantWrite(eq, o) {
        var indExp = ['msup', 'msub'],
            indice = mathBraille.caracMath.indice,
            exposant = mathBraille.caracMath.exposant,
            indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';
        var ie = eq.getElementsByContainTagName(['blocsubsup', 'blocmulti', 'blocIndiceNum', 'blocunderover']),
            lie = ie.length,
            j = lie - 1;

        for (; j !== -1; j--) {
            var elt = ie[j],
                tagName = elt.tagName.split('-'),
                parent = elt.parentNode;
            if (tagName[1] && (!(tagName[0] === 'blocIndiceNum') || o.codeBrailleMath === 'fr')) {
                var boolFrChimie = o.chimie && o.codeBrailleMath === 'fr' && !elt.hasParent(['mmultiscripts-f', 'mmultiscripts']);
                var txt = tagName[1].split(''),
                    bloc = (elt.children[0].children.length === 0 || indExp.indexOf(tagName[0] !== -1)) && d.createElement(elt.tagName) || d.createElement('bloc');
                bloc.innerHTML = elt.innerHTML;
                if ((tagName[0] === 'blocunderover')) {
                    exposant = mathBraille.caracMath.suscrit;
                    indice = mathBraille.caracMath.souscrit;
                } else {
                    indice = !boolFrChimie && mathBraille.caracMath.indice || '';
                    exposant = mathBraille.caracMath.exposant;

                }
                bloc = bloc.children[0].nbChildrens() > 1 && bloc.block() || bloc;
                if (!(elt.previousElementSibling && elt.previousElementSibling.textContent.trim() === '|')) {
                    for (var k = 0; k < txt.length; k++) {
                        bloc = (txt[k].toLowerCase() === 'e') && bloc.block(exposant, '') || bloc;
                        bloc = (txt[k].toLowerCase() === 'i') && bloc.block(indice, '') || bloc;
                        if (o.codeBrailleMath === 'fr') {
                            break;
                        }
                    }
                }
                var nextElt = elt.nextElementSibling;

                while (nextElt && nextElt.tagName.toLowerCase() === 'bloc') {
                    nextElt = nextElt.nextElementSibling;

                }
                var indicBaseDom = ['mi', 'mo', 'mn'];
                if (nextElt && indicBaseDom.indexOf(nextElt.tagName) !== -1) {
                    if (txt.length > 1) indicateurBase = txt[0];
                    bloc = bloc.block('', indicateurBase);
                }
                parent.replaceChild(bloc, elt);
            }
        }
    }

    function _newBlocBase(eq) {
        var bb = eq.getElementsByTagName('blocbase'),

            indicateurBase = mathBraille.caracMath.indicateurBase && mathBraille.caracMath.indicateurBase || '';

        while (bb[0]) {
            var parent = bb[0].parentNode,
                bloc = d.createElement('blocbase-f');
            bloc.innerHTML = bb[0].innerHTML;

            bloc = bloc.block(indicateurBase, '');

            parent.replaceChild(bloc, bb[0]);
        }
    }


    function _msupORmsub(monEquation, o, multi) {
        var mover;
        if (monEquation.tagName !== 'msub' && monEquation.tagName !== 'msup') {
            var cpMsup = _countParent(monEquation, 'msup'),
                cpMsub = _countParent(monEquation, 'msub'),
                tagname = cpMsup < cpMsub && 'msup' || 'msub';
            mover = monEquation.getElementsByTagName(tagname);
        } else {
            mover = [monEquation];
        }
        switch (o.codeBrailleMath) {
            case 'nemeth':
                tagname === 'msub' && _virguleNemeth(mover);
                while (mover[0] && mover[0].textContent.trimall() !== '') {
                    _niveauIndiceExposant(mover[0], o, multi);
                }
                break;
            case 'fr':
                while (mover[0]) {
                    var bloc = d.createElement(tagname + '-bloc'),
                        parent = mover[0].parentNode,
                        elt = mover[0].children,
                        sep = '',
                        enfant1 = elt[0],
                        enfant2 = elt[1];
                    switch (tagname) {
                        case 'msub':
                            sep = (enfant1.textContent.trim() !== '|') && mathBraille.caracMath.indice || sep;
                            o.chimie && (sep = '');
                            break;
                        case 'msup':
                            sep = mathBraille.caracMath.exposant;
                            break;

                    }

                    (enfant1.nbChildrens() > 1) && bloc.appendChild(enfant1.block()) || bloc.appendChild(enfant1);
                    bloc.appendChild(d.createTextNode(sep));
                    (enfant2.nbChildrens() > 1) && bloc.appendChild(enfant2.block()) || bloc.appendChild(enfant2);
                    parent.replaceChild(bloc, mover[0]);
                }
                break;
        }
    }

    function _niveauIndiceExposant(elt, o, multi) {
        var enfant1 = elt.children[1],
            enfant0 = elt.children[0],
            previousIE = (elt.tagName === 'msup') && mathBraille.caracMath.exposant || mathBraille.caracMath.indice,
            bloc = d.createElement(elt.tagName + '-bloc'),
            parent = elt.parentNode,
            boolNum,
            boolIndicNiveau = (elt.nextElementSibling && elt.nextElementSibling.tagName === 'mo');

        bloc.appendChild(enfant0);
        previousIE = multi && (mathBraille.caracMath[multi] + previousIE) || previousIE;
        boolNum = (enfant1.textContent.trimall().isNumeric() && elt.tagName === 'msub') && !enfant0.textContent.trimall().isNumeric();
        if (!boolNum) {
            !o.chimie && bloc.appendChild(d.createTextNode(previousIE));
        }
        bloc.appendChild(enfant1);
        boolIndicNiveau && bloc.appendChild(d.createTextNode('-5-'))
        parent.replaceChild(bloc, elt);

        var cpMsup = _countParent(bloc, 'msup'),
            cpMsub = _countParent(bloc, 'msub'),
            tagname = cpMsup < cpMsub && 'msup' || 'msub',
            next = bloc.getElementsByTagName(tagname);


        while (next[0]) {
            previousIE += tagname === 'msub' && mathBraille.caracMath.indice || mathBraille.caracMath.exposant;
            parent = next[0].parentNode;
            bloc = d.createElement(tagname + '-bloc');
            enfant0 = next[0].children[0];
            enfant1 = next[0].children[1];
            bloc.appendChild(enfant0);
            // boolNum=enfant1.textContent.isNumeric()&&elt.tagName==='msub';
            !o.chimie && bloc.appendChild(d.createTextNode(previousIE));
            bloc.appendChild(enfant1);
            parent.replaceChild(bloc, next[0]);

            cpMsup = _countParent(bloc, 'msup');
            cpMsub = _countParent(bloc, 'msub');
            tagname = cpMsup < cpMsub && 'msup' || 'msub';
            next = bloc.getElementsByTagName(tagname);
        }
    }

    /** TODO: Radicaux */
    function _newMsqrtBloc(eq, tagName) {
        tagName = tagName || 'msqrt';
        var racine = eq.getElementsByTagName(tagName);
        while (racine[0]) {
            var parent = racine[0].parentNode,
                k = _radicauxEmboites(racine[0]),
                bloc = d.createElement(tagName + '-' + k);
            bloc.innerHTML = racine[0].innerHTML;
            parent.replaceChild(bloc, racine[0]);
        }
    }

    function _radicauxEmboites(racine) {
        var k = 0,
            tagName,
            parent = racine.parentNode;
        while (parent) {
            tagName = parent.tagName.split('-');
            (tagName[0] === 'msqrt' || tagName[0] === 'mroot') && k++;
            parent = parent.parentNode;
        }
        return k;

    }

    function _newMsqrtWrite(eq) {
        var racine = eq.getElementsByContainTagName('msqrt'),
            lracine = racine.length,
            i;
        if (racine[0]) {
            i = lracine - 1;
        } else {
            i = -1;
        }

        for (; i !== -1; i--) {
            var elt = racine[i],
                tagName = elt.tagName.split('-'),
                parent = elt.parentNode,
                bloc = d.createElement('bloc'),
                enfants = elt.children,
                radical = mathBraille.caracMath.racine,
                ordre = mathBraille.caracMath.ordreRadical && mathBraille.caracMath.ordreRadical.repeat(tagName[1]),
                finRadical = mathBraille.caracMath.finRacine;

            bloc.innerHTML = elt.innerHTML;
            // // français
            if (enfants.length === 1) {
                if (enfants[0].tagName.toLowerCase() === 'mrow' || enfants[0].tagName.toLowerCase() === 'mpadded') {
                    bloc = enfants[0].nbChildrens() > 1 && bloc.block() || bloc;
                }
            } else {
                bloc = bloc.block();
            }
            // fin fran
            bloc = finRadical && bloc.block(ordre + radical, ordre + finRadical) || bloc.block(radical, '');

            parent.replaceChild(bloc, elt);
        }

    }


    function _newMrootBloc(eq) {
        _newMsqrtBloc(eq, 'mroot');
    }

    function _newMrootWrite(eq) {
        var mroot = eq.getElementsByContainTagName('mroot'),
            lroot = mroot.length,
            i;
        if (mroot[0]) {
            i = lroot - 1;
        } else {
            i = -1;
        }

        for (; i !== -1; i--) {
            var elt = mroot[i],
                tagName = elt.tagName.split('-'),
                parent = elt.parentNode,
                bloc = d.createElement('bloc'),
                bloccontenu = d.createElement('bloc'),
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
            if (elt.nextElementSibling && elt.nextElementSibling.tagName !== 'mo') {
                monbool = true;
            }
            if (elt.previousElementSibling && elt.previousElementSibling.tagName !== 'mo') {
                monbool = true;
            }
            if (child1.length === 1) {
                if (child1[0].tagName.toLowerCase() === 'mrow' || child1[0].tagName.toLowerCase() === 'mpadded') {
                    bloccontenu = child1[0].nbChildrens() > 1 && bloccontenu.block() || bloccontenu;
                }
            } else if (child1.length >= 1) {
                bloccontenu = bloccontenu.block();
            }
            /******** fin fran *************/

            bloccontenu = finRadical && bloccontenu.block(radical, '') || bloccontenu.block(radical, '');
            bloc.appendChild(enfant1);
            bloc.appendChild(bloccontenu);
            bloc = finRadical && bloc.block(ordre + indiceRadical, ordre + finRadical) || bloc.block(mathBraille.caracMath.exposant, '');
            bloc = (!finRadical && monbool) && bloc.block() || bloc;
            parent.replaceChild(bloc, elt);

        }
    }


    // function _mroot(monEquation) {
    //     _mover(monEquation, 'mroot');
    // }

    function _retourChariotMatrice(monEquation) {
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
    }


    function _calculEspaceMTD(monEquation) {
        var regex = RegExp(marqueRetourLigne, 'gi'),
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
        txt = txt.filter(_filtremarque);
        return txt.join('');
    }

    function _filtremarque(element) {
        return element !== marqueCell;
    }

    function _indicateurNumerique(monEquation) {
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

    }


    function _writeform(monEquation, o, hardmat) {
        monEquation.textContent = monEquation.textContent.trimall();
        monEquation.textContent = monEquation.textContent.replace(/--/gi, '-');

        monEquation.textContent = monEquation.textContent.braille();
        (!o.matriceLineaire && !hardmat) && (monEquation.innerHTML = _calculEspaceMTD(monEquation));
        monEquation.innerHTML = _retourChariotMatrice(monEquation);

        if (o.codeBrailleMath === 'nemeth') {
            monEquation.innerHTML = _indicateurNumerique(monEquation);
        }
        monEquation.innerHTML = (o.coupureFormule !== 0) && _coupureFormule(monEquation, o.coupureFormule) || monEquation.innerHTML;
    }


    function _coupureFormule(monEquation, long) {
        if (monEquation.innerHTML.indexOf('<br') !== -1) {
            return monEquation.innerHTML;
        }

        var maFormule = monEquation.textContent.split('');
        maFormule.forEach((c, i) => {
            (i % long === 0 && i !== 0) && maFormule.splice(i - 1, 0, mathBraille.caracMath.coupureFormule.braille() + '<br />')
        });
        return maFormule.join('');
    }

    w.mathml2braille = mathml;
    w.brailledirect = brailledirect;

}(window, document));
/**
 * mathml2braille
 * Convertit les équations mathML en Braille Unicode
 * @author Ludovic BAL <ludo.bal62@gmail.com>
 * @version 1.0
 * 
 */
(function (w, d, undefined) {
  'use strict';
  /**
   * String Prototype braille
   * Convertit texte en braille unicode
   * @param {array} maTable optionel
   * @returns {string}
   */
  String.prototype.braille = function (maTable) {
    // Source
    // http://symbolcodes.tlt.psu.edu/bylanguage/braillechart.html
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
      txt = maTable && this.split('') || this.split('-'),
      l = txt.length,
      i = 0;
    for (; i != l; i++) {
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
    var a = [],
    n = this.getElementsByTagName('*'),
      l = n.length,
      i = 0;
    tag = tag.toUpperCase();
    for (; i != l; i++) {
      var node = n[i].tagName.toUpperCase();
      (node.indexOf(tag) !== -1) && a.push(n[i]);
    }
    if (a.length === 0) {
      return {};
    } else {
      return a;
    }

  };

  /**
   * block
   * 
   * @param {string} openBloc 
   * @param {string} endBloc 
   * @returns {string}
   */
  Object.prototype.block = function (openBloc, endBloc) {
    var df = d.createDocumentFragment(),
      o = d.createElement('block'),
      e = d.createElement('block');
    (openBloc === undefined) && (openBloc = mathBraille.caracMath.blocks.open);
    (endBloc === undefined) && (endBloc = mathBraille.caracMath.blocks.close);
    o.appendChild(d.createTextNode(openBloc));
    e.appendChild(d.createTextNode(endBloc));
    df.appendChild(o);
    df.appendChild(this);
    df.appendChild(e);
    return df;
  };

  var langueDoc = d.getElementsByTagName('html')[0].getAttribute('lang') || d.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'fr',
    mathBraille = {},
    /* variables pour les matrices */
    braillemarqueCell = '-124578-',
    braillemarqueMat = '-1234567-',
    braillemarqueClose = '-1278-',
    braillemarqueRetourLigne = '-12345678-',
    marqueCell = braillemarqueCell.substring(1, braillemarqueCell.length - 1).braille(),
    marqueMat = braillemarqueMat.substring(1, braillemarqueMat.length - 1).braille(),
    marqueClose = braillemarqueClose.substring(1, braillemarqueClose.length - 1).braille(),
    marqueRetourLigne = braillemarqueRetourLigne.substring(1, braillemarqueRetourLigne.length - 1).braille(),
    espace = String.fromCharCode(10240),
    /* fin variables matrice */
    mathml = function (clmath) {
      var options = {
        'matriceLineaire': false
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
      for (; i != l; i++) {
        var langue = mesFormules[i].getAttribute('lang') || mesFormules[i].getAttribute('xml:lang') || langueDoc,
          lg = langue.split('-')[0];
        mathBraille = allVar[lg].mathBraille || allVar.fr.mathBraille;
        mesFormules[i].setAttribute('aria-hidden',true);
        var parent = mesFormules[i].parentNode,
          maForm = d.createDocumentFragment(),
          m = (parent.tagName !== 'body') && d.createElement(parent.tagName) || d.createElement('p');
        m.innerHTML = mesFormules[i].innerHTML;
        _supprimeprefix(m);
        _superflus(m);
        _mn(m);
        _mfrac(m);
        _mroot(m);
        _msqrt(m);
        
        // _mfenced(m, options);
        _mover(m);
        _munder(m);
        _msup(m);
        _msub(m);
        _msubsup(m);
        _munderover(m);
        // _mroot(m);
        _mo(m);
        _mi(m);
        _mmultiscripts(m);

        _mfenced(m, options);
        
        // _msqrt(m);
        options.matriceLineaire && _matriceLineaire(m);
        _writeform(m, options);
        m.classList.add('courant-sans-top');
        maForm.appendChild(m);

        parent.insertBefore(maForm, mesFormules[i].nextSibling);

      }
    },
    brailledirect = function (maClass) {
      var langueDoc = d.getElementsByTagName('html')[0].getAttribute('lang') || d.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'fr',
        tbf6 = d.querySelectorAll(maClass),
        l = tbf6.length,
        i = 0;
      for (; i != l; i++) {
        var langue = tbf6[i].getAttribute('lang') || tbf6[i].getAttribute('xml:lang') || langueDoc,
          lg = langue.split('-')[0],
          maTable = allVar[lg].TBdbt || allVar.fr.TBdbt;
        tbf6[i].textContent = tbf6[i].textContent.braille(maTable);
      }
    };

  function _extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
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
  function _superflus(monEquation) {
    var mesTags = ['annotation-xml', 'annotation'],
      l = mesTags.length,
      i = 0;
    for (; i != l; i++) {
      var superflus = monEquation.getElementsByTagName(mesTags[i]);
      while (superflus[0]) {
        var parent = superflus[0].parentNode;
        parent.removeChild(superflus[0]);
      }
    }
  }

  function _mmultiscripts(monEquation) {
    var multiscripts = monEquation.getElementsByTagName('mmultiscripts');
    while (multiscripts[0]) {
      var elt = multiscripts[0].children,
        parent = multiscripts[0].parentNode,
        df = d.createDocumentFragment(),
        base = elt[0],
        post1,
        post2,
        pre1,
        pre2;
      if (elt[1].tagName.toLowerCase() === 'mprescripts') {
        pre1 = elt[2];
        pre2 = elt[3];
        post1 = d.createElement('none');
        post2 = d.createElement('none');
      } else {
        post1 = elt[1];
        post2 = elt[2];
        pre1 = elt[4];
        pre2 = elt[5];
      }
      (pre1.tagName.toLowerCase() !== 'none') && df.appendChild(d.createTextNode(mathBraille.caracMath.indice));
      (pre1.children.length > 1) && df.appendChild(pre1.block()) || df.appendChild(pre1);
      (pre2.tagName.toLowerCase() !== 'none') && df.appendChild(d.createTextNode(mathBraille.caracMath.exposant));
      (pre2.children.length > 1) && df.appendChild(pre2.block()) || df.appendChild(pre2);
      df.appendChild(base);
      (post1.tagName.toLowerCase() !== 'none') && df.appendChild(d.createTextNode(mathBraille.caracMath.indice));
      (post1.children.length > 1) && df.appendChild(post1.block()) || df.appendChild(post1);
      (post2.tagName.toLowerCase() !== 'none') && df.appendChild(d.createTextNode(mathBraille.caracMath.exposant));
      (post2.children.length > 1) && df.appendChild(post2.block()) || df.appendChild(post2);
      parent.replaceChild(df, multiscripts[0]);

    }
  }


  function _mfenced(monEquation, options) {
    var fenced = monEquation.getElementsByTagName('mfenced');
    while (fenced[0]) {
      var open = fenced[0].getAttribute('open'),
        end = fenced[0].getAttribute('close'),
        sep = fenced[0].getAttribute('separators'),
        mtable = fenced[0].getElementsByTagName('mtable'),
        parent = fenced[0].parentNode,
        block = d.createElement('block');

      if (sep) {
        var s = sep.split(''),
          slast,
          enfants = fenced[0].children,
          lenfants = enfants.length,
          i = 0;
        for (; i != lenfants - 1; i++) {
          s[i] = s[i] || slast;
          enfants[i].appendChild(d.createTextNode(s[i]));
          s[i] && (slast = s[i]);
        }
      }
      block.innerHTML = fenced[0].innerHTML;

      (open === null) && (open = mathBraille.caracMath.parenthese.open);
      (end === null) && (end = mathBraille.caracMath.parenthese.close);


      (open.split('').length === 1) && (open = open.charCodeAt());
      (end.split('').length === 1) && (end = end.charCodeAt());

      var fenced2 = fenced[0].getElementsByTagName('mfenced'),
        monBool = mtable[0] && options.matriceLineaire;

      switch (open) {
        case 40: // para (
          if (monBool) {
            open = mathBraille.caracMath.grandeparenthese2.open;
          } else if (fenced2[0]) {
            open = mathBraille.caracMath.grandeparenthese1.open;
          } else {
            open = mathBraille.caracMath.parenthese.open;
          }
          break;
        case 91: //'[':
          if (monBool) {
            open = mathBraille.caracMath.grandcrochet2.open;
          } else if (fenced2[0]) {
            open = mathBraille.caracMath.grandcrochet1.open;
          } else {
            open = mathBraille.caracMath.crochet.open;
          }
          break;
        case 93: //']':
          if (monBool) {
            open = mathBraille.caracMath.grandcrochet2.close;
          } else if (fenced2[0]) {
            open = mathBraille.caracMath.grandcrochet1.close;
          } else {
            open = mathBraille.caracMath.crochet.close;
          }
          break;
        case 123: //'{':
          open = mtable[0] && mathBraille.caracMath.grandeaccolade.open || mathBraille.caracMath.accolade.open;
          break;
        case 124: //'|':
          open = mtable[0] && mathBraille.caracMath.grandebarre.open || mathBraille.caracMath.barre.open;
          break;
        case 8741:
        case '||':
          open = mtable[0] && mathBraille.caracMath.grandedoublebarre.open || mathBraille.caracMath.doublebarre.open;
          break;
        case 10214: // crochet double ouvert
          open = mathBraille.caracMath.crochetdouble.open;
          break;
      }
      switch (end) {
        case 41:
          if (monBool) {
            end = mathBraille.caracMath.grandeparenthese2.close;
          } else if (fenced2[0]) {
            end = mathBraille.caracMath.grandeparenthese1.close;
          } else {
            end = mathBraille.caracMath.parenthese.close;
          }

          break;
        case 93: //']':
          if (monBool) {
            end = mathBraille.caracMath.grandcrochet2.close;
          } else if (fenced2[0]) {
            end = mathBraille.caracMath.grandcrochet1.close;
          } else {
            end = mathBraille.caracMath.crochet.close;
          }
          break;
        case 91: //'[':
          if (monBool) {
            end = mathBraille.caracMath.grandcrochet2.open;
          } else if (fenced2[0]) {
            end = mathBraille.caracMath.grandcrochet1.open;
          } else {
            end = mathBraille.caracMath.crochet.open;
          }
          break;
        case 125: //'}':
          end = mtable[0] && mathBraille.caracMath.grandeaccolade.close || mathBraille.caracMath.accolade.close;
          break;
        case 124: // '|':
          end = mtable[0] && mathBraille.caracMath.grandebarre.close || mathBraille.caracMath.barre.close;
          break;
        case 8741:
        case '||':
          end = mtable[0] && mathBraille.caracMath.grandedoublebarre.close || mathBraille.caracMath.doublebarre.close;
          break;
        case 10215: // crochet double fermé
          end = mathBraille.caracMath.crochetdouble.close;
          break;
      }
      !options.matriceLineaire && _matriceBlock(open, end, block);
      parent.replaceChild(block.block(open, end), fenced[0]);
    }

  }


  function _matriceBlock(open, close, block) {
    var tbl = block.getElementsByTagName('mtable'),
      l = tbl.length,
      i = 0;
    for (; i != l; i++) {
      var parent = tbl[i].parentNode;
      parent.insertBefore(d.createTextNode(braillemarqueMat), tbl[i]);
      close && parent.insertBefore(d.createTextNode(braillemarqueClose), tbl[i]);

      var tr = tbl[i].getElementsByTagName('mtr'),
        ltr = tr.length,
        j = 0;
      for (; j != ltr; j++) {
        var txtNode = close && (close + braillemarqueRetourLigne + open) || braillemarqueRetourLigne;
        (j !== ltr - 1) && tbl[i].insertBefore(d.createTextNode(txtNode), tr[j].nextSibling);
        var td = tr[j].getElementsByTagName('mtd'),
          ltd = td.length,
          k = 0;
        for (; k != ltd; k++) {
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
      l = tbl.length,
      i = 0;
    for (; i != l; i++) {
      var tr = tbl[i].getElementsByTagName('mtr'),
        ltr = tr.length,
        j = 0;
      for (; j != ltr; j++) {
        (j !== ltr - 1) && tr[j].appendChild(d.createTextNode(mathBraille.caracMath.matrice.sepLigne + mathBraille.caracMath.espaceInsecable));
      }
      var td = tbl[i].getElementsByTagName('mtd'),
        ltd = td.length,
        k = 0;
      for (; k != ltd; k++) {
        (td[k].textContent.trim().length === 0) && td[k].appendChild(d.createTextNode(mathBraille.caracMath.matrice.caseVide));
        (k !== ltd - 1) && td[k].appendChild(d.createTextNode(mathBraille.caracMath.espaceInsecable));
      }
    }
  }

  function _msubsup(monEquation, tagName) {
    tagName = tagName || 'msubsup';
    var msubsup = monEquation.getElementsByTagName(tagName);
    while (msubsup[0]) {
      var elt = msubsup[0].children,
        parent = msubsup[0].parentNode,
        sep1 = d.createElement('block').appendChild(d.createTextNode(mathBraille.caracMath.indice)),
        sep2 = d.createElement('block').appendChild(d.createTextNode(mathBraille.caracMath.exposant)),
        df = d.createDocumentFragment();
      df.appendChild(elt[0]);
      (tagName === 'munderover') && df.appendChild(sep1.cloneNode());
      df.appendChild(sep1);
      (elt[0].children.length > 1) && df.appendChild(elt[0].block()) || df.appendChild(elt[0]);
      (tagName === 'munderover') && df.appendChild(sep2.cloneNode());
      df.appendChild(sep2);
      (elt[0].children.length > 1) && df.appendChild(elt[0].block()) || df.appendChild(elt[0]);
      parent.replaceChild(df, msubsup[0]);
    }
  }

  function _mo(monEquation, tagName) {
    tagName = tagName || 'mo';
    var mn = monEquation.getElementsByTagName(tagName),
      l = mn.length,
      i = 0;
    for (; i != l; i++) {
      var num = mn[i].textContent.trim().split(''),
        lnum = num.length,
        j = 0;
      mn[i].textContent = '';
      for (; j < lnum; j++) {
        var carac = mathBraille.caracDec[num[j].charCodeAt()] || num[j];
        mn[i].textContent += carac;
      }
    }
  }

  function _mn(monEquation) {
    _mo(monEquation, 'mn');
  }

  function _mi(monEquation) {
    _mo(monEquation, 'mi');
  }

  function _mover(monEquation, tagName) {
    tagName = tagName || 'mover';
    var mover = monEquation.getElementsByTagName(tagName);
    while (mover[0]) {
      var df = d.createDocumentFragment(),
        parent = mover[0].parentNode,
        elt = mover[0].children,
        carCode = String(elt[1].textContent.trim().charCodeAt()),
        sep = '',
        myArray = Object.keys(mathBraille.caracDec.susouscrit);
      if (myArray.indexOf(carCode) !== -1) {
        if (tagName === 'munder') {
          df.appendChild(d.createTextNode(mathBraille.caracMath.majuscule));
        }
        df.appendChild(d.createTextNode(mathBraille.caracDec.susouscrit[carCode]));
        df.appendChild(elt[0]);
      } else {
        var enfant1 = elt[0],
          enfant2 = elt[1];
        switch (tagName) {
          case 'mover':
            sep = mathBraille.caracMath.suscrit;
            break;
          case 'munder':
            sep = mathBraille.caracMath.souscrit;
            break;
          case 'msup':
            sep = mathBraille.caracMath.exposant;
            break;
          case 'msub':
            sep = mathBraille.caracMath.indice;
            break;
          case 'mfrac':
            sep = mathBraille.caracMath.fraction;
            break;
          case 'mroot':
            sep = mathBraille.caracMath.racine;
            enfant1 = elt[1];
            enfant2 = elt[0];
            df.appendChild(d.createTextNode(mathBraille.caracMath.exposant));
            break;
        }
        enfant1.children.length > 1 && df.appendChild(enfant1.block()) || df.appendChild(enfant1);
        df.appendChild(d.createTextNode(sep));
        enfant2.children.length > 1 && df.appendChild(enfant2.block()) || df.appendChild(enfant2);
      }
      parent.replaceChild(df, mover[0]);
    }
  }

  function _munder(monEquation) {
    _mover(monEquation, 'munder');
  }

  function _munderover(monEquation) {
    _msubsup(monEquation, 'munderover');
  }

  function _mfrac(monEquation) {
    _mover(monEquation, 'mfrac');
  }

  function _msub(monEquation) {
    _mover(monEquation, 'msub');
  }

  function _msup(monEquation) {
    _mover(monEquation, 'msup');
  }

  function _msqrt(monEquation) {
    var racine = monEquation.getElementsByTagName('msqrt');
    while (racine[0]) {
      var df = d.createDocumentFragment(),
        parent = racine[0].parentNode,
        block = d.createElement('block');
      df.appendChild(d.createTextNode(mathBraille.caracMath.racine));
      block.innerHTML = racine[0].innerHTML;
      df.appendChild(block.block());
      parent.replaceChild(df, racine[0]);
    }
  }

  function _mroot(monEquation) {
    _mover(monEquation, 'mroot');
  }

  function _retourChariotMatrice(monEquation) {
    var txt = monEquation.textContent.split(''),
      nbcar = txt.indexOf(marqueMat);
    if (nbcar === -1) return monEquation.textContent;
    txt.splice(nbcar, 1)
    var close = txt.indexOf(marqueClose);
    if (close !== -1) {
      txt.splice(close, 1);
      nbcar = nbcar - 1;
    }
    var idx = txt.indexOf(marqueRetourLigne),
      spc = "";
    while (idx != -1) {
      for (var j = 0; j != nbcar; j++) {
        spc += espace;
      }
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
      lcol = [],
      posmarque = [],
      marque1 = txt.indexOf(marqueCell),
      marque2 = txt.indexOf(marqueCell, marque1 + 1),
      i = 0,
      j = 0;

    while (marque1 !== -1) {
      var l = marque2 - marque1 - 1;
      lcell.push(l);
      posmarque.push(marque2);
      marque1 = txt.indexOf(marqueCell, marque2 + 1);
      marque2 = txt.indexOf(marqueCell, marque1 + 1);
    }
    var llcell = lcell.length;
    lcol.length = llcell / nbligne;
    lcol.fill(0);
    for (; i < lcell.length; i++) {
      (lcell[i] > lcol[i % nbligne]) && (lcol[i % nbligne] = lcell[i]);
    }

    for (; j != llcell; j++) {
      marque2 = posmarque[j];
      l = lcol[j % nbligne] - lcell[j];
      var spc = "";
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
    return element != marqueCell;
  }

  function _writeform(monEquation, options) {
    monEquation.textContent = monEquation.textContent.replace(/\s*/gi, '');
    monEquation.textContent = monEquation.textContent.replace(/--/gi, '-');
    monEquation.textContent = monEquation.textContent.substring(1, monEquation.textContent.length - 1);

    monEquation.textContent = monEquation.textContent.braille();
    !options.matriceLineaire && (monEquation.innerHTML = _calculEspaceMTD(monEquation));
    !options.matriceLineaire && (monEquation.innerHTML = _retourChariotMatrice(monEquation));

  }

  w.mathml2braille = mathml;
  w.brailledirect = brailledirect;

}(window, document));


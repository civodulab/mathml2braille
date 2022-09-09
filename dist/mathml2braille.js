    (function(window, document) {
  /**
   * Correspondance entre caractère et points braille basée sur duxBTWin
   * @var TBFdbt
   * @type {object}
   * @memberof brailledirect
   */
  // table française basée sur DBTWin
  const TBFdbt = {
          ' ': 'BLANK',
          '': 'EMPTY',
          'a': 1,
          'b': 12,
          'c': 14,
          'd': 145,
          'e': 15,
          'f': 124,
          'g': 1245,
          'h': 125,
          'i': 24,
          'j': 245,
          'k': 13,
          'l': 123,
          'm': 134,
          'n': 1345,
          'o': 135,
          'p': 1234,
          'q': 12345,
          'r': 1235,
          's': 234,
          't': 2345,
          'u': 136,
          'v': 1236,
          'w': 2456,
          'x': 1346,
          'y': 13456,
          'z': 1356,

          'ç': 12346,
          'é': 123456,
          'à': 12356,
          '[': 12356,
          'è': 2346,
          'ù': 23456,
          ']': 23456,
          'â': 16,
          'ê': 126,
          'î': 146,
          'ô': 1456,
          'û': 156,
          'ë': 1246,
          'ï': 12456,
          'ü': 1256,
          'ö': 246,

          ',': 2,
          ';': 23,
          ':': 25,
          '.': 256,
          '?': 26,
          '!': 235,
          '"': 2356,
          '(': 236,
          ')': 356,
          "'": 3,
          '¨': 46,

          '@': 345,
          '|': 456,
          '_': 5,
          '=': 2356,
          '/': 34,
          '¤': 45,
          '^': 4,
          '`': 6,
          '%': 346,

          '-': 36,
          '+': 235,
          '*': 35,
          '>': 56,

          '0': 3456,
          '1': 16,
          '2': 126,
          '3': 146,
          '4': 1456,
          '5': 156,
          '6': 1246,
          '7': 12456,
          '8': 1256,
          '9': 246
      },
      /**
       * @var mathTBF
       * @type {object}
       * @property {boolean} [ponctuation=false] true = ponctuation en toutes lettres
       * @property {boolean} [descMatrice=false] true = description matrice (lignes colonnes)
       */
      // mathématiques français
      mathTBF = {
          'caracMath': {
              'coupureFormule': '5',
              'espaceInsecable': '-BLANK-',
              'blocks': {
                  'open': '-56-',
                  'close': '-23-'
              },
              'parenthese': {
                  'open': '-236-',
                  'close': '-356-'
              },
              'grandeparenthese1': { // imbrication
                  'open': '-5-236-',
                  'close': '-5-356-'
              },
              'grandeparenthese2': { // sur plusieurs lignes
                  'open': '-45-236-',
                  'close': '-45-356-'
              },
              'accolade': {
                  'open': '-46-236-',
                  'close': '-46-356-'
              },
              'grandeaccolade': { //plusieurs lignes
                  'open': '-456-236-',
                  'close': '-456-356-'
              },
              'barre': {
                  'open': '-123456-',
                  'close': '-123456-'
              },
              'grandebarre': { //plusieurs lignes
                  'open': '-456-123456-',
                  'close': '-456-123456-'
              },
              'doublebarre': {
                  'open': '-45-123456-',
                  'close': '-45-123456-'
              },
              'grandedoublebarre': { //plusieurs lignes
                  'open': '-46-123456-',
                  'close': '-46-123456-'
              },
              'crochet': {
                  'open': '-12356-',
                  'close': '-23456-',
              },
              'grandcrochet1': {
                  'open': '-5-12356-',
                  'close': '-5-23456-',
              },
              'grandcrochet2': { // plusieurs lignes
                  'open': '-45-12356-',
                  'close': '-45-23456-',
              },
              'crochetdouble': {
                  'open': '-46-12356-',
                  'close': '-46-23456-'
              },
              'indice': '-26-',
              'exposant': '-4-',
              'suscrit': '-4-4-',
              'souscrit': '-26-26-',
              'fraction': '-34-',
              'matrice': {
                  'sepLigne': '-6-345-',
                  'caseVide': '-5-2-'
              },
              'racine': '-345-',
              'majuscule': '-46-',
              'point5': '-5-',
              'point6': '-6-',
              'majusculeronde': '-46-5-'
          },
          'caracDec': {
              susouscrit: {
                  8594: '-46-25-', //vecteur
                  175: '-456-25-', //barre
                  95: '-456-25-', //barre mathtype qui met un _
                  732: '-5-456-25-', //tilde
                  126: '-5-456-25-', //tilde'
                  9180: '-4-25', //arc
                  8994: '-4-25-', //arc
                  8995: '-4-4-25-', // arc smile
                  8743: '-45-25-', // angle
                  94: '-45-25-', //angle
                  8744: '-456-45-25-', // angle vers le bas
              },
              /* Alphabet majuscule */
              65: '-46-1-',
              66: '-46-12-',
              67: '-46-14-',
              68: '-46-145-',
              69: '-46-15-',
              70: '-46-124-',
              71: '-46-1245-',
              72: '-46-125-',
              73: '-46-24-',
              74: '-46-245-',
              75: '-46-13-',
              76: '-46-123-',
              77: '-46-134-',
              78: '-46-1345-',
              79: '-46-135-',
              80: '-46-1234-',
              81: '-46-12345-',
              82: '-46-1235-',
              83: '-46-234-',
              84: '-46-2345-',
              85: '-46-136-',
              86: '-46-1236-',
              87: '-46-2456-',
              88: '-46-1346-',
              89: '-46-13456-',
              90: '-46-1356-',
              /* Alphabet minuscule */
              97: '-1-',
              98: '-12-',
              99: '-14-',
              100: '-145-',
              101: '-15-',
              102: '-124-',
              103: '-1245-',
              104: '-125-',
              105: '-24-',
              106: '-245-',
              107: '-13-',
              108: '-123-',
              109: '-134-',
              110: '-1345-',
              111: '-135-',
              112: '-1234-',
              113: '-12345-',
              114: '-1235-',
              115: '-234-',
              116: '-2345-',
              117: '-136-',
              118: '-1236-',
              119: '-2456-',
              120: '-1346-',
              121: '-13456-',
              122: '-1356-',
              /* chiffres */
              48: '-3456-', //0
              49: '-16-', // 1
              50: '-126-', // 2
              51: '-146-', // 3
              52: '-1456-', // 4
              53: '-156-', // 5
              54: '-1246-', // 6
              55: '-12456-', // 7
              56: '-1256-', // 8
              57: '-246-', // 9
              39: '-3-', // '
              40: '-236-', // (
              41: '-356-', // )  
              44: '-2-', // ,
              58: '-25-', // :
              59: '-23-', // ;
              45: '-36-', // -
              46: '-35-35-', //point multiplicatif
              42: '-5-35-', // *
              43: '-235-', // +
              47: '-34-', // /
              61: '-2356-', // =
              91: '-12356-', // [
              93: '-23456-', // ]
              123: '-46-236-', // { accolade gauche
              125: '-46-356-', // { accolade droite
              124: '-123456-', // |
              8214: '-45-123456-', // DOUBLE VERTICAL LINE ‖
              33: '-456-35-', // factoriel !
              160: '-BLANK-', // espace
              32: '-BLANK-', // espace
              183: '-35-35-', // middle dot &#xB7;
              176: '-135-', // DEGREE SYMBOL ° &deg; &‌#176; &‌#xB0;
              181: '-45-134-', //MICRO MU SYMBOL µ &micro; &‌#181; &‌#xB5;
              233: '-123456-', // é
              //PER MILLE (1/1000th) ‰ &permil; &‌#8240; &‌#2030;
              60: '-5-126-', //LESS THAN <  &lt; &‌#60; &‌#x3C;
              62: '-5-345-', //GREATER THAN > &gt; &‌#62; &‌#x3E;

              8290: '-EMPTY-', //invisible time
              8292: '-EMPTY-', //invisible time
              8289: '-EMPTY-', // function application

              8804: '-45-126-', //LESS THAN OR EQUAL TO ≤ &le; &‌#8804; &‌#x2264;
              8805: '-45-345-', //GREATER THAN OR EQUAL TO ≥ &ge; &‌#8805; &‌#x2265;
              10877: '-45-126-', // LESS-THAN OR SLANTED EQUAL TO ⩽
              10878: '-45-345-', // GREATER-THAN OR SLANTED EQUAL TO ⩾
              177: '-235-36-', //PLUS OR MINUS ± &plusmn; &‌#177; &‌#xB1;
              8800: '-46-2356-', //NOT EQUALS ≠ &ne; &‌#8800; &‌#x2260;
              247: '-25-', //DIVISION SIGN ÷ &divide; &‌#247; &‌#xF7;
              215: '-35-', //TIMES X × &times; &‌#215; &‌#x00D7;
              8722: '-36-', //MINUS − &minus; &‌#8722; &‌#x2212;
              8725: '-34-', //DIVISION SLASH ∕ — &‌#8725; &‌#x2215;
              8260: '-34-', //FRACTION SLASH ⁄ &frasl &‌#8260; &‌#x2044;
              8734: '-45-14-', //INFINITY ∞ &infin; &‌#8734; &‌#x221E;
              //ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
              //FUNCTION ITALIC F ƒ &fnof; &‌#402; &‌#x192;
              8242: '-3-', //PRIME (single quote) ′ &prime; &‌#8242; &‌#x2032;
              8243: '-3-3-', //DOUBLE PRIME (double quote) ″ &Prime; &‌#8243; &‌#x2033;
              8244: '-3-3-3-', //TRIPLE PRIME (triple quote) ‴ — &‌#8244; &‌#x2034;
              //THEREFORE (Triangular Dots) ∴ &there4; &‌#8756; &‌#x2234;
              8901: '-35-', //DOT OPERATOR ⋅ &sdot; &‌#8901; &‌#x22C5;
              //SUPERSCRIPT TWO ¹ &sup1; &‌#185; &‌#xB9;
              //SUPERSCRIPT TWO ² &sup2; &‌#178; &‌#xB2;
              //SUPERSCRIPT THREE ³ &sup3; &‌#179; &‌#xB3;
              //LEFT ANGLE BRACKET ⟨ &lang; &‌#9001; &‌#x2329;
              //RIGHT ANGLE BRACKET ⟩ &rang; &‌#9002; &‌#x232A;
              //LEFT CEILING BRACKET ⌈ &lceil; &‌#8968; &‌#x2308;
              //RIGHT CEILING BRACKET ⌉ &rceil; &‌#8969; &‌#x2309;
              //LEFT FLOOR BRACKET ⌊ &lceil; &‌#8970; &‌#x230A;
              //RIGHT FLOOR BRACKET ⌋ &rceil; &‌#8971; &‌#x230B;
              8853: '-46-235-', //CIRCLED PLUS (Direct Sum) ⊕ &oplus; &‌#8853; &‌#x2295;
              8855: '-46-35-', //CIRCLED TIMES (Vector Product) ⊗ &otimes; &‌#8855; &‌#x2297;
              8747: '-12346-', //INTEGRAL ∫ &int; &‌#8747; &‌#x222B;
              8706: '-5-145-', //PARTIAL DIFFERENTIAL ∂ &part; &‌#8706; &‌#2202;
              8710: '-46-45-145-', //INCREMENT (Difference or capital Delta) Δ &Delta; &‌#8710; &‌#x2206;
              8711: '-46-1456-', //NABLA (Backward Difference, Grad or upside down triangle) ∇ &nabla; &‌#8711; &‌#x2207;
              8748: '-12346-12346-', //DOUBLE INTEGRAL ∬ &‌#8748; &‌#x222C;
              8749: '-12346-12346-12346-', //TRIPLE INTEGRAL ∭ &‌#8749; &‌#x222D;
              10764: '-12346-12346-12346-12346-', //QUADRUPLE INTEGRAL ⨌ &‌#10764; &‌#x2A0C;
              8750: '-46-12346-', //CONTOUR INTEGRAL ∮ &‌#8750; &‌#x222E;
              8751: '-46-12346-12346-', //SURFACE INTEGRAL ∯ &‌#8751; &‌#x222F;
              8752: '-46-12346-12346-12346-', //VOLUME INTEGRAL ∰ &‌#8752; &‌#x2230;
              //CLOCKWISE INTEGRAL ∱ &‌#8753; &‌#x2231;
              //ANTICLOCKWISE INTEGRAL ⨑ &‌#10769; &‌#x2A11;
              //CLOCKWISE CONTOUR INTEGRAL ∲ &‌#8754; &‌#x2232;
              //ANTICLOCKWISE CONTOUR INTEGRAL ∳ &‌#8755; &‌#x2233;
              // ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
              // WEIERSTRASS POWER SET (Script Capital P) ℘ &weierp; &‌#8472; &‌#x2118;
              // IMAGINARY Part (Blackletter I) ℑ &image; &‌#8465; &‌#x2111;
              // REAL NUMBER (Blackletter R) ℜ &real; &‌#8476; &‌#x211C;
              8477: '-46-46-1235-', //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
              8450: '-46-46-14-', //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
              8469: '-46-46-1345-', //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
              8473: '-46-46-1234-', // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
              8474: '-46-46-12345-', // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
              8484: '-46-46-1356-', // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
              8518: '-145-', //double struck small ⅆ
              120149:'-145-', //double struck small 𝕕
              8519: '-15-', //double struck small ⅇ
              120150: '-15-', //double struck small 𝕖
              120154: '-24-', //double struck small 𝕚
             8520: '-24-', //double struck small ⅈ
              8704: '-456-34-', // FOR ALL (Upside-down A) ∀ &forall;  &‌#8704; &‌#x2200;
              8705: '-46-146-', // COMPLEMENT (Thin C) ∁ — &‌#8705; &‌#x2201;
              8707: '-456-16-', // THERE EXISTS (Backwards E) ∃ &exist;  &‌#8707; &‌#x2203;
              8708: '-46-456-16-', // THERE DOES NOT EXIST (Backwards E with slash) ∄ — &‌#8708; &‌#x2204;
              8709: '-45-3456-', // EMPTY SET (O slash) ∅ &empty;  &‌#8709; &‌#x2205;
              // NOT SYMBOL (Corner) ¬ &not;  &‌#172; &‌#xAC;
              // TILDE (Alternate Not Symbol) ˜ &tilde;  — —
              8743: '-45-35-', // LOGICAL AND (Wedge or Upside down V Symbol) ∧ &and;  &‌#8743; &‌#x2227;
              8744: '-45-26-', // LOGICAL OR (V Symbol) ∨ &or;  &‌#8744; &‌#x2228;
              // XOR ⊻ — &‌#8891; &‌#x22BB;
              // NAND ⊼ — &‌#8892; &‌#x22BC;
              // NOR ⊽ — &‌#8893; &‌#x22BD;
              8745: '-45-235-', // INTERSECTION (Cap or Upside Down U) ∩ &cap;  &‌#8745; &‌#x2229;
              8746: '-456-235-', // UNION (Cup or U Symbol) ∪ &cup;  &‌#8746; &‌#x222A;
              8712: '-45-16-', //ELEMENT OF ∈ &isin;  &‌#8712; &‌#x2208;
              8713: '-45-34-', // NOT AN ELEMENT OF ∉ &notin;  &‌#8713; &‌#x2209;
              8714: '-45-16-', // SMALL ELEMENT OF ∊ — &‌#8714; &‌#x220A;
              8715: '-46-45-16-', // CONTAINS AS MEMBER ∋ &ni;  &‌#8715; &‌#x220B;
              8716: '-46-45-34-', // DOES NOT CONTAIN AS MEMBER ∌ — &‌#8716; &‌#x220C;
              8717: '-46-45-16-', // SMALL CONTAINS AS MEMBER ∍ — &‌#8717; &‌#x220D;
              // SET MINUS ∖ — &‌#8726; &‌#x2216;
              8834: '-46-16-', //SUBSET OF (Sideways U with cap to left) ⊂ &sub;  &‌#8834; &‌#x2282;
              8835: '-5-16-', // SUPERSET OF (Sideways U with cap to right) ⊃ &sup;  &‌#8835; &‌#x2283;
              8836: '-46-34-', //NOT A SUBSET OF (Subset with Slash) ⊄ &nsub;  &‌#8836; &‌#x2284;
              8837: '-5-34-', // NOT A SUPERSET OF (Superset with slash) ⊅ — &‌#8837; &‌#x2285;
              8838: '-456-46-16-', // SUBSET OF OR EQUAL TO (Subset with line below) ⊆ &sube;  &‌#8838; &‌#x2286;
              // SUPERSET OF OR EQUAL TO (Superset with line below) ⊇ &supe;  &‌#8839; &‌#x2287;
              // NEITHER A SUBSET OF NOR EQUAL TO ⊈ — &‌#8840; &‌#x2288;
              // NEITHER A SUPERSET OF NOR EQUAL TO ⊉ — &‌#8841; &‌#x2289;
              // SUBSET OF WITH NOT EQUAL TO ⊊ — &‌#8842; &‌#x228A;
              // SUPERSET OF WITH NOT EQUAL TO ⊋ — &‌#8843; &‌#x228B;
              //DIAMOND OPERATOR (Possibility) ⋄ — &‌#8900; &‌#x22C4;
              // ASYMPTOTICALLY EQUAL TO One to one Correspondence ≃ — &‌#8771; &‌#x2243;
              // NOT ASYMPTOTICALLY EQUAL TO ≄ — &‌#8772; &‌#x2244;
              // MULTISET (U with arrow) ⊌ — &‌#8844; &‌#x228C;
              // MULTISET MULTIPLICATION (U with dot in center) ⊍ — &‌#8845; &‌#x228D;
              // MULTISET UNION (U with plus in center) ⊎ — &‌#8846; &‌#x228E;
              // DOUBLE SUBSET ⋐ — &‌#8912; &‌#x22D0;
              // DOUBLE SUPERSET ⋑ — &‌#8913; &‌#x22D1;
              // DOUBLE INTERSECTION ⋒ — &‌#8914; &‌#x22D2;
              // DOUBLE UNION ⋓ — &‌#8915; &‌#x22D3;
              // N-ARY LOGICAL AND ⋀ — &‌#8896; &‌#x22C0;
              // N-ARY LOGICAL OR ⋁ — &‌#8897; &‌#x22C1;
              // N-ARY INTERSECTION/td> ⋂ — &‌#8898; &‌#x22C2;
              // N-ARY UNION ⋃ — &‌#8899; &‌#x22C3;
              // CURLY LOGICAL OR ⋎ — &‌#8910; &‌#x22CE;
              // CURLY LOGICAL AND ⋏ — &‌#8911; &‌#x22CF;
              // CIRCLED MINUS ⊖ — &‌#8854; &‌#x2296;
              // CIRCLED DIVISION SLASH ⊘ — &‌#8856; &‌#x2298;
              // ELEMENT OF WITH LONG HORIZONTAL STROKE ⋲ &‌#8946; &‌#x22F2;
              // ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋳ &‌#8947; &‌#x22F3;
              // SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋴ &‌#8948; &‌#x22F4;
              // ELEMENT OF WITH DOT ABOVE ⋵ &‌#8949; &‌#x22F5;
              // ELEMENT OF WITH OVERBAR ⋶ &‌#8950; &‌#x22F6;
              // SMALL ELEMENT OF WITH OVERBAR ⋷ &‌#8951; &‌#x22F7;
              // ELEMENT OF WITH UNDERBAR ⋸ &‌#8952; &‌#x22F8;
              // ELEMENT OF WITH TWO HORIZONTAL STROKES ⋹ &‌#8953; &‌#x22F9;
              // CONTAINS WITH LONG HORIZONTAL STROKE ⋺ &‌#8954; &‌#x22FA;
              // CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋻ &‌#8955; &‌#x22FB;
              // SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋼ &‌#8956; &‌#x22FC;
              // CONTAINS WITH OVERBAR ⋽ &‌#8957; &‌#x22FD;
              // SMALL CONTAINS WITH OVERBAR ⋾ &‌#8958; &‌#x22FE;
              // NOTATION BAG MEMBERSHIP ⋿ &‌#8959; &‌#x22FF;
              // RIGHT ANGLE ∟ &‌#8735; &‌#x221F;
              // ANGLE Entity Code = &ang; ∠ &‌#8736; &‌#x2220;
              // MEASURED ANGLE ∡ &‌#8737; &‌#x2221;
              // SPHERICAL ANGLE ∢ &‌#8738; &‌#x2222;
              8291:'-EMPTY-', //Invisible Separator
              8739: '-123456-', // DIVIDES ∣ &‌#8739; &‌#x2223;
              // DOES NOT DIVIDE ∤ &‌#8740; &‌#x2224;
              8741: '-456-1256-', //PARALLEL TO ∥ &‌#8741; &‌#x2225;
              8742: '-46-456-1256-', //NOT PARALLEL TO ∦ &‌#8742; &‌#x2226;
              //RIGHT ANGLE WITH ARC ⊾ &‌#8894; &‌#x22BE;
              // RIGHT TRIANGLE ⊿ &‌#8895; &‌#x22BF;
              8869: '-45-1256-', // UP TACK (Perpendicular) Entity Code = &perp; ⊥ &‌#8869; &‌#x22A5;
              // RIGHT TACK ⊢ &‌#8866; &‌#x22A2;
              // LEFT TACK ⊣ &‌#8867; &‌#x22A3;
              // DOWN TACK ⊤ &‌#8868; &‌#x22A4;
              // THEREFORE (Triangular Dots) Entity Code = &there4; ∴ &‌#8756; &‌#x2234;
              // BECAUSE (Upside down Triangular Dots) ∵ &‌#8757; &‌#x2235;
              // PROPORTIONAL TO Entity Code = &prop; ∝ &‌#8733; &‌#x221D;
              // END OF PROOF (solid rectangle) ∎ &‌#8718; &‌#x220E;
              8773: '-456-2356-', //APPROXIMATELY EQUAL ≅ &cong; &‌#8773; &‌#x2245;
              8776: '-5-2356-', // ALMOST EQUAL (ASYMPTOTIC) ≈ &asymp; &‌#8776; &‌#x2248;
              8777: '-46-5-2356-', // NOT ALMOST EQUAL TO ≉ — &‌#8777; &‌#x2249;
              8764: '-45-2356-', // TILDE SIMILAR TO ∼ &sim; &‌#8764; &‌#x223C;
              8801: {
                  'math': '-2356-2356-', // IDENTICAL TO (three lines) ≡ &equiv; &‌#8801; &‌#x2261;
                  'chimie': '123456'
              },
              8802: '-46-2356-2356-', // NOT IDENTICAL TO ≢ — &‌#8802; &‌#x2262;
              // STRICTLY EQUIVALENT TO ≣ &‌#8803; &‌#x2263;
              // NOT IDENTICAL TO ≢ &‌#8802; &‌#x2262;
              // LESS-THAN OVER EQUAL TO ≦ &‌#8806; &‌#x2266;
              // GREATER-THAN OVER EQUAL TO ≧ &‌#8807; &‌#x2267;
              // LESS-THAN BUT NOT EQUAL TO ≨ &‌#8808; &‌#x2268;
              // GREATER-THAN BUT NOT EQUAL TO ≩ &‌#8809; &‌#x2269;
              8810: '-5-5-126-', // MUCH LESS-THAN ≪ &‌#8810; &‌#x226A;
              8811: '-5-5-345-', // MUCH GREATER-THAN ≫ &‌#8811; &‌#x226B;
              // BETWEEN ≬ &‌#8812; &‌#x226C;
              // NOT EQUIVALENT TO ≭ &‌#8813; &‌#x226D;
              // NOT LESS-THAN ≮ &‌#8814; &‌#x226E;
              // NOT GREATER-THAN ≯ &‌#8815; &‌#x226F;
              // NEITHER LESS-THAN NOR EQUAL TO ≰ &‌#8816; &‌#x2270;
              // NEITHER GREATER-THAN NOR EQUAL TO ≱ &‌#8817; &‌#x2271;
              // LESS-THAN OR EQUIVALENT TO ≲ &‌#8818; &‌#x2272;
              // GREATER-THAN OR EQUIVALENT TO ≳ &‌#8819; &‌#x2273;
              // NEITHER LESS-THAN NOR EQUIVALENT TO ≴ &‌#8820; &‌#x2274;
              // NEITHER GREATER-THAN NOR EQUIVALENT TO ≵ &‌#8821; &‌#x2275;
              // LESS-THAN OR GREATER-THAN ≶ &‌#8822; &‌#x2276;
              // GREATER-THAN OR LESS-THAN ≷ &‌#8823; &‌#x2277;
              // NEITHER LESS-THAN NOR GREATER-THAN ≸ &‌#8824; &‌#x2278;
              // NEITHER GREATER-THAN NOR LESS-THAN ≹ &‌#8825; &‌#x2279;
              // NOT TILDE ≁ &‌#8769; &‌#x2241;
              // MINUS TILDE ≂ &‌#8770; &‌#x2242;
              8771: '-5-2356-', // ASYMPTOTICALLY EQUAL TO ≃ &‌#8771; &‌#x2243;
              // NOT ASYMPTOTICALLY EQUAL TO ≄ &‌#8772; &‌#x2244;
              // APPROXIMATELY BUT NOT ACTUALLY EQUAL TO ≆ &‌#8774; &‌#x2246;
              // NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO ≇ &‌#8775; &‌#x2247;
              8778: '-456-5-2356-', // ALMOST EQUAL OR EQUAL TO ≊ &‌#8778; &‌#x224A;
              // TRIPLE TILDE ≋ &‌#8779; &‌#x224B;
              // ALL EQUAL TO ≌ &‌#8780; &‌#x224C;
              8723: '-36-235-', // MINUS-OR-PLUS SIGN ∓ &‌#8723; &‌#x2213;
              // DOT PLUS ∔ &‌#8724; &‌#x2214;
              8727: '-5-35-', // ASTERISK OPERATOR ∗ &‌#8727; &‌#x2217;
              8728: '-456-3456-', // RING OPERATOR ∘ &‌#8728; &‌#x2218;
              8729: '-35-35-', // BULLET OPERATOR ∙ &‌#8729; &‌#x2219;
              // PROPORTIONAL TO ∝ &‌#8733; &‌#x221D;
              // RATIO ∶ &‌#8758; &‌#x2236;
              // PROPORTION ∷ &‌#8759; &‌#x2237;
              // DOT MINUS ∸ &‌#8760; &‌#x2238 ;
              // EXCESS ∹ &‌#8761; &‌#x2239;
              // GEOMETRIC PROPORTION ∺ &‌#8762; &‌#x223A;
              // HOMOTHETIC ∻ &‌#8763; &‌#x223B;
              // REVERSED TILDE ∽ &‌#8765; &‌#x223D;
              // INVERTED LAZY S ∾ &‌#8766; &‌#x223E;
              // SINE WAVE ∿ &‌#8767; &‌#x223F;
              // WREATH PRODUCT ≀ &‌#8768; &‌#x2240;
              // EQUIVALENT TO ≍ &‌#8781; &‌#x224D;
              // GEOMETRICALLY EQUIVALENT TO ≎ &‌#8782; &‌#x224E;
              // DIFFERENCE BETWEEN ≏ &‌#8783; &‌#x224F;
              // APPROACHES THE LIMIT ≐ &‌#8784; &‌#x2250;
              // GEOMETRICALLY EQUAL TO ≑ &‌#8785; &‌#x2251;
              // APPROXIMATELY EQUAL TO OR THE IMAGE OF ≒ &‌#8786; &‌#x2252;
              // IMAGE OF OR APPROXIMATELY EQUAL TO ≓ &‌#8787; &‌#x2253;
              // COLON EQUALS ≔ &‌#8788; &‌#x2254;
              // EQUALS COLON ≕ &‌#8789; &‌#x2255;
              // RING IN EQUAL TO ≖ &‌#8790; &‌#x2256;
              // RING EQUAL TO ≗ &‌#8791; &‌#x2257;
              // CORRESPONDS TO ≘ &‌#8792; &‌#x2258;
              // ESTIMATES ≙ &‌#8793; &‌#x2259;
              // EQUIANGULAR TO ≚ &‌#8794; &‌#x225A;
              // STAR EQUALS ≛ &‌#8795; &‌#x225B;
              // DELTA EQUAL TO ≜ &‌#8796; &‌#x225C;
              // EQUAL TO BY DEFINITION ≝ &‌#8797; &‌#x225D;
              // MEASURED BY ≞ &‌#8798; &‌#x225E;
              // QUESTIONED EQUAL TO ≟ &‌#8799; &‌#x225F;
              8826: '-46-46-126-', // PRECEDES ≺ &‌#8826; &‌#x227A;
              8827: '-46-46-345-', // SUCCEEDS ≻ &‌#8827; &‌#x227B;
              8828: '-45-45-126-', // PRECEDES OR EQUAL TO ≼ &‌#8828; &‌#x227C;
              8829: '-45-45-345-', // SUCCEEDS OR EQUAL TO ≽ &‌#8829; &‌#x227D;
              // PRECEDES OR EQUIVALENT TO ≾ &‌#8830; &‌#x227E;
              // SUCCEEDS OR EQUIVALENT TO ≿ &‌#8831; &‌#x227F;
              // DOES NOT PRECEDE ⊀ &‌#8832; &‌#x2280;
              // DOES NOT SUCCEED ⊁ &‌#8833; &‌#x2281;
              // SQUARE IMAGE OF ⊏ &‌#8847; &‌#x228F;
              // SQUARE ORIGINAL OF ⊐ &‌#8848; &‌#x2290;
              // SQUARE IMAGE OF OR EQUAL TO ⊑ &‌#8849; &‌#x2291;
              // SQUARE ORIGINAL OF OR EQUAL TO ⊒ &‌#8850; &‌#x2292;
              // SQUARE CAP ⊓ &‌#8851; &‌#x2293;
              // SQUARE CUP ⊔ &‌#8852; &‌#x2294;
              // CIRCLED MINUS ⊖ &‌#8854; &‌#x2296;
              // CIRCLED DIVISION SLASH ⊘ &‌#8856; &‌#x2298;
              // CIRCLED DOT OPERATOR ⊙ &‌#8857; &‌#x2299;
              // CIRCLED RING OPERATOR ⊚ &‌#8858; &‌#x229A;
              // CIRCLED ASTERISK OPERATOR ⊛ &‌#8859; &‌#x229B;
              // CIRCLED EQUALS ⊜ &‌#8860; &‌#x229C;
              // CIRCLED DASH ⊝ &‌#8861; &‌#x229D;
              // SQUARED PLUS ⊞ &‌#8862; &‌#x229E;
              // SQUARED MINUS ⊟ &‌#8863; &‌#x229F;
              // SQUARED TIMES ⊠ &‌#8864; &‌#x22A0;
              // SQUARED DOT OPERATOR ⊪ &‌#8874; &‌#x22AA;
              // ASSERTION ⊦ &‌#8870; &‌#x22A6;
              // MODELS ⊧ &‌#8871; &‌#x22A7;
              // TRUE ⊨ &‌#8872; &‌#x22A8;
              // FORCES ⊩ &‌#8873; &‌#x22A9;
              // TRIPLE VERTICAL BAR RIGHT TURNSTILE ⊪ &‌#8874; &‌#x22AA;
              // DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊫ &‌#8875; &‌#x22AB;
              // DOES NOT PROVE ⊬ &‌#8876; &‌#x22AC;
              // NOT TRUE ⊭ &‌#8877; &‌#x22AD;
              // DOES NOT FORCE ⊮ &‌#8878; &‌#x22AE;
              // NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊯ &‌#8879; &‌#x22AF;
              // PRECEDES UNDER RELATION ⊰ &‌#8880; &‌#x22B0;
              // SUCCEEDS UNDER RELATION ⊱ &‌#8881; &‌#x22B1;
              // NORMAL SUBGROUP OF ⊲ &‌#8882; &‌#x22B2;
              // CONTAINS AS NORMAL SUBGROUP ⊳ &‌#8883; &‌#x22B3;
              // NORMAL SUBGROUP OF OR EQUAL TO ⊴ &‌#8884; &‌#x22B4;
              // CONTAINS AS NORMAL SUBGROUP OR EQUAL TO ⊵ &‌#8885; &‌#x22B5;
              // ORIGINAL OF ⊶ &‌#8886; &‌#x22B6;
              // IMAGE OF ⊷ &‌#8887; &‌#x22B7;
              // MULTIMAP ⊸ &‌#8888; &‌#x22B8;
              // HERMITIAN CONJUGATE MATRIX ⊹ &‌#8889; &‌#x22B9;
              // INTERCALATE ⊺ &‌#8890; &‌#x22BA;
              // DIAMOND OPERATOR ⋄ &‌#8900; &‌#x22C4;
              // STAR OPERATOR ⋆ &‌#8902; &‌#x22C6;
              // DIVISION TIMES ⋇ &‌#8903; &‌#x22C7;
              // BOWTIE ⋈ &‌#8904; &‌#x22C8;
              // LEFT NORMAL FACTOR SEMIDIRECT PRODUCT ⋉ &‌#8905; &‌#x22C9;
              // RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT ⋊ &‌#8906; &‌#x22CA;
              // LEFT SEMIDIRECT PRODUCT ⋋ &‌#8907; &‌#x22CB;
              // RIGHT SEMIDIRECT PRODUCT ⋌ &‌#8908; &‌#x22CC;
              // REVERSED TILDE EQUALS ⋍ &‌#8909; &‌#x22CD;
              // PITCHFORK ⋔ &‌#8916; &‌#x22D4;
              8917: '-5-2356-', // EQUAL AND PARALLEL TO ⋕ &‌#8917; &‌#x22D5;
              // LESS-THAN WITH DOT ⋖ &‌#8918; &‌#x22D6;
              // GREATER-THAN WITH DOT ⋗ &‌#8919; &‌#x22D7;
              // VERY MUCH LESS-THAN ⋘ &‌#8920; &‌#x22D8;
              // VERY MUCH GREATER-THAN ⋙ &‌#8921; &‌#x22D9;
              // LESS-THAN EQUAL TO OR GREATER-THAN ⋚ &‌#8922; &‌#x22DA;
              // GREATER-THAN EQUAL TO OR LESS-THAN ⋛ &‌#8923; &‌#x22DB;
              // EQUAL TO OR LESS-THAN ⋜ &‌#8924; &‌#x22DC;
              // EQUAL TO OR GREATER-THAN ⋝ &‌#8925; &‌#x22DD;
              // EQUAL TO OR PRECEDES ⋞ &‌#8926; &‌#x22DE;
              // EQUAL TO OR SUCCEEDS ⋟ &‌#8927; &‌#x22DF;
              // DOES NOT PRECEDE OR EQUAL ⋠ &‌#8928; &‌#x22E0;
              // DOES NOT SUCCEED OR EQUAL ⋡ &‌#8929; &‌#x22E1;
              // NOT SQUARE IMAGE OF OR EQUAL TO ⋢ &‌#8930; &‌#x22E2;
              // NOT SQUARE ORIGINAL OF OR EQUAL TO ⋣ &‌#8931; &‌#x22E3;
              // SQUARE IMAGE OF OR NOT EQUAL TO ⋤ &‌#8932; &‌#x22E4;
              // SQUARE ORIGINAL OF OR NOT EQUAL TO ⋥ &‌#8933; &‌#x22E5;
              // LESS-THAN BUT NOT EQUIVALENT TO ⋦ &‌#8934; &‌#x22E6;
              // GREATER-THAN BUT NOT EQUIVALENT TO ⋧ &‌#8935; &‌#x22E7;
              // PRECEDES BUT NOT EQUIVALENT TO ⋨ &‌#8936; &‌#x22E8;
              // SUCCEEDS BUT NOT EQUIVALENT TO ⋩ &‌#8937; &‌#x22E9;
              // NOT NORMAL SUBGROUP OF ⋪ &‌#8938; &‌#x22EA;
              // DOES NOT CONTAIN AS NORMAL SUBGROUP ⋫ &‌#8939; &‌#x22EB;
              // NOT NORMAL SUBGROUP OF OR EQUAL TO ⋬ &‌#8940; &‌#x22EC;
              // DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL ⋭ &‌#8941; &‌#x22ED;
              8942: '-256-256-256-', // VERTICAL ELLIPSIS ⋮ &‌#8942; &‌#x22EE;
              8230: '-256-256-256-', // HORIZONTAL ELLIPSIS ⋯
              8943: '-256-256-256-', // MIDLINE HORIZONTAL ELLIPSIS ⋯ &‌#8943; &‌#x22EF;
              8944: '-256-256-256-', // UP RIGHT DIAGONAL ELLIPSIS ⋰ &‌#8944; &‌#x22F0;
              8945: '-256-256-256-', // DOWN RIGHT DIAGONAL ELLIPSIS ⋱ &‌#8945; &‌#x22F1;
              /* lettres grecques */
              8721: '-46-45-234-', //CAPITAL SIGMA N-ARY SUMMATION ∑ &sum; &‌#8721; &‌#x2211;
              8719: '-46-45-1234-', //CAPITAL PI N-ARY PRODUCT ∏ &prod; &‌#8719; &‌#x220F;
              //N-ARY COPRODUCT (upside down capital pi) ∐ — &‌#8720; &‌#x2210;
              913: '-46-45-1-', //GREEK CAPITAL LETTER ALPHA Α &‌#913; &‌#x0391 &‌Alpha;
              914: '-46-45-12-', //GREEK CAPITAL LETTER BETA Β &‌#914; &‌#x0392 &‌Beta;
              915: '-46-45-1245-', //GREEK CAPITAL LETTER GAMMA Γ &‌#915; &‌#x0393 &‌Gamma;
              916: '-46-45-145-', //GREEK CAPITAL LETTER DELTA Δ &‌#916; &‌#x0394 &‌Delta;
              917: '-46-45-15-', //GREEK CAPITAL LETTER EPSILON Ε &‌#917; &‌#x0395 &‌Epsilon;
              918: '-46-45-1356-', //GREEK CAPITAL LETTER ZETA Ζ &‌#918; &‌#x0396 &‌Zeta;
              919: '-46-45-125-', //GREEK CAPITAL LETTER ETA Η &‌#919; &‌#x0397 &‌Eta;
              920: '-46-45-245-', //GREEK CAPITAL LETTER THETA Θ &‌#920; &‌#x0398 &‌Theta;
              921: '-46-45-24-', //GREEK CAPITAL LETTER IOTA Ι &‌#921; &‌#x0399 &‌Iota;
              922: '-46-45-13-', //GREEK CAPITAL LETTER KAPPA Κ &‌#922; &‌#x039A &‌Kappa;
              923: '-46-45-123-', //GREEK CAPITAL LETTER LAM(B)DA Λ &‌#923; &‌#x039B &‌Lambda;
              924: '-46-45-134-', //GREEK CAPITAL LETTER MU Μ &‌#924; &‌#x039C &‌Mu;
              925: '-46-45-1345-', //GREEK CAPITAL LETTER NU Ν &‌#925; &‌#x039D &‌Nu;
              926: '-46-45-1346-', //GREEK CAPITAL LETTER XI Ξ &‌#926; &‌#x039E &‌Xi;
              927: '-46-45-135-', //GREEK CAPITAL LETTER OMICRON Ο &‌#927; &‌#x039F &‌Omicron;
              928: '-46-45-1234-', //GREEK CAPITAL LETTER PI Π &‌#928; &‌#x03A0 &‌Pi;
              929: '-46-45-1235-', //GREEK CAPITAL LETTER RHO Ρ &‌#929; &‌#x03A1 &‌Rho;
              931: '-46-45-234-', //GREEK CAPITAL LETTER SIGMA Σ &‌#931; &‌#x03A3 &‌Sigma;
              932: '-46-45-2345-', //GREEK CAPITAL LETTER TAU Τ &‌#932; &‌#x03A4 &‌Tau;
              933: '-46-45-136-', //GREEK CAPITAL LETTER UPSILON Υ &‌#933; &‌#x03A5 &‌Upsilon;
              934: '-46-45-124-', //GREEK CAPITAL LETTER PHI Φ &‌#934; &‌#x03A6 &‌Phi;
              935: '-46-45-12345-', //GREEK CAPITAL LETTER CHI Χ &‌#935; &‌#x03A7 &‌Chi;
              936: '-46-45-13456-', //GREEK CAPITAL LETTER PSI Ψ &‌#936; &‌#x03A8 &‌Psi;
              937: '-46-45-2456-', //GREEK CAPITAL LETTER OMEGA Ω &‌#937; &‌#x03A9 &‌Omega;
              945: '-45-1-', //GREEK SMALL LETTER ALPHA α &‌#945; &‌#x03B1 &‌alpha;
              946: '-45-12-', //GREEK SMALL LETTER BETA β &‌#946; &‌#x03B2 &‌beta;
              947: '-45-1245-', //GREEK SMALL LETTER GAMMA γ &‌#947; &‌#x03B3 &‌gamma;
              948: '-45-145-', //GREEK SMALL LETTER DELTA δ &‌#948; &‌#x03B4 &‌delta;
              949: '-45-15-', //GREEK SMALL LETTER EPSILON ε &‌#949; &‌#x03B5 &‌epsilon;
              1013: '-45-15-', //Greek Lunate Epsilon Symbol ϵ &‌#1013; &#x3f5 &‌epsilon;
              950: '-45-1356-', //GREEK SMALL LETTER ZETA ζ &‌#950; &‌#x03B6 &‌zeta;
              951: '-45-125-', //GREEK SMALL LETTER ETA η &‌#951; &‌#x03B7 &‌eta;
              952: '-45-245-', //GREEK SMALL LETTER THETA θ &‌#952; &‌#x03B8 &‌theta;
              953: '-45-24-', //GREEK SMALL LETTER IOTA ι &‌#953; &‌#x03B9 &‌iota;
              954: '-45-13-', //GREEK SMALL LETTER KAPPA κ &‌#954; &‌#x03BA &‌kappa;
              955: '-45-123-', //GREEK SMALL LETTER LAM(B)DA λ &‌#955; &‌#x03BB &‌lambda;
              956: '-45-134-', //GREEK SMALL LETTER MU μ &‌#956; &‌#x03BC &‌mu;
              957: '-45-1345-', //GREEK SMALL LETTER NU ν &‌#957; &‌#x03BD &‌nu;
              958: '-45-1346-', //GREEK SMALL LETTER XI ξ &‌#958; &‌#x03BE &‌xi;
              959: '-45-135-', //GREEK SMALL LETTER OMICRON ο &‌#959; &‌#x03BF &‌omicron;
              960: '-45-1234-', //GREEK SMALL LETTER PI π &‌#960; &‌#x03C0 &‌pi;
              961: '-45-1235-', //GREEK SMALL LETTER RHO ρ &‌#961; &‌#x03C1 &‌rho;
              //GREEK SMALL LETTER FINAL SIGMA ς &‌#962; &‌#x03C2  
              963: '-45-234-', //GREEK SMALL LETTER SIGMA σ &‌#963; &‌#x03C3 &‌sigma;
              964: '-45-2345-', //GREEK SMALL LETTER TAU τ &‌#964; &‌#x03C4 &‌tau;
              965: '-45-136-', //GREEK SMALL LETTER UPSILON υ &‌#965; &‌#x03C5 &‌upsilon;
              966: '-45-124-', //GREEK SMALL LETTER PHI φ &‌#966; &‌#x03C6 &‌phi;
              967: '-45-12345-', //GREEK SMALL LETTER CHI χ &‌#967; &‌#x03C7 &‌chi;
              968: '-45-13456-', //GREEK SMALL LETTER PSI ψ &‌#968; &‌#x03C8 &‌psi;
              969: '-45-2456-', //GREEK SMALL LETTER OMEGA ω &‌#969; &‌#x03C9 &‌omega;
              /* Flèches */
              8592: '-456-246-', // ← 8592 2190 &larr; LEFTWARDS ARROW
              8593: '-45-12456-', // ↑ 8593 2191 &uarr; UPWARDS ARROW
              8594: '-456-156-', // → 8594 2192 &rarr; RIGHTWARDS ARROW
              8595: '-46-12456-', // ↓ 8595 2193 &darr; DOWNWARDS ARROW
              8596: '-5-12456-', // ↔ 8596 2194 &harr; LEFT RIGHT ARROW
              //↕ 8597 2195   UP DOWN ARROW
              8598: '-45-246-', // ↖ 8598 2196   NORTH WEST ARROW
              8599: '-45-156-', // ↗ 8599 2197   NORTH EAST ARROW
              8600: '-46-156-', // ↘ 8600 2198   SOUTH EAST ARROW
              8601: '-46-246-', // ↙ 8601 2199   SOUTH WEST ARROW
              /* ↚ 8602 219A   LEFTWARDS ARROW WITH STROKE
               ↛ 8603 219B   RIGHTWARDS ARROW WITH STROKE
               ↜ 8604 219C   LEFTWARDS WAVE ARROW
               ↝ 8605 219D   RIGHTWARDS WAVE ARROW
               ↞ 8606 219E   LEFTWARDS TWO HEADED ARROW
               ↟ 8607 219F   UPWARDS TWO HEADED ARROW
               ↠ 8608 21A0   RIGHTWARDS TWO HEADED ARROW
               ↡ 8609 21A1   DOWNWARDS TWO HEADED ARROW
               ↢ 8610 21A2   LEFTWARDS ARROW WITH TAIL
               ↣ 8611 21A3   RIGHTWARDS ARROW WITH TAIL
               ↤ 8612 21A4   LEFTWARDS ARROW FROM BAR
               ↥ 8613 21A5   UPWARDS ARROW FROM BAR
               */
              8614: '-5-156-', // ↦ 8614 21A6   RIGHTWARDS ARROW FROM BAR
              /*
              ↧ 8615 21A7   DOWNWARDS ARROW FROM BAR
              ↨ 8616 21A8   UP DOWN ARROW WITH BASE
              ↩ 8617 21A9   LEFTWARDS ARROW WITH HOOK
              ↪ 8618 21AA   RIGHTWARDS ARROW WITH HOOK
              ↫ 8619 21AB   LEFTWARDS ARROW WITH LOOP
              ↬ 8620 21AC   RIGHTWARDS ARROW WITH LOOP
              ↭ 8621 21AD   LEFT RIGHT WAVE ARROW
              ↮ 8622 21AE   LEFT RIGHT ARROW WITH STROKE
              ↯ 8623 21AF   DOWNWARDS ZIGZAG ARROW
              ↰ 8624 21B0   UPWARDS ARROW WITH TIP LEFTWARDS
              ↱ 8625 21B1   UPWARDS ARROW WITH TIP RIGHTWARDS
              ↲ 8626 21B2   DOWNWARDS ARROW WITH TIP LEFTWARDS
              ↳ 8627 21B3   DOWNWARDS ARROW WITH TIP RIGHTWARDS
              */
              8628: '-46-156-', //↴ 8628 21B4   RIGHTWARDS ARROW WITH CORNER DOWNWARDS
              /*↵ 8629 21B5 &crarr; DOWNWARDS ARROW WITH CORNER LEFTWARDS
              ↶ 8630 21B6   ANTICLOCKWISE TOP SEMICIRCLE ARROW
              ↷ 8631 21B7   CLOCKWISE TOP SEMICIRCLE ARROW
              ↸ 8632 21B8   NORTH WEST ARROW TO LONG BAR
              ↹ 8633 21B9   LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR
              ↺ 8634 21BA   ANTICLOCKWISE OPEN CIRCLE ARROW
              ↻ 8635 21BB   CLOCKWISE OPEN CIRCLE ARROW
              ↼ 8636 21BC   LEFTWARDS HARPOON WITH BARB UPWARDS
              ↽ 8637 21BD   LEFTWARDS HARPOON WITH BARB DOWNWARDS
              ↾ 8638 21BE   UPWARDS HARPOON WITH BARB RIGHTWARDS
              ↿ 8639 21BF   UPWARDS HARPOON WITH BARB LEFTWARDS
              ⇀ 8640 21C0   RIGHTWARDS HARPOON WITH BARB UPWARDS
              ⇁ 8641 21C1   RIGHTWARDS HARPOON WITH BARB DOWNWARDS
              ⇂ 8642 21C2   DOWNWARDS HARPOON WITH BARB RIGHTWARDS
              ⇃ 8643 21C3   DOWNWARDS HARPOON WITH BARB LEFTWARDS
              */
              8644: '-456-12456-', // ⇄ 8644 21C4   RIGHTWARDS ARROW OVER LEFTWARDS ARROW
              /*
              ⇅ 8645 21C5   UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW
              ⇆ 8646 21C6   LEFTWARDS ARROW OVER RIGHTWARDS ARROW
              ⇇ 8647 21C7   LEFTWARDS PAIRED ARROWS
              ⇈ 8648 21C8   UPWARDS PAIRED ARROWS
              ⇉ 8649 21C9   RIGHTWARDS PAIRED ARROWS
              ⇊ 8650 21CA   DOWNWARDS PAIRED ARROWS
              */
              // ⇋ 8651 21CB   LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON

              8652: '-456-12456-', // ⇌ 8652 21CC   RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON

              8653: '-46-5-25-', // ⇍ 8653 21CD   LEFTWARDS DOUBLE ARROW WITH STROKE
              /*
              ⇎ 8654 21CE   LEFT RIGHT DOUBLE ARROW WITH STROKE
              */
              8655: '-46-25-2-', // ⇏ 8655 21CF   RIGHTWARDS DOUBLE ARROW WITH STROKE
              8656: '-5-25-', // ⇐ 8656 21D0 &lArr; LEFTWARDS DOUBLE ARROW
              /*
              ⇑ 8657 21D1 &uArr; UPWARDS DOUBLE ARROW
              */
              8658: '-25-2-', // ⇒ 8658 21D2 &rArr; RIGHTWARDS DOUBLE ARROW
              /*
              ⇓ 8659 21D3 &dArr; DOWNWARDS DOUBLE ARROW
              ⇔ 8660 21D4 &hArr; LEFT RIGHT DOUBLE ARROW
              ⇕ 8661 21D5   UP DOWN DOUBLE ARROW
              ⇖ 8662 21D6   NORTH WEST DOUBLE ARROW
              ⇗ 8663 21D7   NORTH EAST DOUBLE ARROW
              ⇘ 8664 21D8   SOUTH EAST DOUBLE ARROW
              ⇙ 8665 21D9   SOUTH WEST DOUBLE ARROW
              ⇚ 8666 21DA   LEFTWARDS TRIPLE ARROW
              ⇛ 8667 21DB   RIGHTWARDS TRIPLE ARROW
              ⇜ 8668 21DC   LEFTWARDS SQUIGGLE ARROW
              ⇝ 8669 21DD   RIGHTWARDS SQUIGGLE ARROW
              ⇞ 8670 21DE   UPWARDS ARROW WITH DOUBLE STROKE
              ⇟ 8671 21DF   DOWNWARDS ARROW WITH DOUBLE STROKE
              ⇠ 8672 21E0   LEFTWARDS DASHED ARROW
              ⇡ 8673 21E1   UPWARDS DASHED ARROW
              ⇢ 8674 21E2   RIGHTWARDS DASHED ARROW
              ⇣ 8675 21E3   DOWNWARDS DASHED ARROW
              ⇤ 8676 21E4   LEFTWARDS ARROW TO BAR
              ⇥ 8677 21E5   RIGHTWARDS ARROW TO BAR
              ⇦ 8678 21E6   LEFTWARDS WHITE ARROW
              ⇧ 8679 21E7   UPWARDS WHITE ARROW
              ⇨ 8680 21E8   RIGHTWARDS WHITE ARROW
              ⇩ 8681 21E9   DOWNWARDS WHITE ARROW
              ⇪ 8682 21EA   UPWARDS WHITE ARROW FROM BAR
              ⇫ 8683 21EB   UPWARDS WHITE ARROW ON PEDESTAL
              ⇬ 8684 21EC   UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR
              ⇭ 8685 21ED   UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR
              ⇮ 8686 21EE   UPWARDS WHITE DOUBLE ARROW
              ⇯ 8687 21EF   UPWARDS WHITE DOUBLE ARROW ON PEDESTAL
              ⇰ 8688 21F0   RIGHTWARDS WHITE ARROW FROM WALL
              ⇱ 8689 21F1   NORTH WEST ARROW TO CORNER
              ⇲ 8690 21F2   SOUTH EAST ARROW TO CORNER
              ⇳ 8691 21F3   UP DOWN WHITE ARROW
              ⇴ 8692 21F4   RIGHT ARROW WITH SMALL CIRCLE
              ⇵ 8693 21F5   DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW
              ⇶ 8694 21F6   THREE RIGHTWARDS ARROWS
              ⇷ 8695 21F7   LEFTWARDS ARROW WITH VERTICAL STROKE
              ⇸ 8696 21F8   RIGHTWARDS ARROW WITH VERTICAL STROKE
              ⇹ 8697 21F9   LEFT RIGHT ARROW WITH VERTICAL STROKE
              ⇺ 8698 21FA   LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE
              ⇻ 8699 21FB   RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE
              ⇼ 8700 21FC   LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE
              ⇽ 8701 21FD   LEFTWARDS OPEN-HEADED ARROW
              ⇾ 8702 21FE   RIGHTWARDS OPEN-HEADED ARROW
              ⇿ 8703 21FF   LEFT RIGHT OPEN-HEADED ARROW
              */
              9633: '-456-1456-', // □ alembertien
              9651: '-46-45-145-', // White Up-Pointing Triangle △
              10548: '-45-156-', // ⤴ Arrow Pointing Rightwards Then Curving Upwards
              10549: '-46-156-', // ⤵ ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS
              10231: '-5-12456-', // ⟷
          }
      };
 // table américaine basée sur DBTWin
 // Utilisée pour le braille direct
 var TBAdbt = {
     ' ': 'BLANK',
     'a': 1,
     'b': 12,
     'c': 14,
     'd': 145,
     'e': 15,
     'f': 124,
     'g': 1245,
     'h': 125,
     'i': 24,
     'j': 245,
     'k': 13,
     'l': 123,
     'm': 134,
     'n': 1345,
     'o': 135,
     'p': 1234,
     'q': 12345,
     'r': 1235,
     's': 234,
     't': 2345,
     'u': 136,
     'v': 1236,
     'w': 2456,
     'x': 1346,
     'y': 13456,
     'z': 1356,
     '&': 12346,
     '=': 123456,
     '(': 12356,
     '!': 2346,
     ')': 23456,
     '*': 16,
     '<': 126,
     '%': 146,
     ':': 156,
     '$': 1246,
     ']': 12456,
     '\\': 1256,
     '[': 246,
     '1': 2,
     '2': 23,
     '3': 25,
     '4': 256,
     '5': 26,
     '6': 235,
     '7': 2356,
     '8': 236,
     '9': 35,
     '0': 356,
     '/': 34,
     '+': 346,
     '#': 3456,
     '>': 345,
     "'": 3,
     '-': 36,
     '@': 4,
     '^': 45,
     '_': 456,
     '"': 5,
     '.': 46,
     ';': 56,
     ',': 6
   },

   // mathématiques américain
   // -56- => dots56
   mathTBA = {
     'caracMath': {
       'coupureFormule': '5',
       'espaceInsecable': '-BLANK-',
       'separateurIndiceExposant': {
         'virgule': '-246-',
         'pointvirgule': '-456-246-'
       },
       'indicateurNumerique': '3456',
       'indicateurFraction': {
         'simple': {
           'open': '-1456-',
           'close': '-3456-'
         },
         'complexe': {
           'open': '-6-1456-',
           'close': '-6-3456-'
         },
         'hypercomplexe': {
           'open': '-6-6-1456-',
           'close': '-6-6-3456-'
         },
         'fractionnaire': {
           'open': '-456-1456-',
           'close': '-456-3456-'
         }
       },
       'fraction': {
         'simple': {
           'oblique': '-456-34-',
           'horizontale': '-34-'
         },
         'fractionnaire': {
           'oblique': '-456-34-',
           'horizontale': '-34-'
         },
         'complexe': {
           'oblique': '-6-456-34-',
           'horizontale': '-6-34-'
         },
         'hypercomplexe': {
           // 'oblique':'-456-34-',
           'horizontale': '-6-6-34-'
         }
       },
       'blocks': {
         'open': '',
         'close': ''
       },
       'parenthese': {
         'open': '-12356-',
         'close': '-23456-'
       },
       'grandeparenthese1': { // imbrication
         'open': '-5-12356-',
         'close': '-5-23456-'
       },
       'grandeparenthese2': { // sur plusieurs lignes
         'open': '-45-12356-',
         'close': '-45-23456-'
       },
       'accolade': {
         'open': '-46-12356-',
         'close': '-46-23456-'
       },
       'grandeaccolade': { //plusieurs lignes
         'open': '-456-12356-',
         'close': '-456-23456-'
       },
       'barre': {
         'open': '-1256-',
         'close': '-1256-'
       },
       'grandebarre': { //plusieurs lignes
         'open': '-6-1256-',
         'close': '-6-1256-'
       },
       'doublebarre': {
         'open': '-1256-1256-',
         'close': '-1256-1256-'
       },
       'grandedoublebarre': { //plusieurs lignes
         'open': '-46-123456-',
         'close': '-46-123456-'
       },
       'crochet': {
         'open': '-4-12356-',
         'close': '-4-23456-',
       },
       'grandcrochet1': {
         'open': '-5-12356-',
         'close': '-5-23456-',
       },
       'grandcrochet2': { // plusieurs lignes
         'open': '-45-12356-',
         'close': '-45-23456-',
       },
       'crochetdouble': {
         'open': '-46-12356-',
         'close': '-46-23456-'
       },
       'indice': '-56-',
       'exposant': '-45-',
       'suscrit': '-45-',
       'souscrit': '-56-',

       'matrice': {
         'sepLigne': '-6-345-',
       },
       'racine': '-345-',
       'finRacine': '-12456-',
       'ordreRadical': '-46-',
       'indiceRadical': '-126-',
       'majuscule': '-6-',
       'indicateurBase': '-5-',
       'majusculeronde': '-46-5-'

     },
     'caracDec': {
       susouscrit: {
         8594: '-46-25-', //vecteur
         175: '-456-25-', //barre
         732: '-5-456-25-', //tilde
         8994: '-4-25-', //arc
         94: '-45-25-', //angle
       },
       /* Alphabet majuscule */
       65: '-6-1-', // A
       66: '-6-12-', // B
       67: '-6-14-', //...
       68: '-6-145-',
       69: '-6-15-',
       70: '-6-124-',
       71: '-6-1245-',
       72: '-6-125-',
       73: '-6-24-',
       74: '-6-245-',
       75: '-6-13-',
       76: '-6-123-',
       77: '-6-134-',
       78: '-6-1345-',
       79: '-6-135-',
       80: '-6-1234-',
       81: '-6-12345-',
       82: '-6-1235-',
       83: '-6-234-',
       84: '-6-2345-',
       85: '-6-136-',
       86: '-6-1236-',
       87: '-6-2456-',
       88: '-6-1346-',
       89: '-6-13456-',
       90: '-6-1356-',
       /* Alphabet minuscule */
       97: '-1-', // a
       98: '-12-', // b
       99: '-14-', // ...
       100: '-145-',
       101: '-15-',
       102: '-124-',
       103: '-1245-',
       104: '-125-',
       105: '-24-',
       106: '-245-',
       107: '-13-',
       108: '-123-',
       109: '-134-',
       110: '-1345-',
       111: '-135-',
       112: '-1234-',
       113: '-12345-',
       114: '-1235-',
       115: '-234-',
       116: '-2345-',
       117: '-136-',
       118: '-1236-',
       119: '-2456-',
       120: '-1346-',
       121: '-13456-',
       122: '-1356-',
       /* chiffres */
       48: '-356-', //0
       49: '-2-', // 1
       50: '-23-', // 2
       51: '-25-', // 3
       52: '-256-', // 4
       53: '-26-', // 5
       54: '-235-', // 6
       55: '-2356-', // 7
       56: '-236-', // 8
       57: '-35-', // 9
       /* fin chiffres */
       39: '-3-', // '
       40: '-12356-', // (
       41: '-23456-', // )  
       58: '-25-', // :
       59: '-23-', // ;
       91: '-12356-', // [
       93: '-23456-', // ]
       123: '-46-12356-', // { accolade gauche
       125: '-46-23456-', // { accolade droite
       124: '-1256-', // |
       8214: '-1256-1256-', // ||
       44: '-6-', // ,
       45: '-36-', // -
       46: '-46-', // .
       42: '-4-3456-', // *
       43: '-346-', // +
       47: '-456-34-', // /
       61: '-BLANK-46-13-BLANK-', // =
       33: '-12346-', // factoriel !
       183: '-35-35-', // middle dot &#xB7;
       176: '-135-', // DEGREE SYMBOL ° &deg; &‌#176; &‌#xB0;
       181: '-45-134-', //MICRO MU SYMBOL µ &micro; &‌#181; &‌#xB5;
       //PER MILLE (1/1000th) ‰ &permil; &‌#8240; &‌#2030;
       60: '-5-126-', //LESS THAN <  &lt; &‌#60; &‌#x3C;
       62: '-5-345-', //GREATER THAN > &gt; &‌#62; &‌#x3E;
       8804: '-45-126-', //LESS THAN OR EQUAL TO ≤ &le; &‌#8804; &‌#x2264;
       10877: '-45-126-', // LESS-THAN OR SLANTED EQUAL TO ⩽
       10878: '-45-345-', // GREATER-THAN OR SLANTED EQUAL TO ⩾
       8805: '-45-345-', //GREATER THAN OR EQUAL TO ≥ &ge; &‌#8805; &‌#x2265;

       177: '-235-36-', //PLUS OR MINUS ± &plusmn; &‌#177; &‌#xB1;
       8800: '-235-2356-', //NOT EQUALS ≠ &ne; &‌#8800; &‌#x2260;
       247: '-25-', //DIVISION SIGN ÷ &divide; &‌#247; &‌#xF7;
       215: '-35-', //TIMES X × &times; &‌#215; &‌#x00D7;
       8722: '-36-', //MINUS − &minus; &‌#8722; &‌#x2212;
       8725: '-456-34-', //DIVISION SLASH ∕ — &‌#8725; &‌#x2215;
       8260: '-456-34-', //FRACTION SLASH ⁄ &frasl &‌#8260; &‌#x2044;
       8734: '-45-14-', //INFINITY ∞ &infin; &‌#8734; &‌#x221E;
       //ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
       //FUNCTION ITALIC F ƒ &fnof; &‌#402; &‌#x192;
       8242: '-3-', //PRIME (single quote) ′ &prime; &‌#8242; &‌#x2032;
       8243: '-3-3-', //DOUBLE PRIME (double quote) ″ &Prime; &‌#8243; &‌#x2033;
       8244: '-3-3-3-', //TRIPLE PRIME (triple quote) ‴ — &‌#8244; &‌#x2034;
       //THEREFORE (Triangular Dots) ∴ &there4; &‌#8756; &‌#x2234;
       8901: '-35-', //DOT OPERATOR ⋅ &sdot; &‌#8901; &‌#x22C5;
       //SUPERSCRIPT TWO ¹ &sup1; &‌#185; &‌#xB9;
       //SUPERSCRIPT TWO ² &sup2; &‌#178; &‌#xB2;
       //SUPERSCRIPT THREE ³ &sup3; &‌#179; &‌#xB3;
       //LEFT ANGLE BRACKET ⟨ &lang; &‌#9001; &‌#x2329;
       //RIGHT ANGLE BRACKET ⟩ &rang; &‌#9002; &‌#x232A;
       //LEFT CEILING BRACKET ⌈ &lceil; &‌#8968; &‌#x2308;
       //RIGHT CEILING BRACKET ⌉ &rceil; &‌#8969; &‌#x2309;
       //LEFT FLOOR BRACKET ⌊ &lceil; &‌#8970; &‌#x230A;
       //RIGHT FLOOR BRACKET ⌋ &rceil; &‌#8971; &‌#x230B;
       8853: '-46-235-', //CIRCLED PLUS (Direct Sum) ⊕ &oplus; &‌#8853; &‌#x2295;
       8855: '-46-35-', //CIRCLED TIMES (Vector Product) ⊗ &otimes; &‌#8855; &‌#x2297;
       8747: '-2346-', //INTEGRAL ∫ &int; &‌#8747; &‌#x222B;
       8706: '-5-145-', //PARTIAL DIFFERENTIAL ∂ &part; &‌#8706; &‌#2202;
       8710: '-46-45-145-', //INCREMENT (Difference or capital Delta) Δ &Delta; &‌#8710; &‌#x2206;
       8711: '-46-1456-', //NABLA (Backward Difference, Grad or upside down triangle) ∇ &nabla; &‌#8711; &‌#x2207;
       8748: '-2346-2346-', //DOUBLE INTEGRAL ∬ &‌#8748; &‌#x222C;
       8749: '-2346-2346-2346-', //TRIPLE INTEGRAL ∭ &‌#8749; &‌#x222D;
       10764: '-2346-2346-2346-2346-', //QUADRUPLE INTEGRAL ⨌ &‌#10764; &‌#x2A0C;
       8750: '-2346-6-1246-14-12456-', //CONTOUR INTEGRAL ∮ &‌#8750; &‌#x222E;
       8751: '-46-12346-12346-', //SURFACE INTEGRAL ∯ &‌#8751; &‌#x222F;
       8752: '-46-12346-12346-12346-', //VOLUME INTEGRAL ∰ &‌#8752; &‌#x2230;
       //CLOCKWISE INTEGRAL ∱ &‌#8753; &‌#x2231;
       //ANTICLOCKWISE INTEGRAL ⨑ &‌#10769; &‌#x2A11;
       //CLOCKWISE CONTOUR INTEGRAL ∲ &‌#8754; &‌#x2232;
       //ANTICLOCKWISE CONTOUR INTEGRAL ∳ &‌#8755; &‌#x2233;
       // ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
       // WEIERSTRASS POWER SET (Script Capital P) ℘ &weierp; &‌#8472; &‌#x2118;
       // IMAGINARY Part (Blackletter I) ℑ &image; &‌#8465; &‌#x2111;
       // REAL NUMBER (Blackletter R) ℜ &real; &‌#8476; &‌#x211C;
       8477: '-46-46-1235-', //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
       8450: '-46-46-14-', //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
       8469: '-46-46-1345-', //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
       8473: '-46-46-1234-', // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
       8474: '-46-46-12345-', // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
       8484: '-46-46-1356-', // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
       8704: '-4-12346-', // FOR ALL (Upside-down A) ∀ &forall;  &‌#8704; &‌#x2200;
       8705: '-46-146-', // COMPLEMENT (Thin C) ∁ — &‌#8705; &‌#x2201;
       8707: '-4-123456-', // THERE EXISTS (Backwards E) ∃ &exist;  &‌#8707; &‌#x2203;
       8708: '-46-456-16-', // THERE DOES NOT EXIST (Backwards E with slash) ∄ — &‌#8708; &‌#x2204;
       8709: '-45-3456-', // EMPTY SET (O slash) ∅ &empty;  &‌#8709; &‌#x2205;
       // NOT SYMBOL (Corner) ¬ &not;  &‌#172; &‌#xAC;
       // TILDE (Alternate Not Symbol) ˜ &tilde;  — —
       8743: '-45-35-', // LOGICAL AND (Wedge or Upside down V Symbol) ∧ &and;  &‌#8743; &‌#x2227;
       8744: '-45-26-', // LOGICAL OR (V Symbol) ∨ &or;  &‌#8744; &‌#x2228;
       // XOR ⊻ — &‌#8891; &‌#x22BB;
       // NAND ⊼ — &‌#8892; &‌#x22BC;
       // NOR ⊽ — &‌#8893; &‌#x22BD;
       8745: '-45-235-', // INTERSECTION (Cap or Upside Down U) ∩ &cap;  &‌#8745; &‌#x2229;
       8746: '-456-235-', // UNION (Cup or U Symbol) ∪ &cup;  &‌#8746; &‌#x222A;
       8712: '-45-16-', //ELEMENT OF ∈ &isin;  &‌#8712; &‌#x2208;
       8713: '-45-34-', // NOT AN ELEMENT OF ∉ &notin;  &‌#8713; &‌#x2209;
       8714: '-45-16-', // SMALL ELEMENT OF ∊ — &‌#8714; &‌#x220A;
       8715: '-46-45-16-', // CONTAINS AS MEMBER ∋ &ni;  &‌#8715; &‌#x220B;
       8716: '-46-45-34-', // DOES NOT CONTAIN AS MEMBER ∌ — &‌#8716; &‌#x220C;
       8717: '-46-45-16-', // SMALL CONTAINS AS MEMBER ∍ — &‌#8717; &‌#x220D;
       // SET MINUS ∖ — &‌#8726; &‌#x2216;
       8834: '-46-16-', //SUBSET OF (Sideways U with cap to left) ⊂ &sub;  &‌#8834; &‌#x2282;
       8835: '-5-16-', // SUPERSET OF (Sideways U with cap to right) ⊃ &sup;  &‌#8835; &‌#x2283;
       8836: '-46-34-', //NOT A SUBSET OF (Subset with Slash) ⊄ &nsub;  &‌#8836; &‌#x2284;
       8837: '-5-34-', // NOT A SUPERSET OF (Superset with slash) ⊅ — &‌#8837; &‌#x2285;
       8838: '-456-46-16-', // SUBSET OF OR EQUAL TO (Subset with line below) ⊆ &sube;  &‌#8838; &‌#x2286;
       // SUPERSET OF OR EQUAL TO (Superset with line below) ⊇ &supe;  &‌#8839; &‌#x2287;
       // NEITHER A SUBSET OF NOR EQUAL TO ⊈ — &‌#8840; &‌#x2288;
       // NEITHER A SUPERSET OF NOR EQUAL TO ⊉ — &‌#8841; &‌#x2289;
       // SUBSET OF WITH NOT EQUAL TO ⊊ — &‌#8842; &‌#x228A;
       // SUPERSET OF WITH NOT EQUAL TO ⊋ — &‌#8843; &‌#x228B;
       //DIAMOND OPERATOR (Possibility) ⋄ — &‌#8900; &‌#x22C4;
       // ASYMPTOTICALLY EQUAL TO One to one Correspondence ≃ — &‌#8771; &‌#x2243;
       // NOT ASYMPTOTICALLY EQUAL TO ≄ — &‌#8772; &‌#x2244;
       // MULTISET (U with arrow) ⊌ — &‌#8844; &‌#x228C;
       // MULTISET MULTIPLICATION (U with dot in center) ⊍ — &‌#8845; &‌#x228D;
       // MULTISET UNION (U with plus in center) ⊎ — &‌#8846; &‌#x228E;
       // DOUBLE SUBSET ⋐ — &‌#8912; &‌#x22D0;
       // DOUBLE SUPERSET ⋑ — &‌#8913; &‌#x22D1;
       // DOUBLE INTERSECTION ⋒ — &‌#8914; &‌#x22D2;
       // DOUBLE UNION ⋓ — &‌#8915; &‌#x22D3;
       // N-ARY LOGICAL AND ⋀ — &‌#8896; &‌#x22C0;
       // N-ARY LOGICAL OR ⋁ — &‌#8897; &‌#x22C1;
       // N-ARY INTERSECTION/td> ⋂ — &‌#8898; &‌#x22C2;
       // N-ARY UNION ⋃ — &‌#8899; &‌#x22C3;
       // CURLY LOGICAL OR ⋎ — &‌#8910; &‌#x22CE;
       // CURLY LOGICAL AND ⋏ — &‌#8911; &‌#x22CF;
       // CIRCLED MINUS ⊖ — &‌#8854; &‌#x2296;
       // CIRCLED DIVISION SLASH ⊘ — &‌#8856; &‌#x2298;
       // ELEMENT OF WITH LONG HORIZONTAL STROKE ⋲ &‌#8946; &‌#x22F2;
       // ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋳ &‌#8947; &‌#x22F3;
       // SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋴ &‌#8948; &‌#x22F4;
       // ELEMENT OF WITH DOT ABOVE ⋵ &‌#8949; &‌#x22F5;
       // ELEMENT OF WITH OVERBAR ⋶ &‌#8950; &‌#x22F6;
       // SMALL ELEMENT OF WITH OVERBAR ⋷ &‌#8951; &‌#x22F7;
       // ELEMENT OF WITH UNDERBAR ⋸ &‌#8952; &‌#x22F8;
       // ELEMENT OF WITH TWO HORIZONTAL STROKES ⋹ &‌#8953; &‌#x22F9;
       // CONTAINS WITH LONG HORIZONTAL STROKE ⋺ &‌#8954; &‌#x22FA;
       // CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋻ &‌#8955; &‌#x22FB;
       // SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋼ &‌#8956; &‌#x22FC;
       // CONTAINS WITH OVERBAR ⋽ &‌#8957; &‌#x22FD;
       // SMALL CONTAINS WITH OVERBAR ⋾ &‌#8958; &‌#x22FE;
       // NOTATION BAG MEMBERSHIP ⋿ &‌#8959; &‌#x22FF;
       // RIGHT ANGLE ∟ &‌#8735; &‌#x221F;
       // ANGLE Entity Code = &ang; ∠ &‌#8736; &‌#x2220;
       // MEASURED ANGLE ∡ &‌#8737; &‌#x2221;
       // SPHERICAL ANGLE ∢ &‌#8738; &‌#x2222;
       // DIVIDES ∣ &‌#8739; &‌#x2223;
       // DOES NOT DIVIDE ∤ &‌#8740; &‌#x2224;
       8741: '-456-1256-', //PARALLEL TO ∥ &‌#8741; &‌#x2225;
       8742: '-46-456-1256-', //NOT PARALLEL TO ∦ &‌#8742; &‌#x2226;
       //RIGHT ANGLE WITH ARC ⊾ &‌#8894; &‌#x22BE;
       // RIGHT TRIANGLE ⊿ &‌#8895; &‌#x22BF;
       8869: '-45-1256-', // UP TACK (Perpendicular) Entity Code = &perp; ⊥ &‌#8869; &‌#x22A5;
       // RIGHT TACK ⊢ &‌#8866; &‌#x22A2;
       // LEFT TACK ⊣ &‌#8867; &‌#x22A3;
       // DOWN TACK ⊤ &‌#8868; &‌#x22A4;
       8756: '-6-16-', // THEREFORE (Triangular Dots) Entity Code = &there4; ∴ &‌#8756; &‌#x2234;
       8757: '-4-34-', // BECAUSE (Upside down Triangular Dots) ∵ &‌#8757; &‌#x2235;
       // PROPORTIONAL TO Entity Code = &prop; ∝ &‌#8733; &‌#x221D;
       // END OF PROOF (solid rectangle) ∎ &‌#8718; &‌#x220E;
       8773: '-456-2356-', //APPROXIMATELY EQUAL ≅ &cong; &‌#8773; &‌#x2245;
       8776: '-5-2356-', // ALMOST EQUAL (ASYMPTOTIC) ≈ &asymp; &‌#8776; &‌#x2248;
       8777: '-46-5-2356-', // NOT ALMOST EQUAL TO ≉ — &‌#8777; &‌#x2249;
       8764: '-45-2356-', // TILDE SIMILAR TO ∼ &sim; &‌#8764; &‌#x223C;
       8801: '-2356-2356-', // IDENTICAL TO (three lines) ≡ &equiv; &‌#8801; &‌#x2261;
       8802: '-46-2356-2356-', // NOT IDENTICAL TO ≢ — &‌#8802; &‌#x2262;
       // STRICTLY EQUIVALENT TO ≣ &‌#8803; &‌#x2263;
       // NOT IDENTICAL TO ≢ &‌#8802; &‌#x2262;
       // LESS-THAN OVER EQUAL TO ≦ &‌#8806; &‌#x2266;
       // GREATER-THAN OVER EQUAL TO ≧ &‌#8807; &‌#x2267;
       // LESS-THAN BUT NOT EQUAL TO ≨ &‌#8808; &‌#x2268;
       // GREATER-THAN BUT NOT EQUAL TO ≩ &‌#8809; &‌#x2269;
       8810: '-5-5-126-', // MUCH LESS-THAN ≪ &‌#8810; &‌#x226A;
       8811: '-5-5-345-', // MUCH GREATER-THAN ≫ &‌#8811; &‌#x226B;
       // BETWEEN ≬ &‌#8812; &‌#x226C;
       // NOT EQUIVALENT TO ≭ &‌#8813; &‌#x226D;
       // NOT LESS-THAN ≮ &‌#8814; &‌#x226E;
       // NOT GREATER-THAN ≯ &‌#8815; &‌#x226F;
       // NEITHER LESS-THAN NOR EQUAL TO ≰ &‌#8816; &‌#x2270;
       // NEITHER GREATER-THAN NOR EQUAL TO ≱ &‌#8817; &‌#x2271;
       // LESS-THAN OR EQUIVALENT TO ≲ &‌#8818; &‌#x2272;
       // GREATER-THAN OR EQUIVALENT TO ≳ &‌#8819; &‌#x2273;
       // NEITHER LESS-THAN NOR EQUIVALENT TO ≴ &‌#8820; &‌#x2274;
       // NEITHER GREATER-THAN NOR EQUIVALENT TO ≵ &‌#8821; &‌#x2275;
       // LESS-THAN OR GREATER-THAN ≶ &‌#8822; &‌#x2276;
       // GREATER-THAN OR LESS-THAN ≷ &‌#8823; &‌#x2277;
       // NEITHER LESS-THAN NOR GREATER-THAN ≸ &‌#8824; &‌#x2278;
       // NEITHER GREATER-THAN NOR LESS-THAN ≹ &‌#8825; &‌#x2279;
       // NOT TILDE ≁ &‌#8769; &‌#x2241;
       // MINUS TILDE ≂ &‌#8770; &‌#x2242;
       8771: '-5-2356-', // ASYMPTOTICALLY EQUAL TO ≃ &‌#8771; &‌#x2243;
       // NOT ASYMPTOTICALLY EQUAL TO ≄ &‌#8772; &‌#x2244;
       // APPROXIMATELY BUT NOT ACTUALLY EQUAL TO ≆ &‌#8774; &‌#x2246;
       // NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO ≇ &‌#8775; &‌#x2247;
       8778: '-456-5-2356-', // ALMOST EQUAL OR EQUAL TO ≊ &‌#8778; &‌#x224A;
       // TRIPLE TILDE ≋ &‌#8779; &‌#x224B;
       // ALL EQUAL TO ≌ &‌#8780; &‌#x224C;
       8723: '-36-235-', // MINUS-OR-PLUS SIGN ∓ &‌#8723; &‌#x2213;
       // DOT PLUS ∔ &‌#8724; &‌#x2214;
       8727: '-5-35-', // ASTERISK OPERATOR ∗ &‌#8727; &‌#x2217;
       8728: '-456-3456-', // RING OPERATOR ∘ &‌#8728; &‌#x2218;
       8729: '-35-35-', // BULLET OPERATOR ∙ &‌#8729; &‌#x2219;
       // PROPORTIONAL TO ∝ &‌#8733; &‌#x221D;
       // RATIO ∶ &‌#8758; &‌#x2236;
       // PROPORTION ∷ &‌#8759; &‌#x2237;
       // DOT MINUS ∸ &‌#8760; &‌#x2238 ;
       // EXCESS ∹ &‌#8761; &‌#x2239;
       // GEOMETRIC PROPORTION ∺ &‌#8762; &‌#x223A;
       // HOMOTHETIC ∻ &‌#8763; &‌#x223B;
       // REVERSED TILDE ∽ &‌#8765; &‌#x223D;
       // INVERTED LAZY S ∾ &‌#8766; &‌#x223E;
       // SINE WAVE ∿ &‌#8767; &‌#x223F;
       // WREATH PRODUCT ≀ &‌#8768; &‌#x2240;
       // EQUIVALENT TO ≍ &‌#8781; &‌#x224D;
       // GEOMETRICALLY EQUIVALENT TO ≎ &‌#8782; &‌#x224E;
       // DIFFERENCE BETWEEN ≏ &‌#8783; &‌#x224F;
       // APPROACHES THE LIMIT ≐ &‌#8784; &‌#x2250;
       // GEOMETRICALLY EQUAL TO ≑ &‌#8785; &‌#x2251;
       // APPROXIMATELY EQUAL TO OR THE IMAGE OF ≒ &‌#8786; &‌#x2252;
       // IMAGE OF OR APPROXIMATELY EQUAL TO ≓ &‌#8787; &‌#x2253;
       // COLON EQUALS ≔ &‌#8788; &‌#x2254;
       // EQUALS COLON ≕ &‌#8789; &‌#x2255;
       // RING IN EQUAL TO ≖ &‌#8790; &‌#x2256;
       // RING EQUAL TO ≗ &‌#8791; &‌#x2257;
       // CORRESPONDS TO ≘ &‌#8792; &‌#x2258;
       // ESTIMATES ≙ &‌#8793; &‌#x2259;
       // EQUIANGULAR TO ≚ &‌#8794; &‌#x225A;
       // STAR EQUALS ≛ &‌#8795; &‌#x225B;
       // DELTA EQUAL TO ≜ &‌#8796; &‌#x225C;
       // EQUAL TO BY DEFINITION ≝ &‌#8797; &‌#x225D;
       // MEASURED BY ≞ &‌#8798; &‌#x225E;
       // QUESTIONED EQUAL TO ≟ &‌#8799; &‌#x225F;
       8826: '-46-46-126-', // PRECEDES ≺ &‌#8826; &‌#x227A;
       8827: '-46-46-345-', // SUCCEEDS ≻ &‌#8827; &‌#x227B;
       8828: '-45-45-126-', // PRECEDES OR EQUAL TO ≼ &‌#8828; &‌#x227C;
       8829: '-45-45-345-', // SUCCEEDS OR EQUAL TO ≽ &‌#8829; &‌#x227D;
       // PRECEDES OR EQUIVALENT TO ≾ &‌#8830; &‌#x227E;
       // SUCCEEDS OR EQUIVALENT TO ≿ &‌#8831; &‌#x227F;
       // DOES NOT PRECEDE ⊀ &‌#8832; &‌#x2280;
       // DOES NOT SUCCEED ⊁ &‌#8833; &‌#x2281;
       // SQUARE IMAGE OF ⊏ &‌#8847; &‌#x228F;
       // SQUARE ORIGINAL OF ⊐ &‌#8848; &‌#x2290;
       // SQUARE IMAGE OF OR EQUAL TO ⊑ &‌#8849; &‌#x2291;
       // SQUARE ORIGINAL OF OR EQUAL TO ⊒ &‌#8850; &‌#x2292;
       // SQUARE CAP ⊓ &‌#8851; &‌#x2293;
       // SQUARE CUP ⊔ &‌#8852; &‌#x2294;
       // CIRCLED MINUS ⊖ &‌#8854; &‌#x2296;
       // CIRCLED DIVISION SLASH ⊘ &‌#8856; &‌#x2298;
       // CIRCLED DOT OPERATOR ⊙ &‌#8857; &‌#x2299;
       // CIRCLED RING OPERATOR ⊚ &‌#8858; &‌#x229A;
       // CIRCLED ASTERISK OPERATOR ⊛ &‌#8859; &‌#x229B;
       // CIRCLED EQUALS ⊜ &‌#8860; &‌#x229C;
       // CIRCLED DASH ⊝ &‌#8861; &‌#x229D;
       // SQUARED PLUS ⊞ &‌#8862; &‌#x229E;
       // SQUARED MINUS ⊟ &‌#8863; &‌#x229F;
       // SQUARED TIMES ⊠ &‌#8864; &‌#x22A0;
       // SQUARED DOT OPERATOR ⊪ &‌#8874; &‌#x22AA;
       // ASSERTION ⊦ &‌#8870; &‌#x22A6;
       // MODELS ⊧ &‌#8871; &‌#x22A7;
       // TRUE ⊨ &‌#8872; &‌#x22A8;
       // FORCES ⊩ &‌#8873; &‌#x22A9;
       // TRIPLE VERTICAL BAR RIGHT TURNSTILE ⊪ &‌#8874; &‌#x22AA;
       // DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊫ &‌#8875; &‌#x22AB;
       // DOES NOT PROVE ⊬ &‌#8876; &‌#x22AC;
       // NOT TRUE ⊭ &‌#8877; &‌#x22AD;
       // DOES NOT FORCE ⊮ &‌#8878; &‌#x22AE;
       // NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊯ &‌#8879; &‌#x22AF;
       // PRECEDES UNDER RELATION ⊰ &‌#8880; &‌#x22B0;
       // SUCCEEDS UNDER RELATION ⊱ &‌#8881; &‌#x22B1;
       // NORMAL SUBGROUP OF ⊲ &‌#8882; &‌#x22B2;
       // CONTAINS AS NORMAL SUBGROUP ⊳ &‌#8883; &‌#x22B3;
       // NORMAL SUBGROUP OF OR EQUAL TO ⊴ &‌#8884; &‌#x22B4;
       // CONTAINS AS NORMAL SUBGROUP OR EQUAL TO ⊵ &‌#8885; &‌#x22B5;
       // ORIGINAL OF ⊶ &‌#8886; &‌#x22B6;
       // IMAGE OF ⊷ &‌#8887; &‌#x22B7;
       // MULTIMAP ⊸ &‌#8888; &‌#x22B8;
       // HERMITIAN CONJUGATE MATRIX ⊹ &‌#8889; &‌#x22B9;
       // INTERCALATE ⊺ &‌#8890; &‌#x22BA;
       // DIAMOND OPERATOR ⋄ &‌#8900; &‌#x22C4;
       // STAR OPERATOR ⋆ &‌#8902; &‌#x22C6;
       // DIVISION TIMES ⋇ &‌#8903; &‌#x22C7;
       // BOWTIE ⋈ &‌#8904; &‌#x22C8;
       // LEFT NORMAL FACTOR SEMIDIRECT PRODUCT ⋉ &‌#8905; &‌#x22C9;
       // RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT ⋊ &‌#8906; &‌#x22CA;
       // LEFT SEMIDIRECT PRODUCT ⋋ &‌#8907; &‌#x22CB;
       // RIGHT SEMIDIRECT PRODUCT ⋌ &‌#8908; &‌#x22CC;
       // REVERSED TILDE EQUALS ⋍ &‌#8909; &‌#x22CD;
       // PITCHFORK ⋔ &‌#8916; &‌#x22D4;
       8917: '-5-2356-', // EQUAL AND PARALLEL TO ⋕ &‌#8917; &‌#x22D5;
       // LESS-THAN WITH DOT ⋖ &‌#8918; &‌#x22D6;
       // GREATER-THAN WITH DOT ⋗ &‌#8919; &‌#x22D7;
       // VERY MUCH LESS-THAN ⋘ &‌#8920; &‌#x22D8;
       // VERY MUCH GREATER-THAN ⋙ &‌#8921; &‌#x22D9;
       // LESS-THAN EQUAL TO OR GREATER-THAN ⋚ &‌#8922; &‌#x22DA;
       // GREATER-THAN EQUAL TO OR LESS-THAN ⋛ &‌#8923; &‌#x22DB;
       // EQUAL TO OR LESS-THAN ⋜ &‌#8924; &‌#x22DC;
       // EQUAL TO OR GREATER-THAN ⋝ &‌#8925; &‌#x22DD;
       // EQUAL TO OR PRECEDES ⋞ &‌#8926; &‌#x22DE;
       // EQUAL TO OR SUCCEEDS ⋟ &‌#8927; &‌#x22DF;
       // DOES NOT PRECEDE OR EQUAL ⋠ &‌#8928; &‌#x22E0;
       // DOES NOT SUCCEED OR EQUAL ⋡ &‌#8929; &‌#x22E1;
       // NOT SQUARE IMAGE OF OR EQUAL TO ⋢ &‌#8930; &‌#x22E2;
       // NOT SQUARE ORIGINAL OF OR EQUAL TO ⋣ &‌#8931; &‌#x22E3;
       // SQUARE IMAGE OF OR NOT EQUAL TO ⋤ &‌#8932; &‌#x22E4;
       // SQUARE ORIGINAL OF OR NOT EQUAL TO ⋥ &‌#8933; &‌#x22E5;
       // LESS-THAN BUT NOT EQUIVALENT TO ⋦ &‌#8934; &‌#x22E6;
       // GREATER-THAN BUT NOT EQUIVALENT TO ⋧ &‌#8935; &‌#x22E7;
       // PRECEDES BUT NOT EQUIVALENT TO ⋨ &‌#8936; &‌#x22E8;
       // SUCCEEDS BUT NOT EQUIVALENT TO ⋩ &‌#8937; &‌#x22E9;
       // NOT NORMAL SUBGROUP OF ⋪ &‌#8938; &‌#x22EA;
       // DOES NOT CONTAIN AS NORMAL SUBGROUP ⋫ &‌#8939; &‌#x22EB;
       // NOT NORMAL SUBGROUP OF OR EQUAL TO ⋬ &‌#8940; &‌#x22EC;
       // DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL ⋭ &‌#8941; &‌#x22ED;
       // VERTICAL ELLIPSIS ⋮ &‌#8942; &‌#x22EE;
       // MIDLINE HORIZONTAL ELLIPSIS ⋯ &‌#8943; &‌#x22EF;
       // UP RIGHT DIAGONAL ELLIPSIS ⋰ &‌#8944; &‌#x22F0;
       // DOWN RIGHT DIAGONAL ELLIPSIS ⋱ &‌#8945; &‌#x22F1;
       /* lettres grecques */
       8721: '-46-6-234-', //CAPITAL SIGMA N-ARY SUMMATION ∑ &sum; &‌#8721; &‌#x2211;
       8719: '-46-6-1234-', //CAPITAL PI N-ARY PRODUCT ∏ &prod; &‌#8719; &‌#x220F;
       //N-ARY COPRODUCT (upside down capital pi) ∐ — &‌#8720; &‌#x2210;
       913: '-46-6-1-', //GREEK CAPITAL LETTER ALPHA Α &‌#913; &‌#x0391 &‌Alpha;
       914: '-46-6-12-', //GREEK CAPITAL LETTER BETA Β &‌#914; &‌#x0392 &‌Beta;
       915: '-46-6-1245-', //GREEK CAPITAL LETTER GAMMA Γ &‌#915; &‌#x0393 &‌Gamma;
       916: '-46-6-145-', //GREEK CAPITAL LETTER DELTA Δ &‌#916; &‌#x0394 &‌Delta;
       917: '-46-6-15-', //GREEK CAPITAL LETTER EPSILON Ε &‌#917; &‌#x0395 &‌Epsilon;
       918: '-46-6-1356-', //GREEK CAPITAL LETTER ZETA Ζ &‌#918; &‌#x0396 &‌Zeta;
       919: '-46-6-125-', //GREEK CAPITAL LETTER ETA Η &‌#919; &‌#x0397 &‌Eta;
       920: '-46-6-245-', //GREEK CAPITAL LETTER THETA Θ &‌#920; &‌#x0398 &‌Theta;
       921: '-46-6-24-', //GREEK CAPITAL LETTER IOTA Ι &‌#921; &‌#x0399 &‌Iota;
       922: '-46-6-13-', //GREEK CAPITAL LETTER KAPPA Κ &‌#922; &‌#x039A &‌Kappa;
       923: '-46-6-123-', //GREEK CAPITAL LETTER LAM(B)DA Λ &‌#923; &‌#x039B &‌Lambda;
       924: '-46-6-134-', //GREEK CAPITAL LETTER MU Μ &‌#924; &‌#x039C &‌Mu;
       925: '-46-6-1345-', //GREEK CAPITAL LETTER NU Ν &‌#925; &‌#x039D &‌Nu;
       926: '-46-6-1346-', //GREEK CAPITAL LETTER XI Ξ &‌#926; &‌#x039E &‌Xi;
       927: '-46-6-135-', //GREEK CAPITAL LETTER OMICRON Ο &‌#927; &‌#x039F &‌Omicron;
       928: '-46-6-1234-', //GREEK CAPITAL LETTER PI Π &‌#928; &‌#x03A0 &‌Pi;
       929: '-46-6-1235-', //GREEK CAPITAL LETTER RHO Ρ &‌#929; &‌#x03A1 &‌Rho;
       931: '-46-6-234-', //GREEK CAPITAL LETTER SIGMA Σ &‌#931; &‌#x03A3 &‌Sigma;
       932: '-46-6-2345-', //GREEK CAPITAL LETTER TAU Τ &‌#932; &‌#x03A4 &‌Tau;
       933: '-46-6-136-', //GREEK CAPITAL LETTER UPSILON Υ &‌#933; &‌#x03A5 &‌Upsilon;
       934: '-46-6-124-', //GREEK CAPITAL LETTER PHI Φ &‌#934; &‌#x03A6 &‌Phi;
       935: '-46-6-12345-', //GREEK CAPITAL LETTER CHI Χ &‌#935; &‌#x03A7 &‌Chi;
       936: '-46-6-13456-', //GREEK CAPITAL LETTER PSI Ψ &‌#936; &‌#x03A8 &‌Psi;
       937: '-46-6-2456-', //GREEK CAPITAL LETTER OMEGA Ω &‌#937; &‌#x03A9 &‌Omega;
       945: '-46-1-', //GREEK SMALL LETTER ALPHA α &‌#945; &‌#x03B1 &‌alpha;
       946: '-46-12-', //GREEK SMALL LETTER BETA β &‌#946; &‌#x03B2 &‌beta;
       947: '-46-1245-', //GREEK SMALL LETTER GAMMA γ &‌#947; &‌#x03B3 &‌gamma;
       948: '-46-145-', //GREEK SMALL LETTER DELTA δ &‌#948; &‌#x03B4 &‌delta;
       949: '-46-15-', //GREEK SMALL LETTER EPSILON ε &‌#949; &‌#x03B5 &‌epsilon;
       950: '-46-1356-', //GREEK SMALL LETTER ZETA ζ &‌#950; &‌#x03B6 &‌zeta;
       951: '-46-125-', //GREEK SMALL LETTER ETA η &‌#951; &‌#x03B7 &‌eta;
       952: '-46-245-', //GREEK SMALL LETTER THETA θ &‌#952; &‌#x03B8 &‌theta;
       953: '-46-24-', //GREEK SMALL LETTER IOTA ι &‌#953; &‌#x03B9 &‌iota;
       954: '-46-13-', //GREEK SMALL LETTER KAPPA κ &‌#954; &‌#x03BA &‌kappa;
       955: '-46-123-', //GREEK SMALL LETTER LAM(B)DA λ &‌#955; &‌#x03BB &‌lambda;
       956: '-46-134-', //GREEK SMALL LETTER MU μ &‌#956; &‌#x03BC &‌mu;
       957: '-46-1345-', //GREEK SMALL LETTER NU ν &‌#957; &‌#x03BD &‌nu;
       958: '-46-1346-', //GREEK SMALL LETTER XI ξ &‌#958; &‌#x03BE &‌xi;
       959: '-46-135-', //GREEK SMALL LETTER OMICRON ο &‌#959; &‌#x03BF &‌omicron;
       960: '-46-1234-', //GREEK SMALL LETTER PI π &‌#960; &‌#x03C0 &‌pi;
       961: '-46-1235-', //GREEK SMALL LETTER RHO ρ &‌#961; &‌#x03C1 &‌rho;
       //GREEK SMALL LETTER FINAL SIGMA ς &‌#962; &‌#x03C2  
       963: '-46-234-', //GREEK SMALL LETTER SIGMA σ &‌#963; &‌#x03C3 &‌sigma;
       964: '-46-2345-', //GREEK SMALL LETTER TAU τ &‌#964; &‌#x03C4 &‌tau;
       965: '-46-136-', //GREEK SMALL LETTER UPSILON υ &‌#965; &‌#x03C5 &‌upsilon;
       966: '-46-124-', //GREEK SMALL LETTER PHI φ &‌#966; &‌#x03C6 &‌phi;
       967: '-46-12345-', //GREEK SMALL LETTER CHI χ &‌#967; &‌#x03C7 &‌chi;
       968: '-46-13456-', //GREEK SMALL LETTER PSI ψ &‌#968; &‌#x03C8 &‌psi;
       969: '-46-2456-', //GREEK SMALL LETTER OMEGA ω &‌#969; &‌#x03C9 &‌omega;
       /* Flèches */
       8592: '-1246-246-25-25-', // ← 8592 2190 &larr; LEFTWARDS ARROW
       8593: '-1246-126-25-25-135-', // ↑ 8593 2191 &uarr; UPWARDS ARROW
       8594: '-1246-25-25-135-', // → 8594 2192 &rarr; RIGHTWARDS ARROW
       8595: '-1246-146-25-25-135-', // ↓ 8595 2193 &darr; DOWNWARDS ARROW
       8596: '-1246-246-25-25-135-', // ↔ 8596 2194 &harr; LEFT RIGHT ARROW
       //↕ 8597 2195   UP DOWN ARROW
       8598: '-1246-45-246-25-25-', // ↖ 8598 2196   NORTH WEST ARROW
       8599: '-1246-45-25-25-135-', // ↗ 8599 2197   NORTH EAST ARROW
       8600: '-1246-56-25-25-135-', // ↘ 8600 2198   SOUTH EAST ARROW
       8601: '-1246-56-246-25-25-', // ↙ 8601 2199   SOUTH WEST ARROW
       /* ↚ 8602 219A   LEFTWARDS ARROW WITH STROKE
        ↛ 8603 219B   RIGHTWARDS ARROW WITH STROKE
        ↜ 8604 219C   LEFTWARDS WAVE ARROW
        ↝ 8605 219D   RIGHTWARDS WAVE ARROW
        ↞ 8606 219E   LEFTWARDS TWO HEADED ARROW
        ↟ 8607 219F   UPWARDS TWO HEADED ARROW
        ↠ 8608 21A0   RIGHTWARDS TWO HEADED ARROW
        ↡ 8609 21A1   DOWNWARDS TWO HEADED ARROW
        ↢ 8610 21A2   LEFTWARDS ARROW WITH TAIL
        ↣ 8611 21A3   RIGHTWARDS ARROW WITH TAIL
        ↤ 8612 21A4   LEFTWARDS ARROW FROM BAR
        ↥ 8613 21A5   UPWARDS ARROW FROM BAR
        */
       8614: '-5-156-', // ↦ 8614 21A6   RIGHTWARDS ARROW FROM BAR
       /*
       ↧ 8615 21A7   DOWNWARDS ARROW FROM BAR
       ↨ 8616 21A8   UP DOWN ARROW WITH BASE
       ↩ 8617 21A9   LEFTWARDS ARROW WITH HOOK
       ↪ 8618 21AA   RIGHTWARDS ARROW WITH HOOK
       ↫ 8619 21AB   LEFTWARDS ARROW WITH LOOP
       ↬ 8620 21AC   RIGHTWARDS ARROW WITH LOOP
       ↭ 8621 21AD   LEFT RIGHT WAVE ARROW
       ↮ 8622 21AE   LEFT RIGHT ARROW WITH STROKE
       ↯ 8623 21AF   DOWNWARDS ZIGZAG ARROW
       ↰ 8624 21B0   UPWARDS ARROW WITH TIP LEFTWARDS
       ↱ 8625 21B1   UPWARDS ARROW WITH TIP RIGHTWARDS
       ↲ 8626 21B2   DOWNWARDS ARROW WITH TIP LEFTWARDS
       ↳ 8627 21B3   DOWNWARDS ARROW WITH TIP RIGHTWARDS
       ↴ 8628 21B4   RIGHTWARDS ARROW WITH CORNER DOWNWARDS
       ↵ 8629 21B5 &crarr; DOWNWARDS ARROW WITH CORNER LEFTWARDS
       ↶ 8630 21B6   ANTICLOCKWISE TOP SEMICIRCLE ARROW
       ↷ 8631 21B7   CLOCKWISE TOP SEMICIRCLE ARROW
       ↸ 8632 21B8   NORTH WEST ARROW TO LONG BAR
       ↹ 8633 21B9   LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR
       ↺ 8634 21BA   ANTICLOCKWISE OPEN CIRCLE ARROW
       ↻ 8635 21BB   CLOCKWISE OPEN CIRCLE ARROW
       ↼ 8636 21BC   LEFTWARDS HARPOON WITH BARB UPWARDS
       ↽ 8637 21BD   LEFTWARDS HARPOON WITH BARB DOWNWARDS
       ↾ 8638 21BE   UPWARDS HARPOON WITH BARB RIGHTWARDS
       ↿ 8639 21BF   UPWARDS HARPOON WITH BARB LEFTWARDS
       ⇀ 8640 21C0   RIGHTWARDS HARPOON WITH BARB UPWARDS
       ⇁ 8641 21C1   RIGHTWARDS HARPOON WITH BARB DOWNWARDS
       ⇂ 8642 21C2   DOWNWARDS HARPOON WITH BARB RIGHTWARDS
       ⇃ 8643 21C3   DOWNWARDS HARPOON WITH BARB LEFTWARDS
       */
       8644: '-456-12456-', // ⇄ 8644 21C4   RIGHTWARDS ARROW OVER LEFTWARDS ARROW
       /*
       ⇅ 8645 21C5   UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW
       ⇆ 8646 21C6   LEFTWARDS ARROW OVER RIGHTWARDS ARROW
       ⇇ 8647 21C7   LEFTWARDS PAIRED ARROWS
       ⇈ 8648 21C8   UPWARDS PAIRED ARROWS
       ⇉ 8649 21C9   RIGHTWARDS PAIRED ARROWS
       ⇊ 8650 21CA   DOWNWARDS PAIRED ARROWS
       ⇋ 8651 21CB   LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON
       ⇌ 8652 21CC   RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON
       */
       8653: '-46-5-25-', // ⇍ 8653 21CD   LEFTWARDS DOUBLE ARROW WITH STROKE
       /*
       ⇎ 8654 21CE   LEFT RIGHT DOUBLE ARROW WITH STROKE
       */
       8655: '-46-25-2-', // ⇏ 8655 21CF   RIGHTWARDS DOUBLE ARROW WITH STROKE
       8656: '-1246-246-2356-2356-', // ⇐ 8656 21D0 &lArr; LEFTWARDS DOUBLE ARROW
       /*
       ⇑ 8657 21D1 &uArr; UPWARDS DOUBLE ARROW
       */
       8658: '-1246-2356-2356-135-', // ⇒ 8658 21D2 &rArr; RIGHTWARDS DOUBLE ARROW
       /*
       ⇓ 8659 21D3 &dArr; DOWNWARDS DOUBLE ARROW
       */
       8660: '-1246-246-2356-2356-135-', //⇔ 8660 21D4 &hArr; LEFT RIGHT DOUBLE ARROW
       /*⇕ 8661 21D5   UP DOWN DOUBLE ARROW
       ⇖ 8662 21D6   NORTH WEST DOUBLE ARROW
       ⇗ 8663 21D7   NORTH EAST DOUBLE ARROW
       ⇘ 8664 21D8   SOUTH EAST DOUBLE ARROW
       ⇙ 8665 21D9   SOUTH WEST DOUBLE ARROW
       ⇚ 8666 21DA   LEFTWARDS TRIPLE ARROW
       ⇛ 8667 21DB   RIGHTWARDS TRIPLE ARROW
       ⇜ 8668 21DC   LEFTWARDS SQUIGGLE ARROW
       ⇝ 8669 21DD   RIGHTWARDS SQUIGGLE ARROW
       ⇞ 8670 21DE   UPWARDS ARROW WITH DOUBLE STROKE
       ⇟ 8671 21DF   DOWNWARDS ARROW WITH DOUBLE STROKE
       ⇠ 8672 21E0   LEFTWARDS DASHED ARROW
       ⇡ 8673 21E1   UPWARDS DASHED ARROW
       ⇢ 8674 21E2   RIGHTWARDS DASHED ARROW
       ⇣ 8675 21E3   DOWNWARDS DASHED ARROW
       ⇤ 8676 21E4   LEFTWARDS ARROW TO BAR
       ⇥ 8677 21E5   RIGHTWARDS ARROW TO BAR
       ⇦ 8678 21E6   LEFTWARDS WHITE ARROW
       ⇧ 8679 21E7   UPWARDS WHITE ARROW
       ⇨ 8680 21E8   RIGHTWARDS WHITE ARROW
       ⇩ 8681 21E9   DOWNWARDS WHITE ARROW
       ⇪ 8682 21EA   UPWARDS WHITE ARROW FROM BAR
       ⇫ 8683 21EB   UPWARDS WHITE ARROW ON PEDESTAL
       ⇬ 8684 21EC   UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR
       ⇭ 8685 21ED   UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR
       ⇮ 8686 21EE   UPWARDS WHITE DOUBLE ARROW
       ⇯ 8687 21EF   UPWARDS WHITE DOUBLE ARROW ON PEDESTAL
       ⇰ 8688 21F0   RIGHTWARDS WHITE ARROW FROM WALL
       ⇱ 8689 21F1   NORTH WEST ARROW TO CORNER
       ⇲ 8690 21F2   SOUTH EAST ARROW TO CORNER
       ⇳ 8691 21F3   UP DOWN WHITE ARROW
       ⇴ 8692 21F4   RIGHT ARROW WITH SMALL CIRCLE
       ⇵ 8693 21F5   DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW
       ⇶ 8694 21F6   THREE RIGHTWARDS ARROWS
       ⇷ 8695 21F7   LEFTWARDS ARROW WITH VERTICAL STROKE
       ⇸ 8696 21F8   RIGHTWARDS ARROW WITH VERTICAL STROKE
       ⇹ 8697 21F9   LEFT RIGHT ARROW WITH VERTICAL STROKE
       ⇺ 8698 21FA   LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE
       ⇻ 8699 21FB   RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE
       ⇼ 8700 21FC   LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE
       ⇽ 8701 21FD   LEFTWARDS OPEN-HEADED ARROW
       ⇾ 8702 21FE   RIGHTWARDS OPEN-HEADED ARROW
       ⇿ 8703 21FF   LEFT RIGHT OPEN-HEADED ARROW
       */
     }
   };
 // table américaine basée sur DBTWin
 // Utilisée pour le braille direct
 var TBUEdbt = {
         ' ': 'BLANK',
         'a': 1,
         'b': 12,
         'c': 14,
         'd': 145,
         'e': 15,
         'f': 124,
         'g': 1245,
         'h': 125,
         'i': 24,
         'j': 245,
         'k': 13,
         'l': 123,
         'm': 134,
         'n': 1345,
         'o': 135,
         'p': 1234,
         'q': 12345,
         'r': 1235,
         's': 234,
         't': 2345,
         'u': 136,
         'v': 1236,
         'w': 2456,
         'x': 1346,
         'y': 13456,
         'z': 1356,
         '&': 12346,
         '=': 123456,
         '(': 12356,
         '!': 2346,
         ')': 23456,
         '*': 16,
         '<': 126,
         '%': 146,
         ':': 156,
         '$': 1246,
         ']': 12456,
         '\\': 1256,
         '[': 246,
         '1': 2,
         '2': 23,
         '3': 25,
         '4': 256,
         '5': 26,
         '6': 235,
         '7': 2356,
         '8': 236,
         '9': 35,
         '0': 356,
         '/': 34,
         '+': 346,
         '#': 3456,
         '>': 345,
         "'": 3,
         '-': 36,
         '@': 4,
         '^': 45,
         '_': 456,
         '"': 5,
         '.': 46,
         ';': 56,
         ',': 6
     },

     // mathématiques américain
     // -56- => dots56
     mathTBUE = {
         'caracMath': {
             'coupureFormule': '5',
             'espaceInsecable': '-BLANK-',
             'separateurIndiceExposant': {
                 'virgule': '-246-',
                 'pointvirgule': '-456-246-'
             },
             'indicateurNumerique': '-3456-',
             'indicateurFraction': {
                 'simple': {
                     'open': '',
                     'close': ''
                 },
                 'complexe': {
                     'open': '-12356-',
                     'close': '-23456-'
                 },
                 'hypercomplexe': {
                     'open': '-6-6-1456-',
                     'close': '-6-6-3456-'
                 },
                 'fractionnaire': {
                     'open': '',
                     'close': ''
                 }
             },
             'fraction': {
                 'simple': {
                     'oblique': '-34-',
                     'horizontale': '-46-34-'
                 },
                 'fractionnaire': {
                     'oblique': '-34-',
                     'horizontale': '-46-34-'
                 },
                 'complexe': {
                     'oblique': '-6-456-34-',
                     'horizontale': '-46-34-'
                 },
                 'hypercomplexe': {
                     // 'oblique':'-456-34-',
                     'horizontale': '-6-6-34-'
                 }
             },
             'blocks': {
                 'open': '-1-2-6-',
                 'close': '-3-4-5-'
             },
             'parenthese': {
                 'open': '-5-126-',
                 'close': '-5-345-'
             },
             'grandeparenthese1': { // imbrication
                 'open': '-5-126-',
                 'close': '-5-345-'
             },
             'grandeparenthese2': { // sur plusieurs lignes
                 'open': '-6-5-126-',
                 'close': '-6-5-345-'
             },
             'accolade': {
                 'open': '-456-126-',
                 'close': '-456-345-'
             },
             'grandeaccolade': { //plusieurs lignes
                 'open': '-6-456-126-',
                 'close': '-6-456-345-'
             },
             'barre': {
                 'open': '-456-1256-',
                 'close': '-456-1256-'
             },
             'grandebarre': { //plusieurs lignes
                 'open': '-6-456-1256-',
                 'close': '-6-456-1256-'
             },
             'doublebarre': {
                 'open': '-1256-1256-',
                 'close': '-1256-1256-'
             },
             'grandedoublebarre': { //plusieurs lignes
                 'open': '-46-123456-',
                 'close': '-46-123456-'
             },
             'crochet': {
                 'open': '-46-126-',
                 'close': '-46-345-'
             },
             'grandcrochet1': {
                 'open': '-46-126-',
                 'close': '-46-345-'
             },
             'grandcrochet2': { // plusieurs lignes
                 'open': '-6-46-126-',
                 'close': '-6-46-345-'
             },
             'crochetdouble': {
                 'open': '-46-12356-',
                 'close': '-46-23456-'
             },
             'indice': '-26-',
             'exposant': '-35-',
             'suscrit': '-35-',
             'souscrit': '-26-',

             'matrice': {
                 'sepLigne': '-6-345-',
             },
             'racine': '-345-',
             'finRacine': '-12456-',
             'ordreRadical': '-46-',
             'indiceRadical': '-126-',
             'majuscule': '-6-',
             'indicateurBase': '-5-',
             'majusculeronde': '-46-5-'

         },
         'caracDec': {
             susouscrit: {
                 8594: '-46-25-', //vecteur
                 175: '-456-25-', //barre
                 732: '-5-456-25-', //tilde
                 8994: '-4-25-', //arc
                 94: '-45-25-', //angle
             },
             /* Alphabet majuscule */
             65: '-6-1-', // A
             66: '-6-12-', // B
             67: '-6-14-', //...
             68: '-6-145-',
             69: '-6-15-',
             70: '-6-124-',
             71: '-6-1245-',
             72: '-6-125-',
             73: '-6-24-',
             74: '-6-245-',
             75: '-6-13-',
             76: '-6-123-',
             77: '-6-134-',
             78: '-6-1345-',
             79: '-6-135-',
             80: '-6-1234-',
             81: '-6-12345-',
             82: '-6-1235-',
             83: '-6-234-',
             84: '-6-2345-',
             85: '-6-136-',
             86: '-6-1236-',
             87: '-6-2456-',
             88: '-6-1346-',
             89: '-6-13456-',
             90: '-6-1356-',
             /* Alphabet minuscule */
             97: '-1-', // a
             98: '-12-', // b
             99: '-14-', // ...
             100: '-145-',
             101: '-15-',
             102: '-124-',
             103: '-1245-',
             104: '-125-',
             105: '-24-',
             106: '-245-',
             107: '-13-',
             108: '-123-',
             109: '-134-',
             110: '-1345-',
             111: '-135-',
             112: '-1234-',
             113: '-12345-',
             114: '-1235-',
             115: '-234-',
             116: '-2345-',
             117: '-136-',
             118: '-1236-',
             119: '-2456-',
             120: '-1346-',
             121: '-13456-',
             122: '-1356-',
             /* chiffres */
             48: '-245-', //0
             49: '-1-', // 1
             50: '-12-', // 2
             51: '-14-', // 3
             52: '-145-', // 4
             53: '-15-', // 5
             54: '-124-', // 6
             55: '-1245-', // 7
             56: '-125-', // 8
             57: '-24-', // 9
             /* fin chiffres */
             39: '-2356-', // '
             40: '-5-126-', // (
             41: '-5-345-', // )  
             58: '-25-', // :
             59: '-23-', // ;
             91: '-46-126-', // [
             93: '-46-345-', // ]
             123: '-456-126-', // { accolade gauche
             125: '-456-345-', // { accolade droite
             124: '-456-1256-', // |
             8214: '-1256-1256-', // ||
             44: '-2-', // ,
             45: '-5-36-', // -
             46: '-256-', // .
             42: '-4-3456-', // *
             43: '-5-235-', // +
             47: '-456-34-', // /
             37: '-46-356-', // %
             61: '-BLANK-5-2356-BLANK-', // =
             33: '-12346-', // factoriel !
             183: '-5-256-', // middle dot &#xB7;
             176: '-45-245-', // DEGREE SYMBOL ° &deg; &‌#176; &‌#xB0;
             181: '-45-134-', //MICRO MU SYMBOL µ &micro; &‌#181; &‌#xB5;
             //PER MILLE (1/1000th) ‰ &permil; &‌#8240; &‌#2030;
             60: '-BLANK-4-126-BLANK-', //LESS THAN <  &lt; &‌#60; &‌#x3C;
             62: '-BLANK-4-345-BLANK-', //GREATER THAN > &gt; &‌#62; &‌#x3E;
             8804: '-BLANK-456-4-126-BLANK-', //LESS THAN OR EQUAL TO ≤ &le; &‌#8804; &‌#x2264;
             10877: '-BLANK-456-4-126-BLANK-', // LESS-THAN OR SLANTED EQUAL TO ⩽
             10878: '-BLANK-456-4-345-BLANK-', // GREATER-THAN OR SLANTED EQUAL TO ⩾
             8805: '-BLANK-456-4-345-BLANK-', //GREATER THAN OR EQUAL TO ≥ &ge; &‌#8805; &‌#x2265;

             177: '-456-235-', //PLUS OR MINUS ± &plusmn; &‌#177; &‌#xB1;
             8800: '-BLANK-5-2356-4-156-BLANK-', //NOT EQUALS ≠ &ne; &‌#8800; &‌#x2260;
             247: '-5-34-', //DIVISION SIGN ÷ &divide; &‌#247; &‌#xF7;
             215: '-5-236-', //TIMES X × &times; &‌#215; &‌#x00D7;
             8722: '-5-36-', //MINUS − &minus; &‌#8722; &‌#x2212;
             8725: '-456-34-', //DIVISION SLASH ∕ — &‌#8725; &‌#x2215;
             8260: '-456-34-', //FRACTION SLASH ⁄ &frasl &‌#8260; &‌#x2044;
             8734: '-45-14-', //INFINITY ∞ &infin; &‌#8734; &‌#x221E;
             //ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
             //FUNCTION ITALIC F ƒ &fnof; &‌#402; &‌#x192;
             8242: '-2356-', //PRIME (single quote) ′ &prime; &‌#8242; &‌#x2032;
             8243: '-2356-2356-', //DOUBLE PRIME (double quote) ″ &Prime; &‌#8243; &‌#x2033;
             8244: '-2356-2356-2356-', //TRIPLE PRIME (triple quote) ‴ — &‌#8244; &‌#x2034;
             //THEREFORE (Triangular Dots) ∴ &there4; &‌#8756; &‌#x2234;
             8901: '-35-', //DOT OPERATOR ⋅ &sdot; &‌#8901; &‌#x22C5;
             //SUPERSCRIPT TWO ¹ &sup1; &‌#185; &‌#xB9;
             //SUPERSCRIPT TWO ² &sup2; &‌#178; &‌#xB2;
             //SUPERSCRIPT THREE ³ &sup3; &‌#179; &‌#xB3;
             //LEFT ANGLE BRACKET ⟨ &lang; &‌#9001; &‌#x2329;
             //RIGHT ANGLE BRACKET ⟩ &rang; &‌#9002; &‌#x232A;
             //LEFT CEILING BRACKET ⌈ &lceil; &‌#8968; &‌#x2308;
             //RIGHT CEILING BRACKET ⌉ &rceil; &‌#8969; &‌#x2309;
             //LEFT FLOOR BRACKET ⌊ &lceil; &‌#8970; &‌#x230A;
             //RIGHT FLOOR BRACKET ⌋ &rceil; &‌#8971; &‌#x230B;
             8853: '-46-235-', //CIRCLED PLUS (Direct Sum) ⊕ &oplus; &‌#8853; &‌#x2295;
             8855: '-46-35-', //CIRCLED TIMES (Vector Product) ⊗ &otimes; &‌#8855; &‌#x2297;
             8747: '-2346-', //INTEGRAL ∫ &int; &‌#8747; &‌#x222B;
             8706: '-5-145-', //PARTIAL DIFFERENTIAL ∂ &part; &‌#8706; &‌#2202;
             8710: '-46-45-145-', //INCREMENT (Difference or capital Delta) Δ &Delta; &‌#8710; &‌#x2206;
             8711: '-46-1456-', //NABLA (Backward Difference, Grad or upside down triangle) ∇ &nabla; &‌#8711; &‌#x2207;
             8748: '-2346-2346-', //DOUBLE INTEGRAL ∬ &‌#8748; &‌#x222C;
             8749: '-2346-2346-2346-', //TRIPLE INTEGRAL ∭ &‌#8749; &‌#x222D;
             10764: '-2346-2346-2346-2346-', //QUADRUPLE INTEGRAL ⨌ &‌#10764; &‌#x2A0C;
             8750: '-2346-6-1246-14-12456-', //CONTOUR INTEGRAL ∮ &‌#8750; &‌#x222E;
             8751: '-46-12346-12346-', //SURFACE INTEGRAL ∯ &‌#8751; &‌#x222F;
             8752: '-46-12346-12346-12346-', //VOLUME INTEGRAL ∰ &‌#8752; &‌#x2230;
             //CLOCKWISE INTEGRAL ∱ &‌#8753; &‌#x2231;
             //ANTICLOCKWISE INTEGRAL ⨑ &‌#10769; &‌#x2A11;
             //CLOCKWISE CONTOUR INTEGRAL ∲ &‌#8754; &‌#x2232;
             //ANTICLOCKWISE CONTOUR INTEGRAL ∳ &‌#8755; &‌#x2233;
             // ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
             // WEIERSTRASS POWER SET (Script Capital P) ℘ &weierp; &‌#8472; &‌#x2118;
             // IMAGINARY Part (Blackletter I) ℑ &image; &‌#8465; &‌#x2111;
             // REAL NUMBER (Blackletter R) ℜ &real; &‌#8476; &‌#x211C;
             8477: '-46-46-1235-', //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
             8450: '-46-46-14-', //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
             8469: '-46-46-1345-', //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
             8473: '-46-46-1234-', // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
             8474: '-46-46-12345-', // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
             8484: '-46-46-1356-', // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
             8704: '-4-12346-', // FOR ALL (Upside-down A) ∀ &forall;  &‌#8704; &‌#x2200;
             8705: '-46-146-', // COMPLEMENT (Thin C) ∁ — &‌#8705; &‌#x2201;
             8707: '-4-123456-', // THERE EXISTS (Backwards E) ∃ &exist;  &‌#8707; &‌#x2203;
             8708: '-46-456-16-', // THERE DOES NOT EXIST (Backwards E with slash) ∄ — &‌#8708; &‌#x2204;
             8709: '-45-3456-', // EMPTY SET (O slash) ∅ &empty;  &‌#8709; &‌#x2205;
             // NOT SYMBOL (Corner) ¬ &not;  &‌#172; &‌#xAC;
             // TILDE (Alternate Not Symbol) ˜ &tilde;  — —
             8743: '-45-35-', // LOGICAL AND (Wedge or Upside down V Symbol) ∧ &and;  &‌#8743; &‌#x2227;
             8744: '-45-26-', // LOGICAL OR (V Symbol) ∨ &or;  &‌#8744; &‌#x2228;
             // XOR ⊻ — &‌#8891; &‌#x22BB;
             // NAND ⊼ — &‌#8892; &‌#x22BC;
             // NOR ⊽ — &‌#8893; &‌#x22BD;
             8745: '-45-235-', // INTERSECTION (Cap or Upside Down U) ∩ &cap;  &‌#8745; &‌#x2229;
             8746: '-456-235-', // UNION (Cup or U Symbol) ∪ &cup;  &‌#8746; &‌#x222A;
             8712: '-45-16-', //ELEMENT OF ∈ &isin;  &‌#8712; &‌#x2208;
             8713: '-45-34-', // NOT AN ELEMENT OF ∉ &notin;  &‌#8713; &‌#x2209;
             8714: '-45-16-', // SMALL ELEMENT OF ∊ — &‌#8714; &‌#x220A;
             8715: '-46-45-16-', // CONTAINS AS MEMBER ∋ &ni;  &‌#8715; &‌#x220B;
             8716: '-46-45-34-', // DOES NOT CONTAIN AS MEMBER ∌ — &‌#8716; &‌#x220C;
             8717: '-46-45-16-', // SMALL CONTAINS AS MEMBER ∍ — &‌#8717; &‌#x220D;
             // SET MINUS ∖ — &‌#8726; &‌#x2216;
             8834: '-46-16-', //SUBSET OF (Sideways U with cap to left) ⊂ &sub;  &‌#8834; &‌#x2282;
             8835: '-5-16-', // SUPERSET OF (Sideways U with cap to right) ⊃ &sup;  &‌#8835; &‌#x2283;
             8836: '-46-34-', //NOT A SUBSET OF (Subset with Slash) ⊄ &nsub;  &‌#8836; &‌#x2284;
             8837: '-5-34-', // NOT A SUPERSET OF (Superset with slash) ⊅ — &‌#8837; &‌#x2285;
             8838: '-456-46-16-', // SUBSET OF OR EQUAL TO (Subset with line below) ⊆ &sube;  &‌#8838; &‌#x2286;
             // SUPERSET OF OR EQUAL TO (Superset with line below) ⊇ &supe;  &‌#8839; &‌#x2287;
             // NEITHER A SUBSET OF NOR EQUAL TO ⊈ — &‌#8840; &‌#x2288;
             // NEITHER A SUPERSET OF NOR EQUAL TO ⊉ — &‌#8841; &‌#x2289;
             // SUBSET OF WITH NOT EQUAL TO ⊊ — &‌#8842; &‌#x228A;
             // SUPERSET OF WITH NOT EQUAL TO ⊋ — &‌#8843; &‌#x228B;
             //DIAMOND OPERATOR (Possibility) ⋄ — &‌#8900; &‌#x22C4;
             // ASYMPTOTICALLY EQUAL TO One to one Correspondence ≃ — &‌#8771; &‌#x2243;
             // NOT ASYMPTOTICALLY EQUAL TO ≄ — &‌#8772; &‌#x2244;
             // MULTISET (U with arrow) ⊌ — &‌#8844; &‌#x228C;
             // MULTISET MULTIPLICATION (U with dot in center) ⊍ — &‌#8845; &‌#x228D;
             // MULTISET UNION (U with plus in center) ⊎ — &‌#8846; &‌#x228E;
             // DOUBLE SUBSET ⋐ — &‌#8912; &‌#x22D0;
             // DOUBLE SUPERSET ⋑ — &‌#8913; &‌#x22D1;
             // DOUBLE INTERSECTION ⋒ — &‌#8914; &‌#x22D2;
             // DOUBLE UNION ⋓ — &‌#8915; &‌#x22D3;
             // N-ARY LOGICAL AND ⋀ — &‌#8896; &‌#x22C0;
             // N-ARY LOGICAL OR ⋁ — &‌#8897; &‌#x22C1;
             // N-ARY INTERSECTION/td> ⋂ — &‌#8898; &‌#x22C2;
             // N-ARY UNION ⋃ — &‌#8899; &‌#x22C3;
             // CURLY LOGICAL OR ⋎ — &‌#8910; &‌#x22CE;
             // CURLY LOGICAL AND ⋏ — &‌#8911; &‌#x22CF;
             // CIRCLED MINUS ⊖ — &‌#8854; &‌#x2296;
             // CIRCLED DIVISION SLASH ⊘ — &‌#8856; &‌#x2298;
             // ELEMENT OF WITH LONG HORIZONTAL STROKE ⋲ &‌#8946; &‌#x22F2;
             // ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋳ &‌#8947; &‌#x22F3;
             // SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋴ &‌#8948; &‌#x22F4;
             // ELEMENT OF WITH DOT ABOVE ⋵ &‌#8949; &‌#x22F5;
             // ELEMENT OF WITH OVERBAR ⋶ &‌#8950; &‌#x22F6;
             // SMALL ELEMENT OF WITH OVERBAR ⋷ &‌#8951; &‌#x22F7;
             // ELEMENT OF WITH UNDERBAR ⋸ &‌#8952; &‌#x22F8;
             // ELEMENT OF WITH TWO HORIZONTAL STROKES ⋹ &‌#8953; &‌#x22F9;
             // CONTAINS WITH LONG HORIZONTAL STROKE ⋺ &‌#8954; &‌#x22FA;
             // CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋻ &‌#8955; &‌#x22FB;
             // SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋼ &‌#8956; &‌#x22FC;
             // CONTAINS WITH OVERBAR ⋽ &‌#8957; &‌#x22FD;
             // SMALL CONTAINS WITH OVERBAR ⋾ &‌#8958; &‌#x22FE;
             // NOTATION BAG MEMBERSHIP ⋿ &‌#8959; &‌#x22FF;
             // RIGHT ANGLE ∟ &‌#8735; &‌#x221F;
             // ANGLE Entity Code = &ang; ∠ &‌#8736; &‌#x2220;
             // MEASURED ANGLE ∡ &‌#8737; &‌#x2221;
             // SPHERICAL ANGLE ∢ &‌#8738; &‌#x2222;
             // DIVIDES ∣ &‌#8739; &‌#x2223;
             // DOES NOT DIVIDE ∤ &‌#8740; &‌#x2224;
             8741: '-456-1256-', //PARALLEL TO ∥ &‌#8741; &‌#x2225;
             8742: '-46-456-1256-', //NOT PARALLEL TO ∦ &‌#8742; &‌#x2226;
             //RIGHT ANGLE WITH ARC ⊾ &‌#8894; &‌#x22BE;
             // RIGHT TRIANGLE ⊿ &‌#8895; &‌#x22BF;
             8869: '-45-1256-', // UP TACK (Perpendicular) Entity Code = &perp; ⊥ &‌#8869; &‌#x22A5;
             // RIGHT TACK ⊢ &‌#8866; &‌#x22A2;
             // LEFT TACK ⊣ &‌#8867; &‌#x22A3;
             // DOWN TACK ⊤ &‌#8868; &‌#x22A4;
             8756: '-6-16-', // THEREFORE (Triangular Dots) Entity Code = &there4; ∴ &‌#8756; &‌#x2234;
             8757: '-4-34-', // BECAUSE (Upside down Triangular Dots) ∵ &‌#8757; &‌#x2235;
             8733: '-BLANK-456-5-2356-BLANK-', // PROPORTIONAL TO Entity Code = &prop; ∝ &‌#8733; &‌#x221D;
             // END OF PROOF (solid rectangle) ∎ &‌#8718; &‌#x220E;
             8773: '-BLANK-5-456-35-BLANK-', //APPROXIMATELY EQUAL ≅ &cong; &‌#8773; &‌#x2245;
             8776: '-BLANK-45-35-BLANK-', // ALMOST EQUAL (ASYMPTOTIC) ≈ &asymp; &‌#8776; &‌#x2248;
             8777: '-46-5-2356-', // NOT ALMOST EQUAL TO ≉ — &‌#8777; &‌#x2249;
             8764: '-45-2356-', // TILDE SIMILAR TO ∼ &sim; &‌#8764; &‌#x223C;
             8801: '-BLANK-456-123456-BLANK-', // IDENTICAL TO (three lines) ≡ &equiv; &‌#8801; &‌#x2261;
             8802: '-46-2356-2356-', // NOT IDENTICAL TO ≢ — &‌#8802; &‌#x2262;
             // STRICTLY EQUIVALENT TO ≣ &‌#8803; &‌#x2263;
             // NOT IDENTICAL TO ≢ &‌#8802; &‌#x2262;
             // LESS-THAN OVER EQUAL TO ≦ &‌#8806; &‌#x2266;
             // GREATER-THAN OVER EQUAL TO ≧ &‌#8807; &‌#x2267;
             // LESS-THAN BUT NOT EQUAL TO ≨ &‌#8808; &‌#x2268;
             // GREATER-THAN BUT NOT EQUAL TO ≩ &‌#8809; &‌#x2269;
             8810: '-BLANK-46-4-126-BLANK-', // MUCH LESS-THAN ≪ &‌#8810; &‌#x226A;
             8811: '-BLANK-46-4-345-BLANK-', // MUCH GREATER-THAN ≫ &‌#8811; &‌#x226B;
             // BETWEEN ≬ &‌#8812; &‌#x226C;
             // NOT EQUIVALENT TO ≭ &‌#8813; &‌#x226D;
             // NOT LESS-THAN ≮ &‌#8814; &‌#x226E;
             // NOT GREATER-THAN ≯ &‌#8815; &‌#x226F;
             // NEITHER LESS-THAN NOR EQUAL TO ≰ &‌#8816; &‌#x2270;
             // NEITHER GREATER-THAN NOR EQUAL TO ≱ &‌#8817; &‌#x2271;
             // LESS-THAN OR EQUIVALENT TO ≲ &‌#8818; &‌#x2272;
             // GREATER-THAN OR EQUIVALENT TO ≳ &‌#8819; &‌#x2273;
             // NEITHER LESS-THAN NOR EQUIVALENT TO ≴ &‌#8820; &‌#x2274;
             // NEITHER GREATER-THAN NOR EQUIVALENT TO ≵ &‌#8821; &‌#x2275;
             // LESS-THAN OR GREATER-THAN ≶ &‌#8822; &‌#x2276;
             // GREATER-THAN OR LESS-THAN ≷ &‌#8823; &‌#x2277;
             // NEITHER LESS-THAN NOR GREATER-THAN ≸ &‌#8824; &‌#x2278;
             // NEITHER GREATER-THAN NOR LESS-THAN ≹ &‌#8825; &‌#x2279;
             // NOT TILDE ≁ &‌#8769; &‌#x2241;
             // MINUS TILDE ≂ &‌#8770; &‌#x2242;
             8771: '-BLANK-456-35-BLANK-', // ASYMPTOTICALLY EQUAL TO ≃ &‌#8771; &‌#x2243;
             // NOT ASYMPTOTICALLY EQUAL TO ≄ &‌#8772; &‌#x2244;
             // APPROXIMATELY BUT NOT ACTUALLY EQUAL TO ≆ &‌#8774; &‌#x2246;
             // NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO ≇ &‌#8775; &‌#x2247;
             8778: '-456-5-2356-', // ALMOST EQUAL OR EQUAL TO ≊ &‌#8778; &‌#x224A;
             // TRIPLE TILDE ≋ &‌#8779; &‌#x224B;
             // ALL EQUAL TO ≌ &‌#8780; &‌#x224C;
             8723: '-456-36-', // MINUS-OR-PLUS SIGN ∓ &‌#8723; &‌#x2213;
             // DOT PLUS ∔ &‌#8724; &‌#x2214;
             8727: '-5-35-', // ASTERISK OPERATOR ∗ &‌#8727; &‌#x2217;
             8728: '-456-3456-', // RING OPERATOR ∘ &‌#8728; &‌#x2218;
             8729: '-35-35-', // BULLET OPERATOR ∙ &‌#8729; &‌#x2219;
             8758: '-25-', // RATIO ∶ &‌#8758; &‌#x2236;
             // PROPORTION ∷ &‌#8759; &‌#x2237;
             // DOT MINUS ∸ &‌#8760; &‌#x2238 ;
             // EXCESS ∹ &‌#8761; &‌#x2239;
             // GEOMETRIC PROPORTION ∺ &‌#8762; &‌#x223A;
             // HOMOTHETIC ∻ &‌#8763; &‌#x223B;
             // REVERSED TILDE ∽ &‌#8765; &‌#x223D;
             // INVERTED LAZY S ∾ &‌#8766; &‌#x223E;
             // SINE WAVE ∿ &‌#8767; &‌#x223F;
             // WREATH PRODUCT ≀ &‌#8768; &‌#x2240;
             // EQUIVALENT TO ≍ &‌#8781; &‌#x224D;
             // GEOMETRICALLY EQUIVALENT TO ≎ &‌#8782; &‌#x224E;
             8783: '-45-5-2356-', // DIFFERENCE BETWEEN ≏ &‌#8783; &‌#x224F;
             // APPROACHES THE LIMIT ≐ &‌#8784; &‌#x2250;
             8785: '-46-5-2356-', // GEOMETRICALLY EQUAL TO ≑ &‌#8785; &‌#x2251;
             // APPROXIMATELY EQUAL TO OR THE IMAGE OF ≒ &‌#8786; &‌#x2252;
             // IMAGE OF OR APPROXIMATELY EQUAL TO ≓ &‌#8787; &‌#x2253;
             // COLON EQUALS ≔ &‌#8788; &‌#x2254;
             // EQUALS COLON ≕ &‌#8789; &‌#x2255;
             // RING IN EQUAL TO ≖ &‌#8790; &‌#x2256;
             // RING EQUAL TO ≗ &‌#8791; &‌#x2257;
             // CORRESPONDS TO ≘ &‌#8792; &‌#x2258;
             // ESTIMATES ≙ &‌#8793; &‌#x2259;
             // EQUIANGULAR TO ≚ &‌#8794; &‌#x225A;
             // STAR EQUALS ≛ &‌#8795; &‌#x225B;
             // DELTA EQUAL TO ≜ &‌#8796; &‌#x225C;
             // EQUAL TO BY DEFINITION ≝ &‌#8797; &‌#x225D;
             // MEASURED BY ≞ &‌#8798; &‌#x225E;
             // QUESTIONED EQUAL TO ≟ &‌#8799; &‌#x225F;
             8826: '-46-46-126-', // PRECEDES ≺ &‌#8826; &‌#x227A;
             8827: '-46-46-345-', // SUCCEEDS ≻ &‌#8827; &‌#x227B;
             8828: '-45-45-126-', // PRECEDES OR EQUAL TO ≼ &‌#8828; &‌#x227C;
             8829: '-45-45-345-', // SUCCEEDS OR EQUAL TO ≽ &‌#8829; &‌#x227D;
             // PRECEDES OR EQUIVALENT TO ≾ &‌#8830; &‌#x227E;
             // SUCCEEDS OR EQUIVALENT TO ≿ &‌#8831; &‌#x227F;
             // DOES NOT PRECEDE ⊀ &‌#8832; &‌#x2280;
             // DOES NOT SUCCEED ⊁ &‌#8833; &‌#x2281;
             // SQUARE IMAGE OF ⊏ &‌#8847; &‌#x228F;
             // SQUARE ORIGINAL OF ⊐ &‌#8848; &‌#x2290;
             // SQUARE IMAGE OF OR EQUAL TO ⊑ &‌#8849; &‌#x2291;
             // SQUARE ORIGINAL OF OR EQUAL TO ⊒ &‌#8850; &‌#x2292;
             // SQUARE CAP ⊓ &‌#8851; &‌#x2293;
             // SQUARE CUP ⊔ &‌#8852; &‌#x2294;
             // CIRCLED MINUS ⊖ &‌#8854; &‌#x2296;
             // CIRCLED DIVISION SLASH ⊘ &‌#8856; &‌#x2298;
             // CIRCLED DOT OPERATOR ⊙ &‌#8857; &‌#x2299;
             // CIRCLED RING OPERATOR ⊚ &‌#8858; &‌#x229A;
             // CIRCLED ASTERISK OPERATOR ⊛ &‌#8859; &‌#x229B;
             // CIRCLED EQUALS ⊜ &‌#8860; &‌#x229C;
             // CIRCLED DASH ⊝ &‌#8861; &‌#x229D;
             // SQUARED PLUS ⊞ &‌#8862; &‌#x229E;
             // SQUARED MINUS ⊟ &‌#8863; &‌#x229F;
             // SQUARED TIMES ⊠ &‌#8864; &‌#x22A0;
             // SQUARED DOT OPERATOR ⊪ &‌#8874; &‌#x22AA;
             // ASSERTION ⊦ &‌#8870; &‌#x22A6;
             // MODELS ⊧ &‌#8871; &‌#x22A7;
             // TRUE ⊨ &‌#8872; &‌#x22A8;
             // FORCES ⊩ &‌#8873; &‌#x22A9;
             // TRIPLE VERTICAL BAR RIGHT TURNSTILE ⊪ &‌#8874; &‌#x22AA;
             // DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊫ &‌#8875; &‌#x22AB;
             // DOES NOT PROVE ⊬ &‌#8876; &‌#x22AC;
             // NOT TRUE ⊭ &‌#8877; &‌#x22AD;
             // DOES NOT FORCE ⊮ &‌#8878; &‌#x22AE;
             // NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊯ &‌#8879; &‌#x22AF;
             // PRECEDES UNDER RELATION ⊰ &‌#8880; &‌#x22B0;
             // SUCCEEDS UNDER RELATION ⊱ &‌#8881; &‌#x22B1;
             // NORMAL SUBGROUP OF ⊲ &‌#8882; &‌#x22B2;
             // CONTAINS AS NORMAL SUBGROUP ⊳ &‌#8883; &‌#x22B3;
             // NORMAL SUBGROUP OF OR EQUAL TO ⊴ &‌#8884; &‌#x22B4;
             // CONTAINS AS NORMAL SUBGROUP OR EQUAL TO ⊵ &‌#8885; &‌#x22B5;
             // ORIGINAL OF ⊶ &‌#8886; &‌#x22B6;
             // IMAGE OF ⊷ &‌#8887; &‌#x22B7;
             // MULTIMAP ⊸ &‌#8888; &‌#x22B8;
             // HERMITIAN CONJUGATE MATRIX ⊹ &‌#8889; &‌#x22B9;
             // INTERCALATE ⊺ &‌#8890; &‌#x22BA;
             // DIAMOND OPERATOR ⋄ &‌#8900; &‌#x22C4;
             // STAR OPERATOR ⋆ &‌#8902; &‌#x22C6;
             // DIVISION TIMES ⋇ &‌#8903; &‌#x22C7;
             // BOWTIE ⋈ &‌#8904; &‌#x22C8;
             // LEFT NORMAL FACTOR SEMIDIRECT PRODUCT ⋉ &‌#8905; &‌#x22C9;
             // RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT ⋊ &‌#8906; &‌#x22CA;
             // LEFT SEMIDIRECT PRODUCT ⋋ &‌#8907; &‌#x22CB;
             // RIGHT SEMIDIRECT PRODUCT ⋌ &‌#8908; &‌#x22CC;
             // REVERSED TILDE EQUALS ⋍ &‌#8909; &‌#x22CD;
             // PITCHFORK ⋔ &‌#8916; &‌#x22D4;
             8917: '-5-2356-', // EQUAL AND PARALLEL TO ⋕ &‌#8917; &‌#x22D5;
             // LESS-THAN WITH DOT ⋖ &‌#8918; &‌#x22D6;
             // GREATER-THAN WITH DOT ⋗ &‌#8919; &‌#x22D7;
             // VERY MUCH LESS-THAN ⋘ &‌#8920; &‌#x22D8;
             // VERY MUCH GREATER-THAN ⋙ &‌#8921; &‌#x22D9;
             // LESS-THAN EQUAL TO OR GREATER-THAN ⋚ &‌#8922; &‌#x22DA;
             // GREATER-THAN EQUAL TO OR LESS-THAN ⋛ &‌#8923; &‌#x22DB;
             // EQUAL TO OR LESS-THAN ⋜ &‌#8924; &‌#x22DC;
             // EQUAL TO OR GREATER-THAN ⋝ &‌#8925; &‌#x22DD;
             // EQUAL TO OR PRECEDES ⋞ &‌#8926; &‌#x22DE;
             // EQUAL TO OR SUCCEEDS ⋟ &‌#8927; &‌#x22DF;
             // DOES NOT PRECEDE OR EQUAL ⋠ &‌#8928; &‌#x22E0;
             // DOES NOT SUCCEED OR EQUAL ⋡ &‌#8929; &‌#x22E1;
             // NOT SQUARE IMAGE OF OR EQUAL TO ⋢ &‌#8930; &‌#x22E2;
             // NOT SQUARE ORIGINAL OF OR EQUAL TO ⋣ &‌#8931; &‌#x22E3;
             // SQUARE IMAGE OF OR NOT EQUAL TO ⋤ &‌#8932; &‌#x22E4;
             // SQUARE ORIGINAL OF OR NOT EQUAL TO ⋥ &‌#8933; &‌#x22E5;
             // LESS-THAN BUT NOT EQUIVALENT TO ⋦ &‌#8934; &‌#x22E6;
             // GREATER-THAN BUT NOT EQUIVALENT TO ⋧ &‌#8935; &‌#x22E7;
             // PRECEDES BUT NOT EQUIVALENT TO ⋨ &‌#8936; &‌#x22E8;
             // SUCCEEDS BUT NOT EQUIVALENT TO ⋩ &‌#8937; &‌#x22E9;
             // NOT NORMAL SUBGROUP OF ⋪ &‌#8938; &‌#x22EA;
             // DOES NOT CONTAIN AS NORMAL SUBGROUP ⋫ &‌#8939; &‌#x22EB;
             // NOT NORMAL SUBGROUP OF OR EQUAL TO ⋬ &‌#8940; &‌#x22EC;
             // DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL ⋭ &‌#8941; &‌#x22ED;
             // VERTICAL ELLIPSIS ⋮ &‌#8942; &‌#x22EE;
             // MIDLINE HORIZONTAL ELLIPSIS ⋯ &‌#8943; &‌#x22EF;
             // UP RIGHT DIAGONAL ELLIPSIS ⋰ &‌#8944; &‌#x22F0;
             // DOWN RIGHT DIAGONAL ELLIPSIS ⋱ &‌#8945; &‌#x22F1;
             /* lettres grecques */
             8721: '-46-6-234-', //CAPITAL SIGMA N-ARY SUMMATION ∑ &sum; &‌#8721; &‌#x2211;
             8719: '-46-6-1234-', //CAPITAL PI N-ARY PRODUCT ∏ &prod; &‌#8719; &‌#x220F;
             //N-ARY COPRODUCT (upside down capital pi) ∐ — &‌#8720; &‌#x2210;
             913: '-46-6-1-', //GREEK CAPITAL LETTER ALPHA Α &‌#913; &‌#x0391 &‌Alpha;
             914: '-46-6-12-', //GREEK CAPITAL LETTER BETA Β &‌#914; &‌#x0392 &‌Beta;
             915: '-46-6-1245-', //GREEK CAPITAL LETTER GAMMA Γ &‌#915; &‌#x0393 &‌Gamma;
             916: '-46-6-145-', //GREEK CAPITAL LETTER DELTA Δ &‌#916; &‌#x0394 &‌Delta;
             917: '-46-6-15-', //GREEK CAPITAL LETTER EPSILON Ε &‌#917; &‌#x0395 &‌Epsilon;
             918: '-46-6-1356-', //GREEK CAPITAL LETTER ZETA Ζ &‌#918; &‌#x0396 &‌Zeta;
             919: '-46-6-125-', //GREEK CAPITAL LETTER ETA Η &‌#919; &‌#x0397 &‌Eta;
             920: '-46-6-245-', //GREEK CAPITAL LETTER THETA Θ &‌#920; &‌#x0398 &‌Theta;
             921: '-46-6-24-', //GREEK CAPITAL LETTER IOTA Ι &‌#921; &‌#x0399 &‌Iota;
             922: '-46-6-13-', //GREEK CAPITAL LETTER KAPPA Κ &‌#922; &‌#x039A &‌Kappa;
             923: '-46-6-123-', //GREEK CAPITAL LETTER LAM(B)DA Λ &‌#923; &‌#x039B &‌Lambda;
             924: '-46-6-134-', //GREEK CAPITAL LETTER MU Μ &‌#924; &‌#x039C &‌Mu;
             925: '-46-6-1345-', //GREEK CAPITAL LETTER NU Ν &‌#925; &‌#x039D &‌Nu;
             926: '-46-6-1346-', //GREEK CAPITAL LETTER XI Ξ &‌#926; &‌#x039E &‌Xi;
             927: '-46-6-135-', //GREEK CAPITAL LETTER OMICRON Ο &‌#927; &‌#x039F &‌Omicron;
             928: '-46-6-1234-', //GREEK CAPITAL LETTER PI Π &‌#928; &‌#x03A0 &‌Pi;
             929: '-46-6-1235-', //GREEK CAPITAL LETTER RHO Ρ &‌#929; &‌#x03A1 &‌Rho;
             931: '-46-6-234-', //GREEK CAPITAL LETTER SIGMA Σ &‌#931; &‌#x03A3 &‌Sigma;
             932: '-46-6-2345-', //GREEK CAPITAL LETTER TAU Τ &‌#932; &‌#x03A4 &‌Tau;
             933: '-46-6-136-', //GREEK CAPITAL LETTER UPSILON Υ &‌#933; &‌#x03A5 &‌Upsilon;
             934: '-46-6-124-', //GREEK CAPITAL LETTER PHI Φ &‌#934; &‌#x03A6 &‌Phi;
             935: '-46-6-12345-', //GREEK CAPITAL LETTER CHI Χ &‌#935; &‌#x03A7 &‌Chi;
             936: '-46-6-13456-', //GREEK CAPITAL LETTER PSI Ψ &‌#936; &‌#x03A8 &‌Psi;
             937: '-46-6-2456-', //GREEK CAPITAL LETTER OMEGA Ω &‌#937; &‌#x03A9 &‌Omega;
             945: '-46-1-', //GREEK SMALL LETTER ALPHA α &‌#945; &‌#x03B1 &‌alpha;
             946: '-46-12-', //GREEK SMALL LETTER BETA β &‌#946; &‌#x03B2 &‌beta;
             947: '-46-1245-', //GREEK SMALL LETTER GAMMA γ &‌#947; &‌#x03B3 &‌gamma;
             948: '-46-145-', //GREEK SMALL LETTER DELTA δ &‌#948; &‌#x03B4 &‌delta;
             949: '-46-15-', //GREEK SMALL LETTER EPSILON ε &‌#949; &‌#x03B5 &‌epsilon;
             950: '-46-1356-', //GREEK SMALL LETTER ZETA ζ &‌#950; &‌#x03B6 &‌zeta;
             951: '-46-125-', //GREEK SMALL LETTER ETA η &‌#951; &‌#x03B7 &‌eta;
             952: '-46-245-', //GREEK SMALL LETTER THETA θ &‌#952; &‌#x03B8 &‌theta;
             953: '-46-24-', //GREEK SMALL LETTER IOTA ι &‌#953; &‌#x03B9 &‌iota;
             954: '-46-13-', //GREEK SMALL LETTER KAPPA κ &‌#954; &‌#x03BA &‌kappa;
             955: '-46-123-', //GREEK SMALL LETTER LAM(B)DA λ &‌#955; &‌#x03BB &‌lambda;
             956: '-46-134-', //GREEK SMALL LETTER MU μ &‌#956; &‌#x03BC &‌mu;
             957: '-46-1345-', //GREEK SMALL LETTER NU ν &‌#957; &‌#x03BD &‌nu;
             958: '-46-1346-', //GREEK SMALL LETTER XI ξ &‌#958; &‌#x03BE &‌xi;
             959: '-46-135-', //GREEK SMALL LETTER OMICRON ο &‌#959; &‌#x03BF &‌omicron;
             960: '-46-1234-', //GREEK SMALL LETTER PI π &‌#960; &‌#x03C0 &‌pi;
             961: '-46-1235-', //GREEK SMALL LETTER RHO ρ &‌#961; &‌#x03C1 &‌rho;
             //GREEK SMALL LETTER FINAL SIGMA ς &‌#962; &‌#x03C2  
             963: '-46-234-', //GREEK SMALL LETTER SIGMA σ &‌#963; &‌#x03C3 &‌sigma;
             964: '-46-2345-', //GREEK SMALL LETTER TAU τ &‌#964; &‌#x03C4 &‌tau;
             965: '-46-136-', //GREEK SMALL LETTER UPSILON υ &‌#965; &‌#x03C5 &‌upsilon;
             966: '-46-124-', //GREEK SMALL LETTER PHI φ &‌#966; &‌#x03C6 &‌phi;
             967: '-46-12345-', //GREEK SMALL LETTER CHI χ &‌#967; &‌#x03C7 &‌chi;
             968: '-46-13456-', //GREEK SMALL LETTER PSI ψ &‌#968; &‌#x03C8 &‌psi;
             969: '-46-2456-', //GREEK SMALL LETTER OMEGA ω &‌#969; &‌#x03C9 &‌omega;
             /* Flèches */
             8592: '-1246-246-25-25-', // ← 8592 2190 &larr; LEFTWARDS ARROW
             8593: '-1246-126-25-25-135-', // ↑ 8593 2191 &uarr; UPWARDS ARROW
             8594: '-1246-25-25-135-', // → 8594 2192 &rarr; RIGHTWARDS ARROW
             8595: '-1246-146-25-25-135-', // ↓ 8595 2193 &darr; DOWNWARDS ARROW
             8596: '-1246-246-25-25-135-', // ↔ 8596 2194 &harr; LEFT RIGHT ARROW
             //↕ 8597 2195   UP DOWN ARROW
             8598: '-1246-45-246-25-25-', // ↖ 8598 2196   NORTH WEST ARROW
             8599: '-1246-45-25-25-135-', // ↗ 8599 2197   NORTH EAST ARROW
             8600: '-1246-56-25-25-135-', // ↘ 8600 2198   SOUTH EAST ARROW
             8601: '-1246-56-246-25-25-', // ↙ 8601 2199   SOUTH WEST ARROW
             /* ↚ 8602 219A   LEFTWARDS ARROW WITH STROKE
              ↛ 8603 219B   RIGHTWARDS ARROW WITH STROKE
              ↜ 8604 219C   LEFTWARDS WAVE ARROW
              ↝ 8605 219D   RIGHTWARDS WAVE ARROW
              ↞ 8606 219E   LEFTWARDS TWO HEADED ARROW
              ↟ 8607 219F   UPWARDS TWO HEADED ARROW
              ↠ 8608 21A0   RIGHTWARDS TWO HEADED ARROW
              ↡ 8609 21A1   DOWNWARDS TWO HEADED ARROW
              ↢ 8610 21A2   LEFTWARDS ARROW WITH TAIL
              ↣ 8611 21A3   RIGHTWARDS ARROW WITH TAIL
              ↤ 8612 21A4   LEFTWARDS ARROW FROM BAR
              ↥ 8613 21A5   UPWARDS ARROW FROM BAR
              */
             8614: '-5-156-', // ↦ 8614 21A6   RIGHTWARDS ARROW FROM BAR
             /*
             ↧ 8615 21A7   DOWNWARDS ARROW FROM BAR
             ↨ 8616 21A8   UP DOWN ARROW WITH BASE
             ↩ 8617 21A9   LEFTWARDS ARROW WITH HOOK
             ↪ 8618 21AA   RIGHTWARDS ARROW WITH HOOK
             ↫ 8619 21AB   LEFTWARDS ARROW WITH LOOP
             ↬ 8620 21AC   RIGHTWARDS ARROW WITH LOOP
             ↭ 8621 21AD   LEFT RIGHT WAVE ARROW
             ↮ 8622 21AE   LEFT RIGHT ARROW WITH STROKE
             ↯ 8623 21AF   DOWNWARDS ZIGZAG ARROW
             ↰ 8624 21B0   UPWARDS ARROW WITH TIP LEFTWARDS
             ↱ 8625 21B1   UPWARDS ARROW WITH TIP RIGHTWARDS
             ↲ 8626 21B2   DOWNWARDS ARROW WITH TIP LEFTWARDS
             ↳ 8627 21B3   DOWNWARDS ARROW WITH TIP RIGHTWARDS
             ↴ 8628 21B4   RIGHTWARDS ARROW WITH CORNER DOWNWARDS
             ↵ 8629 21B5 &crarr; DOWNWARDS ARROW WITH CORNER LEFTWARDS
             ↶ 8630 21B6   ANTICLOCKWISE TOP SEMICIRCLE ARROW
             ↷ 8631 21B7   CLOCKWISE TOP SEMICIRCLE ARROW
             ↸ 8632 21B8   NORTH WEST ARROW TO LONG BAR
             ↹ 8633 21B9   LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR
             ↺ 8634 21BA   ANTICLOCKWISE OPEN CIRCLE ARROW
             ↻ 8635 21BB   CLOCKWISE OPEN CIRCLE ARROW
             ↼ 8636 21BC   LEFTWARDS HARPOON WITH BARB UPWARDS
             ↽ 8637 21BD   LEFTWARDS HARPOON WITH BARB DOWNWARDS
             ↾ 8638 21BE   UPWARDS HARPOON WITH BARB RIGHTWARDS
             ↿ 8639 21BF   UPWARDS HARPOON WITH BARB LEFTWARDS
             ⇀ 8640 21C0   RIGHTWARDS HARPOON WITH BARB UPWARDS
             ⇁ 8641 21C1   RIGHTWARDS HARPOON WITH BARB DOWNWARDS
             ⇂ 8642 21C2   DOWNWARDS HARPOON WITH BARB RIGHTWARDS
             ⇃ 8643 21C3   DOWNWARDS HARPOON WITH BARB LEFTWARDS
             */
             8644: '-456-12456-', // ⇄ 8644 21C4   RIGHTWARDS ARROW OVER LEFTWARDS ARROW
             /*
             ⇅ 8645 21C5   UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW
             ⇆ 8646 21C6   LEFTWARDS ARROW OVER RIGHTWARDS ARROW
             ⇇ 8647 21C7   LEFTWARDS PAIRED ARROWS
             ⇈ 8648 21C8   UPWARDS PAIRED ARROWS
             ⇉ 8649 21C9   RIGHTWARDS PAIRED ARROWS
             ⇊ 8650 21CA   DOWNWARDS PAIRED ARROWS
             ⇋ 8651 21CB   LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON
             ⇌ 8652 21CC   RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON
             */
             8653: '-46-5-25-', // ⇍ 8653 21CD   LEFTWARDS DOUBLE ARROW WITH STROKE
             /*
             ⇎ 8654 21CE   LEFT RIGHT DOUBLE ARROW WITH STROKE
             */
             8655: '-46-25-2-', // ⇏ 8655 21CF   RIGHTWARDS DOUBLE ARROW WITH STROKE
             8656: '-1246-246-2356-2356-', // ⇐ 8656 21D0 &lArr; LEFTWARDS DOUBLE ARROW
             /*
             ⇑ 8657 21D1 &uArr; UPWARDS DOUBLE ARROW
             */
             8658: '-1246-2356-2356-135-', // ⇒ 8658 21D2 &rArr; RIGHTWARDS DOUBLE ARROW
             /*
             ⇓ 8659 21D3 &dArr; DOWNWARDS DOUBLE ARROW
             */
             8660: '-1246-246-2356-2356-135-', //⇔ 8660 21D4 &hArr; LEFT RIGHT DOUBLE ARROW
             /*⇕ 8661 21D5   UP DOWN DOUBLE ARROW
             ⇖ 8662 21D6   NORTH WEST DOUBLE ARROW
             ⇗ 8663 21D7   NORTH EAST DOUBLE ARROW
             ⇘ 8664 21D8   SOUTH EAST DOUBLE ARROW
             ⇙ 8665 21D9   SOUTH WEST DOUBLE ARROW
             ⇚ 8666 21DA   LEFTWARDS TRIPLE ARROW
             ⇛ 8667 21DB   RIGHTWARDS TRIPLE ARROW
             ⇜ 8668 21DC   LEFTWARDS SQUIGGLE ARROW
             ⇝ 8669 21DD   RIGHTWARDS SQUIGGLE ARROW
             ⇞ 8670 21DE   UPWARDS ARROW WITH DOUBLE STROKE
             ⇟ 8671 21DF   DOWNWARDS ARROW WITH DOUBLE STROKE
             ⇠ 8672 21E0   LEFTWARDS DASHED ARROW
             ⇡ 8673 21E1   UPWARDS DASHED ARROW
             ⇢ 8674 21E2   RIGHTWARDS DASHED ARROW
             ⇣ 8675 21E3   DOWNWARDS DASHED ARROW
             ⇤ 8676 21E4   LEFTWARDS ARROW TO BAR
             ⇥ 8677 21E5   RIGHTWARDS ARROW TO BAR
             ⇦ 8678 21E6   LEFTWARDS WHITE ARROW
             ⇧ 8679 21E7   UPWARDS WHITE ARROW
             ⇨ 8680 21E8   RIGHTWARDS WHITE ARROW
             ⇩ 8681 21E9   DOWNWARDS WHITE ARROW
             ⇪ 8682 21EA   UPWARDS WHITE ARROW FROM BAR
             ⇫ 8683 21EB   UPWARDS WHITE ARROW ON PEDESTAL
             ⇬ 8684 21EC   UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR
             ⇭ 8685 21ED   UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR
             ⇮ 8686 21EE   UPWARDS WHITE DOUBLE ARROW
             ⇯ 8687 21EF   UPWARDS WHITE DOUBLE ARROW ON PEDESTAL
             ⇰ 8688 21F0   RIGHTWARDS WHITE ARROW FROM WALL
             ⇱ 8689 21F1   NORTH WEST ARROW TO CORNER
             ⇲ 8690 21F2   SOUTH EAST ARROW TO CORNER
             ⇳ 8691 21F3   UP DOWN WHITE ARROW
             ⇴ 8692 21F4   RIGHT ARROW WITH SMALL CIRCLE
             ⇵ 8693 21F5   DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW
             ⇶ 8694 21F6   THREE RIGHTWARDS ARROWS
             ⇷ 8695 21F7   LEFTWARDS ARROW WITH VERTICAL STROKE
             ⇸ 8696 21F8   RIGHTWARDS ARROW WITH VERTICAL STROKE
             ⇹ 8697 21F9   LEFT RIGHT ARROW WITH VERTICAL STROKE
             ⇺ 8698 21FA   LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE
             ⇻ 8699 21FB   RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE
             ⇼ 8700 21FC   LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE
             ⇽ 8701 21FD   LEFTWARDS OPEN-HEADED ARROW
             ⇾ 8702 21FE   RIGHTWARDS OPEN-HEADED ARROW
             ⇿ 8703 21FF   LEFT RIGHT OPEN-HEADED ARROW
             */
         }
     };
 var allVar = {
   'fr': {
     'TBdbt': TBFdbt,
     'mathBraille': mathTBF
   },
   'nemeth': {
     'TBdbt': TBAdbt,
     'mathBraille': mathTBA
   },
   'ueb': {
     'TBdbt': TBUEdbt,
     'mathBraille': mathTBUE
   },
 };
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
                        parent.replaceChild(fenced, m);
                        console.log(parent.innerHTML);
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
                if(msub[0].children[1].tagName==="mrow"){
                    console.log("children1",msub[0].children[1]);
                    console.log("children2",msub[0].children[1].children[0]);
                }
               
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
  // mathématiques français

  let txtMathFR = {
    //   39: 'prime', // '
    //   40: '(', // (
    //   41: ')', // )  
      44: 'virgule', // ,
      59: 'point virgule', // ;
      58: 'tel que', // :
      45: 'moins', // -
      46: 'multiplié par', //point multiplicatif
      42: 'étoile', // *
      43: 'plus', // +
      47: 'divisé par', // /
      61: 'égale', // =
      91: 'crochet fermé', // [
      93: 'croché ouvert', // ]
    //   123: '-46-236-', // { accolade gauche
    //   125: '-46-356-', // { accolade droite
    //   124: '-123456-', // |
    //   8214: '-45-123456-', // DOUBLE VERTICAL LINE ‖
      33: 'factoriel', // factoriel !
      160: ' ', // espace
      171:'guillemet français ouvrant', //
      187:'guillemet français fermant', //
    //   183: '-35-35-', // middle dot &#xB7;
      176: 'degré', // DEGREE SYMBOL ° &deg; &‌#176; &‌#xB0;
    //   181: '-45-134-', //MICRO MU SYMBOL µ &micro; &‌#181; &‌#xB5;
    //   233: '-123456-', // é
      //PER MILLE (1/1000th) ‰ &permil; &‌#8240; &‌#2030;
      60: 'inférieur strictement à', //LESS THAN <  &lt; &‌#60; &‌#x3C;
      62: 'supérieur strictement à', //GREATER THAN > &gt; &‌#62; &‌#x3E;

      8290: 'fois', //invisible time
      8292: 'fois', //invisible time
    //   8289: '', // function application

      8804: 'est inférieur ou égal à', //LESS THAN OR EQUAL TO ≤ &le; &‌#8804; &‌#x2264;
      8805: 'est supérieur ou égal à', //GREATER THAN OR EQUAL TO ≥ &ge; &‌#8805; &‌#x2265;
      10877: 'est inférieur ou égal à', // LESS-THAN OR SLANTED EQUAL TO ⩽
      10878: 'est supérieur ou égal à', // GREATER-THAN OR SLANTED EQUAL TO ⩾
      177: 'plus ou moins', //PLUS OR MINUS ± &plusmn; &‌#177; &‌#xB1;
      8800: 'est différent de', //NOT EQUALS ≠ &ne; &‌#8800; &‌#x2260;
      247: 'divisé par', //DIVISION SIGN ÷ &divide; &‌#247; &‌#xF7;
      215: 'fois', //TIMES X × &times; &‌#215; &‌#x00D7;
      8722: 'moins', //MINUS − &minus; &‌#8722; &‌#x2212;
      8725: 'sur', //DIVISION SLASH ∕ — &‌#8725; &‌#x2215;
      8260: 'sur', //FRACTION SLASH ⁄ &frasl &‌#8260; &‌#x2044;
      8734: 'l\'infini', //INFINITY ∞ &infin; &‌#8734; &‌#x221E;
      //ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
      //FUNCTION ITALIC F ƒ &fnof; &‌#402; &‌#x192;
      8242: 'prime', //PRIME (single quote) ′ &prime; &‌#8242; &‌#x2032;
      8243: 'seconde', //DOUBLE PRIME (double quote) ″ &Prime; &‌#8243; &‌#x2033;
      8244: 'tierce', //TRIPLE PRIME (triple quote) ‴ — &‌#8244; &‌#x2034;
      //THEREFORE (Triangular Dots) ∴ &there4; &‌#8756; &‌#x2234;
    //   8901: '-35-', //DOT OPERATOR ⋅ &sdot; &‌#8901; &‌#x22C5;
      //SUPERSCRIPT TWO ¹ &sup1; &‌#185; &‌#xB9;
      //SUPERSCRIPT TWO ² &sup2; &‌#178; &‌#xB2;
      //SUPERSCRIPT THREE ³ &sup3; &‌#179; &‌#xB3;
      //LEFT ANGLE BRACKET ⟨ &lang; &‌#9001; &‌#x2329;
      //RIGHT ANGLE BRACKET ⟩ &rang; &‌#9002; &‌#x232A;
      //LEFT CEILING BRACKET ⌈ &lceil; &‌#8968; &‌#x2308;
      //RIGHT CEILING BRACKET ⌉ &rceil; &‌#8969; &‌#x2309;
      //LEFT FLOOR BRACKET ⌊ &lceil; &‌#8970; &‌#x230A;
      //RIGHT FLOOR BRACKET ⌋ &rceil; &‌#8971; &‌#x230B;
      8853: '-46-235-', //CIRCLED PLUS (Direct Sum) ⊕ &oplus; &‌#8853; &‌#x2295;
      8855: '-46-35-', //CIRCLED TIMES (Vector Product) ⊗ &otimes; &‌#8855; &‌#x2297;
      8747: 'intégrale', //INTEGRAL ∫ &int; &‌#8747; &‌#x222B;
      8706: 'd rond', //PARTIAL DIFFERENTIAL ∂ &part; &‌#8706; &‌#2202;
      8710: 'delta majuscule', //INCREMENT (Difference or capital Delta) Δ &Delta; &‌#8710; &‌#x2206;
      8711: 'nabla', //NABLA (Backward Difference, Grad or upside down triangle) ∇ &nabla; &‌#8711; &‌#x2207;
      8748: 'intégrale double', //DOUBLE INTEGRAL ∬ &‌#8748; &‌#x222C;
      8749: 'intégrale triple', //TRIPLE INTEGRAL ∭ &‌#8749; &‌#x222D;
      10764: 'intégrale quadruple', //QUADRUPLE INTEGRAL ⨌ &‌#10764; &‌#x2A0C;
      8750: 'intégrale de flux', //CONTOUR INTEGRAL ∮ &‌#8750; &‌#x222E;
      8751: 'intégrale de flux double', //SURFACE INTEGRAL ∯ &‌#8751; &‌#x222F;
      8752: 'intégrale de flux triple', //VOLUME INTEGRAL ∰ &‌#8752; &‌#x2230;
      //CLOCKWISE INTEGRAL ∱ &‌#8753; &‌#x2231;
      //ANTICLOCKWISE INTEGRAL ⨑ &‌#10769; &‌#x2A11;
      //CLOCKWISE CONTOUR INTEGRAL ∲ &‌#8754; &‌#x2232;
      //ANTICLOCKWISE CONTOUR INTEGRAL ∳ &‌#8755; &‌#x2233;
      // ALEF INFINITY SYMBOL ℵ &alefsym; &‌#8501; &‌#x2135;
      // WEIERSTRASS POWER SET (Script Capital P) ℘ &weierp; &‌#8472; &‌#x2118;
      // IMAGINARY Part (Blackletter I) ℑ &image; &‌#8465; &‌#x2111;
      // REAL NUMBER (Blackletter R) ℜ &real; &‌#8476; &‌#x211C;
      8477: 'grand r', //DOUBLE-STRUCK REAL NUMBER (Doublestruck R) ℝ — &‌#8477; &‌#x211D;
      8450: 'grand c', //COMPLEX NUMBERS (Doublestruck C) ℂ — &‌#8450; &‌#x2102;
      8469: 'grand n', //NATURAL NUMBERS (Doublestruck N) ℕ — &‌#8469; &‌#x2115;
      8473: 'grand p', // PRIME NUMBERS (Doublestruck P) ℙ — &‌#8473; &‌#x2119;
      8474: 'grand q', // RATIONAL NUMBERS (Doublestruck Q) ℚ — &‌#8474; &‌#x211A;
      8484: 'grand z', // INTEGERS (Doublestruck Z) ℤ — &‌#8484; &‌#x2124;
      // 8518: '', //double struck small ⅆ
      8704: 'pour tout', // FOR ALL (Upside-down A) ∀ &forall;  &‌#8704; &‌#x2200;
      8705: 'complémentaire de', // COMPLEMENT (Thin C) ∁ — &‌#8705; &‌#x2201;
      8707: 'il existe', // THERE EXISTS (Backwards E) ∃ &exist;  &‌#8707; &‌#x2203;
      8708: 'il n\'existe pas', // THERE DOES NOT EXIST (Backwards E with slash) ∄ — &‌#8708; &‌#x2204;
      8709: 'l\'ensemble vide', // EMPTY SET (O slash) ∅ &empty;  &‌#8709; &‌#x2205;
      // NOT SYMBOL (Corner) ¬ &not;  &‌#172; &‌#xAC;
      // TILDE (Alternate Not Symbol) ˜ &tilde;  — —
      8743: 'et', // LOGICAL AND (Wedge or Upside down V Symbol) ∧ &and;  &‌#8743; &‌#x2227;
      8744: 'et/ou', // LOGICAL OR (V Symbol) ∨ &or;  &‌#8744; &‌#x2228;
      // XOR ⊻ — &‌#8891; &‌#x22BB;
      // NAND ⊼ — &‌#8892; &‌#x22BC;
      // NOR ⊽ — &‌#8893; &‌#x22BD;
      8745: 'inter', // INTERSECTION (Cap or Upside Down U) ∩ &cap;  &‌#8745; &‌#x2229;
      8746: 'union', // UNION (Cup or U Symbol) ∪ &cup;  &‌#8746; &‌#x222A;
      8712: 'élément de', //ELEMENT OF ∈ &isin;  &‌#8712; &‌#x2208;
      8713: 'n\'appartient pas à', // NOT AN ELEMENT OF ∉ &notin;  &‌#8713; &‌#x2209;
      8714: 'élément de', // SMALL ELEMENT OF ∊ — &‌#8714; &‌#x220A;
      8715: 'contient comme élément', // CONTAINS AS MEMBER ∋ &ni;  &‌#8715; &‌#x220B;
      8716: '-46-45-34-', // DOES NOT CONTAIN AS MEMBER ∌ — &‌#8716; &‌#x220C;
      8717: '-46-45-16-', // SMALL CONTAINS AS MEMBER ∍ — &‌#8717; &‌#x220D;
      // SET MINUS ∖ — &‌#8726; &‌#x2216;
      8834: 'inclus dans', //SUBSET OF (Sideways U with cap to left) ⊂ &sub;  &‌#8834; &‌#x2282;
      8835: 'contient', // SUPERSET OF (Sideways U with cap to right) ⊃ &sup;  &‌#8835; &‌#x2283;
      8836: 'non inclus dans', //NOT A SUBSET OF (Subset with Slash) ⊄ &nsub;  &‌#8836; &‌#x2284;
      8837: '', // NOT A SUPERSET OF (Superset with slash) ⊅ — &‌#8837; &‌#x2285;
      8838: 'est inclus (au sens large) dans', // SUBSET OF OR EQUAL TO (Subset with line below) ⊆ &sube;  &‌#8838; &‌#x2286;
      // SUPERSET OF OR EQUAL TO (Superset with line below) ⊇ &supe;  &‌#8839; &‌#x2287;
      // NEITHER A SUBSET OF NOR EQUAL TO ⊈ — &‌#8840; &‌#x2288;
      // NEITHER A SUPERSET OF NOR EQUAL TO ⊉ — &‌#8841; &‌#x2289;
      // SUBSET OF WITH NOT EQUAL TO ⊊ — &‌#8842; &‌#x228A;
      // SUPERSET OF WITH NOT EQUAL TO ⊋ — &‌#8843; &‌#x228B;
      //DIAMOND OPERATOR (Possibility) ⋄ — &‌#8900; &‌#x22C4;
      // ASYMPTOTICALLY EQUAL TO One to one Correspondence ≃ — &‌#8771; &‌#x2243;
      // NOT ASYMPTOTICALLY EQUAL TO ≄ — &‌#8772; &‌#x2244;
      // MULTISET (U with arrow) ⊌ — &‌#8844; &‌#x228C;
      // MULTISET MULTIPLICATION (U with dot in center) ⊍ — &‌#8845; &‌#x228D;
      // MULTISET UNION (U with plus in center) ⊎ — &‌#8846; &‌#x228E;
      // DOUBLE SUBSET ⋐ — &‌#8912; &‌#x22D0;
      // DOUBLE SUPERSET ⋑ — &‌#8913; &‌#x22D1;
      // DOUBLE INTERSECTION ⋒ — &‌#8914; &‌#x22D2;
      // DOUBLE UNION ⋓ — &‌#8915; &‌#x22D3;
      // N-ARY LOGICAL AND ⋀ — &‌#8896; &‌#x22C0;
      // N-ARY LOGICAL OR ⋁ — &‌#8897; &‌#x22C1;
      // N-ARY INTERSECTION/td> ⋂ — &‌#8898; &‌#x22C2;
      // N-ARY UNION ⋃ — &‌#8899; &‌#x22C3;
      // CURLY LOGICAL OR ⋎ — &‌#8910; &‌#x22CE;
      // CURLY LOGICAL AND ⋏ — &‌#8911; &‌#x22CF;
      // CIRCLED MINUS ⊖ — &‌#8854; &‌#x2296;
      // CIRCLED DIVISION SLASH ⊘ — &‌#8856; &‌#x2298;
      // ELEMENT OF WITH LONG HORIZONTAL STROKE ⋲ &‌#8946; &‌#x22F2;
      // ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋳ &‌#8947; &‌#x22F3;
      // SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋴ &‌#8948; &‌#x22F4;
      // ELEMENT OF WITH DOT ABOVE ⋵ &‌#8949; &‌#x22F5;
      // ELEMENT OF WITH OVERBAR ⋶ &‌#8950; &‌#x22F6;
      // SMALL ELEMENT OF WITH OVERBAR ⋷ &‌#8951; &‌#x22F7;
      // ELEMENT OF WITH UNDERBAR ⋸ &‌#8952; &‌#x22F8;
      // ELEMENT OF WITH TWO HORIZONTAL STROKES ⋹ &‌#8953; &‌#x22F9;
      // CONTAINS WITH LONG HORIZONTAL STROKE ⋺ &‌#8954; &‌#x22FA;
      // CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋻ &‌#8955; &‌#x22FB;
      // SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE ⋼ &‌#8956; &‌#x22FC;
      // CONTAINS WITH OVERBAR ⋽ &‌#8957; &‌#x22FD;
      // SMALL CONTAINS WITH OVERBAR ⋾ &‌#8958; &‌#x22FE;
      // NOTATION BAG MEMBERSHIP ⋿ &‌#8959; &‌#x22FF;
      // RIGHT ANGLE ∟ &‌#8735; &‌#x221F;
      // ANGLE Entity Code = &ang; ∠ &‌#8736; &‌#x2220;
      // MEASURED ANGLE ∡ &‌#8737; &‌#x2221;
      // SPHERICAL ANGLE ∢ &‌#8738; &‌#x2222;
      8739: '-123456-', // DIVIDES ∣ &‌#8739; &‌#x2223;
      // DOES NOT DIVIDE ∤ &‌#8740; &‌#x2224;
      8741: 'est parallèle à', //PARALLEL TO ∥ &‌#8741; &‌#x2225;
      8742: 'n\'est pas parallèle à', //NOT PARALLEL TO ∦ &‌#8742; &‌#x2226;
      //RIGHT ANGLE WITH ARC ⊾ &‌#8894; &‌#x22BE;
      // RIGHT TRIANGLE ⊿ &‌#8895; &‌#x22BF;
      8869: 'est perpendiculaire à', // UP TACK (Perpendicular) Entity Code = &perp; ⊥ &‌#8869; &‌#x22A5;
      // RIGHT TACK ⊢ &‌#8866; &‌#x22A2;
      // LEFT TACK ⊣ &‌#8867; &‌#x22A3;
      // DOWN TACK ⊤ &‌#8868; &‌#x22A4;
      // THEREFORE (Triangular Dots) Entity Code = &there4; ∴ &‌#8756; &‌#x2234;
      // BECAUSE (Upside down Triangular Dots) ∵ &‌#8757; &‌#x2235;
      // PROPORTIONAL TO Entity Code = &prop; ∝ &‌#8733; &‌#x221D;
      // END OF PROOF (solid rectangle) ∎ &‌#8718; &‌#x220E;
      8773: 'est approximativement égal à', //APPROXIMATELY EQUAL ≅ &cong; &‌#8773; &‌#x2245;
      8776: 'est approximativement égal à', // ALMOST EQUAL (ASYMPTOTIC) ≈ &asymp; &‌#8776; &‌#x2248;
      8777: '-46-5-2356-', // NOT ALMOST EQUAL TO ≉ — &‌#8777; &‌#x2249;
      8764: '-45-2356-', // TILDE SIMILAR TO ∼ &sim; &‌#8764; &‌#x223C;
      8801: {
          'math': '-2356-2356-', // IDENTICAL TO (three lines) ≡ &equiv; &‌#8801; &‌#x2261;
          'chimie': '123456'
      },
      8802: '-46-2356-2356-', // NOT IDENTICAL TO ≢ — &‌#8802; &‌#x2262;
      // STRICTLY EQUIVALENT TO ≣ &‌#8803; &‌#x2263;
      // NOT IDENTICAL TO ≢ &‌#8802; &‌#x2262;
      // LESS-THAN OVER EQUAL TO ≦ &‌#8806; &‌#x2266;
      // GREATER-THAN OVER EQUAL TO ≧ &‌#8807; &‌#x2267;
      // LESS-THAN BUT NOT EQUAL TO ≨ &‌#8808; &‌#x2268;
      // GREATER-THAN BUT NOT EQUAL TO ≩ &‌#8809; &‌#x2269;
      8810: '-5-5-126-', // MUCH LESS-THAN ≪ &‌#8810; &‌#x226A;
      8811: '-5-5-345-', // MUCH GREATER-THAN ≫ &‌#8811; &‌#x226B;
      // BETWEEN ≬ &‌#8812; &‌#x226C;
      // NOT EQUIVALENT TO ≭ &‌#8813; &‌#x226D;
      // NOT LESS-THAN ≮ &‌#8814; &‌#x226E;
      // NOT GREATER-THAN ≯ &‌#8815; &‌#x226F;
      // NEITHER LESS-THAN NOR EQUAL TO ≰ &‌#8816; &‌#x2270;
      // NEITHER GREATER-THAN NOR EQUAL TO ≱ &‌#8817; &‌#x2271;
      // LESS-THAN OR EQUIVALENT TO ≲ &‌#8818; &‌#x2272;
      // GREATER-THAN OR EQUIVALENT TO ≳ &‌#8819; &‌#x2273;
      // NEITHER LESS-THAN NOR EQUIVALENT TO ≴ &‌#8820; &‌#x2274;
      // NEITHER GREATER-THAN NOR EQUIVALENT TO ≵ &‌#8821; &‌#x2275;
      // LESS-THAN OR GREATER-THAN ≶ &‌#8822; &‌#x2276;
      // GREATER-THAN OR LESS-THAN ≷ &‌#8823; &‌#x2277;
      // NEITHER LESS-THAN NOR GREATER-THAN ≸ &‌#8824; &‌#x2278;
      // NEITHER GREATER-THAN NOR LESS-THAN ≹ &‌#8825; &‌#x2279;
      // NOT TILDE ≁ &‌#8769; &‌#x2241;
      // MINUS TILDE ≂ &‌#8770; &‌#x2242;
      8771: '-5-2356-', // ASYMPTOTICALLY EQUAL TO ≃ &‌#8771; &‌#x2243;
      // NOT ASYMPTOTICALLY EQUAL TO ≄ &‌#8772; &‌#x2244;
      // APPROXIMATELY BUT NOT ACTUALLY EQUAL TO ≆ &‌#8774; &‌#x2246;
      // NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO ≇ &‌#8775; &‌#x2247;
      8778: 'est approximativement égal ou égal à', // ALMOST EQUAL OR EQUAL TO ≊ &‌#8778; &‌#x224A;
      // TRIPLE TILDE ≋ &‌#8779; &‌#x224B;
      // ALL EQUAL TO ≌ &‌#8780; &‌#x224C;
      8723: 'moins ou plus', // MINUS-OR-PLUS SIGN ∓ &‌#8723; &‌#x2213;
      // DOT PLUS ∔ &‌#8724; &‌#x2214;
      8727: 'étoile', // ASTERISK OPERATOR ∗ &‌#8727; &‌#x2217;
      8728: 'rond', // RING OPERATOR ∘ &‌#8728; &‌#x2218;
      8729: '-35-35-', // BULLET OPERATOR ∙ &‌#8729; &‌#x2219;
      // PROPORTIONAL TO ∝ &‌#8733; &‌#x221D;
      // RATIO ∶ &‌#8758; &‌#x2236;
      // PROPORTION ∷ &‌#8759; &‌#x2237;
      // DOT MINUS ∸ &‌#8760; &‌#x2238 ;
      // EXCESS ∹ &‌#8761; &‌#x2239;
      // GEOMETRIC PROPORTION ∺ &‌#8762; &‌#x223A;
      // HOMOTHETIC ∻ &‌#8763; &‌#x223B;
      // REVERSED TILDE ∽ &‌#8765; &‌#x223D;
      // INVERTED LAZY S ∾ &‌#8766; &‌#x223E;
      // SINE WAVE ∿ &‌#8767; &‌#x223F;
      // WREATH PRODUCT ≀ &‌#8768; &‌#x2240;
      // EQUIVALENT TO ≍ &‌#8781; &‌#x224D;
      // GEOMETRICALLY EQUIVALENT TO ≎ &‌#8782; &‌#x224E;
      // DIFFERENCE BETWEEN ≏ &‌#8783; &‌#x224F;
      // APPROACHES THE LIMIT ≐ &‌#8784; &‌#x2250;
      // GEOMETRICALLY EQUAL TO ≑ &‌#8785; &‌#x2251;
      // APPROXIMATELY EQUAL TO OR THE IMAGE OF ≒ &‌#8786; &‌#x2252;
      // IMAGE OF OR APPROXIMATELY EQUAL TO ≓ &‌#8787; &‌#x2253;
      // COLON EQUALS ≔ &‌#8788; &‌#x2254;
      // EQUALS COLON ≕ &‌#8789; &‌#x2255;
      // RING IN EQUAL TO ≖ &‌#8790; &‌#x2256;
      // RING EQUAL TO ≗ &‌#8791; &‌#x2257;
      // CORRESPONDS TO ≘ &‌#8792; &‌#x2258;
      // ESTIMATES ≙ &‌#8793; &‌#x2259;
      // EQUIANGULAR TO ≚ &‌#8794; &‌#x225A;
      // STAR EQUALS ≛ &‌#8795; &‌#x225B;
      // DELTA EQUAL TO ≜ &‌#8796; &‌#x225C;
      // EQUAL TO BY DEFINITION ≝ &‌#8797; &‌#x225D;
      // MEASURED BY ≞ &‌#8798; &‌#x225E;
      // QUESTIONED EQUAL TO ≟ &‌#8799; &‌#x225F;
      8826: '-46-46-126-', // PRECEDES ≺ &‌#8826; &‌#x227A;
      8827: '-46-46-345-', // SUCCEEDS ≻ &‌#8827; &‌#x227B;
      8828: '-45-45-126-', // PRECEDES OR EQUAL TO ≼ &‌#8828; &‌#x227C;
      8829: '-45-45-345-', // SUCCEEDS OR EQUAL TO ≽ &‌#8829; &‌#x227D;
      // PRECEDES OR EQUIVALENT TO ≾ &‌#8830; &‌#x227E;
      // SUCCEEDS OR EQUIVALENT TO ≿ &‌#8831; &‌#x227F;
      // DOES NOT PRECEDE ⊀ &‌#8832; &‌#x2280;
      // DOES NOT SUCCEED ⊁ &‌#8833; &‌#x2281;
      // SQUARE IMAGE OF ⊏ &‌#8847; &‌#x228F;
      // SQUARE ORIGINAL OF ⊐ &‌#8848; &‌#x2290;
      // SQUARE IMAGE OF OR EQUAL TO ⊑ &‌#8849; &‌#x2291;
      // SQUARE ORIGINAL OF OR EQUAL TO ⊒ &‌#8850; &‌#x2292;
      // SQUARE CAP ⊓ &‌#8851; &‌#x2293;
      // SQUARE CUP ⊔ &‌#8852; &‌#x2294;
      // CIRCLED MINUS ⊖ &‌#8854; &‌#x2296;
      // CIRCLED DIVISION SLASH ⊘ &‌#8856; &‌#x2298;
      // CIRCLED DOT OPERATOR ⊙ &‌#8857; &‌#x2299;
      // CIRCLED RING OPERATOR ⊚ &‌#8858; &‌#x229A;
      // CIRCLED ASTERISK OPERATOR ⊛ &‌#8859; &‌#x229B;
      // CIRCLED EQUALS ⊜ &‌#8860; &‌#x229C;
      // CIRCLED DASH ⊝ &‌#8861; &‌#x229D;
      // SQUARED PLUS ⊞ &‌#8862; &‌#x229E;
      // SQUARED MINUS ⊟ &‌#8863; &‌#x229F;
      // SQUARED TIMES ⊠ &‌#8864; &‌#x22A0;
      // SQUARED DOT OPERATOR ⊪ &‌#8874; &‌#x22AA;
      // ASSERTION ⊦ &‌#8870; &‌#x22A6;
      // MODELS ⊧ &‌#8871; &‌#x22A7;
      // TRUE ⊨ &‌#8872; &‌#x22A8;
      // FORCES ⊩ &‌#8873; &‌#x22A9;
      // TRIPLE VERTICAL BAR RIGHT TURNSTILE ⊪ &‌#8874; &‌#x22AA;
      // DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊫ &‌#8875; &‌#x22AB;
      // DOES NOT PROVE ⊬ &‌#8876; &‌#x22AC;
      // NOT TRUE ⊭ &‌#8877; &‌#x22AD;
      // DOES NOT FORCE ⊮ &‌#8878; &‌#x22AE;
      // NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE ⊯ &‌#8879; &‌#x22AF;
      // PRECEDES UNDER RELATION ⊰ &‌#8880; &‌#x22B0;
      // SUCCEEDS UNDER RELATION ⊱ &‌#8881; &‌#x22B1;
      // NORMAL SUBGROUP OF ⊲ &‌#8882; &‌#x22B2;
      // CONTAINS AS NORMAL SUBGROUP ⊳ &‌#8883; &‌#x22B3;
      // NORMAL SUBGROUP OF OR EQUAL TO ⊴ &‌#8884; &‌#x22B4;
      // CONTAINS AS NORMAL SUBGROUP OR EQUAL TO ⊵ &‌#8885; &‌#x22B5;
      // ORIGINAL OF ⊶ &‌#8886; &‌#x22B6;
      // IMAGE OF ⊷ &‌#8887; &‌#x22B7;
      // MULTIMAP ⊸ &‌#8888; &‌#x22B8;
      // HERMITIAN CONJUGATE MATRIX ⊹ &‌#8889; &‌#x22B9;
      // INTERCALATE ⊺ &‌#8890; &‌#x22BA;
      // DIAMOND OPERATOR ⋄ &‌#8900; &‌#x22C4;
      // STAR OPERATOR ⋆ &‌#8902; &‌#x22C6;
      // DIVISION TIMES ⋇ &‌#8903; &‌#x22C7;
      // BOWTIE ⋈ &‌#8904; &‌#x22C8;
      // LEFT NORMAL FACTOR SEMIDIRECT PRODUCT ⋉ &‌#8905; &‌#x22C9;
      // RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT ⋊ &‌#8906; &‌#x22CA;
      // LEFT SEMIDIRECT PRODUCT ⋋ &‌#8907; &‌#x22CB;
      // RIGHT SEMIDIRECT PRODUCT ⋌ &‌#8908; &‌#x22CC;
      // REVERSED TILDE EQUALS ⋍ &‌#8909; &‌#x22CD;
      // PITCHFORK ⋔ &‌#8916; &‌#x22D4;
      8917: '-5-2356-', // EQUAL AND PARALLEL TO ⋕ &‌#8917; &‌#x22D5;
      // LESS-THAN WITH DOT ⋖ &‌#8918; &‌#x22D6;
      // GREATER-THAN WITH DOT ⋗ &‌#8919; &‌#x22D7;
      // VERY MUCH LESS-THAN ⋘ &‌#8920; &‌#x22D8;
      // VERY MUCH GREATER-THAN ⋙ &‌#8921; &‌#x22D9;
      // LESS-THAN EQUAL TO OR GREATER-THAN ⋚ &‌#8922; &‌#x22DA;
      // GREATER-THAN EQUAL TO OR LESS-THAN ⋛ &‌#8923; &‌#x22DB;
      // EQUAL TO OR LESS-THAN ⋜ &‌#8924; &‌#x22DC;
      // EQUAL TO OR GREATER-THAN ⋝ &‌#8925; &‌#x22DD;
      // EQUAL TO OR PRECEDES ⋞ &‌#8926; &‌#x22DE;
      // EQUAL TO OR SUCCEEDS ⋟ &‌#8927; &‌#x22DF;
      // DOES NOT PRECEDE OR EQUAL ⋠ &‌#8928; &‌#x22E0;
      // DOES NOT SUCCEED OR EQUAL ⋡ &‌#8929; &‌#x22E1;
      // NOT SQUARE IMAGE OF OR EQUAL TO ⋢ &‌#8930; &‌#x22E2;
      // NOT SQUARE ORIGINAL OF OR EQUAL TO ⋣ &‌#8931; &‌#x22E3;
      // SQUARE IMAGE OF OR NOT EQUAL TO ⋤ &‌#8932; &‌#x22E4;
      // SQUARE ORIGINAL OF OR NOT EQUAL TO ⋥ &‌#8933; &‌#x22E5;
      // LESS-THAN BUT NOT EQUIVALENT TO ⋦ &‌#8934; &‌#x22E6;
      // GREATER-THAN BUT NOT EQUIVALENT TO ⋧ &‌#8935; &‌#x22E7;
      // PRECEDES BUT NOT EQUIVALENT TO ⋨ &‌#8936; &‌#x22E8;
      // SUCCEEDS BUT NOT EQUIVALENT TO ⋩ &‌#8937; &‌#x22E9;
      // NOT NORMAL SUBGROUP OF ⋪ &‌#8938; &‌#x22EA;
      // DOES NOT CONTAIN AS NORMAL SUBGROUP ⋫ &‌#8939; &‌#x22EB;
      // NOT NORMAL SUBGROUP OF OR EQUAL TO ⋬ &‌#8940; &‌#x22EC;
      // DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL ⋭ &‌#8941; &‌#x22ED;
      8942: 'points de suspension', // VERTICAL ELLIPSIS ⋮ &‌#8942; &‌#x22EE;
      8230: 'points de suspension', // HORIZONTAL ELLIPSIS ⋯
      8943: 'points de suspension', // MIDLINE HORIZONTAL ELLIPSIS ⋯ &‌#8943; &‌#x22EF;
      8944: 'points de suspension', // UP RIGHT DIAGONAL ELLIPSIS ⋰ &‌#8944; &‌#x22F0;
      8945: 'points de suspension', // DOWN RIGHT DIAGONAL ELLIPSIS ⋱ &‌#8945; &‌#x22F1;
       /* lettres grecques */
       8721: 'capital SIGMA', //CAPITAL SIGMA NARY SUMMATION ∑ &sum; &‌#8721; &‌#x2211;
       8719: 'capital PI', //CAPITAL PI NARY PRODUCT ∏ &prod; &‌#8719; &‌#x220F;
       //NARY COPRODUCT (upside down capital pi) ∐ — &‌#8720; &‌#x2210;
       913: 'capital ‌Alpha', //GREEK CAPITAL LETTER ALPHA Α &‌#913; &‌#x0391 &‌Alpha;
       914: 'capital ‌Beta', //GREEK CAPITAL LETTER BETA Β &‌#914; &‌#x0392 &‌Beta;
       915: 'capital ‌Gamma', //GREEK CAPITAL LETTER GAMMA Γ &‌#915; &‌#x0393 &‌Gamma;
       916: 'capital ‌Delta', //GREEK CAPITAL LETTER DELTA Δ &‌#916; &‌#x0394 &‌Delta;
       917: 'capital ‌Epsilon', //GREEK CAPITAL LETTER EPSILON Ε &‌#917; &‌#x0395 &‌Epsilon;
       918: 'capital ‌Zeta', //GREEK CAPITAL LETTER ZETA Ζ &‌#918; &‌#x0396 &‌Zeta;
       919: 'capital ‌Eta', //GREEK CAPITAL LETTER ETA Η &‌#919; &‌#x0397 &‌Eta;
       920: 'capital ‌Theta', //GREEK CAPITAL LETTER THETA Θ &‌#920; &‌#x0398 &‌Theta;
       921: 'capital ‌Iota', //GREEK CAPITAL LETTER IOTA Ι &‌#921; &‌#x0399 &‌Iota;
       922: 'capital ‌Kappa', //GREEK CAPITAL LETTER KAPPA Κ &‌#922; &‌#x039A &‌Kappa;
       923: 'capital ‌Lambda', //GREEK CAPITAL LETTER LAM(B)DA Λ &‌#923; &‌#x039B &‌Lambda;
       924: 'capital ‌Mu', //GREEK CAPITAL LETTER MU Μ &‌#924; &‌#x039C &‌Mu;
       925: 'capital ‌Nu', //GREEK CAPITAL LETTER NU Ν &‌#925; &‌#x039D &‌Nu;
       926: 'capital ‌Xi', //GREEK CAPITAL LETTER XI Ξ &‌#926; &‌#x039E &‌Xi;
       927: 'capital ‌Omicron', //GREEK CAPITAL LETTER OMICRON Ο &‌#927; &‌#x039F &‌Omicron;
       928: 'capital ‌Pi', //GREEK CAPITAL LETTER PI Π &‌#928; &‌#x03A0 &‌Pi;
       929: 'capital ‌Rho', //GREEK CAPITAL LETTER RHO Ρ &‌#929; &‌#x03A1 &‌Rho;
       931: 'capital ‌Sigma', //GREEK CAPITAL LETTER SIGMA Σ &‌#931; &‌#x03A3 &‌Sigma;
       932: 'capital ‌Tau', //GREEK CAPITAL LETTER TAU Τ &‌#932; &‌#x03A4 &‌Tau;
       933: 'capital ‌Upsilon', //GREEK CAPITAL LETTER UPSILON Υ &‌#933; &‌#x03A5 &‌Upsilon;
       934: 'capital ‌Phi', //GREEK CAPITAL LETTER PHI Φ &‌#934; &‌#x03A6 &‌Phi;
       935: 'capital ‌Chi', //GREEK CAPITAL LETTER CHI Χ &‌#935; &‌#x03A7 &‌Chi;
       936: 'capital ‌Psi', //GREEK CAPITAL LETTER PSI Ψ &‌#936; &‌#x03A8 &‌Psi;
       937: 'capital ‌Omega', //GREEK CAPITAL LETTER OMEGA Ω &‌#937; &‌#x03A9 &‌Omega;
       945: '‌alpha', //GREEK SMALL LETTER ALPHA α &‌#945; &‌#x03B1 &‌alpha;
       946: '‌beta', //GREEK SMALL LETTER BETA β &‌#946; &‌#x03B2 &‌beta;
       947: '‌gamma', //GREEK SMALL LETTER GAMMA γ &‌#947; &‌#x03B3 &‌gamma;
       948: '‌delta', //GREEK SMALL LETTER DELTA δ &‌#948; &‌#x03B4 &‌delta;
       949: '‌epsilon', //GREEK SMALL LETTER EPSILON ε &‌#949; &‌#x03B5 &‌epsilon;
       1013: 'epsilon', //Greek Lunate Epsilon Symbol ϵ &‌#1013; &#x3f5 &‌epsilon;
       950: '‌zeta', //GREEK SMALL LETTER ZETA ζ &‌#950; &‌#x03B6 &‌zeta;
       951: '‌êta', //GREEK SMALL LETTER ETA η &‌#951; &‌#x03B7 &‌eta;
       952: '‌theta', //GREEK SMALL LETTER THETA θ &‌#952; &‌#x03B8 &‌theta;
       953: '‌iota', //GREEK SMALL LETTER IOTA ι &‌#953; &‌#x03B9 &‌iota;
       954: '‌kappa', //GREEK SMALL LETTER KAPPA κ &‌#954; &‌#x03BA &‌kappa;
       955: '‌lambda', //GREEK SMALL LETTER LAM(B)DA λ &‌#955; &‌#x03BB &‌lambda;
       956: '‌mu', //GREEK SMALL LETTER MU μ &‌#956; &‌#x03BC &‌mu;
       957: '‌nu', //GREEK SMALL LETTER NU ν &‌#957; &‌#x03BD &‌nu;
       958: '‌xi', //GREEK SMALL LETTER XI ξ &‌#958; &‌#x03BE &‌xi;
       959: '‌omicron', //GREEK SMALL LETTER OMICRON ο &‌#959; &‌#x03BF &‌omicron;
       960: '‌pi', //GREEK SMALL LETTER PI π &‌#960; &‌#x03C0 &‌pi;
       961: '‌rho', //GREEK SMALL LETTER RHO ρ &‌#961; &‌#x03C1 &‌rho;
      //GREEK SMALL LETTER FINAL SIGMA ς &‌#962; &‌#x03C2  
      963: '‌sigma', //GREEK SMALL LETTER SIGMA σ &‌#963; &‌#x03C3 &‌sigma;
      964: '‌tau', //GREEK SMALL LETTER TAU τ &‌#964; &‌#x03C4 &‌tau;
      965: '‌upsilon', //GREEK SMALL LETTER UPSILON υ &‌#965; &‌#x03C5 &‌upsilon;
      966: '‌phi', //GREEK SMALL LETTER PHI φ &‌#966; &‌#x03C6 &‌phi;
      967: '‌chi', //GREEK SMALL LETTER CHI χ &‌#967; &‌#x03C7 &‌chi;
      968: '‌psi', //GREEK SMALL LETTER PSI ψ &‌#968; &‌#x03C8 &‌psi;
      969: '‌omega', //GREEK SMALL LETTER OMEGA ω &‌#969; &‌#x03C9 &‌omega;
      /* Flèches */
      8592: 'flèche gauche', // ← 8592 2190 &larr; LEFTWARDS ARROW
      8593: 'flèche haut', // ↑ 8593 2191 &uarr; UPWARDS ARROW
      8594: 'flèche droite', // → 8594 2192 &rarr; RIGHTWARDS ARROW
      8595: 'flèche bas', // ↓ 8595 2193 &darr; DOWNWARDS ARROW
      8596: 'flèche droite et gauche', // ↔ 8596 2194 &harr; LEFT RIGHT ARROW
      //↕ 8597 2195   UP DOWN ARROW
      8598: 'flèche nord ouest', // ↖ 8598 2196   NORTH WEST ARROW
      8599: 'flèche nord est', // ↗ 8599 2197   NORTH EAST ARROW
      8600: 'flèche sud est', // ↘ 8600 2198   SOUTH EAST ARROW
      8601: 'flèche sud ouest', // ↙ 8601 2199   SOUTH WEST ARROW
      /* ↚ 8602 219A   LEFTWARDS ARROW WITH STROKE
       ↛ 8603 219B   RIGHTWARDS ARROW WITH STROKE
       ↜ 8604 219C   LEFTWARDS WAVE ARROW
       ↝ 8605 219D   RIGHTWARDS WAVE ARROW
       ↞ 8606 219E   LEFTWARDS TWO HEADED ARROW
       ↟ 8607 219F   UPWARDS TWO HEADED ARROW
       ↠ 8608 21A0   RIGHTWARDS TWO HEADED ARROW
       ↡ 8609 21A1   DOWNWARDS TWO HEADED ARROW
       ↢ 8610 21A2   LEFTWARDS ARROW WITH TAIL
       ↣ 8611 21A3   RIGHTWARDS ARROW WITH TAIL
       ↤ 8612 21A4   LEFTWARDS ARROW FROM BAR
       ↥ 8613 21A5   UPWARDS ARROW FROM BAR
       */
      8614: 'a pour image', // ↦ 8614 21A6   RIGHTWARDS ARROW FROM BAR
      /*
      ↧ 8615 21A7   DOWNWARDS ARROW FROM BAR
      ↨ 8616 21A8   UP DOWN ARROW WITH BASE
      ↩ 8617 21A9   LEFTWARDS ARROW WITH HOOK
      ↪ 8618 21AA   RIGHTWARDS ARROW WITH HOOK
      ↫ 8619 21AB   LEFTWARDS ARROW WITH LOOP
      ↬ 8620 21AC   RIGHTWARDS ARROW WITH LOOP
      ↭ 8621 21AD   LEFT RIGHT WAVE ARROW
      ↮ 8622 21AE   LEFT RIGHT ARROW WITH STROKE
      ↯ 8623 21AF   DOWNWARDS ZIGZAG ARROW
      ↰ 8624 21B0   UPWARDS ARROW WITH TIP LEFTWARDS
      ↱ 8625 21B1   UPWARDS ARROW WITH TIP RIGHTWARDS
      ↲ 8626 21B2   DOWNWARDS ARROW WITH TIP LEFTWARDS
      ↳ 8627 21B3   DOWNWARDS ARROW WITH TIP RIGHTWARDS
      */
      8628: '-46-156-', //↴ 8628 21B4   RIGHTWARDS ARROW WITH CORNER DOWNWARDS
      /*↵ 8629 21B5 &crarr; DOWNWARDS ARROW WITH CORNER LEFTWARDS
      ↶ 8630 21B6   ANTICLOCKWISE TOP SEMICIRCLE ARROW
      ↷ 8631 21B7   CLOCKWISE TOP SEMICIRCLE ARROW
      ↸ 8632 21B8   NORTH WEST ARROW TO LONG BAR
      ↹ 8633 21B9   LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR
      ↺ 8634 21BA   ANTICLOCKWISE OPEN CIRCLE ARROW
      ↻ 8635 21BB   CLOCKWISE OPEN CIRCLE ARROW
      ↼ 8636 21BC   LEFTWARDS HARPOON WITH BARB UPWARDS
      ↽ 8637 21BD   LEFTWARDS HARPOON WITH BARB DOWNWARDS
      ↾ 8638 21BE   UPWARDS HARPOON WITH BARB RIGHTWARDS
      ↿ 8639 21BF   UPWARDS HARPOON WITH BARB LEFTWARDS
      ⇀ 8640 21C0   RIGHTWARDS HARPOON WITH BARB UPWARDS
      ⇁ 8641 21C1   RIGHTWARDS HARPOON WITH BARB DOWNWARDS
      ⇂ 8642 21C2   DOWNWARDS HARPOON WITH BARB RIGHTWARDS
      ⇃ 8643 21C3   DOWNWARDS HARPOON WITH BARB LEFTWARDS
      */
      8644: '-456-12456-', // ⇄ 8644 21C4   RIGHTWARDS ARROW OVER LEFTWARDS ARROW
      /*
      ⇅ 8645 21C5   UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW
      ⇆ 8646 21C6   LEFTWARDS ARROW OVER RIGHTWARDS ARROW
      ⇇ 8647 21C7   LEFTWARDS PAIRED ARROWS
      ⇈ 8648 21C8   UPWARDS PAIRED ARROWS
      ⇉ 8649 21C9   RIGHTWARDS PAIRED ARROWS
      ⇊ 8650 21CA   DOWNWARDS PAIRED ARROWS
      */
      // ⇋ 8651 21CB   LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON

      8652: '-456-12456-', // ⇌ 8652 21CC   RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON

      8653: '-46-5-25-', // ⇍ 8653 21CD   LEFTWARDS DOUBLE ARROW WITH STROKE
      /*
      ⇎ 8654 21CE   LEFT RIGHT DOUBLE ARROW WITH STROKE
      */
      8655: '-46-25-2-', // ⇏ 8655 21CF   RIGHTWARDS DOUBLE ARROW WITH STROKE
      8656: '-5-25-', // ⇐ 8656 21D0 &lArr; LEFTWARDS DOUBLE ARROW
      /*
      ⇑ 8657 21D1 &uArr; UPWARDS DOUBLE ARROW
      */
      8658: 'implique', // ⇒ 8658 21D2 &rArr; RIGHTWARDS DOUBLE ARROW
     
      // ⇓ 8659 21D3 &dArr; DOWNWARDS DOUBLE ARROW
      8660: 'est équivalent à', //⇔ 8660 21D4 &hArr; LEFT RIGHT DOUBLE ARROW
     /*⇕ 8661 21D5   UP DOWN DOUBLE ARROW
      ⇖ 8662 21D6   NORTH WEST DOUBLE ARROW
      ⇗ 8663 21D7   NORTH EAST DOUBLE ARROW
      ⇘ 8664 21D8   SOUTH EAST DOUBLE ARROW
      ⇙ 8665 21D9   SOUTH WEST DOUBLE ARROW
      ⇚ 8666 21DA   LEFTWARDS TRIPLE ARROW
      ⇛ 8667 21DB   RIGHTWARDS TRIPLE ARROW
      ⇜ 8668 21DC   LEFTWARDS SQUIGGLE ARROW
      ⇝ 8669 21DD   RIGHTWARDS SQUIGGLE ARROW
      ⇞ 8670 21DE   UPWARDS ARROW WITH DOUBLE STROKE
      ⇟ 8671 21DF   DOWNWARDS ARROW WITH DOUBLE STROKE
      ⇠ 8672 21E0   LEFTWARDS DASHED ARROW
      ⇡ 8673 21E1   UPWARDS DASHED ARROW
      ⇢ 8674 21E2   RIGHTWARDS DASHED ARROW
      ⇣ 8675 21E3   DOWNWARDS DASHED ARROW
      ⇤ 8676 21E4   LEFTWARDS ARROW TO BAR
      ⇥ 8677 21E5   RIGHTWARDS ARROW TO BAR
      ⇦ 8678 21E6   LEFTWARDS WHITE ARROW
      ⇧ 8679 21E7   UPWARDS WHITE ARROW
      ⇨ 8680 21E8   RIGHTWARDS WHITE ARROW
      ⇩ 8681 21E9   DOWNWARDS WHITE ARROW
      ⇪ 8682 21EA   UPWARDS WHITE ARROW FROM BAR
      ⇫ 8683 21EB   UPWARDS WHITE ARROW ON PEDESTAL
      ⇬ 8684 21EC   UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR
      ⇭ 8685 21ED   UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR
      ⇮ 8686 21EE   UPWARDS WHITE DOUBLE ARROW
      ⇯ 8687 21EF   UPWARDS WHITE DOUBLE ARROW ON PEDESTAL
      ⇰ 8688 21F0   RIGHTWARDS WHITE ARROW FROM WALL
      ⇱ 8689 21F1   NORTH WEST ARROW TO CORNER
      ⇲ 8690 21F2   SOUTH EAST ARROW TO CORNER
      ⇳ 8691 21F3   UP DOWN WHITE ARROW
      ⇴ 8692 21F4   RIGHT ARROW WITH SMALL CIRCLE
      ⇵ 8693 21F5   DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW
      ⇶ 8694 21F6   THREE RIGHTWARDS ARROWS
      ⇷ 8695 21F7   LEFTWARDS ARROW WITH VERTICAL STROKE
      ⇸ 8696 21F8   RIGHTWARDS ARROW WITH VERTICAL STROKE
      ⇹ 8697 21F9   LEFT RIGHT ARROW WITH VERTICAL STROKE
      ⇺ 8698 21FA   LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE
      ⇻ 8699 21FB   RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE
      ⇼ 8700 21FC   LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE
      ⇽ 8701 21FD   LEFTWARDS OPEN-HEADED ARROW
      ⇾ 8702 21FE   RIGHTWARDS OPEN-HEADED ARROW
      ⇿ 8703 21FF   LEFT RIGHT OPEN-HEADED ARROW
      */
      9633: 'd\'alembertien', // □ alembertien
      9651: 'laplatien', // White Up-Pointing Triangle △
      10548: '-45-156-', // ⤴ Arrow Pointing Rightwards Then Curving Upwards
      10549: '-46-156-', // ⤵ ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS
      10231: '-5-12456-', // ⟷
  }


;
(function() {
    'use strict';

    const ponctuations = [
        44, // ,
        59, // ;
        171, // «
        187, // »
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
        'mroot': 'racine %2ième de %1',
        'mroot3': 'racine cubique de %1',
        'integrale': '%1 de %2 à %3 de',
        'integrale3': '%1 de %2 à %3',
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
        'combinaison': 'combinaison de %2 parmi %3',
        'complementaire': 'complémentaire de %3 dans %2'
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
     * @var optionsTexte
     * @type {object}
     * @property {boolean} [ponctuation=false] true = ponctuation en toutes lettres
     * @property {boolean} [descMatrice=false] true = description matrice (lignes colonnes)
     */
    let optionsText = {
        'ponctuation': false, // ponctuation en toutes lettres
        'descMatrice': false // description matrice (lignes colonnes)
    };
    let monTxtMath = txtMathFR;

    /**
     * @method
     * @name Mathml2braille#mathml2text
     * @param {object} [optionsText]
     * @returns {string}
     * @example
     * let mathml2braille = new Mathml2braille();
     * mathml2braille.mathml2text();
     */
    Mathml2braille.prototype.mathml2text = function() {
        mesFonctions = this._mesFonctions;
        writeEq = this._writeEq;



        if (arguments[0] && typeof arguments[0] === "object") {
            optionsText = mesFonctions._extendDefaults(optionsText, arguments[0]);
        }

        if (!optionsText.ponctuation) {
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

            writeEq._supprimeprefix(formClone);
            writeEq._superflus(formClone);
            writeEq._ajoutmfenced(formClone);
            writeEq._reecritureMultiscripts(formClone);

            rewrite._ilExisteUnique(formClone);
            rewrite._complementaire(formClone);
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

            let menclose = formClone.querySelectorAll('menclose');
            i = menclose.length;
            while (i--) {
                render._menclose(menclose[i]);
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
        _menclose:function(menclose){
            let parent=menclose.parentNode;

            switch (menclose.getAttribute('notation')) {
                case 'radical':
                    let msqrt=document.createElement('msqrt');
                    msqrt.innerHTML=menclose.innerHTML;
                    parent.replaceChild(msqrt,menclose);
                    // render._msqrt(menclose);
                    break;
            
                default:
                    let mrow=document.createElement('mrow');
                    mrow.innerHTML=menclose.innerHTML;
                    parent.replaceChild(mrow,menclose);
                    break;
            }
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
                if(!msubsup.nextElementSibling){
                    render._writeText(msubsup, 'integrale3');
                }else{
                    render._integrale(msubsup);
                }
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
            const tagNameOut = ['msqrt', 'msubsup', 'mmultiscripts', 'munder', 'mrow', 'mfrac'];
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

            txt=rewriteTextFinal._angle(txt);

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
         * recherche les complémentaires
         * @param {HTMLCollection} form 
         */
        _complementaire(form) {
            let mesMi = form.querySelectorAll('mi');
            mesMi.forEach((mi) => {
                if (mi.textContent.trim() === '∁') {
                    let parent = mi.parentElement;
                    if (parent && parent.tagName === 'msub') {
                        let next = parent.nextElementSibling;
                        if (next) {
                            let mrow = document.createElement('mrow');
                            mrow.appendChild(parent.firstElementChild);
                            mrow.appendChild(parent.firstElementChild);
                            mrow.appendChild(parent.nextElementSibling);
                            parent.parentElement.replaceChild(mrow, parent);
                            render._writeText(mrow, 'complementaire');
                        }
                    }

                    // if (mi.nextElementSibling && mi.nextElementSibling.textContent.trim() === '!') {


                    //     mtext.appendChild(document.createTextNode('un unique'));
                    //     parent.replaceChild(mtext, mi.nextElementSibling);
                    // }
                }
            });

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
            optionsText.descMatrice && mrow.appendChild(document.createTextNode(textNode));
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


    var rewriteTextFinal = {
        _angle: function(txt) {
            var mots = txt.split(' ');
            if (mots.indexOf('angle') !== -1 && mots.indexOf(',') !== -1) {

                if (mots.indexOf('vecteur') !== -1) {
                    txt = txt.replace(',', 'avec le').replace('(', 'du');
                    // txt=txt.replace(',','avec')
                } else if (mots.indexOf(',') !== -1) {
                    txt = txt.replace(',', 'avec').replace('(', 'de');
                    // txt = txt.replace('(', 'de');

                }
                txt = txt.replace(')', '');
                console.log(txt);

                // 'angle2': 'angle de %1 avec %2',
                // 'angle3': 'angle du %1 avec le %2',
            }
            return txt;
        }
    }
})();
    })(window, document);
false

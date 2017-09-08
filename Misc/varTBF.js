 // table française basée sur DBTWin
 var TBFdbt = {
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
     // mathématiques français
     mathTBF = {
         'caracMath': {
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
             'point6':'-6-',
         },
         'caracDec': {
             susouscrit: {
                 8594: '-46-25-', //vecteur
                 175: '-456-25-', //barre
                 95: '-456-25-', //barre mathtype qui met un _
                 732: '-5-456-25-', //tilde
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
             42: '-5-35-', // *
             43: '-235-', // +
             47: '-34-', // /
             61: '-2356-', // =
             91: '-12356-', // [
             93: '-23456-', // ]
             123: '-46-236-', // { accolade gauche
             125: '-46-356-', // { accolade droite
             124: '-123456-', // |
             8214: '-45-123456-', // ||
             33: '-456-35-', // factoriel !
             160: '-BLANK-', // espace
             183: '-35-35-', // middle dot &#xB7;
             176: '-135-', // DEGREE SYMBOL ° &deg; &‌#176; &‌#xB0;
             181: '-45-134-', //MICRO MU SYMBOL µ &micro; &‌#181; &‌#xB5;
             //PER MILLE (1/1000th) ‰ &permil; &‌#8240; &‌#2030;
             60: '-5-126-', //LESS THAN <  &lt; &‌#60; &‌#x3C;
             62: '-5-345-', //GREATER THAN > &gt; &‌#62; &‌#x3E;
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
             // THEREFORE (Triangular Dots) Entity Code = &there4; ∴ &‌#8756; &‌#x2234;
             // BECAUSE (Upside down Triangular Dots) ∵ &‌#8757; &‌#x2235;
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
             8628: '-46-156-',//↴ 8628 21B4   RIGHTWARDS ARROW WITH CORNER DOWNWARDS
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
            9633:'-456-1456-', // □ alembertien
            9651: '-46-45-145-', // White Up-Pointing Triangle △
            10548:'-45-156-', // ⤴ Arrow Pointing Rightwards Then Curving Upwards
            10549:'-46-156-', // ⤵ ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS
         }
     };
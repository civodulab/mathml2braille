;(function (w, d) {
  'use strict';
  var brailledirect = function (maClass) {
    var langueDoc = d.getElementsByTagName('html')[0].getAttribute('lang') || d.getElementsByTagName('html')[0].getAttribute('xml:lang') || 'en',
      tbf6 = d.querySelectorAll(maClass),
      l = tbf6.length,
      i = 0;
    for (; i != l; i++) {
      var langue = tbf6[i].getAttribute('lang') || tbf6[i].getAttribute('xml:lang') || langueDoc,
        lg = langue.split('-')[0],
        maTable = allVar[lg].TBdbt || allVar['en'].TBdbt;
      tbf6[i].textContent = tbf6[i].textContent.braille(maTable);
    }
  };
  w.brailledirect=brailledirect;
})(window, document);


brailledirect('.js-brailleDirect');


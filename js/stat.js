stat();


function stat() {
    var converti = document.querySelectorAll('.js-mathmlConverti'),
        lconverti = converti.length,
        g = 0,
        b = 0,
        pourcent = 0,
        i = 0;
    for (; i !== lconverti; i++) {
        var parent = converti[i].parentElement,
            math2 = parent.querySelector('.mathbraille2'),
            math = parent.querySelector('.mathbraille'),
            reg1 = new RegExp('⠐(<br[^>]+\/>|<br[^>]+><\/br>)', 'g'),
            reg2 = new RegExp('(<br[^>]+\/>|<br[^>]+><\/br>)', 'g'),
            txt = converti[i].innerHTML.replace(reg1, '');
        txt = txt.replace(reg2, '');

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
    document.getElementById('stat').innerHTML = g + ' équations bonnes sur ' + (b + g) + ' - ' + pourcent + '%';
}
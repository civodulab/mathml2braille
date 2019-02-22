_createForm();
stat();
option();

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
    if (pourcent === 100) {
        document.getElementById('fstat').classList.add('good');
    } else {
        document.getElementById('fstat').classList.add('bad');
    }
    document.getElementById('stat').textContent = g + ' équations bonnes sur ' + (b + g) + ' - ' + pourcent + '%';
}

function option() {
    let monForm = document.getElementById('monForm');
    monForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        let coupeForm = document.getElementById('coupure').value;
        let matLin = monForm["linear"].checked;
        let remplaceFormule = monForm["remplace"].checked;

        document.querySelectorAll(".js-mathmlConverti").forEach(e => e.parentNode.removeChild(e));
        var options1 = {
            'coupureFormule': coupeForm,
            'matriceLineaire': matLin,
            'remplaceFormule': remplaceFormule
        }
        var options2 = {
            'coupureFormule': coupeForm,
            'matriceLineaire': matLin,
            'remplaceFormule': remplaceFormule,
            'chimie': true
        }
        var options4 = {
            'coupureFormule': coupeForm,
            'matriceLineaire': matLin,
            'remplaceFormule': remplaceFormule,
			'codeBrailleMath': 'nemeth',
			'codeSysteme': 'SA'
		};
	
		mathml2braille('.js-SA', options4);
        // mathml2braille(options1);
        mathml2braille('.js-math2braille', options1);
        mathml2braille('.js-matrice-lineaire', options1);
        mathml2braille('.js-chimie', options2);
    })

}

function _createForm() {
    let monForm = document.createElement('form');
    monForm.setAttribute('id', 'monForm');
    //Stats

    let fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'fstat');
    let legend = document.createElement('legend');
    legend.textContent = 'Stats';
    let p = document.createElement('p');
    p.setAttribute('id', 'stat');
    fieldset.appendChild(legend);
    fieldset.appendChild(p);
    monForm.appendChild(fieldset);
    // Options
    fieldset = document.createElement('fieldset');
    legend = document.createElement('legend');
    legend.textContent = 'Options';
    fieldset.appendChild(legend);
    //remplace
    fieldset2 = document.createElement('fieldset');
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'remplace');
    input.setAttribute('id', 'remplace');
    let label = document.createElement('label');
    label.setAttribute('for', 'remplace');
    label.textContent = 'Remplacer la formule';
    fieldset2.appendChild(input);
    fieldset2.appendChild(label);
    fieldset.appendChild(fieldset2);
    //linéaire
    fieldset2 = document.createElement('fieldset');
    input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'linear');
    input.setAttribute('id', 'matLin');
    label = document.createElement('label');
    label.textContent = 'Matrice linéaire';
    label.setAttribute('for', 'matLin');
    fieldset2.appendChild(input);
    fieldset2.appendChild(label);
    fieldset.appendChild(fieldset2);
    //coupure
    fieldset2 = document.createElement('fieldset');
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'coupure');
    input.setAttribute('id', 'coupure');
    input.setAttribute('maxlength', '2');
    input.setAttribute('size', '4');
    input.setAttribute('value', '0');
    label = document.createElement('label');
    label.textContent = 'Entrer le nombre de caractères où la formule sera coupée (0 pour ne rien faire)';
    label.setAttribute('for', 'coupure');
    fieldset2.appendChild(input);
    fieldset2.appendChild(label);
    fieldset.appendChild(fieldset2);
    // bouton
    input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('value', 'Valider');
    fieldset.appendChild(input);

    monForm.appendChild(fieldset);
    document.body.insertBefore(monForm, document.body.firstChild);
}
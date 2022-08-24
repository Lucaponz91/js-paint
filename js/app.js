
const buttonElement = document.querySelector('button[type="submit"]');
const gridEl = document.querySelector('.grid_container')
let inputColor = document.getElementById("colorPicker");
generaGriglia(60, 30)
buttonElement.addEventListener('click', function () {
    let width = parseInt(document.querySelector('input[name="larghezza"]').value);
    let height = parseInt(document.querySelector('input[name="altezza"]').value);
    gridEl.innerHTML = ``

    generaGriglia(width, height)
}
)
// EVENT LISTENER DI #TUTTA# LA GRIGLIA
gridEl.addEventListener('mousemove', addColorMove)
gridEl.addEventListener('mousedown', addColorDown)

// ################## FUNZIONI ############################
// ##### FUNZIONI AGGIUNGI COLORE
function addColorMove(event) {
    if (event.buttons == 1) {
        event.preventDefault();
        if (event.target.nodeName === 'DIV') {
            event.stopPropagation()
            event.target.style.backgroundColor = inputColor.value
        }
    }
}
function addColorDown(event) {
    if (event.target.nodeName === 'DIV') {
        event.stopPropagation()
        event.target.style.backgroundColor = inputColor.value
    }
}
// ##### FUNZIONE GENERA GRIGLIA
function generaGriglia(x, y) {
    gridEl.innerHTML = ''
    for (i = 0; i < x * y; i++) {
        const cella = creaCelleDiv()
        cella.dataset.numero = i + 1

        gridEl.append(cella)


    }
}
// ##### FUNZIONE CREAZIONE DIV
function creaCelleDiv() {
    // creo il div
    let width = parseInt(document.querySelector('input[name="larghezza"]').value);
    const div = document.createElement('div')
    if (isNaN(width)) {
        div.style.cssText += `width:calc(100% / 60)`
    } else {
        div.style.cssText += `width:calc(100% / ${width} )`
    }
    // aggiungo la classe cella ai div creati
    div.classList.add('cella')
    return div
}
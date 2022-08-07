
const buttonElement = document.querySelector('button[type="submit"]');
const gridEl = document.querySelector('.grid_container')
generaGriglia(60, 30)
buttonElement.addEventListener('click', function () {
const width = parseInt(document.querySelector('input[name="larghezza"]').value);
const height = parseInt(document.querySelector('input[name="altezza"]').value);
console.log(width, height)
console.dir(buttonElement)
generaGriglia(width, height)
}
)





// ################## FUNZIONI ############################
// ##### FUNZIONE GENERA GRIGLIA
function generaGriglia(x, y){
    gridEl.innerHTML = ''
    for (i=0; i< x*y; i++){
        const cella = creaCelleDiv()
        gridEl.append(cella)

    }    
}


// ##### FUNZIONE CREAZIONE DIV
function creaCelleDiv () {
    // creo il div
    const div = document.createElement('div')
    // aggiungo la classe cella ai div creati
    div.classList.add('cella')
    // Aggiungo l'event listener ad ogni div
    // div.addEventListener('click', clickHandler)
    return div
}
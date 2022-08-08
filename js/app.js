
const buttonElement = document.querySelector('button[type="submit"]');
const gridEl = document.querySelector('.grid_container')
generaGriglia(60, 30)
buttonElement.addEventListener('click', function () {
let width = parseInt(document.querySelector('input[name="larghezza"]').value);
let height = parseInt(document.querySelector('input[name="altezza"]').value);
console.log(width, height)
console.dir(buttonElement)
generaGriglia(width, height)
}
)
// TRY1: EVENT LISTENER DI #TUTTA# LA GRIGLIA
gridEl.addEventListener('click', function(event){
    console.log(event.target)
    console.dir(event)
}
)





// ################## FUNZIONI ############################
// ##### FUNZIONE GENERA GRIGLIA
function generaGriglia(x, y){
    gridEl.innerHTML = ''
    for (i=0; i< x*y; i++){
        const cella = creaCelleDiv()
        cella.dataset.numero = i + 1
        gridEl.append(cella)


    }    
}


// ##### FUNZIONE CREAZIONE DIV
function creaCelleDiv () {
    // creo il div
    let width = parseInt(document.querySelector('input[name="larghezza"]').value);
    // console.log(width)

    const div = document.createElement('div')
    // div.innerHTML += `style="width: calc(100% / ${width});"`
    if (isNaN(width)){
        div.style.cssText += `width:calc(100% / 60)`
        // console.log('quaqua')

    } else {

    
    div.style.cssText += `width:calc(100% / ${width} )`
    }
    // div.style.setProperty('width', 'calc(100% / ${width})');

    // aggiungo la classe cella ai div creati
    div.classList.add('cella')
    // Aggiungo l'event listener ad ogni div
    // div.addEventListener('click', clickHandler)
    // console.dir(div)
    return div
}
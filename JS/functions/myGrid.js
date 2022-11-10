/**La funzione crea una griglia quadrata di "numero" caselle numerate, premendo le caselle cambieranno di colore e manderanno il numero assegnato in console.
 * 
 */
function myGrid(numero) {

    let grigliaQuadrata = document.createElement("div");

    const listaMine = listMine(numero);

    grigliaQuadrata.classList.add("d-flex", "flex-wrap");

    let punteggio = 0;
    let gioco = true;

    for ( let i=1 ; i <= numero; i++){

        const quadratoCento = document.createElement("div");

        quadratoCento.classList.add("pt-4", "text-center", `quadrato-${numero}`, "fs-3");

        quadratoCento.innerHTML = `${i}`;

        grigliaQuadrata.appendChild(quadratoCento);

        quadratoCento.addEventListener("click", function(){

            if (gioco){

                console.log(`${i}`)

                if ( listaMine.includes(i)){

                   this.classList.toggle("red-blood");

                   gioco = false;

               } else {

                   this.classList.toggle("blue-sky");

                   punteggio += 1;

               }
            }
        } )
    }

    return grigliaQuadrata;
}
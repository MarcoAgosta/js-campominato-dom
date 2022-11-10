/**La funzione crea una griglia quadrata di 49 caselle numerate, premendo le caselle cambieranno di colore e manderanno il numero assegnato in console.
 * 
 */
 function quarantanoveGrid() {

    let grigliaQuadrata = document.createElement("div");


    grigliaQuadrata.classList.add("d-flex", "flex-wrap");

    for ( let i=1 ; i <= 49; i++){

        const quadratoCento = document.createElement("div")

        quadratoCento.classList.add("pt-4", "text-center", "quadrato-49", "fs-3")

        quadratoCento.innerHTML = `${i}`

        grigliaQuadrata.appendChild(quadratoCento)


        quadratoCento.addEventListener("click", function(){

            console.log(`${i}`)

            this.classList.toggle("blue-sky")

        } )

    }

    return grigliaQuadrata
}
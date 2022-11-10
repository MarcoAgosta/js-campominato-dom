const griglia = document.getElementById("griglia");
const btnPrimary = document.getElementById("pulsante-principale");
const punteggio = document.getElementById("punteggio")


btnPrimary.addEventListener ("click", function(){

    const selectValue = document.getElementById("difficoltà").value;

    griglia.innerHTML = "";

    const grigliaCento = myGrid(selectValue);
    
    griglia.appendChild(grigliaCento);

 
} )

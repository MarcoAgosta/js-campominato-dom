const griglia = document.getElementById("griglia");
const btnPrimary = document.getElementById("pulsante-principale");

console.log(listMine(100))

btnPrimary.addEventListener ("click", function(){

    const selectValue = document.getElementById("difficoltà").value;

    griglia.innerHTML = "";

    const grigliaCento = myGrid(selectValue);
    
    griglia.appendChild(grigliaCento);

 
} )

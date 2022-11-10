const griglia = document.getElementById("griglia");
const btnPrimary = document.getElementById("pulsante-principale");

console.log(listaMine("100"))

btnPrimary.addEventListener ("click", function(){

    const selectValue = document.getElementById("difficoltà").value;

    griglia.innerHTML = "";

    if (parseInt(selectValue) === 100){

        const grigliaCento = centoGrid();
        
        griglia.appendChild(grigliaCento);

    } else if (parseInt(selectValue) === 81){

        const grigliaOttantuno = ottantunoGrid();

        griglia.appendChild(grigliaOttantuno);

    } else if (parseInt(selectValue) === 49){

        const grigliaQuarantanove = quarantanoveGrid();

        griglia.appendChild(grigliaQuarantanove);
            
    }

} )

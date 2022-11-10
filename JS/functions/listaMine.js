/**La funzione restituisce una lista di numeri casuali da 1 fino al massimo indicato.
 * 
 */
function listMine(numero) {

    const num = parseInt(numero)
    let arrayMine = [];

    while (arrayMine.length <= 16){

       const numeroMina = Math.floor(Math.random() * num +1);

       if (arrayMine.includes(numeroMina)){
       } else {

        arrayMine.push(numeroMina)

       }
    }

    return arrayMine

}
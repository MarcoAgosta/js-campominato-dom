/**La funzione restituisce una lista di numeri casuali da 1 fino al massimo indicato.
 * 
 */
function listaMine (num){

    const numero = parseInt(num)
    const arrayMine = [];

    while (arrayMine.length <= 16){

       const numeroMina = Math.floor(Math.random() * numero +1);

       if (arrayMine.includes(numeroMina)){

       } else {

        arrayMine.push(numeroMina)

       }
    }

    return arrayMine

}
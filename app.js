function sumaSecuencia(array, base) {

    let arrayFinal = [];
    
    for (let i = 0; i < array.length; i++) {
    
        let acc = array[i];

        if (acc === base) {
            arrayFinal.push(array.slice(i, i + 1));
        }
    
        for (let j = i + 1; j < array.length; j++) {
            acc += array[j];

            if (acc === base) {
                arrayFinal.push(array.slice(i, j + 1));
            }
        }
    }

    return arrayFinal;
}

const array = [10, -10, 10, 8, -7, -2, 2, 1, 7, 2, 4, 5, 8, 2, 10];
const base = 10;

console.log(sumaSecuencia(array, base));
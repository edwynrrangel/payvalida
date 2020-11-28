function sumaSecuencia(array, base) {

    let arrayFinal = [];
    
    for (let i = 0; i < array.length; i++) {
    
        let acc = array[i];
        let subArray = [array[i]];
    
        for (let j = i + 1; j < array.length; j++) {
            acc += array[j];
            if (acc >= base && array[j] < 0) {
                subArray.push(array[j - 1]);
                subArray.push(array[j]);
                continue;
            }

            if (acc <= base) {
                subArray.push(array[j]);
            }

        }
    
        if (subArray.reduce((acc, cur) => acc += cur, 0) === 10) {
            arrayFinal.push(subArray)
        }
    
    }

    return arrayFinal;
}

const array = [3, 5, 1, 8, -7, -2, 2, 1, 7, 2, 4, 5, 8, 2, 10];
const base = 10;

console.log(sumaSecuencia(array, base));
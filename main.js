/*Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, у якому кожен рядок має першу літеру у 
верхньому регістрі, а решту літер - у нижньому регістрі.*/
/*function capitalizeStrings(array){
    let capitalizeArray = [];
    for (let i = 0; i < array.length; i++){
        capitalizeArray.push(array[i].at(0).toUpperCase() + array[i].slice(1).toLowerCase());
    }
    return capitalizeArray;
}
const words = ["apple", "banaNA", "kiWi", "ORANGE"];

console.log(capitalizeStrings(words));*/







/*Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.*/
/*function findCommonElements(array1, array2){ 
    let commonElementsArray = []; 
    for(let i = 0; i < array1.length; i++){ 
      for(let j = 0; j < array2.length; j++) 
        if(array1[i] === array2[j]){ 
            commonElementsArray.push(array1[i]); 
        } 
    } 
    return commonElementsArray; 
} 
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2));*/








/*Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:

sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві*/

/*function findMinMax(array) {
    let minValue = array[0];
    let maxValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return { minValue, maxValue };
}

function analyzeArray(array) {
    let analyzeObj = {
        sum: 0,
        average: 0,
        min: 0,
        max: 0
    };

    for (let i = 0; i < array.length; i++) {
        analyzeObj.sum += array[i];
    }
    analyzeObj.average = analyzeObj.sum / array.length;
    const { minValue, maxValue } = findMinMax(array);
    analyzeObj.min = minValue;
    analyzeObj.max = maxValue;
    return analyzeObj;
}

const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers));*/

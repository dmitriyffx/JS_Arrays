// Написать функцию, которая принимает массив чисел и возвращает среднее арифметическое, (округлить результат до десятых).

function task5() {
    let arrAverage = function(arr) {
        let summa = arr.reduce((sum,elem)=>sum+elem,0);
        return summa/arr.length;
    }
    let arr=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let average=arrAverage(arr);
    console.log(average.toFixed(1));

}
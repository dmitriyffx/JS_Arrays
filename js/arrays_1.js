// Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива.
function task1() {
    let arr=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arr);
    let summa=arr.reduce(function(sum,elem) {
        if (elem%2==0) sum+=Math.sqrt(elem);
        return sum;
    },0);
    console.log(summa.toFixed(2));
}
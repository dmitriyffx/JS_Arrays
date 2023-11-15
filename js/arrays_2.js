// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function task2() {
    let arr=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arr);
    let summa=arr.reduce(function(sum, elem) {
        if (elem>0 && elem<10) sum+=elem;
        return sum;
    },0);
    console.log(summa);
}
    

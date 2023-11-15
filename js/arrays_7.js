// Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. Считайте что первая позиция четная (номер индекса 0), массив должен заполняться случайными числами и содержать четное число элементов. (reduce(sum,elem,index)...)
function task7() {

    function calcDivision(sumArrOne, sumArrTwo) {
        return (sumArrOne/sumArrTwo)
    }

    let arrRand=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arrRand);

    let sumArrOne=arrRand.reduce((sum,elem,index) => {
        if (index%2==0)
        sum+=elem
        return sum
    },0);

    console.log(`Сумма четных чисел равна ${sumArrOne}`);

    let sumArrTwo=arrRand.reduce((sum,elem,index) => {
        if (index%2!=0)
        sum+=elem
        return sum
    },0);

    console.log(`Сумма четных чисел равна ${sumArrTwo}`);

    console.log(`При делении суммы четных чисел на сумму нечетных чисел массива получится ${calcDivision(sumArrOne, sumArrTwo).toFixed(2)}`);
}


// Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец. (push,shift)

function task6() {
    function showArray() {
        let firstElem=arrRand[0]
        console.log(`Первый элемент массива ${firstElem}`);

        arrRand.push(firstElem);
        arrRand.shift();
        console.log(arrRand);
    }
    let arrRand=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arrRand);

    showArray();  
}
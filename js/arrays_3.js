// Написать функцию, которая принимает массив любых целых чисел и возвращает истину, если все элементы четные. Если имеется хотя бы один элемент не четный, то false.

function task3() {
    function isPositiveArray(arr) {
        return arr.every(elem=>elem%2==0);
    }
    let arr=Array.from(Array(10),() => {return Math.round(Math.random()*20)});
    console.log(arr);
    if (isPositiveArray(arr))
        alert(true);
    else
        alert(false);
}
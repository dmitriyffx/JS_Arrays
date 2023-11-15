// Написать функцию, которая принимает массив любых целых чисел, и возвращает новый массив из элементов переданного массива, кратных пяти. ([1,2,5,12,15,21] вернет [5,15])


function task4() {
    function isPositiveArray(arr) {
        return arr.filter(elem=>elem%5==0);
    }
    let arrMain=Array.from(Array(10),() => {return Math.round(Math.random()*10)});
    console.log(arrMain);
    if (arrMain.length==0)
        console.log('Нет элементов кратных 5');
    else
        console.log(isPositiveArray(arrMain));
}
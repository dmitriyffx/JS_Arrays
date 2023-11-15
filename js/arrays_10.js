// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения. Найдите сумму элементов этой структуры.

function task10() {

    let data=[
    {
        1: 11,
        2: 12,
        3: 13,
    },
    {
        1: 21,
        2: 22,
        3: 23,
    },
    {
        1: 24,
        2: 25,
        3: 26,
    }
    ]; 

    let keysArr = [];
    data.forEach(element => {
        keysArr.push(Object.keys(element));
    });
    console.log(keysArr.flat());

    let valuesArr = [];
    data.forEach(element => {
        valuesArr.push(Object.values(element));
    });
    valuesArr=valuesArr.flat();
    console.log(valuesArr);
    
    let arrSum = valuesArr.reduce((sum,item) => sum + +item, 0);
    console.log("Сумма значений "+arrSum);
}
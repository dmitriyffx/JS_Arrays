function task8() {
    let getNum = prompt('Введите число');
    console.log(getNum);

    if (isNaN(getNum) || getNum<10)
        alert('Input Error!');
    else {
        let arrNum = getNum.split('')

        let arrTwo = arrNum.map(item => +item + +1);
        
        console.log(arrTwo.join(''));   
    }
}
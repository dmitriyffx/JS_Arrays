// Посчитайте количество букв и количество цифр в строке. (match буквы, match цифры, массива) (попробовать filter+test)

function task_RE_5() {

    let option=prompt('Выберите способ решения. 1 - через match, 2 - через filter')
    switch(option) {
        case '1':{
            let str = prompt('Введите строку');
            console.log(str);

            let regExpNum = /[\d]/gi;
            let regExpLet = /[a-zA-Zа-яА-Я]/gi; 

            console.log(`В данной строке ${(str.match(regExpNum)).length} цифр`);
            console.log(`В данной строке ${(str.match(regExpLet)).length} букв`);
        break;
        }
        case '2': {
            let str = prompt('Введите строку');

            let newArr = Array.from(str);
            console.log(newArr);

            let arrNum = str.split('').filter(elem => /\d/.test(elem));
            console.log(`В данной строке ${arrNum.length} цифр`);

            let arrLeter = str.split('').filter(elem => /[a-zA-Zа-яА-я]/.test(elem));
            console.log(`В данной строке ${arrLeter.length} букв`);
        break;
        }
    }
}
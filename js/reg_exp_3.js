// Постройте регулярное выражение, проверяющее, что строка состоит только из букв и цифр.

function task_RE_3() {

    function checkString(str) {

        let regExp = /^[\da-zа-я]+$/gi
        let chk = regExp.test(str);

        return chk;

    }  

    let str=prompt('Введите строку');

    if (checkString(str))
        alert('Строка состоит только из цифр и букв');
    else
        alert('Строка не состоит только из цифр и букв');
}   

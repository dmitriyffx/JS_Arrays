// Постройте регулярное выражение, которое проверяет, является ли строка URL адресом.

function task_RE_1() {
    
    function checkString(str) {

        let regExp = /^((https|http)?:\/\/)(([?#$%^&*<>()/_@!=:;'"|\-.\w\..]+[\/]?)+)$/;

        let chk = regExp.test(str);
        
        return chk;

    }
        
    let str=prompt('Введите URL-адрес');

    if (checkString(str))
        alert('Строка соответствует URL-адресу');
    else
        alert('Строка не соответствует URL-адресу');
}
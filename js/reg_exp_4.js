// Постройте регулярное выражение, проверяющее, что строка не содержит спецсимволов и цифр и ее длина не менее 10 символов.

function task_RE_4() {

    function checkString(str) {

        let regExp = /^[^\d()\[\]+*?|.$^\\]{10,}$/;

        let chk = regExp.test(str);

        return chk;

    }  

    let str=prompt('Введите строку');

    if (checkString(str))
        alert('Условие задачи выполняется');
    else
        alert('Условие задачи не выполняется');
}     
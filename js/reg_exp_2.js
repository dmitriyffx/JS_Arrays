// Постройте регулярное выражение, проверяющее корректность названия переменной JS, которое ввел пользователь. Проверку ключевых слов не учитывать

function task_RE_2() {

    function checkString(str) {

        let regExp = /^([^(0-9A-Z)]([a-zA-Z0-9$_]{2,}))$/

        let chk = regExp.test(str);

        return chk;

    }  

    let str=prompt('Введите имя переменной')

    if (checkString(str))
        alert('Имя переменной подходит')
    else
        alert('Имя переменной не подходит')
}

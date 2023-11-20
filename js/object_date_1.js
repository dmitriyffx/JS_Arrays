// Напишите функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

function task_Object_Date_1() {
    function isTest(data) {
        let regExp = /^[0-9]{4}\.[0-9]{2}\.[0-9]{2}$/;
        let result = regExp.test(data);
        return result;
    }; 

    let getDayOfWeek = (data) => daysOfWeek[data.getDay()];
    
    let data = prompt('Введите желаемую дату в формате ГГГГ.ММ.ДД');

    date = new Date(data);
    console.log(date);  

    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота',];

    if (isTest(data)) {      
        alert(getDayOfWeek(date));
    } else {
        alert('Input Error!')
    };
}
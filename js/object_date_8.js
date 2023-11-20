// Выведите на экран на какие дни недели выпадают в этом году официальные государственные праздники

function task_Object_Date_8() {

    let getDayOfWeek = (data) => daysOfWeek[data.getDay()];
    
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',];

    let dateNewYear = new Date(2023, 0, 1);
    let dateChist = new Date(2023, 0, 7);
    let dateDefDay = new Date(2023, 1, 23);
    let womanDay = new Date(2023, 2, 8);
    let dateMayFirst = new Date(2023, 4, 1);
    let dateMayNine = new Date(2023, 4, 9);
    let dateRusDay = new Date(2023, 5, 12);
    let dateNovFour = new Date(2023, 10, 4);

    alert(`    Официальные государственные праздники в 2023 году:

    1 января (${getDayOfWeek(dateNewYear)}) - Новый год;
    7 января (${getDayOfWeek(dateChist)}) - Рождество Христово;
    23 февраля (${getDayOfWeek(dateDefDay)}) - День защитника Отечества;
    8 марта (${getDayOfWeek(womanDay)}) - Международный женский день;
    1 мая (${getDayOfWeek(dateMayFirst)}) - Праздник Весны и Труда;
    9 мая (${getDayOfWeek(dateMayNine)}) - День Победы;
    12 июня (${getDayOfWeek(dateRusDay)}) - День России;
    4 ноября (${getDayOfWeek(dateNovFour)}) - День народного единства.`);

}
// Напишите функцию, которая сообщит сколько дней осталось до нового года.

function task_Object_Date_2() {

    let getDayOfNewYear = (data, dateNewYear) => {
        result = (dateNewYear.getTime() - data.getTime()) / (1000*60*60*24);
        return result;
    }

    let data = new Date();
    console.log(data);

    let dateNewYear = new Date(2024, 0, 1);
    console.log(dateNewYear);
    
    console.log(`До Нового Года осталось ${getDayOfNewYear(data, dateNewYear).toFixed()} дней!`);
}


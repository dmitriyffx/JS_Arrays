// Напишите функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
//         {
//             next: 'пн',
//             curr: 'вс',
//             prev: 'сб',
//         }

function task_Object_Date_3() {

    getDayOfWeek = (currDate, nextDate, prevDate) => {
        return daysOfWeek[currDate.getDay()];
        return daysOfWeek[nextDate.getDay()];
        return daysOfWeek[prevDate.getDay()];
    };

    let daysOfWeek = ['вс', 'пн', 'вт', 'ср',
		'чт', 'пт', 'сб'];

    let currDate = new Date();
    console.log(currDate);

    let nextDate = new Date();
    nextDate.setDate(currDate.getDate() + 1);
    console.log(nextDate);

    let prevDate = new Date();
    prevDate.setDate(currDate.getDate() - 1);
    console.log(prevDate);

    let dateObj = {
        'next' : getDayOfWeek(nextDate),
        'curr' : getDayOfWeek(currDate),
        'prev' : getDayOfWeek(prevDate),
    }

    alert(`    next: '${dateObj.next}',
    curr: '${dateObj.curr}',
    prev: '${dateObj.prev}',`);
    
}
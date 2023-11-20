// Напишите функцию, которая параметром будет принимать милисекунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

function task_Object_Date_4() {

    let millisec = prompt("Введите количество миллисекунд");
    if(Number.isInteger(millisec) || millisec<0)
    {
        alert("Input Error");
    }
    else{
        let seconds = (millisec / 1000).toFixed(1);
        let minutes = (seconds / 60).toFixed(1);
        let hours = (minutes / 60).toFixed(1);
        let days = (hours / 24).toFixed(1);
        
    alert(`    d: ${days},
    h: ${hours},
    m: ${minutes},
    s: ${seconds},
    `);
    }
}

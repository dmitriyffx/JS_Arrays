// Заполнить массив датами всех пятниц, на которые выпадает 13-е число в текущем году.

function task_Object_Date_6() {

    function getFri_13(year) {

        let arrFri = [];

        for (let mounth = 0; mounth<12; mounth++) {
            let date = new Date(year, mounth, 13);
            if (date.getDay() === 5) arrFri.push(date);
        }
        return arrFri;

    }
    
    let result = getFri_13(2023);
    console.log(result);
}


// По заданной пользователем дате рождения сообщить его возраст в годах, месяцах и днях.

function task_Object_Date_5() {

    let dateUser = prompt('Введите дату рождения в формате ГГГГ.ММ.ДД');
    let dateOfBirth = new Date(dateUser)
    console.log(dateOfBirth);

    let newDate = new Date();
    console.log(newDate);

    let result = (newDate.getTime()-dateOfBirth.getTime())/(1000*60*60*24)

    resMonth = (result / 30.44); 
    resYear = (result / 365)

    alert(`Ваш возраст ${result.toFixed()} дней или ${resMonth.toFixed(1)} месяца или ${resYear.toFixed(1)} лет`); 
}

// Написать скрипт, который при загрузке по разному в зависимости от времени суток приветствует пользователя (например, "доброе утро", "добрый день" или "добрый вечер"). Время, в которое следует говорить то или иное приветствие, выберите сами.

function task_Object_Date_7() {

    function getTime() {

        let time = new Date();

        let timeOfDay = time.getHours();

        if (timeOfDay >= 6 && timeOfDay < 12)
            return 'Доброе утро!';
        else if (timeOfDay >= 12 && timeOfDay <18)
            return 'Добрый день!';
        else if (timeOfDay >= 18 && timeOfDay < 24 )
            return 'Добрый вечер!';
        else if (timeOfDay >= 24 && timeOfDay < 6 );
            return 'Доброй ночи!';
            
    }

    alert(getTime());
}
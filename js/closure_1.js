// Используя замыкания, создайте функцию, генерирующую ссылки для меню сайта с
// переходом на товары.
// http://myshop.ru/{категория товара}/{код товара}
// Разделы – ПК (PC), Ноутбуки (Notebooks), Мониторы (Monitors)
// Пользуясь возможностями фабрики функций, у вас должны появиться функции
// createPCLink(1001) – генерирует и возвращает ссылку на товар с кодом 1001 из категории ПК
// createNotebooksLink(4004) – генерирует ссылку на товар с кодом 4004 из категории ноутбуки
// createMonitorLink(345) – генерирует ссылку на товар с кодом 345 из категории мониторы.

function task_closure_1() {

    function createLink(cathegory) {
        return function (code) {
            return `http://myshop.ru/${cathegory}/${code}`;
        };  
    };

    let createPCLink = getLink('ПК(PC)');
    let createNotebooksLink = getLink('Ноутбуки(Notebooks)');
    let createMonitorLink = getLink('Мониторы(Monitors)')

    console.log(createPCLink(1001));
    console.log(createNotebooksLink(4004));
    console.log(createMonitorLink(345));

}

    

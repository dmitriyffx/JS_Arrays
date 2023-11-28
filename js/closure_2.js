// Вам предоставлен массив объектов с данными о заказах товаров. Напишите функцию,
// которая выводит в консоль сумму заказа, название товара и фио клиента. Объединять
// заказы одних и тех же покупателей не нужно.

// Для следующего массива объектов должно быть выведено

// Заказ покупателя Ivan составил 20000
// Заказ покупателя Peter составил 11500
// Заказ покупателя Mary составил 10000


function task_closure_2() {

    let orders = [
        {
            fio : 'Ivan',
            tovar : 'phone',
            price : 10000,
            quantity : 2,
        },
        {
            fio : 'Peter',
            tovar : 'usb',
            price : 2300,
            quantity : 5,
        },
        {
            fio : 'Mary',
            tovar : 'connector',
            price : 100,
            quantity : 100,
        }
    ];

    function showOrder() {
        let str = `Заказ покупателя ${this.fio} составил ${this.price * this.quantity}`;
        console.log(str);
    }

    orders.forEach(elem => showOrder.call(elem));

}    
    


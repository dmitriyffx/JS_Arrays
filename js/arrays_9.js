// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://. (filter,startsWith)

function task9() {
    let arrOne = ['http://google.com', 'instagram.com', 'http://vk.com', 'random_string', 'region_52', 'Hello World', 'http://youtube.com',]
    
    let arrTwo = arrOne.filter(item => item.startsWith('http://'))
    console.log(arrTwo);
}
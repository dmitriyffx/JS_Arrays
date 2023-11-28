// Изменить код метода wrapperA таким образом, чтобы добавлялся анкор (текст) ссылки.
// Текст передавать массивом.
//     function Menu(...navList){
//         this.navList=navList;
//         this.wrapperA=function(){
//             return this.navList.map(elem=&gt;`&lt;a href=&#39;${elem}&#39;&gt;item&lt;/a&gt;`);
//         }
//     }
//     let mainMenu=new Menu(&quot;home.html&quot;,&quot;services.html&quot;,&quot;price.html&quot;,&quot;about.html&quot;);
//     for (elem of mainMenu.navList)
//         console.log(elem);
//         console.log(mainMenu.wrapperA());
//     let footerMenu=new Menu(&quot;newPage.html&quot;,&quot;checkPage.html&quot;,&quot;seoPage.html&quot;);
//     for (elem of footerMenu.navList)
//         console.log(elem);
//         console.log(footerMenu.wrapperA());

function task_closure_4() {

    function Menu(...navList) {
        this.navList = navList;
        this.wrapperA = function(...anchor) {
            let i = 0;
            return this.navList.map(function(elem, i) {
                let str = `<a href = '${elem}'> ${anchor[i]} </a>`;
                return str;
            });
        }
    }

    let mainMenu = new Menu('home.html', 'services.html', 'price.html', 'about.html');
    for (elem of mainMenu.navList);
        console.log(elem);
        console.log(mainMenu.wrapperA('Домой', 'Услуги', 'Цены', 'О нас'));
    
    let footerMenu = new Menu('newPage.html', 'checkPage.html', 'seoPage.html');
    for (elem of footerMenu.navList);
        console.log(elem);
        console.log(footerMenu.wrapperA('Создание страниц', 'Проверка страниц', 'Сеонизация страниц'));

}    
        

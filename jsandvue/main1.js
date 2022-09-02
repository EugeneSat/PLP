//Меню
const menu = function () {
    //const openMenu = document.querySelector(".header_burger_img");
    const btn_burger = document.querySelectorAll(".btn_burger");
    const closeMenu = document.querySelector(".menu_btn_close");
    const deactiveMenu = document.querySelector(".menu");

   /*  if (openMenu) {
        openMenu.addEventListener('click', ()=>{
            deactiveMenu.style.display = 'block';
            deactiveMenu.style.right = '0px';
            deactiveMenu.classList.add('active_menu');

        });
     }

    if (btn_burger) {
        btn_burger.addEventListener('click', ()=>{
            deactiveMenu.style.display = 'block';
            deactiveMenu.style.right = '0px';
            deactiveMenu.classList.add('active_menu');

        });
    }
    if (closeMenu) {
        closeMenu.addEventListener('click', ()=>{
            deactiveMenu.style.display = 'none';
            deactiveMenu.classList.remove('active_menu');
        });
    }
 */
    const contacts = document.getElementById('contacts');
    const services = document.getElementById('services');


    //contacts.addEventListener('click' () => {
    //    deactiveMenu.classList.remove('active_menu');
    //}
}
menu();

//Проверка, есть ли у атрибута href свойство, если нет,то выдает 404 ошибку
const err = function () {
   //вытаскиваем из html все теги а
   const errA = document.getElementsByTagName('a');
   //проходимся циклом по всем тегам а
   for (let i = 0; i < errA.length; i++) {
      
      let thisErrA  = errA[i];
      errA[i].addEventListener('click', ()=>{
         if (thisErrA.getAttribute('href') == false) {
             alert('Error 404');
         }else{
            return;
         }
      });

   }

}
err();

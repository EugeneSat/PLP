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
   const errId = document.querySelectorAll('#err')[0];

   //errId[i].addEventListener('click' , () => {

   //});
   for (let i = 0; i < errId.length; i++) {
      //let a = errId[i].getAttribute('class');
      const a = errId[i];
      console.log(a);

      }

}



err();

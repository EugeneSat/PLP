//Меню
const menu = function () {
    const openMenu = document.querySelector(".header_burger_img");
    const openMenuMob = document.querySelector(".header_burgermobile_img");
    const closeMenu = document.querySelector(".menu_btn_close");
    const deactiveMenu = document.querySelector(".menu");

     if (openMenu) {
        openMenu.addEventListener('click', ()=>{
            deactiveMenu.style.opacity = '1';
            deactiveMenu.style.right = '0px';
            //deactiveMenu.classList.add('active_menu');


        });
     }
     if (openMenuMob) {
        openMenuMob.addEventListener('click', ()=>{
            deactiveMenu.style.opacity = '1';
            deactiveMenu.style.right = '0px';
            //deactiveMenu.classList.add('active_menu');


        });
     }
/*
    if (btn_burger) {
        btn_burger.addEventListener('click', ()=>{
            deactiveMenu.style.display = 'block';
            deactiveMenu.style.right = '0px';
            deactiveMenu.classList.add('active_menu');

        });
    }
    */
    if (closeMenu) {
        closeMenu.addEventListener('click', ()=>{
            deactiveMenu.style.opacity = '0';
            deactiveMenu.style.right = '-100%';
            //deactiveMenu.classList.remove('active_menu');
        });
    }






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
             //alert('Error 404');
             window.open("error.html", "_blank");
         }else{
            return;
         }
      });

   }

}
err();


function services() {
   const service = document.querySelectorAll('.services_link_choice')[0];
   const serviceA = document.querySelectorAll('.services_link_choice_openClose')[0];

   for (var i = 0; i < service.length; i++) {
      let serv = service[i];
      service[i].addEventListener('click', ()=>{
         serviceA[i].style.transform = 'rotate(90deg)';
      });
   }
}
services();

function modalWindow() {
    const modalWindowAll = document.querySelector('.modal_window');
    const modalWindowOpen = document.querySelector('.footer_btn');
    const modalWindowClose = document.querySelector('.footer_btn_close');

    modalWindowOpen.addEventListener('click', ()=>{
        modalWindowAll.style.zIndex = '149';
      modalWindowAll.style.opacity = '1';
      modalWindowOpen.style.display = 'none';
      modalWindowClose.style.display = 'block';
   });
   modalWindowClose.addEventListener('click', ()=>{
    modalWindowAll.style.zIndex = '-1';
     modalWindowAll.style.opacity = '0';
     modalWindowOpen.style.display = 'block';
     modalWindowClose.style.display = 'none';
  });


}
modalWindow();

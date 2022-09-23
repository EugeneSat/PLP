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


//Модальное окно "связаться с нами"
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

console.log(5);
const service_desc = function() {
    const sercLinks =  document.querySelectorAll(".services_link");
    const sercDescs =  document.querySelectorAll("services_link_decs");

  sercLinks.forEach((sercLink) =>{
     sercLink.addEventListener('click', ()=>{
       sercLink.classList.toggle("active_desc");
     });
  })




}
service_desc();
console.log(10);



//модал окно "15 проц скидка"
const modalSale = function() {
   const saleModal = document.querySelector('.modal_sale');
   const saleBtn = document.querySelector('.modal_sale_btn');
   const saleTxt = document.querySelector('.modal_sale_txt');
   const saleclose = document.querySelector('.modal_sale_close');

   saleModal.style.cssText = `
   opacity: 1;
   z-index: 15000;
   `;

saleBtn.addEventListener('click', forremove);
  function forremove(){
    saleBtn.removeEventListener('click', forremove);

     saleBtn.style.opacity = "0.2";
     saleBtn.style.cursor = "auto";

     var timeleft = 5;
     var downloadTimer = setInterval(function(){
     if(timeleft <= 0){
       clearInterval(downloadTimer);
       saleTxt.innerHTML = oneEsc;
     } else {
       saleTxt.innerHTML = timeleft;
  }
    timeleft -= 1;
}, 1000);

//Создадим рандом функцию
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rand = random(1,2);
let oneEsc;
if (rand == 1) {
  oneEsc = 'Ура! Вы выйграли 15% скидку!';
}
if (rand == 2){
  oneEsc = 'Сегодня фартуна не на твоей стороне! Значит повезет в любви!';

}

};
saleclose.addEventListener('click', ()=>{
  saleModal.style.cssText = `
    opacity: 0;
    z-index: -1;
  `;
});

}
setTimeout(modalSale, 5000);

//modalSale();

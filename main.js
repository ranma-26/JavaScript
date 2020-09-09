 'use stript'

 const parentMenu = document.querySelectorAll(".list-primary");

 for (let i = 0; i < parentMenu.length; i++){
   parentMenu[i].addEventListener("click", function(event){
     event.preventDefault();
     this.classList.toggle("active");
     this.nextElementSibling.classList.toggle("parent");
   });
 }
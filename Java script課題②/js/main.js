'use strict';
{
  const menuItems = document.querySelectorAll('.menu-title');
  const contentsItem = document.querySelectorAll('.contents')
  menuItems.forEach(clicked => {
    clicked.addEventListener ('click',e =>{
      e.preventDefault();
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clicked.classList.add('active');
      contentsItem.forEach(contents => {
        contents.classList.remove('active');
      });
      document.getElementById(clicked.dataset.id).classList.add('active');
    });
  });
}

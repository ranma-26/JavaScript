'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click',() =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    open.classList.add('shadow')
  });
  close.addEventListener('click',() =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    open.classList.remove('shadow')
  });
  mask.addEventListener('click',() =>{
    close.click();
  });
}
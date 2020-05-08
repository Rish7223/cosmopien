console.log('Hello World!');

const menu = document.querySelector('.hemb');
const slide = document.querySelector('.slide')

menu.addEventListener('click', ()=>{
  slide.classList.toggle('animation');
})

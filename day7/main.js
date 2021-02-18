const left = document.querySelector('.left');
const right = document.querySelector('.right');
const contianer = document.querySelector('.container');



left.addEventListener('mouseenter' ,() => {
    contianer.classList.add('hover-left');
})
left.addEventListener('mouseleave' ,() => contianer.classList.remove('hover-left'))

right.addEventListener('mouseenter' ,() => {
    contianer.classList.add('hover-right');
})
right.addEventListener('mouseleave' ,() => contianer.classList.remove('hover-right'))
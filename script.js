const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const home = document.getElementById('home')

first.addEventListener('click' , function(event){
  event.preventDefault();
  window.open('firsttab.html' , '_blank');
});

second.addEventListener('click', function(event){
    event.preventDefault();
    window.open('secondtab.html' , '_blank');
})

third.addEventListener('click', function(event){
    event.preventDefault();
    window.open('thirdtab.html' , '_blank');
})

home.addEventListener('click', function(event){
    event.preventDefault();
    window.open('home.html' , '_blank')
})
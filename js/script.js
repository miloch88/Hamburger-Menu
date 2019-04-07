// document.querySelector('.burger').addEventListener('click', function () {
//     document.querySelector('.fa-bars').classList.toggle('show');
//     document.querySelector('.fa-times').classList.toggle('show');
//     document.querySelector('aside').classList.toggle('show');
//     document.querySelector('.wrapper').classList.toggle('show');
// })

// $('.burger').on('click', function(){
//     $('.fas, aside, .wrapper').toggleClass('show');
// });

const activeElement = document.querySelectorAll('.active');

document.querySelector('.burger').addEventListener('click', function () {

    
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('show');
    }
})
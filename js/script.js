document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.fa-bars').classList.toggle('show');
    document.querySelector('.fa-times').classList.toggle('show');

    document.querySelector('aside').classList.toggle('show');
})
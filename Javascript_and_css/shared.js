`use strict`

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const planButtons = document.querySelectorAll('.plan button');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
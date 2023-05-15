`use strict`

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const planButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
});
backdrop.addEventListener('click', ()=>{
    mobileNav.classList.remove('open');
    closeModal();
});
modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}
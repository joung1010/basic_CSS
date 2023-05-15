`use strict`

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const planButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

planButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});
backdrop.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
    closeModal();
});
modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
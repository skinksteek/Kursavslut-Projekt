var toggle = document.querySelector('.menu-burger');
  toggle.addEventListener('click', (e) => {
    console.log(e);
    openNavigation()

});
function openNavigation() {
  console.log('clicked');
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

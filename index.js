const openMenu = document.getElementById('burger');
const aside = document.getElementById('aside');
openMenu.onclick = () => {
    aside.classList.replace('inactive-aside', 'active-aside');

}


const closeMenu = document.getElementById('close-menu-btn')
closeMenu.onclick = () => {
    aside.classList.replace('active-aside', 'inactive-aside');
}
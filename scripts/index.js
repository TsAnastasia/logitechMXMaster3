buttonMenuOpen = document.querySelector('.intro__button-menu');
buttonMenuClose = document.querySelector('.header__button-close');
pageContent = document.querySelector('.page__content');
pageHideClass = 'page__content_hide';
menuContainer = document.querySelector('.header');
menuVisibleClass = 'header_visible';
menuLinkList = [...document.querySelectorAll('.header__link')];

openMenu = () => {
  pageContent.classList.add(pageHideClass);
  menuContainer.classList.add(menuVisibleClass);
  buttonMenuClose.addEventListener('click', closeMenu);
  menuLinkList.forEach((item) => {
    item.addEventListener('click', closeMenu)
  });
}

closeMenu = () => {
  pageContent.classList.remove(pageHideClass);
  menuContainer.classList.remove(menuVisibleClass);
  buttonMenuClose.removeEventListener('click', closeMenu);
  menuLinkList.forEach((item) => {
    item.removeEventListener('click', closeMenu)
  });
}

buttonMenuOpen.addEventListener('click', openMenu);
function initBurger() {
	const btnCatalog = document.querySelector('.header__catalog');
	const nav = document.querySelector('.header__nav.nav');
	const headerBtnBurger = document.querySelector('.header__burger');
	const navItem = document.querySelectorAll('.nav__item');

	btnCatalog.addEventListener('click', toggleClassBurgerMenu);
	headerBtnBurger.addEventListener('click', toggleClassBurgerMenu);
	navItem.forEach((link) => {
		link.addEventListener('click', toggleNavItem);
	})

	function toggleClassBurgerMenu() {
		if (!nav.classList.contains('active')) {
			window.scrollTo(0, 0);
			nav.classList.add('active');
			document.body.style.overflow = 'hidden';
		} else {
			nav.classList.remove('active');
			document.body.style.overflow = '';
		}
	}

	function toggleNavItem() {
		nav.classList.remove('active');
		document.body.style.overflow = '';
	}
}

export { initBurger };
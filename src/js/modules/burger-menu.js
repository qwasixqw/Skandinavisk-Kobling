export default function initBurger() {
	const btnCatalog = document.querySelector('.header__catalog');
	const nav = document.querySelector('.header__nav.nav');
	const headerBtnBurger = document.querySelector('.header__burger');

	btnCatalog.addEventListener('click', toggleClassBurgerMenu);
	headerBtnBurger.addEventListener('click', toggleClassBurgerMenu);

	function toggleClassBurgerMenu() {
		if (!nav.classList.contains('active')) {
			nav.classList.add('active');
		} else {
			nav.classList.remove('active');
		}
	}
}
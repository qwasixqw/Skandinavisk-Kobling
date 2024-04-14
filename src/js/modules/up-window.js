function upButtonInit() {
	const btnUp = document.querySelector('.footer__up');
	
	btnUp.addEventListener('click', () => {
		window.scrollTo(0, 0);
	})
}

export { upButtonInit };
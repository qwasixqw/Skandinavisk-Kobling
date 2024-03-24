function popupMenuInit() {
	const adaptiveItem = document.querySelectorAll('.adaptive-buy__item');

	adaptiveItem.forEach((item) => {
		const top = item.querySelector('.adaptive-buy__top');

		top.addEventListener('click', () => {
			popupHandler(item);
		});
	});

	function popupHandler(item) {
		item.classList.toggle('open');
		const arrow = item.querySelector('.adaptive-buy__img img');
		arrow.classList.toggle('rotate-up');
		arrow.classList.toggle('rotate-down');
	}
}

export { popupMenuInit };
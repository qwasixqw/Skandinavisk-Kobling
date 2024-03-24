function elementScrollPositionInit() {
	const navLinks = document.querySelectorAll('.nav__link');

	navLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault(); 

			const targetId = link.getAttribute('href').substring(1); 
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
}

export { elementScrollPositionInit };
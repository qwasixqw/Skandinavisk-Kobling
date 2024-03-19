'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import initBurger from "./modules/burger-menu.js";

// burger menu
initBurger();

// init Swiper:
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
});
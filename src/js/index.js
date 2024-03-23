'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import initBurger from "./modules/burger-menu.js";
import { popupMenuInit } from "./modules/popup-menu.js";

// burger menu
initBurger();

// popupMenu
popupMenuInit();

// init Swiper:
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
});
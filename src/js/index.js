'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { initBurger } from "./modules/burger-menu.js";
import { popupMenuInit } from "./modules/popup-menu.js";
import { upButtonInit } from "./modules/up-window";
import { elementScrollPositionInit } from "./modules/scroll-position.js";

// burger menu
initBurger();

// popupMenu
popupMenuInit();

// up
upButtonInit();

// scroll elem
elementScrollPositionInit();

// init Swiper:
const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		},
});
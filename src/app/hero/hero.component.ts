import {AfterViewInit, Component} from '@angular/core';

import Typed from 'typed.js';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.sass']
})

export class HeroComponent implements AfterViewInit {

	constructor() {
	}

	ngAfterViewInit() {
		const typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			typeSpeed: 60
		});
	}

}

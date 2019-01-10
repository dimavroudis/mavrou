import { Component,  AfterViewInit, OnInit  } from '@angular/core';

import { AnimateOnView } from 'src/assets/js/main';

import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})

export class HeroComponent implements AfterViewInit {

  	constructor() { }

  	ngAfterViewInit() {
		const headings = document.querySelectorAll('h1,h2');
		AnimateOnView(headings, 'text-shadow-pop' );

		let typed = new Typed('#typed', {
			stringsElement: '#typed-strings',
			typeSpeed: 60
		});
	}

}

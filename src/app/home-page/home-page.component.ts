import {AfterViewInit, Component} from '@angular/core';

import {AnimateOnView} from 'src/assets/js/main';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})

export class HomePageComponent implements AfterViewInit {

	constructor() {
	}

	ngAfterViewInit() {
		const headings = document.querySelectorAll('.animate-headers');
		AnimateOnView(headings, 'text-shadow-pop');
	}
}

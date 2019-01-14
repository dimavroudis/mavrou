import {AfterViewInit, Component} from '@angular/core';

import {AnimateOnView} from 'src/assets/js/main';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements AfterViewInit {

	constructor() {
	}

	ngAfterViewInit() {
		const headings = document.querySelectorAll('.animate-headers');
		AnimateOnView(headings, 'text-shadow-pop');
	}

}

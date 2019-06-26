import {AfterViewInit, Component, Input} from '@angular/core';
import {RouteNavigationService} from '../../services/route-navigation.service';
import {GLOBALS} from '../../globals';

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.sass']
})
export class PostComponent implements AfterViewInit {
	@Input() post;
	@Input() summary = false;
	baseURL = GLOBALS.BASE_API_URL;

	constructor(public navigate: RouteNavigationService) {
	}


	ngAfterViewInit(): void {
		this.navigate.setChildInit('animate');
	}
}

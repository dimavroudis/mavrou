import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RouteNavigationService } from '../../services/route-navigation.service';
import { GLOBALS } from '../../globals';
import * as moment from 'moment';


@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, AfterViewInit {

	@Input() post;
	@Input() summary = false;
	baseURL = GLOBALS.BASE_API_URL;
	datePublished: string;

	constructor(public navigate: RouteNavigationService) {
	}

	ngAfterViewInit(): void {
		this.navigate.setChildInit('animate');
	}

	ngOnInit(): void {
		this.datePublished = moment(this.post._created * 1000).fromNow();
	}
}

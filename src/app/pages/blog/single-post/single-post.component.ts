import {Component, OnInit} from '@angular/core';
import {RouteNavigationService} from '../../../services/route-navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-single-post',
	templateUrl: './single-post.component.html',
	styleUrls: ['./single-post.component.sass']
})
export class SinglePostComponent implements OnInit {

	post;

	constructor(
		public navigate: RouteNavigationService,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit() {
		this.post = this.route.snapshot.data['blog']['entries'][0];
	}

}

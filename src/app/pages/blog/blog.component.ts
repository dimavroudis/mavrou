import {Component, OnInit} from '@angular/core';
import {RouteNavigationService} from '../../services/route-navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

	posts;
	NotShow: any;

	constructor(public navigate: RouteNavigationService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.posts = this.route.snapshot.data['blog']['entries'];
	}

}

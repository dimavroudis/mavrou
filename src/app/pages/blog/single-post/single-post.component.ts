import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-single-post',
	templateUrl: './single-post.component.html',
	styleUrls: ['./single-post.component.sass']
})
export class SinglePostComponent implements OnInit {

	post;

	constructor(
		public titleService: Title,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit() {
		this.post = this.route.snapshot.data['blog']['entries'][0];
		this.titleService.setTitle(this.post.title + ' - Dimitris Mavroudis');
	}

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

	posts;
	NotShow: any;

	constructor( private route: ActivatedRoute,  private titleService: Title) {
	}

	ngOnInit() {
		this.posts = this.route.snapshot.data['blog']['entries'];
		this.titleService.setTitle('My blog - Dimitris Mavroudis');
	}

}

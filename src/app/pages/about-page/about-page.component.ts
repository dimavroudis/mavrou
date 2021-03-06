import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {
	profile: any;
	socialMedia: any = [];

	constructor(
		private route: ActivatedRoute, private titleService: Title
	) {
	}

	ngOnInit() {
		this.profile = this.route.snapshot.data['profile'];
		this.titleService.setTitle('About me - Dimitris Mavroudis');
		this.route.snapshot.data['profile']['socialProfiles'].forEach((social) => {
			let name, url;
			social['value'].forEach(field => {
				if (field.field.label === 'Name') {
					name = field.value;
				}
				if (field.field.label === 'URL') {
					url = field.value;
				}
			});
			this.socialMedia.push({name: name, url: url});
		});
	}

}

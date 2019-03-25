import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Profile} from '../../models/profile';
import {ProfileService} from '../../services/profile.service';
import {RouteNavigationService} from '../../services/route-navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})

export class HomePageComponent implements OnInit, AfterViewInit {
	profile: Profile;
	socialMedia: Array<object> = [];

	constructor(private profileService: ProfileService, public navigate: RouteNavigationService, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.profile = this.route.snapshot.data['profile'];
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

	ngAfterViewInit(): void {
		this.navigate.setChildInit('typed');
	}
}

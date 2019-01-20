import {AfterViewInit, Component, OnInit} from '@angular/core';

import {Profile} from '../profile';
import {ProfileService} from '../profile.service';
import {RouteNavigationService} from '../route-navigation.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})

export class HomePageComponent implements OnInit, AfterViewInit {

	profile: Profile;

	constructor(private profileService: ProfileService, public navigate: RouteNavigationService) {
	}

	ngOnInit(): void {
		this.getProfile();
	}

	ngAfterViewInit(): void {
		this.navigate.setChildInit('typed');
	}

	getProfile(): void {
		this.profileService.getProfile(0).subscribe(profile => this.profile = profile);
	}
}

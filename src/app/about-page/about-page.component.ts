import {Component, OnInit} from '@angular/core';
import {Profile} from '../profile';
import {ProfileService} from '../profile.service';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {
	profile: Profile;

	constructor(private profileService: ProfileService) {
	}

	ngOnInit(): void {
		this.getProfile();
	}

	getProfile(): void {
		this.profileService.getProfile(0).subscribe(profile => this.profile = profile);
	}

}

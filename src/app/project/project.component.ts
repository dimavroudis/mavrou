import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Project} from '../project';
import {GLOBALS} from '../globals';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit {
	private project: Project;
	private baseURL = GLOBALS.BASE_API_URL;

	constructor(
		private route: ActivatedRoute,
	) {
	}

	ngOnInit() {
		this.project = this.route.snapshot.data['project']['entries'][0];
	}


	AnimateImage(image: string): void {
		const mockups = document.querySelectorAll('.screenshots img.' + image);
		mockups.forEach(element => {
			element.classList.add('float');
		});
	}
}

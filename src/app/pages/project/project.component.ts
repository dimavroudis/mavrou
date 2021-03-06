import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../models/project';
import { GLOBALS } from '../../globals';
import { RouteNavigationService } from '../../services/route-navigation.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit, AfterViewInit {
	project: Project;
	baseURL = GLOBALS.BASE_API_URL;

	constructor(
		public navigate: RouteNavigationService,
		private route: ActivatedRoute,
		private titleService: Title,
	) {
	}

	ngOnInit() {
		this.project = this.route.snapshot.data['project']['entries'][0];
		this.titleService.setTitle(this.project.name + ' - Dimitris Mavroudis');
	}

	ngAfterViewInit() {
		this.navigate.setChildInit('animate');
	}

	AnimateImage(image: string): void {
		const mockups = document.querySelectorAll('.screenshots img.' + image);
		mockups.forEach(element => {
			element.classList.add('float');
		});
	}
}

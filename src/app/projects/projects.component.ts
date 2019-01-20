import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {Project} from '../project';

import {ProjectService} from '../project.service';
import {RouteNavigationService} from '../route-navigation.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
	@Input() featured: string;
	projects: Project[];

	constructor(private projectService: ProjectService, public navigate: RouteNavigationService) {
	}

	ngOnInit() {
		if (this.featured !== undefined) {
			if (this.featured === 'true') {
				this.getProjects(true);
			}
			if (this.featured === 'false') {
				this.getProjects(false);
			}
		} else {
			this.getProjects();
		}
	}

	ngAfterViewInit(): void {
		this.navigate.setChildInit('animate');
	}

	getProjects(current?: boolean): void {
		this.projectService.getProjects(current).subscribe(projects => this.projects = projects);
	}

}

import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import {Project} from '../project';

import {ProjectService} from '../project.service';
import {RouteNavigationService} from '../route-navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
	@Input() featured: string;
	projects: Project[];

	constructor(private projectService: ProjectService, public navigate: RouteNavigationService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.projects = this.route.snapshot.data['projects']['entries'];
	}

	ngAfterViewInit(): void {
		this.navigate.setChildInit('animate');
	}

}

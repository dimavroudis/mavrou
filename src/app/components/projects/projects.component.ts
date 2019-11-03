import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { Project } from '../../models/project';

import { ProjectService } from '../../services/project.service';
import { RouteNavigationService } from '../../services/route-navigation.service';
import { ActivatedRoute } from '@angular/router';
import { GLOBALS } from '../../globals';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
	@Input() featured: string;
	projects: Project[];
	baseURL = GLOBALS.BASE_API_URL;

	constructor(private projectService: ProjectService, public navigate: RouteNavigationService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.projects = this.route.snapshot.data['projects']['entries'];
	}

	ngAfterViewInit(): void {
		this.navigate.setChildInit('animate');
	}

}

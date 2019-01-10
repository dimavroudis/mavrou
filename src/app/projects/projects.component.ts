import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Project } from './project';

import { ProjectService } from '../project.service';

import { AnimateOnView } from 'src/assets/js/main';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

	projects: Project[];

	constructor(private projectService: ProjectService ) { }

	ngOnInit() {
		this.getProjects();
	}

	ngAfterViewInit() {
		const projectsEven = document.querySelectorAll('.project-even img');
		const projectsOdd = document.querySelectorAll('.project-odd img');
		AnimateOnView(projectsEven, 'box-shadow-pop-right' );
		AnimateOnView(projectsOdd, 'box-shadow-pop-left' );
	}

	getProjects(): void {
		this.projectService.getProjects().subscribe(projects => this.projects = projects);
	}

}

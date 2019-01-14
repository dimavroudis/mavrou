import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Project} from '../project';
import {ProjectService} from '../project.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass']
})

export class ProjectComponent implements OnInit {

	project: Project;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private projectService: ProjectService
	) {
	}

	ngOnInit() {
		this.getProject();
	}

	getProject(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.projectService.getProject(id).subscribe(project => this.project = project);
	}

	goBack(): void {
		this.location.back();
	}
}

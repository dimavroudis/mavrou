import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './projects/project';
import { PROJECTS } from './projects/projects';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

	constructor() { }

	getProjects(): Observable<Project[]> {
		return of(PROJECTS);
	}

}

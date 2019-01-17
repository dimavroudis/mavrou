import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from './project';
import {PROJECTS} from './projects';

@Injectable({
	providedIn: 'root'
})

export class ProjectService {

	constructor() {
	}

	getProjects(): Observable<Project[]> {
		return of(PROJECTS);
	}

	getProject(id: string): Observable<Project> {
		return of(PROJECTS.find(project => project.id === id));
	}

	getCodeData(id: string): Observable<Object> {
		return of(PROJECTS.find(project => project.id === id).skills);
	}
}

import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {GLOBALS} from '../globals';


@Injectable({
	providedIn: 'root'
})

export class ProjectService implements Resolve<any> {
	apiURL = GLOBALS.BASE_API_URL + '/' + GLOBALS.PROJECTS_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor(private http: HttpClient) {
	}

	public getProjects(featured?: boolean) {
		let body = {};
		if (featured) {
			body['filter'] = {featured: true};
		}
		return this.http.post(this.apiURL, body).pipe(
			catchError(this.handleError)
		);
	}

	public getProject(id: string) {
		let body = {};
		body['filter'] = {name_slug: id};
		return this.http.post(this.apiURL, body).pipe(
			catchError(this.handleError)
		);
	}

	resolve(route: ActivatedRouteSnapshot) {
		if (route.params.id) {
			return this.getProject(route.params.id);
		} else {
			return this.getProjects(route.data['featured']);
		}

	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	};
}

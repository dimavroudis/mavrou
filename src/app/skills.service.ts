import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {GLOBALS} from './globals';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SkillsService implements Resolve<any> {
	apiURL = GLOBALS.BASE_API_URL + GLOBALS.SKILLS_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor(private http: HttpClient) {
	}

	public getSkills() {
		return this.http.get(this.apiURL).pipe(
			catchError(this.handleError)
		);
	}

	public getSkill(id: string) {
		const options = {params: new HttpParams().set('filter[name_slug]', id)};
		return this.http.get(this.apiURL, options).pipe(
			catchError(this.handleError)
		);
	}

	resolve(route: ActivatedRouteSnapshot) {
		return this.getSkills();
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

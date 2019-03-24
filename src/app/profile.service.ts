import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {GLOBALS} from './globals';

@Injectable({
	providedIn: 'root'
})

export class ProfileService implements Resolve<any> {
	apiURL = GLOBALS.BASE_API_URL + GLOBALS.PROFILE_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor(private http: HttpClient) {
	}

	public getProfile() {
		return this.http.get(this.apiURL).pipe(
			catchError(this.handleError)
		);
	}

	resolve(route: ActivatedRouteSnapshot) {
		return this.getProfile();
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

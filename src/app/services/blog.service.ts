import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {throwError} from 'rxjs';
import {GLOBALS} from '../globals';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BlogService implements Resolve<any> {

	apiURL = GLOBALS.BASE_API_URL + '/' + GLOBALS.BLOG_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor(private http: HttpClient) {
	}

	public getPosts() {
		let body = {};
		body['limit'] = 10;
		body['field'] = {status: 'published'};
		body['sort:'] = {_created: -1};
		return this.http.post(this.apiURL, body).pipe(
			catchError(this.handleError)
		);
	}

	public getSinglePost(id: string) {
		let body = {};
		body['filter'] = {title_slug: id};
		return this.http.post(this.apiURL, body).pipe(
			catchError(this.handleError)
		);
	}

	resolve(route: ActivatedRouteSnapshot) {
		if (route.params.id) {
			return this.getSinglePost(route.params.id);
		} else {
			return this.getPosts();
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

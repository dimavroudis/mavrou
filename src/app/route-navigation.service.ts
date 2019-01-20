import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RouteNavigationService {
	private childInit = new Subject<string>();
	childInit$ = this.childInit.asObservable();

	constructor() {
	}

	setChildInit(identifier?: string) {
		this.childInit.next(identifier);
	}

}

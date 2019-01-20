import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Profile} from './profile';
import {PROFILES} from './profiles';

@Injectable({
	providedIn: 'root'
})

export class ProfileService {

	constructor() {
	}

	getProfiles(): Observable<Profile[]> {
		return of(PROFILES);
	}

	getProfile(id: number): Observable<Profile> {
		return of(PROFILES.find(profile => profile.id === id));
	}

	getSocialProfiles(id: number): Observable<Object> {
		return of(PROFILES.find(profile => profile.id === id).socialProfiles);
	}

	getSkills(id: number): Observable<Object> {
		return of(PROFILES.find(profile => profile.id === id).skills);
	}
}

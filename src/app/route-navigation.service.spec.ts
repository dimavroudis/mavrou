import {TestBed} from '@angular/core/testing';

import {RouteNavigationService} from './route-navigation.service';

describe('RouteNavigationService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: RouteNavigationService = TestBed.get(RouteNavigationService);
		expect(service).toBeTruthy();
	});
});

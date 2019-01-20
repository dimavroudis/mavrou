import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProjectComponent} from './project/project.component';
import {CodeAnalysisComponent} from './code-analysis/code-analysis.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {TechStackComponent} from './tech-stack/tech-stack.component';
import {AboutPageComponent} from './about-page/about-page.component';


@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		PageNotFoundComponent,
		HomePageComponent,
		ProjectComponent,
		CodeAnalysisComponent,
		ProjectsPageComponent,
		TechStackComponent,
		AboutPageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

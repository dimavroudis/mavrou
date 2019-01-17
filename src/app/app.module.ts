import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {HeroComponent} from './hero/hero.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ProjectComponent} from './project/project.component';
import {CodeAnalysisComponent} from './code-analysis/code-analysis.component';


@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		HeroComponent,
		PageNotFoundComponent,
		HomePageComponent,
		ProjectComponent,
		CodeAnalysisComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

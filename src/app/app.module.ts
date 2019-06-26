import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProjectComponent} from './pages/project/project.component';
import {CodeAnalysisComponent} from './components/code-analysis/code-analysis.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';
import {SkillsComponent} from './components/skills/skills.component';
import {HighlightsComponent} from './components/highlights/highlights.component';
import {BlogComponent} from './pages/blog/blog.component';
import {SinglePostComponent} from './pages/blog/single-post/single-post.component';
import {PostComponent} from './components/post/post.component';

@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		PageNotFoundComponent,
		HomePageComponent,
		ProjectComponent,
		CodeAnalysisComponent,
		ProjectsPageComponent,
		AboutPageComponent,
		ContactFormComponent,
		SkillsComponent,
		HighlightsComponent,
		BlogComponent,
		SinglePostComponent,
		PostComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

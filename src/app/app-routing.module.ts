import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
// import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './pages/project/project.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ProjectService} from './services/project.service';
import {ProfileService} from './services/profile.service';
import {SkillsService} from './services/skills.service';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		data: {animation: 'HomePage', featured: true},
		resolve: {projects: ProjectService, profile: ProfileService}
	},
	{
		path: 'projects',
		children: [
			{path: '', component: ProjectsPageComponent, data: {animation: 'Projects', featured: false}, resolve: {projects: ProjectService}},
			{path: ':id', component: ProjectComponent, data: {animation: 'Single'}, resolve: {project: ProjectService}},
		]
	},
	{path: 'about', component: AboutPageComponent, data: {animation: 'AboutPage'}, resolve: {profile: ProfileService, skills: SkillsService}},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
	providers: [ProjectService, ProfileService, SkillsService]
})

export class AppRoutingModule {
}

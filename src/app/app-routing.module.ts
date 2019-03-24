import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
// import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ProjectService} from './project.service';
import {ProfileService} from './profile.service';
import {SkillsService} from './skills.service';

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
			{path: ':id', component: ProjectComponent, data: {animation: 'Project'}, resolve: {project: ProjectService}},
		]
	},
	{path: 'about', component: AboutPageComponent, data: {animation: 'AboutPage'}, resolve: {profile: ProfileService, skills: SkillsService}},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
	exports: [RouterModule],
	providers: [ProjectService, ProfileService, SkillsService]
})

export class AppRoutingModule {
}

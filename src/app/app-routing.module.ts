import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
// import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {AboutPageComponent} from './about-page/about-page.component';

const routes: Routes = [
	{path: '', component: HomePageComponent, data: {animation: 'HomePage'}},
	{
		path: 'projects',
		children: [
			{path: '', component: ProjectsPageComponent, data: {animation: 'Projects'}},
			{path: ':id', component: ProjectComponent, data: {animation: 'Project'}},
		]
	},
	{path: 'about', component: AboutPageComponent, data: {animation: 'AboutPage'}},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

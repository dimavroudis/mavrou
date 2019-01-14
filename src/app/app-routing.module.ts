import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
// import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
	{path: '', component: HomePageComponent},
	{
		path: 'projects',
		children: [
			{path: '', redirectTo: '/', pathMatch: 'full'},
			{path: ':id', component: ProjectComponent},
		]
	},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

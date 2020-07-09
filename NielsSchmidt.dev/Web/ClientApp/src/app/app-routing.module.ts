import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAreaComponent } from './areas/home-area/home-area.component';
import { environment } from '../environments/environment';
import { PlaceholderAreaComponent } from './areas/placeholder-area/placeholder-area.component';


let routes: Routes = [
	{
		path: '',
		component: HomeAreaComponent,
	},
	{
		path: 'placeholder',
		component: PlaceholderAreaComponent,
	},
];

/** While developing only! */
if (environment.production) {
	routes = [
		{
			path: '',
			component: PlaceholderAreaComponent,
		},
	];
}

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }

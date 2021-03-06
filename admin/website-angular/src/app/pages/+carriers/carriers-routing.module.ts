import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarriersComponent } from './carriers.component';
import { TrackComponent } from './track/track.component';

const routes: Routes = [
	{
		path: '',
		component: CarriersComponent
	},
	{
		path: 'track',
		component: TrackComponent
	},
	{
		path: 'track/:id',
		component: TrackComponent
	},
	{
		path: ':id',
		loadChildren: './+carrier/carrier.module#CarrierModule'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CarriersRoutingModule {
	public static routes = routes;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Areas
import { HomeAreaComponent } from './areas/home-area/home-area.component';
import { PlaceholderAreaComponent } from './areas/placeholder-area/placeholder-area.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeAreaComponent,
		PlaceholderAreaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

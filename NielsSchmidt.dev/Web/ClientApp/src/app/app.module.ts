import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { CdkModule } from './modules/cdk.module';

// Main
import { AppComponent } from './app.component';

// Areas
import { PlaceholderAreaComponent } from './areas/placeholder-area/placeholder-area.component';
import { WelcomeAreaComponent } from './areas/welcome-area/welcome-area.component';
import { PersonalAreaComponent } from './areas/personal-area/personal-area.component';
import { ProfessionalAreaComponent } from './areas/professional-area/professional-area.component';
import { SkillsAreaComponent } from './areas/skills-area/skills-area.component';
import { PortfolioAreaComponent } from './areas/portfolio-area/portfolio-area.component';
import { ContactAreaComponent } from './areas/contact-area/contact-area.component';

// Partials
import { ProfessionalEducationAreaComponent } from './partials/professional/professional-education-area/professional-education-area.component';
import { ProfessionalWorkhistoryAreaComponent } from './partials/professional/professional-workhistory-area/professional-workhistory-area.component';
import { ProfessionalCertificationsAreaComponent } from './partials/professional/professional-certifications-area/professional-certifications-area.component';
import { ProfessionalCoursesAreaComponent } from './partials/professional/professional-courses-area/professional-courses-area.component';
import { SkillsLanguagesAreaComponent } from './partials/skills/skills-languages-area/skills-languages-area.component';
import { SkillsDevtoolsAreaComponent } from './partials/skills/skills-devtools-area/skills-devtools-area.component';
import { SkillsDevmethodsAreaComponent } from './partials/skills/skills-devmethods-area/skills-devmethods-area.component';
import { SkillsOsAreaComponent } from './partials/skills/skills-os-area/skills-os-area.component';
import { PortfolioWebAreaComponent } from './partials/portfolio/portfolio-web-area/portfolio-web-area.component';
import { PortfolioServicesAreaComponent } from './partials/portfolio/portfolio-services-area/portfolio-services-area.component';
import { PortfolioDesktopAreaComponent } from './partials/portfolio/portfolio-desktop-area/portfolio-desktop-area.component';
import { PortfolioGamesAreaComponent } from './partials/portfolio/portfolio-games-area/portfolio-games-area.component';
import { PortfolioIotAreaComponent } from './partials/portfolio/portfolio-iot-area/portfolio-iot-area.component';
// Portfolio Projects
import { PortfolioWebNikachatComponent } from './partials/portfolio-projects/portfolio-web-nikachat/portfolio-web-nikachat.component';
import { PortfolioWebSiriusmonComponent } from './partials/portfolio-projects/portfolio-web-siriusmon/portfolio-web-siriusmon.component';
import { PortfolioWebGeekstoreComponent } from './partials/portfolio-projects/portfolio-web-geekstore/portfolio-web-geekstore.component';
import { PortfolioWebCmrpsComponent } from './partials/portfolio-projects/portfolio-web-cmrps/portfolio-web-cmrps.component';
import { PortfolioDesktopInetmonitorComponent } from './partials/portfolio-projects/portfolio-desktop-inetmonitor/portfolio-desktop-inetmonitor.component';
import { PortfolioServicesCwpdnsclusterComponent } from './partials/portfolio-projects/portfolio-services-cwpdnscluster/portfolio-services-cwpdnscluster.component';
import { PortfolioServicesHetznerautorebooterComponent } from './partials/portfolio-projects/portfolio-services-hetznerautorebooter/portfolio-services-hetznerautorebooter.component';
import { PortfolioServicesCwpbackupserviceComponent } from './partials/portfolio-projects/portfolio-services-cwpbackupservice/portfolio-services-cwpbackupservice.component';
import { PortfolioServicesAppveyordeployagentComponent } from './partials/portfolio-projects/portfolio-services-appveyordeployagent/portfolio-services-appveyordeployagent.component';
import { PortfolioServicesShopifysyncComponent } from './partials/portfolio-projects/portfolio-services-shopifysync/portfolio-services-shopifysync.component';
import { PortfolioIotVisortempComponent } from './partials/portfolio-projects/portfolio-iot-visortemp/portfolio-iot-visortemp.component';

// Components
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { FancyboxComponent } from './components/fancybox/fancybox.component';

@NgModule({
	declarations: [
		AppComponent,
		PlaceholderAreaComponent,
		WelcomeAreaComponent,
		PersonalAreaComponent,
		LeftBarComponent,
		ProfessionalAreaComponent,
		ProfessionalEducationAreaComponent,
		ProfessionalWorkhistoryAreaComponent,
		ProfessionalCertificationsAreaComponent,
		ProfessionalCoursesAreaComponent,
		SkillsAreaComponent,
		SkillsDevtoolsAreaComponent,
		SkillsDevmethodsAreaComponent,
		SkillsOsAreaComponent,
		SkillsLanguagesAreaComponent,
		PortfolioAreaComponent,
		ContactAreaComponent,
		PortfolioWebAreaComponent,
		PortfolioDesktopAreaComponent,
		PortfolioGamesAreaComponent,
		PortfolioIotAreaComponent,
		PortfolioServicesAreaComponent,
		PortfolioWebNikachatComponent,
		PortfolioWebSiriusmonComponent,
		PortfolioWebGeekstoreComponent,
		PortfolioWebCmrpsComponent,
		PortfolioDesktopInetmonitorComponent,
		PortfolioServicesCwpdnsclusterComponent,
		PortfolioServicesHetznerautorebooterComponent,
		PortfolioServicesCwpbackupserviceComponent,
		PortfolioServicesAppveyordeployagentComponent,
		PortfolioServicesShopifysyncComponent,
		PortfolioIotVisortempComponent,
		FancyboxComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,	// for ngModel to work
		HttpClientModule,  // for httpClient in api.service to work
		MaterialModule,
		CdkModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }

// Global
declare global {
	interface Window {
		app: {
			version: string;
		};
	}
}

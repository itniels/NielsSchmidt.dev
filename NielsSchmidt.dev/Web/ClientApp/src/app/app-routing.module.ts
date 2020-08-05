import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { PlaceholderAreaComponent } from './areas/placeholder-area/placeholder-area.component';
import { WelcomeAreaComponent } from './areas/welcome-area/welcome-area.component';
import { PersonalAreaComponent } from './areas/personal-area/personal-area.component';
import { ProfessionalAreaComponent } from './areas/professional-area/professional-area.component';
import { SkillsAreaComponent } from './areas/skills-area/skills-area.component';
import { ContactAreaComponent } from './areas/contact-area/contact-area.component';
import { PortfolioAreaComponent } from './areas/portfolio-area/portfolio-area.component';
import { ProfessionalWorkhistoryAreaComponent } from './partials/professional/professional-workhistory-area/professional-workhistory-area.component';
import { ProfessionalEducationAreaComponent } from './partials/professional/professional-education-area/professional-education-area.component';
import { ProfessionalCertificationsAreaComponent } from './partials/professional/professional-certifications-area/professional-certifications-area.component';
import { ProfessionalCoursesAreaComponent } from './partials/professional/professional-courses-area/professional-courses-area.component';
import { SkillsOsAreaComponent } from './partials/skills/skills-os-area/skills-os-area.component';
import { SkillsDevtoolsAreaComponent } from './partials/skills/skills-devtools-area/skills-devtools-area.component';
import { SkillsLanguagesAreaComponent } from './partials/skills/skills-languages-area/skills-languages-area.component';
import { SkillsDevmethodsAreaComponent } from './partials/skills/skills-devmethods-area/skills-devmethods-area.component';
import { PortfolioWebAreaComponent } from './partials/portfolio/portfolio-web-area/portfolio-web-area.component';
import { PortfolioServicesAreaComponent } from './partials/portfolio/portfolio-services-area/portfolio-services-area.component';
import { PortfolioDesktopAreaComponent } from './partials/portfolio/portfolio-desktop-area/portfolio-desktop-area.component';
import { PortfolioGamesAreaComponent } from './partials/portfolio/portfolio-games-area/portfolio-games-area.component';
import { PortfolioIotAreaComponent } from './partials/portfolio/portfolio-iot-area/portfolio-iot-area.component';
import { PortfolioWebNikachatComponent } from './partials/portfolio-projects/portfolio-web-nikachat/portfolio-web-nikachat.component';
import { PortfolioWebSiriusmonComponent } from './partials/portfolio-projects/portfolio-web-siriusmon/portfolio-web-siriusmon.component';
import { PortfolioWebGeekstoreComponent } from './partials/portfolio-projects/portfolio-web-geekstore/portfolio-web-geekstore.component';
import { PortfolioWebCmrpsComponent } from './partials/portfolio-projects/portfolio-web-cmrps/portfolio-web-cmrps.component';
import { PortfolioDesktopInetmonitorComponent } from './partials/portfolio-projects/portfolio-desktop-inetmonitor/portfolio-desktop-inetmonitor.component';
import { PortfolioServicesCwpdnsclusterComponent } from './partials/portfolio-projects/portfolio-services-cwpdnscluster/portfolio-services-cwpdnscluster.component';
import { PortfolioServicesCwpbackupserviceComponent } from './partials/portfolio-projects/portfolio-services-cwpbackupservice/portfolio-services-cwpbackupservice.component';
import { PortfolioServicesAppveyordeployagentComponent } from './partials/portfolio-projects/portfolio-services-appveyordeployagent/portfolio-services-appveyordeployagent.component';
import { PortfolioServicesHetznerautorebooterComponent } from './partials/portfolio-projects/portfolio-services-hetznerautorebooter/portfolio-services-hetznerautorebooter.component';
import { PortfolioServicesShopifysyncComponent } from './partials/portfolio-projects/portfolio-services-shopifysync/portfolio-services-shopifysync.component';

let routes: Routes = [
	{
		path: '',
		redirectTo: 'welcome',
		pathMatch: 'full'
	},
	{
		path: 'welcome',
		component: WelcomeAreaComponent,
	},
	{
		path: 'placeholder',
		component: PlaceholderAreaComponent,
	},
	{
		path: 'personal',
		component: PersonalAreaComponent,
	},
	{
		path: 'contact',
		component: ContactAreaComponent,
	},
	{
		path: 'professional',
		component: ProfessionalAreaComponent,
		children: [
			{ path: '', redirectTo: 'workhistory', pathMatch: 'full' },
			{ path: 'workhistory', component: ProfessionalWorkhistoryAreaComponent, pathMatch: 'full' },
			{ path: 'education', component: ProfessionalEducationAreaComponent, pathMatch: 'full' },
			{ path: 'certifications', component: ProfessionalCertificationsAreaComponent, pathMatch: 'full' },
			{ path: 'courses', component: ProfessionalCoursesAreaComponent, pathMatch: 'full' },
		],
	},
	{
		path: 'skills',
		component: SkillsAreaComponent,
		children: [
			{ path: '', redirectTo: 'languages', pathMatch: 'full' },
			{ path: 'languages', component: SkillsLanguagesAreaComponent, pathMatch: 'full' },
			{ path: 'devtools', component: SkillsDevtoolsAreaComponent, pathMatch: 'full' },
			{ path: 'devmethods', component: SkillsDevmethodsAreaComponent, pathMatch: 'full' },
			{ path: 'os', component: SkillsOsAreaComponent, pathMatch: 'full' },
		],
	},
	{
		path: 'portfolio',
		component: PortfolioAreaComponent,
		children: [
			{ path: '', redirectTo: 'web', pathMatch: 'full' },
			{
				path: 'web', component: PortfolioWebAreaComponent, children: [
					{ path: '', redirectTo: 'nikachat', pathMatch: 'full' },
					{ path: 'nikachat', component: PortfolioWebNikachatComponent, pathMatch: 'full' },
					{ path: 'siriusmon', component: PortfolioWebSiriusmonComponent, pathMatch: 'full' },
					{ path: 'geekstore', component: PortfolioWebGeekstoreComponent, pathMatch: 'full' },
					{ path: 'cmrps', component: PortfolioWebCmrpsComponent, pathMatch: 'full' },
				]
			},
			{
				path: 'services', component: PortfolioServicesAreaComponent, children: [
					{ path: '', redirectTo: 'cwpdnscluster', pathMatch: 'full' },
					{ path: 'cwpdnscluster', component: PortfolioServicesCwpdnsclusterComponent, pathMatch: 'full' },
					{ path: 'cwpbackupservice', component: PortfolioServicesCwpbackupserviceComponent, pathMatch: 'full' },
					{ path: 'appveyordeployagent', component: PortfolioServicesAppveyordeployagentComponent, pathMatch: 'full' },
					{ path: 'hetznerautorebooter', component: PortfolioServicesHetznerautorebooterComponent, pathMatch: 'full' },
					{ path: 'shopifysync', component: PortfolioServicesShopifysyncComponent, pathMatch: 'full' },
				]
			},
			{
				path: 'desktop', component: PortfolioDesktopAreaComponent, children: [
					{ path: '', redirectTo: 'inetmonitor', pathMatch: 'full' },
					{ path: 'inetmonitor', component: PortfolioDesktopInetmonitorComponent, pathMatch: 'full' },
				]
			},
			{
				path: 'iot', component: PortfolioIotAreaComponent, children: [
					{ path: '', redirectTo: 'visortemp', pathMatch: 'full' },
					{ path: 'visortemp', component: PortfolioServicesCwpdnsclusterComponent, pathMatch: 'full' },
				]
			},
			{ path: 'games', component: PortfolioGamesAreaComponent, pathMatch: 'full' },
		],
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

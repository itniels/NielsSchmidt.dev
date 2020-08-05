import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDevToolModel, DevToolModel } from '../../backend/models/DevToolModel';
import { DevToolType } from '../../backend/enums/DevToolType';
import { DevToolExperience } from '../../backend/enums/DevToolExperience';
import { IHumanLanguageModel, HumanLanguageModel } from '../../backend/models/HumanLanguageModel';
import { ICodeLanguageModel, CodeLanguageModel } from '../../backend/models/CodeLanguageModel';
import { IOperatingSystemModel, OperatingSystemModel } from '../../backend/models/OperatingSystemModel';
import { HumanLanguageLevel } from '../../backend/enums/HumanLanguagelevel';
import { CodeLanguageType } from '../../backend/enums/CodeLanguageType';
import { CodeLanguageExperience } from '../../backend/enums/CodeLanguageExperience';
import { OsType } from '../../backend/enums/OsType';
import { OsLanguageExperience } from '../../backend/enums/OsLanguageExperience';

@Injectable({
	providedIn: 'root'
})
export class StoreService {
	public IsBarsStripped = new BehaviorSubject<boolean>(false);
	public DevTools = new BehaviorSubject<Array<IDevToolModel>>(new Array<IDevToolModel>());
	public LanguagesHuman = new BehaviorSubject<Array<IHumanLanguageModel>>(new Array<IHumanLanguageModel>());
	public LanguagesCode = new BehaviorSubject<Array<ICodeLanguageModel>>(new Array<ICodeLanguageModel>());
	public OperatingSystems = new BehaviorSubject<Array<IOperatingSystemModel>>(new Array<IOperatingSystemModel>());

	constructor() {
		this.InitDevTools();
		this.InitHumanLanguages();
		this.InitCodeLanguages();
		this.InitOsLanguages();
	}

	/**
	 *  Initializes the DevTools Array
	 *  @method
	 *  */
	private InitDevTools(): void {
		this.DevTools.next([
			new DevToolModel('Visual Studio', DevToolType.IDE, DevToolExperience.Professionally, 100, 'ide.png'),
			new DevToolModel('LinqPad', DevToolType.IDE, DevToolExperience.Professionally, 90, 'ide.png'),
			new DevToolModel('Visual Studio Code', DevToolType.IDE, DevToolExperience.Professionally, 80, 'ide.png'),
			new DevToolModel('IntelliJ', DevToolType.IDE, DevToolExperience.Professionally, 30, 'ide.png'),
			new DevToolModel('Eclipse', DevToolType.IDE, DevToolExperience.Professionally, 30, 'ide.png'),

			new DevToolModel('Git', DevToolType.VersionControl, DevToolExperience.Professionally, 100, 'vc.png'),
			new DevToolModel('SVN', DevToolType.VersionControl, DevToolExperience.Professionally, 10, 'vc.png'),

			new DevToolModel('BitBucket', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('GitHub', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('Jira', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('Git Bash', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('SQL Management Studio (SMSS)', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('Azure Data Studio', DevToolType.Tool, DevToolExperience.Professionally, 100, 'tool.png'),
			new DevToolModel('Fork (git)', DevToolType.Tool, DevToolExperience.Professionally, 80, 'tool.png'),
			new DevToolModel('Sourcetree', DevToolType.Tool, DevToolExperience.Professionally, 60, 'tool.png'),

			new DevToolModel('Hetzner', DevToolType.Infrastructure, DevToolExperience.Professionally, 100, 'infrastructure.png'),
			new DevToolModel('AWS', DevToolType.Infrastructure, DevToolExperience.Professionally, 75, 'infrastructure.png'),
			new DevToolModel('Online.net', DevToolType.Infrastructure, DevToolExperience.Professionally, 30, 'infrastructure.png'),
		]);
	}

	/**
 * Returns a list of human languages
 * @method
 * */
	private InitHumanLanguages(): void {
		this.LanguagesHuman.next([
			new HumanLanguageModel('Danish (native)', HumanLanguageLevel.Excellent, HumanLanguageLevel.Excellent, 'da-dk.svg'),
			new HumanLanguageModel('English', HumanLanguageLevel.Excellent, HumanLanguageLevel.Excellent, 'en-us.svg'),
		]);
	}

	/**
	* Returns a list of code languages
	* @method
	* */
	private InitCodeLanguages(): void {
		this.LanguagesCode.next([
			new CodeLanguageModel('C#', CodeLanguageType.Backend, CodeLanguageExperience.Professionally, 100, 'code.png'),
			new CodeLanguageModel('C# (.NET Core)', CodeLanguageType.Backend, CodeLanguageExperience.Professionally, 100, 'code.png'),
			new CodeLanguageModel('Java', CodeLanguageType.Backend, CodeLanguageExperience.Student, 50, 'code.png'),

			new CodeLanguageModel('.NET MVC', CodeLanguageType.BackendFramework, CodeLanguageExperience.Professionally, 100, 'code.png'),
			new CodeLanguageModel('.NET Web API', CodeLanguageType.BackendFramework, CodeLanguageExperience.Professionally, 100, 'code.png'),
			new CodeLanguageModel('.NET SignalR', CodeLanguageType.BackendFramework, CodeLanguageExperience.Hobby, 90, 'code.png'),
			new CodeLanguageModel('.NET Entity Framework', CodeLanguageType.BackendFramework, CodeLanguageExperience.Professionally, 75, 'code.png'),

			new CodeLanguageModel('MsSQL', CodeLanguageType.Database, CodeLanguageExperience.Professionally, 50, 'database.png'),
			new CodeLanguageModel('MySQL / MariaDB', CodeLanguageType.Database, CodeLanguageExperience.Hobby, 50, 'database.png'),

			new CodeLanguageModel('TypeScript', CodeLanguageType.Frontend, CodeLanguageExperience.Professionally, 85, 'code.png'),
			new CodeLanguageModel('HTML / CSHTML', CodeLanguageType.Frontend, CodeLanguageExperience.Professionally, 50, 'code.png'),
			new CodeLanguageModel('JavaScript', CodeLanguageType.Frontend, CodeLanguageExperience.Professionally, 50, 'code.png'),
			new CodeLanguageModel('CSS / SCSS / LESS', CodeLanguageType.Frontend, CodeLanguageExperience.Professionally, 40, 'frontend.png'),

			new CodeLanguageModel('Angular 2+', CodeLanguageType.FrontendFramework, CodeLanguageExperience.Professionally, 85, 'code.png'),
			new CodeLanguageModel('Knockout JS', CodeLanguageType.FrontendFramework, CodeLanguageExperience.Professionally, 60, 'code.png'),
			new CodeLanguageModel('VueJS', CodeLanguageType.FrontendFramework, CodeLanguageExperience.Student, 30, 'code.png'),
			new CodeLanguageModel('React', CodeLanguageType.FrontendFramework, CodeLanguageExperience.Student, 20, 'code.png'),

			new CodeLanguageModel('C# WinForms', CodeLanguageType.GUI, CodeLanguageExperience.Hobby, 60, 'gui.png'),
			new CodeLanguageModel('C# WPF', CodeLanguageType.GUI, CodeLanguageExperience.Hobby, 60, 'gui.png'),

			new CodeLanguageModel('Unity 3D', CodeLanguageType.Games, CodeLanguageExperience.Hobby, 30, 'game.png'),
			new CodeLanguageModel('Unreal Engine', CodeLanguageType.Games, CodeLanguageExperience.Hobby, 5, 'game.png'),

			new CodeLanguageModel('Bash', CodeLanguageType.Scripting, CodeLanguageExperience.Professionally, 75, 'shell.png'),
			new CodeLanguageModel('PowerShell', CodeLanguageType.Scripting, CodeLanguageExperience.Professionally, 50, 'shell.png'),
		]);
	}

	/**
 * Returns a list of operating system i know
 * @method
 * */
	private InitOsLanguages(): void {
		this.OperatingSystems.next([
			new OperatingSystemModel('Home And Server', OsType.Windows, OsLanguageExperience.Professionally, 100, 'code.png'),
			new OperatingSystemModel('CentOS', OsType.Linux, OsLanguageExperience.Professionally, 90, 'code.png'),
			new OperatingSystemModel('Debian', OsType.Linux, OsLanguageExperience.Professionally, 80, 'code.png'),
			new OperatingSystemModel('Proxmox', OsType.Virtualization, OsLanguageExperience.Professionally, 80, 'code.png'),
			new OperatingSystemModel('Ubuntu', OsType.Linux, OsLanguageExperience.Professionally, 60, 'code.png'),
			new OperatingSystemModel('Raspian', OsType.Linux, OsLanguageExperience.Hobby, 50, 'code.png'),
		]);
	}
}

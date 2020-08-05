import { Component, OnInit } from '@angular/core';
import { IDevToolModel } from '../../../../backend/models/DevToolModel';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-skills-devtools-area',
  templateUrl: './skills-devtools-area.component.html',
  styleUrls: ['./skills-devtools-area.component.scss']
})
export class SkillsDevtoolsAreaComponent implements OnInit {
  public IsStrippedBars: boolean;
  public DevTools: Array<IDevToolModel>;

  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.store.IsBarsStripped.subscribe(x => this.IsStrippedBars = x);
    this.store.DevTools.subscribe(x => this.DevTools = x);
  }

}

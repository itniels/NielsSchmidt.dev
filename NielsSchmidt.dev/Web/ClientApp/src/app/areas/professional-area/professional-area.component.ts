import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-area',
  templateUrl: './professional-area.component.html',
  styleUrls: ['./professional-area.component.scss']
})
export class ProfessionalAreaComponent implements OnInit {
  public CurrentSubArea: string;

  constructor() { }

  ngOnInit(): void {

  }

}

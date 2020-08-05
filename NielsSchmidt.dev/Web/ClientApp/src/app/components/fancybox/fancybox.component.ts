import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancybox',
  templateUrl: './fancybox.component.html',
  styleUrls: ['./fancybox.component.scss']
})
export class FancyboxComponent implements OnInit {
  @Input() src: string;
  @Input() imgClass: string;
  @Input() caption: string;
  @Input() alt: string;
  @Input() gallery: string;

  public get IsGallery() { return this.gallery && this.gallery.length > 0; }
  public get AltText() { return this.alt ? this.alt : this.caption; }

  constructor() { }

  ngOnInit(): void {

  }

}

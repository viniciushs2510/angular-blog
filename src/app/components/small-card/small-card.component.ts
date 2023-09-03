import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  marginValue: string = '20px';
  @Input() hasMargin: boolean = true;

  @Input() imgUrl: string = "";
  @Input() imgAlt: string = "";
  @Input() date: string = "";
  @Input() title: string = "";
  @Input() link: string = "";

  constructor() { }

  ngOnInit(): void {
    if(!this.hasMargin) {
      this.marginValue = '0px';
    }
  }

}

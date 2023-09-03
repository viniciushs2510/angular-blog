import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  widthValue: string = '290px';
  paddingLeftValue: string = '20px';
  borderRightValue: string = '1px solid #e5e5e5';

  @Input() hasPaddingLeft: boolean = true;
  @Input() hasBorderRight: boolean = true;

  @Input() imgUrl: string = "";
  @Input() imgAlt: string = "";
  @Input() date: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() link: string = "";

  constructor() { }

  ngOnInit(): void {
    if(!this.hasPaddingLeft) {
      this.paddingLeftValue = '0px';
      this.widthValue = '270px';
    }
    if(!this.hasBorderRight) {
      this.borderRightValue = 'none';
    }
  }

}

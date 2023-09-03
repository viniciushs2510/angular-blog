import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() imgAlt: string = "";
  @Input() date: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() link: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}

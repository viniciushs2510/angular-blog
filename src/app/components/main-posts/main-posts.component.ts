import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-posts',
  templateUrl: './main-posts.component.html',
  styleUrls: ['./main-posts.component.css']
})
export class MainPostsComponent implements OnInit {

  bigCardImg: string = "https://picsum.photos/600/280";
  bigCardImgAlt: string = "Imagem aleatória";
  bigCardLink: string = "/post/1";
  bigCardDate: string = "17 Ago 2023";
  bigCardTitle: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  bigCardDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis eros tellus, fringilla suscipit nisi molestie sit amet. Sed quis sem dictum, ullamcorper nisi placerat, blandit quam.";

  smallCardImg1: string = "https://picsum.photos/200/100?random=1";
  smallCardImgAlt1: string = "Imagem aleatória";
  smallCardLink1: string = "/post/1";
  smallCardDate1: string = "17 Ago 2023";
  smallCardTitle1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  smallCardImg2: string = "https://picsum.photos/200/100?random=2";
  smallCardImgAlt2: string = "Imagem aleatória";
  smallCardLink2: string = "/post/1";
  smallCardDate2: string = "17 Ago 2023";
  smallCardTitle2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  smallCardImg3: string = "https://picsum.photos/200/100?random=3";
  smallCardImgAlt3: string = "Imagem aleatória";
  smallCardLink3: string = "/post/1";
  smallCardDate3: string = "17 Ago 2023";
  smallCardTitle3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bigCardImg: string = "https://picsum.photos/600/280";
  bigCardImgAlt: string = "Imagem aleatória";
  bigCardLink: string = "/post/1";
  bigCardDate: string = "17 Ago 2023";
  bigCardTitle: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  bigCardDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis eros tellus, fringilla suscipit nisi molestie sit amet. Sed quis sem dictum, ullamcorper nisi placerat, blandit quam.";

  smallCardImg1: string = "https://picsum.photos/200/100?random=1";
  smallCardImgAlt1: string = "Imagem aleatória";
  smallCardLink1: string = "https://www.google.com.br";
  smallCardDate1: string = "17 Ago 2023";
  smallCardTitle1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  smallCardImg2: string = "https://picsum.photos/200/100?random=2";
  smallCardImgAlt2: string = "Imagem aleatória";
  smallCardLink2: string = "https://www.google.com.br";
  smallCardDate2: string = "17 Ago 2023";
  smallCardTitle2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  smallCardImg3: string = "https://picsum.photos/200/100?random=3";
  smallCardImgAlt3: string = "Imagem aleatória";
  smallCardLink3: string = "https://www.google.com.br";
  smallCardDate3: string = "17 Ago 2023";
  smallCardTitle3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  constructor() { }

  ngOnInit(): void {
  }

}

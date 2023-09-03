import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postCardImg1: string = "https://picsum.photos/250/150?random=1";
  postCardImgAlt1: string = "Imagem aleatória";
  postCardLink1: string = "https://www.google.com.br";
  postCardDate1: string = "17 Ago 2023";
  postCardTitle1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi.";
  postCardDescription1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi at purus semper, ut viverra libero dictum. Duis placerat nisi justo, ut efficitur ligula semper vitae. Nulla dignissim ultrices tincidunt.";

  postCardImg2: string = "https://picsum.photos/250/150?random=2";
  postCardImgAlt2: string = "Imagem aleatória";
  postCardLink2: string = "https://www.google.com.br";
  postCardDate2: string = "17 Ago 2023";
  postCardTitle2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi.";
  postCardDescription2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi at purus semper, ut viverra libero dictum. Duis placerat nisi justo, ut efficitur ligula semper vitae. Nulla dignissim ultrices tincidunt.";

  postCardImg3: string = "https://picsum.photos/250/150?random=3";
  postCardImgAlt3: string = "Imagem aleatória";
  postCardLink3: string = "https://www.google.com.br";
  postCardDate3: string = "17 Ago 2023";
  postCardTitle3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi.";
  postCardDescription3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi at purus semper, ut viverra libero dictum. Duis placerat nisi justo, ut efficitur ligula semper vitae. Nulla dignissim ultrices tincidunt.";

  postCardImg4: string = "https://picsum.photos/250/150?random=4";
  postCardImgAlt4: string = "Imagem aleatória";
  postCardLink4: string = "https://www.google.com.br";
  postCardDate4: string = "17 Ago 2023";
  postCardTitle4: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi.";
  postCardDescription4: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi at purus semper, ut viverra libero dictum. Duis placerat nisi justo, ut efficitur ligula semper vitae. Nulla dignissim ultrices tincidunt.";

  constructor() { }

  ngOnInit(): void {
  }

}

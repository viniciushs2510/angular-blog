import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imgUrl: string = "https://picsum.photos/250/150?random=1";
  imgAlt: string = "Imagem aleatória";
  writer: string = "João da Silva";
  date: string = "17 Ago 2023";
  title: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi.";
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula nisi at purus semper, ut viverra libero dictum. Duis placerat nisi justo, ut efficitur ligula semper vitae. Nulla dignissim ultrices tincidunt.";
  text:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget facilisis turpis. Proin lacinia neque dolor, eu malesuada augue sollicitudin sed. Vivamus ut sollicitudin nunc. Donec ultricies velit et imperdiet condimentum. Duis in lacus leo. Morbi risus sem, pretium et pretium a, rhoncus mollis nisi. Suspendisse eget lorem nisl. Nam vitae purus egestas, pulvinar risus a, faucibus dui. Cras tincidunt sed dui ac placerat. In laoreet fermentum dictum. Sed sit amet tortor at diam commodo ornare. Aenean ut elit vel augue dictum feugiat. Nunc eleifend, libero quis fringilla malesuada, eros nisi auctor lorem, fringilla pellentesque lectus lectus in eros. Sed et ultrices massa.\n" +
  "Integer nec vulputate risus. Fusce ullamcorper ex dolor, id pretium massa convallis vitae. Fusce et consequat est. Nulla nec lorem non sem semper lacinia. Quisque in sem quis urna viverra tincidunt. Ut velit neque, ultricies sit amet tortor quis, tincidunt vulputate turpis. Nulla ac sapien a orci hendrerit volutpat vitae nec nunc. Integer porta tempus lorem sit amet suscipit. Duis rutrum laoreet dolor ut accumsan. Vestibulum dapibus neque purus, sit amet facilisis dolor aliquet a. Nam vel odio tortor. Sed nec quam eu odio pretium elementum non nec ex. Pellentesque vehicula quam eget lacus vehicula maximus. Vivamus gravida lorem sit amet mauris imperdiet, ut bibendum libero feugiat. Nullam imperdiet tellus augue, eu consequat dolor semper non.\n" +
  "Sed maximus felis et sem vulputate, in tempor justo viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dapibus enim est, vitae interdum diam aliquet quis. Nam euismod ligula augue, vel feugiat tortor tempus nec. Nunc interdum posuere luctus. Suspendisse tincidunt, dolor iaculis efficitur scelerisque, nisl felis scelerisque odio, vel interdum justo justo at tellus. Proin non tortor non mauris sagittis gravida. In convallis sem magna, non condimentum dolor hendrerit ac."


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/services/PostsServices';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: string = "";
  imgUrl: string = "";
  imgAlt: string = "";
  date: string = "";
  title: string = "";
  description: string = "";
  text: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? "0";

      const post = this.postService.getPostForId(parseInt(this.id));
      if (post) {
        this.imgUrl = post.img;
        this.imgAlt = post.imgAlt;
        this.date = post.date;
        this.title = post.title;
        this.description = post.description;
        this.text = post.content;
      }
      else {
        this.router.navigate(['/home']);
      }
    });
  }

}

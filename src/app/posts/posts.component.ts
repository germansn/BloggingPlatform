import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  cargando : boolean = false;
  headers : Object;
  posts: Post[] = [];


  constructor(public postsService : PostService) { 
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.cargando = true;
    this.postsService.getPosts()
    .subscribe( datos => {
      this.cargando = false;
      
      let dat = datos.body;
      let headers = datos.headers;
      console.log(dat);
      console.log(headers);

      this.posts = dat;

      const keys = datos.headers.keys();
      console.log(keys);
      
      this.headers = keys.map( key => `${key} : ${datos.headers.get(key)}` );/**/
    })
  }

}

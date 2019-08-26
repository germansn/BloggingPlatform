import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.scss']
})
export class PostTemplateComponent implements OnInit {
  postId: any;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log(this.postId);
  }

  ngOnInit() {
  }

}

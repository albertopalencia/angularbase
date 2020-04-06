import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private postService: DataService) { }


  ngOnInit(): void {
    this.posts = this.postService.getPosts();    
  }

  //componente padre
  escuchaClick( id: number){
    
    console.log('Click en hijo:  ', id)
  }

}

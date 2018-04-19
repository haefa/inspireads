import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';
import { BookDetailPage } from '../book-detail/book-detail';
import { NewPostPage } from '../new-post/new-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  details(){
    this.navCtrl.push(PostDetailPage);
  }

  newPost(){
    this.navCtrl.setRoot(NewPostPage);
  }
}

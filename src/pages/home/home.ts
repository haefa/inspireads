import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';
import { BookDetailPage } from '../book-detail/book-detail';

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
}

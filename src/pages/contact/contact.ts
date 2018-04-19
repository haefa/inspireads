import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewPostPage } from '../new-post/new-post';
import { MyCollectionPage } from '../my-collection/my-collection';
import { MyPostsPage } from '../my-posts/my-posts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  baca(){
    this.navCtrl.setRoot(AboutPage);
  }

  post(){
    this.navCtrl.push(MyPostsPage);
  }

  koleksi(){
    this.navCtrl.push(MyCollectionPage);
  }

}

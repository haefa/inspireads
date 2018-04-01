import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookDetailPage } from '../book-detail/book-detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    
  book: string = "meminjam";
  constructor(public navCtrl: NavController) {

  }

  detail(){
    this.navCtrl.push(BookDetailPage);
  }
}

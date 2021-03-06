import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-book-detail',
  templateUrl: 'book-detail.html',
})
export class BookDetailPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
  }

  public show: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookDetailPage');
  }

  presentConfirm() {
    
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Apakah kamu ingin meminjamkan buku ini?',
      buttons: [
        {
          text: 'Kembali',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Pinjamkan',
          handler: () => {
            if(this.show == false) this.show = true;
            else {
              this.show = false;
            }
            console.log('Pinjamkan clicked');
          }
        }
      ]
    });
    alert.present();
  }

}

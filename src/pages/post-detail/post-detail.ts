import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
  }

  public hideMe: boolean = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Apakah kamu ingin meminjam buku ini?',
      buttons: [
        {
          text: 'Kembali',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Pinjam',
          handler: () => {
            this.hideMe = true;
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}

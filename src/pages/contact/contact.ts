import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { NewPostPage } from '../new-post/new-post';
import { MyCollectionPage } from '../my-collection/my-collection';
import { MyPostsPage } from '../my-posts/my-posts';
=======
import { NavController, AlertController, App, LoadingController } from 'ionic-angular';
import { Data } from '../../shared/providers/data';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';
import { MyApp } from '../../app/app.component';
>>>>>>> 02c7271722d3fc008322e4aaa0f5b8634a1777ff

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  id_user: string;
  name_user: string;
  email_user: string;
  hp_user: number;
  alamat_user: string;

  constructor(
    private fireauth: AngularFireAuth,

    public data:Data,
    public loadCtrl: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,

    public app: App,
  ){
    this.data.getDataUser().then((data)=>{
      this.id_user =  data.id;
      this.name_user = data.name;
      this.email_user = data.email;
      this.hp_user = data.telephone;
      this.alamat_user = data.address;
    })
  }

  logout(){

    let loading = this.loadCtrl.create({
      content: "Keluar.."
    })
    loading.present();

    let alert = this.alertCtrl.create({
        title: 'Apakah anda yakin?',
        subTitle: 'Keluar akan menghapus semua data yang belum disimpan',
        buttons: [
          {
            text: 'Tidak',
            handler: ()=>{
              console.log('Batal')
            }
          },
          {
            text: 'Ya',
            handler: () => {
              console.log('Keluar')
              this.fireauth.auth.signOut;
              this.data.logout();
              this.app.getRootNav().setRoot(MyApp);
            }
          }
          ]
      });
      alert.present();
      loading.dismiss();
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

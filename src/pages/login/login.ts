import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { NgForm } from '@angular/forms';
import { Data } from '../../shared/providers/data';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;
  email: string;
  password: string;


  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,

    public data: Data,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public loadCtrl: LoadingController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(form: NgForm){
    this.submitted = true;

    let loading = this.loadCtrl.create({
      content: 'Memuat..'
    })

    if(form.valid){
      loading.present();
      this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(user =>{
          this.firedata.object('/data_user/'+ user.uid).valueChanges().subscribe( data =>{
            console.log(data);
            if(data){
              this.data.login(data, "pengguna");
              this.navCtrl.setRoot(TabsPage);
            }
            else{
              let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Silakan Coba Lagi',
                buttons: ['OK']
                });
                alert.present();
            }
          });
        })
        .catch(error => {
          console.log('error', error);
          let alert = this.alertCtrl.create({
            title: 'Gagal Masuk',
            subTitle: 'Silakan Coba Lagi. Cek Kembali Email dan Password',
            buttons: ['OK']
            });
            alert.present();
        })
        loading.dismiss();
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Gagal Masuk',
          subTitle: 'Silakan Coba Lagi. Cek Kembali Email dan Password',
          buttons: ['OK']
          });
          alert.present();
      }
  }


  signUp(){
    this.navCtrl.push(RegisterPage);
  }

}

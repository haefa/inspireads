import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated'

import { TabsPage } from '../tabs/tabs';

import { Data } from '../../shared/providers/data';

import { NgForm } from '@angular/forms';
import { Http } from '@angular/http'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //deklarasi variabel
  submitted = false;

  name: string;
  email: string;
  password: string;
  confPass: string;
  telephone: number;
  address: string;

  isValidFormTelephone = true;

  user: FirebaseObjectObservable<any[]>;

  constructor(
    //firebase
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,

    //controller
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public data: Data,
    public loadCtrl: LoadingController
    ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  checkTelephone(){
    console.log(this.telephone);
    if(this.telephone<0){
      this.isValidFormTelephone = false;
    }
  }

  signUp(form: NgForm){
      this.submitted = true;

      let loading = this.loadCtrl.create({
        content: "Memuat..."
      })

      if(form.valid){
        loading.present();

        //insert to firebase
        this.fireauth.auth.createUserWithEmailAndPassword(this.email,this.password)
          .then(data=>{
            const dt_user = this.firedata.object('/data_user/'+ data.uid);
            dt_user.set({id:data.uid, name:this.name, email:this.email, telephone:this.telephone, address:this.address})
            console.log('get data', data)
            dt_user.valueChanges().subscribe(datanya =>{
              console.log(datanya);  
              this.data.login(datanya,"donatur")
            });
            this.navCtrl.setRoot(TabsPage);
          })
          .catch(error=>{
            console.log('error',error)
          });
          
          loading.dismiss()
      }
      else{
        let alert = this.alertCtrl.create({
            title: 'Gagal Membuat Akun',
            subTitle: 'Silakan Coba Lagi',
            buttons: ['OK']
        });
        alert.present();
      }
  }
}

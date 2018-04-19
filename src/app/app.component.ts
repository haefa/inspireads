import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { OnboardingPage } from '../pages/onboarding/onboarding';
=======
import { LoginPage } from '../pages/login/login';

import { Data } from '../shared/providers/data';


>>>>>>> 02c7271722d3fc008322e4aaa0f5b8634a1777ff

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
<<<<<<< HEAD
  rootPage:any = OnboardingPage;
=======
    rootPage:any;
>>>>>>> 02c7271722d3fc008322e4aaa0f5b8634a1777ff

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public data:Data
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.data.isLogin().then((value)=>{
      if(value){
        this.rootPage = TabsPage;
      }
      else{
        this.rootPage = LoginPage;
      }
    }
  );
  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Searchbar } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';

import { RegisterPage } from '../pages/register/register';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { BookDetailPage } from '../pages/book-detail/book-detail';
import { PostDetailPage } from '../pages/post-detail/post-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from './firebase.credentials';
import { Data } from '../shared/providers/data';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,

    RegisterPage,
    LoginPage,

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage, 
    BookDetailPage,
    PostDetailPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    IonicStorageModule.forRoot(),
    HttpModule,

    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    RegisterPage,
    LoginPage,

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    BookDetailPage,
    PostDetailPage
    
  ],
  providers: [
    StatusBar,
    Searchbar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

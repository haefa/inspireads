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
import { DipinjamPage } from '../pages/dipinjam/dipinjam';
import { NewPostPage } from '../pages/new-post/new-post';
import { MyCollectionPage } from '../pages/my-collection/my-collection';
import { MyPostsPage } from '../pages/my-posts/my-posts';
import { OnboardingPage } from '../pages/onboarding/onboarding';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';



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
<<<<<<< HEAD
    PostDetailPage,
    DipinjamPage,
    NewPostPage,
    MyCollectionPage,
    MyPostsPage,
    OnboardingPage,
    LoginPage
=======
    PostDetailPage
    
>>>>>>> 02c7271722d3fc008322e4aaa0f5b8634a1777ff
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
<<<<<<< HEAD
    PostDetailPage,
    DipinjamPage,
    NewPostPage,
    MyCollectionPage,
    MyPostsPage,
    OnboardingPage,
    LoginPage
=======
    PostDetailPage
    
>>>>>>> 02c7271722d3fc008322e4aaa0f5b8634a1777ff
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

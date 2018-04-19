import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Searchbar } from 'ionic-angular';
import { MyApp } from './app.component';

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




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage, 
    BookDetailPage,
    PostDetailPage,
    DipinjamPage,
    NewPostPage,
    MyCollectionPage,
    MyPostsPage,
    OnboardingPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    BookDetailPage,
    PostDetailPage,
    DipinjamPage,
    NewPostPage,
    MyCollectionPage,
    MyPostsPage,
    OnboardingPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    Searchbar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

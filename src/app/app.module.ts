import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppVersion } from '@ionic-native/app-version';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {FileOpener} from '@ionic-native/file-opener';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {File} from '@ionic-native/file';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppUpdateServerProvider } from '../providers/app-update-server/app-update-server';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Transfer,
    TransferObject,
    FileOpener,
    File,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUpdateServerProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireAnalyticsModule, CONFIG , ScreenTrackingService, UserTrackingService } from '@angular/fire/compat/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyCY2owp0RMq-CvIXP4STbEoEzifhp-9C1Q",
  authDomain: "jeyakumar-housewarming.firebaseapp.com",
  projectId: "jeyakumar-housewarming",
  storageBucket: "jeyakumar-housewarming.appspot.com",
  messagingSenderId: "17076223467",
  appId: "1:17076223467:web:422c21ce565b1b35eeedae"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
  ],
  providers: [
    ScreenTrackingService, 
    UserTrackingService,
    {
    provide: CONFIG,
      useValue: { send_page_view: true, allow_ad_personalization_signals: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

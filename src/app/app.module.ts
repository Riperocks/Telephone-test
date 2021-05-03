import { CartmodalPageModule } from './modals/cartmodal/cartmodal.module';
import { NewsviewPageModule } from './newsview/newsview.module';
import { SuccessmodalPageModule } from './successmodal/successmodal.module';
import { AddappointmentPageModule } from './addappointment/addappointment.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Successmodal2PageModule } from './modals/successmodal2/successmodal2.module';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AddappointmentPageModule,SuccessmodalPageModule,NewsviewPageModule,
    CartmodalPageModule,Successmodal2PageModule
  ],
  providers: [
    StatusBar,
    NativeAudio,
    SplashScreen,
    AdMobFree,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

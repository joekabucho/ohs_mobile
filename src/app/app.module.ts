import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './shared/auth-service.service';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { Image1PageModule } from './pages/modal/image1/image1.module';
import { Image2PageModule } from './pages/modal/image2/image2.module';
import { Image3PageModule } from './pages/modal/image3/image3.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';



@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    Image1PageModule,
    Image2PageModule,
    Image3PageModule,
    SearchFilterPageModule
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

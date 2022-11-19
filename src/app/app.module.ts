import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
<<<<<<< HEAD
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
=======
import { FooterComponent } from './Components/footer/footer.component';
>>>>>>> yusufhsn


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    SideMenuComponent
=======
    FooterComponent
>>>>>>> yusufhsn
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

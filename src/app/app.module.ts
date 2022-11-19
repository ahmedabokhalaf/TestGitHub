import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

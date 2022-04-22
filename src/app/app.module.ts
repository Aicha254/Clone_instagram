import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnapIpdComponent } from './snap-ipd/snap-ipd.component';
import { navbarComponent } from './header/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapIpdComponent,
    navbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

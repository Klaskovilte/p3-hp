import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { Cnt1Component } from './cnt1/cnt1.component';
import { Cnt2Component } from './cnt2/cnt2.component';
import { Cnt3Component } from './cnt3/cnt3.component';
import { Foot1Component } from './foot1/foot1.component';
import { Foot2Component } from './foot2/foot2.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    Cnt1Component,
    Cnt2Component,
    Cnt3Component,
    Foot1Component,
    Foot2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

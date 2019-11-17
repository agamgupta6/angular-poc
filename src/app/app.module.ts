import { ComponentTwoComponent } from './components/tab/component-two/component-two.component';
import { ComponentOneComponent } from './components/tab/component-one/component-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { TabOutletComponent } from './shared/tab-outlet/tab-outlet.component';
import { TabModule } from './components/tab/tab.module';
import { ComponentThreeComponent } from './components/tab/component-three/component-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TabOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabModule,
    AngularMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ComponentOneComponent,ComponentTwoComponent,ComponentThreeComponent]
})
export class AppModule { }

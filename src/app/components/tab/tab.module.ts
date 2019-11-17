import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';



@NgModule({
  declarations: [ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent],
  imports: [
    CommonModule
  ],
  exports:[ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent]
})
export class TabModule { }

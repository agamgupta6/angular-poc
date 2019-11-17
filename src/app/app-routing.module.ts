import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabOutletComponent } from './shared/tab-outlet/tab-outlet.component';

const routes: Routes = [{
  path:'',
  component: TabOutletComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

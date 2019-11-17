import { Component } from '@angular/core';
import { TabServiceService } from './tab-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tab-container';

  constructor(private tabService: TabServiceService){

  }
  addComponentToTabs(label,componentName){
    this.tabService.changeData({
      label: label,
      component: componentName
  });
}

}

import { TabServiceService } from './../../tab-service.service';
import { Component, OnInit } from '@angular/core';
import { ComponentOneComponent } from 'src/app/components/tab/component-one/component-one.component';
import { ComponentThreeComponent } from 'src/app/components/tab/component-three/component-three.component';
import { ComponentTwoComponent } from 'src/app/components/tab/component-two/component-two.component';

@Component({
  selector: 'app-tab-outlet',
  templateUrl: './tab-outlet.component.html',
  styleUrls: ['./tab-outlet.component.scss']
})
export class TabOutletComponent implements OnInit {

  public dynamicTabs = [];
  selectedTab=0;

  data:any;
  constructor(private tabService: TabServiceService) {
  this.tabService.currentData.subscribe(data=>{
    console.log(data);
    switch (data.component) {
      case 'one':
          this.dynamicTabs.push({label:data.label, component:ComponentOneComponent})
        break;
        case 'two':
          this.dynamicTabs.push({label:data.label, component:ComponentTwoComponent})
        break;
        case 'three':
          this.dynamicTabs.push({label:data.label, component:ComponentThreeComponent})
        break;
      default:
        break;
    }

    this.selectedTab = this.dynamicTabs.length-1;
  });
   }

  ngOnInit() {
  }

}

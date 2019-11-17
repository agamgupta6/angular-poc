import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {

  private dataSource = new BehaviorSubject({
    label: 'Component 1 label',
    component: 'one'
});
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.dataSource.next(data);
  }
  constructor() { }
}

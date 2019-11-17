import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOutletComponent } from './tab-outlet.component';

describe('TabOutletComponent', () => {
  let component: TabOutletComponent;
  let fixture: ComponentFixture<TabOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

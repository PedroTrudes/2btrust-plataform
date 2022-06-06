import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegateComponent } from './navegate.component';

describe('NavegateComponent', () => {
  let component: NavegateComponent;
  let fixture: ComponentFixture<NavegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

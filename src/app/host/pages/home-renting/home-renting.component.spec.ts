import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentingComponent } from './home-renting.component';

describe('HomeRentingComponent', () => {
  let component: HomeRentingComponent;
  let fixture: ComponentFixture<HomeRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

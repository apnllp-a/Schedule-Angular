import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHdComponent } from './main-page-hd.component';

describe('MainPageHdComponent', () => {
  let component: MainPageHdComponent;
  let fixture: ComponentFixture<MainPageHdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageHdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageHdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

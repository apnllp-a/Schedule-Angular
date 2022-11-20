import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageItComponent } from './main-page-it.component';

describe('MainPageItComponent', () => {
  let component: MainPageItComponent;
  let fixture: ComponentFixture<MainPageItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

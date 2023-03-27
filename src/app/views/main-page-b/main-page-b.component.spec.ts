import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBComponent } from './main-page-b.component';

describe('MainPageBComponent', () => {
  let component: MainPageBComponent;
  let fixture: ComponentFixture<MainPageBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

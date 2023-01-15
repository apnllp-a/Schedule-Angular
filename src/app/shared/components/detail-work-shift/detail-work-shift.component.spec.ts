import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWorkShiftComponent } from './detail-work-shift.component';

describe('DetailWorkShiftComponent', () => {
  let component: DetailWorkShiftComponent;
  let fixture: ComponentFixture<DetailWorkShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWorkShiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailWorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

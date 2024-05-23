import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftSchedulePageComponent } from './shift-schedule-page.component';

describe('ShiftSchedulePageComponent', () => {
  let component: ShiftSchedulePageComponent;
  let fixture: ComponentFixture<ShiftSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftSchedulePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

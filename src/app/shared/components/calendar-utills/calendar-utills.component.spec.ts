import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarUtillsComponent } from './calendar-utills.component';

describe('CalendarUtillsComponent', () => {
  let component: CalendarUtillsComponent;
  let fixture: ComponentFixture<CalendarUtillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarUtillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarUtillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

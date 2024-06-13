import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSchedulePageComponent } from './result-schedule-page.component';

describe('ResultSchedulePageComponent', () => {
  let component: ResultSchedulePageComponent;
  let fixture: ComponentFixture<ResultSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSchedulePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

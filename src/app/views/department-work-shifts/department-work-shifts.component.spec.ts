import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentWorkShiftsComponent } from './department-work-shifts.component';

describe('DepartmentWorkShiftsComponent', () => {
  let component: DepartmentWorkShiftsComponent;
  let fixture: ComponentFixture<DepartmentWorkShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentWorkShiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentWorkShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

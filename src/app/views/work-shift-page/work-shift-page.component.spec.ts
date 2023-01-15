import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftPageComponent } from './work-shift-page.component';

describe('WorkShiftPageComponent', () => {
  let component: WorkShiftPageComponent;
  let fixture: ComponentFixture<WorkShiftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShiftPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkShiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

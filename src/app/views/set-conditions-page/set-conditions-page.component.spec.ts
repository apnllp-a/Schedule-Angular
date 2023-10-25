import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConditionsPageComponent } from './set-conditions-page.component';

describe('SetConditionsPageComponent', () => {
  let component: SetConditionsPageComponent;
  let fixture: ComponentFixture<SetConditionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetConditionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetConditionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

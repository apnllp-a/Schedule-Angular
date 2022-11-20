import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationTableComponent } from './confirmation-table.component';

describe('ConfirmationTableComponent', () => {
  let component: ConfirmationTableComponent;
  let fixture: ComponentFixture<ConfirmationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

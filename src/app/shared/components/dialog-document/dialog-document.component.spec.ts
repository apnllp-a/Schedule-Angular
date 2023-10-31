import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDocumentComponent } from './dialog-document.component';

describe('DialogDocumentComponent', () => {
  let component: DialogDocumentComponent;
  let fixture: ComponentFixture<DialogDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

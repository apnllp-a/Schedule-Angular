import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentHeadPageComponent } from './document-head-page.component';

describe('DocumentHeadPageComponent', () => {
  let component: DocumentHeadPageComponent;
  let fixture: ComponentFixture<DocumentHeadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentHeadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentHeadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

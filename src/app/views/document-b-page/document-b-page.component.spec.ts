import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentBPageComponent } from './document-b-page.component';

describe('DocumentBPageComponent', () => {
  let component: DocumentBPageComponent;
  let fixture: ComponentFixture<DocumentBPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentBPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

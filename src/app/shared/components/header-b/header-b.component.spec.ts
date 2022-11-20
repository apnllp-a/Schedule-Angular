import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBComponent } from './header-b.component';

describe('HeaderBComponent', () => {
  let component: HeaderBComponent;
  let fixture: ComponentFixture<HeaderBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItComponent } from './header-it.component';

describe('HeaderItComponent', () => {
  let component: HeaderItComponent;
  let fixture: ComponentFixture<HeaderItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

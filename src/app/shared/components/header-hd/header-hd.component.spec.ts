import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHdComponent } from './header-hd.component';

describe('HeaderHdComponent', () => {
  let component: HeaderHdComponent;
  let fixture: ComponentFixture<HeaderHdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

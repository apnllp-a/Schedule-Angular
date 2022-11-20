import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNamePageComponent } from './list-name-page.component';

describe('ListNamePageComponent', () => {
  let component: ListNamePageComponent;
  let fixture: ComponentFixture<ListNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

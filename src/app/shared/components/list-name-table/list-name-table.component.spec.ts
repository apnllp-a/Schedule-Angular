import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNameTableComponent } from './list-name-table.component';

describe('ListNameTableComponent', () => {
  let component: ListNameTableComponent;
  let fixture: ComponentFixture<ListNameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNameTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

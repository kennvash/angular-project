import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCustomersComponent } from './list-of-customers.component';

describe('ListOfCustomersComponent', () => {
  let component: ListOfCustomersComponent;
  let fixture: ComponentFixture<ListOfCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

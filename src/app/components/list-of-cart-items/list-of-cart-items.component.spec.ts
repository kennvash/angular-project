import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCartItemsComponent } from './list-of-cart-items.component';

describe('ListOfCartItemsComponent', () => {
  let component: ListOfCartItemsComponent;
  let fixture: ComponentFixture<ListOfCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCartItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';
import { Customer } from '../../interfaces/customer';
import { Item } from '../../interfaces/item'

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  @Input() showItems: boolean = true;
  @Input() showCustomers: boolean = false;
  @Input() showCartItems: boolean = false;
  @Input() isFormOpen: boolean = false;
  @Input() isItemFormOpen: boolean = false;
  @Input() listOfCustomers: Customer[] = [];
  @Input() listOfItems: Item[] = [];
  @Input() listOfCartItems: CartItem[] = [];
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Input() sum: number;
  
  @Output() saveEvent: EventEmitter<Customer> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<Customer> = new EventEmitter();
  @Output() saveItemEvent: EventEmitter<Item> = new EventEmitter();
  @Output() deleteItemEvent: EventEmitter<Item> = new EventEmitter();
  @Output() viewCartEvent : EventEmitter<number> = new EventEmitter();
  @Output() addToCartEvent: EventEmitter<CartItem> = new EventEmitter();
  @Output() changeOptionEvent : EventEmitter<Customer> = new EventEmitter();
  @Output() deleteCartItemEvent : EventEmitter<CartItem> = new EventEmitter();
  @Output() clearCartEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSave(cust: Customer): void {
    this.saveEvent.emit(cust);
  }

  handleDelete(cust: Customer): void {
    this.deleteEvent.emit(cust);
  }

  handleSaveItem(it: Item): void {
    this.saveItemEvent.emit(it);  
  }

  handleDeleteItem(it: Item): void {
    this.deleteItemEvent.emit(it);
  }

  handleViewCart(id: number): void{
    this.viewCartEvent.emit(id);
  }

  handleAddToCart(cartItem: CartItem): void{
    this.addToCartEvent.emit(cartItem);
  }

  handleChangeOption(customer: Customer): void{
    this.changeOptionEvent.emit(customer);
  }

  handleDeleteCartItem(cartItem: CartItem): void{
    this.deleteCartItemEvent.emit(cartItem);
  }

  handleClearCart(id: number): void {
    this.clearCartEvent.emit(id);
  }

}

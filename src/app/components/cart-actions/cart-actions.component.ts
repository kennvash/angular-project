import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-cart-actions',
  templateUrl: './cart-actions.component.html',
  styleUrls: ['./cart-actions.component.scss']
})
export class CartActionsComponent implements OnInit {

  @Input() listOfCartItems: CartItem[] = [];
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Input() sum: number;

  @Output() clearCartEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClearCart(): void{
    this.clearCartEvent.emit(this.customer.id);
  }

}

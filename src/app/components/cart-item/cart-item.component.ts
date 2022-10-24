import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cart: CartItem = {
    quantity : 0,
    cost : 0,
  }

  @Output() deleteCartItemEvent : EventEmitter<CartItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(): void{
    this.deleteCartItemEvent.emit(this.cart);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() viewCustomerEvent: EventEmitter<string> = new EventEmitter();
  @Output() viewItemsEvent: EventEmitter<string> = new EventEmitter();
  @Output() addCustomerEvent: EventEmitter<string> = new EventEmitter();
  @Output() addItemEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewCustomers(): void {
    this.viewCustomerEvent.emit("view");  
  }

  viewItems(): void {
    this.viewItemsEvent.emit("view");  
  }

  addCustomer(): void {
    this.addCustomerEvent.emit("add");
  }

  addItem(): void {
    this.addItemEvent.emit("add");
  }

}

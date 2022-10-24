import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {

  @Input() listOfCustomers: Customer[] = [];
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }

  selectedOption: any;

  @Output() viewCartEvent : EventEmitter<number> = new EventEmitter();
  @Output() changeOptionEvent : EventEmitter<Customer> = new EventEmitter();

  items: string[] = [ "t1", "t2", "t3"];

  constructor() { 
  }

  ngOnInit(): void {
  }

  handleViewCart() {
    this.selectedOption = Number.parseInt(this.selectedOption);
    //console.log(this.listOfCustomers.find(c => c.id == this.selectedOption));
    this.viewCartEvent.emit(this.selectedOption);
  }

  handleChangeOption(){
    this.selectedOption = Number.parseInt(this.selectedOption);
    this.changeOptionEvent.emit(this.listOfCustomers.find(c => c.id == this.selectedOption));
  }

}

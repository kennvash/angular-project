import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-list-of-customers',
  templateUrl: './list-of-customers.component.html',
  styleUrls: ['./list-of-customers.component.scss']
})
export class ListOfCustomersComponent implements OnInit {
  @Input() listOfCustomers: Customer[] = [];
  @Input() isFormOpen: boolean = false;
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Output() saveEvent: EventEmitter<Customer> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<Customer> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(cust: Customer): void {
    this.deleteEvent.emit(cust);
  }

  handleSave(cust: Customer): void{
    this.saveEvent.emit(cust);
    this.isFormOpen = false;
  }

  handleEdit(cust: Customer): void{
    let o = {...cust}
    this.customer = o;
    this.isFormOpen = true;  
  }

}

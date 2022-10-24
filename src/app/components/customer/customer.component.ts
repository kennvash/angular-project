import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer;
  @Output() deleteEvent: EventEmitter<Customer> = new EventEmitter();
  @Output() editEvent: EventEmitter<Customer> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(): void{
    this.deleteEvent.emit(this.customer);
  }

  handleEdit(): void{
    this.editEvent.emit(this.customer);
  }

}

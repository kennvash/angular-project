import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  
  @Input() isFormOpen: boolean = false;
  @Input() customer: Customer = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: ""
  }
  @Output() saveEvent: EventEmitter<Customer> = new EventEmitter();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  handleSave(): void {
    let c = {...this.customer};

    this.customerService.saveCustomer(c).subscribe((cust) => {
      this.saveEvent.emit(cust);
      this.customer.id = undefined;
      this.customer.firstName = "";
      this.customer.lastName = "";
      this.customer.email = "";
      this.customer.address = "";
      this.customer.contactNumber = "";
    })
  }

}

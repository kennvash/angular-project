import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5149/customers';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    if(!customer.id) {
      return this.http.post<Customer>(this.apiUrl, customer, httpOptions);
    } else {
      const url = `${this.apiUrl}/${customer.id}`;
      return this.http.put<Customer>(url, customer, httpOptions);
    }
  }

  deleteCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.delete<Customer>(url);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Customer>(url);
  }

}

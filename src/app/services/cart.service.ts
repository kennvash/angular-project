import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { Customer } from '../interfaces/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5149/cart_items';

  getCartItems(id: number): Observable<CartItem[]> {
    const url = `${this.apiUrl}/customers/${id}`;
    return this.http.get<CartItem[]>(url);
  }

  addCartItem(cartItem: CartItem): Observable<CartItem> {
    if(!cartItem.id){
      return this.http.post<CartItem>(this.apiUrl, cartItem, httpOptions);
    } else {
      const url = `${this.apiUrl}/${cartItem.id}`;
      return this.http.put<CartItem>(url, cartItem, httpOptions);
    }
  }

  deleteCartItem(cartItem: CartItem): Observable<CartItem> {
    const url = `${this.apiUrl}/${cartItem.id}`;
    return this.http.delete<CartItem>(url);  
  }

  clearCart(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/clear/${id}`;
    return this.http.delete<boolean>(url);  
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../interfaces/item';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5149/items';

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  saveItem(item: Item): Observable<Item> {
    if(!item.id) {
      return this.http.post<Item>(this.apiUrl, item, httpOptions);
    } else {
      const url = `${this.apiUrl}/${item.id}`;
      return this.http.put<Item>(url, item, httpOptions);
    }
  }

  deleteCustomer(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<Item>(url);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  cartNumber: WritableSignal<number>=signal(0)

  headers: any = { token: localStorage.getItem('userToken') };

  numCartItems: BehaviorSubject<number> = new BehaviorSubject(0);

  addCart(id: string): Observable<any> {
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/cart`,

      {
        productId: id,
      }
    );
  }

  getCart(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`, {});
  }

  deleteCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(
      `${environment.baseUrl}/api/v1/cart/${id}`,
      {}
    );
  }

  updateCart(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`, {
      count: count,
    });
  }

  checkout(id: any, cartDetails: object): Observable<any> {
    // let currentUrl = window.location.host;
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200/FreshCart`,
      {
        shippingAddress: cartDetails,
      }
    );
  }

  ordersDetails(id: any): Observable<any> {
    return this._HttpClient.get(
      `${environment.baseUrl}/api/v1/orders/user/${id}`
    );
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`, {});
  }
}

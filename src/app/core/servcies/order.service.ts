import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  headers: any = { token: localStorage.getItem('userToken') };
  constructor(private _HttpClient: HttpClient) {}
  checkout(id: any, cartDetails: object): Observable<any> {
    // let currentUrl = window.location.host;
    return this._HttpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200/FreshCart`,
      {
        shippingAddress: cartDetails,
      }
    );
  }
}

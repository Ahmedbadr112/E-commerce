import{k as l,z as e}from"./chunk-NRSPPHHT.js";import{S as n,X as o,bb as p,g as s}from"./chunk-Y3K4MGWQ.js";var b=(()=>{let r=class r{constructor(t){this._HttpClient=t,this.cartNumber=p(0),this.headers={token:localStorage.getItem("userToken")},this.numCartItems=new s(0)}addCart(t){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:t})}getCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`,{})}deleteCartItem(t){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${t}`,{})}updateCart(t,i){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${t}`,{count:i})}checkout(t,i){return this._HttpClient.post(`${e.baseUrl}/api/v1/orders/checkout-session/${t}?url=http://localhost:4200/FreshCart`,{shippingAddress:i})}ordersDetails(t){return this._HttpClient.get(`${e.baseUrl}/api/v1/orders/user/${t}`)}clearCart(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart`,{})}};r.\u0275fac=function(i){return new(i||r)(o(l))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let a=r;return a})();export{b as a};

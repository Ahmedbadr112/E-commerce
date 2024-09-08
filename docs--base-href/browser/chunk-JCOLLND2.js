import{l as v}from"./chunk-JDUQ4DCI.js";import{a as C,b as d,c as I,d as F,e as E,f as c,h as N,i as _,j as A,n as D}from"./chunk-KGRFRDJE.js";import{e as y,g as S}from"./chunk-25Q7XG66.js";import{a as w}from"./chunk-TEMWAYY4.js";import{w as k}from"./chunk-QPXOLKJM.js";import{Ab as b,Ib as s,Pb as x,Ra as f,S as m,X as p,Y as a,ba as g,jb as h,rb as n,sb as r,tb as l}from"./chunk-JVHKVP6Q.js";import"./chunk-YHOLSLLF.js";var R=(()=>{let t=class t{constructor(e){this._HttpClient=e,this.headers={token:localStorage.getItem("userToken")}}checkout(e,o){return this._HttpClient.post(`${w.baseUrl}/api/v1/orders/checkout-session/${e}?url=http://localhost:4200/FreshCart`,{shippingAddress:o})}};t.\u0275fac=function(o){return new(o||t)(p(k))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var B=(()=>{let t=class t{constructor(){this.cartId="",this._ActivatedRoute=a(y),this._OrderService=a(R),this._Router=a(S),this._Toaster=a(v),this.orders=new E({details:new c(null,[d.required]),phone:new c(null,[d.required,d.pattern(/^01[0125][0-9]{8}$/)]),city:new c(null,[d.required])})}orderSubmit(){this.orders.valid&&this.cartId&&(this.orderSubscription=this._OrderService.checkout(this.cartId,this.orders.value).subscribe({next:e=>{console.log(e),e.status==="success"&&(this._Toaster.success("Checkout completed successfully"),window.open(e.session.url))},error:e=>{console.log(e)}}))}ngOnInit(){this.routeSubscription=this._ActivatedRoute.paramMap.subscribe({next:e=>{this.cartId=e.get("id"),console.log(this.cartId)},error:e=>{console.log(e)}})}ngOnDestroy(){this.routeSubscription&&this.routeSubscription.unsubscribe(),this.orderSubscription&&this.orderSubscription.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g({type:t,selectors:[["app-orders"]],standalone:!0,features:[x],decls:18,vars:1,consts:[[1,"bg-main-light","p-10","rounded","w-5/6","container","my-5","shadow-lg","mx-auto"],[1,"text-main","text-2xl","text-center"],[1,"w-full",3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["formControlName","details","id","details","type","text",1,"bg-gray-50","border","w-full","border-gray-300","shadow-md","text-green-900","text-main","text-xl","rounded-lg","focus:ring-green-500","focus:border-green-500","block","p-2.5","dark:bg-green-700","dark:border-green-600","dark:placeholder-green-400","dark:text-white","dark:focus:ring-green-500","dark:focus:border-green-500"],["for","city"],["formControlName","city","id","city","type","text",1,"bg-gray-50","border","w-full","border-gray-300","shadow-md","text-green-900","text-main","text-xl","rounded-lg","focus:ring-green-500","focus:border-green-500","block","p-2.5","dark:bg-green-700","dark:border-green-600","dark:placeholder-green-400","dark:text-white","dark:focus:ring-green-500","dark:focus:border-green-500"],["for","phone"],["formControlName","phone","id","phone","type","tel",1,"bg-gray-50","border","w-full","border-gray-300","shadow-md","text-green-900","text-main","text-xl","rounded-lg","focus:ring-green-500","focus:border-green-500","block","p-2.5","dark:bg-green-700","dark:border-green-600","dark:placeholder-green-400","dark:text-white","dark:focus:ring-green-500","dark:focus:border-green-500"],[1,"btn-main","my-5","capitalize"]],template:function(o,u){o&1&&(n(0,"section",0)(1,"h1",1),s(2,"shipping Adaress"),r(),n(3,"form",2),b("ngSubmit",function(){return u.orderSubmit()}),n(4,"div",3)(5,"label",4),s(6,"Details"),r(),l(7,"input",5),r(),n(8,"div",3)(9,"label",6),s(10,"City"),r(),l(11,"input",7),r(),n(12,"div",3)(13,"label",8),s(14,"Phone"),r(),l(15,"input",9),r(),n(16,"button",10),s(17,"check out"),r()()()),o&2&&(f(3),h("formGroup",u.orders))},dependencies:[D,N,C,I,F,_,A]});let i=t;return i})();export{B as OrdersComponent};

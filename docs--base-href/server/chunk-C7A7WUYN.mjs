import './polyfills.server.mjs';
import{a as V,b as B}from"./chunk-LYER4OVC.mjs";import{a as N}from"./chunk-VCBAKMBV.mjs";import{a as L}from"./chunk-VMW56LYA.mjs";import{a as I}from"./chunk-3HSPO6ZH.mjs";import"./chunk-GTSSCL6B.mjs";import{a as M,c as j,g as A,m as D}from"./chunk-BNFSVXWF.mjs";import"./chunk-33UHMESW.mjs";import{H as F,k as P}from"./chunk-GL55N7YM.mjs";import{Bb as k,Cb as C,Jb as c,Kb as w,Lb as u,Pa as v,Qb as T,Rb as E,Ta as a,Vb as g,Xb as x,Y as p,ba as f,la as b,lb as m,ma as h,qb as y,rb as S,sb as t,tb as d,ub as l,xb as _}from"./chunk-24BIQJS2.mjs";import"./chunk-VVCT4QZE.mjs";var O=(i,r)=>r.id,$=i=>["/details",i];function z(i,r){if(i&1){let o=_();t(0,"div",3)(1,"div",4),l(2,"img",5),t(3,"div",6)(4,"div")(5,"h4",7),c(6),d(),t(7,"h5",8),c(8),g(9,"term"),d()(),t(10,"div",9)(11,"span",10),c(12),g(13,"currency"),d(),t(14,"span"),c(15),t(16,"span",11),l(17,"i",12),d()()()()(),t(18,"button",13),k("click",function(){let e=b(o).$implicit,s=C();return h(s.addToCart(e.id))}),c(19," Add to cart "),t(20,"span"),l(21,"i",14),d()()()}if(i&2){let o=r.$implicit;a(),m("routerLink",E(13,$,o.id)),a(),m("src",o.imageCover,v)("alt",o.title),a(4),u(" ",o.category.name," "),a(2),u(" ",x(9,7,o.title,2)," "),a(4),w(x(13,10,o.price,"EGP ")),a(3),u("",o.ratingsAverage," ")}}var ee=(()=>{let r=class r{constructor(){this._product=p(N),this._CartService=p(L),this._Toaster=p(I),this.productList=[],this.text=""}ngOnInit(){this.productSubscription=this._product.getAllProducts().subscribe({next:n=>{console.log(n.data),this.productList=n.data},error:n=>{console.log(n)}})}addToCart(n){this._CartService.addCart(n).subscribe({next:e=>{console.log(e),this._Toaster.success("product added successfully"),this._CartService.cartNumber.set(e.numOfCartItems)},error:e=>{console.log(e)}})}ngOnDestroy(){this.productSubscription?.unsubscribe()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f({type:r,selectors:[["app-product"]],standalone:!0,features:[T],decls:8,vars:4,consts:[[1,"text-main","text-4xl","text-center","align-top","my-5"],["type","search","placeholder","search by name",1,"bg-gray-50","border","w-96","my-2","mx-auto","border-gray-300","shadow-md","text-green-900","text-main","text-xl","rounded-lg","focus:ring-green-500","focus:border-green-500","block","p-2.5","dark:bg-green-700","dark:border-green-600","dark:placeholder-green-400","dark:text-white","dark:focus:ring-green-500","dark:focus:border-green-500",3,"ngModel"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-6","px-5","gap-4","w-fit","mx-auto","my-5"],[1,"max-w-sm","px-2","product","bg-white","border","border-green-200","rounded-lg","shadow","flex","flex-col","justify-center","dark:bg-green-800","dark:border-green-700"],[3,"routerLink"],["width","250px","height",`200px
  `,1,"rounded-t-lg","object-cover",3,"src","alt"],[1,"p-5"],[1,"text-md","text-green-500","capitalize","text-left"],[1,"mb-2","text-xl","text-left","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"flex","flex-row","justify-between","my-3","items-center"],[1,"text-xl","text-gray-700","font-bold"],[1,"text-yellow-300"],[1,"fa-solid","fa-star"],[1,"btn-main","rounded-md","mb-3","px-2","block","ms-auto",3,"click"],[1,"fa-solid","fa-cart-shopping"]],template:function(e,s){e&1&&(t(0,"section")(1,"h2",0),c(2,"popular product"),d(),l(3,"input",1),t(4,"div",2),y(5,z,22,15,"div",3,O),g(7,"search"),d()()),e&2&&(a(3),m("ngModel",s.text),a(2),S(x(7,1,s.productList,s.text)))},dependencies:[F,V,B,P,D,M,j,A]});let i=r;return i})();export{ee as ProductComponent};

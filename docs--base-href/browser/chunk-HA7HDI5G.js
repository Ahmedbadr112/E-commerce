import{b as D}from"./chunk-WVN7EU43.js";import{a as L}from"./chunk-C3EXT267.js";import{a as F}from"./chunk-TOQHFOC2.js";import{l as P}from"./chunk-JDUQ4DCI.js";import{a as I,c as M,g as j,m as A}from"./chunk-KGRFRDJE.js";import"./chunk-25Q7XG66.js";import"./chunk-TEMWAYY4.js";import{p as E}from"./chunk-QPXOLKJM.js";import{Ab as C,Bb as k,Ib as c,Jb as w,Kb as m,Na as v,Pb as T,Ra as n,Ub as g,Wb as x,Y as p,ba as f,jb as u,la as b,ma as h,pb as y,qb as S,rb as t,sb as a,tb as s,wb as _}from"./chunk-JVHKVP6Q.js";import"./chunk-YHOLSLLF.js";var V=(d,r)=>r.id;function N(d,r){if(d&1){let o=_();t(0,"div",3)(1,"div"),s(2,"img",4),t(3,"div",5)(4,"div")(5,"h4",6),c(6),a(),t(7,"h5",7),c(8),g(9,"term"),a()(),t(10,"div",8)(11,"span",9),c(12),g(13,"currency"),a(),t(14,"span"),c(15),t(16,"span",10),s(17,"i",11),a()()()()(),t(18,"button",12),C("click",function(){let e=b(o).$implicit,l=k();return h(l.addToCart(e.id))}),c(19," Add to cart "),t(20,"span"),s(21,"i",13),a()()()}if(d&2){let o=r.$implicit;n(2),u("src",o.imageCover,v)("alt",o.title),n(4),m(" ",o.category.name," "),n(2),m(" ",x(9,6,o.title,2)," "),n(4),w(x(13,9,o.price,"EGP ")),n(3),m(" ",o.ratingsAverage," ")}}var W=(()=>{let r=class r{constructor(){this._product=p(L),this._CartService=p(F),this._Toaster=p(P),this.productList=[],this.text=""}ngOnInit(){this.productSubscription=this._product.getAllProducts().subscribe({next:i=>{console.log(i.data),this.productList=i.data},error:i=>{console.log(i)}})}addToCart(i){this._CartService.addCart(i).subscribe({next:e=>{console.log(e),this._Toaster.success("Product added successfully"),this._CartService.cartNumber.set(e.numOfCartItems)},error:e=>{console.error("Error adding product to cart:",e),this._Toaster.error("Failed to add product to cart")}})}ngOnDestroy(){this.productSubscription?.unsubscribe()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f({type:r,selectors:[["app-product"]],standalone:!0,features:[T],decls:7,vars:1,consts:[[1,"text-main","text-4xl","text-center","align-top","my-5"],["type","search","placeholder","search by name",1,"bg-gray-50","border","w-96","my-2","mx-auto","border-gray-300","shadow-md","text-green-900","text-main","text-xl","rounded-lg","focus:ring-green-500","focus:border-green-500","block","p-2.5","dark:bg-green-700","dark:border-green-600","dark:placeholder-green-400","dark:text-white","dark:focus:ring-green-500","dark:focus:border-green-500",3,"ngModel"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-6","px-5","gap-4","w-fit","mx-auto","my-5"],[1,"max-w-sm","px-2","product","bg-white","border","border-green-200","rounded-lg","shadow","flex","flex-col","justify-center","dark:bg-green-800","dark:border-green-700"],["width","250px","height","200px",1,"rounded-t-lg","object-cover",3,"src","alt"],[1,"p-5"],[1,"text-md","text-green-500","capitalize","text-left"],[1,"mb-2","text-xl","text-left","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"flex","flex-row","justify-between","my-3","items-center"],[1,"text-xl","text-gray-700","font-bold"],[1,"text-yellow-300"],[1,"fa-solid","fa-star"],[1,"btn-main","rounded-md","mb-3","px-2","block","ms-auto",3,"click"],[1,"fa-solid","fa-cart-shopping"]],template:function(e,l){e&1&&(t(0,"section")(1,"h2",0),c(2,"popular product"),a(),s(3,"input",1),t(4,"div",2),y(5,N,22,12,"div",3,V),a()()),e&2&&(n(3),u("ngModel",l.text),n(2),S(l.productList))},dependencies:[D,E,A,I,M,j]});let d=r;return d})();export{W as ProductComponent};

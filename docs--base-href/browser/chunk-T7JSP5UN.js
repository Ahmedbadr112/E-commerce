import{a as E}from"./chunk-XRTL2YCD.js";import{s as y}from"./chunk-NRSPPHHT.js";import{Ab as P,Hb as n,Ib as s,Jb as u,Na as f,Ob as h,Ra as i,Y as m,ba as x,hb as v,jb as g,nb as S,qb as t,rb as e,sb as p}from"./chunk-Y3K4MGWQ.js";import"./chunk-YHOLSLLF.js";function w(l,a){if(l&1&&(t(0,"section",1)(1,"div",2),p(2,"img",3),e(),t(3,"div")(4,"h3",4),n(5),e(),t(6,"p",5),n(7),e(),t(8,"h4",6),n(9),e(),t(10,"div",7)(11,"p"),n(12),e(),t(13,"span"),n(14),t(15,"span",8),p(16,"i",9),e()()(),t(17,"button",10),n(18,"add to cart"),e()()()),l&2){let o=P();i(2),g("src",o.detailProduct.imageCover,f)("alt",o.detailProduct.title),i(3),s(o.detailProduct.title),i(2),s(o.detailProduct.description),i(2),s(o.detailProduct.category.name),i(3),u("",o.detailProduct.price," Egp"),i(2),u("",o.detailProduct.ratingsAverage," ")}}var D=(()=>{let a=class a{constructor(){this._ActivatedRoute=m(y),this._productsService=m(E),this.detailProduct=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:c=>{console.log(c.get("id"));let r=c.get("id");this._productsService.getSpecifcProducts(r).subscribe({next:d=>{console.log(d.data),this.detailProduct=d.data},error:d=>{console.log(d)}})}})}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-details"]],standalone:!0,features:[h],decls:3,vars:1,consts:[[1,"text-main","text-4xl","text-center","my-5"],[1,"flex","flex-row","justify-center","items-center"],[1,"w-96"],[1,"w-full","h-96","p-10",3,"src","alt"],[1,"text-main","text-2xl"],[1,"text-gray-400"],[1,"text-main","text-lg"],[1,"flex","flex-row","justify-between","items-center"],[1,"text-yellow-300"],[1,"fa-solid","fa-star"],[1,"btn-main","w-full","my-5"]],template:function(r,d){r&1&&(t(0,"h2",0),n(1,"Details product"),e(),v(2,w,19,7,"section",1)),r&2&&(i(2),S(2,d.detailProduct?2:-1))}});let l=a;return l})();export{D as DetailsComponent};

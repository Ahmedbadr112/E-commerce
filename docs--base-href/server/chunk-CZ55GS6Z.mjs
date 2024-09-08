import './polyfills.server.mjs';
import{a}from"./chunk-33UHMESW.mjs";import{k as u}from"./chunk-4GY4JHMW.mjs";import{A as p}from"./chunk-MN3YDCBD.mjs";import{S as c,Y as l}from"./chunk-SEVF4SD4.mjs";var s=class extends Error{};s.prototype.name="InvalidTokenError";function f(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function h(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(t)}catch{return atob(t)}}function d(r,t){if(typeof r!="string")throw new s("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new s(`Invalid token specified: missing part #${o+1}`);let i;try{i=h(e)}catch(n){throw new s(`Invalid token specified: invalid base64 for part #${o+1} (${n.message})`)}try{return JSON.parse(i)}catch(n){throw new s(`Invalid token specified: invalid json for part #${o+1} (${n.message})`)}}var k=(()=>{let t=class t{constructor(){this.userData=null,this._HttpClient=l(p),this._Router=l(u)}setRegisterForm(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signup`,e)}setLoginForm(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signin`,e)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=d(localStorage.getItem("userToken")),console.log(this.userData))}logOut(){localStorage.removeItem("userToken"),this.userData=null,this._Router.navigate(["/login"])}setEmailVerify(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/forgotPasswords`,e)}setCodeVerify(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/verifyResetCode`,e)}resetPasswordVerify(e){return this._HttpClient.put(`${a.baseUrl}/api/v1/auth/resetPassword`,e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{k as a};

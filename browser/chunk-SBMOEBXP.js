import{c as s,ga as a,qa as r,r as o,v as n}from"./chunk-MZPMHGPU.js";var d=(()=>{let e=class e{constructor(){this.http=n(a),this.isLoggedIn$=new s(!1)}registerServices(t){return this.http.post(`${r.authServicesApi}register`,t)}loginServices(t){return this.http.post(`${r.authServicesApi}login`,t)}sendEmailServices(t){return this.http.post(`${r.authServicesApi}send-email`,{email:t})}resetPasswordServices(t){return this.http.post(`${r.authServicesApi}reset-password`,t)}isLoggedIn(){return!!localStorage.getItem("user_id")}};e.\u0275fac=function(p){return new(p||e)},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{d as a};

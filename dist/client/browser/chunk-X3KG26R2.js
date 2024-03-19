import{a as D}from"./chunk-STUMMSUX.js";import{a as E,b as d,c as y,d as C,g as _,h as N,i as k,k as M,m as P}from"./chunk-NXV37NDV.js";import{E as f,G as u,H as g,I as p,J as t,K as o,L as v,N as b,R as n,Y as h,ha as F,j as c,oa as x,pa as S,ra as w,v as s,z as m}from"./chunk-JMJQYBQP.js";function G(r,e){r&1&&(t(0,"span",10),n(1,"*Email is required"),o())}function R(r,e){r&1&&(t(0,"span",10),n(1,"*Email is invalid"),o())}var z=(()=>{let e=class e{constructor(){this.fb=s(M),this.authService=s(D),this.router=s(x)}ngOnInit(){this.forgetForm=this.fb.group({email:["",d.compose([d.required,d.email])]})}submit(){this.authService.sendEmailServices(this.forgetForm.value.email).subscribe({next:a=>{alert(a.message),this.forgetForm.reset()},error:a=>{alert(a.error.message)}})}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=c({type:e,selectors:[["app-forget-password"]],standalone:!0,features:[h],decls:15,vars:6,consts:[[1,"lg:w-3/12","mt-5","p-10","shadow-2xl","mx-auto"],[1,"text-3xl","text-center","font-semibold","py-5"],[1,"flex","flex-col",3,"formGroup"],[1,"mb-4"],[1,"flex","flex-col","mt-4","mb-1"],["name","email","formControlName","email","type","text","placeholder","Email",1,"p-2","border","border-gray-300","rounded"],["class","text-red-500"],[1,"mt-2"],[1,"bg-indigo-500","w-1/4","mr-3","p-2","text-white","rounded","mt-3",3,"disabled","click"],["routerLink","/login",1,"bg-gray-500","w-1/4","p-2","rounded-md","text-gray-50"],[1,"text-red-500"]],template:function(l,i){l&1&&(t(0,"div",0)(1,"h3",1),n(2,"Forget Password"),o(),t(3,"form",2)(4,"span",3),n(5," Enter Your email and we'll send you instructions on how to reset your password "),o(),t(6,"div",4),v(7,"input",5),f(8,G,2,0,"span",6)(9,R,2,0,"span",6),o(),t(10,"div",7)(11,"button",8),b("click",function(){return i.submit()}),n(12," Submit "),o(),t(13,"button",9),n(14," Cancel "),o()()()()),l&2&&(m(3),u("formGroup",i.forgetForm),m(5),p(8,i.forgetForm.hasError("required","email")&&i.forgetForm.controls.email.dirty?8:-1),m(),p(9,i.forgetForm.hasError("email","email")?9:-1),m(2),g("disabled",i.forgetForm.invalid),u("disabled",i.forgetForm.invalid))},dependencies:[F,P,_,E,y,C,N,k,w,S]});let r=e;return r})();export{z as default};
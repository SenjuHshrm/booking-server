"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[237],{5237:(M,c,n)=>{n.r(c),n.d(c,{AdminModule:()=>y});var r=n(6895),d=n(1321),o=n(4650),a=n(9299),u=n(5861);const m=function(){var t=(0,u.Z)(function*(){const s=(0,o.f3M)(d.B),i=(0,o.f3M)(a.F0);return!!s.decodedToken().access.includes("admin")||(i.navigateByUrl("/"),!1)});return function(){return t.apply(this,arguments)}}();var h=n(3825);const v=[{path:"",component:(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-admin"]],decls:1,vars:0,template:function(e,A){1&e&&o._UZ(0,"router-outlet")},dependencies:[a.lC]})}return t})(),children:[{path:"login",loadChildren:()=>n.e(247).then(n.bind(n,9247)).then(t=>t.LoginModule),canActivate:[()=>{const t=(0,o.f3M)(a.F0),s=(0,o.f3M)(d.B);return null===s.getToken()||!s.decodedToken().access.includes("admin")||(t.navigateByUrl("/admin/home"),!1)}]},{path:"home",loadChildren:()=>n.e(844).then(n.bind(n,7844)).then(t=>t.HomeModule),canActivate:[n(5107).p,m],resolve:{data:h.w}},{path:"",redirectTo:"login",pathMatch:"prefix"}]}];let g=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=o.oAB({type:t});static#o=this.\u0275inj=o.cJS({imports:[a.Bz.forChild(v),a.Bz]})}return t})(),y=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=o.oAB({type:t});static#o=this.\u0275inj=o.cJS({imports:[r.ez,g]})}return t})()}}]);
"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[4672],{4672:(O,r,e)=>{e.r(r),e.d(r,{AccountsSettingsModule:()=>m});var a=e(6895),s=e(9299),d=e(2972),t=e(4650),l=e(7392);function p(n,u){if(1&n){const c=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(c);const o=t.oxw();return t.KtG(o.toggleSidePanel())}),t.TgZ(1,"mat-icon"),t._uU(2,"menu"),t.qZA()()}}const h=function(n,u){return{open:n,close:u}},P=function(n){return{display:n}},C=[{path:"",component:(()=>{class n{constructor(c){this.router=c,this.togglePanel=!1,this.checkScreenWidth()}onResize(c){this.checkScreenWidth()}ngOnInit(){}checkScreenWidth(){const c=window.innerWidth;this.isScreenWidthLessThan700px=c<700,console.log(this.isScreenWidthLessThan700px),this.togglePanel=this.isScreenWidthLessThan700px}goToLoginSecurity(){this.router.navigate(["main/accounts-settings/security-settings"]),this.toggleSidePanel()}goToPaymentsWalletSetting(){this.router.navigate(["main/accounts-settings/payment-wallet-settings"]),this.toggleSidePanel()}goToPayoutSettings(){this.router.navigate(["main/accounts-settings/payout-settings"]),this.toggleSidePanel()}goToAccountVerification(){this.router.navigate(["main/accounts-settings/account-verification"]),this.toggleSidePanel()}toggleSidePanel(){this.togglePanel=!this.togglePanel}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-accounts-settings"]],hostBindings:function(i,o){1&i&&t.NdJ("resize",function(M){return o.onResize(M)},!1,t.Jf7)},decls:18,vars:12,consts:[[1,"account-settings"],[1,"account-settings-account-settings-wrapper"],[1,"account-settings-content"],[1,"header"],["class","button_white_circle",3,"click",4,"ngIf"],[1,"title"],[1,"content"],[1,"tabs",3,"ngClass"],["routerLink","security-settings",3,"routerLinkActive","click"],["routerLink","payment-wallet-settings",3,"routerLinkActive","click"],["routerLink","account-verification",3,"routerLinkActive","click"],[1,"backdrop",3,"ngStyle","click"],[1,"info"],[1,"button_white_circle",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3),t.YNc(4,p,3,0,"button",4),t.TgZ(5,"div",5),t._uU(6,"Account Settings"),t.qZA()(),t.TgZ(7,"div",6)(8,"div",7)(9,"button",8),t.NdJ("click",function(){return o.goToLoginSecurity()}),t._uU(10,"Login & Security"),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return o.goToPaymentsWalletSetting()}),t._uU(12,"Payment Settings"),t.qZA(),t.TgZ(13,"button",10),t.NdJ("click",function(){return o.goToAccountVerification()}),t._uU(14,"Account Verification"),t.qZA()(),t.TgZ(15,"div",11),t.NdJ("click",function(){return o.toggleSidePanel()}),t.qZA(),t.TgZ(16,"div",12),t._UZ(17,"router-outlet"),t.qZA()()()()()),2&i&&(t.Q6J("@fadeInAnimation",void 0),t.xp6(4),t.Q6J("ngIf",o.isScreenWidthLessThan700px),t.xp6(4),t.Q6J("ngClass",t.WLB(7,h,!1===o.togglePanel,!0===o.togglePanel)),t.xp6(1),t.Q6J("routerLinkActive","active"),t.xp6(2),t.Q6J("routerLinkActive","active"),t.xp6(2),t.Q6J("routerLinkActive","active"),t.xp6(2),t.Q6J("ngStyle",t.VKq(10,P,o.togglePanel?"none":"block")))},dependencies:[a.mk,a.O5,a.PC,s.lC,s.rH,s.Od,l.Hw],styles:[".account-settings[_ngcontent-%COMP%]{flex:1 0 100%!important;height:90vh;display:flex;flex-direction:column;padding:1rem}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]{font-family:Poppins-Regular;flex:1;display:flex;flex-direction:column;height:100%}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]{width:100%;flex:1;display:flex;flex-direction:column;height:100%}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex:0;display:flex;align-items:center}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:bolder;font-size:clamp(1.2rem,1.5vw,8rem);padding:0 1rem}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button_white_circle[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content;margin-left:1rem}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:flex;height:100%;overflow-y:auto;margin-top:1rem}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{flex:0 16rem;display:flex;flex-direction:column;padding:0rem 1rem 0;height:100%}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;box-shadow:1px 1px 5px #8887;border:none;cursor:pointer;margin-bottom:1rem;padding:1rem;border-radius:10px;font-family:Poppins-Regular;font-weight:700;color:#000;border:2px solid white}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{font-weight:700;border:2px solid #63AB68;color:#63ab68}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;height:100vh;overflow-y:auto!important;border:1px solid #e4e4e4;padding:1rem;border-radius:10px;height:100%;overflow-y:auto}@media only screen and (max-width: 700px){.account-settings[_ngcontent-%COMP%]{padding:0;overflow-y:auto}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]{height:100%;overflow-y:auto}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]{height:100%;overflow-y:auto;padding:1rem 0 0rem}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1;flex-direction:column;height:100%;overflow-y:auto;position:relative;gap:0}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{padding:0;position:absolute;z-index:50;top:0;left:-550px;bottom:0;width:100%;max-width:16rem;background-color:#fff;box-shadow:1px 1px 5px #8887;border:1px solid rgb(221,221,221);transition:transform .3s ease}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:pre;background-color:#fff;box-shadow:none;border:none;cursor:pointer;margin-bottom:0;padding:1rem;border-radius:0;font-family:Poppins-Regular;font-weight:700;color:#000;border:1px solid white;border-left:0;border-right:0;border-top:0;border-bottom:1px solid rgb(196,196,196)}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{font-weight:700;border:1px solid #63AB68;border-left:0;border-right:0;border-top:0;color:#63ab68}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%]{transform:translate(550px);transition:transform .3s ease}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{left:-550px;transition:transform .3s ease}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%]{position:absolute;background-color:#0000005d;inset:0;z-index:40}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{border-radius:0;flex:1;height:100%}}@media only screen and (max-width: 500px){.account-settings[_ngcontent-%COMP%]{padding:0}.account-settings-account-settings-wrapper[_ngcontent-%COMP%]   .account-settings-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{font-weight:700;border:1px solid #63AB68;border-left:0;border-right:0;border-top:0;color:#63ab68}}"],data:{animation:[d.B]}})}return n})(),children:[{path:"security-settings",loadChildren:()=>e.e(9322).then(e.bind(e,9322)).then(n=>n.SecuritySettingsModule),title:"TaraGo | Security Settings"},{path:"payment-wallet-settings",loadChildren:()=>Promise.all([e.e(8592),e.e(2497)]).then(e.bind(e,2497)).then(n=>n.PaymentWalletSettingsModule),title:"TaraGo | Payment Method"},{path:"payout-settings",loadChildren:()=>Promise.all([e.e(8592),e.e(102)]).then(e.bind(e,102)).then(n=>n.PayoutSettingsModule),title:"TaraGo | Payment Method"},{path:"account-verification",loadChildren:()=>Promise.all([e.e(3848),e.e(9096)]).then(e.bind(e,9096)).then(n=>n.AccountVerificationModule),title:"TaraGo | Payment Method"},{path:"",redirectTo:"security-settings",pathMatch:"prefix"}]}];let f=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(C),s.Bz]})}return n})(),m=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[a.ez,f,l.Ps]})}return n})()}}]);
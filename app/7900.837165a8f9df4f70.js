"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[7900],{7900:(v,c,e)=>{e.r(c),e.d(c,{CustomerDashboardModule:()=>b});var r=e(6895),i=e(9299),m=e(2972),t=e(4650),g=e(3071);const d=function(n){return{active:n}};function u(n,l){if(1&n&&(t.TgZ(0,"div",9)(1,"div"),t._UZ(2,"img",10),t.qZA(),t.TgZ(3,"div")(4,"p"),t._uU(5),t.qZA()()()),2&n){const o=l.$implicit,a=l.index,s=t.oxw(2);t.Q6J("ngClass",t.VKq(4,d,a===s.activeIndex)),t.xp6(2),t.MGl("alt","Image ",a,""),t.Q6J("src",o.image,t.LSH),t.xp6(3),t.Oqu(o.text)}}function p(n,l){if(1&n&&(t.TgZ(0,"div",7),t.YNc(1,u,6,6,"div",8),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.items)}}const C=[{path:"",component:(()=>{class n{constructor(o,a,s){this.router=o,this.route=a,this._user=s,this.instro=!1,this.isActive=!1,this.activeIndex=0,this.isReservationPath=!1,this.items=[{image:"../assets/images/proprietor-registration/girl.png",text:"Text 1"},{image:"../assets/images/proprietor-registration/girl.png",text:"Text 2"},{image:"../assets/images/proprietor-registration/girl.png",text:"Text 3"}]}ngOnInit(){this.startAnimation()}startAnimation(){setInterval(()=>{this.activeIndex++,this.activeIndex>=this.items.length&&(this.activeIndex=0)},5e3)}gotToHome(){this.router.navigate([""])}gotoToday(o){this.selectedTab=o,this.router.navigate(["main/dashboard/reservation"])}gotoCalendar(o){this.selectedTab=o,this.router.navigate(["main/dashboard/calendar"])}gotoListing(o){this.selectedTab=o,this.router.navigate(["main/dashboard/listing"])}gotoInbox(o){this.selectedTab=o,this.router.navigate(["main/dashboard/inbox"])}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(i.F0),t.Y36(i.gz),t.Y36(g.K))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-customer-dashboard"]],decls:15,vars:11,consts:[[1,"customer-dashboard"],[1,"customer-dashboard-tab-header"],[1,"header-text"],[1,"tab-wrapper"],[1,"main-button","custom-btn",3,"ngClass","click"],[1,"content"],["class","container",4,"ngIf"],[1,"container"],["class","set",3,"ngClass",4,"ngFor","ngForOf"],[1,"set",3,"ngClass"],[3,"src","alt"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2),t._uU(3," Hey, Juan! Welcome. "),t.qZA(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.gotoToday("reservation")}),t._uU(6,"Reservation"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return s.gotoCalendar("calendar")}),t._uU(8,"Calendar"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return s.gotoListing("listing")}),t._uU(10,"Listing"),t.qZA()()(),t.TgZ(11,"div",5)(12,"div"),t._UZ(13,"router-outlet"),t.qZA(),t.YNc(14,p,2,1,"div",6),t.qZA()()),2&a&&(t.Q6J("@fadeInAnimation",void 0),t.xp6(5),t.Q6J("ngClass",t.VKq(5,d,"reservation"===s.selectedTab)),t.xp6(2),t.Q6J("ngClass",t.VKq(7,d,"calendar"===s.selectedTab)),t.xp6(2),t.Q6J("ngClass",t.VKq(9,d,"listing"===s.selectedTab)),t.xp6(5),t.Q6J("ngIf",s.instro))},dependencies:[r.mk,r.sg,r.O5,i.lC],styles:[".customer-dashboard[_ngcontent-%COMP%]{font-family:Poppins-Regular;flex:1;display:flex;flex-direction:column;height:100%;padding:1rem 0 0rem;position:relative}.customer-dashboard-tab-header[_ngcontent-%COMP%]{flex:0;display:flex;justify-content:space-between;align-items:center;position:relative;z-index:50}.customer-dashboard-tab-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{font-weight:700;margin:0;font-size:clamp(1.5rem,1.5vw,8rem)}.customer-dashboard-tab-header[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%]{display:flex;gap:1rem}.customer-dashboard-tab-header[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]{background-color:#fff;color:#68a968;box-shadow:0 2px 10px #0000001a;border:1px solid rgb(235,235,235)}.customer-dashboard-tab-header[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%]   .custom-btn.active[_ngcontent-%COMP%], .customer-dashboard-tab-header[_ngcontent-%COMP%]   .tab-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]:hover{background-color:#000;color:#68a968}.customer-dashboard[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;width:100%;height:50rem;overflow:hidden}.customer-dashboard[_ngcontent-%COMP%]   .set[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transform:translateY(50rem);transition:opacity 2s ease-in-out,transform 1s ease-in-out;display:grid;grid-template-columns:1fr 1fr}.customer-dashboard[_ngcontent-%COMP%]   .set.active[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}@media only screen and (max-width: 1080px){.customer-dashboard-tab-header[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}.header-text[_ngcontent-%COMP%]{max-width:100%;font-size:clamp(1rem,.8vw,5rem);font-weight:bolder;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab-wrapper[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto;padding:1rem}}"],data:{animation:[m.B]}})}return n})(),children:[{path:"reservation",loadChildren:()=>Promise.all([e.e(671),e.e(7893),e.e(3848),e.e(4794)]).then(e.bind(e,4794)).then(n=>n.TodayModule),title:"TaraGo | Reservation"},{path:"calendar",loadChildren:()=>Promise.all([e.e(3848),e.e(7050)]).then(e.bind(e,7050)).then(n=>n.CalendarModule),title:"TaraGo | Calendar"},{path:"listing",loadChildren:()=>Promise.all([e.e(671),e.e(1325)]).then(e.bind(e,1325)).then(n=>n.ListingModule),title:"TaraGo | Listing"},{path:"update-listing",loadChildren:()=>Promise.all([e.e(8592),e.e(3611)]).then(e.bind(e,3611)).then(n=>n.UpdateListingModule),title:"TaraGo | Listing"},{path:"inbox",loadChildren:()=>e.e(2030).then(e.bind(e,2030)).then(n=>n.InboxModule),title:"TaraGo | Inbox"},{path:"",redirectTo:"reservation",pathMatch:"prefix"}]}];let f=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(C),i.Bz]})}return n})(),b=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[r.ez,f]})}return n})()}}]);
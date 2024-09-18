"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[2762],{2762:(J,d,e)=>{e.r(d),e.d(d,{YourTripsModule:()=>z});var l=e(6895),c=e(9299),C=e(2972),g=e(2289),n=e(4650),p=e(7392);function h(t,Y){if(1&t){const i=n.EpF();n.TgZ(0,"div",16)(1,"div",17)(2,"div",5),n._uU(3,"No trips booked...yet?"),n.qZA(),n.TgZ(4,"div",18),n._uU(5," Time to dust off your bags and start planning your next adventure. "),n.qZA(),n.TgZ(6,"div",19)(7,"button",20),n.NdJ("click",function(){n.CHM(i);const o=n.oxw();return n.KtG(o.goToSearchList())}),n._uU(8," Start Searching "),n.qZA()()()()}}const m=function(t){return{burgerHide:t}},M=function(t){return{margin_hero_header:t}},f=function(t){return{isMinimizedSidebar:t}},s=function(t){return{active:t}},P=function(t){return{backdrop:t}},O=function(t){return{isMinimizedContent:t}},_=[{path:"",component:(()=>{class t{constructor(i,r,o){this.router=i,this.route=r,this.breakpointObserver=o,this.showFiller=!1,this.isMinimizedSidebar=!1,this.selectedTab="pending-trip",this.windowWidth=window.innerWidth,this.yourTrips=[{_id:"0",image:"../assets/images/main/staycation-details/gallery1.png",title:"Our house in Tagaytay",description:"Our condo",price_per_night:1200,bookedDate:"2021-9-1",startdate:"2024-10-30",enddate:"2024-11-30",rating:5,reviews:100,status:"Upcoming Trips",address:"San Pablo City. Laguna"}]}ngOnInit(){this.breakpointObserver.observe([g.u3.Handset]).subscribe(i=>{this.isMinimizedSidebar=i.matches})}onResize(i){this.windowWidth=i.target.innerWidth}isActive(i){return this.router.url.includes(i)}selectTab(i){this.selectedTab=i,this.router.navigate([i],{relativeTo:this.route})}toggleSidebar(){this.windowWidth<600&&(this.isMinimizedSidebar=!this.isMinimizedSidebar)}goToSearchList(){this.router.navigate(["main/staycation-list"])}static#n=this.\u0275fac=function(r){return new(r||t)(n.Y36(c.F0),n.Y36(c.gz),n.Y36(g.Yg))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-your-trips"]],hostBindings:function(r,o){1&r&&n.NdJ("resize",function(Z){return o.onResize(Z)},!1,n.Jf7)},decls:32,vars:35,consts:[[1,"your-trips-container"],[1,"property-title","header"],[1,"humburger-btn"],[1,"remove_default_button",3,"ngClass","click"],[1,"title-wrapper"],[1,"title"],[1,"hero_header",3,"ngClass"],["class","info_hero",4,"ngIf"],[1,"display_image"],["src","../assets/images/main/trips/tripsheader.jpg","alt","","loading","lazy","draggable","false"],[1,"main_content"],[1,"custom-tabs",3,"ngClass","click"],[1,"wrapper"],[1,"tab","animated-border",3,"ngClass","click"],[3,"ngClass"],[1,"content",3,"ngClass"],[1,"info_hero"],[1,"info_hero_wrapper"],[1,"subtitle"],[1,"btn"],[1,"main-button",3,"click"]],template:function(r,o){1&r&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"button",3),n.NdJ("click",function(){return o.toggleSidebar()}),n.TgZ(4,"mat-icon"),n._uU(5," format_indent_increase"),n.qZA()(),n.TgZ(6,"button",3),n.NdJ("click",function(){return o.toggleSidebar()}),n.TgZ(7,"mat-icon"),n._uU(8," view_headline"),n.qZA()()(),n.TgZ(9,"div",4)(10,"div",5),n._uU(11,"Your Trips"),n.qZA()()(),n.TgZ(12,"div",6),n.YNc(13,h,9,0,"div",7),n.TgZ(14,"div",8),n._UZ(15,"img",9),n.qZA()(),n.TgZ(16,"div",10)(17,"div",11),n.NdJ("click",function(){return o.toggleSidebar()}),n.TgZ(18,"div",12)(19,"div",13),n.NdJ("click",function(){return o.selectTab("pending-trip")}),n._uU(20," Pending "),n.qZA(),n.TgZ(21,"div",13),n.NdJ("click",function(){return o.selectTab("upcoming-trip")}),n._uU(22," Upcoming "),n.qZA(),n.TgZ(23,"div",13),n.NdJ("click",function(){return o.selectTab("in-progress-trip")}),n._uU(24," In Progress "),n.qZA(),n.TgZ(25,"div",13),n.NdJ("click",function(){return o.selectTab("completed-trip")}),n._uU(26," Completed "),n.qZA(),n.TgZ(27,"div",13),n.NdJ("click",function(){return o.selectTab("cancelled-trip")}),n._uU(28," Cancelled "),n.qZA()()(),n._UZ(29,"div",14),n.TgZ(30,"div",15),n._UZ(31,"router-outlet"),n.qZA()()()),2&r&&(n.Q6J("@fadeInAnimation",void 0),n.xp6(3),n.Q6J("ngClass",n.VKq(13,m,!0===o.isMinimizedSidebar)),n.xp6(3),n.Q6J("ngClass",n.VKq(15,m,!1===o.isMinimizedSidebar)),n.xp6(6),n.Q6J("ngClass",n.VKq(17,M,o.isMinimizedSidebar)),n.xp6(1),n.Q6J("ngIf",0!==o.yourTrips.length),n.xp6(4),n.Q6J("ngClass",n.VKq(19,f,o.isMinimizedSidebar)),n.xp6(2),n.Q6J("ngClass",n.VKq(21,s,o.isActive("pending-trip"))),n.xp6(2),n.Q6J("ngClass",n.VKq(23,s,o.isActive("upcoming-trip"))),n.xp6(2),n.Q6J("ngClass",n.VKq(25,s,o.isActive("in-progress-trip"))),n.xp6(2),n.Q6J("ngClass",n.VKq(27,s,o.isActive("completed-trip"))),n.xp6(2),n.Q6J("ngClass",n.VKq(29,s,o.isActive("cancelled-trip"))),n.xp6(2),n.Q6J("ngClass",n.VKq(31,P,!o.isMinimizedSidebar)),n.xp6(1),n.Q6J("ngClass",n.VKq(33,O,o.isMinimizedSidebar)))},dependencies:[l.mk,l.O5,c.lC,p.Hw],styles:['.your-trips-container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;position:relative}.your-trips-container[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid #cacaca;padding:.5rem 0;height:60px;background-color:#fff;position:sticky;top:0;bottom:0;z-index:6}.your-trips-container[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]   .humburger-btn[_ngcontent-%COMP%]{background-color:#fff;border-radius:100%;box-shadow:1px 1px 5px #8887;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:.5rem .3rem .3rem;margin-left:1rem;display:none}.your-trips-container[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:0;font-weight:700}.your-trips-container[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:1rem;font-weight:700;font-size:clamp(1rem,1.5vw,8rem)}.your-trips-container[_ngcontent-%COMP%]   .burgerHide[_ngcontent-%COMP%]{display:none}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]{flex-basis:12rem;display:flex;justify-content:space-between;height:12rem;padding:.3rem;box-shadow:0 4px 6px #0000001a,0 1px 3px #00000014;transition:box-shadow .3s ease;border-bottom:1px solid #ececec;margin-left:15.7rem;transition:all .3s ease;gap:1rem}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .info_hero[_ngcontent-%COMP%]{display:grid;place-content:center start;width:100%;padding-left:1rem;position:relative}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .info_hero[_ngcontent-%COMP%]   .info_hero_wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:clamp(1rem,1.3vw,8rem);font-weight:700;margin-top:.5rem}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .info_hero[_ngcontent-%COMP%]   .info_hero_wrapper[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:calc(.8em + .2vw);margin-top:1rem}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .info_hero[_ngcontent-%COMP%]   .info_hero_wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;margin-top:1rem}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .info_hero[_ngcontent-%COMP%]   .info_hero_wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]{font-size:clamp(.7rem,.7vw,8rem);padding:.5rem 1rem}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .display_image[_ngcontent-%COMP%]{flex-basis:70%}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]   .display_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;object-position:left center;width:100%;height:100%;transform:scaleX(-1)}.your-trips-container[_ngcontent-%COMP%]   .margin_hero_header[_ngcontent-%COMP%]{margin-left:0rem;transition:all .3s ease}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]{flex-basis:100%;flex:1;overflow:hidden;display:flex;flex-direction:row;flex-flow:row;top:0;bottom:0}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .custom-tabs[_ngcontent-%COMP%]{border-right:1px solid #cacaca;position:fixed;top:7.75rem;bottom:0;z-index:7;background-color:#fff;display:flex;flex-direction:column;overflow-x:auto;padding:0;width:16rem;transform:translate(0);transition:all .3s ease}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .isMinimizedSidebar[_ngcontent-%COMP%]{width:16rem;transform:translate(-100%);transition:all .3s ease}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{padding:20px;cursor:pointer;white-space:pre;border-bottom:none;border-radius:0;font-size:clamp(.9rem,.9vw,8rem)}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{font-weight:700;color:#63ab68;background-color:#f7f7f7}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{font-weight:700;color:#63ab68}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{border-radius:0}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .animated-border[_ngcontent-%COMP%]{border-bottom:none;position:relative;cursor:pointer}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .animated-border[_ngcontent-%COMP%]:after{content:"";display:block;width:0;height:2px;background-color:#63ab68;position:absolute;bottom:0;left:0;transition:width .3s ease-in-out}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .animated-border.active[_ngcontent-%COMP%]:after{width:100%}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .hr_vertical[_ngcontent-%COMP%]{background-color:#cacaca;height:100%;width:1px;margin:0 1rem;margin-left:0;position:sticky;top:0;bottom:0}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;flex:1;height:100%;overflow-y:auto;display:flex;flex-direction:column;margin-left:16rem;transition:all .3s ease}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-not_found[_ngcontent-%COMP%]{flex:1;text-align:center;display:grid;place-content:center;height:100vh}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-not_found[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:calc(1.2em + .2vw);font-weight:700;margin:.5rem}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-not_found[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:calc(.8em + .2vw)}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-not_found[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;display:grid;place-content:center;margin-top:1rem}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .isMinimizedContent[_ngcontent-%COMP%]{width:100%;transition:all .3s ease;margin-left:0rem}@media only screen and (max-width: 581px){.your-trips-container[_ngcontent-%COMP%]   .property-title[_ngcontent-%COMP%]   .humburger-btn[_ngcontent-%COMP%]{display:block}.your-trips-container[_ngcontent-%COMP%]   .hero_header[_ngcontent-%COMP%]{margin-left:0}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .custom-tabs[_ngcontent-%COMP%]{top:4rem;width:100%;border:none;background-color:transparent}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .custom-tabs[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{position:fixed;width:100%;max-width:16rem;height:100%;background-color:#fff}.your-trips-container[_ngcontent-%COMP%]   .main_content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-left:0rem;transition:all .3s ease}.your-trips-container[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%]{background-color:#000000c0;transition:all .3s ease;position:fixed;width:100%;z-index:6;inset:0;top:4rem}}'],data:{animation:[C.B]}})}return t})(),children:[{path:"pending-trip",loadChildren:()=>Promise.all([e.e(6652),e.e(3503)]).then(e.bind(e,3503)).then(t=>t.PendingTripModule),title:"TaraGo | Pending-Trip"},{path:"upcoming-trip",loadChildren:()=>Promise.all([e.e(6652),e.e(3239)]).then(e.bind(e,3239)).then(t=>t.UpcomingTripModule),title:"TaraGo | Upcoming-Trip"},{path:"in-progress-trip",loadChildren:()=>Promise.all([e.e(6652),e.e(2500)]).then(e.bind(e,2500)).then(t=>t.InProgressTripModule),title:"TaraGo | In-Progress-Trip"},{path:"completed-trip",loadChildren:()=>Promise.all([e.e(6652),e.e(9697)]).then(e.bind(e,9697)).then(t=>t.CompletedTripModule),title:"TaraGo | Completed-Trip"},{path:"cancelled-trip",loadChildren:()=>Promise.all([e.e(6652),e.e(9337)]).then(e.bind(e,9337)).then(t=>t.CancelledTripModule),title:"TaraGo | Cancelled-Trip"},{path:"",redirectTo:"pending-trip",pathMatch:"prefix"}]}];let b=(()=>{class t{static#n=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(_),c.Bz]})}return t})();var y=e(8255),u=e(4006),v=e(5905),T=e(4859),x=e(3267),w=e(1572);let z=(()=>{class t{static#n=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[l.ez,b,p.Ps,y.Tx,u.u5,T.ot,x.SJ,v.l,u.UX,w.Cq]})}return t})()}}]);
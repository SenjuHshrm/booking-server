"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[3503],{3503:(U,l,o)=>{o.r(l),o.d(l,{PendingTripModule:()=>S});var g=o(6895),d=o(9299),n=o(4650),M=o(2972),h=o(9113),P=o(727),u=o(7579),O=o(8372),f=o(7009),x=o(5412),w=o(2169),v=o(9083),_=o(7392),p=o(4006),y=o(412),m=o(4859),C=o(1572);function b(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"div",15)(1,"div",16)(2,"div",17)(3,"img",18),n.NdJ("click",function(){const c=n.CHM(t).$implicit,s=n.oxw(2);return n.KtG(s.viewDetails(c))}),n.qZA()()(),n.TgZ(4,"div",19)(5,"div",20)(6,"div",3),n._uU(7),n.qZA(),n.TgZ(8,"div",21),n._uU(9),n.qZA(),n.TgZ(10,"div",22)(11,"span"),n._uU(12),n.ALo(13,"date"),n.qZA(),n._uU(14," - "),n.TgZ(15,"span"),n._uU(16),n.ALo(17,"date"),n.qZA()()()()()}if(2&e){const t=a.$implicit,r=n.oxw(2);n.xp6(3),n.s9C("src",r.setSrc(t.bookTo.cover),n.LSH),n.xp6(4),n.Oqu(t.bookTo.name),n.xp6(2),n.hij(" ",t.bookTo.address.city," "),n.xp6(3),n.Oqu(n.xi3(13,5,t.duration.start,"MMM d, y")),n.xp6(4),n.Oqu(n.xi3(17,8,t.duration.end,"MMM d, y"))}}function T(e,a){if(1&e&&(n.TgZ(0,"div",13),n.YNc(1,b,18,11,"div",14),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.bookings)}}function k(e,a){1&e&&(n.TgZ(0,"div",23),n._UZ(1,"app-booking-loader")(2,"app-booking-loader")(3,"app-booking-loader")(4,"app-booking-loader"),n.qZA())}function Z(e,a){1&e&&(n.TgZ(0,"div",24)(1,"span"),n._uU(2,"No Pending Trip"),n.qZA()())}function A(e,a){1&e&&(n.TgZ(0,"span"),n._uU(1,"See More"),n.qZA())}function L(e,a){1&e&&(n.TgZ(0,"span"),n._UZ(1,"mat-spinner",28),n.qZA()),2&e&&(n.xp6(1),n.Q6J("diameter",20))}function z(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"div",25)(1,"button",26),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.seeMoreBookings())}),n.YNc(2,A,2,0,"span",27),n.YNc(3,L,2,1,"span",27),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("disabled",t.seeMoreLoading),n.xp6(1),n.Q6J("ngIf",!t.seeMoreLoading),n.xp6(1),n.Q6J("ngIf",t.seeMoreLoading)}}const J=[{path:"",component:(()=>{class e{constructor(t,r,i,c){this.router=t,this.dialog=r,this._booking=i,this._util=c,this.filteredItems=[],this.notFound=!1,this.searchInputs="",this.initialLoading=!1,this.seeMoreLoading=!1,this.hasNextPage=!1,this._subs=new P.w0,this._snack=(0,n.f3M)(f.ux),this.searchKey="",this.bookings=[],this.page=1,this.limit=15,this.total=0,this._modelChanged=new u.x,this.debTime=500}ngOnInit(){this.initialLoading=!0,this._getBookings(this.limit,this.page),this._subs.add(this._modelChanged.pipe((0,O.b)(this.debTime)).subscribe(()=>{this.initialLoading=!0,this.bookings=[],this._getBookings(this.limit,1),this.page=1}))}ngOnDestroy(){this._subs&&this._subs.unsubscribe()}handleSearch(t){this._modelChanged.next(t.target.value)}_getBookings(t,r){this._subs.add(this._booking.getBookingsByGuestId(t,r,"for_approval",this.searchKey).subscribe({next:i=>{this.bookings=[...i.bookings,...this.bookings],this.total=i.totalCount,this.hasNextPage=(r-1)*t+t<this.total,this.initialLoading=!1,this.seeMoreLoading=!1},error:({error:i})=>{this._snack.open(i.code||"Failed to get upcoming trips. Please reload the page."),this.initialLoading=!1,this.seeMoreLoading=!1}}))}setSrc(t){return this._util.setImgUrl(t)}seeMoreBookings(){this.initialLoading||this.seeMoreLoading||!this.hasNextPage||(this.page++,this.seeMoreLoading=!0,this._getBookings(this.limit,this.page))}viewDetails(t){this.dialog.open(h.Q,{width:"100%",height:"100%",maxHeight:"57rem",maxWidth:"57rem",panelClass:"custom-viewdetrips-dialog",data:t}).afterClosed().subscribe(i=>{i&&(this.bookings=this.bookings.filter(c=>c._id!==t._id))})}navigateToBookStaycation(t){this.router.navigate(["main/staycation-details",t])}gotoStaycationDetails(){this.router.navigate(["/main/staycation-details/66d71c6d4cb5d6b2e0360398"]),console.log("Active")}static#n=this.\u0275fac=function(r){return new(r||e)(n.Y36(d.F0),n.Y36(x.uw),n.Y36(w.q),n.Y36(v.M))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-pending-trip"]],decls:16,vars:5,consts:[[1,"your-trips-container"],[1,"status-title"],[1,"title-wrapper"],[1,"title"],[1,"filter_search"],[1,"search"],["type","search","placeholder","Search...",3,"ngModel","ngModelChange","input"],[1,"content"],[1,"content_wrapper"],["class","trip_card_wrapper",4,"ngIf"],["class","loading-wrapper",4,"ngIf"],["class","empty-wrapper",4,"ngIf"],["class","see-more-container",4,"ngIf"],[1,"trip_card_wrapper"],["class","trip_card",4,"ngFor","ngForOf"],[1,"trip_card"],[1,"card","stacked"],[1,"image"],["alt","image","loading","lazy","draggable","false",3,"src","click"],[1,"content__card"],[1,"info"],[1,"subtitle"],[1,"check-inout-date"],[1,"loading-wrapper"],[1,"empty-wrapper"],[1,"see-more-container"],["mat-raised-button","",3,"disabled","click"],[4,"ngIf"],[3,"diameter"]],template:function(r,i){1&r&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),n._uU(4,"Pending Reservation"),n.qZA()(),n.TgZ(5,"div",4)(6,"div",5)(7,"input",6),n.NdJ("ngModelChange",function(s){return i.searchKey=s})("input",function(s){return i.handleSearch(s)}),n.qZA(),n.TgZ(8,"mat-icon"),n._uU(9,"search"),n.qZA()()()(),n.TgZ(10,"div",7)(11,"div",8),n.YNc(12,T,2,1,"div",9),n.YNc(13,k,5,0,"div",10),n.YNc(14,Z,3,0,"div",11),n.qZA(),n.YNc(15,z,4,3,"div",12),n.qZA()()),2&r&&(n.xp6(7),n.Q6J("ngModel",i.searchKey),n.xp6(5),n.Q6J("ngIf",!i.initialLoading),n.xp6(1),n.Q6J("ngIf",i.initialLoading),n.xp6(1),n.Q6J("ngIf",!i.initialLoading&&i.bookings.length<1),n.xp6(1),n.Q6J("ngIf",i.hasNextPage))},dependencies:[g.sg,g.O5,_.Hw,p.Fj,p.JJ,p.On,y.p,m.lW,C.Ou,g.uU],styles:[".your-trips-container[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;position:relative;width:100%}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;justify-content:space-between;padding:1rem;position:sticky;z-index:5;top:0;bottom:0}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:clamp(1rem,1vw,8rem)}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]{flex:none;width:100%;max-width:22rem}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{display:flex;width:100%;padding:.5rem 1rem;border:1px solid rgb(190,190,190);border-radius:10px}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;outline:none}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#63ab68}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-basis:100%;flex:1;display:flex;flex-direction:column;width:100%}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;padding:0 1rem}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .date_title[_ngcontent-%COMP%]{font-size:clamp(.8rem,.8vw,8rem);padding:1rem 0;color:gray}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card_wrapper[_ngcontent-%COMP%]{margin:0rem 0 1rem;flex:1;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;position:relative;width:100%;overflow:hidden}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card[_ngcontent-%COMP%]{width:100%}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{text-align:center;margin:0 auto auto;display:grid;gap:1rem;width:100%;cursor:pointer;position:relative}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;max-width:-moz-fit-content;max-width:fit-content;height:-moz-fit-content;height:fit-content;position:absolute;top:10px;left:10px;padding:2px 7px;color:#68a968;box-shadow:-1px 2px 2px #00000048;font-size:clamp(.7rem,.8vw,8rem)}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{box-shadow:-1px 2px 15px #0000001a;border-radius:15px;cursor:pointer}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:15px;width:100%;height:100%;object-fit:cover;object-position:center}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{top:.5rem;right:.5rem;width:1.9rem;height:1.9rem}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:15px}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]{position:relative;z-index:2;align-self:end}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;text-align:left;max-width:100%}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{align-items:center;font-weight:700;font-size:calc(1em + .2vw);color:#000;word-break:break-words;white-space-collapse:break-spaces;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;line-height:1.5;max-height:4.5em}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:calc(.8em + .2vw);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;max-width:17rem}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .check-inout-date[_ngcontent-%COMP%]{font-size:calc(.7em + .1vw);color:#68a968}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .permonth[_ngcontent-%COMP%]{font-size:calc(1em + .1vw);color:#68a968;font-weight:700}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{opacity:90%}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .custom-not_found[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;background-color:red}.custom-cancell-dialog[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;overflow-y:auto}@media only screen and (max-width: 1400px){.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card_wrapper[_ngcontent-%COMP%]{width:100%;place-items:flex-start;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:auto;overflow-x:hidden}}@media only screen and (max-width: 900px){.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]{border:2px sold blue}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card_wrapper[_ngcontent-%COMP%]{place-items:center;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:auto;overflow-x:hidden}}@media only screen and (max-width: 780px){.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card_wrapper[_ngcontent-%COMP%]{margin:0;place-items:center;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:auto}}@media only screen and (max-width: 580px){.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:400;color:#63ab68}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]{width:100%;margin-top:1rem}.your-trips-container[_ngcontent-%COMP%]   .status-title[_ngcontent-%COMP%]   .filter_search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{display:flex;width:100%;max-width:100%;min-width:auto}}@media only screen and (max-width: 400px){.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%}.your-trips-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content_wrapper[_ngcontent-%COMP%]   .trip_card_wrapper[_ngcontent-%COMP%]{place-items:center;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));width:100%;gap:auto}}.empty-wrapper[_ngcontent-%COMP%]{height:10rem;display:grid;place-items:center;color:#80808075;letter-spacing:.1rem;font-weight:600}.loading-wrapper[_ngcontent-%COMP%]{display:grid;gap:1rem;grid-template-columns:repeat(1,minmax(0,1fr))}.see-more-container[_ngcontent-%COMP%]{margin:.5rem}.see-more-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}@media (min-width: 640px){.loading-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 768px){.loading-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 1024px){.loading-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width: 1280px){.loading-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width: 1536px){.loading-wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(5,minmax(0,1fr))}}"],data:{animation:[M.B]}})}return e})()}];let I=(()=>{class e{static#n=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[d.Bz.forChild(J),d.Bz]})}return e})();var N=o(8255),B=o(5905);let S=(()=>{class e{static#n=this.\u0275fac=function(r){return new(r||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[g.ez,I,_.Ps,N.Tx,p.u5,B.l,m.ot,C.Cq]})}return e})()}}]);
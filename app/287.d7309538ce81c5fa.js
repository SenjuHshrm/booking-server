"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[287],{5287:(q,c,n)=>{n.r(c),n.d(c,{ProprietorTableModule:()=>z});var f=n(6895),p=n(9299),d=n(727),u=n(1581),o=n(7155),t=n(4650),h=n(5412),T=n(3071),b=n(9083),g=n(7392),r=n(1561);function C(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Profile"),t.qZA())}const v=function(a){return[a]};function Z(a,i){if(1&a&&(t.TgZ(0,"td",14),t._UZ(1,"img",15),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("src",t.VKq(1,v,e.profile),t.LSH)}}function y(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Firstname"),t.qZA())}function A(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.firstname)}}function P(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Lastname"),t.qZA())}function _(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.lastname)}}function x(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Email"),t.qZA())}function U(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.email)}}function M(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Status"),t.qZA())}function N(a,i){if(1&a&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.status)}}function J(a,i){1&a&&(t.TgZ(0,"th",13),t._uU(1,"Action"),t.qZA())}function S(a,i){if(1&a&&(t.TgZ(0,"td",14)(1,"button",16)(2,"mat-icon"),t._uU(3,"more_horiz"),t.qZA()(),t.TgZ(4,"mat-menu",null,17)(6,"button",18),t._uU(7,"View"),t.qZA(),t.TgZ(8,"button",18),t._uU(9,"Suspend"),t.qZA(),t.TgZ(10,"button",18),t._uU(11,"Terminate"),t.qZA()()()),2&a){const e=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",e)}}function D(a,i){1&a&&t._UZ(0,"tr",19)}function Y(a,i){1&a&&t._UZ(0,"tr",20)}const Q=function(){return[5,10,25]},w=[{path:"",component:(()=>{class a{constructor(e,s,l){this.createlistingDialog=e,this._user=s,this._basicUtil=l,this.total=0,this.userList=[],this._sub=new d.w0,this.dataSource=new o.by([{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""},{profile:"../assets/images/main/staycation-details/avatar.png",firstname:"Juan",lastname:"Miguel",email:"juanmigeul@email.com",status:"Active",action:""}]),this.displayedColumns=["profile","firstname","lastname","email","status","action"]}ngOnInit(){}ngAfterViewInit(){this._getUsers(this.paginator.pageIndex+1,this.paginator.pageSize),this.dataSource.paginator=this.paginator}ngOnDestroy(){this._sub.unsubscribe()}handlePageChange(e){this._getUsers(e.pageIndex+1,e.pageSize)}_getUsers(e,s){this.userList=[],this.dataSource=new o.by,this._sub.add(this._user.getUsersByAccess("host",this.paginator.pageIndex+1,this.paginator.pageSize).subscribe({next:l=>{this.total=l.total,l.auth.forEach(m=>{this.userList.push({profile:this._basicUtil.setImgUrl(m.userId.img),firstname:m.userId.name.fName,lastname:m.userId.name.lName,email:m.email,status:m.userId.status})}),this.dataSource=new o.by(this.userList)}}))}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(h.uw),t.Y36(T.K),t.Y36(b.M))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-proprietor-table"]],viewQuery:function(s,l){if(1&s&&t.Gf(u.NW,5),2&s){let m;t.iGM(m=t.CRH())&&(l.paginator=m.first)}},decls:23,vars:6,consts:[["mat-table","",3,"dataSource"],["matColumnDef","profile"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstname"],["matColumnDef","lastname"],["matColumnDef","email"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","select page","showFirstLastButtons","",1,"table-pagination",3,"length","pageSizeOptions","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["alt","image",1,"img-listing",3,"src"],["mat-button","",1,"action-btn",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["mat-header-row",""],["mat-row",""]],template:function(s,l){1&s&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,C,2,0,"th",2),t.YNc(3,Z,2,3,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,y,2,0,"th",2),t.YNc(6,A,2,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,P,2,0,"th",2),t.YNc(9,_,2,1,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,x,2,0,"th",2),t.YNc(12,U,2,1,"td",3),t.BQk(),t.ynx(13,7),t.YNc(14,M,2,0,"th",2),t.YNc(15,N,2,1,"td",3),t.BQk(),t.ynx(16,8),t.YNc(17,J,2,0,"th",2),t.YNc(18,S,12,1,"td",3),t.BQk(),t.YNc(19,D,1,0,"tr",9),t.YNc(20,Y,1,0,"tr",10),t.qZA(),t.TgZ(21,"mat-paginator",11,12),t.NdJ("page",function(I){return l.handlePageChange(I)}),t.qZA()),2&s&&(t.Q6J("dataSource",l.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns),t.xp6(1),t.Q6J("length",l.total)("pageSizeOptions",t.DdM(5,Q)))},dependencies:[o.BZ,o.fO,o.as,o.w1,o.Dz,o.nj,o.ge,o.ev,o.XQ,o.Gk,u.NW,g.Hw,r.VK,r.OP,r.p6],styles:["table[_ngcontent-%COMP%]{overflow-y:auto}.img-listing[_ngcontent-%COMP%]{width:2.5rem;height:auto;padding:5px;border-radius:100%}.action-btn[_ngcontent-%COMP%]{border:none;background-color:transparent;outline:none;cursor:pointer}.table-pagination[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}"]})}return a})()}];let O=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(w),p.Bz]})}return a})();var j=n(4144),B=n(9549);let z=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[f.ez,O,o.p0,u.TU,j.c,B.lN,g.Ps,r.Tx]})}return a})()}}]);
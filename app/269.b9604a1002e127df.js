"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[269],{4269:(Q,u,p)=>{p.r(u),p.d(u,{ProprietorApplicationModule:()=>O});var d=p(7392),c=p(1561),l=p(1581),s=p(7155),f=p(6895),g=p(9299),A=p(727),t=p(4650),_=p(3071),C=p(9083),h=p(4859);function T(e,a){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Profile"),t.qZA())}function Z(e,a){if(1&e&&(t.TgZ(0,"td",13),t._UZ(1,"img",14),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Q6J("src",i.profile,t.LSH)}}function P(e,a){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Firstname"),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Oqu(i.firstname)}}function b(e,a){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Lastname"),t.qZA())}function x(e,a){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Oqu(i.lastname)}}function v(e,a){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Staycation Name"),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"td",13),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Oqu(i.staycation)}}function U(e,a){1&e&&(t.TgZ(0,"th",12),t._uU(1,"Action"),t.qZA())}function I(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"td",13)(1,"button",15)(2,"mat-icon"),t._uU(3,"more_horiz"),t.qZA()(),t.TgZ(4,"mat-menu",null,16)(6,"button",17),t._uU(7,"View"),t.qZA(),t.TgZ(8,"button",18),t.NdJ("click",function(){const o=t.CHM(i).$implicit,m=t.oxw();return t.KtG(m.handleSetAsHost(o.userId,o.staycationId,o.propAppId))}),t._uU(9,"Give Proprietor Privileges"),t.qZA()()()}if(2&e){const i=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",i)}}function S(e,a){1&e&&t._UZ(0,"tr",19)}function D(e,a){1&e&&t._UZ(0,"tr",20)}const w=function(){return[5,10,25]},M=[{path:"",component:(()=>{class e{constructor(i,n,r){this._user=i,this._basicUtil=n,this._changeDetector=r,this.total=0,this.appList=[],this.displayedColumns=["profile","firstname","lastname","staycation","action"],this._sub=new A.w0}ngOnInit(){}ngAfterViewInit(){this._getApps(this.paginator.pageIndex+1,this.paginator.pageSize),this.dataSource.paginator=this.paginator,this._changeDetector.detectChanges()}ngOnDestroy(){this._sub.unsubscribe()}handlePageChange(i){this._getApps(i.pageIndex+1,i.pageSize)}handleSetAsHost(i,n,r){this._sub.add(this._user.setAsHost(i,n,r).subscribe({next:o=>{this._getApps(this.paginator.pageIndex+1,this.paginator.pageSize)}}))}_getApps(i,n){this.appList=[],this.dataSource=new s.by,this._sub.add(this._user.getProprietorApplications(i,n).subscribe({next:r=>{this.total=r.total,r.propApp.forEach(o=>{this.appList.push({profile:this._basicUtil.setImgUrl(o.userId.img),firstname:o.userId.name.fName,lastname:o.userId.name.lName,staycation:o.staycationId.name,userId:o.userId._id,staycationId:o.staycationId._id,propAppId:o._id})}),this.dataSource=new s.by(this.appList)}}))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(_.K),t.Y36(C.M),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-proprietor-application"]],viewQuery:function(n,r){if(1&n&&t.Gf(l.NW,5),2&n){let o;t.iGM(o=t.CRH())&&(r.paginator=o.first)}},decls:22,vars:6,consts:[["mat-table","",3,"dataSource"],["matColumnDef","profile"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstname"],["matColumnDef","lastname"],["matColumnDef","staycation"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","select page","showFirstLastButtons","",1,"table-pagination",3,"length","pageSizeOptions","page"],["paginator",""],["mat-header-cell",""],["mat-cell",""],["alt","image",1,"img-listing",3,"src"],["mat-button","",1,"action-btn",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,r){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Host Applications"),t.qZA(),t.TgZ(2,"table",0),t.ynx(3,1),t.YNc(4,T,2,0,"th",2),t.YNc(5,Z,2,1,"td",3),t.BQk(),t.ynx(6,4),t.YNc(7,P,2,0,"th",2),t.YNc(8,y,2,1,"td",3),t.BQk(),t.ynx(9,5),t.YNc(10,b,2,0,"th",2),t.YNc(11,x,2,1,"td",3),t.BQk(),t.ynx(12,6),t.YNc(13,v,2,0,"th",2),t.YNc(14,N,2,1,"td",3),t.BQk(),t.ynx(15,7),t.YNc(16,U,2,0,"th",2),t.YNc(17,I,10,1,"td",3),t.BQk(),t.YNc(18,S,1,0,"tr",8),t.YNc(19,D,1,0,"tr",9),t.qZA(),t.TgZ(20,"mat-paginator",10,11),t.NdJ("page",function(m){return r.handlePageChange(m)}),t.qZA()),2&n&&(t.xp6(2),t.Q6J("dataSource",r.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns),t.xp6(1),t.Q6J("length",r.total)("pageSizeOptions",t.DdM(5,w)))},dependencies:[s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,l.NW,h.lW,c.VK,c.OP,c.p6,d.Hw],styles:["table[_ngcontent-%COMP%]{overflow-y:auto}.img-listing[_ngcontent-%COMP%]{width:2.5rem;height:auto;padding:5px;border-radius:100%}.action-btn[_ngcontent-%COMP%]{border:none;background-color:transparent;outline:none;cursor:pointer}.table-pagination[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}"]})}return e})()}];let Y=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(M),g.Bz]})}return e})(),O=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[f.ez,Y,s.p0,l.TU,h.ot,c.Tx,d.Ps]})}return e})()}}]);
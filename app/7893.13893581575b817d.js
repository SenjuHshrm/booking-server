"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[7893],{7893:(v,f,r)=>{r.d(f,{W:()=>m});var p=r(5412),_=r(727),e=r(4650),u=r(3071),P=r(9083),M=r(9299),l=r(6895),O=r(7392);function C(o,a){if(1&o&&(e.TgZ(0,"div",33)(1,"div",34),e._UZ(2,"img",35),e.qZA(),e.TgZ(3,"div",36)(4,"div",37)(5,"div",18),e._uU(6),e.qZA(),e.TgZ(7,"div",38),e._uU(8),e.qZA(),e.TgZ(9,"div",39),e._uU(10),e.TgZ(11,"span"),e._uU(12,"\xa0monthly"),e.qZA()()(),e.TgZ(13,"div"),e._UZ(14,"div"),e.qZA()()()),2&o){const t=a.$implicit;e.xp6(2),e.Q6J("src",t.image,e.LSH),e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.hij(" ",t.permonth,"")}}const s=function(o){return{display:o}};function d(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"section",31),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.navigateToBookStaycation())}),e.YNc(1,C,15,4,"div",32),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("ngStyle",e.VKq(2,s,0===t.profile.properties.length?"block":"none")),e.xp6(1),e.Q6J("ngForOf",t.profile.properties)}}const c=function(o){return{color:o}};let m=(()=>{class o{constructor(t,i,n,g,h){this.userService=t,this.id=i,this.dialogRef=n,this.util=g,this.router=h,this.subscription=new _.w0}ngOnInit(){this.subscription=this.userService.getUserProfile(this.id).subscribe({next:t=>{this.profile={...t.profile,img:this.util.setImgUrl(t.profile.img),email:t.auth.email,userType:t.auth.access[0],properties:t.properties||[]},t.properties.length>0&&(this.profile.properties=t.properties.map(i=>({...i,cover:this.util.setImgUrl(i.cover),imgs:i.genImgList.map(n=>this.util.setImgUrl(n))})))},error:()=>{},complete:()=>{}})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateToBookStaycation(){this.router.navigate(["main/staycation-details"])}closeDialog(){this.dialogRef.close()}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(u.K),e.Y36(p.WI),e.Y36(p.so),e.Y36(P.M),e.Y36(M.F0))};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-profile-modal"]],decls:91,vars:47,consts:[[1,"user-profile"],[1,"close-button-normal",3,"click"],[2,"margin-top","3px"],[1,"user-profile-user-profile-container"],[1,"user-profile-user-profile-wrapper"],[1,"section-1"],[1,"profile-picture"],[1,"wrapper"],[1,"profile-picture-img"],["loading","lazy","alt","Avatar",3,"src","draggable"],[1,"profile-info"],[1,"name"],[1,"label"],[1,"duration-at-tarago"],[1,"verification"],[1,"confirm"],[1,"section-2"],[1,"header"],[1,"title"],[1,"content"],[1,"say-something",3,"ngStyle"],[1,"info-details-personal-info"],[1,"info-details-wrapper"],[1,"info-details-label"],[1,"info-details-content",3,"ngStyle"],[1,"info-details-likes"],[1,"info-details-content"],[1,"info-details-your-listing"],["class","content",3,"ngClass","ngStyle","click",4,"ngIf"],[1,"not-found-wrapper",3,"ngStyle"],[1,"not-found","custom"],[1,"content",3,"ngClass","ngStyle","click"],["class","card stacked",4,"ngFor","ngForOf"],[1,"card","stacked"],[1,"image"],["alt","image","loading","lazy","draggable","false",3,"src"],[1,"content__card"],[1,"info"],[1,"description"],[1,"permonth"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return n.closeDialog()}),e.TgZ(2,"mat-icon",2),e._uU(3,"close"),e.qZA()(),e.TgZ(4,"section",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),e._UZ(10,"img",9),e.qZA(),e.TgZ(11,"div",10)(12,"div",11),e._uU(13),e.qZA(),e.TgZ(14,"div",12),e._uU(15),e.qZA(),e.TgZ(16,"div",13),e._uU(17),e.qZA()()()(),e.TgZ(18,"div",14)(19,"div",15),e._uU(20),e.qZA()()(),e.TgZ(21,"div",16)(22,"div",17)(23,"div",18),e._uU(24),e.qZA()(),e.TgZ(25,"div",19)(26,"div",20),e._uU(27),e.qZA(),e.TgZ(28,"div",21)(29,"div",18),e._uU(30),e.qZA(),e.TgZ(31,"div",22)(32,"div",23),e._uU(33,"Name"),e.qZA(),e.TgZ(34,"div",24),e._uU(35),e.qZA()(),e.TgZ(36,"div",22)(37,"div",23),e._uU(38,"Middlename"),e.qZA(),e.TgZ(39,"div",24),e._uU(40),e.qZA()(),e.TgZ(41,"div",22)(42,"div",23),e._uU(43,"Surname"),e.qZA(),e.TgZ(44,"div",24),e._uU(45),e.qZA()(),e.TgZ(46,"div",22)(47,"div",23),e._uU(48,"Ext.name"),e.qZA(),e.TgZ(49,"div",24),e._uU(50),e.qZA()(),e.TgZ(51,"div",22)(52,"div",23),e._uU(53,"Email"),e.qZA(),e.TgZ(54,"div",24),e._uU(55),e.qZA()(),e.TgZ(56,"div",22)(57,"div",23),e._uU(58,"Contact Number +63"),e.qZA(),e.TgZ(59,"div",24),e._uU(60),e.qZA()()(),e.TgZ(61,"div",25)(62,"div",18),e._uU(63),e.qZA(),e.TgZ(64,"div",22)(65,"div",23),e._uU(66,"Hobbies"),e.qZA(),e.TgZ(67,"div",26),e._uU(68),e.qZA()(),e.TgZ(69,"div",22)(70,"div",23),e._uU(71,"Work"),e.qZA(),e.TgZ(72,"div",26),e._uU(73),e.qZA()(),e.TgZ(74,"div",22)(75,"div",23),e._uU(76,"Favorite Food"),e.qZA(),e.TgZ(77,"div",26),e._uU(78),e.qZA()(),e.TgZ(79,"div",22)(80,"div",23),e._uU(81,"Favorite Place"),e.qZA(),e.TgZ(82,"div",26),e._uU(83),e.qZA()()(),e.TgZ(84,"div",27)(85,"div",18),e._uU(86),e.qZA(),e.YNc(87,d,2,4,"section",28),e.TgZ(88,"section",29)(89,"p",30),e._uU(90," You don't have properties for rent. "),e.qZA()()()()()()()()),2&i&&(e.Q6J("@fadeInAnimation",void 0),e.xp6(10),e.Q6J("src",n.profile.img,e.LSH)("draggable",!1),e.xp6(3),e.Oqu(n.util.constructName(n.profile.name)),e.xp6(2),e.Oqu(n.profile.userType),e.xp6(2),e.hij(" ",n.util.calculateUserDuration(n.profile.createdAt)," "),e.xp6(3),e.hij(" ",n.profile.name.fName,"'s confirmed information not found. "),e.xp6(4),e.hij("About ",n.profile.name.fName,""),e.xp6(2),e.Q6J("ngStyle",e.VKq(31,c,n.profile.desc&&n.profile.desc.description?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.desc&&n.profile.desc.description?n.profile.desc.description:"Say something about your profile."," "),e.xp6(3),e.hij(" ",n.profile.name.fName,"'s Personal Information "),e.xp6(4),e.Q6J("ngStyle",e.VKq(33,c,n.profile.name.fName?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.name.fName?n.profile.name.fName:"Name not available"," "),e.xp6(4),e.Q6J("ngStyle",e.VKq(35,c,n.profile.name.mName?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.name.mName?n.profile.name.mName:"Middlename not available"," "),e.xp6(4),e.Q6J("ngStyle",e.VKq(37,c,n.profile.name.lName?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.name.lName?n.profile.name.lName:"Surname not available"," "),e.xp6(4),e.Q6J("ngStyle",e.VKq(39,c,n.profile.name.xName?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.name.xName?n.profile.name.xName:"Ext.name not available"," "),e.xp6(4),e.Q6J("ngStyle",e.VKq(41,c,n.profile.email?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.email?n.profile.email:"Email not available"," "),e.xp6(4),e.Q6J("ngStyle",e.VKq(43,c,n.profile.contact?"initial":"rgb(170, 170, 170)")),e.xp6(1),e.hij(" ",n.profile.contact||"Contact number not available"," "),e.xp6(3),e.hij("",n.profile.name.fName," likes"),e.xp6(5),e.hij(" ",n.profile.desc?n.profile.desc.hobbies:"No hobbies"," "),e.xp6(5),e.hij(" ",n.profile.desc?n.profile.desc.work:"No work"," "),e.xp6(5),e.hij(" ",n.profile.desc?n.profile.desc.favFood:"No favorite food"," "),e.xp6(5),e.hij(" ",n.profile.desc?n.profile.desc.favPlace:"No favorite place"," "),e.xp6(3),e.hij("",n.profile.name.fName," Listing Properties"),e.xp6(1),e.Q6J("ngIf",n.profile.properties.length>0),e.xp6(1),e.Q6J("ngStyle",e.VKq(45,s,0===n.profile.properties.length?"block":"none")))},dependencies:[l.mk,l.sg,l.O5,l.PC,O.Hw],styles:[".user-profile[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Poppins-Regular;width:100%!important;height:100%!important;padding:3rem;position:relative}.user-profile[_ngcontent-%COMP%]   .close-button-normal[_ngcontent-%COMP%]{position:absolute;top:13px;right:13px}.user-profile-user-profile-container[_ngcontent-%COMP%]{width:100%!important;flex:1;display:flex;flex-direction:column;margin:auto}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]{width:100%;margin:0 auto;flex:1;display:flex;flex-direction:row;gap:2%}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]{background-color:#fff;box-shadow:1px 1px 5px #8887;flex-basis:30%;height:50%;display:flex;flex-direction:column;padding:1rem 0;border-radius:10px}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]{border-bottom:1px solid rgb(255,255,255);flex-basis:50%;display:grid;place-content:center}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{flex:none;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-picture-img[_ngcontent-%COMP%]{margin:auto;max-width:10rem;height:10rem;margin-bottom:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-picture-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:100%;object-fit:cover}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]{text-align:center}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:clamp(1.2rem,1.2vw,8rem);font-weight:700}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#68a86a;font-size:.8rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .duration-at-tarago[_ngcontent-%COMP%]{font-size:.8rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]{flex-basis:50%;text-align:center;display:grid;place-content:center}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .verification[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{text-align:center;margin-top:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]{flex-basis:70%;height:100%;border:1px solid #e4e4e4;border-radius:10px;display:flex;flex-direction:column;gap:2rem;padding:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:1rem;font-size:clamp(1.5rem,1.5vw,8rem);font-weight:bolder}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .create-profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background-color:transparent;color:#68a86a;border:none;cursor:pointer;text-decoration:underline}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .create-profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .profile-text[_ngcontent-%COMP%]{display:block}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-basis:50%;display:flex;flex-direction:column;gap:3rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .say-something[_ngcontent-%COMP%]{flex-basis:80%;background-color:#f5f5f5;padding:1rem;border-radius:10px;text-align:left;max-height:15rem;overflow-y:auto;text-indent:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-personal-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:bolder;font-size:clamp(1rem,1vw,8rem);margin-bottom:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-personal-info[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]{color:#575757;flex-basis:20%;display:grid;grid-template-columns:50% 50%;border-bottom:1px solid rgb(214,214,214);padding:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-personal-info[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]   .info-details-label[_ngcontent-%COMP%]{font-weight:700}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-personal-info[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]   .info-details-content[_ngcontent-%COMP%]{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-likes[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:bolder;font-size:clamp(1rem,1vw,8rem);margin-bottom:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-likes[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]{color:#575757;flex-basis:20%;display:grid;grid-template-columns:50% 50%;border-bottom:1px solid rgb(214,214,214);padding:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-likes[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]   .info-details-label[_ngcontent-%COMP%]{font-weight:700}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-likes[_ngcontent-%COMP%]   .info-details-wrapper[_ngcontent-%COMP%]   .info-details-content[_ngcontent-%COMP%]{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]{position:relative}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:bolder;font-size:clamp(1rem,1vw,8rem);margin-bottom:1rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;cursor:pointer;margin-top:2rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stacked[_ngcontent-%COMP%]{display:grid}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stacked[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{grid-column:1/.5;grid-row:1/.5}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#68a86a;width:-moz-fit-content;width:fit-content;text-align:center;margin:auto;border-radius:5%}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]{position:relative;align-self:end;margin-bottom:1.5rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;text-align:left}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:inline-flex;align-items:center;font-weight:700;font-size:max(.8rem,.5vw);color:#000;height:-moz-fit-content;height:fit-content}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:max(.8rem,.5vw)}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content__card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .permonth[_ngcontent-%COMP%]{font-size:max(.8rem,.5vw);color:#68a968;font-weight:700}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:100%}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{aspect-ratio:1/1;border-radius:15px;width:100%;height:auto;object-fit:cover;object-position:center}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]:hover{opacity:85%}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .not-found-wrapper[_ngcontent-%COMP%]{position:relative;height:20vh}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-details-your-listing[_ngcontent-%COMP%]   .not-found-wrapper[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]{font-size:.9rem;font-weight:400}@media only screen and (max-width: 900px){.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%], .user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]{border-radius:0;height:auto}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .create-profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;box-shadow:1px 1px 5px #8887;border-radius:100%;padding:.6rem .7rem}.user-profile-user-profile-container[_ngcontent-%COMP%]   .user-profile-user-profile-wrapper[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .create-profile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .profile-text[_ngcontent-%COMP%]{display:none}}"]})}return o})()}}]);
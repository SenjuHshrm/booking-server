"use strict";(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[2030],{2030:(P,i,a)=>{a.r(i),a.d(i,{InboxModule:()=>M});var s=a(6895),c=a(9299),l=a(2972),e=a(4650),g=a(7392);function p(n,m){if(1&n){const o=e.EpF();e.TgZ(0,"div",30),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.toggleVisibility())}),e.TgZ(1,"div",15),e._UZ(2,"img",16),e.qZA(),e.TgZ(3,"div",31)(4,"div",17),e._uU(5,"Oliver Belenasdasasasasasasasasasasasasas"),e.qZA(),e.TgZ(6,"div",32),e._uU(7,"We enjoyed our stay! The space is clean and well-organized, providing a... "),e.qZA()(),e.TgZ(8,"div",33),e._uU(9,"Today"),e.qZA()()}2&n&&(e.xp6(2),e.Q6J("draggable",!1))}const d=function(n,m){return{"visible-class":n,"hidden-class":m}},_=[{path:"",component:(()=>{class n{constructor(o){this.renderer=o,this.isVisible=null,this.windowWidth=null,this.messageList=[{},{},{},{},{},{},{},{},{},{},{}]}toggleVisibility(){this.isVisible=!this.isVisible}ngOnInit(){this.getWindowSize(),this.addResizeListener()}getWindowSize(){this.windowWidth=window.innerWidth}addResizeListener(){this.renderer.listen("window","resize",o=>{this.windowWidth=window.innerWidth,this.windowWidth>=1e3&&(this.isVisible=!1)})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-inbox"]],decls:48,vars:8,consts:[[1,"message-container"],[1,"message-container-message-wrapper"],[1,"left-column",3,"ngClass"],[1,"left-column-header"],[1,"title_wrapper"],[1,"title"],[1,"close-button-normal","close-icon",3,"click"],[1,"message-search"],[1,"icon"],["type","text","name","search-listing","placeholder","Search","value",""],[1,"list-card-message"],["class","list-card card-list-message ",3,"click",4,"ngFor","ngForOf"],[1,"right-column","card"],[1,"header"],[1,"message-menu",3,"click"],[1,"avatar"],["src","../../assets/images/main/staycation-details/avatarreviewer.png","loading","lazy","alt","Avatar",3,"draggable"],[1,"name"],[1,"content"],[1,"sender"],[1,"sender-wrapper"],[1,"message","card"],[1,"receiver"],[1,"receiver-wrapper"],[1,"form"],[1,"input-form"],[1,"input-form-wrapper"],["type","text","name","input-form","value","","placeholder","Message here..."],[1,"icons-form-wrapper"],[1,"mat-icon"],[1,"list-card","card-list-message",3,"click"],[1,"message-name"],[1,"message"],[1,"time-sent"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6,"Messages"),e.qZA(),e.TgZ(7,"div",6),e.NdJ("click",function(){return r.toggleVisibility()}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"mat-icon"),e._uU(13,"search"),e.qZA()(),e._UZ(14,"input",9),e.qZA()(),e.TgZ(15,"div",10),e.YNc(16,p,10,1,"div",11),e.qZA()(),e.TgZ(17,"section",12)(18,"div",13)(19,"div",14),e.NdJ("click",function(){return r.toggleVisibility()}),e.TgZ(20,"mat-icon"),e._uU(21,"menu"),e.qZA()(),e.TgZ(22,"div",15),e._UZ(23,"img",16),e.qZA(),e.TgZ(24,"div",17),e._uU(25,"Oliver Belen"),e.qZA()(),e.TgZ(26,"div",18)(27,"div",19)(28,"div",20)(29,"div",15),e._UZ(30,"img",16),e.qZA(),e.TgZ(31,"div",21),e._uU(32," We enjoyed our stay! The space is clean and well-organized, and well providing amenities "),e.qZA()()(),e.TgZ(33,"div",22)(34,"div",23)(35,"div",21),e._uU(36," We enjoyed our stay! The space is clean and well-organized, and well providing amenities "),e.qZA()()()(),e.TgZ(37,"div",24)(38,"div",25)(39,"div",26),e._UZ(40,"input",27),e.qZA(),e.TgZ(41,"div",28)(42,"div",29)(43,"mat-icon"),e._uU(44,"send"),e.qZA()(),e.TgZ(45,"div",29)(46,"mat-icon"),e._uU(47,"image"),e.qZA()()()()()()()()),2&t&&(e.Q6J("@fadeInAnimation",void 0),e.xp6(2),e.Q6J("ngClass",e.WLB(5,d,r.isVisible,!r.isVisible)),e.xp6(14),e.Q6J("ngForOf",r.messageList),e.xp6(7),e.Q6J("draggable",!1),e.xp6(7),e.Q6J("draggable",!1))},dependencies:[s.mk,s.sg,g.Hw],styles:[".message-container[_ngcontent-%COMP%]{font-family:Poppins-Regular;flex:1;display:flex;flex-direction:column;height:80vh;margin:auto}.message-container-message-wrapper[_ngcontent-%COMP%]{flex:1;display:grid;grid-template-columns:22rem auto;margin:auto;width:100%;max-height:95%;gap:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .card-list-message[_ngcontent-%COMP%]{background-color:#fff;box-shadow:none;border:1px solid rgba(128,128,128,.247);border-radius:5px;cursor:pointer}.message-container-message-wrapper[_ngcontent-%COMP%]   .card-list-message[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{padding:1rem;padding-top:0;flex:1;display:flex;flex-direction:column;box-shadow:1px 1px 5px #8887;border-radius:5px;height:100%;overflow-y:auto;position:relative}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]{padding-top:1rem;background-color:#fff;position:sticky;top:0;z-index:2;padding-bottom:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .title_wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .title_wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{display:none}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .title_wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .title_wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:max(1.5rem,.5vw);margin-bottom:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .message-search[_ngcontent-%COMP%]{margin-top:1rem;display:flex;align-items:center;justify-content:space-between;width:100%;gap:.1rem;border:1px solid rgba(128,128,128,.247);border-radius:5px}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .message-search[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:50px;width:20%;height:100%;display:flex;justify-content:center;align-items:center;color:#68a86a;cursor:pointer}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .message-search[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:auto;width:auto}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column-header[_ngcontent-%COMP%]   .message-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;outline:none;background-color:transparent;height:100%;width:100%;font-size:1rem;padding:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]{flex:1;margin:1rem 0;display:flex;flex-direction:column;gap:.5rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]{width:100%;position:relative;display:flex;gap:1rem;padding:1rem;align-items:center;justify-content:center}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{max-width:35px;min-width:25px}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .message-name[_ngcontent-%COMP%]{max-width:80%;margin-top:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .message-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:clamp(1rem,.8vw,5rem);font-weight:bolder;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .message-name[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-size:.8rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:3em;line-height:1.5em}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .list-card-message[_ngcontent-%COMP%]   .list-card[_ngcontent-%COMP%]   .time-sent[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px;color:#68a86a;font-size:.8rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{background-color:#fff;box-shadow:1px 1px 5px #8887;border-radius:5px;flex:1!important;width:100%;height:auto;display:flex;flex-direction:column;justify-content:space-between}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;padding:1rem;border-bottom:1px solid rgb(224,224,224)}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{max-width:35px}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:clamp(1rem,.8vw,8rem);font-weight:bolder}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .message-menu[_ngcontent-%COMP%]{display:none;cursor:pointer;height:2.8rem;width:2.8rem;border-radius:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .message-menu[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .message-menu[_ngcontent-%COMP%]:hover{background-color:#000;color:#68a86a}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;height:100%;gap:2rem;padding:1rem 3rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .sender-wrapper[_ngcontent-%COMP%]{display:flex;gap:1rem;max-width:20rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .sender-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{max-width:35px}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .sender-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sender[_ngcontent-%COMP%]   .sender-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:1rem;background-color:#d9d9d9}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%]   .receiver-wrapper[_ngcontent-%COMP%]{display:flex;gap:1rem;max-width:20rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%]   .receiver-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{max-width:35px}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%]   .receiver-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .receiver[_ngcontent-%COMP%]   .receiver-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#68a86a;padding:1rem;color:#fff}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{padding:1rem;width:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;width:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]   .input-form-wrapper[_ngcontent-%COMP%]{flex:1;background-color:#fff;box-shadow:1px 1px 5px #8887;border-radius:5px}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]   .input-form-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:1rem;border:none;outline:none;font-size:clamp(1rem,.8vw,8rem);background-color:transparent}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]   .icons-form-wrapper[_ngcontent-%COMP%]{flex:0;display:flex;gap:1rem}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]   .icons-form-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#68a86a}@media only screen and (max-width: 1000px){.message-container-message-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;margin-top:0}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{position:absolute;inset:0;width:20rem;height:100%;background-color:#fff;box-shadow:1px 1px 5px #8887;transform:translate(-45rem);padding:0rem 1rem;animation-duration:.5s;z-index:50}.message-container-message-wrapper[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]   .title_wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{display:block}.message-container-message-wrapper[_ngcontent-%COMP%]   .visible-class[_ngcontent-%COMP%]{display:block;transform:translate(0)}.message-container-message-wrapper[_ngcontent-%COMP%]   .hidden-class[_ngcontent-%COMP%]{transform:translate(-45rem)}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{flex:1}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .message-menu[_ngcontent-%COMP%]{display:block}}@media only screen and (max-width: 700px){.message-container-message-wrapper[_ngcontent-%COMP%]{max-height:100%}.message-container-message-wrapper[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{box-shadow:none}}"],data:{animation:[l.B]}})}return n})()}];let C=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(_),c.Bz]})}return n})(),M=(()=>{class n{static#e=this.\u0275fac=function(t){return new(t||n)};static#n=this.\u0275mod=e.oAB({type:n});static#t=this.\u0275inj=e.cJS({imports:[s.ez,C,g.Ps]})}return n})()}}]);
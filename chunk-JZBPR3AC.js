import{a as R}from"./chunk-F7HS3JHR.js";import{a as T,b as D,c as B,d as $,f as F,g as w,h as z,i as A,k as L}from"./chunk-FOZGX5EK.js";import{o as y,w as N}from"./chunk-GTXZ5CW7.js";import{ea as E,fa as I,j as O,l as P}from"./chunk-RPSJ2USE.js";import{Ab as m,Fa as f,Ic as v,Jb as t,Jc as M,Kb as e,Lb as k,Lc as h,Mc as S,Nc as b,Pb as x,Zb as i,_b as l,eb as r,ec as C,hc as p,ic as c,ja as g,yb as d}from"./chunk-5ZI6TZGW.js";function V(a,o){a&1&&(t(0,"div"),k(1,"app-spinner"),e())}function j(a,o){if(a&1&&(t(0,"div")(1,"p"),i(2),e()()),a&2){let n=o.ngIf;r(2),l(n)}}function H(a,o){if(a&1&&(t(0,"li"),i(1),e()),a&2){let n=o.$implicit;r(),l(n)}}function U(a,o){if(a&1&&(t(0,"div",4)(1,"mat-card",5)(2,"mat-card-header")(3,"mat-card-title"),i(4),e(),t(5,"mat-card-subtitle"),i(6),e()(),t(7,"mat-card-content")(8,"div",6)(9,"div",7)(10,"mat-icon"),i(11,"event"),e(),t(12,"span"),i(13,"Deadline:"),e(),t(14,"span"),i(15),p(16,"date"),e()(),t(17,"div",8)(18,"mat-icon"),i(19,"priority_high"),e(),t(20,"span"),i(21,"Priority:"),e(),t(22,"span"),i(23),e()(),t(24,"div",9)(25,"mat-icon"),i(26,"check_circle"),e(),t(27,"span"),i(28,"Status:"),e(),t(29,"span"),i(30),e()(),t(31,"div",10)(32,"mat-icon"),i(33,"people"),e(),t(34,"span"),i(35,"Performers:"),e(),t(36,"ol"),d(37,H,2,1,"li",11),e()()()()()()),a&2){let n=o.ngIf;r(4),l(n==null?null:n.title),r(2),l(n==null?null:n.description),r(9),l(c(16,6,n==null?null:n.deadline)),r(8),l(n==null?null:n.priority),r(7),l(n==null?null:n.status),r(7),m("ngForOf",n==null?null:n.performers)}}var rt=(()=>{let o=class o{constructor(){this.store=f(y),this.route=f(O),this.router=f(P)}ngOnInit(){this.initializeValues(),this.fetchData()}initializeValues(){this.isLoading$=this.store.select(z),this.error$=this.store.select(A),this.task$=this.store.select(L)}fetchData(){this.route.params.subscribe(u=>{let s=u.id;this.store.dispatch(R({id:s}))})}backTasks(){this.router.navigateByUrl("/tasks")}};o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=g({type:o,selectors:[["app-task-detail"]],standalone:!0,features:[C],decls:12,vars:9,consts:[[4,"ngIf"],["class","task-detail",4,"ngIf"],[1,"btn"],["mat-raised-button","",1,"button",3,"click"],[1,"task-detail"],[1,"task-detail__card"],[1,"task-detail__body"],[1,"task-detail__deadline","box"],[1,"task-detail__priority","box"],[1,"task-detail__status","box"],[1,"task-detail__performers","box"],[4,"ngFor","ngForOf"]],template:function(s,_){s&1&&(d(0,V,2,0,"div",0),p(1,"async"),d(2,j,3,1,"div",0),p(3,"async"),d(4,U,38,8,"div",1),p(5,"async"),t(6,"div",2)(7,"button",3),x("click",function(){return _.backTasks()}),t(8,"mat-icon"),i(9,"arrow_back"),e(),t(10,"span"),i(11,"Back to task"),e()()()),s&2&&(m("ngIf",c(1,3,_.isLoading$)),r(2),m("ngIf",c(3,5,_.error$)),r(2),m("ngIf",c(5,7,_.task$)))},dependencies:[b,v,M,h,S,w,T,B,F,$,D,I,E,N],styles:[".task-detail__card[_ngcontent-%COMP%]{margin:10px;max-width:600px}.task-detail__body[_ngcontent-%COMP%]{padding:20px}.task-detail__body[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;align-items:center}.task-detail__deadline[_ngcontent-%COMP%], .task-detail__priority[_ngcontent-%COMP%], .task-detail__status[_ngcontent-%COMP%], .task-detail__performers[_ngcontent-%COMP%]{margin-bottom:10px}.task-detail__deadline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .task-detail__priority[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .task-detail__status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .task-detail__performers[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px}.button[_ngcontent-%COMP%]{margin-right:10px;display:flex;align-items:center;background-color:#333;color:#fff;padding:5px 10spx;border-radius:4px;font-size:12px;font-weight:700;text-transform:uppercase}.button[_ngcontent-%COMP%]:hover{background-color:#575252}.btn[_ngcontent-%COMP%]{margin:10px}"]});let a=o;return a})();export{rt as TaskDetailComponent};
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{wEaB:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),s=u("iInd"),c=u("SVse");class r{constructor(l,n){this.tvService=l,this.router=n}ngOnInit(){this.router.params.subscribe(l=>{this.id=l.id,this.title=l.name,this.getTvByGenre(this.id)})}getTvByGenre(l){this.tvService.getTVShowByGenre(l).subscribe(l=>{this._tv=l.results})}}var a=u("xpNR"),b=t.wb({encapsulation:0,styles:[[""]],data:{}});function o(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,22,"div",[["class","col-md-2 listing__items"]],null,null,null,null,null)),(l()(),t.yb(1,0,null,null,21,"div",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Kb(l,2).onClick()&&i),i}),null,null)),t.xb(2,16384,null,0,s.n,[s.m,s.a,[8,null],t.I,t.m],{routerLink:[0,"routerLink"]},null),t.Lb(3,2),(l()(),t.yb(4,0,null,null,18,"div",[["class","movie-item-style"]],null,null,null,null,null)),(l()(),t.yb(5,0,null,null,4,"div",[["class","overlay"]],null,null,null,null,null)),(l()(),t.yb(6,0,null,null,3,"div",[["class","hover-inner"]],null,null,null,null,null)),(l()(),t.yb(7,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["play_arrow"])),(l()(),t.Sb(-1,null,[" PLAY NOW"])),(l()(),t.yb(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.yb(11,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Sb(12,null,["",""])),(l()(),t.yb(13,0,null,null,5,"p",[["class","rate"]],null,null,null,null,null)),(l()(),t.yb(14,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),t.Sb(-1,null,["star"])),(l()(),t.yb(16,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Sb(17,null,["",""])),(l()(),t.Sb(-1,null,[" /10"])),(l()(),t.yb(19,0,null,null,3,"p",[["class","year"]],null,null,null,null,null)),(l()(),t.yb(20,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Sb(21,null,["",""])),t.Ob(22,2)],(function(l,n){var u=l(n,3,0,"/tv/",n.context.$implicit.id);l(n,2,0,u)}),(function(l,n){l(n,10,0,t.Cb(1,"https://image.tmdb.org/t/p/w370_and_h556_bestv2/",null==n.context.$implicit?null:n.context.$implicit.poster_path,"")),l(n,12,0,null==n.context.$implicit?null:n.context.$implicit.title),l(n,17,0,null==n.context.$implicit?null:n.context.$implicit.vote_average);var u=t.Tb(n,21,0,l(n,22,0,t.Kb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.release_date,"yyyy"));l(n,21,0,u)}))}function v(l){return t.Ub(0,[t.Mb(0,c.e,[t.x]),(l()(),t.yb(1,0,null,null,6,"div",[["class","listing"]],null,null,null,null,null)),(l()(),t.yb(2,0,null,null,2,"div",[["class","listing__head"]],null,null,null,null,null)),(l()(),t.yb(3,0,null,null,1,"h2",[["class","listing__title"]],null,null,null,null,null)),(l()(),t.Sb(4,null,["TV Genre: ",""])),(l()(),t.yb(5,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(16777216,null,null,1,null,o)),t.xb(7,278528,null,0,c.k,[t.T,t.Q,t.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.component._tv)}),(function(l,n){l(n,4,0,n.component.title)}))}function p(l){return t.Ub(0,[(l()(),t.yb(0,0,null,null,1,"app-tv-genre",[],null,null,null,v,b)),t.xb(1,114688,null,0,r,[a.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.ub("app-tv-genre",r,p,{},{},[]);class m{}var d=u("sNRQ");u.d(n,"TvGenreModuleNgFactory",(function(){return h}));var h=t.vb(i,[],(function(l){return t.Hb([t.Ib(512,t.k,t.gb,[[8,[e.a,y]],[3,t.k],t.B]),t.Ib(4608,c.n,c.m,[t.x,[2,c.E]]),t.Ib(1073742336,c.c,c.c,[]),t.Ib(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t.Ib(1073742336,m,m,[]),t.Ib(1073742336,d.a,d.a,[]),t.Ib(1073742336,i,i,[]),t.Ib(1024,s.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);
var __extends=this&&this.__extends||function(){var n=function(t,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var l in t)t.hasOwnProperty(l)&&(n[l]=t[l])})(t,l)};return function(t,l){function e(){this.constructor=t}n(t,l),t.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/uUt":function(n,t,l){"use strict";l.d(t,"a",(function(){return o}));var e=l("7o/Q");function o(n,t){return function(l){return l.lift(new u(n,t))}}var u=function(){function n(n,t){this.compare=n,this.keySelector=t}return n.prototype.call=function(n,t){return t.subscribe(new i(n,this.compare,this.keySelector))},n}(),i=function(n){function t(t,l,e){var o=this;return(o=n.call(this,t)||this).keySelector=e,o.hasKey=!1,"function"==typeof l&&(o.compare=l),o}return __extends(t,n),t.prototype.compare=function(n,t){return n===t},t.prototype._next=function(n){var t;try{var l=this.keySelector;t=l?l(n):n}catch(o){return this.destination.error(o)}var e=!1;if(this.hasKey)try{e=(0,this.compare)(this.key,t)}catch(o){return this.destination.error(o)}else this.hasKey=!0;e||(this.key=t,this.destination.next(n))},t}(e.a)},"1G5W":function(n,t,l){"use strict";l.d(t,"a",(function(){return u}));var e=l("l7GE"),o=l("ZUHj");function u(n){return function(t){return t.lift(new i(n))}}var i=function(){function n(n){this.notifier=n}return n.prototype.call=function(n,t){var l=new r(n),e=Object(o.a)(l,this.notifier);return e&&!l.seenValue?(l.add(e),t.subscribe(l)):l},n}(),r=function(n){function t(t){var l=this;return(l=n.call(this,t)||this).seenValue=!1,l}return __extends(t,n),t.prototype.notifyNext=function(n,t,l,e,o){this.seenValue=!0,this.complete()},t.prototype.notifyComplete=function(){},t}(e.a)},JW7A:function(n,t,l){"use strict";l.r(t);var e=l("8Y7J"),o=function(){},u=l("pMnS"),i=l("iInd"),r=l("SVse"),s=l("qf9b"),a=l("h0Oc"),c=l("hhfa"),p=l("+iwJ"),h=function(){function n(n,t){this.movieServices=n,this.router=t,this.person_cast=[]}return n.prototype.ngOnInit=function(){var n=this;this.router.params.subscribe((function(t){n.id=t.id,n.gerPersonDetails(n.id),n.getPersonCastMovie(n.id)}))},n.prototype.gerPersonDetails=function(n){var t=this;this.movieServices.getPersonDetail(n).subscribe((function(n){t.person=n}))},n.prototype.getPersonCastMovie=function(n){var t=this;this.movieServices.getPersonCast(n).subscribe((function(n){t.person_cast=n.cast}))},n}(),f=l("Di5K"),b=e.wb({encapsulation:0,styles:[['@media (min-width:1024px){.info[_ngcontent-%COMP%]{display:flex}}.info__movies[_ngcontent-%COMP%]{display:flex;align-items:initial}.left[_ngcontent-%COMP%]{display:none}@media (min-width:1024px){.left[_ngcontent-%COMP%]{display:block;width:25%;max-width:400px;padding-right:3rem}.right[_ngcontent-%COMP%]{flex:1}}.poster[_ngcontent-%COMP%]{position:relative;height:0;padding-top:150.27%;overflow:hidden;background-color:#dc4666}.poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .poster[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.poster[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.overview[_ngcontent-%COMP%]{max-width:1000px;margin-bottom:3rem;font-size:1.5rem;color:#fafafa}@media (min-width:1200px){.left[_ngcontent-%COMP%]{padding-right:5rem}.overview[_ngcontent-%COMP%]{font-size:1.6rem}}.title[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1.8rem;color:#fff;letter-spacing:.4px}@media (min-width:1200px){.title[_ngcontent-%COMP%]{font-size:2.4rem}}.stats[_ngcontent-%COMP%]{margin-bottom:3rem;font-size:1.5rem;color:#fafafa}@media (min-width:1200px){.stats[_ngcontent-%COMP%]{font-size:1.6rem}}.stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;padding:.2rem 0}@media (min-width:1024px){.stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50%}}@media (min-width:1400px){.stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%}}.stats[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2196f3;text-decoration:underline}.label[_ngcontent-%COMP%]{flex:1;max-width:90px;margin-right:1.5rem;color:#fff}@media (min-width:640px){.label[_ngcontent-%COMP%]{max-width:110px}}.value[_ngcontent-%COMP%]{flex:2}.external[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;margin-left:-.5rem}.external[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:4.4rem;height:4.4rem}.external[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.external[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   svg[_ngcontent-%COMP%], .external[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#2196f3}.comma_[_ngcontent-%COMP%]{margin-right:9px}.comma_[_ngcontent-%COMP%]:not(:last-child):after{content:","}']],data:{}});function d(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.Sb(1,null,["",""]))],null,(function(n,t){var l=t.component;n(t,1,0,null==l.person?null:l.person.biography)}))}function _(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,[" Known For "])),(n()(),e.yb(3,0,null,null,1,"div",[["class","value"]],null,null,null,null,null)),(n()(),e.Sb(4,null,[" "," "]))],null,(function(n,t){var l=t.component;n(t,4,0,null==l.person?null:l.person.known_for_department)}))}function m(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,[" Born "])),(n()(),e.yb(3,0,null,null,2,"div",[["class","value"]],null,null,null,null,null)),(n()(),e.Sb(4,null,[" "," "])),e.Ob(5,1)],null,(function(n,t){var l=t.component,o=e.Tb(t,4,0,n(t,5,0,e.Kb(t.parent,0),null==l.person?null:l.person.birthday));n(t,4,0,o)}))}function v(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,[" Death "])),(n()(),e.yb(3,0,null,null,2,"div",[["class","value"]],null,null,null,null,null)),(n()(),e.Sb(4,null,[" "," "])),e.Ob(5,1)],null,(function(n,t){var l=t.component,o=e.Tb(t,4,0,n(t,5,0,e.Kb(t.parent,0),null==l.person?null:l.person.deathday));n(t,4,0,o)}))}function y(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,1,"div",[["class","label"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,[" Place of Birth "])),(n()(),e.yb(3,0,null,null,1,"div",[["class","value"]],null,null,null,null,null)),(n()(),e.Sb(4,null,[" "," "]))],null,(function(n,t){var l=t.component;n(t,4,0,null==l.person?null:l.person.place_of_birth)}))}function g(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,t){n(t,0,0,e.Cb(1,"https://image.tmdb.org/t/p/w370_and_h556_bestv2/",null==t.parent.context.$implicit?null:t.parent.context.$implicit.poster_path,""))}))}function O(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,0,"img",[["src","assets/images/default-movie.png"]],null,null,null,null,null))],null,null)}function P(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,23,"div",[["class","listing-item-style"]],null,[[null,"click"]],(function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.Kb(n,1).onClick()&&o),o}),null,null)),e.xb(1,16384,null,0,i.n,[i.m,i.a,[8,null],e.I,e.m],{routerLink:[0,"routerLink"]},null),e.Lb(2,2),(n()(),e.yb(3,0,null,null,4,"div",[["class","overlay"]],null,null,null,null,null)),(n()(),e.yb(4,0,null,null,3,"div",[["class","hover"]],null,null,null,null,null)),(n()(),e.yb(5,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,["play_arrow"])),(n()(),e.Sb(-1,null,[" PLAY NOW "])),(n()(),e.nb(16777216,null,null,1,null,g)),e.xb(9,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,O)),e.xb(11,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.yb(12,0,null,null,1,"h6",[],null,null,null,null,null)),(n()(),e.Sb(13,null,["",""])),(n()(),e.yb(14,0,null,null,5,"p",[["class","rate"]],null,null,null,null,null)),(n()(),e.yb(15,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,["star"])),(n()(),e.yb(17,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Sb(18,null,["",""])),(n()(),e.Sb(-1,null,[" /10"])),(n()(),e.yb(20,0,null,null,3,"div",[["class","year"]],null,null,null,null,null)),(n()(),e.yb(21,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Sb(22,null,["",""])),e.Ob(23,2)],(function(n,t){var l=n(t,2,0,"/movies/",t.context.$implicit.id);n(t,1,0,l),n(t,9,0,null==t.context.$implicit?null:t.context.$implicit.poster_path),n(t,11,0,!(null!=t.context.$implicit&&t.context.$implicit.poster_path))}),(function(n,t){n(t,13,0,null==t.context.$implicit?null:t.context.$implicit.title),n(t,18,0,null==t.context.$implicit?null:t.context.$implicit.vote_average);var l=e.Tb(t,22,0,n(t,23,0,e.Kb(t.parent.parent,1),null==t.context.$implicit?null:t.context.$implicit.release_date,"yyyy"));n(t,22,0,l)}))}function C(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,10,"div",[["class","listing-space mb-20"]],null,null,null,null,null)),(n()(),e.yb(1,0,null,null,2,"div",[["class","listing__head"]],null,null,null,null,null)),(n()(),e.yb(2,0,null,null,1,"h2",[["class","listing__title"]],null,null,null,null,null)),(n()(),e.Sb(-1,null,["Similar Movies"])),(n()(),e.yb(4,0,null,null,6,"p-carousel",[],null,null,null,s.b,s.a)),e.xb(5,3325952,null,3,a.a,[e.m,e.D],{numVisible:[0,"numVisible"],numScroll:[1,"numScroll"],value:[2,"value"],circular:[3,"circular"]},null),e.Qb(335544320,1,{headerFacet:0}),e.Qb(335544320,2,{footerFacet:0}),e.Qb(603979776,3,{templates:1}),(n()(),e.nb(0,null,null,1,null,P)),e.xb(10,16384,[[3,4]],0,c.a,[e.Q],{name:[0,"name"]},null)],(function(n,t){n(t,5,0,6,4,t.component.person_cast,!1),n(t,10,0,"item")}),null)}function x(n){return e.Ub(0,[e.Mb(0,p.a,[]),e.Mb(0,r.e,[e.x]),(n()(),e.yb(2,0,null,null,24,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),e.yb(3,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.yb(4,0,null,null,22,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),e.yb(5,0,null,null,19,"div",[["class","spacing info"]],null,null,null,null,null)),(n()(),e.yb(6,0,null,null,2,"div",[["class","left"]],null,null,null,null,null)),(n()(),e.yb(7,0,null,null,1,"div",[["class","poster lazyloaded"]],null,null,null,null,null)),(n()(),e.yb(8,0,null,null,0,"img",[["class","lazyload"]],[[8,"src",4]],null,null,null,null)),(n()(),e.yb(9,0,null,null,15,"div",[["class","right"]],null,null,null,null,null)),(n()(),e.yb(10,0,null,null,4,"div",[["class","overview"]],null,null,null,null,null)),(n()(),e.yb(11,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e.Sb(12,null,["",""])),(n()(),e.nb(16777216,null,null,1,null,d)),e.xb(14,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.yb(15,0,null,null,9,"div",[["class","stats"]],null,null,null,null,null)),(n()(),e.yb(16,0,null,null,8,"ul",[["class","nolist"]],null,null,null,null,null)),(n()(),e.nb(16777216,null,null,1,null,_)),e.xb(18,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,m)),e.xb(20,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,v)),e.xb(22,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,y)),e.xb(24,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(16777216,null,null,1,null,C)),e.xb(26,16384,null,0,r.l,[e.T,e.Q],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,14,0,l.person.biography),n(t,18,0,l.person.known_for_department),n(t,20,0,l.person.birthday),n(t,22,0,null==l.person?null:l.person.deathday),n(t,24,0,l.person.place_of_birth),n(t,26,0,!l.person_cast)}),(function(n,t){var l=t.component;n(t,8,0,e.Cb(1,"https://image.tmdb.org/t/p/w370_and_h556_bestv2/",null==l.person?null:l.person.profile_path,"")),n(t,12,0,null==l.person?null:l.person.name)}))}var w=e.ub("app-person",h,(function(n){return e.Ub(0,[(n()(),e.yb(0,0,null,null,1,"app-person",[],null,null,null,x,b)),e.xb(1,114688,null,0,h,[f.a,i.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),M=l("POq0"),I=function(){},R=l("sNRQ"),E=l("IP0z"),S=l("Xd0L"),j=l("cUpR"),k=l("zMNK"),F=l("/HVE"),D=l("5GAg"),A=l("rWV4");l.d(t,"PersonModuleNgFactory",(function(){return T}));var T=e.vb(o,[],(function(n){return e.Hb([e.Ib(512,e.k,e.gb,[[8,[u.a,w]],[3,e.k],e.B]),e.Ib(4608,r.n,r.m,[e.x,[2,r.E]]),e.Ib(4608,M.c,M.c,[]),e.Ib(1073742336,r.c,r.c,[]),e.Ib(1073742336,i.q,i.q,[[2,i.v],[2,i.m]]),e.Ib(1073742336,I,I,[]),e.Ib(1073742336,R.a,R.a,[]),e.Ib(1073742336,E.a,E.a,[]),e.Ib(1073742336,S.l,S.l,[[2,S.d],[2,j.f]]),e.Ib(1073742336,k.g,k.g,[]),e.Ib(1073742336,F.b,F.b,[]),e.Ib(1073742336,S.u,S.u,[]),e.Ib(1073742336,M.d,M.d,[]),e.Ib(1073742336,D.a,D.a,[]),e.Ib(1073742336,A.j,A.j,[]),e.Ib(1073742336,c.b,c.b,[]),e.Ib(1073742336,a.b,a.b,[]),e.Ib(1073742336,o,o,[]),e.Ib(1024,i.k,(function(){return[[{path:"",component:h}]]}),[])])}))},POq0:function(n,t,l){"use strict";l.d(t,"c",(function(){return s})),l.d(t,"b",(function(){return a})),l.d(t,"a",(function(){return c})),l.d(t,"d",(function(){return p}));var e=l("KCVW"),o=l("8Y7J"),u=l("HDdC"),i=l("XNiG"),r=l("Kj3r"),s=function(){var n=function(){function n(){}return n.prototype.create=function(n){return"undefined"==typeof MutationObserver?null:new MutationObserver(n)},n}();return n.ngInjectableDef=Object(o.Yb)({factory:function(){return new n},token:n,providedIn:"root"}),n}(),a=function(){var n=function(){function n(n){this._mutationObserverFactory=n,this._observedElements=new Map}return n.prototype.ngOnDestroy=function(){var n=this;this._observedElements.forEach((function(t,l){return n._cleanupObserver(l)}))},n.prototype.observe=function(n){var t=this,l=Object(e.d)(n);return new u.a((function(n){var e=t._observeElement(l).subscribe(n);return function(){e.unsubscribe(),t._unobserveElement(l)}}))},n.prototype._observeElement=function(n){if(this._observedElements.has(n))this._observedElements.get(n).count++;else{var t=new i.a,l=this._mutationObserverFactory.create((function(n){return t.next(n)}));l&&l.observe(n,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(n,{observer:l,stream:t,count:1})}return this._observedElements.get(n).stream},n.prototype._unobserveElement=function(n){this._observedElements.has(n)&&(this._observedElements.get(n).count--,this._observedElements.get(n).count||this._cleanupObserver(n))},n.prototype._cleanupObserver=function(n){if(this._observedElements.has(n)){var t=this._observedElements.get(n),l=t.observer,e=t.stream;l&&l.disconnect(),e.complete(),this._observedElements.delete(n)}},n}();return n.ngInjectableDef=Object(o.Yb)({factory:function(){return new n(Object(o.Zb)(s))},token:n,providedIn:"root"}),n}(),c=function(){function n(n,t,l){this._contentObserver=n,this._elementRef=t,this._ngZone=l,this.event=new o.o,this._disabled=!1,this._currentSubscription=null}return Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(e.b)(n),this._disabled?this._unsubscribe():this._subscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"debounce",{get:function(){return this._debounce},set:function(n){this._debounce=Object(e.e)(n),this._subscribe()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._currentSubscription||this.disabled||this._subscribe()},n.prototype.ngOnDestroy=function(){this._unsubscribe()},n.prototype._subscribe=function(){var n=this;this._unsubscribe();var t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular((function(){n._currentSubscription=(n.debounce?t.pipe(Object(r.a)(n.debounce)):t).subscribe(n.event)}))},n.prototype._unsubscribe=function(){this._currentSubscription&&this._currentSubscription.unsubscribe()},n}(),p=function(){}},zMNK:function(n,t,l){"use strict";l.d(t,"d",(function(){return i})),l.d(t,"h",(function(){return r})),l.d(t,"a",(function(){return s})),l.d(t,"e",(function(){return a})),l.d(t,"b",(function(){return c})),l.d(t,"c",(function(){return p})),l.d(t,"g",(function(){return h})),l.d(t,"f",(function(){return f}));var e=l("8Y7J");function o(){throw Error("Host already has a portal attached")}var u=function(){function n(){}return n.prototype.attach=function(n){return null==n&&function(){throw Error("Attempting to attach a portal to a null PortalOutlet")}(),n.hasAttached()&&o(),this._attachedHost=n,n.attach(this)},n.prototype.detach=function(){var n=this._attachedHost;null==n?function(){throw Error("Attempting to detach a portal that is not attached to a host")}():(this._attachedHost=null,n.detach())},Object.defineProperty(n.prototype,"isAttached",{get:function(){return null!=this._attachedHost},enumerable:!0,configurable:!0}),n.prototype.setAttachedHost=function(n){this._attachedHost=n},n}(),i=function(n){function t(t,l,e,o){var u=this;return(u=n.call(this)||this).component=t,u.viewContainerRef=l,u.injector=e,u.componentFactoryResolver=o,u}return __extends(t,n),t}(u),r=function(n){function t(t,l,e){var o=this;return(o=n.call(this)||this).templateRef=t,o.viewContainerRef=l,o.context=e,o}return __extends(t,n),Object.defineProperty(t.prototype,"origin",{get:function(){return this.templateRef.elementRef},enumerable:!0,configurable:!0}),t.prototype.attach=function(t,l){return void 0===l&&(l=this.context),this.context=l,n.prototype.attach.call(this,t)},t.prototype.detach=function(){return this.context=void 0,n.prototype.detach.call(this)},t}(u),s=function(){function n(){this._isDisposed=!1}return n.prototype.hasAttached=function(){return!!this._attachedPortal},n.prototype.attach=function(n){return n||function(){throw Error("Must provide a portal to attach")}(),this.hasAttached()&&o(),this._isDisposed&&function(){throw Error("This PortalOutlet has already been disposed")}(),n instanceof i?(this._attachedPortal=n,this.attachComponentPortal(n)):n instanceof r?(this._attachedPortal=n,this.attachTemplatePortal(n)):void function(){throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.")}()},n.prototype.detach=function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()},n.prototype.dispose=function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0},n.prototype.setDisposeFn=function(n){this._disposeFn=n},n.prototype._invokeDisposeFn=function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)},n}(),a=function(n){function t(t,l,e,o){var u=this;return(u=n.call(this)||this).outletElement=t,u._componentFactoryResolver=l,u._appRef=e,u._defaultInjector=o,u}return __extends(t,n),t.prototype.attachComponentPortal=function(n){var t,l=this,e=(n.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(n.component);return n.viewContainerRef?(t=n.viewContainerRef.createComponent(e,n.viewContainerRef.length,n.injector||n.viewContainerRef.injector),this.setDisposeFn((function(){return t.destroy()}))):(t=e.create(n.injector||this._defaultInjector),this._appRef.attachView(t.hostView),this.setDisposeFn((function(){l._appRef.detachView(t.hostView),t.destroy()}))),this.outletElement.appendChild(this._getComponentRootNode(t)),t},t.prototype.attachTemplatePortal=function(n){var t=this,l=n.viewContainerRef,e=l.createEmbeddedView(n.templateRef,n.context);return e.detectChanges(),e.rootNodes.forEach((function(n){return t.outletElement.appendChild(n)})),this.setDisposeFn((function(){var n=l.indexOf(e);-1!==n&&l.remove(n)})),e},t.prototype.dispose=function(){n.prototype.dispose.call(this),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)},t.prototype._getComponentRootNode=function(n){return n.hostView.rootNodes[0]},t}(s),c=function(n){function t(t,l){return n.call(this,t,l)||this}return __extends(t,n),t}(r),p=function(n){function t(t,l){var o=this;return(o=n.call(this)||this)._componentFactoryResolver=t,o._viewContainerRef=l,o._isInitialized=!1,o.attached=new e.o,o}return __extends(t,n),Object.defineProperty(t.prototype,"portal",{get:function(){return this._attachedPortal},set:function(t){(!this.hasAttached()||t||this._isInitialized)&&(this.hasAttached()&&n.prototype.detach.call(this),t&&n.prototype.attach.call(this,t),this._attachedPortal=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"attachedRef",{get:function(){return this._attachedRef},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this._isInitialized=!0},t.prototype.ngOnDestroy=function(){n.prototype.dispose.call(this),this._attachedPortal=null,this._attachedRef=null},t.prototype.attachComponentPortal=function(t){t.setAttachedHost(this);var l=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),o=l.createComponent(e,l.length,t.injector||l.injector);return n.prototype.setDisposeFn.call(this,(function(){return o.destroy()})),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o},t.prototype.attachTemplatePortal=function(t){var l=this;t.setAttachedHost(this);var e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context);return n.prototype.setDisposeFn.call(this,(function(){return l._viewContainerRef.clear()})),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e},t}(s),h=function(){},f=function(){function n(n,t){this._parentInjector=n,this._customTokens=t}return n.prototype.get=function(n,t){var l=this._customTokens.get(n);return void 0!==l?l:this._parentInjector.get(n,t)},n}()}}]);
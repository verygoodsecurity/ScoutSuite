(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{667:function(e,n,t){"use strict";t.r(n);var r=t(1),s=(t(0),t(766)),c=t(55),a=t(44),i=t(769),l=t(64),u=t(779),j=t(770),o=function(e){return Object(a.l)(e,"",(function(e){return function(e){return Object(r.jsx)(l.a,{service:"aad",resource:"groups",id:e.id,name:e.name})}(e)}))},b=function(e){return Object(a.l)(e,"",(function(e){return function(e){return Object(r.jsx)(l.a,{service:"aad",resource:"users",id:e.id,name:e.name})}(e)}))},d=function(e){return Object(a.l)(e,"",(function(e){return function(e){return Object(r.jsx)(l.a,{service:"aad",resource:"service_principals",id:e.id,name:e.name})}(e)}))};n.default=function(e){var n=e.data,t=e.item,l=Object(u.a)("aad","users",t.assignments?t.assignments.users:[]).data,O=Object(u.a)("aad","groups",t.assignments?t.assignments.groups:[]).data,p=Object(u.a)("aad","service_principals",t.assignments?t.assignments.service_principals:[]).data;return n?Object(r.jsxs)(c.a,{data:n,children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)(c.c,{label:"ID",valuePath:"id",renderValue:a.q}),Object(r.jsx)(c.c,{label:"Description",valuePath:"description",renderValue:a.q}),Object(r.jsx)(c.c,{label:"Type",valuePath:"type",renderValue:a.q}),Object(r.jsx)(c.c,{label:"Role Type",valuePath:"role_type",renderValue:a.q}),Object(r.jsx)(c.c,{label:"Assignable Scopes",valuePath:"assignable_scopes",renderValue:a.q}),Object(r.jsx)(c.c,{label:"Custom Subscriptions Owner Roles",valuePath:"custom_subscription_owner_role"})]}),Object(r.jsxs)(i.b,{children:[Object(r.jsx)(i.a,{title:"Permissions",children:Object(r.jsx)(j.a,{name:"",policy:t.permissions,defaultOpen:!0})}),Object(r.jsxs)(i.a,{title:"Assignments",children:[t.assignments.users&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.c,{label:"Users",errorPath:"users",value:""}),Object(r.jsx)("ul",{children:b(l)})]}),t.assignments.groups&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.c,{label:"Groups",errorPath:"groups",value:""}),Object(r.jsx)("ul",{children:o(O)})]}),t.assignments.service_principals&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.c,{label:"Service Principals",errorPath:"serviceprincipals",value:""}),Object(r.jsx)("ul",{children:d(p)})]})]})]})]}):null}},766:function(e,n,t){"use strict";var r=t(1);t(0),t(767);n.a=function(e){var n=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),n]})}},767:function(e,n,t){},768:function(e,n,t){},769:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return l.b}));var r=t(1),s=t(13),c=t(0),a=t(8),i=t.n(a),l=t(79),u=t(80),j=t(63),o=(t(768),function(e){var n=e.title,t=e.isSelected,a=e.disabled,o=e.onClick,b=e.children,d=Object(c.useState)(""),O=Object(s.a)(d,2),p=O[0],f=O[1],x=p?Object(r.jsxs)(r.Fragment,{children:[n,j.a[p].icon]}):n;return Object(r.jsx)(u.c.Provider,{value:f,children:Object(r.jsx)(l.a,{title:x,className:i()("partial-tab-pane",p),isSelected:t,disabled:a,onClick:o,children:b})})})},770:function(e,n,t){"use strict";var r=t(1),s=t(13),c=t(0),a=t(8),i=t.n(a),l=t(776),u=t.n(l),j=t(798),o=t(789),b=t(790),d=t(772),O=t.n(d),p=t(777),f=t.n(p),x=t(159),h=t.n(x),m=t(29),v=t.n(m),g=t(80),P=t(227),S=t(44),y=(t(771),function(e){var n=e.name,t=e.policy,a=e.policyPath,l=e.defaultOpen,d=Object(c.useContext)(g.a).path_to_issues.some((function(e){return e.includes(a)}));if(v()(t))return null;var p=Object(r.jsx)("h4",{className:"policy-title",children:n}),x=function(e,n){return Object(r.jsx)(P.a,{value:(t=e,JSON.stringify(t,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:n,renderValue:function(e){return Object(S.p)(e)}});var t},m=Object(r.jsxs)("code",{children:["{",Object.entries(t).map((function(e,n){var c=Object(s.a)(e,2),l=c[0],j=c[1];return Object(r.jsxs)("div",{className:i()({inline:"string"===typeof j}),children:['"'.concat(l,'":\xa0'),"Statement"===l?Object(r.jsxs)(r.Fragment,{children:["[",Object(r.jsx)("br",{}),j.map((function(e,n){return Object(r.jsx)(u.a,{trigger:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{fontSize:"inherit"}),Object(r.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(r.jsx)(f.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:x(e,"".concat(a,".Statement.").concat(n))},n)})),"]"]}):Object(r.jsx)(r.Fragment,{children:x(j)}),n<h()(t)-1&&",",Object(r.jsx)("br",{})]},n)})),"}"]});return Object(r.jsx)("div",{className:"policy",children:n?Object(r.jsxs)(j.a,{defaultExpanded:l||d,children:[Object(r.jsx)(o.a,{expandIcon:Object(r.jsx)(O.a,{}),children:p}),Object(r.jsx)(b.a,{children:m})]}):m})});y.defaultProps={defaultOpen:!1},n.a=y},771:function(e,n,t){},779:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(33),s=t.n(r),c=t(57),a=t(13),i=t(0),l=t(88),u=function(e,n,t){var r=Object(i.useState)([]),u=Object(a.a)(r,2),j=u[0],o=u[1],b=Object(i.useState)(!0),d=Object(a.a)(b,2),O=d[0],p=d[1];return Object(i.useEffect)((function(){(function(){var r=Object(c.a)(s.a.mark((function r(){var c,a;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e&&n&&t)){r.next=15;break}return p(!0),r.prev=2,c=t.map((function(t){return l.b("services/".concat(e,"/resources/").concat(n,"/").concat(t))})),r.next=6,Promise.all(c);case 6:a=r.sent,console.info("useResources response",e,n,t,a),o(a),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),console.error(r.t0.message);case 14:p(!1);case 15:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(){return r.apply(this,arguments)}})()()}),[t]),{data:j,loading:O}}}}]);
//# sourceMappingURL=12.1f71cfb4.chunk.js.map
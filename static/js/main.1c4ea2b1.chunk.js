(this["webpackJsonpmoving-traveler"]=this["webpackJsonpmoving-traveler"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(3),i=n.n(s),r=(n(14),n(2)),j=(n(15),n(16),n(7),n(1));var o=function(e){var t=e.onNext;return Object(j.jsx)("div",{className:"page main-page vertical-center",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:"/moving-traveler/img/logo.png",alt:"logo_img"})}),Object(j.jsxs)("div",{className:"main-phrase",children:[Object(j.jsx)("h1",{children:"MOVING TRAVELER"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{children:"\ubc29\ub791\uc778\ub4e4\uc744 \uc704\ud55c \uc9d1\ud130 \ubd84\uc11d \ub3c4\uad6c"})]}),Object(j.jsx)("div",{className:"main-bottom vertical-center",children:Object(j.jsx)("button",{className:"btn",onClick:t,children:Object(j.jsx)("h2",{children:"\uc2dc\uc791\ud558\uae30"})})})]})})},l=n(4);var b=function(e){var t=e.onNext,n=Object(c.useState)(),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)([]),b=Object(r.a)(o,2),d=b[0],u=b[1],h=Object(c.useState)(),O=Object(r.a)(h,2),m=O[0],x=O[1],p=Object(c.useState)(""),g=Object(r.a)(p,2),v=g[0],f=g[1],w=Object(c.useState)(null),N=Object(r.a)(w,2),k=N[0],S=N[1],y=function(){m&&v&&(new window.kakao.maps.services.Places).keywordSearch(v,(function(e,t,n){if(t===window.kakao.maps.services.Status.OK){for(var c=new window.kakao.maps.LatLngBounds,a=[],s=0;s<e.length;s++)a.push({position:{lat:e[s].y,lng:e[s].x},content:e[s].place_name}),c.extend(new window.kakao.maps.LatLng(e[s].y,e[s].x));u(a),m.setBounds(c)}}))};return Object(c.useEffect)((function(){y()}),[m]),Object(j.jsxs)("div",{className:"page map-select",children:[Object(j.jsx)("h1",{children:"STEP 1 - \uc774\uc0ac \uc9c0\uc810 \uc120\ud0dd"}),Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("input",{className:"search-input",placeholder:"\ud0a4\uc6cc\ub4dc \uc785\ub825",value:v,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&y()}}),Object(j.jsx)("button",{className:"btn search-btn",onClick:y,children:Object(j.jsx)("h2",{children:"\uac80\uc0c9"})})]}),Object(j.jsx)(l.a,{center:{lat:37.496791485145096,lng:127.04567494254165},style:{width:"100%",height:"70%"},level:3,onCreate:x,children:d.map((function(e){return Object(j.jsx)(l.b,{position:e.position,onClick:function(){i(e),S(e)},children:s&&s.content===e.content&&Object(j.jsx)("div",{style:{color:"#000"},children:e.content})},"marker-".concat(e.content,"-").concat(e.position.lat,",").concat(e.position.lng))}))}),null!=k?Object(j.jsxs)("h3",{children:["\uc120\ud0dd: ",k.content]}):Object(j.jsx)("h3",{children:"\uc704 \uc9c0\ub3c4\uc5d0\uc11c \uac80\uc0c9 \ud6c4 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(j.jsx)("button",{className:"btn",onClick:function(){k?t(k):alert("\uac80\uc0c9 \ud6c4 \uc9c0\ub3c4\uc5d0\uc11c \uc704\uce58\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694")},children:Object(j.jsx)("h2",{children:"\uacb0\uc815"})})]})},d=n(8),u=n(9),h=["deposit","rent","area","distance"],O={deposit:"\ubcf4\uc99d\uae08 (\ub9cc\uc6d0)",rent:"\uc6d4\uc138 (\ub9cc\uc6d0)",area:"\uba74\uc801 (m2)",distance:"\uac70\ub9ac (km)"},m={deposit:{std:500,weight:-.1},rent:{std:50,weight:-10},area:{std:50,weight:5},distance:{std:5,weight:-5}};var x=function(e){var t=e.onNext,n=Object(c.useState)(),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){var e,t={},n=Object(u.a)(h);try{for(n.s();!(e=n.n()).done;){var c=e.value;t[c]={std:m[c].std,weight:m[c].weight}}}catch(a){n.e(a)}finally{n.f()}i(t)}),[]),Object(j.jsxs)("div",{className:"page option-page",children:[Object(j.jsx)("h1",{children:"STEP 2 - \uac00\uc911\uce58 \uc785\ub825"}),Object(j.jsx)("h4",{className:"description",children:"\uc911\uc694\ub3c4\uc5d0 \ub530\ub77c\uc11c \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud569\ub2c8\ub2e4. \uc591\uc218\uc774\uba74 \uac12\uc774 \ud074\uc218\ub85d \uc6b0\uc120\uc21c\uc704\ub97c \uac16\uace0, \uc74c\uc218\uc774\uba74 \uac12\uc774 \uc791\uc744\uc218\ub85d \uc6b0\uc120\uc21c\uc704\ub97c \uac16\uc2b5\ub2c8\ub2e4. \uac00\uc911\uce58\uc758 \uc808\ub300\uac12\uc774 \ud074\uc218\ub85d \ud574\ub2f9 \uc778\uc218\uac00 \ub354 \ud070 \uc911\uc694\ub3c4\ub97c \ucc28\uc9c0\ud569\ub2c8\ub2e4."}),Object(j.jsx)("table",{className:"option-table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\ud56d\ubaa9"}),Object(j.jsx)("th",{children:"\uae30\uc900\uac12"}),Object(j.jsx)("th",{children:"\uac00\uc911\uce58"})]}),s?h.map((function(e){return s&&s[e]?Object(j.jsxs)("tr",{keyname:e,children:[Object(j.jsx)("td",{children:O[e]}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"number",value:s[e].std,onChange:function(e){i((function(t){var n=e.target.parentNode.parentElement.getAttribute("keyname"),c=""===e.target.value?"":1*e.target.value;return t[n].std=""===c?0:c,Object(d.a)({},t)}))}})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"number",value:s[e].weight,onChange:function(e){i((function(t){var n=e.target.parentNode.parentElement.getAttribute("keyname"),c=""===e.target.value?"":1*e.target.value;return t[n].weight=""===c?0:c,Object(d.a)({},t)}))}})})]},e):null})):null]})}),Object(j.jsx)("button",{className:"btn",onClick:function(){return t(h.map((function(e){return{name:e,std:s[e].std,weight:s[e].weight}})))},children:Object(j.jsx)("h2",{children:"\uacb0\uacfc \uc694\uccad"})})]})};var p=function(e,t){fetch("https://li6ctgphqglz6ol7cuo5qik3dm0mphxc.lambda-url.us-east-1.on.aws/",{method:"POST",headers:{"Content-Type":"application/json"},body:window.btoa(window.JSON.stringify(e))}).then((function(e){return e.json()})).then((function(e){return t(e)}))};var g=function(e){var t=e.location,n=e.params,a=(e.onNext,Object(c.useState)(!1)),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),b=Object(r.a)(l,2),d=b[0],u=b[1],h=Object(c.useState)(),O=Object(r.a)(h,2),m=O[0],x=O[1],g=function(e){x(e.data),u(!0)};return Object(c.useEffect)((function(){t&&n&&o(!0)}),[t,n]),Object(c.useEffect)((function(){i&&p({params:n,location:[1*t.position.lat,1*t.position.lng]},g)}),[i]),Object(j.jsxs)("div",{className:"page result-page",children:[Object(j.jsx)("h1",{children:"\uacb0\uacfc"}),d?Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:m.items.map((function(e,t){return Object(j.jsxs)("tr",{onClick:function(){return console.log("clicked")},children:[Object(j.jsx)("td",{className:"img-cell",children:Object(j.jsx)("img",{src:"".concat(e.thumbnail_url,"?w=600")})}),Object(j.jsxs)("td",{children:["[",t+1,"\ub4f1] ",e.title]})]})}))})}):Object(j.jsx)("h2",{children:"\ub85c\ub529 \uc911..."})]})};var v=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(r.a)(s,2),l=i[0],d=i[1],u=Object(c.useState)(),h=Object(r.a)(u,2),O=h[0],m=h[1],p=function(){a((function(e){return(e+1)%4}))};return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"carousel",style:{marginLeft:"-".concat(100*n,"%")},children:[Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)(o,{onNext:p})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)(b,{onNext:function(e){d(e),p()}})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)(x,{onNext:function(e){m(e),p()}})}),Object(j.jsx)("div",{className:"carousel-item",children:Object(j.jsx)(g,{location:l,params:O})})]})})};var f=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(c.useState)([0,0])),a=Object(r.a)(n,2),s=(a[0],a[1],Object(c.useState)([{name:"\uba74\uc801(m2)",std:50,weight:5},{name:"\ubcf4\uc99d\uae08",std:500,weight:-.1},{name:"\uc6d4\uc138",std:50,weight:-10},{name:"\uac70\ub9ac",std:5e3,weight:-5}])),i=Object(r.a)(s,2);return i[0],i[1],Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(v,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.1c4ea2b1.chunk.js.map
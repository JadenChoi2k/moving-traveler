(this["webpackJsonpmoving-traveler"]=this["webpackJsonpmoving-traveler"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(3),i=n.n(s),r=(n(14),n(2)),o=(n(15),n(16),n(7),n(1));var j=function(e){var t=e.onNext;return Object(o.jsx)("div",{className:"page main-page vertical-center",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:"/moving-traveler/img/logo.png",alt:"logo_img"})}),Object(o.jsxs)("div",{className:"main-phrase",children:[Object(o.jsx)("h1",{children:"MOVING TRAVELER"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{children:"\uc774\uc0ac \uac00\uae30 \uc804 \ubd80\ub3d9\uc0b0 \ubd84\uc11d"})]}),Object(o.jsx)("div",{className:"main-bottom vertical-center",children:Object(o.jsx)("button",{className:"btn",onClick:t,children:Object(o.jsx)("h2",{children:"\uc2dc\uc791\ud558\uae30"})})})]})})},l=n(4);var b=function(e){var t=e.onNext,n=Object(c.useState)(),a=Object(r.a)(n,2),s=a[0],i=a[1],j=Object(c.useState)([]),b=Object(r.a)(j,2),d=b[0],h=b[1],u=Object(c.useState)(),O=Object(r.a)(u,2),m=O[0],x=O[1],g=Object(c.useState)(""),p=Object(r.a)(g,2),v=p[0],f=p[1],w=Object(c.useState)(null),N=Object(r.a)(w,2),k=N[0],y=N[1],S=function(){m&&v&&(new window.kakao.maps.services.Places).keywordSearch(v,(function(e,t,n){if(t===window.kakao.maps.services.Status.OK){for(var c=new window.kakao.maps.LatLngBounds,a=[],s=0;s<e.length;s++)a.push({position:{lat:e[s].y,lng:e[s].x},content:e[s].place_name}),c.extend(new window.kakao.maps.LatLng(e[s].y,e[s].x));h(a),m.setBounds(c)}}))};return Object(c.useEffect)((function(){S()}),[m]),Object(o.jsxs)("div",{className:"page map-select",children:[Object(o.jsx)("h1",{children:"STEP 1 - \uac70\uc810 \uc120\ud0dd"}),Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("input",{className:"search-input",placeholder:"\uc7a5\uc18c \uc785\ub825",value:v,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){"Enter"===e.key?S():"Tab"===e.key&&(e.preventDefault(),e.target.focus())}}),Object(o.jsx)("button",{className:"btn search-btn",onClick:S,children:Object(o.jsx)("h2",{children:"\uac80\uc0c9"})})]}),Object(o.jsx)(l.a,{center:{lat:37.496791485145096,lng:127.04567494254165},style:{width:"100%",height:"70%"},level:3,onCreate:x,children:d.map((function(e){return Object(o.jsx)(l.b,{position:e.position,onClick:function(){i(e),y(e)},children:s&&s.content===e.content&&Object(o.jsx)("div",{style:{color:"#000"},children:e.content})},"marker-".concat(e.content,"-").concat(e.position.lat,",").concat(e.position.lng))}))}),null!=k?Object(o.jsxs)("h3",{children:["\uc120\ud0dd: ",k.content]}):Object(o.jsx)("h3",{children:"\uac70\uc810(\uc9c1\uc7a5, \ud559\uad50 \ub4f1)\uc774 \ub420 \uc7a5\uc18c\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(o.jsx)("button",{className:"btn",onClick:function(){k?t(k):alert("\uac80\uc0c9 \ud6c4 \uc9c0\ub3c4\uc5d0\uc11c \uc704\uce58\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694")},children:Object(o.jsx)("h2",{children:"\uacb0\uc815"})})]})},d=n(8),h=n(9),u=["deposit","rent","area","distance"],O={deposit:"\ubcf4\uc99d\uae08 (\ub9cc\uc6d0)",rent:"\uc6d4\uc138 (\ub9cc\uc6d0)",area:"\uba74\uc801 (m2)",distance:"\uac70\ub9ac (km)"},m={deposit:{std:500,weight:-2,bigger:!1},rent:{std:50,weight:-7,bigger:!1},area:{std:50,weight:5,bigger:!0},distance:{std:5,weight:-5,bigger:!1}};var x=function(e){var t=e.onNext,n=Object(c.useState)(),a=Object(r.a)(n,2),s=a[0],i=a[1],j=Object(c.useState)(),l=Object(r.a)(j,2),b=l[0],x=l[1];return Object(c.useEffect)((function(){var e,t={},n=Object(h.a)(u);try{for(n.s();!(e=n.n()).done;){var c=e.value;t[c]={std:m[c].std,weight:m[c].weight}}}catch(a){n.e(a)}finally{n.f()}i(t)}),[]),Object(o.jsxs)("div",{className:"page option-page",children:[Object(o.jsx)("h1",{children:"STEP 2 - \uac00\uc911\uce58 \uc785\ub825"}),Object(o.jsx)("h4",{className:"description",children:"\uc911\uc694\ub3c4\uc5d0 \ub530\ub77c\uc11c \uac00\uc911\uce58\ub97c \ubd80\uc5ec\ud569\ub2c8\ub2e4. \uac00\uc911\uce58\uc758 \uc808\ub300\uac12\uc774 \ud074\uc218\ub85d \ub354 \ud070 \uc911\uc694\ub3c4\ub97c \ucc28\uc9c0\ud569\ub2c8\ub2e4."}),Object(o.jsxs)("select",{tabIndex:-1,onChange:function(e){x(e.target.value)},children:[Object(o.jsx)("option",{value:-1,children:"\uc9d1 \uc885\ub958 \uc120\ud0dd"},"house_desc"),Object(o.jsx)("option",{value:"oneroom",children:"\uc6d0\ub8f8"},"oneroom"),Object(o.jsx)("option",{value:"villa",children:"\ube4c\ub77c, \ud22c\ub8f8+"},"villa")]}),Object(o.jsx)("table",{className:"option-table",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\ud56d\ubaa9"}),Object(o.jsx)("th",{children:"\uae30\uc900\uac12"}),Object(o.jsx)("th",{children:"\uac00\uc911\uce58"})]}),s?u.map((function(e){return s&&s[e]?Object(o.jsxs)("tr",{keyname:e,children:[Object(o.jsx)("td",{children:O[e]}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"number",tabIndex:-1,value:s[e].std,onChange:function(e){i((function(t){var n=e.target.parentNode.parentElement.getAttribute("keyname"),c=""===e.target.value?"":parseInt(e.target.value);return t[n].std=c,Object(d.a)({},t)}))}})}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"number",tabIndex:-1,value:s[e].weight,onChange:function(e){i((function(t){var n=e.target.parentNode.parentElement.getAttribute("keyname"),c=m[n].bigger,a=""===e.target.value?"":window.Math.abs(parseInt(e.target.value))*(c?1:-1);return t[n].weight=a,Object(d.a)({},t)}))}})})]},e):null})):null]})}),Object(o.jsx)("button",{className:"btn",onClick:function(){b&&-1!=b?t(u.map((function(e){return{name:e,std:s[e].std,weight:s[e].weight}})),b):alert("\uc9d1\uc758 \uc885\ub958\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694")},children:Object(o.jsx)("h2",{children:"\uacb0\uacfc \uc694\uccad"})})]})};var g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return alert("\uc624\ub958 \ubc1c\uc0dd!",e)};fetch("https://li6ctgphqglz6ol7cuo5qik3dm0mphxc.lambda-url.us-east-1.on.aws/",{method:"POST",headers:{"Content-Type":"application/json"},body:window.btoa(window.JSON.stringify(e))}).then((function(e){return e.json()})).then(t).catch((function(e){console.log("\uc624\ub958\ubc1c\uc0dd",e),n(e)}))},p={oneroom:"\uc6d0\ub8f8",villa:"\ube4c\ub77c/\ud22c\ub8f8+"};var v=function(e){var t=e.location,n=e.houseType,a=e.params,s=(e.onNext,Object(c.useState)(!1)),i=Object(r.a)(s,2),j=i[0],l=i[1],b=Object(c.useState)(!1),d=Object(r.a)(b,2),h=d[0],u=d[1],O=Object(c.useState)(),m=Object(r.a)(O,2),x=m[0],v=m[1],f=function(e){v(e.data),u(!0)};return Object(c.useEffect)((function(){t&&a&&l(!0)}),[t,a]),Object(c.useEffect)((function(){j&&g({houseType:n,params:a,location:[1*t.position.lat,1*t.position.lng]},f)}),[j]),Object(o.jsxs)("div",{className:"page result-page",children:[Object(o.jsx)("a",{href:"/moving-traveler",children:Object(o.jsx)("img",{className:"logo",src:"/moving-traveler/img/logo.png",alt:"logo_img"})}),Object(o.jsx)("h1",{style:{margin:"0 0 10px 0"},children:"\uacb0\uacfc"}),Object(o.jsx)("hr",{}),j?Object(o.jsxs)("h3",{children:["[",p[n],"] ",t.content," \uc8fc\ubcc0"]}):null,h?Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:x.items.map((function(e,t){return Object(o.jsxs)("tr",{itemProp:e.item_id,onClick:function(e){for(var t=e.target;"TR"!==t.tagName;)t=t.parentNode;var n=t.getAttribute("itemprop");window.open("https://www.zigbang.com/home/oneroom/items/".concat(n))},children:[Object(o.jsx)("td",{className:"img-cell",children:Object(o.jsx)("img",{src:"".concat(e.thumbnail_url,"?w=600")})}),Object(o.jsx)("td",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"item-result-row",children:[Object(o.jsxs)("h3",{children:["[",window.Math.round(e.point),"\uc810] ",e.title]}),Object(o.jsxs)("h4",{children:["\ubcf4\uc99d\uae08: ",e.deposit,"\ub9cc\uc6d0/\uc6d4\uc138: ",e.rent,"\ub9cc\uc6d0"]})]}),Object(o.jsxs)("div",{className:"item-result-row",children:[Object(o.jsxs)("h4",{children:["\uba74\uc801: ",e.area,"m",Object(o.jsx)("sub",{children:"2"})]}),Object(o.jsxs)("h4",{children:["\uac70\ub9ac: ",window.Math.round(10*e.distance)/10,"km"]})]})]})})]},e.item_id)}))})}):j?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"loader",children:"Loading..."}),Object(o.jsxs)("h3",{children:["\ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4...",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"\ub9e4\ubb3c\uc774 \ub9ce\uc73c\uba74 \uc624\ub798 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4"]})]}):Object(o.jsx)("h2",{children:"\ub2e8\uacc4\ub97c \uac74\ub108\ub6f0\uc168\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc2ed\uc2dc\uc624"})]})};var f=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(r.a)(s,2),l=i[0],d=i[1],h=Object(c.useState)(""),u=Object(r.a)(h,2),O=u[0],m=u[1],g=Object(c.useState)(),p=Object(r.a)(g,2),f=p[0],w=p[1],N=function(){a((function(e){return(e+1)%4}))};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"carousel",style:{marginLeft:"-".concat(100*n,"%")},children:[Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)(j,{onNext:N})}),Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)(b,{onNext:function(e){d(e),N()}})}),Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)(x,{onNext:function(e,t){w(e),m(t),N()}})}),Object(o.jsx)("div",{className:"carousel-item",children:Object(o.jsx)(v,{location:l,houseType:O,params:f})})]})})};var w=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(c.useState)([0,0])),a=Object(r.a)(n,2),s=(a[0],a[1],Object(c.useState)([{name:"\uba74\uc801(m2)",std:50,weight:5},{name:"\ubcf4\uc99d\uae08",std:500,weight:-.1},{name:"\uc6d4\uc138",std:50,weight:-10},{name:"\uac70\ub9ac",std:5e3,weight:-5}])),i=Object(r.a)(s,2);return i[0],i[1],Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(f,{})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.fa798739.chunk.js.map
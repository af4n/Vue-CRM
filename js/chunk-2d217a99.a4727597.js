(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a99"],{c84b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("loader"):e.record?r("div",[r("div",{staticClass:"breadcrumb-wrap"},[r("router-link",{staticClass:"breadcrumb",attrs:{to:"/history"}},[e._v(e._s(e._f("localize")("Menu_History")))]),r("a",{staticClass:"breadcrumb",on:{click:function(e){e.preventDefault()}}},[e._v(" "+e._s(e._f("localize")("income"===e.record.type?"Income":"Outcome"))+" ")])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col s12 m6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content white-text",class:{red:"outcome"===e.record.type,green:"income"===e.record.type}},[r("p",[e._v(e._s(e._f("localize")("Description"))+": "+e._s(e.record.description))]),r("p",[e._v(e._s(e._f("localize")("Amount"))+": "+e._s(e._f("currency")(e.record.amount,"UAH")))]),r("p",[e._v(e._s(e._f("localize")("Category"))+": "+e._s(e.record.categoryName))]),r("small",[e._v(e._s(e._f("date")(e.record.date,"datetime")))])])])])])]):r("p",{staticClass:"center"},[r("strong",[e._v("Запись с id="+e._s(e.$route.params.id)+" не найдена")])])],1)},c=[],s=r("5530"),n=(r("96cf"),r("1da1")),o={name:"detail",metaInfo:function(){return{title:this.$title("Detail_Title")}},data:function(){return{record:null,loading:!0}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,e.$store.dispatch("fetchRecordById",r);case 3:return a=t.sent,t.next=6,e.$store.dispatch("fetchCategoryById",a.categoryId);case 6:c=t.sent,e.record=Object(s["a"])({},a,{categoryName:c.title}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}},i=o,d=r("2877"),l=Object(d["a"])(i,a,c,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d217a99.a4727597.js.map
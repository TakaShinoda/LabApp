(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{B19j:function(t,e,a){"use strict";var n=a("0iUn"),i=a("sLSF"),r=a("MI3g"),u=a("a7VT"),s=a("Tit0"),l=a("q1tI"),o=a.n(l),c=a("iqUP"),d=a.n(c),h=(a("WI49"),o.a.createElement),b=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={data:[]},a.getFireData(),a}return Object(s.a)(e,t),Object(i.a)(e,[{key:"getFireData",value:function(){var t=d.a.database().ref("sample/"),e=this;t.orderByKey().limitToLast(10).on("value",function(t){e.setState({data:t.val()})})}},{key:"getTableData",value:function(){var t=[];if(null==this.state.data||0==this.state.data.length)return[h("tr",{key:"0"},h("th",null,"NO DATA"))];for(var e in this.state.data)t.push(h("tr",{key:e},h("th",null,this.state.data[e].ID),h("td",null,this.state.data[e].message),h("th",null,this.state.data[e].date)));return t}},{key:"render",value:function(){return 0==this.state.data.length&&this.getFireData(),h("table",null,h("tbody",null,this.getTableData()))}}]),e}(l.Component);e.a=b},VbWV:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),r=a("YFqc"),u=a.n(r),s=a("h7RS"),l=a("0iUn"),o=a("sLSF"),c=a("MI3g"),d=a("a7VT"),h=a("AT/M"),b=a("Tit0"),f=a("iqUP"),v=a.n(f),p=a("nOHt"),g=a.n(p),m=(a("WI49"),i.a.createElement),j=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={id_str:""},a.doChange=a.doChange.bind(Object(h.a)(a)),a.doAction=a.doAction.bind(Object(h.a)(a)),a}return Object(b.a)(e,t),Object(o.a)(e,[{key:"doChange",value:function(t){this.setState({id_str:t.target.value})}},{key:"doAction",value:function(){confirm("\u672c\u5f53\u306b\u524a\u9664\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&this.deleteFireData(),g.a.push("/contact_board")}},{key:"deleteFireData",value:function(){var t=this.state.id_str;v.a.database().ref("sample/"+t).remove()}},{key:"render",value:function(){return m("div",null,m("p",null,"\u524a\u9664\u3059\u308b\u9805\u76ee\u306eID\u5165\u529b(\u534a\u89d2\u6570\u5b57)"),m("form",{onSubmit:this.doAction},m("input",{type:"text",placeholder:"delete ID:",onChange:this.doChange,value:this.state.id_str,required:!0,pattern:"[0-9]+"}),m("input",{type:"submit",value:"\u524a\u9664"})))}}]),e}(n.Component),y=a("B19j"),O=i.a.createElement;e.default=function(){return O(s.a,{header:"Whiteboard",title:"\u6295\u7a3f\u524a\u9664"},O(j,null),O(y.a,null),O(u.a,{href:"/contact_board"},O("a",null,"<< \u623b\u308b")))}},WI49:function(t,e,a){"use strict";a("LmZi")},ud5k:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact_del",function(){return a("VbWV")}])}},[["ud5k",1,0]]]);
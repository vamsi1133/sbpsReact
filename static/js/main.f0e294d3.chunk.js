(this["webpackJsonpschool-frontend"]=this["webpackJsonpschool-frontend"]||[]).push([[0],{45:function(e,t,a){e.exports=a(88)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(24),c=a.n(r),o=(a(50),a(9)),i=a(12);a(51),a(52);function s(){function e(){return null!==localStorage.getItem("user")&&sessionStorage.getItem(sessionStorage.getItem("logger"))===localStorage.getItem("user")?l.a.createElement("li",{className:"nav-item dropdown",style:{paddingRight:"50px"}},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbardrop","data-toggle":"dropdown"},sessionStorage.getItem(sessionStorage.getItem("logger"))),l.a.createElement("div",{className:"dropdown-menu",style:{backgroundColor:"#0c056d"}},l.a.createElement(o.b,{style:{color:"white",marginBottom:"1",padding:"0px 0px 0px 10px"},lassName:"dropdown-item",onClick:t,to:"/"},"Logout",l.a.createElement("span",{class:"sr-only"},"(current)")),l.a.createElement(o.b,{style:{color:"white",backgroundColor:"transparent",marginTop:"25px",padding:"0px 0px 0px 10px"},className:"dropdown-item",to:"/admin"},"Admin Page",l.a.createElement("span",{class:"sr-only"},"(current)")))):l.a.createElement("li",{className:"nav-item "},l.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login",l.a.createElement("span",{class:"sr-only"},"(current)")))}function t(){sessionStorage.clear(),localStorage.clear(),console.log("logged out")}return l.a.useEffect((function(){e()})),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"SWARNA BHARATHI"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{className:"nav-link",to:"/gallery"},"Gallery ",l.a.createElement("span",{class:"sr-only"},"(current)"))),l.a.createElement(e,null)))))}var m=a(14),u=a(15),d=a(19),p=a(16),h=a(20),f=(a(58),a(17)),g=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).url="https://sbps.herokuapp.com/",e.state={notice:[]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.url+"notice").then((function(e){return e.json()})).then((function(t){e.setState({notice:t})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#83b582",padding:"10px",borderRadius:"25px"}},l.a.createElement("h4",{className:"notice-heading"},"Notice Board ",l.a.createElement(f.a,null)),l.a.createElement("div",{className:"notice"},l.a.createElement("div",null,l.a.createElement("ul",null,this.state.notice.map((function(e){return l.a.createElement("div",null,l.a.createElement("li",null,e.notice),l.a.createElement("h6",{className:"notice-date"},l.a.createElement("i",null,"posted on ",e.date)),l.a.createElement("hr",null))})))))))}}]),t}(l.a.Component),E=a(21),b=a(22),v=a(7),N=a(4),y=(a(59),a(43));function w(){var e=l.a.useState(null),t=Object(N.a)(e,2),a=t[0],n=t[1];function r(e){var t;return l.a.createElement("div",{className:"col-md-4",style:{padding:"2px"}},l.a.createElement("h5",{className:"card-title achivement-title"},e.title),l.a.createElement(y.Carousel,(t={className:"legend",stopOnHover:!1,showStatus:!1,swipeable:!1,showIndicators:!1},Object(v.a)(t,"showStatus",!1),Object(v.a)(t,"autoPlay",!0),Object(v.a)(t,"showThumbs",!1),Object(v.a)(t,"infiniteLoop",!0),Object(v.a)(t,"showArrows",!1),t),e.img.map((function(e){return l.a.createElement("div",null,l.a.createElement("img",{src:e}))}))))}return l.a.useEffect((function(){(function(){var e={title:String,images:[]},t={title:String,images:[]},a={title:String,images:[]},n=[];return new Promise((function(l,r){fetch("https://sbps.herokuapp.com/gallery").then((function(e){return e.text()})).then((function(r){var c=new Headers;c.append("Authorization","Bearer "+r),fetch("https://api.imgur.com/3/account/sbps1/albums/",{method:"GET",headers:c}).then((function(e){return e.json()})).then((function(c){c.data.filter((function(e){return"Awards"===e.title||"Facilities"===e.title||"SSC-Results"===e.title})).map((function(c){var o=new Headers;o.append("Authorization","Bearer "+r);var i={method:"GET",headers:o};fetch("https://api.imgur.com/3/album/"+c.id+"/images",i).then((function(e){return e.json()})).then((function(r){"Facilities"===c.title?(a.title=c.title,r.data.map((function(e){a.images.push(e.link)})),n.push(a)):"Awards"===c.title?(t.title=c.title,r.data.map((function(e){t.images.push(e.link)})),n.push(t)):"SSC-Results"===c.title&&(e.title=c.title,r.data.map((function(t){e.images.push(t.link)})),n.push(e)),3===n.length&&l(n)})).catch((function(e){return console.log("error",e)}))}))})).catch((function(e){return console.log("error",e)}))}))}))})().then((function(e){n(e)}))}),[]),null!==a?l.a.createElement("div",{className:"row"},a.map((function(e){return l.a.createElement(r,{title:e.title,img:e.images})}))):null}function S(){return l.a.createElement("div",null,l.a.createElement("div",{id:"show-bg"},l.a.createElement(s,null),l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"Swarna Bharathi Educational Institution was established in the year 1999 from classes L.K.G. to 10th class . The school started with the aim of providing education to keep the education in the reach of all economic categories."))),l.a.createElement("div",{className:"container-fluid achievments"},l.a.createElement("h2",{className:"relative-heading"},"About us"),l.a.createElement(w,null)),l.a.createElement("div",{className:"container-fluid facilities"},l.a.createElement("h2",{className:"relative-heading"},"Facilties"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card-body col-md-4"},l.a.createElement("h5",{className:"card-title",style:{color:"#27aa80"}},l.a.createElement(E.a,null)," Library"),l.a.createElement("p",null,"A library is an important source of knowledge to young minds in schools. It develops the important habit of reading among the students.")),l.a.createElement("div",{className:"card-body col-md-4"},l.a.createElement("h5",{className:"card-title",style:{color:"#e25822"}},l.a.createElement(E.c,null)," Sports"),l.a.createElement("p",null,"Sports help kids in character building and maintain energy and strength which improve their blood circulation and physically fit, it also improves the mental sharpness and stamina. It always develop a sense of friendliness, team spirit, confidence among children. Education is partial without sports")),l.a.createElement("div",{className:"card-body col-md-4"},l.a.createElement("h5",{className:"card-title",style:{color:"#004445"}},l.a.createElement(E.b,null)," 24/7 CCTV"),l.a.createElement("p",null,"The need of the hour is to ensure our children are safe and feel safe all the time. Vigilance and keeping an eye out for any anomaly or deviations in children\u2019s behaviour is something that we can all do to fortify ourselves in this fight")))),l.a.createElement("div",{className:"container-fluid footer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card-body  col-lg-6"},l.a.createElement(g,null)),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-lg-6",style:{textAlign:"center"}},l.a.createElement("h5",{style:{color:"#0c056d"}},"Swarna Bharathi Public School"),l.a.createElement("span",{style:{fontSize:"1rem",padding:"1rem"}},l.a.createElement(b.c,{className:"icons"}),":",l.a.createElement("a",{href:"tel:9491714459",className:"contact-info"},"9491714459")),l.a.createElement("span",{style:{fontSize:"1rem",padding:"1rem"}},l.a.createElement(b.b,{className:"icons"}),":",l.a.createElement("a",{href:"tel:08813284955",className:"contact-info"},"08813-284955")),l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:"1rem",paddingBottom:"1rem"}},l.a.createElement(b.a,{className:"icons"}),":",l.a.createElement("a",{href:"mailto:swarnabarathipublicschool@gmail.com",className:"contact-info"}," swarnabarathipublicschool@gmail.com")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30515.933809466314!2d81.66540227940673!3d17.048583724292758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c55e76cd8e663de!2sSwarna%20Bharathi%20Public%20School!5e0!3m2!1sen!2sin!4v1566930153763!5m2!1sen!2sin",clsssName:"img-fluid",width:"400px",height:"200px"})))))}function k(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Contact"))}a(65);var j=a(8),I=a.n(j),x=a(18),O=a.n(x),C=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).url="https://sbps.herokuapp.com/",e.deleteNotice=function(t){var a=t.target.id;fetch(e.url+"notice/"+a,{method:"DELETE"}).then((function(t){t&&fetch(e.url+"notice").then((function(e){return e.json()})).then((function(t){e.setState({notice:t})}))}))},e.postNotice=function(){var t=I()("#notice-data").val();t.trim().length>0?(I()("#notice-data").val(null),O.a.post(e.url+"notice",{notice:t}).then((function(t){200===t.status&&fetch(e.url+"notice").then((function(e){return e.json()})).then((function(t){e.setState({notice:t})}))})).catch((function(e){return console.log(e)}))):alert("please enter notice to post.")},e.state={notice:[]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.url+"notice").then((function(e){return e.json()})).then((function(t){e.setState({notice:t})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#83b582",padding:"10px",borderRadius:"25px"}},l.a.createElement("h4",{className:"notice-heading"},"Notice Board ",l.a.createElement(f.a,null)),l.a.createElement("div",{className:"notice"},l.a.createElement("div",null,l.a.createElement("label",{style:{display:"block"}},"Notice:"),l.a.createElement("textarea",{className:"form-control",rows:"4",cols:"35",id:"notice-data",required:!0}),l.a.createElement("div",null,l.a.createElement("button",{className:"btn-primary",onClick:this.postNotice},"Post"))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("ul",null,this.state.notice.map((function(t){return l.a.createElement("div",null,l.a.createElement("li",null,t.notice),l.a.createElement("div",{className:"notice-dates"},l.a.createElement("button",{class:"delete",id:t._id,onClick:e.deleteNotice},"Delete")),l.a.createElement("hr",null))})))))))}}]),t}(l.a.Component);a(83);function A(){return null!==localStorage.getItem("user")?sessionStorage.getItem(sessionStorage.getItem("logger"))!==localStorage.getItem("user")?l.a.createElement(i.a,{to:"/login"}):l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#0c056d"}},l.a.createElement(s,{bar:!0})),l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-4",style:{paddingTop:"2rem"}}," ",l.a.createElement(C,null))):l.a.createElement(i.a,{to:"/login"})}var T=a(44),B=(a(84),a(3)),D=Object(B.b)();function z(){l.a.useEffect((function(){null!==localStorage.getItem("user")&&sessionStorage.getItem(sessionStorage.getItem("logger"))===localStorage.getItem("user")&&D.push("/admin")}));var e=l.a.useState(""),t=Object(N.a)(e,2),a=t[0],n=t[1],r="https://sbps.herokuapp.com/",c=l.a.useState({username:"",password:""}),o=Object(N.a)(c,2),i=o[0],s=o[1];function m(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(T.a)({},e,Object(v.a)({},a,n))}))}return l.a.createElement("div",null,l.a.createElement("script",{async:!0,src:"//s.imgur.com/min/embed.js",charset:"utf-8"}),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("form",{class:"form-group"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"card-title"},"ADMIN LOGIN"),l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"text",name:"username",value:i.username,onChange:m,placeholder:"username",required:!0,autoFocus:!0}),l.a.createElement("br",null),l.a.createElement("input",{autoComplete:"off",className:"form-control",type:"password",name:"password",placeholder:"password",value:i.password,onChange:m,required:!0}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){var e={username:i.username,password:i.password};localStorage.setItem("user",i.username),O.a.post(r+"login",e).then((function(e){200===e.status&&(sessionStorage.setItem("logger",e.data.id),sessionStorage.setItem(e.data.id,e.data.user),D.push("/admin",{some:"state"}))})).catch((function(e){e&&n("username or password incorrect")}))}},"login"),"\xa0\xa0",l.a.createElement("span",{style:{color:"red"}},a))))))}a(85);function H(){var e=Object(B.b)(),t="https://sbps.herokuapp.com/gallery",a=l.a.useState([]),n=Object(N.a)(a,2),r=n[0],c=n[1],o=l.a.useState(""),i=Object(N.a)(o,2),m=i[0],u=i[1],d=l.a.useState(!1),p=Object(N.a)(d,2),h=p[0],f=p[1],g=l.a.useState(!1),E=Object(N.a)(g,2),b=E[0],y=E[1];function w(){fetch(t).then((function(e){return e.text()})).then((function(e){u(e);var t=new Headers;t.append("Authorization","Bearer "+e),fetch("https://api.imgur.com/3/account/sbps1/albums/",{method:"GET",headers:t,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){f(!0),c(e.data)})).catch((function(e){return console.log("error",e)}))})).catch((function(e){return console.log(e)}))}function S(){y(!0);var e=new Headers;e.append("Authorization","Bearer "+m);var t=new FormData;t.append("title",I()("#album-title").val()),t.append("description",I()("#album-description").val()),fetch("https://api.imgur.com/3/album",{method:"POST",headers:e,body:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){w(),y(!1)})).catch((function(e){return console.log("error",e)}))}function k(t){localStorage.setItem("albumId",t.target.id),e.push("/album")}function j(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 "},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Add new album"),l.a.createElement("form",null,l.a.createElement("h6",null,"Title:"),l.a.createElement("input",{className:"form-control",maxLength:25,id:"album-title",placeholder:"ex: republic day, childrens day-2019 etc.",name:"album",required:!0}),l.a.createElement("br",null),l.a.createElement("h6",null,"Description"),l.a.createElement("textarea",Object(v.a)({className:"form-control",maxLength:100,required:!0,id:"album-description",placeholder:"ex: republic day inaugurations and prize distribution ",name:"description"},"required",!0)),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-info",type:"button",onClick:S},b&&l.a.createElement("i",{class:"fa fa-spinner fa-spin"}),"Create Album")))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h4",{style:{color:"red",display:"inline"}},"Note:"),l.a.createElement("p",{style:{color:"red"}},"These Albums are for Home page.Upload photos with aspect ratio ",l.a.createElement("em",null,l.a.createElement("i",null,"16:9")),". Otherwise home page will be altered. Don't delete these albums.if deleted create albums with names(SSC-Results,Awards,Facilities)"),l.a.createElement("div",{className:"row"},r.filter((function(e){return"SSC-Results"===e.title||"Awards"===e.title||"Facilities"===e.title})).map((function(e){return l.a.createElement(x,{title:e.title,description:e.description,img:e.cover,albumId:e.id})})))))}function x(e){return l.a.createElement("div",{className:"container1","data-toggle":"tooltip","data-placement":"top",title:e.description},l.a.createElement("img",{className:"img-fluid folders",style:{width:"11rem",height:"11rem"},alt:"click to add images into this album",src:"https://i.imgur.com/"+e.img+".jpg"}),l.a.createElement("div",{className:"content"},l.a.createElement("h6",null,e.title)),l.a.createElement("div",{className:"overlay",onClick:k,id:e.albumId},l.a.createElement("p",{style:{marginTop:"1rem"},id:e.albumId},e.title),l.a.createElement("p",{style:{fontSize:"0.75rem"},id:e.albumId},e.description)))}return l.a.useEffect((function(){w()}),[]),h?l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#0c056d",marginBottom:"5px"}},l.a.createElement(s,null)),l.a.createElement("div",{className:"container-fluid ",style:{backgroundColor:"#ebebe3"}},l.a.createElement((function(){return null!==localStorage.getItem("user")&&sessionStorage.getItem(sessionStorage.getItem("logger"))===localStorage.getItem("user")?l.a.createElement(j,null):null}),null),l.a.createElement("hr",null),l.a.createElement("div",{className:"row",style:{padding:"10px"}},r.filter((function(e){return"SSC-Results"!==e.title&&"Awards"!==e.title&&"Facilities"!==e.title})).map((function(e){return l.a.createElement(x,{title:e.title,description:e.description,img:e.cover,albumId:e.id})}))),l.a.createElement("hr",null))):l.a.createElement("div",{className:"page-loading"},l.a.createElement("span",{id:"spinner"},l.a.createElement("i",{class:"fa fa-spinner fa-spin"})))}a(86),a(87);function F(e){var t=Object(B.b)(),a="https://sbps.herokuapp.com/gallery",n=l.a.useState(""),r=Object(N.a)(n,2),c=r[0],o=r[1],i=l.a.useState([]),s=Object(N.a)(i,2),m=s[0],u=s[1],d=l.a.useState(!1),p=Object(N.a)(d,2),h=p[0],f=p[1],g=l.a.useState(!1),E=Object(N.a)(g,2),b=E[0],v=E[1],y=l.a.useState(!1),w=Object(N.a)(y,2),S=w[0],k=w[1],j=l.a.useState(!1),x=Object(N.a)(j,2),O=x[0],C=x[1];function A(){fetch(a).then((function(e){return e.text()})).then((function(e){var t=new Headers;t.append("Authorization","Bearer "+e);var a={method:"GET",headers:t};fetch("https://api.imgur.com/3/album/"+localStorage.getItem("albumId")+"/images",a).then((function(e){return e.json()})).then((function(e){v(!0),u(e.data)})).catch((function(e){return console.log("error",e)}))}))}function T(){f(!0);var e=I()("#add-image")[0].files[0];if(void 0!==e){var t=new FormData;t.append("image",e),t.append("album",localStorage.getItem("albumId")),fetch("https://api.imgur.com/3/image",{method:"POST",headers:new Headers({Authorization:"Bearer "+c}),body:t}).then((function(e){e.ok&&(A(),f(!1))})).catch((function(e){f(!1),console.error(JSON.stringify(e)),alert("Upload failed: "+e)}))}else alert("select file to upload"),f(!1)}function D(){if(window.confirm("Are you sure you want to delete the album")){var e=new Headers;e.append("Authorization","Bearer "+c);var a={method:"DELETE",headers:e,body:new FormData,redirect:"follow"};fetch("https://api.imgur.com/3/album/"+localStorage.getItem("albumId"),a).then((function(e){return e.json()})).then((function(e){e.success&&t.push("/gallery")})).catch((function(e){return console.log("error",e)}))}}function z(e){if(C(!0),window.confirm("Are you sure you want to delete the photo")){var t=new Headers;t.append("Authorization","Bearer "+c);var a={method:"DELETE",headers:t,body:new FormData,redirect:"follow"};fetch("https://api.imgur.com/3/image/"+e.target.id,a).then((function(e){return e.json()})).then((function(e){e.success&&(C(!1),A(),I()("#myModal").remove())})).catch((function(e){C(!1),console.log("error",e)}))}}function H(e){return l.a.createElement("div",{style:{padding:"2px"}},l.a.createElement("img",{className:"img-fluid myImg",onClick:function(t){I()("#"+e.id+"modal").css("display","block"),I()("#"+e.id+"img01").attr("src",e.images)},src:e.images}),l.a.createElement("div",{className:"modal",id:e.id+"modal"},l.a.createElement("span",{onClick:function(){I()("#"+e.id+"modal").css("display","none")},class:"close"},"\xd7"),l.a.createElement("img",{class:"modal-content",id:e.id+"img01"}),S&&l.a.createElement("button",{className:"btn btn-danger",id:e.id,onClick:z},O&&l.a.createElement("i",{class:"fa fa-spinner fa-spin"})," Delete")))}return l.a.useEffect((function(){fetch(a).then((function(e){return e.text()})).then((function(e){o(e)})).catch((function(e){return console.log(e)})),A()}),[]),b?l.a.createElement("div",null,l.a.createElement("div",{style:{backgroundColor:"#ebebe3",height:"50rem"}},l.a.createElement("div",{className:"add-file"},l.a.createElement((function(){return null!==localStorage.getItem("user")&&sessionStorage.getItem(sessionStorage.getItem("logger"))===localStorage.getItem("user")?(k(!0),l.a.createElement("div",{className:"row"},l.a.createElement("form",{id:"form"},l.a.createElement("input",{id:"add-image",type:"file",accept:"image/x-png,image/gif,image/jpeg"}),l.a.createElement("button",{class:"btn btn-info",type:"button",disabled:!1,onClick:T},h&&l.a.createElement("i",{class:"fa fa-spinner fa-spin"})," upload")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-danger",onClick:D},"Delete Album")))):null}),null)),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},m.filter((function(e,t){return t%4===0})).map((function(e){return l.a.createElement(H,{images:e.link,id:e.id})}))),l.a.createElement("div",{className:"column"},m.filter((function(e,t){return t%4===1})).map((function(e){return l.a.createElement(H,{images:e.link,id:e.id})}))),l.a.createElement("div",{className:"column"},m.filter((function(e,t){return t%4===2})).map((function(e){return l.a.createElement(H,{images:e.link,id:e.id})}))),l.a.createElement("div",{className:"column"},m.filter((function(e,t){return t%4===3})).map((function(e){return l.a.createElement(H,{images:e.link,id:e.id})}))))))):l.a.createElement("div",{className:"page-loading"},l.a.createElement("span",{id:"spinner"},l.a.createElement("i",{class:"fa fa-spinner fa-spin"})))}var L=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:S}),l.a.createElement(i.b,{path:"/contact",component:k}),l.a.createElement(i.b,{path:"/admin",component:A}),l.a.createElement(i.b,{path:"/login",component:z}),l.a.createElement(i.b,{path:"/gallery",component:H}),l.a.createElement(i.b,{exact:!0,path:"/album",component:F}))))};c.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f0e294d3.chunk.js.map
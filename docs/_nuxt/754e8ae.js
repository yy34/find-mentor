(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{285:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("29c4c785",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(285)},287:function(t,e,n){(e=n(60)(!1)).push([t.i,".item[data-v-5f891a0b]{width:248px;height:320px;border-radius:20px;transition:box-shadow .3s;overflow:hidden}.item.mentee[data-v-5f891a0b]{background-color:#32475b}.item.mentor[data-v-5f891a0b]{background-color:#17aa90}.item.mentee[data-v-5f891a0b]:hover,.item.mentor[data-v-5f891a0b]:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.social-media[data-v-5f891a0b]{display:flex;justify-content:center;margin:0 0 15px 20px}.github[data-v-5f891a0b],.linkedin[data-v-5f891a0b],.twitter[data-v-5f891a0b]{width:30px;height:36px;margin-right:20px}.social-media-icon[data-v-5f891a0b]{width:20px;height:20px;margin-top:8px}.twitter[data-v-5f891a0b]{background-color:#22acf3}.github[data-v-5f891a0b]{background-color:#282e36}.linkedin[data-v-5f891a0b]{background-color:#0e76a8}.profile-photo[data-v-5f891a0b]{margin:0 10px 10px 0}.profile-photo img[data-v-5f891a0b]{border-radius:100%;width:120px;height:120px;border:2px solid #fff}.name[data-v-5f891a0b]{color:#fff}.mentee .interests[data-v-5f891a0b]{color:#a4a4a4}.mentor .interests[data-v-5f891a0b]{color:#d6d5d5}.interests[data-v-5f891a0b],.name[data-v-5f891a0b],.profile-photo[data-v-5f891a0b]{display:flex;justify-content:center;align-items:center}@media (max-width:626px){.item[data-v-5f891a0b]{width:300px;height:350px}.github[data-v-5f891a0b],.linkedin[data-v-5f891a0b],.twitter[data-v-5f891a0b]{width:40px;height:46px;margin-right:20px}.social-media-icon[data-v-5f891a0b]{width:30px;height:30px;margin-top:8px;font-size:25px}}",""]),t.exports=e},289:function(t,e,n){"use strict";n.r(e);n(6),n(153);var r={name:"Card",props:["person","personType"],methods:{getProfilePicture:function(t){var e=t.match(/github.com\/([\w\d-]+)(.+)?/);return e?"https://avatars.githubusercontent.com/".concat(e[1]):"https://raw.githubusercontent.com/cagataycali/find-mentor/master/assets/images/dummy.png"}}},o=(n(286),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.person?n("div",{class:"item "+t.personType},[n("div",{staticClass:"social-media"},[t.person.twitter_handle.length?n("div",{staticClass:"twitter"},[n("a",{attrs:{href:t.person.twitter_handle}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):t._e(),t._v(" "),t.person.github.length?n("div",{staticClass:"github"},[n("a",{attrs:{href:t.person.github}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):t._e(),t._v(" "),t.person.linkedin.length?n("div",{staticClass:"linkedin"},[n("a",{attrs:{href:t.person.linkedin}},[n("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):t._e()]),t._v(" "),n("NuxtLink",{attrs:{to:"/"+t.personType+"/"+t.person.slug}},[n("div",{staticClass:"profile-photo"},[n("img",{attrs:{src:t.getProfilePicture(t.person.github),alt:"mentee-profile-picture"}})]),t._v(" "),n("div",{staticClass:"name"},[t._v("\n      "+t._s(t.person.name)+"\n    ")])]),t._v(" "),n("div",{staticClass:"interests"},[t._v("\n    "+t._s(t.person.interests)+"\n  ")])],1):t._e()}),[],!1,null,"5f891a0b",null);e.default=component.exports},295:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("1b7833da",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n(295)},301:function(t,e,n){(e=n(60)(!1)).push([t.i,"*{box-sizing:border-box}header{display:flex;flex-direction:column;align-items:center;text-align:center;padding:80px 0}.contrib{text-decoration:underline;-webkit-text-decoration-color:#1e90ff;text-decoration-color:#1e90ff}.information{padding:10px;font-size:16px}.persons{list-style-type:none;width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-left:0}.person{width:250px;height:250px;text-align:center;margin:30px 7.5px 0}.name{font-size:26px}.interestContent{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",""]),t.exports=e},314:function(t,e,n){"use strict";n.r(e);n(51);var r=n(20),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("mentees").fetch();case 3:return r=e.sent,e.next=6,n("mentors").fetch();case 6:return o=e.sent,e.abrupt("return",{mentees:r,mentors:o});case 8:case"end":return e.stop()}}),e)})))()}},c=(n(300),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title"},[t._v("\n      Mentors\n    ")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentors,(function(t){return n("Card",{key:t.slug,staticClass:"person",attrs:{person:t,"person-type":"mentor"}})})),1),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title"},[t._v("\n      Mentees\n    ")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentees,(function(t){return n("Card",{key:t.slug,staticClass:"person",attrs:{person:t,"person-type":"mentee"}})})),1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",{staticClass:"contrib"},[e("a",{attrs:{href:"https://github.com/cagataycali/find-mentor",target:"_blank"}},[this._v("\n          Feel free to contribute!\n        ")])]),this._v(" "),e("p",{staticClass:"information"},[this._v("\n        Every night & every deploy, the spread sheet will be parsed by GitHub\n        actions, then generate this beauty.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(289).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{802:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"diff算法"}},[t._v("Diff算法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303165633276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"React Diff"}})]),t._v(" "),s("h3",{attrs:{id:"例子"}},[t._v("例子")]),t._v(" "),s("p",[t._v("假设DOM变更后如图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303170936305.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\ncreate "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("\ncreate "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\ncreate "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v("\n")])])]),s("h3",{attrs:{id:"引申"}},[t._v("引申")]),t._v(" "),s("h4",{attrs:{id:"为什么react组件中经常有一个key的概念？为什么不推荐使用index"}},[t._v("为什么react组件中经常有一个key的概念？为什么不推荐使用index?")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Element Diff")]),t._v("的时候会先收集"),s("code",[t._v("key")]),t._v("，"),s("code",[t._v("key")]),t._v("本身类似与身份证"),s("code",[t._v("id")]),t._v("，代表该组件的唯一"),s("code",[t._v("id")]),t._v("值，如果使用"),s("code",[t._v("index")]),t._v("的话，可能组件可能先删除一个然后又添加了一个，某些元素的"),s("code",[t._v("index")]),t._v("未发生变化，本身只要比较key就可以得出结论，现在需要做一个全量的比较，比较耗性能。")])])}),[],!1,null,null,null);e.default=n.exports}}]);
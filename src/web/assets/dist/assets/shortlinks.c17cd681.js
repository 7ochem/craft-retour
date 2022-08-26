import{V as d,a as f,b as m,c as h,s as p,p as g,_ as v}from"./purify.es.602b57a9.js";import{L as b}from"./LegacyUrl.bb8cf9b1.js";import{n as c}from"./vueComponentNormalizer.9fe6193d.js";var _=[{name:"__checkbox",titleClass:"center aligned",dataClass:"center aligned"},{name:"__component:legacy-url",sortField:"redirectSrcUrl",title:Craft.t("retour","Short Link"),titleClass:"center",dataClass:"center"},{name:"__component:element-url",sortField:"elementTitle",title:Craft.t("retour","Redirect To"),titleClass:"center",dataClass:"center"},{name:"redirectMatchType",sortField:"redirectMatchType",title:Craft.t("retour","Match Type"),titleClass:"text-left",dataClass:"text-left",callback:"matchFormatter"},{name:"siteName",sortField:"siteId",title:Craft.t("retour","Sites"),titleClass:"text-left",dataClass:"text-left"},{name:"redirectHttpCode",sortField:"redirectHttpCode",title:Craft.t("retour","Status"),titleClass:"text-left",dataClass:"text-left"},{name:"hitCount",sortField:"hitCount",title:Craft.t("retour","Hits"),titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:Craft.t("retour","Last Hit"),titleClass:"center",dataClass:"center"}],C=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a",{staticClass:"go",attrs:{href:e.rowData.elementCpUrl,title:e.linkTitle}},[t("span",{staticStyle:{"white-space":"nowrap"}},[t("span"),t("span",{staticStyle:{"white-space":"normal"}},[e._v(e._s(e.rowData.elementTitle))])])])])},T=[];const x={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number,default:0}},computed:{linkTitle:function(){let e="";return console.log(this.rowData),e+=this.rowData.redirectDestUrl,e}}},l={};var $=c(x,C,T,!1,P,null,null,null);function P(e){for(let a in l)this[a]=l[a]}var w=function(){return $.exports}(),y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.numSelected!==0,expression:"numSelected !== 0"}],attrs:{className:""}},[t("form",{attrs:{"accept-charset":"UTF-8",method:"post"}},[t("input",{attrs:{name:e.csrfTokenName,type:"hidden"},domProps:{value:e.csrfTokenValue}}),e._l(e.selectedIds,function(r){return t("input",{key:r,attrs:{name:"redirectIds[]",type:"hidden"},domProps:{value:r}})}),t("label",{staticClass:"text-gray-600"},[e._v(e._s(e.numSelected)+" "),e.numSelected===1?t("span",[e._v(e._s(e.stringRedirect))]):e._e(),e.numSelected!==1?t("span",[e._v(e._s(e.stringRedirects))]):e._e(),e._v(":")]),t("div",{attrs:{className:"btngroup inline"}},[t("div",{attrs:{className:"btn menubtn","data-icon":"settings"}}),t("div",{attrs:{className:"menu","data-align":"right"}},[t("ul",[t("li",[t("a",{attrs:{className:"formsubmit","data-action":"retour/redirects/delete-redirects"}},[e._v(e._s(e.stringDelete))])])])])])],2)]),t("vuetable-filter-bar",{directives:[{name:"show",rawName:"v-show",value:e.numSelected===0,expression:"numSelected === 0"}],attrs:{"initial-filter-text":e.filterText}}),t("div",{attrs:{className:"vuetable-pagination clearafter"}},[t("vuetable-pagination-info",{ref:"paginationInfoTop"}),t("div",{attrs:{className:"floated left vuetable-pagination-info py-3"}},[t("div",{attrs:{className:"inline pl-3 text-gray-600"}},[e._v(" "+e._s(e.stringPerPage)+" ")]),t("div",{attrs:{className:"inline pl-3 text-gray-600"}},[t("div",{attrs:{className:"select"}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],attrs:{className:"fieldtoggle","data-target-prefix":"per-page-",name:"perPage"},on:{change:function(r){var i=Array.prototype.filter.call(r.target.options,function(s){return s.selected}).map(function(s){var u="_value"in s?s._value:s.value;return u});e.perPage=r.target.multiple?i:i[0]}}},[t("option",{attrs:{selected:"",value:"20"}},[e._v(" 20 ")]),t("option",{attrs:{value:"50"}},[e._v(" 50 ")]),t("option",{attrs:{value:"100"}},[e._v(" 100 ")]),t("option",{attrs:{value:"500"}},[e._v(" 500 ")])])])])]),t("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),t("vuetable",{ref:"vuetable",attrs:{"api-url":e.apiUrl,"append-params":e.moreParams,css:e.css,fields:e.fields,"per-page":e.perPage,"sort-order":e.sortOrder},on:{"vuetable:pagination-data":e.onPaginationData}}),t("div",{attrs:{className:"vuetable-pagination clearafter border-solid"}},[t("vuetable-pagination-info",{ref:"paginationInfo"}),t("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},S=[];Vue.component("LegacyUrl",b);Vue.component("ElementUrl",w);const k={components:{vuetable:d,"vuetable-pagination":f,"vuetable-pagination-info":m,"vuetable-filter-bar":h},mixins:[p],props:{siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId,shortLinks:!0},css:{tableClass:"data fullwidth retour-redirects",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:_,numSelected:0,selectedIds:[],filterText:"",perPage:20,stringPerPage:Craft.t("retour","Per-page:"),stringDelete:Craft.t("retour","Delete"),stringRedirect:Craft.t("retour","redirect"),stringRedirects:Craft.t("retour","redirects")}},computed:{csrfTokenName:function(){return window.Craft.csrfTokenName},csrfTokenValue:function(){return window.Craft.csrfTokenValue}},watch:{perPage:function(){this.$events.fire("refresh-table",this.$refs.vuetable)}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",()=>this.onFilterReset()),this.$refs.vuetable.$on("vuetable:checkbox-toggled",(e,a)=>this.onCheckboxToggled(e,a)),this.$refs.vuetable.$on("vuetable:checkbox-toggled-all",e=>this.onCheckboxToggled(e,null))},methods:{getSaveStateConfig(){return{cacheKey:"retour-shortlinks-state-"+Craft.username+Craft.siteId,ignoreProperties:["numSelected","selectedIds","moreParams"]}},onFilterSet(e){this.filterText=e,this.moreParams={filter:this.filterText,siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.filterText="",this.moreParams={filter:this.filterText,siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onCheckboxToggled(){this.numSelected=0,this.selectedIds=[],this.$refs.vuetable!==void 0&&this.$refs.vuetable.selectedTo!==void 0&&(this.numSelected=this.$refs.vuetable.selectedTo.length,this.selectedIds=this.$refs.vuetable.selectedTo)},matchFormatter(e){let a="Pluing Match";switch(e){case"exactmatch":a="Exact Match";break;case"regexmatch":a="RegEx Match";break}return a},urlFormatter(e){if(e==="")return"";e=g.sanitize(e);let a=e;return!new RegExp("^(?:[a-z]+:)?//","i").test(a)&&!a.includes("$")&&(a=Craft.getSiteUrl(e)),`
                <a class="go" href="${a}" title="${a}" target="_blank" rel="noopener">${e}</a>
                `},deleteRedirectFormatter(e){return e===""?"":`
                <a class="delete icon" href="${e}" title="Delete"></a>
                `}}},o={};var I=c(k,y,S,!1,F,null,null,null);function F(e){for(let a in o)this[a]=o[a]}var N=function(){return I.exports}();const n=window.Vue;n.use(v);new n({el:"#cp-nav-content",components:{"shortlinks-table":N},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))},methods:{onTableRefresh(e){n.nextTick(()=>e.refresh())}}});
//# sourceMappingURL=shortlinks.c17cd681.js.map

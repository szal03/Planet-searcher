(this["webpackJsonpplanet-searcher"]=this["webpackJsonpplanet-searcher"]||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),r=a.n(c),s=(a(32),a(18)),o=a(19),i=a(25),u=a(24),h=(a(33),a(34),function(){return l.a.createElement("div",{className:"mainHeader"},l.a.createElement("h1",null,"Start your journey through space"),l.a.createElement("h2",null,"Discover places you have never been before"))}),m=function(e){var t=e.searchStatus;return l.a.createElement("div",{className:"searchHeader"},l.a.createElement("div",null,l.a.createElement("h1",null,"Planet Searcher"),t?l.a.createElement("div",{className:"failSearchMessage"},l.a.createElement("h2",null,"there is no search results... ")):null),l.a.createElement("button",{className:"backButton",onClick:e.click},"Back"))},d=function(e){var t=e.statusForSearch,a=e.searchStatus;return l.a.createElement("div",null,t?l.a.createElement(m,{click:e.click,searchStatus:a}):l.a.createElement(h,null))},f=(a(35),function(){return l.a.createElement("div",{className:"heroImg"})}),E=(a(36),function(){return l.a.createElement("div",{className:"infoInBox"},l.a.createElement("span",null,"Enter the name of the planet or star you are interested in. As a result, you will receive photos with descriptions."))}),v=function(e){var t=e.show;return l.a.createElement("div",{className:"searchInput"},l.a.createElement("input",{type:"text",vaule:e.value,onChange:e.change}),l.a.createElement("button",{className:"searchButton",onClick:e.submitSearch},"Search"),l.a.createElement("div",{className:"infoBox",onMouseEnter:e.showInfo,onMouseLeave:e.hideInfo},l.a.createElement("span",null,"info")),t?l.a.createElement(E,null):null)},S=(a(37),a(46)),w=a(47),p=a(45),I=(a(38),a(48)),g=a(49),b=function(e){return l.a.createElement(I.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:e.modalShow,onHide:e.modalHide},l.a.createElement(I.a.Header,{closeButton:!0},l.a.createElement(I.a.Title,{id:"contained-modal-title-vcenter"},"More Info")),l.a.createElement(I.a.Body,{className:"showModal"},l.a.createElement(p.a,null,l.a.createElement(S.a,{xs:12},l.a.createElement("h4",null,e.info[0].data[0].title)),l.a.createElement(S.a,{xs:6},l.a.createElement("img",{src:e.info[0].links[0].href})),l.a.createElement(S.a,{xs:6,className:"textInModal"},l.a.createElement("p",null,e.info[0].data[0].description)))),l.a.createElement(I.a.Footer,null,l.a.createElement(g.a,{className:"closeBtn",onClick:e.modalHide},"Close")))},k=function(e){var t=e.data.map((function(t,a){return l.a.createElement(S.a,{xs:12,sm:12,md:6,lg:4,xl:4,key:a,onClick:function(){return e.showInfo(t.data[0].nasa_id)}},l.a.createElement("div",{className:"planetBox"},l.a.createElement("div",{className:"planetInBox"},void 0!==t.links?l.a.createElement("div",null,l.a.createElement("div",{className:"backgroundImgStyle",style:{backgroundImage:"url(".concat(t.links[0].href,")")}}),l.a.createElement("div",{className:"titleStyle"},t.data[0].title)):null)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null,e.showInfoWindow?l.a.createElement(b,{info:e.searchObject,modalShow:e.showInfoWindow,modalHide:e.hideInfo}):null,l.a.createElement(p.a,null,t)))},B=(a(42),"https://images-api.nasa.gov/search"),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={inputValue:"",searchValue:[],statusSearch:!1,failSearchStatus:!1,searchObject:[],showInfoWindow:!1,showBasicInfo:!1},e.handleSearchInput=function(t){e.setState({inputValue:t.target.value})},e.handleSumbmitValue=function(){if(""===e.state.inputValue)return alert("need to write something");var t="".concat(B,"?q=").concat(e.state.inputValue);fetch(t).then((function(e){if(e.ok)return e;throw Error(e.status)})).then((function(e){return e.json()})).then((function(t){t.collection.items.length>0?e.setState({searchValue:t.collection.items,statusSearch:!0}):e.setState({failSearchStatus:!0,statusSearch:!0})})).catch((function(e){return console.log(e)}))},e.handleBackButton=function(){e.setState({inputValue:"",searchValue:[],statusSearch:!1,failSearchStatus:!1})},e.handleShowInfo=function(t){var a=e.state.searchValue.filter((function(e){return e.data[0].nasa_id===t}));e.setState({searchObject:a,showInfoWindow:!0})},e.handleHideInfo=function(){e.setState({showInfoWindow:!1})},e.handleChangeTrue=function(){e.setState({showBasicInfo:!0})},e.handleChangeFalse=function(){e.setState({showBasicInfo:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.statusSearch,t=this.state.failSearchStatus,a=this.state.searchObject,n=this.state.showInfoWindow,c=this.state.showBasicInfo;return l.a.createElement("div",{className:"App"},l.a.createElement(d,{statusForSearch:this.state.statusSearch,click:this.handleBackButton,searchStatus:t}),l.a.createElement(f,null),e?null:l.a.createElement(v,{value:this.state.inputValue,change:this.handleSearchInput,submitSearch:this.handleSumbmitValue,show:c,showInfo:this.handleChangeTrue,hideInfo:this.handleChangeFalse}),l.a.createElement("div",{className:"contentContainer"},l.a.createElement("div",{className:"cardsContainer"},e?l.a.createElement(k,{data:this.state.searchValue,name:this.state.inputValue,showInfo:this.handleShowInfo,searchObject:a,showInfoWindow:n,hideInfo:this.handleHideInfo}):null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.53c20641.chunk.js.map
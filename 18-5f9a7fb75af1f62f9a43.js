(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0uqK":function(t,e,r){var n=r("m/aQ"),o=r("ckLD"),i=r("FUra");t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},"67Pw":function(t,e,r){var n=r("m/aQ"),o=r("wTlq"),i=r("QD2z")("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},F6K9:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),i=r("ixhd"),a=r.n(i),s=function(){function t(t,e){this.width=t,this.height=e}var e=t.prototype;return e.isHorizontalOutside=function(t,e){return t>this.width-e||t<0},e.isVerticalOutside=function(t,e){return t>this.height-e||t<0},e.leftSide=function(t){return t.getCenter().x<this.width/2},t}(),u=function(){function t(t,e,r,n,o,i,a,s,u,c,f){this.id=t,this.name=e,this.coordinates={x:r,y:n},this.size=o,this.img=i,this.tags=a,this.nick=s,this.description=u,this.role=c,this.social=f}var e=t.prototype;return e.getCenter=function(){var t=Math.floor(this.size/2);return{x:this.coordinates.x+t,y:this.coordinates.y+t}},e.setNewCenter=function(t,e){var r=Math.floor(this.size/2),n=t-r,o=e-r;this.coordinates={x:n,y:o}},t}(),c=r("rh/5");e.default=function(t){var e=Object(n.useState)([]),r=e[0],i=e[1],f=Object(n.useState)(),h=f[0],l=f[1],d=Object(n.useState)(),m=d[0],g=d[1],v=Object(n.useState)(100),p=v[0],w=v[1],y=Object(n.useState)(!1),S=y[0],b=y[1],x=Object(n.useState)(),M=x[0],k=x[1],z=Object(n.useState)(),C=z[0],O=z[1],E=t.team,j=t.categories,P=function(t,e){for(var r=e,n=1;r*n<t;)r=e*++n;return{mainSize:r,lowSize:n}},q=function(t,e,n){var o=D(t);e.strokeWeight(o.strokeWeight);var i=o.color,a=i.r,s=i.g,u=i.b;e.stroke(a,s,u);var c=r.filter((function(e){return e.tags&&e.tags.includes(t)})).map((function(t){return t.getCenter()}));c.forEach((function(t,r){var i=c[r+1];i&&n.drawingContext&&("dash"===o.style?n.drawingContext.setLineDash([5,10]):n.drawingContext.setLineDash([]),e.line(t.x,t.y,i.x,i.y))}))},D=function(t){switch(t.toLowerCase()){case"frontend":return{color:{r:255,g:255,b:255},strokeWeight:2,style:"line"};case"design":return{color:{r:0,g:0,b:0},strokeWeight:2,style:"dash"};case"management":return{color:{r:255,g:255,b:255},strokeWeight:2,style:"dash"};default:return{color:{r:0,g:0,b:0},strokeWeight:2,style:"line"}}},L=function(t,e,n){var o=t.max(h.width,h.height),i=null;return r.forEach((function(r){var a=r.getCenter(),s=t.dist(a.x,a.y,e,n);s<Math.floor(r.size/2)&&s<o&&(o=s,i=r)})),i},N=M&&M.coordinates.x>Math.floor(h.width/2),T=function(t){if(M){var e=M.coordinates.y;return t?{top:e,right:h.width-M.coordinates.x}:{top:e,left:M.coordinates.x+M.size}}return{}}(N);return o.a.createElement("div",{className:"cp-team__list"},o.a.createElement(a.a,{preload:function(t){var e=t.min(1200,window.innerWidth-40),r=t.min(1e3,window.innerHeight-200),n=function(t,e,r,n){var o=0,i=0,a=0;if(t>e){a=Math.floor(t/e);var s=P(r,a);i=s.mainSize,o=s.lowSize}else{a=Math.floor(e/t);var u=P(r,a);i=u.lowSize,o=u.mainSize}for(var c=Math.floor(t/o),f=Math.floor(e/i),h=n.min(c,f),l=[],d=0;d<o;d++)for(var m=0;m<i;m++){var g=d*c+Math.floor(c/2)+Math.floor(n.random(-20,21)),v=m*f+Math.floor(f/2)+Math.floor(n.random(-20,21));l.push({x:g,y:v})}return{squareSize:h,centers:l}}(e,r,E.length,t),o=Math.floor(n.squareSize/1.5),a=Math.floor(o/2);w(o),l(new s(e,r));var c=function(t){for(var e=t.slice(),r=e.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=[e[n],e[r]];e[r]=o[0],e[n]=o[1]}return e}(n.centers).slice(0,E.length).map((function(e,r){var n=E[r],i=t.loadImage(n.img),s=e.x,c=e.y;return new u(n.id,n.name,s-a,c-a,o,i,n.tags,n.nick,n.description,n.role,n.social)}));i(c)},draw:function(e){!function(e,r){var n=t.currentCategory;e.background(217,50,50),e.noFill(),"Tutti"!=n?q(n,e,r):j.forEach((function(t){q(t,e,r)}))}(e,m),function(t,e){e.drawingContext.setLineDash([]),t.stroke(0,0,0),E.forEach((function(e){var n=r.find((function(t){return t.id===e.id}));if(n){var o=n.getCenter();t.ellipse(o.x,o.y,n.size+2),t.image(n.img,n.coordinates.x,n.coordinates.y,n.size,n.size)}}))}(e,m)},setup:function(t,e){var r=t.createCanvas(h.width,h.height).parent(e);g(r),t.frameRate(30)},mouseDragged:function(t){b(!0);var e=t.mouseX,r=t.mouseY,n=Math.floor(p),o=e>n?e<h.width-n?e:h.width-n:n,i=r>n?r<h.height-n?r:h.height-n:n;if(e===o||r===i){if(S)C&&C.setNewCenter(o,i);else{var a=L(t,o,i);a&&(a.setNewCenter(o,i),O(a))}return!1}},mouseReleased:function(){setTimeout((function(){O(null),b(!1)}))},mouseClicked:function(t){var e=t.mouseX,r=t.mouseY,n=L(t,e,r);n&&!S&&(M&&M.id===n.id?k(null):k(n))}}),M&&o.a.createElement(c.a,{visible:!!M,right:N,memberStyle:T,member:M,handleClick:function(t){t.stopPropagation()},toggleDescription:function(){k(null)}}))}},FUra:function(t,e,r){"use strict";var n=r("wTlq"),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},OaLt:function(t,e,r){var n=r("JhOX");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},QD2z:function(t,e,r){var n=r("REpN"),o=r("8deY"),i=r("34EK"),a=r("F8ZZ"),s=r("OaLt"),u=r("TuXZ"),c=o("wks"),f=n.Symbol,h=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(c,t)||(s&&i(f,t)?c[t]=f[t]:c[t]=h("Symbol."+t)),c[t]}},TuXZ:function(t,e,r){var n=r("OaLt");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},eSMk:function(t,e,r){var n=r("REpN");t.exports=n.Promise},eiRb:function(t,e,r){"use strict";var n=r("ZS3K"),o=r("lSYd"),i=r("eSMk"),a=r("JhOX"),s=r("jdR/"),u=r("67Pw"),c=r("0uqK"),f=r("+7hJ");n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=u(this,s("Promise")),r="function"==typeof t;return this.then(r?function(r){return c(e,t()).then((function(){return r}))}:t,r?function(r){return c(e,t()).then((function(){throw r}))}:t)}}),o||"function"!=typeof i||i.prototype.finally||f(i.prototype,"finally",s("Promise").prototype.finally)},mbBF:function(t,e,r){var n=r("ZS3K"),o=Math.hypot,i=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,e){for(var r,n,o=0,s=0,u=arguments.length,c=0;s<u;)c<(r=i(arguments[s++]))?(o=o*(n=c/r)*n+1,c=r):o+=r>0?(n=r/c)*n:r;return c===1/0?1/0:c*a(o)}})}}]);
//# sourceMappingURL=18-5f9a7fb75af1f62f9a43.js.map
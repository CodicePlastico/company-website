(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"07cb":function(t){t.exports=JSON.parse('{"venues":[{"id":"headquarter","name":"Headquarter","picture":"headquarter","size":300},{"id":"napoli","name":"Napoli","picture":"planet1","size":200},{"id":"milano","name":"Milano","picture":"planet1","size":200},{"id":"cremona","name":"Cremona","picture":"planet2","size":100},{"id":"piacenza","name":"Piacenza","picture":"planet2","size":100},{"id":"tenerife","name":"Tenerife","picture":"planet2","size":100}]}')},"0uqK":function(t,e,i){var n=i("m/aQ"),r=i("ckLD"),o=i("FUra");t.exports=function(t,e){if(n(t),r(e)&&e.constructor===t)return e;var i=o.f(t);return(0,i.resolve)(e),i.promise}},"67Pw":function(t,e,i){var n=i("m/aQ"),r=i("wTlq"),o=i("QD2z")("species");t.exports=function(t,e){var i,a=n(t).constructor;return void 0===a||null==(i=n(a)[o])?e:r(i)}},FUra:function(t,e,i){"use strict";var n=i("wTlq"),r=function(t){var e,i;this.promise=new t((function(t,n){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=n})),this.resolve=n(e),this.reject=n(i)};t.exports.f=function(t){return new r(t)}},HVR6:function(t,e,i){t.exports=i.p+"static/barlow_condensed-53a17088024b346c54ca3e5bf8cc15ee.ttf"},Ly4A:function(t,e,i){"use strict";i.r(e);i("RUBk");var n=i("t8Zj"),r=i("q1tI"),o=i.n(r),a=i("ixhd"),s=i.n(a),c=i("07cb"),u=i("HVR6"),h=i.n(u),f=i("Wbzz"),l=function(){function t(t,e,i,n,r,o){this.planetName=e,this.planetId=t,this.coordinates={x:i,y:n},this.size=r,this.img=o,this.xDirection=Math.random()>.5?1:-1,this.yDirection=Math.random()>.5?1:-1}var e=t.prototype;return e.nextCoordinates=function(){return{x:this.coordinates.x+this.xDirection,y:this.coordinates.y+this.yDirection}},e.setCoordinates=function(t){this.coordinates=t},e.getCenter=function(){var t=Math.floor(this.size/2);return{x:this.coordinates.x+t,y:this.coordinates.y+t}},e.invertDirection=function(t){switch(t){case"x":this.xDirection=-1*this.xDirection;break;case"y":this.yDirection=-1*this.yDirection;break;default:this.xDirection=-1*this.xDirection,this.yDirection=-1*this.yDirection}},e.fixMovement=function(t){var e=this.nextCoordinates(),i=e.x,n=e.y;t.isHorizontalOutside(e.x,this.size)&&(this.invertDirection("x"),i=this.coordinates.x),t.isVerticalOutside(e.y,this.size)&&(this.invertDirection("y"),n=this.coordinates.y),this.setCoordinates({x:i,y:n})},t}(),d=function(){function t(t,e,i){this.width=e,this.height=i,this.p5=t}var e=t.prototype;return e.isHorizontalOutside=function(t,e){return t>this.width-e||t<0},e.isVerticalOutside=function(t,e){return t>this.height-e||t<0},e.detectCollision=function(t,e){var i=t.getCenter(),n=e.getCenter();return this.p5.dist(i.x,i.y,n.x,n.y)<=Math.floor(t.size/2)+Math.floor(e.size/2)},e.leftSide=function(t){return t.getCenter().x<this.width/2},t}();e.default=function(){var t,e,i=[],r=window.innerWidth<769,a=r?12:16,u=r?60:100,p=r?22:26,y=Object(f.useStaticQuery)("2204792749");return o.a.createElement(s.a,{preload:function(r){var o=r.min(1600,window.innerWidth-40),a=r.min(1e3,window.innerHeight-200);t=new d(r,o,a);var s=c.venues;e=r.loadFont(h.a);var u=0,f=s.reduce((function(t,e){return t+e.size+30}),0),p=f<o?1:f/o,x=f>o?10:Math.floor((o-f)/s.length);i=s.reduce((function(t,e){var i=y[e.picture];if(i){var o=i.childImageSharp.fluid.src,s=r.loadImage(o),c=Math.floor(e.size/p),h=r.random(0,a-c),f=new l(e.id,e.name,u,h,c,s);return u=u+c+x,[].concat(Object(n.a)(t),[f])}return t}),[])},setup:function(i,n){i.createCanvas(t.width,t.height).parent(n),i.frameRate(30),i.textFont(e)},draw:function(n){n.background(255),n.noFill(),n.stroke(217,50,50),n.strokeWeight(3),i.forEach((function(e,r){e.fixMovement(t);for(var o=r+1;o<i.length;o++){var a=i[r],s=i[o];t.detectCollision(a,s)&&(a.invertDirection(),s.invertDirection());var c=(h=s,f=void 0,l=void 0,f=(u=a).getCenter(),l=h.getCenter(),{x1:f.x,y1:f.y,x2:f.x+u.size,y2:f.y+u.size,x3:l.x-h.size,y3:l.y-h.size,x4:l.x,y4:l.y});n.bezier(c.x1,c.y1,c.x2,c.y2,c.x3,c.y3,c.x4,c.y4)}var u,h,f,l})),n.textSize(a),n.strokeWeight(1),i.forEach((function(t){var e=t.coordinates,i=e.x,r=e.y;n.image(t.img,i,r,t.size,t.size)})),i.forEach((function(i){var o=i.getCenter(),s={x:o.x,y:o.y};t.leftSide(i)?s.x=o.x+i.size/2-(r?0:40):s.x=o.x-i.size/2-(r?u:60);var c=e.textBounds(i.planetName,s.x,s.y,a);n.stroke(0),n.fill(0),"headquarter"===i.planetId&&(n.stroke(217,50,50),n.fill(217,50,50)),n.rect(c.x,c.y,u,p),n.stroke(255),n.fill(255),n.text(i.planetName,s.x+(u-c.w)/2,s.y+(p-c.h)/2)}))}})}},OaLt:function(t,e,i){var n=i("JhOX");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},QD2z:function(t,e,i){var n=i("REpN"),r=i("8deY"),o=i("34EK"),a=i("F8ZZ"),s=i("OaLt"),c=i("TuXZ"),u=r("wks"),h=n.Symbol,f=c?h:h&&h.withoutSetter||a;t.exports=function(t){return o(u,t)||(s&&o(h,t)?u[t]=h[t]:u[t]=f("Symbol."+t)),u[t]}},TuXZ:function(t,e,i){var n=i("OaLt");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},eSMk:function(t,e,i){var n=i("REpN");t.exports=n.Promise},eiRb:function(t,e,i){"use strict";var n=i("ZS3K"),r=i("lSYd"),o=i("eSMk"),a=i("JhOX"),s=i("jdR/"),c=i("67Pw"),u=i("0uqK"),h=i("+7hJ");n({target:"Promise",proto:!0,real:!0,forced:!!o&&a((function(){o.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,s("Promise")),i="function"==typeof t;return this.then(i?function(i){return u(e,t()).then((function(){return i}))}:t,i?function(i){return u(e,t()).then((function(){throw i}))}:t)}}),r||"function"!=typeof o||o.prototype.finally||h(o.prototype,"finally",s("Promise").prototype.finally)},mbBF:function(t,e,i){var n=i("ZS3K"),r=Math.hypot,o=Math.abs,a=Math.sqrt;n({target:"Math",stat:!0,forced:!!r&&r(1/0,NaN)!==1/0},{hypot:function(t,e){for(var i,n,r=0,s=0,c=arguments.length,u=0;s<c;)u<(i=o(arguments[s++]))?(r=r*(n=u/i)*n+1,u=i):r+=i>0?(n=i/u)*n:i;return u===1/0?1/0:u*a(r)}})}}]);
//# sourceMappingURL=18-2a7caf55576465038bb7.js.map
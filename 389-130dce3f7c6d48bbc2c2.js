"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[389],{3389:function(t,e,i){i.r(e),i.d(e,{default:function(){return l}});var n=i(5785),r=i(7294),a=i(462),o=i.n(a),s=JSON.parse('{"K":[{"id":"headquarter","name":"Headquarter","picture":"headquarter","size":300},{"id":"napoli","name":"Napoli","picture":"planet1","size":168},{"id":"milano","name":"Milano","picture":"planet1","size":200},{"id":"cremona","name":"Cremona","picture":"planet2","size":55},{"id":"piacenza","name":"Piacenza","picture":"planet2","size":57},{"id":"tenerife","name":"Tenerife","picture":"planet2","size":110},{"id":"bologna","name":"Bologna","picture":"planet1","size":113},{"id":"pavia","name":"Pavia","picture":"planet2","size":55},{"id":"matelica","name":"Matelica","picture":"planet2","size":50}]}'),c=i.p+"static/barlow_condensed-0bac2bb11e1b52510a922c47bd0e7456.ttf",h=i(1082),u=function(){function t(t,e,i,n,r,a){this.planetName=e,this.planetId=t,this.coordinates={x:i,y:n},this.size=r,this.img=a,this.xDirection=Math.random()>.5?1:-1,this.yDirection=Math.random()>.5?1:-1}var e=t.prototype;return e.nextCoordinates=function(){return{x:this.coordinates.x+this.xDirection,y:this.coordinates.y+this.yDirection}},e.setCoordinates=function(t){this.coordinates=t},e.getCenter=function(){var t=Math.floor(this.size/2);return{x:this.coordinates.x+t,y:this.coordinates.y+t}},e.invertDirection=function(t){switch(t){case"x":this.xDirection=-1*this.xDirection;break;case"y":this.yDirection=-1*this.yDirection;break;default:this.xDirection=-1*this.xDirection,this.yDirection=-1*this.yDirection}},e.fixMovement=function(t){var e=this.nextCoordinates(),i=e.x,n=e.y;t.isHorizontalOutside(e.x,this.size)&&(this.invertDirection("x"),i=this.coordinates.x),t.isVerticalOutside(e.y,this.size)&&(this.invertDirection("y"),n=this.coordinates.y),this.setCoordinates({x:i,y:n})},t}(),d=function(){function t(t,e,i){this.width=e,this.height=i,this.p5=t}var e=t.prototype;return e.isHorizontalOutside=function(t,e){return t>this.width-e||t<0},e.isVerticalOutside=function(t,e){return t>this.height-e||t<0},e.detectCollision=function(t,e){var i=t.getCenter(),n=e.getCenter();return this.p5.dist(i.x,i.y,n.x,n.y)<=Math.floor(t.size/2)+Math.floor(e.size/2)},e.leftSide=function(t){return t.getCenter().x<this.width/2},t}(),l=function(){var t,e,i=[],a=window.innerWidth<769,l=a?12:16,f=a?60:100,x=a?22:26,p=(0,h.useStaticQuery)("2204792749");return r.createElement(o(),{preload:function(r){var a=r.min(1600,window.innerWidth-40),o=r.min(1e3,window.innerHeight-200);t=new d(r,a,o);var h=s.K;e=r.loadFont(c);var l=0,f=h.reduce((function(t,e){return t+e.size+30}),0),x=f<a?1:f/a,y=f>a?10:Math.floor((a-f)/h.length);i=h.reduce((function(t,e){var i=p[e.picture];if(i){var a=i.childImageSharp.fluid.src,s=r.loadImage(a),c=Math.floor(e.size/x),h=r.random(0,o-c),d=new u(e.id,e.name,l,h,c,s);return l=l+c+y,[].concat((0,n.Z)(t),[d])}return t}),[])},setup:function(i,n){i.createCanvas(t.width,t.height).parent(n),i.frameRate(30),i.textFont(e)},draw:function(n){n.background(255),n.noFill(),n.stroke(217,50,50),n.strokeWeight(3),i.forEach((function(e,r){e.fixMovement(t);for(var a=r+1;a<i.length;a++){var o=i[r],s=i[a];t.detectCollision(o,s)&&(o.invertDirection(),s.invertDirection());var c=(u=s,d=void 0,l=void 0,d=(h=o).getCenter(),l=u.getCenter(),{x1:d.x,y1:d.y,x2:d.x+h.size,y2:d.y+h.size,x3:l.x-u.size,y3:l.y-u.size,x4:l.x,y4:l.y});n.bezier(c.x1,c.y1,c.x2,c.y2,c.x3,c.y3,c.x4,c.y4)}var h,u,d,l})),n.textSize(l),n.strokeWeight(1),i.forEach((function(t){var e=t.coordinates,i=e.x,r=e.y;n.image(t.img,i,r,t.size,t.size)})),i.forEach((function(i){var r=i.getCenter(),o={x:r.x,y:r.y};t.leftSide(i)?o.x=r.x+i.size/2-(a?0:40):o.x=r.x-i.size/2-(a?f:60);var s=e.textBounds(i.planetName,o.x,o.y,l);n.stroke(0),n.fill(0),"headquarter"===i.planetId&&(n.stroke(217,50,50),n.fill(217,50,50)),n.rect(s.x,s.y,f,x),n.stroke(255),n.fill(255),n.text(i.planetName,o.x+(f-s.w)/2,o.y+(x-s.h)/2)}))}})}}}]);
//# sourceMappingURL=389-130dce3f7c6d48bbc2c2.js.map
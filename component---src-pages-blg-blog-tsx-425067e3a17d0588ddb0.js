(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(216),c=n(215),i=n(218),u=n(217),l=function(){function e(){}return e.prototype.normalizePostsFromQuery=function(e){return e?e.allMarkdownRemark.edges.map((function(e){return new u.a(e.node.frontmatter.title,e.node.frontmatter.path,new Date(e.node.frontmatter.date),e.node.html)})):[]},e}();n(229);n.d(t,"BASE_CLASS",(function(){return m})),n.d(t,"CONTENT_CLASS",(function(){return d})),n.d(t,"BlogPage",(function(){return f}));var m="blog-page",d=m+"__content",s=new l;function f(e){var t=Object(a.useState)(!1),n=t[0];t[1];return r.a.createElement(c.a,{initiated:n},r.a.createElement(o.a,{title:"Dang Beer | Blog",description:"blog",lang:"en",meta:[]}),r.a.createElement("div",{className:m},r.a.createElement("div",{className:d},r.a.createElement("h1",null,"Recent Thoughts"),r.a.createElement(i.a,{options:s.normalizePostsFromQuery(e.data)}))))}t.default=r.a.memo(f)}}]);
//# sourceMappingURL=component---src-pages-blg-blog-tsx-425067e3a17d0588ddb0.js.map
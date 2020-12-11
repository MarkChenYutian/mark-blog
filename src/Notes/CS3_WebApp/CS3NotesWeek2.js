import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';
import 'katex/dist/katex.min.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function CS3NotesWeek2(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='CS3 Javascript Notes Week 2'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <div dangerouslySetInnerHTML={{__html:html_Content}}></div>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default CS3NotesWeek2;

const html_Content=`
<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>Javascript Notes Week 2</title><link href='https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet' type='text/css' /><style type='text/css'>html {overflow-x: initial !important;}:root { --bg-color:#ffffff; --text-color:#333333; --select-text-bg-color:#B5D6FC; --select-text-font-color:auto; --monospace:"Lucida Console",Consolas,"Courier",monospace; }
html { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
body { margin: 0px; padding: 0px; height: auto; bottom: 0px; top: 0px; left: 0px; right: 0px; font-size: 1rem; line-height: 1.42857; overflow-x: hidden; background: inherit; tab-size: 4; }
iframe { margin: auto; }
a.url { word-break: break-all; }
a:active, a:hover { outline: 0px; }
.in-text-selection, ::selection { text-shadow: none; background: var(--select-text-bg-color); color: var(--select-text-font-color); }
#write { margin: 0px auto; height: auto; width: inherit; word-break: normal; overflow-wrap: break-word; position: relative; white-space: normal; overflow-x: visible; padding-top: 40px; }
#write.first-line-indent p { text-indent: 2em; }
#write.first-line-indent li p, #write.first-line-indent p * { text-indent: 0px; }
#write.first-line-indent li { margin-left: 2em; }
.for-image #write { padding-left: 8px; padding-right: 8px; }
body.typora-export { padding-left: 30px; padding-right: 30px; }
.typora-export .footnote-line, .typora-export li, .typora-export p { white-space: pre-wrap; }
.typora-export .task-list-item input { pointer-events: none; }
@media screen and (max-width: 500px) {
  body.typora-export { padding-left: 0px; padding-right: 0px; }
  #write { padding-left: 20px; padding-right: 20px; }
  .CodeMirror-sizer { margin-left: 0px !important; }
  .CodeMirror-gutters { display: none !important; }
}
#write li > figure:last-child { margin-bottom: 0.5rem; }
#write ol, #write ul { position: relative; }
img { max-width: 100%; vertical-align: middle; image-orientation: from-image; }
button, input, select, textarea { color: inherit; font: inherit; }
input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
*, ::after, ::before { box-sizing: border-box; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre { width: inherit; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p { position: relative; }
p { line-height: inherit; }
h1, h2, h3, h4, h5, h6 { break-after: avoid-page; break-inside: avoid; orphans: 4; }
p { orphans: 4; }
h1 { font-size: 2rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
.md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p { margin-top: 1rem; margin-bottom: 1rem; }
.hidden { display: none; }
.md-blockmeta { color: rgb(204, 204, 204); font-weight: 700; font-style: italic; }
a { cursor: pointer; }
sup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.7); color: rgb(85, 85, 85); border-radius: 4px; cursor: pointer; }
sup.md-footnote a, sup.md-footnote a:hover { color: inherit; text-transform: inherit; text-decoration: inherit; }
#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; }
figure { overflow-x: auto; margin: 1.2em 0px; max-width: calc(100% + 16px); padding: 0px; }
figure > table { margin: 0px; }
tr { break-inside: avoid; break-after: auto; }
thead { display: table-header-group; }
table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }
table.md-table td { min-width: 32px; }
.CodeMirror-gutters { border-right: 0px; background-color: inherit; }
.CodeMirror-linenumber { user-select: none; }
.CodeMirror { text-align: left; }
.CodeMirror-placeholder { opacity: 0.3; }
.CodeMirror pre { padding: 0px 4px; }
.CodeMirror-lines { padding: 0px; }
div.hr:focus { cursor: none; }
#write pre { white-space: pre-wrap; }
#write.fences-no-line-wrapping pre { white-space: pre; }
#write pre.ty-contain-cm { white-space: normal; }
.CodeMirror-gutters { margin-right: 4px; }
.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background: inherit; position: relative !important; }
.md-diagram-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
#write .md-fences.mock-cm { white-space: pre-wrap; }
.md-fences.md-fences-with-lineno { padding-left: 0px; }
#write.fences-no-line-wrapping .md-fences.mock-cm { white-space: pre; overflow-x: auto; }
.md-fences.mock-cm.md-fences-with-lineno { padding-left: 8px; }
.CodeMirror-line, twitterwidget { break-inside: avoid; }
.footnotes { opacity: 0.8; font-size: 0.9rem; margin-top: 1em; margin-bottom: 1em; }
.footnotes + .footnotes { margin-top: 0px; }
.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background: 0px 0px; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; -webkit-tap-highlight-color: transparent; line-height: normal; font-weight: 400; text-align: left; box-sizing: content-box; direction: ltr; }
li div { padding-top: 0px; }
blockquote { margin: 1rem 0px; }
li .mathjax-block, li p { margin: 0.5rem 0px; }
li { margin: 0px; position: relative; }
blockquote > :last-child { margin-bottom: 0px; }
blockquote > :first-child, li > :first-child { margin-top: 0px; }
.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; white-space: normal; }
#write .footnote-line { white-space: pre-wrap; }
@media print {
  body, html { border: 1px solid transparent; height: 99%; break-after: avoid; break-before: avoid; font-variant-ligatures: no-common-ligatures; }
  #write { margin-top: 0px; padding-top: 0px; border-color: transparent !important; }
  .typora-export * { -webkit-print-color-adjust: exact; }
  html.blink-to-pdf { font-size: 13px; }
  .typora-export #write { break-after: avoid; }
  .typora-export #write::after { height: 0px; }
  .is-mac table { break-inside: avoid; }
}
.footnote-line { margin-top: 0.714em; font-size: 0.7em; }
a img, img a { cursor: pointer; }
pre.md-meta-block { font-size: 0.8rem; min-height: 0.8rem; white-space: pre-wrap; background: rgb(204, 204, 204); display: block; overflow-x: hidden; }
p > .md-image:only-child:not(.md-img-error) img, p > img:only-child { display: block; margin: auto; }
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img { left: -2em; position: relative; }
p > .md-image:only-child { display: inline-block; width: 100%; }
#write .MathJax_Display { margin: 0.8em 0px 0px; }
.md-math-block { width: 100%; }
.md-math-block:not(:empty)::after { display: none; }
[contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus { outline: 0px; box-shadow: none; }
.md-task-list-item { position: relative; list-style-type: none; }
.task-list-item.md-task-list-item { padding-left: 0px; }
.md-task-list-item > input { position: absolute; top: 0px; left: 0px; margin-left: -1.2em; margin-top: calc(1em - 10px); border: none; }
.math { font-size: 1rem; }
.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-radius: 10px; }
.md-toc-content { position: relative; margin-left: 0px; }
.md-toc-content::after, .md-toc::after { display: none; }
.md-toc-item { display: block; color: rgb(65, 131, 196); }
.md-toc-item a { text-decoration: none; }
.md-toc-inner:hover { text-decoration: underline; }
.md-toc-inner { display: inline-block; cursor: pointer; }
.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: 700; }
.md-toc-h2 .md-toc-inner { margin-left: 2em; }
.md-toc-h3 .md-toc-inner { margin-left: 4em; }
.md-toc-h4 .md-toc-inner { margin-left: 6em; }
.md-toc-h5 .md-toc-inner { margin-left: 8em; }
.md-toc-h6 .md-toc-inner { margin-left: 10em; }
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
  .md-toc-h4 .md-toc-inner { margin-left: 5em; }
  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
  .md-toc-h6 .md-toc-inner { margin-left: 8em; }
}
a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
.footnote-line a:not(.reversefootnote) { color: inherit; }
.md-attr { display: none; }
.md-fn-count::after { content: "."; }
code, pre, samp, tt { font-family: var(--monospace); }
kbd { margin: 0px 0.1em; padding: 0.1em 0.6em; font-size: 0.8em; color: rgb(36, 39, 41); background: rgb(255, 255, 255); border: 1px solid rgb(173, 179, 185); border-radius: 3px; box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset; white-space: nowrap; vertical-align: middle; }
.md-comment { color: rgb(162, 127, 3); opacity: 0.8; font-family: var(--monospace); }
code { text-align: left; vertical-align: initial; }
a.md-print-anchor { white-space: pre !important; border-width: initial !important; border-style: none !important; border-color: initial !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: 0px !important; background: 0px 0px !important; text-decoration: initial !important; text-shadow: initial !important; }
.md-inline-math .MathJax_SVG .noError { display: none !important; }
.html-for-mac .inline-math-svg .MathJax_SVG { vertical-align: 0.2px; }
.md-math-block .MathJax_SVG_Display { text-align: center; margin: 0px; position: relative; text-indent: 0px; max-width: none; max-height: none; min-height: 0px; min-width: 100%; width: auto; overflow-y: hidden; display: block !important; }
.MathJax_SVG_Display, .md-inline-math .MathJax_SVG_Display { width: auto; margin: inherit; display: inline-block !important; }
.MathJax_SVG .MJX-monospace { font-family: var(--monospace); }
.MathJax_SVG .MJX-sans-serif { font-family: sans-serif; }
.MathJax_SVG { display: inline; font-style: normal; font-weight: 400; line-height: normal; zoom: 90%; text-indent: 0px; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; overflow-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; }
.MathJax_SVG * { transition: none 0s ease 0s; }
.MathJax_SVG_Display svg { vertical-align: middle !important; margin-bottom: 0px !important; margin-top: 0px !important; }
.os-windows.monocolor-emoji .md-emoji { font-family: "Segoe UI Symbol", sans-serif; }
.md-diagram-panel > svg { max-width: 100%; }
[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; height: auto; }
[lang="mermaid"] .node text { font-size: 1rem; }
table tr th { border-bottom: 0px; }
video { max-width: 100%; display: block; margin: 0px auto; }
iframe { max-width: 100%; width: 100%; border: none; }
.highlight td, .highlight tr { border: 0px; }
svg[id^="mermaidChart"] { line-height: 1em; }
mark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }
.md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong { color: inherit; }
mark .md-meta { color: rgb(0, 0, 0); opacity: 0.3 !important; }
@media print {
  .typora-export h1, .typora-export h2, .typora-export h3, .typora-export h4, .typora-export h5, .typora-export h6 { break-inside: avoid; }
}


.CodeMirror { height: auto; }
.CodeMirror.cm-s-inner { background: inherit; }
.CodeMirror-scroll { overflow: auto hidden; z-index: 3; }
.CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler { background-color: rgb(255, 255, 255); }
.CodeMirror-gutters { border-right: 1px solid rgb(221, 221, 221); background: inherit; white-space: nowrap; }
.CodeMirror-linenumber { padding: 0px 3px 0px 5px; text-align: right; color: rgb(153, 153, 153); }
.cm-s-inner .cm-keyword { color: rgb(119, 0, 136); }
.cm-s-inner .cm-atom, .cm-s-inner.cm-atom { color: rgb(34, 17, 153); }
.cm-s-inner .cm-number { color: rgb(17, 102, 68); }
.cm-s-inner .cm-def { color: rgb(0, 0, 255); }
.cm-s-inner .cm-variable { color: rgb(0, 0, 0); }
.cm-s-inner .cm-variable-2 { color: rgb(0, 85, 170); }
.cm-s-inner .cm-variable-3 { color: rgb(0, 136, 85); }
.cm-s-inner .cm-string { color: rgb(170, 17, 17); }
.cm-s-inner .cm-property { color: rgb(0, 0, 0); }
.cm-s-inner .cm-operator { color: rgb(152, 26, 26); }
.cm-s-inner .cm-comment, .cm-s-inner.cm-comment { color: rgb(170, 85, 0); }
.cm-s-inner .cm-string-2 { color: rgb(255, 85, 0); }
.cm-s-inner .cm-meta { color: rgb(85, 85, 85); }
.cm-s-inner .cm-qualifier { color: rgb(85, 85, 85); }
.cm-s-inner .cm-builtin { color: rgb(51, 0, 170); }
.cm-s-inner .cm-bracket { color: rgb(153, 153, 119); }
.cm-s-inner .cm-tag { color: rgb(17, 119, 0); }
.cm-s-inner .cm-attribute { color: rgb(0, 0, 204); }
.cm-s-inner .cm-header, .cm-s-inner.cm-header { color: rgb(0, 0, 255); }
.cm-s-inner .cm-quote, .cm-s-inner.cm-quote { color: rgb(0, 153, 0); }
.cm-s-inner .cm-hr, .cm-s-inner.cm-hr { color: rgb(153, 153, 153); }
.cm-s-inner .cm-link, .cm-s-inner.cm-link { color: rgb(0, 0, 204); }
.cm-negative { color: rgb(221, 68, 68); }
.cm-positive { color: rgb(34, 153, 34); }
.cm-header, .cm-strong { font-weight: 700; }
.cm-del { text-decoration: line-through; }
.cm-em { font-style: italic; }
.cm-link { text-decoration: underline; }
.cm-error { color: red; }
.cm-invalidchar { color: red; }
.cm-constant { color: rgb(38, 139, 210); }
.cm-defined { color: rgb(181, 137, 0); }
div.CodeMirror span.CodeMirror-matchingbracket { color: rgb(0, 255, 0); }
div.CodeMirror span.CodeMirror-nonmatchingbracket { color: rgb(255, 34, 34); }
.cm-s-inner .CodeMirror-activeline-background { background: inherit; }
.CodeMirror { position: relative; overflow: hidden; }
.CodeMirror-scroll { height: 100%; outline: 0px; position: relative; box-sizing: content-box; background: inherit; }
.CodeMirror-sizer { position: relative; }
.CodeMirror-gutter-filler, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar { position: absolute; z-index: 6; display: none; }
.CodeMirror-vscrollbar { right: 0px; top: 0px; overflow: hidden; }
.CodeMirror-hscrollbar { bottom: 0px; left: 0px; overflow: hidden; }
.CodeMirror-scrollbar-filler { right: 0px; bottom: 0px; }
.CodeMirror-gutter-filler { left: 0px; bottom: 0px; }
.CodeMirror-gutters { position: absolute; left: 0px; top: 0px; padding-bottom: 30px; z-index: 3; }
.CodeMirror-gutter { white-space: normal; height: 100%; box-sizing: content-box; padding-bottom: 30px; margin-bottom: -32px; display: inline-block; }
.CodeMirror-gutter-wrapper { position: absolute; z-index: 4; background: 0px 0px !important; border: none !important; }
.CodeMirror-gutter-background { position: absolute; top: 0px; bottom: 0px; z-index: 4; }
.CodeMirror-gutter-elt { position: absolute; cursor: default; z-index: 4; }
.CodeMirror-lines { cursor: text; }
.CodeMirror pre { border-radius: 0px; border-width: 0px; background: 0px 0px; font-family: inherit; font-size: inherit; margin: 0px; white-space: pre; overflow-wrap: normal; color: inherit; z-index: 2; position: relative; overflow: visible; }
.CodeMirror-wrap pre { overflow-wrap: break-word; white-space: pre-wrap; word-break: normal; }
.CodeMirror-code pre { border-right: 30px solid transparent; width: fit-content; }
.CodeMirror-wrap .CodeMirror-code pre { border-right: none; width: auto; }
.CodeMirror-linebackground { position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; z-index: 0; }
.CodeMirror-linewidget { position: relative; z-index: 2; overflow: auto; }
.CodeMirror-wrap .CodeMirror-scroll { overflow-x: hidden; }
.CodeMirror-measure { position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden; }
.CodeMirror-measure pre { position: static; }
.CodeMirror div.CodeMirror-cursor { position: absolute; visibility: hidden; border-right: none; width: 0px; }
.CodeMirror div.CodeMirror-cursor { visibility: hidden; }
.CodeMirror-focused div.CodeMirror-cursor { visibility: inherit; }
.cm-searching { background: rgba(255, 255, 0, 0.4); }
@media print {
  .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
}


:root {
    --side-bar-bg-color: #fafafa;
    --control-text-color: #777;
}

@include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/* open-sans-regular - latin-ext_latin */
  /* open-sans-italic - latin-ext_latin */
    /* open-sans-700 - latin-ext_latin */
    /* open-sans-700italic - latin-ext_latin */
  html {
    font-size: 16px;
}

body {
    font-family: "Open Sans","Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}

#write {
    max-width: 860px;
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

#write > ul:first-child,
#write > ol:first-child{
    margin-top: 30px;
}

a {
    color: #4183C4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit;
}
h2 tt,
h2 code {
    font-size: inherit;
}
h3 tt,
h3 code {
    font-size: inherit;
}
h4 tt,
h4 code {
    font-size: inherit;
}
h5 tt,
h5 code {
    font-size: inherit;
}
h6 tt,
h6 code {
    font-size: inherit;
}
h1 {
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}
h2 {
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
}

/*@media print {
    .typora-export h1,
    .typora-export h2 {
        border-bottom: none;
        padding-bottom: initial;
    }

    .typora-export h1::after,
    .typora-export h2::after {
        content: "";
        display: block;
        height: 100px;
        margin-top: -96px;
        border-top: 1px solid #eee;
    }
}*/

h3 {
    font-size: 1.5em;
    line-height: 1.43;
}
h4 {
    font-size: 1.25em;
}
h5 {
    font-size: 1em;
}
h6 {
   font-size: 1em;
    color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table{
    margin: 0.8em 0;
}
li>ol,
li>ul {
    margin: 0 0;
}
hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
}

li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0;
}
blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 15px;
    color: #777777;
}
blockquote blockquote {
    padding-right: 0;
}
table {
    padding: 0;
    word-break: initial;
}
table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n),
thead {
    background-color: #f8f8f8;
}
table tr th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
}
table tr td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
    margin-top: 0;
}
table tr th:last-child,
table tr td:last-child {
    margin-bottom: 0;
}

.CodeMirror-lines {
    padding-left: 4px;
}

.code-tooltip {
    box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);
    border-top: 1px solid #eef2f2;
}

.md-fences,
code,
tt {
    border: 1px solid #e7eaed;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 0;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
}

code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
}

.md-fences {
    margin-bottom: 15px;
    margin-top: 15px;
    padding-top: 8px;
    padding-bottom: 6px;
}


.md-task-list-item > input {
  margin-left: -1.3em;
}

@media print {
    html {
        font-size: 13px;
    }
    table,
    pre {
        page-break-inside: avoid;
    }
    pre {
        word-wrap: break-word;
    }
}

.md-fences {
	background-color: #f8f8f8;
}
#write pre.md-meta-block {
	padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    color: #777777;
    margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
	bottom: .375rem;
}

.md-mathjax-midline {
    background: #fafafa;
}

#write>h3.md-focus:before{
	left: -1.5625rem;
	top: .375rem;
}
#write>h4.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h5.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h6.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
.md-image>.md-meta {
    /*border: 1px solid #ddd;*/
    border-radius: 3px;
    padding: 2px 0px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}

.md-tag {
    color: #a7a7a7;
    opacity: 1;
}

.md-toc { 
    margin-top:20px;
    padding-bottom:20px;
}

.sidebar-tabs {
    border-bottom: none;
}

#typora-quick-open {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}

#typora-quick-open-item {
    background-color: #FAFAFA;
    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
    border-style: solid;
    border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}

header, .context-menu, .megamenu-content, footer{
    font-family: "Segoe UI", "Arial", sans-serif;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state{
    visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
    background-color: #fafafa;
    background-color: var(--side-bar-bg-color);
}

.md-lang {
    color: #b4654d;
}

.html-for-mac .context-menu {
    --item-hover-bg-color: #E6F0FE;
}

#md-notification .btn {
    border: 0;
}

.dropdown-menu .divider {
    border-color: #e5e5e5;
}

.ty-preferences .window-content {
    background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
    color: white;
    background: #999;
}


</style>
</head>
<body class='typora-export os-windows'>
<div id='write'  class=''><hr /><h2><a name="if-else-if-and-else-in-js" class="md-header-anchor"></a><span>if, else if, and else in JS</span></h2><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 34.6165px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 27px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>9</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -26.9886px; width: 27px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">if</span> (<span class="cm-variable">condition_1</span>){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-meta">...</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">else</span> <span class="cm-keyword">if</span> (<span class="cm-variable">condition_2</span>){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-meta">...</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">else</span>{</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-meta">...</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 205px;"></div><div class="CodeMirror-gutters" style="height: 205px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 26px;"></div></div></div></div></pre><h2><a name="switch-in-javascript" class="md-header-anchor"></a><span>switch in JavaScript</span></h2><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="Javascript"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 43.6221px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 36px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -35.9943px; width: 36px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">switch</span>(<span class="cm-variable">expression</span>){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">case</span> <span class="cm-variable">value_1</span>:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">//do something</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">break</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">case</span> <span class="cm-variable">value_2</span>:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">//do other things</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">break</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">case</span> <span class="cm-keyword">default</span>:</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">//do remaining things</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 250px;"></div><div class="CodeMirror-gutters" style="height: 250px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 35px;"></div></div></div></div></pre><p>&nbsp;</p><h2><a name="array" class="md-header-anchor"></a><span>Array</span></h2><p><span>We can put anything as the index of array. Since the </span><code>array</code><span> is in fact an Object, when we are adding one term of </span><code>1.1</code><span> as index in </span><code>array</code><span>, we are in fact adding attributes to </span><code>array</code><span>.</span></p><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript" style="break-inside: unset;"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 43.6221px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 36px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>18</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -35.9943px; width: 36px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">variable</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>];</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">variable</span>[<span class="cm-number">3</span>]; <span class="cm-comment">//&lt;--- return 'undefined'</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">variable</span>[<span class="cm-number">1.1</span>]<span class="cm-operator">=</span><span class="cm-number">3</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">variable</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// [0:1, 1:2, 1.1:3, 2:3]</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">i</span><span class="cm-operator">=</span><span class="cm-number">0</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">while</span> (<span class="cm-variable">i</span> <span class="cm-operator">&lt;</span> <span class="cm-variable">variable</span>.<span class="cm-property">length</span>){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">variable</span>.<span class="cm-property">pop</span>());</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">i</span> <span class="cm-operator">++</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">/*</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">1</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">2</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">3</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">*/</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">variable</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// [1.1: 3]</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 409px;"></div><div class="CodeMirror-gutters" style="height: 409px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 35px;"></div></div></div></div></pre><h3><a name="6-useful-functions-for-array" class="md-header-anchor"></a><span>6 Useful functions for Array</span></h3><p><code>array.push(obj)</code><span> will add the object at the end of array.</span></p><p><code>array.pop()</code><span> will return the object at the end of array and remove the object at the end of array.</span></p><p>&nbsp;</p><p><code>array.shift()</code><span> will return the object at the beginning of array and remove the object at the beginning</span></p><p><code>array.unshift()</code><span> will add one object at the beginning of array</span></p><p>&nbsp;</p><p><code>array.splice(start_index, slice_length)</code><span> will change the </span><strong><span>array&#39;s content</span></strong><span> and return the array that has been cut off. (inplace operation)</span></p><p><code>array.slice(start_index, end_index)</code><span> will </span><strong><span>NOT</span></strong><span> change the array&#39;s content and will return the array in that range. (somehow similar to Python, slice will NOT include the element at end_index)</span></p><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript" style="break-inside: unset;"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 43.6221px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 36px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>15</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -35.9943px; width: 36px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-def">arr</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span>.<span class="cm-property">slice</span>(<span class="cm-number">1</span>, <span class="cm-number">1</span>)</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span>.<span class="cm-property">slice</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>)</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">2</span>]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span>.<span class="cm-property">slice</span>(<span class="cm-number">1</span>, <span class="cm-number">3</span>)</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">2</span>, <span class="cm-number">3</span>]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span>.<span class="cm-property">splice</span>(<span class="cm-number">1</span>, <span class="cm-number">1</span>)</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">2</span>]</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 27px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">arr</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -35.9943px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 27px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">[<span class="cm-number">1</span>, <span class="cm-number">3</span>]</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 341px;"></div><div class="CodeMirror-gutters" style="height: 341px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 35px;"></div></div></div></div></pre><p>&nbsp;</p><h2><a name="function-in-javascript" class="md-header-anchor"></a><span>Function in JavaScript</span></h2><p><code>function</code><span>  is an object in JS.</span></p><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 34.6165px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 27px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>4</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -26.9886px; width: 27px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">foo</span>(<span class="cm-def">param_1</span>, <span class="cm-def">param_2</span>){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-comment">// do something here</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable">result</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 91px;"></div><div class="CodeMirror-gutters" style="height: 91px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 26px;"></div></div></div></div></pre><h2><a name="operators-in-javascript" class="md-header-anchor"></a><span>Operators in JavaScript</span></h2><h3><a name="arithmetic-operators-in-javascript" class="md-header-anchor"></a><span>Arithmetic Operators in JavaScript</span></h3><div class="datatable-begin"></div><figure><table><thead><tr><th><span>Sign</span></th><th><span>Meaning</span></th><th><span>Example</span></th></tr></thead><tbody><tr><td><code>/</code></td><td><span>Divide</span></td><td><code>2/4=0.5</code></td></tr><tr><td><code>%</code></td><td><span>Modular</span></td><td><code>5%2=1</code></td></tr><tr><td><code>**</code></td><td><span>Power</span></td><td><code>2**3=8</code></td></tr></tbody></table></figure><div class="datatable-end"></div><br><h3><a name="assign-operator-in-javascript" class="md-header-anchor"></a><span>Assign Operator in JavaScript</span></h3><div class="datatable-begin"></div><figure><table><thead><tr><th><span>Sign</span></th><th><span>Meaning</span></th><th><span>Example</span></th><th>&nbsp;</th></tr></thead><tbody><tr><td><code>=</code></td><td><span>Assign Value to the variable directly</span></td><td><span>...</span></td><td>&nbsp;</td></tr><tr><td><code>+=</code></td><td><span>Add the given value on the variable directly</span></td><td><code>let a=1; a += 1;</code></td><td>&nbsp;</td></tr><tr><td><code>-=</code></td><td><span>Subtract the given value on the variable directly</span></td><td><span>...</span></td><td>&nbsp;</td></tr><tr><td><span>...</span></td><td><span>Each arithmetic operator has corresponding assign operator</span></td><td><span>...</span></td><td>&nbsp;</td></tr><tr><td><code>++a</code></td><td><span>The program will </span><strong><span>First Add 1 to variable</span></strong><span>, then return its value</span></td><td><span>...</span></td><td>&nbsp;</td></tr><tr><td><code>a++</code></td><td><span>The program will </span><strong><span>First return its value</span></strong><span>, then add 1 to it</span></td><td><span>...</span></td><td>&nbsp;</td></tr></tbody></table></figure><div class="datatable-end"></div><br><h3><a name="comparison-operator-in-javascript" class="md-header-anchor"></a><span>Comparison Operator in JavaScript</span></h3><div class="datatable-begin"></div><figure><table><thead><tr><th><span>Sign</span></th><th><span>Meaning</span></th><th><span>Example</span></th></tr></thead><tbody><tr><td><code>==</code></td><td><span>return True if the value are equal (even if variables have different type)</span></td><td><code>1==&#39;1&#39; -&gt; true</code></td></tr><tr><td><code>===</code></td><td><span>return True if the value are equal and </span><strong><span>type are equal</span></strong></td><td><code>1===&#39;1&#39; -&gt; false</code></td></tr><tr><td><code>!=</code></td><td><span>return True if </span><code>==</code><span> return False</span></td><td><span>...</span></td></tr><tr><td><code>&gt;</code><span>, </span><code>&lt;</code></br><span> </span><code>&gt;=</code><span>, </span><code>&lt;=</code></td><td><span>the meaning of these operators should be obvious</span></td><td><span>...</span></td></tr></tbody></table></figure><div class="datatable-end"></div><br><h3><a name="logical-operators" class="md-header-anchor"></a><span>Logical Operators</span></h3><div class="datatable-begin"></div><figure><table><thead><tr><th><span>Sign</span></th><th><span>Meaning</span></th><th><span>Example</span></th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td><em><span>Logical And</span></em><span>, return True if </span><code>expr1</code><span> and </span><code>expr2</code><span> both return True</span></td><td><span>...</span></td></tr><tr><td><code>||</code></td><td><em><span>Logical Or</span></em><span>, return True if either </span><code>expr1</code><span> or </span><code>expr2</code><span> is True</span></td><td><span>...</span></td></tr><tr><td><code>!</code></td><td><em><span>Logical Not</span></em><span>, if ture, return false</span></td><td><span>...</span></td></tr></tbody></table></figure><div class="datatable-end"></div><br><p><span>In JavaScript, logical operators can be applied on everything. One common and elegant way to remove </span><code>undefined</code><span> in program is using </span><code>||</code><span> here. </span><code>undefined || value -&gt; value</code></p><br><p><span>Similarly, the operator </span><code>?</code><span> is an syntax encapsulation of </span><code>if</code><span> condition. </span></p><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 34.6165px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 27px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>3</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -26.9886px; width: 27px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">let</span> <span class="cm-keyword">var</span> <span class="cm-operator">=</span> <span class="cm-variable">expr</span> <span class="cm-operator">?</span> <span class="cm-variable">value1</span> : <span class="cm-variable">value2</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// if expr == true,  var=value1;</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// if expr == false, var=value2;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 68px;"></div><div class="CodeMirror-gutters" style="height: 68px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 26px;"></div></div></div></div></pre><p><span>The logical operation in JavaScript can be &quot;chained up&quot;. When the program is evaluating the expression, it will evaluate from left to right (there does not have a specific calculation order for different operator).</span></p><h2><a name="math-in-javascript" class="md-header-anchor"></a><span>Math in JavaScript</span></h2><pre spellcheck="false" class="md-fences md-end-block md-fences-with-lineno ty-contain-cm modeLoaded" lang="javascript"><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 34.9716px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 27px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>4</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -26.9886px; width: 27px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">Math</span>.<span class="cm-property">random</span>()</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-number">0.9108649588393491</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 18px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-operator">&gt;</span> <span class="cm-variable">Math</span>.<span class="cm-property">random</span>()</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -26.9886px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt CodeMirror-linenumber-show" style="left: 0px; width: 18px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-number">0.1597932971246665</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 91px;"></div><div class="CodeMirror-gutters" style="height: 91px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 26px;"></div></div></div></div></pre></div>
</body>
</html>
`
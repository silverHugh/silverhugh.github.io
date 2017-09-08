---
title: Memo - JavaScript
categories: [memo, boat]
date: 2017-09-02 09:04:07 +0800
redirect_from: 
- /memo/js/
- /memo/javascript/
modified: 2017-09-02 09:04:37 +0800
---

This is one of my memos about using various of applications.

**Memos** are used for recording the problems I encountered during programming and its solutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

{% include toc %}

## Overview

- [JavaScript The Right Way](http://jstherightway.org/)
- [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)
- [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [A Simple, Comprehensive Overview of Javascript](https://betterexplained.com/articles/the-single-page-javascript-overview/)

## Fun and useful

REST API:

- [`Video` - REST API concepts and examples](https://www.youtube.com/watch?v=7YcW25PHnAA)
- [`Definition` - Representational State Transfer (REST)](http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [apigee - API Providers, `Console`](https://apigee.com/providers)
- [ProgrammableWeb - Search the Largest API Directory on the Web](https://www.programmableweb.com/category/all/apis)
- [Postman](https://www.getpostman.com/postman)

``` js
/* console.log() is out */
debugger;
```

## Identifier

``` js
const PI = 3.1415926;
PI = 1;			//TypeError: Assignment ot constant variable.

/* var - Use let in ES6 */
for(var i = 0; i<10; i++) {
	console.log(i)
}
console.log(i)	// 10
/* let - A let variable is block scoped. Scope - {} */
for(let i = 0; i<10; i++) {
	console.log(i);
}
console.log(i)	//ReferenceError
```

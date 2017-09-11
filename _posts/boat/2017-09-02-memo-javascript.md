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

## Node.js

``` sh
# Install nvm to ~/.nvm
# https://github.com/creationix/nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
# Add following scripts into ~/.bashrc or ~/.bash_profile or ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh"  ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion"  ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Install latest node by nvm
nvm install node
nvm use node
# Install specific version
# `nvm --help` and see Example

# Configuration
npm config set init.author.name anxiao
npm config set init.author.email hugh_77@icloud.com

# Create a new node.js project
# Get a .gitignore from github
wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore
npm init --yes
npm install

# Many more tips: https://blog.risingstack.com/nodejs-at-scale-npm-best-practices/
npm version
npm install [package] --save
```

``` js
const async = require('async')
/* series - dispose results after a bunch of works */
async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
});

/* waterfall - make works work one by one */
sync.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});
```

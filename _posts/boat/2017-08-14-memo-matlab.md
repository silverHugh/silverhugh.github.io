---
title: Memo - Matlab
categories: [memo, boat]
date: 2017-08-14 19:13:06 +0800
tags: Matlab
redirect_from: 
- /memo/matlab/
modified: 2017-08-14 19:13:01 +0800
---

{% include toc %}

This is one of my memos about Matlab.

**Memos** are used for recording the problems I encountered during programming and its solutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

## File

### List folder contents

``` matlab
FileInfo = dir('file_name')
%    name
%    folder
%    date
%    bytes
%    isdir
%    datenum
```

### Concat file path

[`fullfile`](https://www.mathworks.com/help/matlab/ref/fullfile.html)

### Image

- [`imread`](https://www.mathworks.com/help/matlab/ref/imread.html)
- [`imresize`](https://www.mathworks.com/help/images/ref/imresize.html)  - `[x, NaN]` ratio reserved

## String

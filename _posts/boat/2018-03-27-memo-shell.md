---
title: Memo - Shell
categories: [memo, boat]
date: 2017-06-28 17:29:07 +0800
tags: Shell
redirect_from: /memo/shell/
---

This is one of my memos about Shell commands.

**Memos** are used for recording the problems I encountered during programming and its soulutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

## SSH

``` shell
# Enable trusted x11 forwarding
#   -Y      Enables trusted X11 forwarding.  
#           Trusted X11 forwardings are not subjected to 
#           the X11 SECURITY extension controls.
#   ( man ssh )
ssh NAME@HOST -p PORT -Y

# Port forwardings
#   This will connect localhost:LOCAL_PORT with FORWARD_HOST:FORWARD_PORT
#   via ssh NAME@HOST -p PORT
#   ( if you want to bind HOST:PORT with localhost:LOCAL_PORT,
#       just set FORWARD_HOST to 0.0.0.0 
#       insted of seting FORWARD_HOST equal with HOST )
ssh -L LOCAL_PORT:FORWARD_HOST:FORWARD_PORT NAME@HOST -p PORT
```

## Daemon

``` shell
nohup PROGRAM > /dev/null &
```

## Tree

``` shell
# List directories only
tree . -d
#   -L  level
#       Max display depth of the directory tree.
tree . -d -L 2
```
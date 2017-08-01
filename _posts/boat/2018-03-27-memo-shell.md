---
title: Memo - Shell
categories: [memo, boat]
date: 2017-06-28 17:29:07 +0800
tags: Shell
redirect_from: 
- /memo/shell/
- /memo/sh/
- /memo/bash/
---

{% include toc %}

This is one of my memos about Shell commands.

**Memos** are used for recording the problems I encountered during programming and its soulutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

[shell十三问](https://wizardforcel.gitbooks.io/shell-13-questions/content/1.html)

## SSH

``` shell
# Generate SSH key & add it to ssh agent
#   https://gist.github.com/jexchan/2351996
ssh-keygen -t rsa -C "your_email@youremail.com" -f filename
ssh-add filename
ssh-add -l
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

# Authorized with keys
#   Clinet side: Add your public key to server
cat ~/.ssh/id_rsa.pub | ssh -p PORT NAME@HOST 'cat >> .ssh/authorized_keys'
#   Client side: Change the file mode on server ( important! )
cat ~/.ssh/id_rsa.pub | ssh -p PORT NAME@HOST 'mkdir .ssh; cat >> .ssh/authorized_keys'
```

## Command operators & separators

[Shell - Multiple commands in one line](https://stackoverflow.com/questions/5130847/shell-multiple-commands-in-one-line)

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

## Linux Version

[Linux Command: Show Linux Version](https://www.cyberciti.biz/faq/command-to-show-linux-version/)

``` shell
# Linux kernel version
uname -r
# or
cat /proc/sys/kernel/{ostype,osrelease,version}

# Linux distribution version
lsb_relase -a
```

## Associative array

[Bash associative array examples](http://www.artificialworlds.net/blog/2012/10/17/bash-associative-array-examples/)


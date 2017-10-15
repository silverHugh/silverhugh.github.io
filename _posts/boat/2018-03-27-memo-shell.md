---
title: Memo - Shell
categories: [memo, boat]
date: 2017-06-28 17:29:07 +0800
tags: shell
redirect_from: 
- /memo/shell/
- /memo/sh/
- /memo/bash/
modified: 2017-06-28 17:29:07 +0800
---

{% include toc %}

This is one of my memos about shell commands.

**Memos** are used for recording the problems I encountered during programming and its solutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

[shell十三问](https://wizardforcel.gitbooks.io/shell-13-questions/content/1.html)
[asciinema - recording terminal sessions and sharing them on the web](https://asciinema.org/)

## Command operators & separators

[Shell - Multiple commands in one line](https://stackoverflow.com/questions/5130847/shell-multiple-commands-in-one-line)

## Daemon

``` bash
nohup PROGRAM > /dev/null &
```

## Tree

``` bash
# List directories only
tree . -d
#   -L  level
#       Max display depth of the directory tree.
tree . -d -L 2
```

## System and hardware information

### Linux Version

[Linux Command: bashow Linux Version](https://www.cyberciti.biz/faq/command-to-show-linux-version/)

``` bash
# Linux kernel version
uname -r
# or
cat /proc/sys/kernel/{ostype,osrelease,version}

# Linux distribution version
lsb_relase -a
cat /etc/*release*
```

### Hardware Information

``` bash
# A very colorful system summary
neofetch
# cpu and processing units
lscpu
# list block devices 
lsblk
# disk space of file systems
df -H
# memory
free -h
# usb
lsusb
# nvidia gpu
nvidia-smi
```

## System Resources

[`htop`](http://hisham.hm/htop/index.php?page=downloads#binaries)

``` bash
# Dynamic monitor gpu (nvidia only)
watch -n 0.1 nvidia-smi
# kill process with fully command
pkill -f "process with arguments"
# Find process that listening specific port
sudo lsof -n -P -i :80
```


## SSH

``` bash
# Generate SSH key & add it to ssh agent
#   https://gist.github.com/jexchan/2351996
eval `ssh-agent`
ssh-keygen -t rsa -C "your_email@youremail.com" -f filename
ssh-add filename
ssh-add -l
# Enable trusted x11 forwarding
#   -Y      Enables trusted X11 forwarding.  
#           Trusted X11 forwardings are not subjected to 
#           the X11 SECURITY extension controls.
#   ( man ssh )
ssh NAME@HOST -p PORT -Y

# Port forwarding
#   This will forward FORWARD_HOST:FORWARD_PORT to localhost:LOCAL_PORT
#   via ssh NAME@HOST -p PORT
#   ( if you want to bind HOST:PORT with localhost:LOCAL_PORT,
#       just set FORWARD_HOST to 0.0.0.0
#       instead of setting FORWARD_HOST equal with HOST )
#   -L [bind_address:]port:host:hostport
#   -L [bind_address:]port:remote_socket
#   -L local_socket:host:hostport
#   -L local_socket:remote_socket
#   -N Do not execute a remote command (specific for port forwarding). Use this will not open a remote shell for you.
#   -f Go background
# Example: ssh -L 3000:mysql.server.com:3306 root@aliyun.com
#   mysql.server.com can only accessed by the machine whose hostname is aliyun.com
#   Notice: mysql.server.com is not deployed in the aliyun.com
#   This will forward mysql.server.com:3306 => localhost:3000
#   aliyun.com just like a bridge in this scenario
# Example: ssh -L 3000:0.0.0.0:3306 root@aliyun.com
#   This wiil forward aliyun.com:3306 => localhost:3000
# -f is optional
ssh -N -L -f LOCAL_PORT:FORWARD_HOST:FORWARD_PORT USERNAME@HOST -p PORT

# Authorized with keys
#   Clinet side: Add your public key to server
cat ~/.ssh/id_rsa.pub | ssh -p PORT NAME@HOST 'cat >> .ssh/authorized_keys'
#   Client side: Change the file mode on server ( important! )
cat ~/.ssh/id_rsa.pub | ssh -p PORT NAME@HOST 'mkdir .ssh; cat >> .ssh/authorized_keys'
```

## Grammar

### Associative array

[Bash associative array examples](http://www.artificialworlds.net/blog/2012/10/17/bash-associative-array-examples/)

### Read file

``` bash
#!/bin/bash
# Read file line by line
input="/path/to/txt/file"
while IFS= read -r var
do
  echo "$var"
done < "$input"
# Read file line by line with IFS (internal field separator)
while IFS=, read -r v1 v2 v3
do
    echo "$v1: $v2, $v3"
done < "$input"
```

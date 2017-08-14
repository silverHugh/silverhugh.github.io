---
title: Memo - Laravel
categories: [memo, boat]
date: 2017-06-28 17:29:07 +0800
tags: Laravel
redirect_from: /memo/laravel/
modified: 2017-08-12 15:32:39 +0800
---

This is one of my memos about Laravel framework.

**Memos** are used for recording the problems I encountered during programming and its soulutions. I also write down something that is hard to remember for myself.

<!--shoreline-->

## Installation

### Install Composer

[Download Composer](https://getcomposer.org/download/)

``` shell
# Notice: The install code wiil change when composer update
# Copy the code from the link above
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '669656bab3166a7aff8a7506b8cb2d1c292f042046c5a994c43155c0be6190fa0355160742ab2e1c88d40d5be660b410') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
# You shuold manually move composer.phar to /usr/local/bin/
mv composer.phar /usr/local/bin/composer

# Or replace the installtion code above:
php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Add PATH
export PATH="~/.composer/vendor/bin:$PATH"
```

### Install Larave

[Installation](https://docs.golaravel.com/docs/5.4/installation/)

``` sh
composer global require "laravel/installer"
```

### Install Valet (Mac)

[Valet](https://docs.golaravel.com/docs/5.4/valet/)

``` sh
brew install homebrew/php/php71
composer global require laravel/valet
```

### Setting Porject

``` sh
composer update
cp .env.example .env
php artisan key:generate
```

## Syntax

## Blade


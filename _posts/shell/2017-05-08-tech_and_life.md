---
title: Technology and Life
categories: shell
date: 2017-05-08 19:52:44 +0800
---

This is a slide about technology and life shows how technology was developed and influence our daily life.

<!--shoreline-->
---

Download [Technology and Life.pdf](/assets/pdf/tech_life/technology_and_life.pdf).

<ul>
    {% for i in (1..37) %}
        {% if i < 10 %}
            {% assign pic_name = '幻灯片0' | append: i | append: '.jpg' %}
        {% else %}
            {% assign pic_name = '幻灯片' | append: i | append: '.jpg' %}
        {% endif %}
        <figure style="width: 540px; border: 1px solid #ccc;" class="align-center">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/pdf/tech_life/pic/{{ pic_name }}" alt="" />
        </figure> 
    {% endfor %}
</ul>
---
title: Shaoyin Kidney Channel of Foot
categories: shell
date: 2017-04-20 22:50:35 +0800
---

This is a slide about Shaoyin Kidney Channel of Foot（足少阴肾经）. Shaoyin Kidney Channel of Foot is one of Twelve standard meridians.

Just for fun, I select some paragraphs from Jin Yong's wuxia novels which have something to do with meridian.

<!--shoreline-->
---

Download [Shaoyin Kidney Channel of Foot.pdf](/assets/pdf/kidney-channel/kidney-channel.pdf).

<ul>
	{% for i in (1..57) %}
		{% if i < 10 %}
			{% assign pic_name = '幻灯片0' | append: i | append: '.jpg' %}
		{% else %}
			{% assign pic_name = '幻灯片' | append: i | append: '.jpg' %}
		{% endif %}
		<figure style="width: 540px; border: 1px solid #ccc;" class="align-center">
	  		<img src="{{ site.url }}{{ site.baseurl }}/assets/pdf/kidney-channel/pic/{{ pic_name }}" alt="" />
		</figure> 
	{% endfor %}
</ul>
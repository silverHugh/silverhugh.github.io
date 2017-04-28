---
title: Tower Map
date: 2017-04-28 09:32:18 +0800
permalink: /project/tower-map/
layout: pure
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/3.5.4/echarts.min.js"></script>
<script src="china.js"></script>

<div id="map" style="width: 100%;height:1000px;padding: 1em;"></div>
<script type="text/javascript">
var myChart = echarts.init(document.getElementById('map'));

option = {
    title : {
        text: '杨晓利老师的三千古塔',
        subtext: 'data from 杨晓利老师的博客',
        sublink: 'http://blog.sina.com.cn/yangxiaoli4949',
        left: 'center'
    },
    series: [{
        type: 'map',
        map: 'china'
    }]
};

myChart.setOption(option);
</script>
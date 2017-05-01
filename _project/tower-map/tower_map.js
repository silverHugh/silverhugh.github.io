window.onload = function(){
    var e_map = echarts.init($('#map')[0]);

    var map_color = {
        primary: '#61776F',
        light: '#7F8F89',
        border: '#cccccc',
        text: '#ffffff'
    }

    var convertData = function (data) {
        var res = [];
        for (var key in data) {
            res.push({
                name: key,
                value: data[key]
            });
        }
        return res;
    };

    option = {
        title : {
            text: '杨晓利老师拍摄的中国古塔',
            subtext: 'data from 杨晓利老师的博客',
            sublink: 'http://blog.sina.com.cn/yangxiaoli4949',
            left: 'center',
            top: '3%'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.value[3];
            }
        },
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series: [{
            name: 'tower',
            coordinateSystem: 'bmap',
            type: 'scatter',
            data: [],
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: 'red',
                    shadowBlur: 2,
                    shadowColor: '#ccc',
                    opacity: 0.5
                }
            },
            zlevel: 1
        }]
    };
    e_map.setOption(option);

    /* Make the map auto fit*/
    var resize_map = function(){
        var min_width = 800;
        var min_height = 600;
        var map = $('#map');

        /* Let height set first */
        var height = $(window).height()
                    - parseInt($('#map').css('border'))*2
                    - parseInt($('#map').css('margin'))*2
                    - parseInt($('#map').css('padding'))*2;
        map.height(Math.max(height, min_height));

        var width = $('body').width() 
                    - parseInt($('#map').css('border'))*2
                    - parseInt($('#map').css('margin'))*2
                    - parseInt($('#map').css('padding'))*2;
        map.width(Math.max(width, min_width));

        e_map.resize();
    };
    resize_map();

    window.onresize = function(){
        resize_map();
    };

    /* Load options */
    e_map.showLoading();
    /* Data format: { "name": [latitude, longitude, altitude, address,
     time, img, date, link] } */
    $.get('tower.json').done(function(data){
        e_map.hideLoading();
        e_map.setOption({
            series:[{
                name: 'tower',
                data: convertData(data)
            }]
        });
    });
};
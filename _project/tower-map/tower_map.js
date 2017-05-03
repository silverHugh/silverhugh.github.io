window.onload = function(){
    var t_map = echarts.init($('#map')[0]);

    var map_color = {
        primary: '#61776F',
        light: '#7a8288',
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

    var decimal2string = function (lat, lng){
        var res = '';
        res += geolib.decimal2sexagesimal(lat);
        res += lat > 0 ? ' E, ' : ' W, ';
        res += geolib.decimal2sexagesimal(lng);
        res += lng > 0 ? ' N' : ' S';
        return res;
    }

    /* Used in tooltip position */
    var t_pos = {
        left: 0,
        top: 0
    }

    var last_point = [0, 0];
    var counter = 0;

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
            formatter: function (tower) {
                var res = '';
                res += '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                    + ' font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + tower.name + '</div>';
                if (tower.value[4])
                    res += '年代：' + tower.value[4] + '<br />';
                else
                    res += '年代：不详' + '<br />';
                res += '经纬度：' + decimal2string(tower.value[0], tower.value[1]) + '<br />';
                if (tower.value[2])
                    res += '海拔：' + tower.value[2] + '米<br />';
                if (tower.value[3])
                    res += '地址：' + tower.value[3] + '<br />';
                if (tower.value[5])
                    res += '拍摄日期：' + tower.value[5];
                return res;
            },
            transitionDuration: 0,
            position: function (point, params, dom, rect, size) {
                var least_area = 20;
                var offset_x = 30;
                var offset_y = 30;
                if (Math.abs(point[0] - last_point[0]) < least_area 
                    && Math.abs(point[1] - last_point[1]) < least_area
                    && counter >= 2){
                    return t_pos;
                }
                if (Math.abs(point[0] - last_point[0]) >= least_area 
                    || Math.abs(point[1] - last_point[1]) >= least_area){
                    counter = 0;
                }
                counter += 1;
                if (counter == 1) {
                    t_pos.left = point[0] + offset_x;
                    t_pos.top = point[1] + offset_y;
                    last_point = [point[0], point[1]];
                }
                if (counter == 2){
                    var real_x = $(dom).position().left;
                    var real_y = $(dom).position().top;
                    t_pos.left += point[0] - real_x + offset_x;
                    t_pos.top += point[1] - real_y + offset_y;
                }
                console.log(counter, t_pos, point, real_x, real_y);
                return t_pos;
            }
        },
        visualMap: [
            {
                right: '2%',
                bottom: '2%',
                dimension: 2,
                min: 0,
                max: 1500,
                itemWidth: 20,
                itemHeight: 200,
                precise: 0.1,
                text: ['海拔高度（米）'],
                textStyle: {
                    color: '#777'
                },
                inRange: {
                    color: ['#AA3939', '#2F4073'],
                    colorSaturation: [0.5, 0.7]
                },
                controller:{              
                    inRange: {
                        colorAlpha: 0.3
                    }
                },
            }
        ],
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#D3D4D6'
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
            symbol: 'path://M495.213,486.82H377.705v-75.541c0-0.495-0.201-0.915-0.277-1.385c-0.059-0.311,0.042-0.621-0.05-0.923l-14.168-49.605 c17.945-4.759,31.282-20.992,31.282-40.414c0-4.633-3.76-8.393-8.393-8.393c-4.633,0-8.393,3.76-8.393,8.393 c0,13.883-11.298,25.18-25.18,25.18h-25.18v-61.004c12.254-2.51,21.336-7.126,27.119-13.807c2.963-3.424,4.574-6.866,5.473-9.871 c19.599-3.525,34.556-20.614,34.556-41.22c0-4.633-3.76-8.393-8.393-8.393c-4.633,0-8.393,3.76-8.393,8.393 c0,13.883-11.298,25.18-25.18,25.18c-9.099,0-17.442-0.478-25.18-1.251V190.8c12.254-2.51,21.336-7.126,27.119-13.807 c2.963-3.424,4.574-6.866,5.473-9.871c19.599-3.525,34.556-20.614,34.556-41.22c0-4.633-3.76-8.393-8.393-8.393 c-4.633,0-8.393,3.76-8.393,8.393c0,13.883-11.298,25.18-25.18,25.18c-9.099,0-17.442-0.478-25.18-1.251v-51.36 c12.254-2.51,21.336-7.126,27.119-13.807c2.963-3.424,4.574-6.866,5.473-9.871c19.599-3.525,34.556-20.614,34.556-41.22 c0-4.633-3.76-8.393-8.393-8.393c-4.633,0-8.393,3.76-8.393,8.393c0,13.883-11.298,25.18-25.18,25.18 c-53.575,0-83.221-15.494-92.328-21.202V8.393c0-4.633-3.76-8.393-8.393-8.393c-4.633,0-8.393,3.76-8.393,8.393v29.15 c-9.157,5.741-38.794,21.21-92.328,21.21c-13.883,0-25.18-11.298-25.18-25.18c0-4.633-3.76-8.393-8.393-8.393 s-8.393,3.76-8.393,8.393c0,20.606,14.957,37.695,34.556,41.22c0.898,3.005,2.51,6.446,5.472,9.871 c5.783,6.681,14.865,11.298,27.119,13.807v51.36c-7.739,0.772-16.082,1.251-25.18,1.251c-13.883,0-25.18-11.298-25.18-25.18 c0-4.633-3.76-8.393-8.393-8.393s-8.393,3.76-8.393,8.393c0,20.606,14.957,37.695,34.556,41.22 c0.898,3.005,2.51,6.446,5.472,9.871c5.783,6.681,14.865,11.298,27.119,13.807v51.359c-7.739,0.772-16.082,1.251-25.18,1.251 c-13.883,0-25.18-11.298-25.18-25.18c0-4.633-3.76-8.393-8.393-8.393s-8.393,3.76-8.393,8.393 c0,20.606,14.957,37.695,34.556,41.22c0.898,3.005,2.51,6.446,5.472,9.871c5.783,6.681,14.865,11.298,27.119,13.807v61.004h-25.18 c-13.883,0-25.18-11.298-25.18-25.18c0-4.633-3.76-8.393-8.393-8.393s-8.393,3.76-8.393,8.393 c0,19.422,13.337,35.655,31.282,40.414l-14.168,49.605c-0.092,0.302,0.008,0.613-0.05,0.923c-0.076,0.47-0.277,0.89-0.277,1.385 v75.541H8.393C3.76,486.82,0,490.58,0,495.213s3.76,8.393,8.393,8.393h125.902h50.361h134.295h50.361h125.902 c4.633,0,8.393-3.76,8.393-8.393S499.846,486.82,495.213,486.82z M163.462,75.281c48.858-2.107,77.312-16.3,88.341-23.157 c11.029,6.857,39.483,21.051,88.341,23.157c-4.449,3.785-14.697,8.654-37.98,8.654H201.443 C177.983,83.934,167.785,78.949,163.462,75.281z M163.462,167.609c48.858-2.107,77.312-16.3,88.341-23.158 c11.029,6.857,39.483,21.051,88.341,23.158c-4.449,3.785-14.697,8.654-37.98,8.654H201.443 C177.983,176.262,167.785,171.277,163.462,167.609z M218.229,461.639c-4.633,0-8.393-3.76-8.393-8.393s3.76-8.393,8.393-8.393 s8.393,3.76,8.393,8.393S222.863,461.639,218.229,461.639z M285.377,461.639h-33.574c-4.633,0-8.393-3.76-8.393-8.393 s3.76-8.393,8.393-8.393h33.574c4.633,0,8.393,3.76,8.393,8.393S290.01,461.639,285.377,461.639z M199.118,402.885l23.98-41.967 h57.411l23.98,41.967H199.118z M302.164,268.59H201.443c-23.46,0-33.658-4.986-37.98-8.654 c48.858-2.107,77.312-16.3,88.341-23.158c11.029,6.857,39.483,21.051,88.341,23.158 C335.696,263.722,325.447,268.59,302.164,268.59z',
            data: [],
            showEffectOn: 'render',
            symbolSize: 25,
            symbolOffset: [0, '50%'],
            itemStyle: {
                normal: {
                    opacity: 0.3
                },
                emphasis: {
                    opacity: 0.9
                }
            },
            zlevel: 1
        }]
    };
    t_map.setOption(option);

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

        t_map.resize();
    };
    // resize_map();

    // window.onresize = function(){
    //     resize_map();
    // };

    /* Load options */
    t_map.showLoading();
    /* Data format: { "name": [latitude, longitude, altitude, address,
     time, img, date, link] } */
    $.get('tower.json').done(function(data){
        t_map.hideLoading();
        t_map.setOption({
            series:[{
                name: 'tower',
                data: convertData(data)
            }]
        });
    });

    /* Bmap */
    var bmap = t_map.getModel().getComponent('bmap').getBMap();
    /* 添加城市控件 */
    var size = new BMap.Size(10, 20);
    bmap.addControl(new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size
    }));
    /* 添加平移缩放控件 */
    var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    bmap.addControl(top_right_navigation);
    /* 添加比例尺 */
    var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT
    });
    bmap.addControl(top_left_control);
    /* 拖拽事件 */
    // bmap.addEventListener('dragstart', function(obj){
    //     console.log(obj.pixel, obj.point);
    // });
    // bmap.addEventListener('dragend', function(obj){
    //     console.log(obj.pixel, obj.point);
    // });
};
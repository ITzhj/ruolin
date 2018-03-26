$(document).ready(function(){
    var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(113.307888,23.224759);  // 创建点坐标
     function onDblClick(){
           let map,moveLsitener;
            moveLsitener=LTEvent.addListener(map,"moveend",onMoveEnd);
            //因为系统默认双击的时候会将地图定位到中心，因此，只需要定义地图在定位到中心完成之后放大地图即可
        }
    var marker = new BMap.Marker(new BMap.Point(113.307888,23.224759)); // 创建点
    map.addOverlay(marker);// 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画


    // 点击切换
    var hn = document.getElementById("hn");
    var xn = document.getElementById("xn");
    var hz = document.getElementById("hz");

    // 点击华南

    hn.onclick = function(){
        hn.style.background = "#b7d4d0";
        xn.style.background = "#ddd";
        hz.style.background = "#ddd";

        var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(113.307888,23.224759);  // 创建点坐标

         function onDblClick(){
           let map,moveLsitener;
            moveLsitener=LTEvent.addListener(map,"moveend",onMoveEnd);
            //因为系统默认双击的时候会将地图定位到中心，因此，只需要定义地图在定位到中心完成之后放大地图即可
        }
    var marker = new BMap.Marker(new BMap.Point(113.307888,23.224759)); // 创建点
    map.addOverlay(marker);// 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }

    // 点击西南
    xn.onclick = function(){
        xn.style.background = "#b7d4d0";
        hn.style.background = "#ddd";
        hz.style.background = "#ddd";

        var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(104.092128,30.59722);  // 创建点坐标
        function onDblClick(){
           let map,moveLsitener;
            moveLsitener=LTEvent.addListener(map,"moveend",onMoveEnd);
            //因为系统默认双击的时候会将地图定位到中心，因此，只需要定义地图在定位到中心完成之后放大地图即可
        }
    var marker = new BMap.Marker(new BMap.Point(104.092128,30.59722)); // 创建点
    map.addOverlay(marker);// 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }

    // 点击华中
    hz.onclick = function(){
        hz.style.background = "#b7d4d0";
        hn.style.background = "#ddd";
        xn.style.background = "#ddd";

        var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(114.283584,30.635745);  // 创建点坐标
        function onDblClick(){
           let map,moveLsitener;
            moveLsitener=LTEvent.addListener(map,"moveend",onMoveEnd);
            //因为系统默认双击的时候会将地图定位到中心，因此，只需要定义地图在定位到中心完成之后放大地图即可
        }
    var marker = new BMap.Marker(new BMap.Point(114.283584,30.635745)); // 创建点
    map.addOverlay(marker);// 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }


})
/**
 * Created by Vincent on 14/01/2015.
 */
// GOOGLE MAPS


function initialize() {

    var i = 0;

    var json = [{
        "title": "Moderate earthquake - Iran-iraq Border Region on January 14, 2015",
        "magnitude": "4.4",
        "location": "Iran-Iraq Border Region",
        "depth": "118",
        "latitude": "33.42",
        "longitude": "46.95",
        "date_time": "2015-01-14T09:48:18+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-iran-iraq-border-region-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Islands on January 14, 2015",
        "magnitude": "4.9",
        "location": "Tonga Islands",
        "depth": "10",
        "latitude": "-15.34",
        "longitude": "-173.31",
        "date_time": "2015-01-14T03:39:46+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-islands-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Islands Region on January 14, 2015",
        "magnitude": "5",
        "location": "Tonga Islands Region",
        "depth": "10",
        "latitude": "-22",
        "longitude": "-175.14",
        "date_time": "2015-01-14T05:29:21+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-islands-region-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Eastern Turkey on January 14, 2015",
        "magnitude": "3",
        "location": "EASTERN TURKEY",
        "depth": "15",
        "latitude": "39.92",
        "longitude": "42.39",
        "date_time": "2015-01-14T08:41:26+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-eastern-turkey-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Ruatoria on January 14, 2015",
        "magnitude": "3.3",
        "location": "Ruatoria",
        "depth": "51",
        "latitude": "-37.9323",
        "longitude": "179.752",
        "date_time": "2015-01-14T08:40:46+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-ruatoria-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Little Sitkin Island, Alaska on January 14, 2015",
        "magnitude": "3.4",
        "location": " Little Sitkin Island, Alaska",
        "depth": "87.5",
        "latitude": "51.6185",
        "longitude": "178.634",
        "date_time": "2015-01-14T05:04:24+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-little-sitkin-island-alaska-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Region on January 14, 2015",
        "magnitude": "4.6",
        "location": "TONGA REGION",
        "depth": "120",
        "latitude": "-22.13",
        "longitude": "-175.89",
        "date_time": "2015-01-14T05:29:39+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-region-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake -  Vaini, Tonga on January 14, 2015",
        "magnitude": "4.6",
        "location": " Vaini, Tonga",
        "depth": "120.59",
        "latitude": "-22.1274",
        "longitude": "-175.89",
        "date_time": "2015-01-14T05:29:39+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-vaini-tonga-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Crete, Greece on January 14, 2015",
        "magnitude": "3.3",
        "location": "CRETE, GREECE",
        "depth": "15",
        "latitude": "34.77",
        "longitude": "23.94",
        "date_time": "2015-01-14T00:27:12+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-crete-greece-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Sichuan, China on January 14, 2015",
        "magnitude": "5.2",
        "location": "Sichuan, China",
        "depth": "10",
        "latitude": "29.31",
        "longitude": "103.1",
        "date_time": "2015-01-14T05:21:40+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-sichuan-china-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Southern Xinjiang, China on January 14, 2015",
        "magnitude": "4.5",
        "location": "SOUTHERN XINJIANG, CHINA",
        "depth": "2",
        "latitude": "39.33",
        "longitude": "75.16",
        "date_time": "2015-01-14T04:20:43+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-southern-xinjiang-china-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Cherokee, Oklahoma on January 14, 2015",
        "magnitude": "3",
        "location": " Cherokee, Oklahoma",
        "depth": "5",
        "latitude": "36.6916",
        "longitude": "-98.2567",
        "date_time": "2015-01-14T03:45:52+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-cherokee-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Cambridge on January 14, 2015",
        "magnitude": "3.2",
        "location": "Cambridge",
        "depth": "338",
        "latitude": "-37.8798",
        "longitude": "175.851",
        "date_time": "2015-01-14T04:01:23+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-cambridge-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Talkeetna, Alaska on January 14, 2015",
        "magnitude": "3.2",
        "location": " Talkeetna, Alaska",
        "depth": "119.4",
        "latitude": "63.0419",
        "longitude": "-150.96",
        "date_time": "2015-01-14T03:36:23+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-talkeetna-alaska-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake -  Hihifo, Tonga on January 14, 2015",
        "magnitude": "5",
        "location": " Hihifo, Tonga",
        "depth": "10",
        "latitude": "-15.2845",
        "longitude": "-173.264",
        "date_time": "2015-01-14T03:39:47+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-hihifo-tonga-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Romania on January 14, 2015",
        "magnitude": "4.1",
        "location": "ROMANIA",
        "depth": "145",
        "latitude": "45.6",
        "longitude": "26.31",
        "date_time": "2015-01-14T03:10:52+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-romania-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Tarapaca, Chile on January 14, 2015",
        "magnitude": "3.4",
        "location": "TARAPACA, CHILE",
        "depth": "117",
        "latitude": "-21.1",
        "longitude": "-68.82",
        "date_time": "2015-01-14T02:44:22+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-tarapaca-chile-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Offshore Valparaiso, Chile on January 14, 2015",
        "magnitude": "3",
        "location": "OFFSHORE VALPARAISO, CHILE",
        "depth": "39",
        "latitude": "-32.71",
        "longitude": "-71.48",
        "date_time": "2015-01-14T02:19:05+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-offshore-valparaiso-chile-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Old Iliamna, Alaska on January 14, 2015",
        "magnitude": "3.1",
        "location": " Old Iliamna, Alaska",
        "depth": "188.2",
        "latitude": "59.8522",
        "longitude": "-153.674",
        "date_time": "2015-01-14T01:23:40+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-old-iliamna-alaska-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Sicily, Italy on January 14, 2015",
        "magnitude": "3",
        "location": "SICILY, ITALY",
        "depth": "194",
        "latitude": "38.99",
        "longitude": "15.7",
        "date_time": "2015-01-14T01:27:09+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-sicily-italy-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Ryukyu Islands, Japan on January 14, 2015",
        "magnitude": "5",
        "location": "RYUKYU ISLANDS, JAPAN",
        "depth": "10",
        "latitude": "26.38",
        "longitude": "128.54",
        "date_time": "2015-01-14T01:15:37+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-ryukyu-islands-japan-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Bonin Islands, Japan Region on January 13, 2015",
        "magnitude": "4.7",
        "location": "BONIN ISLANDS, JAPAN REGION",
        "depth": "10",
        "latitude": "27.29",
        "longitude": "143.45",
        "date_time": "2015-01-13T21:20:25+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-bonin-islands-japan-region-on-january-13-2015-2\/"
    }, {
        "title": "Moderate earthquake -  Chichi-shima, Japan on January 13, 2015",
        "magnitude": "4.7",
        "location": " Chichi-shima, Japan",
        "depth": "25.99",
        "latitude": "27.2724",
        "longitude": "143.433",
        "date_time": "2015-01-13T21:20:28+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-chichi-shima-japan-on-january-13-2015-2\/"
    }, {
        "title": "Moderate earthquake -  San Carlos, Argentina on January 13, 2015",
        "magnitude": "4.5",
        "location": " San Carlos, Argentina",
        "depth": "170.71",
        "latitude": "-31.083",
        "longitude": "-65.5081",
        "date_time": "2015-01-13T21:17:06+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-san-carlos-argentina-on-january-13-2015\/"
    }, {
        "title": "Moderate earthquake -  Naze, Japan on January 14, 2015",
        "magnitude": "4.7",
        "location": " Naze, Japan",
        "depth": "49.18",
        "latitude": "28.1713",
        "longitude": "128.33",
        "date_time": "2015-01-14T00:40:40+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-naze-japan-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Medford, Oklahoma on January 14, 2015",
        "magnitude": "3.1",
        "location": " Medford, Oklahoma",
        "depth": "3.55",
        "latitude": "36.7413",
        "longitude": "-97.5437",
        "date_time": "2015-01-14T00:46:28+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-medford-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Guthrie, Oklahoma on January 14, 2015",
        "magnitude": "3",
        "location": " Guthrie, Oklahoma",
        "depth": "6.72",
        "latitude": "35.8242",
        "longitude": "-97.4225",
        "date_time": "2015-01-14T00:06:43+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-guthrie-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Offshore El Salvador on January 13, 2015",
        "magnitude": "4.3",
        "location": "OFFSHORE EL SALVADOR",
        "depth": "35",
        "latitude": "13.12",
        "longitude": "-90.33",
        "date_time": "2015-01-13T23:07:36+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-offshore-el-salvador-on-january-13-2015\/"
    }, {
        "title": "Moderate earthquake -  Acajutla, El Salvador on January 13, 2015",
        "magnitude": "4.3",
        "location": " Acajutla, El Salvador",
        "depth": "35",
        "latitude": "13.1183",
        "longitude": "-90.3318",
        "date_time": "2015-01-13T23:07:37+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-acajutla-el-salvador-on-january-13-2015\/"
    }, {
        "title": "Minor earthquake - Eastern Turkey on January 13, 2015",
        "magnitude": "3",
        "location": "EASTERN TURKEY",
        "depth": "2",
        "latitude": "41.32",
        "longitude": "43.12",
        "date_time": "2015-01-13T23:19:09+00:00",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-eastern-turkey-on-january-13-2015\/"
    }];

    //option de la maps (initialisation sur nice, taille zoom 8
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(43.7070362, 7.2711944)
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    //mise en place des marqueurs
    for (length = json.length; i < length; i++) {
        var data = json[i];
        var latLng = new google.maps.LatLng(data.latitude, data.longitude);

        var contentDonne = '<div style="color: #000000; width:700px;height:200px">'+
            '<h1 id="firstHeading" class="firstHeading">'+data.title+'</h1>'+
            '<div id="bodyContent">'+'<br>'+
            '<p><b>'+data.title+'</br>Localisation : '+data.location +'<p>Magnitude : '+data.magnitude+'</p>'+data.date_time+''+
            '</div>'+
            '</div>';


        var intensiter = data.magnitude;


        if(intensiter < 1 && intensiter < 3 ){
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "yellow",
                    scale: 7},
                title: data.title
            });
        }
        else if(intensiter > 3 && intensiter < 4){
            var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: {
                //iconBase + 'shaded_dot.png'
                fillOpacity: 0.5,
                fillColor: 'ff0000',
                strokeOpacity: 1.0,
                strokeWeight: 3.0,
                path: google.maps.SymbolPath.CIRCLE,
                strokeColor: "orange",
                scale: 12},
            title: data.title
        });}

        else if(intensiter > 4 && intensiter <5 ){
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "#DF7401",
                    scale: 16},
                title: data.title
            });
        }
        else{
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "red",
                    scale: 20},
                title: data.title
            });
        }

        addInfoWindowToMarker(map, marker, contentDonne);
    }
}

function visibleMarket(id){
    if (id = 0){
        return 0;
    }
    if(id=1){
        return 1;
    }
    if(id=2){
        return 2;
    }
    if(id=3){
        return 3;
    }
    if(id=4){
        return 4;
    }
}

function addInfoWindowToMarker(map, marker, content_bulle) {
    var infoWindow = new google.maps.InfoWindow({
        content: content_bulle
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,this)
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

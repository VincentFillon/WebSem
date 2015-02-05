/**
 * Created by melanie on 14/01/2015.
 */
// GOOGLE MAPS

function initialize(value) {

    var val = value;
    var i = 0;

    var json = [{
        "title": "Moderate earthquake - Iran-iraq Border Region on January 14, 2015",
        "magnitude": "4.4",
        "location": "Iran-Iraq Border Region",
        "depth": "118",
        "latitude": "33.42",
        "longitude": "46.95",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-iran-iraq-border-region-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Islands on January 14, 2015",
        "magnitude": "4.9",
        "location": "Tonga Islands",
        "depth": "10",
        "latitude": "-15.34",
        "longitude": "-173.31",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-islands-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Islands Region on January 14, 2015",
        "magnitude": "5",
        "location": "Tonga Islands Region",
        "depth": "10",
        "latitude": "-22",
        "longitude": "-175.14",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-islands-region-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Eastern Turkey on January 14, 2015",
        "magnitude": "3",
        "location": "EASTERN TURKEY",
        "depth": "15",
        "latitude": "39.92",
        "longitude": "42.39",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-eastern-turkey-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Ruatoria on January 14, 2015",
        "magnitude": "3.3",
        "location": "Ruatoria",
        "depth": "51",
        "latitude": "-37.9323",
        "longitude": "179.752",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-ruatoria-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Little Sitkin Island, Alaska on January 14, 2015",
        "magnitude": "3.4",
        "location": " Little Sitkin Island, Alaska",
        "depth": "87.5",
        "latitude": "51.6185",
        "longitude": "178.634",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-little-sitkin-island-alaska-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Tonga Region on January 14, 2015",
        "magnitude": "4.6",
        "location": "TONGA REGION",
        "depth": "120",
        "latitude": "-22.13",
        "longitude": "-175.89",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-tonga-region-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake -  Vaini, Tonga on January 14, 2015",
        "magnitude": "4.6",
        "location": " Vaini, Tonga",
        "depth": "120.59",
        "latitude": "-22.1274",
        "longitude": "-175.89",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-vaini-tonga-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Crete, Greece on January 14, 2015",
        "magnitude": "3.3",
        "location": "CRETE, GREECE",
        "depth": "15",
        "latitude": "34.77",
        "longitude": "23.94",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-crete-greece-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Sichuan, China on January 14, 2015",
        "magnitude": "5.2",
        "location": "Sichuan, China",
        "depth": "10",
        "latitude": "29.31",
        "longitude": "103.1",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-sichuan-china-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Southern Xinjiang, China on January 14, 2015",
        "magnitude": "4.5",
        "location": "SOUTHERN XINJIANG, CHINA",
        "depth": "2",
        "latitude": "39.33",
        "longitude": "75.16",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-southern-xinjiang-china-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Cherokee, Oklahoma on January 14, 2015",
        "magnitude": "3",
        "location": " Cherokee, Oklahoma",
        "depth": "5",
        "latitude": "36.6916",
        "longitude": "-98.2567",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-cherokee-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Cambridge on January 14, 2015",
        "magnitude": "3.2",
        "location": "Cambridge",
        "depth": "338",
        "latitude": "-37.8798",
        "longitude": "175.851",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-cambridge-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Talkeetna, Alaska on January 14, 2015",
        "magnitude": "3.2",
        "location": " Talkeetna, Alaska",
        "depth": "119.4",
        "latitude": "63.0419",
        "longitude": "-150.96",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-talkeetna-alaska-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake -  Hihifo, Tonga on January 14, 2015",
        "magnitude": "5",
        "location": " Hihifo, Tonga",
        "depth": "10",
        "latitude": "-15.2845",
        "longitude": "-173.264",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-hihifo-tonga-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Romania on January 14, 2015",
        "magnitude": "4.1",
        "location": "ROMANIA",
        "depth": "145",
        "latitude": "45.6",
        "longitude": "26.31",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-romania-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Tarapaca, Chile on January 14, 2015",
        "magnitude": "3.4",
        "location": "TARAPACA, CHILE",
        "depth": "117",
        "latitude": "-21.1",
        "longitude": "-68.82",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-tarapaca-chile-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Offshore Valparaiso, Chile on January 14, 2015",
        "magnitude": "3",
        "location": "OFFSHORE VALPARAISO, CHILE",
        "depth": "39",
        "latitude": "-32.71",
        "longitude": "-71.48",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-offshore-valparaiso-chile-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Old Iliamna, Alaska on January 14, 2015",
        "magnitude": "3.1",
        "location": " Old Iliamna, Alaska",
        "depth": "188.2",
        "latitude": "59.8522",
        "longitude": "-153.674",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-old-iliamna-alaska-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake - Sicily, Italy on January 14, 2015",
        "magnitude": "3",
        "location": "SICILY, ITALY",
        "depth": "194",
        "latitude": "38.99",
        "longitude": "15.7",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-sicily-italy-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Ryukyu Islands, Japan on January 14, 2015",
        "magnitude": "5",
        "location": "RYUKYU ISLANDS, JAPAN",
        "depth": "10",
        "latitude": "26.38",
        "longitude": "128.54",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-ryukyu-islands-japan-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Bonin Islands, Japan Region on January 13, 2015",
        "magnitude": "4.7",
        "location": "BONIN ISLANDS, JAPAN REGION",
        "depth": "10",
        "latitude": "27.29",
        "longitude": "143.45",
        "date_time": "2015-01-13",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-bonin-islands-japan-region-on-january-13-2015-2\/"
    }, {
        "title": "Moderate earthquake -  Chichi-shima, Japan on January 13, 2015",
        "magnitude": "4.7",
        "location": " Chichi-shima, Japan",
        "depth": "25.99",
        "latitude": "27.2724",
        "longitude": "143.433",
        "date_time": "2015-01-13",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-chichi-shima-japan-on-january-13-2015-2\/"
    }, {
        "title": "Moderate earthquake -  San Carlos, Argentina on January 13, 2015",
        "magnitude": "4.5",
        "location": " San Carlos, Argentina",
        "depth": "170.71",
        "latitude": "-31.083",
        "longitude": "-65.5081",
        "date_time": "2015-01-13",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-san-carlos-argentina-on-january-13-2015\/"
    }, {
        "title": "Moderate earthquake -  Naze, Japan on January 14, 2015",
        "magnitude": "4.7",
        "location": " Naze, Japan",
        "depth": "49.18",
        "latitude": "28.1713",
        "longitude": "128.33",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/moderate-earthquake-naze-japan-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Medford, Oklahoma on January 14, 2015",
        "magnitude": "3.1",
        "location": " Medford, Oklahoma",
        "depth": "3.55",
        "latitude": "36.7413",
        "longitude": "-97.5437",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-medford-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Minor earthquake -  Guthrie, Oklahoma on January 14, 2015",
        "magnitude": "3",
        "location": " Guthrie, Oklahoma",
        "depth": "6.72",
        "latitude": "35.8242",
        "longitude": "-97.4225",
        "date_time": "2015-01-14",
        "link": "http:\/\/earthquake-report.com\/2015\/01\/14\/minor-earthquake-guthrie-oklahoma-on-january-14-2015\/"
    }, {
        "title": "Moderate earthquake - Offshore El Salvador on January 13, 2015",
        "magnitude": "4.3",
        "location": "OFFSHORE EL SALVADOR",
        "depth": "35",
        "latitude": "13.12",
        "longitude": "-90.33",
        "date_time": "2015-01-13",
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
        "date_time": "2015-01-13",
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

        var contentDonne = '<div style="color: #000000; width:700px;height:200px">' +
            '<h1 id="firstHeading" class="firstHeading" style="color: #000000;">' + data.title + '</h1>' +
            '<div id="bodyContent">' + '<br>' +
            '<p><b>' + data.title + '</br>Localisation : ' + data.location + '<p>Magnitude : ' + data.magnitude + '</p>' + data.date_time + '' +
            '</div>' +
            '</div>';


        // cas ou on veux séléctionner par la magnitude
        if (val == '1'){
            var one = true;
            var two = true;
            var trois = true;/*
            console.log(value);
            console.log(val);
            console.log(one);
            console.log(two);
            console.log(trois);*/
        }
        else if (val == '2'){
            var one = true;
            var two = false;
            var trois = false;
            /*console.log(value);
            console.log(val);
            console.log(one);
            console.log(two);
            console.log(trois);*/
        }
        else if (val == '3'){
            var one = false;
            var two = true;
            var trois = false;
            /*console.log(value);
            console.log(val);
            console.log(one);
            console.log(two);
            console.log(trois);*/

        }
        else if (val == '4'){
            var one = false;
            var two = false;
            var trois = true;
            /*console.log(value);
            console.log(val);
            console.log(one);
            console.log(two);
            console.log(trois);*/
        }

        var intensiter = data.magnitude;


        if (intensiter < 1 && intensiter < 3) {
            var marker = new google.maps.Marker({
                position: latLng,
                lat: data.latitude,
                longitude: data.longitude,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "yellow",
                    scale: 7
                },
                animation: google.maps.Animation.DROP,
                visible: one,
                title: data.title
            });
        }
        else if (intensiter > 3 && intensiter < 4) {
            var marker = new google.maps.Marker({
                position: latLng,
                lat: data.latitude,
                longitude: data.longitude,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "#4B8A08",
                    scale: 12
                },
                animation: google.maps.Animation.DROP,
                visible: one,
                title: data.title
            });
        }

        else if (intensiter > 4 && intensiter < 5) {
            var marker = new google.maps.Marker({
                position: latLng,
                lat: data.latitude,
                longitude: data.longitude,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "#61210B",
                    scale: 16
                },
                animation: google.maps.Animation.DROP,
                visible: two,
                title: data.title
            });
        }
        else {
            var marker = new google.maps.Marker({
                position: latLng,
                lat: data.latitude,
                longitude: data.longitude,
                map: map,
                icon: {
                    //iconBase + 'shaded_dot.png'
                    fillOpacity: 0.5,
                    fillColor: 'ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3.0,
                    path: google.maps.SymbolPath.CIRCLE,
                    strokeColor: "red",
                    scale: 20
                },
                animation: google.maps.Animation.DROP,
                visible: trois,
                title: data.title
            });
        }

        addInfoWindowToMarker(map, marker, contentDonne);

    }

}


function addInfoWindowToMarker(map, marker, content_bulle) {
    var infoWindow = new google.maps.InfoWindow({
        content: content_bulle
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,this);
        //clickedSearchButton();
        //searchYouTube(marker, this);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

/*
function completeInputObject() {
    //define booleans for types of filters
    inputObject.hasTimeWindow = false;
    inputObject.hasStartEndDate = false;
    inputObject.hasChannelList = false;
    inputObject.hasSearchLocation = false;
    inputObject.newsChannelsOnly = false;
    inputObject.removeNewsChannel = false;

    if (inputObject.inputSearchLocation && inputObject.inputLocationRadius) {
        inputObject.hasSearchLocation = true;
    }

    // reset validation errors flag
    validationErrors = false;

    //create array to store validation errors
    var validationErrorsArr = [];

    //need to enter start and end date for custom range
    if (inputObject.inputTimeWindow === 'custom_range' && (!inputObject.inputStartDate || !inputObject.inputEndDate)) {
        validationErrorsArr.push("You must enter a start date and end date for a custom range");
        validationErrors = true;
    }


    //define regular expressions for validating input values
    var dateRegEx = new RegExp("[0-1][0-9][-][0-3][0-9][-][2][0][0-1][0-9]");
    var numberRegEx = new RegExp("^[0-9]+")

    //Validate that location and location radius are set to conduct search
    if (inputObject.inputSearchLocation && !inputObject.inputLocationRadius) {
        validationErrorsArr.push("You must have both a location and radius for a location search");
        validationErrors = true;
    }

    if (inputObject.inputTimeWindow === 'custom_range' && inputObject.inputStartDate && !dateRegEx.test(inputObject.inputStartDate)) {
        //start date must be mm-dd-yyyy
        validationErrorsArr.push("Start Date must be format of mm-dd-yyyy");
        validationErrors = true;
    }

    if (inputObject.inputTimeWindow === 'custom_range' && inputObject.inputEndDate && !dateRegEx.test(inputObject.inputEndDate)) {
        //start date must be mm-dd-yyyy
        validationErrorsArr.push("End Date must be format of mm-dd-yyyy");
        validationErrors = true;
    }



    //if errors exist, display them on interface and terminate execution there
    if (validationErrors) {
        var div = $('<div>');
        div.addClass('showErrors');

        for (var i = 0; i < validationErrorsArr.length; i++) {
            div.append(validationErrorsArr[i] + "<br>");
        }


    } else {

        if (inputObject.inputTimeWindow && inputObject.inputTimeWindow !== 'custom_range') {
            inputObject.hasTimeWindow = true;
        }
        if (inputObject.inputTimeWindow && inputObject.inputTimeWindow === 'custom_range' && inputObject.inputStartDate && inputObject.inputEndDate) {
            inputObject.hasStartEndDate = true;
        }
        if (inputObject.inputChannelList && inputObject.inputChannelList) {
            inputObject.hasChannelList = true;
        }
    }

    inputObject.eventType = '';
    inputObject.videoLiscense = 'any';
    inputObject.videoEmbeddable = 'any';

    if (inputObject.inputCreativeCommonsOnly) {
        inputObject.videoLiscense = 'creativeCommon';
    }

    if (inputObject.inputEmbedsOnly) {
        inputObject.videoEmbeddable = 'true';
    }
}

function searchYouTube(marker) {
    //Reset errors section, final results array and results section
    finalResults = [];
    finalResults2 = [];

    //remove any old results
    $("div").remove(".tableOfVideoContentResults");

    //if this is a location search, route to getLocationSearchResults to conduct
    //geo-encoding and complete search
    if (inputObject.hasSearchLocation) {
        getLocationSearchResults(marker);
    } else {
        //if inputObject has multiple channels then do a search on each one
        //and aggregate the results
        if (inputObject.hasChannelList) {
            //split list by channel
            var channelArray = inputObject.inputChannelList.split(",")
            for (var i = 0; i < channelArray.length; i++) {
                inputObject.currentChannel = channelArray[i].trim();

                //for searches on just live videos only
                if (inputObject.inputLiveOnly) {
                    //console.log("Searching:  No Location, Specific Channel(s), Live Only")
                    getPublishBeforeAndAfterTime();
                    try {
                        var request = gapi.client.youtube.search.list({
                            q: inputObject.marker.title,
                            order: "date",
                            type: 'video',
                            part: 'snippet',
                            maxResults: '50',
                            eventType: 'live',
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            channelId: inputObject.currentChannel,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                        });
                    } catch (err) {
                        //cannot search via the YouTube API, update end-user with error message
                        showConnectivityError();
                    }
                } else {
                    //console.log("Searching:  No Location, Specific Channel(s), Live and VOD")
                    getPublishBeforeAndAfterTime();
                    try {
                        var request = gapi.client.youtube.search.list({
                            q: inputObject.marker.title,
                            order: "date",
                            type: 'video',
                            part: 'snippet',
                            maxResults: '50',
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            channelId: inputObject.currentChannel,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                        });
                    } catch (err) {
                        //cannot search via the YouTube API, update end-user with error message
                        showConnectivityError();
                    }
                }
                //Call processYouTubeRequest to process the request object
                processYouTubeRequest(request);
            }
        } else {
            //for searches on just live videos only
            if (inputObject.inputLiveOnly) {
                //console.log("Searching:  No Location, No Specific Channel, Live Only")
                getPublishBeforeAndAfterTime();
                try {
                    var request = gapi.client.youtube.search.list({
                        q: inputObject.marker.title,
                        order: "date",
                        type: 'video',
                        part: 'snippet',
                        maxResults: '50',
                        eventType: 'live',
                        videoLiscense: inputObject.videoLiscense,
                        videoEmbeddable: inputObject.videoEmbeddable,
                        publishedAfter: publishAfterTime,
                        publishedBefore: publishBeforeTime,
                        key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                    });
                } catch (err) {
                    //cannot search via the YouTube API, update end-user with error message
                    showConnectivityError();
                }
            } else {
                console.log("Searching:  No Location, No Specific Channel, Live and VOD")
                printInputObject();
                getPublishBeforeAndAfterTime();
                try {
                    var request = gapi.client.youtube.search.list({
                        q: inputObject.marker.title,
                        order: "date",
                        type: 'video',
                        part: 'snippet',
                        maxResults: '50',
                        videoLiscense: inputObject.videoLiscense,
                        videoEmbeddable: inputObject.videoEmbeddable,
                        publishedAfter: publishAfterTime,
                        publishedBefore: publishBeforeTime,
                        key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                    });
                } catch (err) {
                    //cannot search via the YouTube API, update end-user with error message
                    showConnectivityError();
                }
            }
            //Call processYouTubeRequest to process the request object
            processYouTubeRequest(request);
        }
    }
}

function getLocationSearchResults(marker) {
    geocoder.geocode({ 'address': inputObject.inputSearchLocation }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //store latitude and longitude from geo coder into the inputObject
            inputObject.marker.latitude = results[0].geometry.location.lat();
            inputObject.marker.longitude = results[0].geometry.location.lng();

            //If the end user submitted a channel list then make search calls for each channel in the list
            if (inputObject.hasChannelList) {
                //split list by channel
                var channelArray = inputObject.inputChannelList.split(",");

                for (var i = 0; i < channelArray.length; i++) {
                    inputObject.currentChannel = channelArray[i].trim();

                    if (inputObject.inputLiveOnly) {
                        //console.log("Searching:  Have Location, Specific Channel(s), Live Only")
                        getPublishBeforeAndAfterTime();
                        try {
                            var request = gapi.client.youtube.search.list({
                                q: inputObject.marker.title,
                                order: "date",
                                type: 'video',
                                part: 'snippet',
                                maxResults: '50',
                                eventType: 'live',
                                videoLiscense: inputObject.videoLiscense,
                                videoEmbeddable: inputObject.videoEmbeddable,
                                channelId: inputObject.currentChannel,
                                location: inputObject.marker.latitude + "," + inputObject.marker.longitude,
                                locationRadius: inputObject.inputLocationRadius,
                                publishedAfter: publishAfterTime,
                                publishedBefore: publishBeforeTime,
                                key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                            });
                        } catch (err) {
                            //cannot search via the YouTube API
                            showConnectivityError();
                        }
                    } else {
                        //console.log("Searching:  Have Location, Specific Channel(s), Live and VOD")
                        getPublishBeforeAndAfterTime()
                        try {
                            var request = gapi.client.youtube.search.list({
                                q: inputObject.marker.title,
                                order: "date",
                                type: 'video',
                                part: 'snippet',
                                maxResults: '50',
                                videoLiscense: inputObject.videoLiscense,
                                videoEmbeddable: inputObject.videoEmbeddable,
                                channelId: inputObject.currentChannel,
                                location: inputObject.marker.latitude + "," + inputObject.marker.longitude,
                                locationRadius: inputObject.inputLocationRadius,
                                publishedAfter: publishAfterTime,
                                publishedBefore: publishBeforeTime,
                                key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                            });
                        } catch (err) {
                            //cannot search via the YouTube API
                            showConnectivityError();
                        }
                    }
                    processYouTubeRequest(request);
                }
                //if the search is geo-based and only for a single channel
            } else {
                if (inputObject.inputLiveOnly) {
                    //console.log("Searching:  Have Location, No Specific Channel, Live Only")
                    printInputObject();
                    getPublishBeforeAndAfterTime();
                    try {
                        var request = gapi.client.youtube.search.list({
                            q: inputObject.marker.title,
                            order: "date",
                            type: "video",
                            part: "id,snippet",
                            maxResults: "50",
                            eventType: "live",
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            location: inputObject.marker.latitude + "," + inputObject.marker.longitude,
                            locationRadius: inputObject.inputLocationRadius,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                        });
                    } catch (err) {
                        //cannot search via the YouTube API
                        showConnectivityError();
                    }
                } else {
                    //console.log("Searching:  Have Location, No Specific Channel, Live and VOD")
                    getPublishBeforeAndAfterTime();
                    try {
                        var request = gapi.client.youtube.search.list({
                            q: inputObject.marker.title,
                            order: "date",
                            type: "video",
                            part: "id,snippet",
                            location: inputObject.marker.latitude + "," + inputObject.marker.longitude,
                            locationRadius: inputObject.inputLocationRadius,
                            maxResults: "50",
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: "AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo"
                        });
                    } catch (err) {
                        //cannot search via the YouTube API
                        showConnectivityError();
                    }
                }
                processYouTubeRequest(request);
            }
        } else {
            showConnectivityError();
        }
    });
}
function getPublishBeforeAndAfterTime() {
    //If the input object has a custom range, then format the MM-DD-YYYY date into a UTC format
    if (inputObject.inputTimeWindow && inputObject.inputTimeWindow === 'custom_range' && inputObject.inputStartDate.length !== 0 && inputObject.inputEndDate.length !== 0) {
        var startDate = inputObject.inputStartDate;
        var endDate = inputObject.inputEndDate;

        publishAfterTime = "" + startDate.substr(6, 4) + "-" + startDate.substr(0, 2) + "-" + startDate.substr(3, 2) + "T00:00:00Z";
        publishBeforeTime = "" + endDate.substr(6, 4) + "-" + endDate.substr(0, 2) + "-" + endDate.substr(3, 2) + "T00:00:00Z";
        //If time comes from drop down option, convert to UTC format
    } else {
        var nowTime_TimeStamp = convertDateToTimeDateStamp(new Date())
        var nowTimeMilliSecs = new Date().getTime();

        //if publishBeforeTime is blank or the user clicked the search button then
        //set publishBeforeTime to current time.  Otherwise we want to use the value
        //from the URL parameter
        if (!publishBeforeTime || queryFromClickSearchNotURL) {
            publishBeforeTime = nowTime_TimeStamp;
        }

        //define the before time in milliseconds by subtracting time window from the time right now
        var thresholdTime = 0;

        numberMilliSecondsInHour = 1000 * 60 * 60;
        if (inputObject.inputTimeWindow === 'hour') {
            thresholdTime = nowTimeMilliSecs - numberMilliSecondsInHour;
        } else if (inputObject.inputTimeWindow === '3hours') {
            thresholdTime = nowTimeMilliSecs - (3 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === '6hours') {
            thresholdTime = nowTimeMilliSecs - (6 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === '9hours') {
            thresholdTime = nowTimeMilliSecs - (9 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === '12hours') {
            thresholdTime = nowTimeMilliSecs - (12 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === '24hours') {
            thresholdTime = nowTimeMilliSecs - (24 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === 'week') {
            thresholdTime = nowTimeMilliSecs - (24 * 7 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === '30days') {
            thresholdTime = nowTimeMilliSecs - (24 * 30 * numberMilliSecondsInHour);
        } else if (inputObject.inputTimeWindow === 'year') {
            thresholdTime = nowTimeMilliSecs - (24 * 365.25 * numberMilliSecondsInHour);
        } else {
            thresholdTime = 0
        }

        //if threshold time is 0 then set before to epoch
        if (thresholdTime === 0) {
            publishAfterTime = '1970-01-01T00:00:00Z';
        } else {
            publishAfterTime = convertDateToTimeDateStamp(new Date(thresholdTime));
        }
    }
}*/


// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search(marker) {
    var q = $('#query').val(marker);
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });

    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
    });
}

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
            '<h1 id="firstHeading" class="firstHeading" style="color: #000000;">'+data.title+'</h1>'+
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

function addInfoWindowToMarker(map, marker, content_bulle) {
    var infoWindow = new google.maps.InfoWindow({
        content: content_bulle
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map,this);
        clickedSearchButton();
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


//Define a Global variables

//validationErrors flag is set if errors are found on the input object
var validationErrors = false;

//finalResults stores the search results from the API search
var finalResults = [];

//finalResults2 stores the final results
var finalResults2 = [];

//inputObject contains all the inputs from the User
var inputObject = {};

//geocoder is a geocoder object used for mapping functions
var geocoder;

//publishAfterTime and publishBeforeTime define the before and after times to submit for the search
var publishAfterTime = '';
var publishBeforeTime = '';

//queryFromClickSearchNotURL is a flag which indicates if the search originated from a clicked search button or from loading the parameters from the URL
var queryFromClickSearchNotURL = false;


var API_ACCESS_KEY = 'AIzaSyAfJL3M19Gdb4RTyDED_H3dfSmpCJhblNo';

var CAR_REGEX = /\d{4} (?:dodge|chevy|ford|toyota|bmw|mercedes|honda|chrysler|pontiac|hyundai|audi|jeep|scion|cadillac|volks|acura|lexus|suburu|nissan|mazda|suzuki|buick|gmc|chevrolet|lincoln|infiniti|mini|hummer|porsche|volvo|land|kia|saturn|mitsubishi)/i;


/** Initialize portions of page on page load and create object with all News channels in it
 */
$(document).ready(function() {
    hideSearchFilters();
    resetResultsSection();
    displayCustomRangeSection();

    $.getScript('https://apis.google.com/js/client.js?onload=handleClientLoad');
});

function handleClientLoad() {
    gapi.client.load('youtube', 'v3', function() {
        $.getScript('https://maps.googleapis.com/maps/api/js?sensor=false&callback=handleMapsLoad&key=' + API_ACCESS_KEY);
    });
}

function handleMapsLoad() {
    geocoder = new google.maps.Geocoder();

    $('#search-button').attr('disabled', false);
    loadParamsFromURL();
}

/**
 *  This function clears results from the UI, routes location searches to getLocationSearchResults(),
 *  generates a request object, from the inputObject for non-location searches and
 *  passes the request to processYouTubeRequest()
 */
function searchYouTube() {
    //Reset errors section, final results array and results section
    $(".showErrors").remove();
    resetResultsSection();
    finalResults = [];
    finalResults2 = [];

    //remove any old results
    $("div").remove(".tableOfVideoContentResults");

    //if this is a location search, route to getLocationSearchResults to conduct
    //geo-encoding and complete search
    if (inputObject.hasSearchLocation) {
        getLocationSearchResults();
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
                            q: inputObject.inputQuery,
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
                            key: API_ACCESS_KEY
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
                            q: inputObject.inputQuery,
                            order: "date",
                            type: 'video',
                            part: 'snippet',
                            maxResults: '50',
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            channelId: inputObject.currentChannel,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: API_ACCESS_KEY
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
                        q: inputObject.inputQuery,
                        order: "date",
                        type: 'video',
                        part: 'snippet',
                        maxResults: '50',
                        eventType: 'live',
                        videoLiscense: inputObject.videoLiscense,
                        videoEmbeddable: inputObject.videoEmbeddable,
                        publishedAfter: publishAfterTime,
                        publishedBefore: publishBeforeTime,
                        key: API_ACCESS_KEY
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
                        q: inputObject.inputQuery,
                        order: "date",
                        type: 'video',
                        part: 'snippet',
                        maxResults: '50',
                        videoLiscense: inputObject.videoLiscense,
                        videoEmbeddable: inputObject.videoEmbeddable,
                        publishedAfter: publishAfterTime,
                        publishedBefore: publishBeforeTime,
                        key: API_ACCESS_KEY
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

/**  This function loads parameters from a URL into the input object
 */
function loadParamsFromURL() {
    //retrieve URL from browser window
    var startURL = decodeURIComponent(window.location);

    //reset the input object to remove any old data
    cleanInputObject();

    //If the URL does not contain search parameters to parse skip to end of function
    if (startURL && startURL.indexOf('?q=') > 0) {
        //create an array of parameters parsed from URL
        var paramListCollection = startURL.slice(startURL.indexOf('?q=') + 1).split("&");

        //define the urlParams array
        var urlParams = {};
        for (var i = 0; i < paramListCollection.length; i++) {
            //parse the individual parameters and values into a temporary array
            var individualParamCollection = paramListCollection[i].split("=");

            //store the URL parameter/value pairs into the urlParams array
            urlParams[individualParamCollection[0]] = individualParamCollection[1];
        }

        //start loading inputObject from the URL parameters
        inputObject.inputQuery = urlParams['q'];
        inputObject.inputLat = urlParams['la'];
        inputObject.inputLong = urlParams['lo'];
        inputObject.inputLocationRadius = urlParams['lr'];
        inputObject.inputTimeWindow = urlParams['tw'];
        inputObject.inputStartDate = urlParams['sd'];
        inputObject.inputEndDate = urlParams['ed'];
        inputObject.inputChannelList = urlParams['cl'];
        inputObject.inputSearchLocation = urlParams['sl'];
        inputObject.inputNewsChannelFilter = urlParams['ncf'];
        inputObject.inputZoomLevel = urlParams['zl'];
        publishBeforeTime = urlParams['pbt'];

        inputObject.inputEmbedsOnly = urlParams['eo'];
        if (urlParams["eo"] === "true") {
            inputObject.inputEmbedsOnly = true;
        } else {
            inputObject.inputEmbedsOnly = false;
        }
        inputObject.inputLiveOnly = urlParams["loo"];
        if (urlParams["loo"] === "true") {
            inputObject.inputLiveOnly = true;
        } else {
            inputObject.inputLiveOnly = false;
        }
        inputObject.inputCreativeCommonsOnly = urlParams["cco"];
        if (urlParams["cco"] === "true") {
            inputObject.inputCreativeCommonsOnly = true;
        } else {
            inputObject.inputCreativeCommonsOnly = false;
        }

        //if this a blank query, do not conduct a search
        if (inputObject.inputQuery || inputObject.inputLat || inputObject.inputLong || inputObject.inputChannelList) {
            completeInputObject();

            //search YouTube, if no errors exist
            if (!validationErrors) {
                //indicate that the search was not generated from clicking "search"
                queryFromClickSearchNotURL = false;
                searchYouTube();
            }
        }
    }
}


/** This method handle search button clicks.   It pulls data from the web
 * form into the inputObject and then calls the search function.
 */
function clickedSearchButton() {
    queryFromClickSearchNotURL = true;

    //reset the input object to remove any old data
    cleanInputObject();

    //pull web form data into input object
    inputObject.inputQuery = $('#query').val();
    inputObject.inputLat = $('#lattitude').val();
    inputObject.inputLong = $('#longitude').val();
    inputObject.inputLocationRadius = $('#locRadius').val();
    inputObject.inputTimeWindow = $('#timeWindow').val();
    inputObject.inputStartDate = $('#startDate').val();
    inputObject.inputEndDate = $('#endDate').val();
    inputObject.inputChannelList = $('#channelList').val();
    inputObject.inputSearchLocation = $('#searchLocation').val();
    inputObject.inputEmbedsOnly = 'false';
    inputObject.inputLiveOnly = 'false';
    inputObject.inputCreativeCommonsOnly = 'false';
    inputObject.inputEmbedsOnly = $('#embedOnly').is(':checked');
    inputObject.inputLiveOnly = $('#liveOnly').is(':checked');
    inputObject.inputCreativeCommonsOnly = $('#creativeCommonsOnly').is(':checked');

    //complete input object
    completeInputObject();

    //search YouTube, if there are no validation errors
    if (!validationErrors) {
        searchYouTube();
    }
}


/**  This function defines a set of booleans in the inputObject based on other values in the same object.
 */
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

        $('#showErrorsContainer').empty();
        $('#showErrorsContainer').append(div);
        showErrorSection();

        //do not display search results and search result count if validation errors occur
        resetResultsSection();
        $('#searchResultCount').remove();
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

/**  This function generates a URL, with all the search parameters, which is then
 *  loaded into the omnibox of the browser.
 *  @returns url {string}
 */
function generateURLwithQueryParameters() {
    parameterString = '';

    //if a custom range was selected in the search include start and end dates in the URL
    if (inputObject.inputTimeWindow === "custom_range") {
        parameterString =
            "?q=" + inputObject.inputQuery + "&la=" + inputObject.inputLat +
            "&lo=" + inputObject.inputLong + "&lr=" + inputObject.inputLocationRadius +
            "&tw=" + inputObject.inputTimeWindow + "&sd=" + inputObject.inputStartDate +
            "&ed=" + inputObject.inputEndDate + "&cl=" + inputObject.inputChannelList +
            "&sl=" + inputObject.inputSearchLocation + "&eo=" + inputObject.inputEmbedsOnly +
            "&loo=" + inputObject.inputLiveOnly + "&cco=" + inputObject.inputCreativeCommonsOnly +
            "&zl=" + inputObject.inputZoomLevel + "&pbt=" + publishBeforeTime;
    } else {
        parameterString =
            "?q=" + inputObject.inputQuery + "&la=" + inputObject.inputLat +
            "&lo=" + inputObject.inputLong + "&lr=" + inputObject.inputLocationRadius +
            "&tw=" + inputObject.inputTimeWindow +
            "&cl=" + inputObject.inputChannelList +
            "&sl=" + inputObject.inputSearchLocation + "&eo=" + inputObject.inputEmbedsOnly +
            "&loo=" + inputObject.inputLiveOnly + "&cco=" + inputObject.inputCreativeCommonsOnly +
            "&zl=" + inputObject.inputZoomLevel + "&pbt=" + publishBeforeTime;
    }

    //Retrieve the domain from the existing URL, to construct the new URL
    var currentURL = String(window.location);

    var newURLArray = [];
    var newURL = '';

    if (currentURL) {
        //split current URL by "?" delimiter.  The first element will be the domain.
        newURLArray = currentURL.split('?');

        //if currentURL does not contain a '?', then it is already just the domain and newURLArray will be undefined
        if (!newURLArray) {
            //concatenate the domain and the parameter string
            newURL = currentURL + parameterString;
        } else {
            //concatenate the first element of newURLArray (which is the domain) and the parameter string
            newURL = newURLArray[0] + parameterString;
        }
    }

    return newURL;
}

/**  This function handles the display of the search result count
 */
function updateSearchResultCount(count) {
    var resultString;
    //if no results were found, provide some ideas on improving the query to the end-user
    if (count === 0) {
        resultString = "No results found.  Try expanding the location radius, time frame, or just leaving the location and radius fields blank and doing a keyword search.";
    } else {
        resultString = "Found " + count + " results.";
    }

    //clear the old search results count and add the updated one
    $('#searchResultCount').remove();
    $('#searchResultCountContainer').append('<div id="searchResultCount">' + resultString + '</div>');
}

/**  This function takes a request object, executes the request, and uses a callback function parse the response
 *  into a results array.
 *  @param request {object} - this is the request object returned from the YouTube search API
 */
function processYouTubeRequest(request) {
    request.execute(function(response) {
        var resultsArr = [];
        var videoIDString = '';

        //if the result object from the response is null, show error; if its empty, remove old results and display
        //message on how to broaden search to get more results.
        if ('error' in response || !response) {
            showConnectivityError();
        } else if (!response.result || !response.result.items) {
            updateSearchResultCount(0);
            resetResultsSection();
            $("div").remove(".tableOfVideoContentResults");
        } else {
            var entryArr = response.result.items;
            for (var i = 0; i < entryArr.length; i++) {
                var videoResult = new Object();
                videoResult.title = entryArr[i].snippet.title;

                //Pull the lattitude and longitude data per search result
                if ((inputObject.hasSearchLocation) && entryArr[i].georss$where) {
                    var latlong = entryArr[i].georss$where.gml$Point.gml$pos.$t;
                    var latlongArr = latlong.split(' ');
                    videoResult.lat = latlongArr[0].trim();
                    videoResult.long = latlongArr[1].trim();
                }

                videoResult.videoId = entryArr[i].id.videoId;
                videoIDString = videoIDString + videoResult.videoId + ",";

                videoResult.url = "https://www.youtube.com/watch?v=" + videoResult.videoId;
                videoResult.channelID = entryArr[i].snippet.channelId;
                videoResult.channel = entryArr[i].snippet.channelTitle;
                videoResult.liveBroadcastContent = entryArr[i].snippet.liveBroadcastContent;
                videoResult.thumbNailURL = entryArr[i].snippet.thumbnails.default.url;
                videoResult.description = entryArr[i].snippet.description;

                var year = entryArr[i].snippet.publishedAt.substr(0, 4);
                var monthNumeric = entryArr[i].snippet.publishedAt.substr(5, 2);
                var monthInt = 0;

                if (monthNumeric.indexOf("0") === 0) {
                    monthInt = monthNumeric.substr(1, 1);
                } else {
                    monthInt = monthNumeric;
                }
                var day = entryArr[i].snippet.publishedAt.substr(8, 2);
                var time = entryArr[i].snippet.publishedAt.substr(11, 8);


                videoResult.displayTimeStamp = monthString + " " + day + ", " + year + " - " + time + " UTC";
                videoResult.publishTimeStamp = entryArr[i].snippet.publishedAt;

                //add result to results
                resultsArr.push(videoResult);
            }

            //Now we will use the string of video IDs from the search to do another API call to pull latitude
            //and longitude values for each search result

            //remove trailing comma from the string of video ids
            var videoIDStringFinal = videoIDString.substring(0, videoIDString.length - 1);

            //generate request object for video search
            var videoIDRequest = gapi.client.youtube.videos.list({
                id: videoIDStringFinal,
                part: 'id,snippet,recordingDetails',
                key: API_ACCESS_KEY
            });

            //execute request and process the response object to pull in latitude and longitude
            videoIDRequest.execute(function(response) {
                if ('error' in response || !response) {
                    showConnectivityError();
                } else {
                    //iterate through the response items and execute a callback function for each
                    $.each(response.items, function() {
                        var videoRequestVideoId = this.id;

                        //ensure recordingDetails and recordingDetails.location are not null or blank
                        if (this.recordingDetails && this.recordingDetails.location) {
                            //for every search result in resultArr, pull in the latitude and longitude from the response
                            for (var i = 0; i < resultsArr.length; i++) {
                                if (resultsArr[i].videoId === videoRequestVideoId) {
                                    resultsArr[i].lat = this.recordingDetails.location.latitude;
                                    resultsArr[i].long = this.recordingDetails.location.longitude;
                                    break;
                                }
                            }
                        }
                    });
                }

                //remove duplicates from global results list
                for (var i = 0; i < resultsArr.length; i++) {
                    var addResult = true;
                    for (var j = 0; j < finalResults.length; j++) {
                        if (resultsArr[i].url === finalResults[j].url) {
                            //it is a duplicate, do not add to final results and break inner loop
                            addResult = false;
                            break;
                        }
                    }
                    if (addResult) {
                        finalResults.push(resultsArr[i]);
                    }
                }

                if (finalResults.length === 0) {
                    //No Search Results to Display
                    //remove results section as there is nothing to display
                    resetResultsSection();
                    $("div").remove(".tableOfVideoContentResults");
                } else {
                    //show results section
                    showResultsSection();

                    //remove any old results
                    $("div").remove(".tableOfVideoContentResults");

                    //generate result list and map of videos
                    generateResultList();
                    }
            });
        }
        //Update the URL bar with the search parameters from the search
        window.history.pushState("updatingURLwithParams", "YT Geo Search Tool", generateURLwithQueryParameters());
    });
}


/** This function generates the UI of the results section after the search has been processed
 */
function generateResultList() {
    var div = $('<div>');
    div.addClass('video-content');

    var tableOfVideoContent_div = $('<div>');
    div.addClass('tableOfVideoContentResults');

    var tableDefinition = $('<table>');
    tableDefinition.attr('width', '500');
    tableDefinition.attr('cellpadding', '5');

    //filter out any irrelevant results
    filterIrrelevantResults();

    //update the search result counter after filter
    updateSearchResultCount(finalResults2.length);

    for (var i = 0; i < finalResults2.length; i++) {
        var channel = finalResults2[i].channel;
        var channelID = finalResults2[i].channelID;
        if (!channel) {
            channel = channelID;
        }

        //each result, will be listed in a row with an image, meta-data and rank sections
        var resultRow = $('<tr>');
        var imageCell = $('<td width=100>');
        var metaDataCell = $('<td width=350 valign=top>');
        var rankCell = $('<td>');

        //format image section
        var imageString = "<img src='" + finalResults2[i].thumbNailURL + "' height='100' width='100'/>";
        imageCell.append(imageString);

        //format meta-data section
        var videoString = "<attr title='Description: " + finalResults2[i].description + "'><a href=" + finalResults2[i].url + "' target='_blank'>" + finalResults2[i].title + "</a></attr><br>";
        metaDataCell.append(videoString);
        var uploadDate = "Uploaded on: " + finalResults2[i].displayTimeStamp + "<br>";
        var channelString = "Channel:  <attr title='Click to go to uploader's Channel'><a href='https://www.youtube.com/channel/" + channelID + "' target='_blank'>" + channel + "</a></attr><br>";
        var reverseImageString = "<attr title='Use Google Image Search to find images that match the thumbnail image of the video.'><a href='https://www.google.com/searchbyimage?&image_url=" + finalResults2[i].thumbNailURL + "' target='_blank'>reverse image search</a></attr><br>";

        metaDataCell.append(uploadDate);
        metaDataCell.append(channelString);
        metaDataCell.append(reverseImageString);

        //format rank section
        var rank = i + 1;
        var imageNumberRank = '<h2>' + rank + '</h2><br>';
        rankCell.append(imageNumberRank);

        //Put all the sections of the row together
        resultRow.append(imageCell);
        resultRow.append(metaDataCell);
        resultRow.append(rankCell);
        tableDefinition.append(resultRow);
    }
    //show results in a table on UI
    tableOfVideoContent_div.append(tableDefinition);
    $('#tableOfVideoContentResults').append(tableOfVideoContent_div);

    //ensure table is nested in 'video-container' div for proper formatting
    div.append(tableOfVideoContent_div);
    $('#video-container').append(div);
}


/**  Show Search Filters UI (from View Filters link)
 */
function showSearchFilters() {
    $("#searchFiltersDisplay").show();
    $("#hideFiltersLink").show();
    $("#showFiltersLink").hide();
}

/** Hide Search Filters UI (from Hide Filters link)
 */
function hideSearchFilters() {
    $("#showFiltersLink").show();
    $("#hideFiltersLink").hide();
    $("#searchFiltersDisplay").hide();
}

/** Show the Results Section on the UI
 */
function showResultsSection() {
    $("#map-canvas").show();
    $("#video-container").show();
}

/** Hide the Results Section on the UI
 */
function resetResultsSection() {
    $("#map-canvas").hide();
    $("#video-container").hide();
}

/** Show the Errors Section
 */
function showErrorSection() {
    $("#showErrors").show();
}

/**  Initializes the Map Interface, centers on input longitude and latitude, and plots all the search results with markers
 *  @param inputLat {string} - input latitude
 *  @param inputLong {string} - input longitude
 */
//function initializeMap(inputLat, inputLong) {
//    var mapOptions = {
//        center: new google.maps.LatLng(inputLat, inputLong),
//        zoom: parseInt(INITIAL_ZOOM_LEVEL)
//    };
//
//    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
//    //iterate through all the search results and create map markers for each
//    for (var i = 0; i < finalResults2.length; i++) {
//        var imageNumber = i + 1
//
//        //use canned images from image folder for markers
//        var image = { url: 'images/redMarker_' + imageNumber + '.png', size: new google.maps.Size(75, 62), origin: new google.maps.Point(0, 0)};
//
//        var latLong = new google.maps.LatLng(finalResults2[i].lat, finalResults2[i].long);
//
//        //create the marker on the map object
//        var searchResultMarker = new google.maps.Marker({
//            position: latLong,
//            map: map,
//            icon: image,
//            animation: google.maps.Animation.DROP,
//            labelContent: imageNumber,
//            labelAnchor: new google.maps.Point(100, 100),
//            labelClass: "labels",
//            labelInBackground: false,
//            url: finalResults2[i].url,
//            title: finalResults2[i].title,
//            zIndex: imageNumber,
//            key: API_ACCESS_KEY
//        });
//
//        //Clicking on the marker will open the video in a new window
//        google.maps.event.addListener(searchResultMarker, 'click', function() {
//            window.open(this.url);
//        });
//    }
//}

/**  Show the Custom Date Range Sections
 */
function displayCustomRangeSection() {
    var optionSelected = $('#timeWindow').find('option:selected').attr('value');

    if (optionSelected == 'custom_range') {
        $('#customRangeSection_1').show();
        $('#customRangeSection_2').show();
        $('#customRangeSection_3').show();
        $('#customRangeSection_4').show();
        $('#customRangeSection_5').show();
        $('#customRangeSection_6').show();
        $('#customRangeSection_7').show();
        $('#customRangeSection_8').show();
        $('#customRangeSection_9').show();
        $('#customRangeSection_10').show();
        $('#customRangeSection_11').show();
        $('#customRangeSection_12').show();
    } else {
        $('#customRangeSection_1').hide();
        $('#customRangeSection_2').hide();
        $('#customRangeSection_3').hide();
        $('#customRangeSection_4').hide();
        $('#customRangeSection_5').hide();
        $('#customRangeSection_6').hide();
        $('#customRangeSection_7').hide();
        $('#customRangeSection_8').hide();
        $('#customRangeSection_9').hide();
        $('#customRangeSection_10').hide();
        $('#customRangeSection_11').hide();
        $('#customRangeSection_12').hide();
    }
}

/**  This function uses Google Maps Geo Encoder, to convert search location to  Latitude and Longitude
 *   and then generate a search request object.   Request object is then passed to processYouTubeRequest for processing.
 */
function getLocationSearchResults() {
    geocoder.geocode({ 'address': inputObject.inputSearchLocation }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //store latitude and longitude from geo coder into the inputObject
            inputObject.inputLat = results[0].geometry.location.lat();
            inputObject.inputLong = results[0].geometry.location.lng();

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
                                q: inputObject.inputQuery,
                                order: "date",
                                type: 'video',
                                part: 'snippet',
                                maxResults: '50',
                                eventType: 'live',
                                videoLiscense: inputObject.videoLiscense,
                                videoEmbeddable: inputObject.videoEmbeddable,
                                channelId: inputObject.currentChannel,
                                location: inputObject.inputLat + "," + inputObject.inputLong,
                                locationRadius: inputObject.inputLocationRadius,
                                publishedAfter: publishAfterTime,
                                publishedBefore: publishBeforeTime,
                                key: API_ACCESS_KEY,
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
                                q: inputObject.inputQuery,
                                order: "date",
                                type: 'video',
                                part: 'snippet',
                                maxResults: '50',
                                videoLiscense: inputObject.videoLiscense,
                                videoEmbeddable: inputObject.videoEmbeddable,
                                channelId: inputObject.currentChannel,
                                location: inputObject.inputLat + "," + inputObject.inputLong,
                                locationRadius: inputObject.inputLocationRadius,
                                publishedAfter: publishAfterTime,
                                publishedBefore: publishBeforeTime,
                                key: API_ACCESS_KEY,
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
                            q: inputObject.inputQuery,
                            order: "date",
                            type: "video",
                            part: "id,snippet",
                            maxResults: "50",
                            eventType: "live",
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            location: inputObject.inputLat + "," + inputObject.inputLong,
                            locationRadius: inputObject.inputLocationRadius,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: API_ACCESS_KEY
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
                            q: inputObject.inputQuery,
                            order: "date",
                            type: "video",
                            part: "id,snippet",
                            location: inputObject.inputLat + "," + inputObject.inputLong,
                            locationRadius: inputObject.inputLocationRadius,
                            maxResults: "50",
                            videoLiscense: inputObject.videoLiscense,
                            videoEmbeddable: inputObject.videoEmbeddable,
                            publishedAfter: publishAfterTime,
                            publishedBefore: publishBeforeTime,
                            key: API_ACCESS_KEY
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

/**  This function is used to filter results a News publisher is probably not interested in (e.g. car ads)
 */
function filterIrrelevantResults() {
    finalResults2 = $.grep(finalResults, function(item) {
        return !CAR_REGEX.test(item.title);
    });
}

/**  This function prints the inputObject which is useful for debugging
 */
function printInputObject() {
    console.log(inputObject);
}

/**  This function resets the inputObject, so no old data is carried over
 */
function cleanInputObject() {
    inputObject = {};
}

/**  This function takes a date object and returns a UTC formatted date string
 *  @param {object} - Date object
 *  @return {string} - String with the date in UTC format
 */
function convertDateToTimeDateStamp(dateObj) {
    return dateObj.getUTCFullYear() + '-' + formatAsTwoDigitNumber(dateObj.getUTCMonth() + 1) + '-' + formatAsTwoDigitNumber(dateObj.getUTCDate()) + 'T' + formatAsTwoDigitNumber(dateObj.getUTCHours()) + ':' + formatAsTwoDigitNumber(dateObj.getUTCMinutes()) + ':' + formatAsTwoDigitNumber(dateObj.getUTCSeconds()) + 'Z';
}

/**  This function takes a number and returns its two digital string equivalent
 *  @param {number} - number to be converted
 *  @return {string} - number represented as a two digit string
 */
function formatAsTwoDigitNumber(numb) {
    if (numb < 10) {
        return String('0' + numb);
    } else {
        return String(numb);
    }
}

/**  This function calculates the before and after timestamps needed for the API search and stores them in global variables
 */
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
}

/**  This function displays a connectivity error to the end user in the event
 *  that we lose connectivity to one or more of the Google APIs
 */
function showConnectivityError() {
    var div = $('<div>');
    div.addClass('showErrors');
    div.append("Error connecting to Google APIs");

    $('#showErrorsContainer').empty();
    $('#showErrorsContainer').append(div);
    showErrorSection();
}
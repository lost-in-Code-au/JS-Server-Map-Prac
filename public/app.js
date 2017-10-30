// var initialize = function() {

  // var mainMap = new countryMapPlugin()
  // var mapDiv = document.getElementById('main-map');
  // var melbButton = document.querySelector('#melb-button');
  // var whereAmIButton = document.querySelector('#geo-button');
  //
  // var center = {lat:-38.4362389, lng:144.8445914 };
  // var beachLocation = {lat:-38.4362389, lng:144.8445914 }
  // var Åland = {lat:60.116667, lng:19.9 }
  //
  // var mainMap = new MapWrapper(Åland);
  // // mainMap.addMarker(center);
  // mainMap.addClickEvent();
  // mainMap.addInfoWindow(center, "Start spreadin' the news, I'm leavin' today <br>I want to be a part of it <br> <b>Melbourne, Vic, Australia</b>");
  //
  // var goToMelb = function(){
  //   var melb = { lat: -37.814, lng: 144.96332 };
  //   mainMap.googleMap.setCenter(melb);
  //   mainMap.addInfoWindow(melb, "<h3>Melbourne</h3>");
  // }
  //
  // var findLocation = function(){
  //   mainMap.geoLocate();
  // }
  //
  // melbButton.addEventListener('click', goToMelb);
  // whereAmIButton.addEventListener('click', findLocation);
// }

const initialize = function() {
  var apiLoader = "http://maps.googleapis.com/maps/api/js?key="+process.env.APIKEY
  console.log(apiLoader)

  const beachLocation = {lat:-38.4362389, lng:144.8445914 }
  const mainMap = new MapWrapper(beachLocation)
}

window.addEventListener("load", initialize)

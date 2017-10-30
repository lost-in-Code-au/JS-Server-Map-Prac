var MapWrapper = function(obj) {
  var container = document.querySelector("#main-map")
  this.googleMap = new google.maps.Map(container, {
    center: obj,
    zoom: 14
  })
  
  // var infowindow = new google.maps.InfoWindow({
  //   content: mapPinContent
  // });
  //
  // var marker = new google.maps.Marker({
  //   position: beachLocation,
  //   map: this.googleMap,
  //   title: 'Gunnamatta Ocea Beach'
  // });

  // marker.addListener('click', function() {
  //   infowindow.open(map, marker);
  // });
  //
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 4,
  //   center: beachLocation
  // });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    const marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      const position = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.addMarker(position);
    }.bind(this));
  },

  addInfoWindow: function(coords, text) {
    const marker = this.addMarker(coords);
    marker.addListener('click', function() {
      const infoWindow = new google.maps.InfoWindow({
        content: text
      });
      infoWindow.open(this.map, marker);
    });
  },

  geoLocate: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      const center = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.googleMap.setCenter(center);
      this.addMarker(center);
    }.bind(this));
  }
}

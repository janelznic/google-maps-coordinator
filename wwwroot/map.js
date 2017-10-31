var map;
var marker = false;

function initialize() {
  var defaultLat = 50.08133767628893;
  var defaultLong = 14.410521984100342;
  var defaultLatLong = new google.maps.LatLng(defaultLat, defaultLong);

  var options = {
    zoom: 14,
    center: defaultLatLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById("gmap"), options);

  marker = new google.maps.Marker({
    position: defaultLatLong, 
    map: map
  });

  google.maps.event.addListener(map, "center_changed", function() {
    var location = map.getCenter();
    document.getElementById("lat").innerHTML = location.lat();
    document.getElementById("lon").innerHTML = location.lng();
    placeMarker(location);
  });

  google.maps.event.addListener(map, "zoom_changed", function() {
    zoomLevel = map.getZoom();
    document.getElementById("zoomLevel").innerHTML = zoomLevel;
  });

  google.maps.event.addListener(marker, "dblclick", function() {
    zoomLevel = map.getZoom()+1;
    if (zoomLevel == 20) {
      zoomLevel = 10;
   	}
    document.getElementById("zoomLevel").innerHTML = zoomLevel;
    map.setZoom(zoomLevel);
  });

  document.getElementById("zoomLevel").innerHTML = options.zoom; 
  document.getElementById("lat").innerHTML = defaultLat;
  document.getElementById("lon").innerHTML = defaultLong;
}

function placeMarker(location) {
  var clickedLocation = new google.maps.LatLng(location);
  marker.setPosition(location);
}

window.onload = function() { initialize(); };

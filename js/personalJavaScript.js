
// FUNCIÓN PARA CONTROLAR EL MAPA
function myMap() {
  var myCenter = new google.maps.LatLng(6.2059333, -75.5754688);
  var mapProp = {center:myCenter, zoom:16, scrollwheel:false, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

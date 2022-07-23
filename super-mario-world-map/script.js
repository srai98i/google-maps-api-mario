let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.66794991523562, lng: 135.43024399172492 },
    zoom: 18,
    mapId: "55b583199afff4a5",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });
  const markerYoshiHouse = new google.maps.Marker({
    position: { lat: 34.66804360133394, lng: 135.43032705062683 },
    map: map,
    title: "Yoshi's House",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/yoshi_house.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindow = new google.maps.InfoWindow({
    content: "Yoshis House",
  });
  markerYoshiHouse.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

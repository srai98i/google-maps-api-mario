let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.66849839859227, lng: 135.43022693267773 },
    zoom: 17.75,
    mapId: "55b583199afff4a5",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });
  const markerYoshiHouse = new google.maps.Marker({
    position: { lat: 34.66803774975254, lng: 135.43047317790675 },
    map: map,
    title: "Yoshi's House",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/yoshi_house.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowYoshi = new google.maps.InfoWindow({
    content: "Yoshi's House",
  });
  markerYoshiHouse.addListener("click", () => {
    infowindowYoshi.open({
      anchor: markerYoshiHouse,
      map,
      shouldFocus: false,
    });
  });
  const markerPeachCastle = new google.maps.Marker({
    position: { lat: 34.66766535463331, lng: 135.43046122916806 },
    map: map,
    title: "Peach's Castle",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/castle.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowCastle = new google.maps.InfoWindow({
    content: "Peach's Castle",
  });
  markerPeachCastle.addListener("click", () => {
    infowindowCastle.open({
      anchor: markerPeachCastle,
      map,
      shouldFocus: false,
    });
  });
  const markerGhostHouse = new google.maps.Marker({
    position: { lat: 34.66852201898879, lng: 135.43044712059054 },
    map: map,
    title: "Ghost House",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/ghosthouse.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowGhostHouse = new google.maps.InfoWindow({
    content: "Ghost House",
  });
  markerGhostHouse.addListener("click", () => {
    infowindowGhostHouse.open({
      anchor: markerGhostHouse,
      map,
      shouldFocus: false,
    });
  });
  const markerStar = new google.maps.Marker({
    position: { lat: 34.66805426929214, lng: 135.4299059133506 },
    map: map,
    title: "Star",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/star.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowStar = new google.maps.InfoWindow({
    content: "The Star",
  });
  markerStar.addListener("click", () => {
    infowindowStar.open({
      anchor: markerStar,
      map,
      shouldFocus: false,
    });
  });
  const markerHill = new google.maps.Marker({
    position: { lat: 34.66847034969831, lng: 135.42981216869597 },
    map: map,
    title: "The Hill",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/hill_with_eyes.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowHill = new google.maps.InfoWindow({
    content: "The Hill",
  });
  markerHill.addListener("click", () => {
    infowindowHill.open({
      anchor: markerHill,
      map,
      shouldFocus: false,
    });
  });
  const markerPipe = new google.maps.Marker({
    position: { lat: 34.66885520896324, lng: 135.4299132106056 },
    map: map,
    title: "Pipe",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/pipe.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowPipe = new google.maps.InfoWindow({
    content: "The Pipe",
  });
  markerPipe.addListener("click", () => {
    infowindowPipe.open({
      anchor: markerPipe,
      map,
      shouldFocus: false,
    });
  });
  const markerPointer = new google.maps.Marker({
    position: { lat: 34.669141714237185, lng: 135.43059871469018 },
    map: map,
    title: "The Pointer",
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./pics/pointer.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
  });
  const infowindowPointer = new google.maps.InfoWindow({
    content: "The Pointer",
  });
  markerPointer.addListener("click", () => {
    infowindowPointer.open({
      anchor: markerPointer,
      map,
      shouldFocus: false,
    });
  });
}


//MAPA

const randLatitude =  (max) => {
    let rand = Math.random() * (90) + 1;
    let num = Math.round(Math.random()) ? 1 : -1;
    return rand*num
}

const randLongitude= (max) => {
    let rand = Math.random() * (180) + 1;
    let num = Math.round(Math.random()) ? 1 : -1;
    return rand*num
}

const map = L.map('mapid').setView([randLatitude(), randLongitude()], 3);
    
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2lyZ2V0dG8iLCJhIjoiY2pqeTN3Z3p0MnZ4eDNybWF6NjFyeTJybCJ9.EpIVsQVachGWPiHwCijVOg';

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    attribution:
      'Map data & copy; OpenStreetMap contributors, Imagery © Mapbox',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN,
  }
).addTo(map);


const popup = L.popup() 
    .setLatLng([randLatitude(), randLongitude()])
    .setContent(`<h3>Arcade Nation</h3> is brewed here`)
    .openOn(map);
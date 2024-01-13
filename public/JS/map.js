mapboxgl.accessToken = mapboxgl.accessToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:"mapbox://styles/mapbox/streets-v12",
    center: coordinates, // starting position [lng, lat]
    zoom: 7 // starting zoom
});


const marker = new mapboxgl.Marker({color:"red",rotation:45})
.setLngLat(coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(
    `<p>Exact location will be provided after booking .</p>`
)
.setMaxWidth("300px"))
.addTo(map);



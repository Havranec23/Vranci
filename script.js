const places = [
    { lat: 40.7128, lng: -74.0060, name: "New York" },
    { lat: 40.7306, lng: -73.9352, name: "Brooklyn" },
    { lat: 40.7580, lng: -73.9855, name: "Times Square" }
];

places.forEach(place => {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(place.name);
});

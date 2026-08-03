// Create the map
const map = L.map("map");

// OpenStreetMap layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

// Group for markers
const group = L.featureGroup().addTo(map);

// Load markers from JSON
fetch("markers.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load markers.json");
        }
        return response.json();
    })
    .then(locations => {

        locations.forEach(location => {

            const marker = L.marker([location.lat, location.lng]);

            marker.bindPopup(`
                <h3>${location.name}</h3>
                <p>${location.description}</p>
                <b>Latitude:</b> ${location.lat}<br>
                <b>Longitude:</b> ${location.lng}
            `);

            marker.addTo(group);

        });

        // Zoom to show all markers
        if (locations.length > 0) {
            map.fitBounds(group.getBounds(), {
                padding: [50, 50]
            });
        } else {
            map.setView([0, 0], 2);
        }

    })
    .catch(error => {
        console.error(error);

        // Default view if JSON cannot be loaded
        map.setView([20, 0], 2);
    });

// Optional: Add markers by clicking on the map
/*
map.on("click", function (e) {

    L.marker(e.latlng)
        .addTo(map)
        .bindPopup(`
            <b>New Marker</b><br>
            Latitude: ${e.latlng.lat.toFixed(5)}<br>
            Longitude: ${e.latlng.lng.toFixed(5)}
        `)
        .openPopup();

});
*/
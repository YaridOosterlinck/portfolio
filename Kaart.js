var map = L.map('map').setView([51.2486, 4.4623], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bijdragers'
}).addTo(map);

L.circle([51.2486, 4.4623], {
    color: 'orange',
    fillColor: '#378DFF',
    fillOpacity: 0.3,
    radius: 500
}).addTo(map).bindPopup("Merksem");

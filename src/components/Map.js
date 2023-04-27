import { useState, useEffect } from 'react';
import L from 'leaflet';
import '../App.css'


function Map({ placeName }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}`;
      const response = await fetch(url);
      const data = await response.json();
      const latitude = data[0].lat;
      const longitude = data[0].lon;
      setLatitude(latitude);
      setLongitude(longitude);
    };
    fetchData();
  }, [placeName]);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      const map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19
      }).addTo(map);

      L.marker([latitude, longitude], 12).addTo(map);
    }
  }, [latitude, longitude]);


  
  return (
    <>
    
    </>
    
  );
}

export default Map;


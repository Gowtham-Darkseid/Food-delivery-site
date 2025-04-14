const detectLocationBtn = document.getElementById('detect-location-btn');
const mapModal = document.getElementById('map-modal');
const closeBtn = document.querySelector('.close-btn');

let map;
function initializeMap(lat, lon) {
  if (!map) {
    map = L.map('map').setView([lat, lon], 13); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup('Your Location').openPopup();
  } else {
    map.setView([lat, lon], 13); 
  }
}

detectLocationBtn.addEventListener('click', () => {
  mapModal.style.display = 'flex';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        initializeMap(latitude, longitude);
      },
      (error) => {
        alert('Unable to fetch location. Please enable GPS.');
      }
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
});

closeBtn.addEventListener('click', () => {
  mapModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === mapModal) {
    mapModal.style.display = 'none';
  }
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none'; 
    }
  });

  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  
  // Toggle the navigation menu on hamburger click
  hamburgerMenu.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  });
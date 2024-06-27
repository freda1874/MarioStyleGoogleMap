
# Custom Google Maps Theme Project

Welcome to the Custom Google Maps Theme project! This project aims to create a customized Google Map using JavaScript and the Google Maps API.

## Overview

This project is part of [DevProjects](http://www.codementor.io/projects), an open-source initiative for learning and building projects.  
You can find the detailed project requirements [here](https://www.codementor.io/projects/web/build-a-custom-google-maps-theme-bf8levr6eg).
![image](https://github.com/freda1874/MarioStyleGoogleMap/assets/85437054/dae6b462-218e-49e4-8303-18a0e4602f76)
## Technologies Used

- JavaScript
- Google Maps API
- HTML
- CSS

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Replace `YOUR_API_KEY` in `index.html` with your own Google Maps API key.
3. Customize the `MAP ID` in the Google Maps initialization with your desired theme.

```javascript
<script>
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      mapId: "YOUR_MAP_ID", // Replace with your customized Map ID
      apiKey: "YOUR_API_KEY", // Replace with your Google Maps API key
    });
  }
</script>
 



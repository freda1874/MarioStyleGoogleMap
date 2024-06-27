function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.34164667207678, lng: -75.7537560933531 },
        zoom: 10,
        mapId: 'e771adac01caa6bd'
    });

    const markers = [
        [
            "Freda\'s House!",
            45.34141289870294,
            -75.75297288835145,
            "Rainbow-Baby-Yoshi.png",
            50,
            50
        ],
        ["Trevor\'s House!",
            45.33386055329746,
            -75.75784226136572,
            "Luigi.png",
            40,
            40

        ]];

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: {
                lat: currMarker[1], lng: currMarker[2]
            }, map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
        });

        const infoWindow = new google.maps.InfoWindow(
            { content: currMarker[0] }
        )

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    }


}



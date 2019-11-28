
        function initMap() {

            //宣告景點變數
            var array_location = [{
                name: "台中公園",
                lat: 24.144853,
                lng: 120.684518,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page02"
            },
            {
                name: "台中孔廟",
                lat: 24.154337,
                lng: 120.689977,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page03"
            },
            {
                name: "國立自然科學博物館",
                lat: 24.157355,
                lng: 120.666075,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page04"
            },
            {
                name: "香蕉新樂園",
                lat: 24.156196,
                lng: 120.689975,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page06"
            },
            {
                name: "中興堂",
                lat: 24.145892,
                lng: 120.685504,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page05"
            },
            {
                name: "寶覺寺",
                lat: 24.159693,
                lng: 120.687782,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page07"
            }
            ];

            //指定中央點
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: { lat: 24.154000, lng: 120.678000 },
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ],

            });

            setMarkers(map, array_location)

            function setMarkers(map, array_location) {

                var marker, i

                for (i = 0; i < array_location.length; i++) {

                    var loan = array_location[i].name
                    var lat = array_location[i].lat
                    var long = array_location[i].lng
                    var img = array_location[i].img_link
                    var btn_anchor = array_location[i].target


                    latlngset = new google.maps.LatLng(lat, long);

                    var new_icon = {
                        url: 'https://image.flaticon.com/icons/svg/149/149984.svg',
                        size: new google.maps.Size(60, 60),
                        scaledSize: new google.maps.Size(40, 40),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(20, 50),
                    }


                    var marker = new google.maps.Marker({
                        map: map,
                        title: loan,
                        position: latlngset,
                        icon: new_icon,
                    });


                    var content = `<div><h5> ${loan} </h5><img class="map_img" src= ${img} alt=""></div> 
                                     <div class="map_btn"><a  href=${btn_anchor}>詳細資訊</a></div>`

                    var infowindow = new google.maps.InfoWindow({
                        maxWidth: 250,
                        content: content

                    })

                    // var markers = []
                    // markers.push(marker);



                    //     marker.addListener('click', function () {
                    //     console.log(infowindow);

                    //     infowindow.setContent(content);
                    //     infowindow.open(map, this);
                    //    })







                    var prev_infowindow;

                    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {

                        return function () {
                            //關閉前一個
                            if (prev_infowindow) {
                                prev_infowindow.close();
                            }
                            prev_infowindow = infowindow;
                            infowindow.setContent(content);
                            infowindow.open(map, this);

                        };
                    })(marker, content, infowindow));
                }
            }

        }

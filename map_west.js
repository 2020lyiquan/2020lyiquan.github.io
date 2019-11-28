
        function initMap() {

            //宣告景點變數
            var array_location = [{
                name: "勤美術館",
                lat: 24.152376,
                lng: 120.663562,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page02"
            },
            {
                name: "忠信市場",
                lat: 24.139880,
                lng: 120.663492,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page03"
            },
            {
                name: "國立台灣美術館",
                lat: 24.141230,
                lng: 120.662617,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page04"
            },
            {
                name: "道禾六藝文化館",
                lat: 24.134399,
                lng: 120.673903,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page05"
            },
            {
                name: "台中文學館",
                lat: 24.139700,
                lng: 120.672766,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page06"
            },
            {
                name: "審計新村",
                lat: 24.144624,
                lng: 120.662931,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page07"
            },
            {
                name: "台中州廳",
                lat: 24.138581,
                lng: 120.678488,
                img_link: "https://www.thinkingtaiwan.com/sites/default/files/images/insert/policy/tai_zhong_huo_che_zhan_1.jpg",
                target: "#page08"
            }
            ];
       
            //指定中央點
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: { lat: 24.14500, lng: 120.670000 },
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
                        size: new google.maps.Size(80, 80),
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


                    var content = `<div><h2> ${loan} </h2><img class="map_img" src= ${img} alt=""></div> 
                                    <div><a class="map_btn" href=${btn_anchor}>詳細資訊</a></div>`

                    var infowindow = new google.maps.InfoWindow({
                        maxWidth: 250,
                        content: content

                    })

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

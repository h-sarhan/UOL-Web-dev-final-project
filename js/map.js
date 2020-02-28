var map;


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40,
      lng: -50
    },
    disableDefaultUI: true,
    zoom: 2.2
  });

  var infowindow = new google.maps.InfoWindow({
    content: ''
  })

  var markers = {};
  for (city in cities) {
    markers[city] = new google.maps.Marker({
      position: {
        lat: cities[city][0],
        lng: cities[city][1]
      },
      map: map,
      title: city
    });
  }
  citiesArray.forEach((city) => {
    markers[city].addListener('click', () => {
      var myLatLng = new google.maps.LatLng({
        lat: cities[city][0],
        lng: cities[city][1]
      });
      map.panTo(myLatLng);
      map.setZoom(10);
      infowindow.close();
      infowindow.setContent('Darkness into Light ' + city);
      infowindow.open(map, markers[city]);
    });
  });
}

var list = document.querySelector('.our-walks-main__list');
var continents = {
  'North America': ['USA', 'Canada'],
  'Europe': ['Ireland', 'UK', 'Germany', 'Sweden'],
  'Oceania': ['Australia', 'New Zealand']

};
var canada = ['Calgary', 'Edmonton', 'Ottawa', 'Vancouver'];
var usa = ['Chicago'];
var ireland = ['Cork', 'Limerick', 'Dublin'];
var uk = ['London', 'Glasgow', 'Bristol'];
var germany = ['Berlin', 'Frankfurt', 'Munich'];
var sweden = ['Stockholm', 'Gothenberg'];
var australia = ['Sydney', 'Melbourne'];
var newZealand = ['Auckland'];

var cities = {
  'Calgary': [51.0447, -114],
  'Edmonton': [53.5461, -113.4938],
  'Ottawa': [45.4215, -75.6972],
  'Vancouver': [49.2827, -123.1207],
  'Chicago': [41.8781, -87.6298],
  'Cork': [51.8985, -8.4756],
  'Limerick': [52.6638, -8.6267],
  'Dublin': [53.3498, -6.2603],
  'London': [51.5074, -0.1278],
  'Glasgow': [55.8642, -4.2518],
  'Bristol': [51.4545, -2.5879],
  'Berlin': [52.5200, 13.4050],
  'Frankfurt': [50.1109, 8.6821],
  'Munich': [48.1351, 11.5820],
  'Stockholm': [59.3293, 18.0686],
  'Gothenberg': [57.7089, 11.9746],
  'Sydney': [-33.8688, 151.2093],
  'Melbourne': [-37.8136, 144.9631],
  'Auckland': [-36.8485, 174.7633]

};
var citiesArray = ['Calgary',
  'Edmonton',
  'Ottawa',
  'Vancouver',
  'Chicago',
  'Cork',
  'Limerick',
  'Dublin',
  'London',
  'Glasgow',
  'Bristol',
  'Berlin',
  'Frankfurt',
  'Munich',
  'Stockholm',
  'Gothenberg',
  'Sydney',
  'Melbourne',
  'Auckland'
];

var countries = {
  'Canada': canada,
  'USA': usa,
  'Ireland': ireland,
  'UK': uk,
  'Germany': germany,
  'Sweden': sweden,
  'Australia': australia,
  'New Zealand': newZealand
};

function backToStage1() {
  list.innerHTML = '';
  backArrow.style.visibility = 'hidden';
  currentStage = 1;
  for (const name in continents) {
    var continentDOM = document.createElement('li');
    continentDOM.classList.add('our-walks-main__individual');
    list.append(continentDOM);
    var continentTitleDOM = document.createElement('p');
    continentTitleDOM.classList.add('our-walks-main__inner-list-heading');
    continentTitleDOM.textContent = name;
    continentDOM.append(continentTitleDOM);
    continentDOM.addEventListener('click', () => {
      stage2(name);
    });
  }
}

function stage2(continent) {
  list.innerHTML = '';
  backArrow.style.visibility = 'visible';
  currentStage = 2;
  continents[continent].forEach((country) => {
    var countryDOM = document.createElement('li');
    countryDOM.classList.add('our-walks-main__individual');
    list.append(countryDOM);
    var countryTitleDOM = document.createElement('p');
    countryTitleDOM.classList.add('our-walks-main__inner-list-heading');
    countryTitleDOM.textContent = country;
    countryDOM.append(countryTitleDOM);
    countryDOM.addEventListener('click', () => {
      stage3(countryTitleDOM.textContent, continent);
    });
  });
  backArrow.addEventListener('click', () => {
    backToStage1();
  });
}

function stage3(country, prevContinent) {
  currentStage = 3;
  backArrow.style.visibility = 'visible';
  list.innerHTML = '';
  countries[country].forEach((city) => {
    var cityDOM = document.createElement('li');
    cityDOM.classList.add('our-walks-main__individual');
    list.append(cityDOM);
    var cityTitleDOM = document.createElement('p');
    cityTitleDOM.classList.add('our-walks-main__inner-list-heading');
    cityTitleDOM.textContent = city;
    cityDOM.append(cityTitleDOM);
    cityDOM.addEventListener('click', () => {
      var myLatLng = new google.maps.LatLng({
        lat: cities[city][0],
        lng: cities[city][1]
      });
      map.panTo(myLatLng);
      map.setZoom(10);
    });
  });
  backArrow.addEventListener('click', () => {
    stage2(prevContinent);
  });
}


var listHeadings = document.querySelectorAll('.our-walks-main__inner-list-heading');
listHeadings.forEach((item) => {
  item.addEventListener('click', () => {
    stage2(item.textContent);
  })
})
var currentStage = 1;
var backArrow = document.querySelector('.our-walks-main__go-back');
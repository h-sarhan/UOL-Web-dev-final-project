// Declaring the map, markers and infoWindow variables as global variables so they can be used outside the initMap function
var map;
var markers;
var infowindow;
// Defining the initMap function needed to start the map according to the google maps API
function initMap() {
  // Creating a google maps object using the google.maps.Map() constructor, and passing it the map DOM element and an options object
  map = new google.maps.Map(document.getElementById('map'), {
    // This option sets the point where the map will be initially centered
    center: {
      lat: 40,
      lng: -50
    },
    // This option disables the default ui that you see when you go to maps.google.com, I removed it so that the map appears less cluttered
    disableDefaultUI: true,
    // This sets the initial zoom level
    zoom: 2.2
  });
  // This creates an Information Window object. (This is wat appears when you click on a google maps marker)
  infowindow = new google.maps.InfoWindow({
    // Initially its content is empty
    content: ''
  })
  // This creates an object that maps the name of each city to a location marker on the map
  markers = {};
  // This fills the markers object with a marker for each city
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
  // This iterates through an array of the city names and adds an event listener to each one.
  //  This event listener will pan and zoom to the city whose marker has been clicked and will change the picture and show the information window as well
  citiesArray.forEach((city) => {
    markers[city].addListener('click', () => {
      var myLatLng = new google.maps.LatLng({
        lat: cities[city][0],
        lng: cities[city][1]
      });
      map.panTo(myLatLng);
      map.setZoom(10);
      showInfoWindow(city, infowindow, markers);
      changePicture(city);
    });
  });
}
// This represents the menu DOM object
var list = document.querySelector('.our-walks-main__list');
// This is an array for the initial menu items (The continents)
var listHeadings = document.querySelectorAll('.our-walks-main__inner-list-heading');
// This iterates through all the initial menu items and adds a 'click' event listener that takes the menu to stage 2 when an item has been clicked
listHeadings.forEach((item) => {
  item.addEventListener('click', () => {
    stage2(item.textContent);
  })
})
// This variable represents the back arrow DOM object above the menu
var backArrow = document.querySelector('.our-walks-main__go-back');
// This variable represents the photo DOM object to the right of the menu
var photo = document.querySelector('.our-walks-photos');
// This variable represents the breadcrumbs DOM object above the menu
var breadcrumbs = document.querySelector('.our-walks-main__breadcrumbs');

// This function closes the current info menu and shows the one corresponding to the city that was passed in as a parameter
function showInfoWindow(city, infowindow, markers) {
  infowindow.close();
  infowindow.setContent('Darkness into Light ' + city);
  infowindow.open(map, markers[city]);
}
// This is an object mapping each continent to a an array of its longitude and latitude
var continentsCoordinates = {
  'North America': [42.719989, -101.548149],
  'Europe': [48.022193, 12.936265],
  'Oceania': [-30.517572, 128.693019]
}
// This is an object mapping each continent to an array of its countries
var continents = {
  'North America': ['USA', 'Canada'],
  'Europe': ['Ireland', 'UK', 'Germany', 'Sweden'],
  'Oceania': ['Australia', 'New Zealand']

};



// This is an object mapping each city to an array of its coordinates as well as a link to a picture from one of the walks in that city
var cities = {
  'Calgary': [51.0447, -114, 'https://media-cdn.tripadvisor.com/media/photo-s/0d/b5/30/21/stephen-ave-in-early.jpg'],
  'Edmonton': [53.5461, -113.4938, 'https://shawglobalnews.files.wordpress.com/2019/03/5c896bc535254.jpg?quality=70&strip=all&w=720'],
  'Ottawa': [45.4215, -75.6972, 'https://pbs.twimg.com/media/D6EAVpKXsAIIfG1.jpg'],
  'Vancouver': [49.2827, -123.1207, 'https://www.thekettle.ca/wp-content/uploads/2019/03/50591984_2137393216281719_8126694357349695488_n.jpg'],
  'Chicago': [41.8781, -87.6298, 'https://media.central.ie/media/images/d/DarknessIntoLight1Photocall_large.jpg'],
  'Cork': [51.8985, -8.4756, 'https://www.echolive.ie/portalsuite/image//10cf5d32-4a14-4e49-b5f0-f4bbeb9f0853/mainMediaSize=537x291_type=image_publish=true__image.jpg'],
  'Limerick': [52.6638, -8.6267, 'https://www.limerickleader.ie/resizer/420/315/true/GN4_DAT_12465553.jpg--annual_darkness_into_light_walk_to_attract_thousands_in_limerick_city.jpg'],
  'Dublin': [53.3498, -6.2603, 'https://www.electricireland.ie/images/default-album/dil-ei-site-644.jpg?sfvrsn=c5fbba0d_0'],
  'London': [51.5074, -0.1278, 'https://www.dannysullivan.co.uk/assets/components/phpthumbof/cache/Pic%201A.40fbc150e4c5e9f538e315a792b3c9a1.jpg'],
  'Glasgow': [55.8642, -4.2518, 'https://www.markandersonphotography.co.uk/wp-content/uploads/2015/11/darkness-into-light-charity-walk-run.png'],
  'Bristol': [51.4545, -2.5879, 'https://www.munster-express.ie/files/2018/05/22.jpg'],
  'Berlin': [52.5200, 13.4050, 'https://www.odonovan.co.uk/wp-content/uploads/2019/05/60134714_1221561468010034_235513015552704512_n-875x656.jpg'],
  'Frankfurt': [50.1109, 8.6821, 'https://www.laoistoday.ie/wp-content/uploads/2017/05/Optimized-06-05-17-Darkness-into-Light-Mountmellick-62.jpg'],
  'Munich': [48.1351, 11.5820, 'https://i.ytimg.com/vi/ECXVVZULsfc/maxresdefault.jpg'],
  'Stockholm': [59.3293, 18.0686, 'https://yallaabudhabi.ae/wp-content/uploads/2017/04/darkenss-into-ligjht.png'],
  'Gothenberg': [57.7089, 11.9746, 'https://i2-prod.dublinlive.ie/incoming/article11276246.ece/ALTERNATES/s615/Darkness-into-Light.jpg'],
  'Sydney': [-33.8688, 151.2093, 'https://www.irishtimes.com/polopoly_fs/1.2639601.1462616008!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'],
  'Melbourne': [-37.8136, 144.9631, 'https://www.hunterlabourhire.com.au/wp-content/uploads/2019/04/Daskness-Into-Light-Sydney-2019-Hunter-Labour-Hire.jpg'],
  'Auckland': [-36.8485, 174.7633, 'https://www.infonews.co.nz/photos/600-86335BC2-9BC6-4E11-BEF8C2C498213243.jpg']

};

// This is an array that has the name of each city. I needed to iterate through them as iterating through an object causes some issues
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

// This is an object mapping each country to an array of its coordinates
var countriesCoordinates = {
  'Canada': [58.211541, -109.067219],
  'USA': [37.745485, -95.811660],
  'Ireland': [53.416806, -8.059021],
  'UK': [54.113722, -2.007688],
  'Germany': [51.185959, 10.801043],
  'Sweden': [64.034973, 16.253627],
  'Australia': [-24.840754, 135.023505],
  'New Zealand': [-42.363507, 171.793245]
};
// These are all arrays that represent the cities in each country
var canada = ['Calgary', 'Edmonton', 'Ottawa', 'Vancouver'];
var usa = ['Chicago'];
var ireland = ['Cork', 'Limerick', 'Dublin'];
var uk = ['London', 'Glasgow', 'Bristol'];
var germany = ['Berlin', 'Frankfurt', 'Munich'];
var sweden = ['Stockholm', 'Gothenberg'];
var australia = ['Sydney', 'Melbourne'];
var newZealand = ['Auckland'];

// This is an object mapping each country to an array of its cities
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

// This is a function that changes the photo to the one of the city parameter that was passed to it
function changePicture(city) {
  photo.style.background = 'url(' + cities[city][2] + ')';
  photo.style.backgroundSize = 'cover';
  photo.style.backgroundPosition = 'center';

}

// This function brings the menu to stage 1 (The continents)
function stage1() {
  // Sets the photo to the default one
  photo.style.backgroundImage = "url('https://scontent.ffjr1-1.fna.fbcdn.net/v/t1.0-9/s960x960/88133941_1520101454838251_1893504158565138432_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=zVeHZ_weJgcAX86ItdH&_nc_ht=scontent.ffjr1-1.fna&_nc_tp=7&oh=2db618b45b745ddeeade12189042f458&oe=5F036646')";
  // Sets the breadcrumbs to be empty
  breadcrumbs.textContent = '';
  // Pans and zooms the map to the default coordinates and zoom level
  var myLatLng = new google.maps.LatLng({
    lat: 40,
    lng: -50
  });
  map.panTo(myLatLng);
  map.setZoom(2.2);
  // Empties the menu
  list.innerHTML = '';
  // Hides the back arrow
  backArrow.style.visibility = 'hidden';
  // Iterates through the list of continents and creates DOM elements from them. 
  // Then adds an event listener to each DOM element that, when clicked, takes the menu to stage 2
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
// This function brings the menu to stage 2 (The countries)
function stage2(continent) {
  // Writes to the breadcrumbs
  breadcrumbs.textContent = continent;
  // Pans and zooms to the continent chosen
  var myLatLng = new google.maps.LatLng({
    lat: continentsCoordinates[continent][0],
    lng: continentsCoordinates[continent][1]
  });
  map.panTo(myLatLng);
  map.setZoom(3);
  // Empties the menu
  list.innerHTML = '';
  // Makes the back arrow visible
  backArrow.style.visibility = 'visible';
  // Iterates through the countries of the chosen continent, and makes DOM elements for all of them.
  // Then creates an event listener to each of that, when clicked, will take the menu to stage 3
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
  // Adds an event listener to the back arrow that, when clicked will take the menu back to stage 1 
  backArrow.addEventListener('click', () => {
    stage1();
  });
}

// This function brings the menu to stage 3 (The cities)
function stage3(country, prevContinent) {
  // Writes to the breadcrumbs
  breadcrumbs.textContent = prevContinent + " > " + country;
  // Pans and zooms to the country chosen
  var myLatLng = new google.maps.LatLng({
    lat: countriesCoordinates[country][0],
    lng: countriesCoordinates[country][1]
  });
  map.panTo(myLatLng);
  map.setZoom(4);
  // Makes the back arrow visible
  backArrow.style.visibility = 'visible';
  // Empties the menu
  list.innerHTML = '';
  // Iterates through all of the cities of the chosen country and creates DOM elements for all of them.
  // Then an event listener will be added to each of them that, when clicked will pan and zoom the map to
  // the selected city and will change the photo to a appropriate one
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
      map.setZoom(12);
      changePicture(city);
      showInfoWindow(city, infowindow, markers);
      breadcrumbs.textContent = prevContinent + " > " + country + " > " + city;
    });
  });
  // Adds an event listener that when clicked will take the menu back to stage 2
  backArrow.addEventListener('click', () => {
    infowindow.close();
    stage2(prevContinent);
  });
}
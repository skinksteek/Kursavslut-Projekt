var toggle = document.querySelector('.menu-burger');
  toggle.addEventListener('click', (e) => {
    console.log(e);
    openNavigation()

});
function openNavigation() {
  console.log('clicked');
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function initMap() {
  var location = {lat: 59.322794, lng: 14.112214};
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}

console.log('mapbox.js ready to roll!')

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHZuIiwiYSI6ImNpdmRuMWEwOTAwNWQydXFrZXhic2JzOHkifQ.Rtdwrvo0Q3VRUJNpEN9TOg'

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
})

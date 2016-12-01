console.log('mapbox.js ready to roll!')

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaHZuIiwiYSI6ImNpdmRuMWEwOTAwNWQydXFrZXhic2JzOHkifQ.Rtdwrvo0Q3VRUJNpEN9TOg'

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/joshvn/ciw6hg5lr00302kmg0fx8p60i', 
  // initial position in [long, lat] format
    center: [-0.1, 51.501597],
  // initial zoom
  zoom: 8.52
})

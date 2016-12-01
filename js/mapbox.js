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

var markers = [] 

function wipeMarkers()
{
  for (var i = 0; i < markers.length; i++) 
  {
    var marker = markers[i]
    marker.remove()
  }
}

function addMarkers(dataList) 
{
  // first wipe previous markers
  wipeMarkers()
  // then add new ones
  for (var i = 0; i < dataList.length; i++) 
  {
    // store the current data item in a variable
    var dataItem = dataList[i]
    // extract the data item coordinates
    var coordinates = new mapboxgl.LngLat( dataItem.longitude, dataItem.latitude)
    // create a div element for the marker
    var div = document.createElement('div')
    // add a class called 'marker' to the div
    div.className = 'marker'
    // create the custom marker
    var marker = new mapboxgl.Marker(div)
      .setLngLat(coordinates) // set the marker position
      .addTo(map) // add the marker to map
    // add the marker to the list
    markers.push(marker)
    
    // 1. update the details section with data from the selected result
// 2. hide the results section
// 3. show the details section
var clickSteps = 'showDetails(resultsList['+i+'], detailsInfo); resultsSection.hide(); detailsSection.show(); '
var popupHTML = '<a onclick="' + clickSteps + '">' + dataItem.name + '</a>'
var popup = new mapboxgl.Popup({closeButton:false})
popup.setHTML(popupHTML)
marker.setPopup(popup)
  }
}
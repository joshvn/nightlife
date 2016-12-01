// use jQueary to select the HTML elements we're going to manipulate.
var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsToggleButton = $('#results .toggle')
var homeDropdown = $('#home select')
var resultsOL = $('#results ol')
var resultsMap = $('#map')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')

// define results list outside of any function
var resultsList = []

// tell the button to do something when we click it
homeGoButton.click(function(){
    homeSection.hide()
    resultsSection.show()
})

// tell the Back button to do something when we click it

resultsBackButton.click(function(){
    resultsSection.hide()
    homeSection.show()
})

    
    // capture the user chosen option
    homeGoButton.click( function(){
     var chosenOption = homeDropdown.val()
    console.log("you picked" + chosenOption)
    
    // filter+sort people by user selection
    resultsList = filterAndSortList(peopleList, chosenOption);
    console.log(resultsList);
        homeSection.hide()
    resultsSection.show()
    function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}
        showList(resultsList, resultsOL);
    addMarkers(resultsList);
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        resultsSection.hide()
        detailsSection.show()
    })

})    

    

resultsBackButton.click( function(){
    resultsSection.hide()
    homeSection.show()
    
})

detailsBackButton.click( function(){
    detailsSection.hide()
    resultsSection.show()
    
})



// button to switch between list ad map
resultsToggleButton.click( function() {
    
    console.log('clicked resultsToggleButton')
    
    // find out which element is currently visable
    // is the list visable
    var listDisplay = resultsOL.css('display') 
    if (listDisplay == 'block') isListVisable = true
    else isListVisable = false
    
    console.log(isListVisable)
    
    console.log(listDisplay)
    // if the list is visable
    if (isListVisable)
    {
       // we want to show the map and hide the list
        resultsMap.show()
        map.resize()
        resultsOL.hide()
        resultsToggleButton.html('List')
        // change the button text to say "list"
        
    }
    else
    {
      // we want to show the list and hide the map
        resultsOL.show()
        resultsMap.hide()
        resultsToggleButton.html('Map')
        // change the button text to say "Map"
        
        
    }
    
   
})
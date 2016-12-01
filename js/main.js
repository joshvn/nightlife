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


homeGoButton.click( function(){
    var chosenOption = homeDropdown.val()
    console.log("you picked" + chosenOption)
    
    var resultsList = filterAndSortList(peopleList, chosenOption)
    showList(resultsList, resultsOL)
    addMarkers(resultsList)
                
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
                
                homeSection.hide()
                resultsSection.show()
})

resultsBackButton.click( function() {
    resultsSection.hide()
    homeSection.show()
} )


detailsBackButton.click( function() {
    detailsSection.hide()
    resultsSection.show()
} )

resultsToggleButton.click( function() {
    // find out which element is currently visible
    // is the list visible?
    var listDsiplay = resultsOL.css('display')
    if (listDsiplay == 'block') isListVisible = true
    else isListVisible = false
    
    if (isListVisible)
        {
            // we want to show the map and hide `the list
            resultsMap.show()
            map.resize() // get the map to take all the available space.
            resultsOL.hide()
            document.getElementById("toggle").innerHTML = "List"
            
        }
    else
        {
            // we want to show the list
            
            resultsOL.show()
            resultsMap.hide()
            document.getElementById("toggle").innerHTML = "Map"
        }
    
    // if the list is visible, we want to show the map
    
    // if the list is hidden, we want to show the list
    
}
)

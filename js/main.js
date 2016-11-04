// use jQueary to select the HTML elements we're going to manipulate.
var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var homeDropdown = $('#home select')
var resultsOL = $('#results ol')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')


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

                
                

                  

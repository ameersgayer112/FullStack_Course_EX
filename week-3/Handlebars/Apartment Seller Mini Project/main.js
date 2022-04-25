
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    const source = $('#apartments-template').html()
    const template = Handlebars.compile(source)
    let newHTML = template({apartments})
    $('#results').append(newHTML)

    if(apartments.length == 0){
        const source2 = $("#noMatching-template").html()
        const template2 = Handlebars.compile(source2)
        const newHTML2 = template2({msg:"No matching results"})
        $('#results').append(newHTML2)
    }

     
     
}

renderApts(apartments) //renders apartments when page loads
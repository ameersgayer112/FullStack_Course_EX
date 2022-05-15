const fetch = function (input) {
    $.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=HnBco1lG1B9liGieymhE1pQKmb23VWAI`, function (gifs) {
        $("#gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
    })
}


$("#Search").on('click',function(){

    let input = $("#myGif").val()
    console.log(input)
    fetch(input)

})
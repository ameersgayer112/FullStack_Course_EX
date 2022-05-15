const fetch = function () {
    $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=HnBco1lG1B9liGieymhE1pQKmb23VWAI", function (gifs) {
        console.log(gifs.data[0].embed_url)
        $(".gif").append(`<iframe src="${gifs.data[0].embed_url}">`)
    })
}

fetch()
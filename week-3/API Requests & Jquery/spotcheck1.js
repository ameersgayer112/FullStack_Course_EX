$.get("https://www.googleapis.com/books/v1/volumes?q=title:name%of%the%wind", function(result){
    console.log(result.items[0].volumeInfo.description)
})
$('.item').on('click',function(){

    let data = $(this).data().instock
    if(data === true)
    {
        $("#cart").append(`<h2>${$(this).text()}</h2>`)
    }
    
    
})
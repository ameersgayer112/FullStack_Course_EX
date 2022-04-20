$("button").on("click",function(){
   
    $("#list").append(`<li> ${$('#my-input').val()} </li>`)
})

$("#list").on("click","li",function(){
    $(this).remove()
})
$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>My new Blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("blargh") 
  })
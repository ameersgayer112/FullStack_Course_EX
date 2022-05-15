$("#submit").on("click", function () {
    const input = $("#furniture").val()
    $.get(`/priceCheck/${input}`, function (furnData) {
        $("body").append(`<div>${furnData.price}<div>`)
    })
    $("#furniture").val("")
})
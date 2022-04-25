$('.generator').on('click',function(){

    let procid = $(this).closest('div').attr('id')
    let cmpid = $(this).parent('div').parent('div').data().id
    let Bussid =  $(this).closest(".computer").find(".BUS").text()
    alert("proc_id : "+procid + "\nComputer’s data-id : " +cmpid + "\nBuss :" + Bussid)

})

$('.validator').on('click',function(){
    let genratorText = $(this).closest(".computer").find(".generator").text()
    let MBNumber = $(this).closest(".computer").find(".MB").text()
    let QRNumber = $(this).closest(".computer").find(".QR").toArray()
    alert("The generator’s text : " + genratorText + "\nThe MB : " + "\nBoth QRs :" + QRNumber)
})



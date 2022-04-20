$('#container').append('<div class="box"></div>')
$('#container').append('<div class="box"></div>')

$('.box').hover(function () {
    $(this).css('background-color','red')
})

$('.box').mouseleave(function () {
    $(this).css('background-color','#8e44ad')
})


const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function () {
    for (let post of posts) {
        let postBox = $("<div class='post'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#container").append(postBox)
    }

}

$('#container').on('click','.post',function(){
    const $post = $(this)
    const name = $post.text().substring(0, $post.text().indexOf(":"))

    for(let i in posts) {
        if(posts[i].name === name) {
            posts.splice(i, 1)
        }
    }


    $("#container").empty()
    render()
})



$("button").on("click", function () {
    $('#container').empty()
    posts.push({
        name: $("#input-name").val(),
        text: $("#input-text").val()
    })
    render()
})

render()


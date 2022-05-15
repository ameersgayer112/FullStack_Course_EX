let wisdomIdCounter = 3

const wisdom = [{
    id: "w1",
    text: 1
}, {
    id: "w2",
    text: 2
}, {
    id: "w3",
    text: 3
}]


const renderer = function (wisdoms) {
    $("#WisdomClass").empty()
    for (let wis of wisdoms) {
        let addwisdom =
            `<div>
            <span  id="${wis.id}">  ${wis.text} </span>
            <span class="delWisdom"> X </span>
        </div>`
        $('#WisdomClass').append(addwisdom)
    }
}

renderer(wisdom)

$("#Submit").on('click', function () {
    let inputValue = $("#input").val();
    wisdomIdCounter = wisdomIdCounter + 1
    wisdom.push({ id: "w" + wisdomIdCounter, text: inputValue })
    renderer(wisdom)
 
    if (wisdom.length % 2 === 0) {
        localStorage.wisdom = JSON.stringify(wisdom)
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
        localStorage['wisdom'] = JSON.stringify(wisdom)
        console.log(localStorage.wisdom)
    }
    $("#input").val("");
})

$('#remove').on('click', function () {
    localStorage.clear()
})

$('#WisdomClass').on('click','.delWisdom', function () {
    let wisdomid = $(this).closest('div').find('span').attr('id')
    let wisdToRemove = {}
    for(let i=0;i<wisdom.length;i++){
        if(wisdom[i].id === wisdomid){
            wisdom.splice(i,1)
        }
    }
    localStorage.setItem('wisdom',JSON.stringify(wisdom));
    
    console.log(localStorage.wisdom)

})
const { faker } = require('@faker-js/faker');

const makeHuman = function(num){

    let data = {}
    for(let i = 0; i < num ; i++)
    {
        data = faker.fake("{{name.firstName}}, {{image.avatar}}, {{company.companyName}}")
        console.log(data)
    }
}

makeHuman(2)

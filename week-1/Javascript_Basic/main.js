let userResponse

console.log(userResponse) // prints undefined
const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString
console.log(bothStrings)
console.log((undefined || null))
//let username = prompt("What is your username?")
//console.log(username)

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen)
{
    let year = currentYear - yearOfTeslaPurchase
    if(year >= 4)
    {
        console.log("Do You Want to upgrde!!")
    }
    else
    {
        console.log("Are U satisfied with the car ??")
    }
}
else if (!isUSCitizen && boughtTesla )
{
 console.log("Would like to move to the US ??")
} else{
    console.log("Do you want to buy a tesla")
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2)
numbers[3] = 1
numbers.splice(numbers.length - 4,4)
numbers.splice(0,0,0)
console.log(numbers)

let p1 = {
    name : "Jill",
    age : 25,
    city : "Haifae"
}

let p2 = {
    name : "Robert",
    age : 25,
    city : "Haifa"
}

if(p1.age === p2.age && p1.city === p2.city)
{
    console.log("Jill want to date Robert")
}
else if(p1.age === p2.age && p1.city !== p2.city)
{
    console.log("Jill want to date Robert,but couldn’t")
}



let library = {
    books:[ {title:"book1", auther:"person1"},
            {title:"book2", auther:"person2"},
            {title:"book3", auther:"person3"}
    ]


  }
  console.log(library.books[0].auther)

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
//const people = [{name:"",age:""}]
const people = []

for(let i = 0; i < names.length;i++)
{
    people.push({name :  names[i] ,age : ages[i]})
}
console.log(people)

for(p of people)
{
    console.log(p.name + " is " + p[ages] + " years olds !!")
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  
  for(let i = 0; i < posts.length;i++)
  {

      if(posts[i].id == 2)
      {
          posts.splice(i,1)
      }
  }
  console.log(posts)

  const posts2 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  for(let i = 0; i < posts2.length;i++)
  {
      if(posts2[i].id == 2)
      {
          posts2[i].comments.splice(0,1)

      }
  }
  console.log(posts2)

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

  let arr = Object.keys(dictionary)
  console.log(arr)
  for(let variable in dictionary)
  {
      console.log("Words that begin with " + variable + " : \n")
   for(let word of dictionary[variable] )
   {
       console.log(word + "\n")
   }
  }
  



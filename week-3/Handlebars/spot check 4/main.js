const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const source = $("#animals-template").html();
const template = Handlebars.compile(source);
const newHTML = template(animals);

// append our new html to the page
$('.menu').append(newHTML);

const source2 = $("#languages-template").html();
const template2 = Handlebars.compile(source2);
const newHTML2 = template(languages);

$('.menu2').append(newHTML2);
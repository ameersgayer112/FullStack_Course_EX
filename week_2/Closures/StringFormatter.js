const StringFormatter = function()
{
    const capitalizeFirs = function(str)
    {
        return str.charAt(0).toUpperCase()  + str.slice(1).toLowerCase()
    }

    const skewerCase = function(name)
    {
        return name.replace(" ","-")
    }

    return {
        capitalizeFirs : capitalizeFirs,
        skewerCase : skewerCase
    }
}




const formatter = StringFormatter()

console.log(formatter.capitalizeFirs("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box
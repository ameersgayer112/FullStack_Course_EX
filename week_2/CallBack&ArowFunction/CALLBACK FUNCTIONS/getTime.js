const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = func => func(new Date())
  
  getTime(returnTime)
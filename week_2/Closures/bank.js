const Bank = function()
{
 let money = 500

 const depositCash = function(num)
 {
   money =money + num
   return money
 }

 const checkBalance = function()
 {
     console.log(money)
 }

 return {
    deposit: depositCash,
    showBalance : checkBalance
 }

}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
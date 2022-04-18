const coffeeShop = {
    beans: 40,
    monye: 1000,
    beanCost : 20,

    buyBeans: function(numBeans) {

    },
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      
        text = ""

      switch(drinkType) {
        case "latte":
          this.beans -= this.drinkRequirements.latte
          if(this.beans > 0) {
            text = "Your latte is Ready ";
          }
          else{
              text = "Sorry, we're all out of beans"
          }
          break;
        case "americano":
            this.beans -= this.drinkRequirements.americano
            if(this.beans > 0) {
              text = "Your americano is Ready ";
            }
            else{
                text = "Sorry, we're all out of beans"
            }
          break;
        case "doubleShot":
            this.beans -= this.drinkRequirements.doubleShot
            if(this.beans > 0) {
              text = "Your doubleShot is Ready ";
            }
            else{
                text = "Sorry, we're all out of beans"
            }
          break;
        case "frenchPress":
            this.beans -= this.drinkRequirements.frenchPress
            if(this.beans > 0) {
              text = "Your frenchPress is Ready ";
            }
            else{
                text = "Sorry, we're all out of beans"
            }
            break;
        default:
          text = "Sorry, we don't make " + drinkType;
      }

      console.log(text)
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
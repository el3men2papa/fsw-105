

var shopper = {
    groceryCart: ["Pizza", "Meat", "Milk", "Cheeese","Oil" ],
    isOnStock: true,
    isle: "refigerator section", /* I added strings seperate, my string in the arrays did not qualify as strings for the grades */
    price: 5.56,
    cart: function() {
      return this.groceryCart [0] + " $" + this.price;
    }
  }; 

  console.log(shopper.cart())


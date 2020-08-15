//VARIABLES//

var card1 = new card ("wow-gift", "fravega", 1000);
var card1 = new card ("arredo", "tarjeta-especial", 2000);
var card1 = new card ("dexter", "mimo&co", 2500);

//OBJECT//


function card (nombre, importe, descripcion){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.importe = importe;
}



//CARRITO//
function ShoppingCart(){
    var cart = [];
    this.add = function(card){
           cart.push(card);
   } 
 this.get = function() {
         return cart;
    }
 this.remove = function(id){
   }
 
 this.getById = function(id){
   var product =[];
    cart.forEach(function(currentCard){
       if(currentCard.id === id){
          card.push(currentCard);
    }
 })
 
 return card;
  }
 }
 
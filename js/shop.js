// var customername = "Tiraton";
// var price = 10;
// var quantity = 3;
// var totalPrice = price * quantity;

// document.getElementById("customer-name").innerHTML = "Tiraton";
// document.getElementById("price").innerHTML = "$" + totalPrice;

// array variable
var products = [
	"Doughnuts",
	"Speacial Day!! Cupcake",
	"Pies Apple",
	"Pastries mix fruit and cheese",
	"Stawberry Cheese Cake"];

var prices = [10, 5, 15, 9, 5];

var productsText = "";
var productsElement = document.getElementById("product-list");

for (var i = 0; i<5 ; i++){
	productsText += "<li class='list-group-item'>" + products[i] +"<span class='badge'>$" + prices[i] + "</span></li>";
};

/*product.forEach(function(element, index){
	productsText += "<li class='list-group-item'>" + element +"<span class='badge'>$" + price[index] + "</span></li>";
});*/

// productsText = productsText + "<li class='list-group-item'>" + products[0] +"<span class='badge'>$" + price[0] + "</span></li>";

productsElement.innerHTML = productsText;

//----------------------Total price---------------------------
var sum = 0;
var priceText = "";
var totalPrice = document.getElementById("price");

for (var i = 0; i<5 ; i++){
	sum += prices[i];
};

priceText = sum * 0.75;

totalPrice.innerHTML = "$" + priceText + " <span class='badge progress-bar-danger'>25% off</span>";

//My name
//document.getElementById("customer-name").innerHTML = "Tiraton";

// -----------------Date().getHours()---------------------------
var d = new Date(); //Get the day as a number (1-31)
var h = d.getHours(); //Get the hour (0-23)

var gotTime = document.getElementById("dateTime");

if(h>4 && h<12){
	gotTime.innerHTML = "Good morning, " + "<span id='customer-name'> Tiraton </span>!";

}else if(h>=12 && h<6){
gotTime.innerHTML = "Good afternoon, " + "<span id='customer-name'> Tiraton </span>!";

}else{
	gotTime.innerHTML = "Good evening, " + "<span id='customer-name'> Tiraton </span>!";

}

// gotTime.innerHTML="KK";
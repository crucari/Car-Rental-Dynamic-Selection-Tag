var Auto = {
	name: "Providence Car Rentals",
	cars: [{
		type: "Economy Car",
		price: "150.00",
		quantity: 40,
		booked: 0,
	}, {
		type: "Luxury Car",
		price: "350.00",
		quantity: 20,
		booked: 0,
	}, {
		type: "Limo",
		price: "$450.00",
		quantity: 5,
		booked: 0,
	}, {
		type: "Stretch Limo",
		price: "$600.00",
		quantity: 20,
		booked: 0,
	}],
	carAvail: function(i) {
		return this.cars[i].quantity - this.cars[i].booked;
	},
	bookCars: function(i) {
		this.cars[i].booked++;
	},
};
//pushes renter's name/selected car into array// 
var rentals = {
	Renters: [],
	addRenter: function(renterName, carType) {
		{
			this.Renters.push({
				Name: renterName,
				Car: carType
			});
		}
	},
}
//Code for Dropdown(dynamic)// 
for (var i = 0; i < Auto.cars.length; i++) {
	var dropdown = document.createElement("OPTION");
	dropdown.setAttribute("value", i);
	dropdown.setAttribute("id", i);
	dropdown.innerHTML = Auto.cars[i].type;
	document.getElementById("carSelection").appendChild(dropdown);
	document.getElementById("price").innerHTML = Auto.cars[0].price;
	document.getElementById("available").innerHTML = Auto.carAvail(0);
}
//Functions that display price and avaliability// 
function displayDetails(value) {
	document.getElementById("price").innerHTML = Auto.cars[value].price;
	document.getElementById("available").innerHTML = Auto.carAvail(value);
}
//If-else statement functions for name/car selection// 
function carRent() {
	var renterName = document.getElementById("rname").value;
	if (renterName == "") {
		alert("Please enter your name");
		return;
	}
	var carType = document.getElementById("carSelection").value;
	if (carType == "") {
		alert("Select a car");
		return;
	}
	//methods--1)add selected car to booked, 2) adds renter name/car type to array, and 3) shows avail/price// 
	Auto.bookCars(carType);
	rentals.addRenter(renterName, carType);
	displayDetails(carType);
	alert("You have rented a car");
}
//End of Code//
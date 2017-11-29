var Auto = {
    cars: [
        {
            name: "economy car",
            price: "$150.00",
            available: 40
        },
        {
            name: "luxury car",
            price: "$350.00",
            available: 20
        },
        {
            name: "Limo",
            price: "$450.00",
            available: 5
        },
        {
            name: "Stretch Limo",
            price: "$600.00",
            available: 2
        },
    ],
    name: "Prov Car Rentals"
}




function displayDetails(car) {
    document.getElementById("price").innerHTML = Auto.cars[car].price;
    document.getElementById("available").innerHTML = Auto.cars[car].available;
    
}

for (var i= 0; i < Auto.cars.length; i++)  {
    console.log("start")
    var dropbtn = document.createElement("INPUT");
    dropbtn.setAttribute("type", "radio");
    dropbtn.setAttribute("name","carType");
    dropbtn.setAttribute("value",i);
    dropbtn.setAttribute("id", "car" + i);
    dropbtn.setAttribute("onclick", "displayDetails(" + i +")");

    
    var dropLbl = document.createElement("LABEL");
    dropLbl.innerHTML = Auto.cars[i].name; 
    document.getElementById("carSection").appendChild(dropbtn);
    document.getElementById("carSection").appendChild(dropLbl);
    console.log("stop");
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();  
    if (!document.getElementById("confirmation").checked) {
        alert("Please agree to terms");
        return; 
    }

    var cars = document.getElementsByName("roomType");
    var carSelected = "";
   for (var i = 0; i < cars.length; i++) {
      if (cars[i].checked) {  
          carSelected = cars[i].value;
          break; 
         }
          
      }
      
      if(carSelected == "") {
          alert("Pick a car please.");
          return; 
          
      }
      
      alert("You have reserved car" + Auto.cars[parseInt(carSelected)].name + ".");
}
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

var renterNames = {
    renters: [ ], 
    addRenter: function(rName,name ) {
        {
       this.renters.push({
           name: rName, 
           cartype: name
       });
        }
     }//function collects renter name and type and puts it in renter's array// 
   }



function displayDetails(value) {
    var value = document.getElementById("car").value //giving value of car they picked and passing it through the function// 
    document.getElementById("price").innerHTML = Auto.cars[value].price;
    document.getElementById("available").innerHTML = Auto.cars[value].available;
    
}

for (var i= 0; i < Auto.cars.length; i++)  {
    console.log("start")
    var dropbtn = document.createElement("OPTION");
    dropbtn.setAttribute("name","carType");
    dropbtn.setAttribute("value",i);
    dropbtn.setAttribute("id", "car" + i);
    dropbtn.setAttribute("onclick", "displayDetails(" + i +")");
    dropbtn.innerHTML=Auto.cars[i].name;  //changing innerhtml of object to get name of car// 
    document.getElementById("car").appendChild(dropbtn)   //told option tags to go into empty select, gave the empty tag id of car// 
    
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
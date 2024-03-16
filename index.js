// Ways to create an array
const array_name01 = ["item1", "item2", "item3"];

// Spanning multiple lines
const array_name02 = [
    "item1",
    "item2",
    "item3",
];

// Create an array and then provide the elements
const array_name03 = [];
array_name03[0]= "item1";
array_name03[1]= "item2";
array_name03[2]= "item3";


//Create array and assign values - Do not use
const array_name04 = new Array("item1", "item2", "item3");

// Access Array elements
let item = array_name01[0];

//Changing an Array element
array_name03[0] = "item4";

//Access the full array
document.getElementById("demo").innerHTML = array_name01;

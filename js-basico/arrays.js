var frutas = ["Banana", "Pera", "Manzana", "Coco"];
console.log(frutas); 

// MÉTODO PUSH
// El push agrega elementos al final del array
var masFrutas = frutas.push("Fresa"); 

// MÉTODO POP
// El pop lo que hace es eliminar el último elemento del array
var masFrutas = frutas.pop("Fresa"); 

// MÉTODO UNSHIFT
// El unshift  agrega elementos al inicio del array
var nuevaLongitud = frutas.unshift("Uvas")

// MÉTODO SHIFT
// El shift  eliminar elementos al inicio del array
var nuevaLongitud = frutas.shift("Uvas")

//Encuentra en que posición se encuentra pera, en este caso en la posición 1
var posicion = frutas.indexOf("Pera");  
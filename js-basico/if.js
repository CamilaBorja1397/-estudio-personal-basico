//Las condicionales son las reglas para validar si es verdadero o falso, una de estas es la condicional if 

var edad = 18; 

if(edad === 18){
    console.log("Puedes votar, será tú primera votación.")
}else if( edad > 18){
    console.log("Puedes votar de nuevo!");
}else{
    console.log("Aún no puedes votar!")
}

condition ? ture : false; 

var numero = 1; 
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";
console.log(resultado);    
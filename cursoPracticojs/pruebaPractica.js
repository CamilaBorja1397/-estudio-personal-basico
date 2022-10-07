const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('calcular');
const rsp = document.querySelector('#resultado');

//Suma básica en una función
function onClick(){
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    rsp.innerText = "Resultado: " + sumaInput
}
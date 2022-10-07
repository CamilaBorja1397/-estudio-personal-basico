var estudiantes = ["maria", "camila", "sergio", "jessica",];
function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiantes}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes); 
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}


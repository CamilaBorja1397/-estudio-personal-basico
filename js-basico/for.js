var estudiantes = ["maria", "camila", "sergio", "jessica",];
function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
   saludarEstudiantes(estudiantes[i]); 
} 

// OTRA OPCIÓN
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}   
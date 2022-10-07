var articulos =[
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 2500},
    {nombre: "audifonos", costo: 1700}
];

// MÉTODOS QUE ME AYUDAN A RECORRER EL ARRAY
// FILTER ME AYUDA A FILTRAR CIERTAS COSAS, VALIDA SI ALGO ES VERDAD O FALSO Y LO PONE EN UN NUEVO ARRAY. EL MÉTODO NO MODIFICA EL ARRAY ORIGINAL

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 
})

// METODO DE MAP, ME AYUDA A MAPEAR CIERTOS articulos, ME GENERA UN NUEVO ARRAY Y NO MODIFICA EL ORIGINAL
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

// METODO FIND, NOS AYUDA A ECONTRAR ALGO ADENTRO DEL ARTICULO. lo que hace es validar true false. 
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
})

// METODO FOREACH ESTE METODO NO GENERA UN ARRAY FILTA SOBRE EL ARRAY EXISTENTE DE ARTUCULOS 
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// METODO SOME, NOS REGRESA DE IGUAL FORMA UNA VALIDACION DE VERDADERO O FALSO, SE GENERA UN NUEVO ARRAY
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700 
})

// METODO PUSH NOS PERMITE AGREGAR UNO O MÁS ELEMENTOS AL FINAL DE UN ARRAY
// METODO SHIFT NOS PERMITE ELIMIANR UN ELEMENTO DEL ARRAY. 

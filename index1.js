function nombresEnMayusculas(nombres) {
  if (!Array.isArray(nombres)) {
    return "Error: Debes proporcionar un array de nombres.";
  }

  return nombres
    .filter(nombre => typeof nombre === "string") 
    .map(nombre => nombre.trim().toUpperCase());  
}
function nombresEnMayusculas(nombres) {
  if(!Array.isArray(nombres)){
    return "error debes de proporcionar un array de nombre"
  }
  return nombres
   .filter(nombre => typeof nombre === "string")
   .map(nombre => nombre,trim().toUpperCase())
}

console.log(nombresEnMayusculas("ana", "luis", "juan", 123, null, "maria"));






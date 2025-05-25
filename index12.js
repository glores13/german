function convertirAObjeto(arr) {
    return Object.fromEntries(arr);
  }
  
  // Ejemplo
  const arr = [["nombre", "Ana"], ["edad", 25]];
  console.log(convertirAObjeto(arr)); // { nombre: "Ana", edad: 25 }
  
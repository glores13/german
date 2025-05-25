function obtenerEntradas(obj) {
    return Object.entries(obj);
  }
  
  // Ejemplo
  console.log(obtenerEntradas({ nombre: "Luis", edad: 30 }));
  // [["nombre", "Luis"], ["edad", 30]]
  
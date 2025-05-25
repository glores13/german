function tieneNegativos(arr) {
    return arr.some(num => num < 0);
  }
  
  // Ejemplo
  console.log(tieneNegativos([1, 2, -3, 4])); // true
  
  
function agruparElementos(arreglo, claveAgrupacion) {
    return Object.groupBy(arreglo, elemento => elemento[claveAgrupacion]);
  }
  
  const animales = [
    { nombre: "Perro", tipo: "Mamífero" },
    { nombre: "Gato", tipo: "Mamífero" },
    { nombre: "Loro", tipo: "Ave" },
    { nombre: "Águila", tipo: "Ave" }
  ];
  
  console.log(agruparElementos(animales, "tipo"));
  
  
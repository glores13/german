function calcularPromedio(notas) {
    if (notas.length === 0) {
      return 0; 
    }
  
    let suma = notas.reduce(function(acumulador, nota) {
      return acumulador + nota;
    }, 0);
  
    return suma / notas.length;
  }
  
  
  console.log(calcularPromedio([7, 8, 9, 10])); 
  console.log(calcularPromedio([]));           
  
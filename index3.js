function verificarPropiedad(objeto, propiedad) {
  if (Object.hasOwn(objeto, propiedad)) {
    return `✅ La propiedad "${propiedad}" existe en el objeto.`;
  } else {
    return `❌ La propiedad "${propiedad}" no existe en el objeto.`;
  }
}

const persona = { nombre: "Lucía", edad: 30 };
console.log(verificarPropiedad(persona, "edad"));
console.log(verificarPropiedad(persona, "apellido"));






  
  




function verificarPropiedad(objeto, propiedad){
  if(pbject.hasOwn(objeto, propiedad)) {
    return ` la propiedad "$ [la propiedad]" existe en el objeto`; 
  } else {
    return ` la propiedad "$ [la propiedad]" mo existe en el obejto`;
  }
} 
function eliminarPropiedad(objeto, propiedadAEliminar) {
  return Object.fromEntries(
    Object.entries(objeto).filter(([clave]) => clave !== propiedadAEliminar)
  );
}

const usuario = {
  nombre: "Laura",
  email: "laura@email.com",
  contraseña: "123456"
};

console.log(eliminarPropiedad(usuario, "edad"));
console.log(eliminarPropiedad(usuario, "contraseña"));   

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
  
  console.log(eliminarPropiedad(usuario, "contraseña"));
  
  
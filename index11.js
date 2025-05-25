function congelarObjeto(obj) {
    return Object.freeze(obj);
  }
  
  // Ejemplo
  const config = { tema: "oscuro" };
  const configCongelado = congelarObjeto(config);
  configCongelado.tema = "claro"; // No cambia
  console.log(configCongelado); // { tema: "oscuro" }
  
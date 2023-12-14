function manufacture(gifts, materials) {
  let soluciones: string[] = [];
  let materialsArray = materials.split("");

  for (let i = 0; i < gifts.length; i++) {
    let regaloValido = gifts[i]
      .split("")
      .every((gift) => materialsArray.includes(gift));

    if (regaloValido) {
      soluciones.push(gifts[i]);
    }
  }

  return soluciones;
}

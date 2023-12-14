//En el peor de los casos recorremos todo el array de gifts original complejidad O(n) siendo n el numero de elementos que hay en la lista
function findFirstRepeated(gifts) {
  const seen = new Set();
  for (const gift of gifts) {
    if (seen.has(gift)) {
      return gift;
    }
    seen.add(gift);
  }

  return -1; // Si no se encuentra nigun repetido
}

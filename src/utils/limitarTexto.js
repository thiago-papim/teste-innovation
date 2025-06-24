function limitarTexto(texto, limite = 50) {
  if (texto.length <= limite) return texto;

  const palavras = texto.split(" ");
  let resultado = "";

  for (let palavra of palavras) {
    if ((resultado + palavra).length + 1 > limite) break;
    resultado += (resultado ? " " : "") + palavra;
  }

  return resultado + "...";
}

function arrumarTextoMaiusculo(texto) {
  return texto
    .toLowerCase()
    .split(" ")
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");
}

export { limitarTexto, arrumarTextoMaiusculo };

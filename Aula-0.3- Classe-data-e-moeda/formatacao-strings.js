function formatarNome(nome) {

  console.log(`Nome em maiúsculas: ${nome.toUpperCase()}`);

  console.log(`Nome em minúsculas: ${nome.toLowerCase()}`);

  const numeroDeLetras = nome.replace(/\s/g, "").length; 
  console.log(`Número de letras: ${numeroDeLetras}`);
}

formatarNome("Arthur Fukunaga");

function converterSalario(salarioEmReal) {
  // Taxas de conversão
  const taxaDolar = 0.176;
  const taxaEuro = 0.16;

  const salarioEmDolar = salarioEmReal * taxaDolar;
  const salarioEmEuro = salarioEmReal * taxaEuro;

  const formatoDolar = salarioEmDolar.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formatoEuro = salarioEmEuro.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  console.log(`Salário em Real: ${salarioEmReal.toFixed(2)} R$`);
  console.log(`Salário em Dólar: ${formatoDolar}`);
  console.log(`Salário em Euro: ${formatoEuro}`);
}

converterSalario(2500.30); 

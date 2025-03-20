const dataFutura = () => {
 
  const hoje = new Date();

  hoje.setDate(hoje.getDate() + 3);

  hoje.setMonth(hoje.getMonth() + 2);

  hoje.setFullYear(hoje.getFullYear() + 1);

  const dia = hoje.getDate().toString().padStart(2, "0");
  const mes = (hoje.getMonth() + 1).toString().padStart(2, "0"); // getMonth() retorna 0-11, então adiciona 1
  const ano = hoje.getFullYear();

  console.log(`${dia}/${mes}/${ano}`);
};

dataFutura();

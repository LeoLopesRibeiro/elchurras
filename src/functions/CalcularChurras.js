export default function CalcularChurras({
  carnesSelecionadas,
  bebidasSelecionadas,
  countCrianca,
  countHomem,
  countMulher,
}) {

  let precoTotal = 0;
  // Contas carnes

  let kgHomem = 600 * countHomem;
  let kgMulher = 400 * countMulher;
  let kgCrianca = 250 * countCrianca;

  let kgCarneTotal = kgHomem + kgMulher + kgCrianca;

  let kgPorCarne = (kgCarneTotal / carnesSelecionadas.length).toFixed(2);

  carnesSelecionadas.forEach((carne) => {
    carne.preco = Number((carne.preco * kgPorCarne).toFixed(2));
    carne.kg = Number((kgPorCarne / 1000).toFixed(2));
    precoTotal += carne.preco;
  });

  // Contas bebidas

  let litrosAdulto = countHomem * 1500 + countMulher * 1500;
  let litrosCrianca = countHomem * 750;

  let alcolico = false;
  let quantBebidasAlcolicas = 0;

  bebidasSelecionadas.forEach((bebida) => {
    if (bebida.alcolico == true) {
      alcolico = true;
      quantBebidasAlcolicas++;
    }
  });

  if (alcolico) {
    let litrosBebidasPorAdulto = litrosAdulto / bebidasSelecionadas.length;
    let litrosBebidasPorCrianca =
      litrosCrianca / bebidasSelecionadas.length - quantBebidasAlcolicas;

    bebidasSelecionadas.forEach((bebida) => {
      if (bebida.alcolico == true) {
        bebida.garrafa = Math.ceil(litrosBebidasPorAdulto / bebida.garrafa);
      } else {
        bebida.garrafa = Math.ceil(
          (litrosBebidasPorAdulto + litrosBebidasPorCrianca) / bebida.garrafa
        );
      }

      bebida.preco = Number((bebida.preco * bebida.garrafa).toFixed(2));
      precoTotal += bebida.preco;
    });
  } else {
    let litrosTotais = litrosAdulto + litrosCrianca;
    let litrosPorBebida = litrosTotais / bebidasSelecionadas.length;

    bebidasSelecionadas.forEach((bebida) => {
      bebida.garrafa = Math.ceil(litrosPorBebida / bebida.garrafa);

      bebida.preco = Number((bebida.preco * bebida.garrafa).toFixed(2));
      precoTotal += bebida.preco;
    });
  }

  let convidadosTotais = countHomem + countMulher + countCrianca;
  let kgCarvao = (kgCarneTotal / 1000).toFixed(2);
  let sacoCarvao = Math.ceil(kgCarvao / 2);
  let salKg = (kgCarneTotal * 0.02) / 1000;
  let paoKg = (convidadosTotais * 2 * 50) / 1000;
  let arrozKg = (convidadosTotais * 100) / 1000;
  let sacoArroz = Math.ceil(arrozKg / 5);
  let farofaKg = (convidadosTotais * 70) / 1000;
  let sacoFarofa = Math.ceil(farofaKg / 0.5);

  const custos = {
    carnes: carnesSelecionadas,
    bebidas: bebidasSelecionadas,
    outros: {
      geral: [
        {
          icon: "carvao",
          nome: "Carvão",
          kg: Number(kgCarvao),
          preco: sacoCarvao * 17,
        },
        {
          icon: "sal",
          nome: "Sal",
          kg: salKg,
          preco: Math.ceil(salKg) * 5,
        },
      ],
      acompanhamentos: [
        {
          icon: "arroz",
          nome: "Arroz",
          kg: arrozKg,
          preco: sacoArroz * 20,
        },
        {
          icon: "farofa",
          nome: "Farofa",
          kg: farofaKg,
          preco: sacoFarofa * 8,
        },
        {
          icon: "pao",
          nome: "Pão",
          kg: paoKg,
          preco: convidadosTotais * 2 * 0.5,
        },
      ],
    },
    locacao: {},
    preco_total: precoTotal,
    rateio: 0,
  };

  custos.outros.geral.forEach((valor) => {
    custos.preco_total += valor.preco;
  });

  custos.outros.acompanhamentos.forEach((valor) => {
    custos.preco_total += valor.preco;
  });

  let rateio = custos.preco_total / (countHomem + countMulher);
  custos.rateio = rateio;

  return custos;
}

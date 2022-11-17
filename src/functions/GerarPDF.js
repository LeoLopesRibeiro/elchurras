import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

export default async function GerarPDF(resultados, data, responsavel, contato) {
  const htmlPDF = `
      <!DOCTYPE html>
      <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Pdf Content</title>
        </head>
        <body>
          <h1>Meu churrasco</h1>
          <div>
            <h2>Carnes:</h2>
            <div>
              <table>
                <tr style="text-align: left">
                  <th style="width: 150px">Carne</th>
                  <th style="width: 150px">KG</th>
                  <th style="width: 150px">Preço (R$)</th>
                </tr>
                ${resultados.carnes
                  .map((carne) => {
                    return `
                    <tr>
                      <td>${carne.nome}</td>
                      <td>${Intl.NumberFormat("pt-BR").format(carne.kg)} kg</td>
                      <td>${Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(carne.preco)}
                      </td>
                    </tr>
                  `;
                  })
                  .join("")}
              </table>
            </div>
          </div>
          <div>
            <h2>Bebidas:</h2>
            <div>
              <table>
                <tr style="text-align: left">
                  <th style="width: 150px">Bebida</th>
                  <th style="width: 150px">Unidade</th>
                  <th style="width: 150px">Preço (R$)</th>
                </tr>
                ${resultados.bebidas
                  .map((bebida) => {
                    return `
                    <tr>
                      <td>${bebida.nome}</td>
                      <td>${bebida.garrafa} (${
                      bebida.litragem < 1000
                        ? bebida.litragem
                        : bebida.litragem / 1000
                    }${bebida.litragem < 1000 ? "ml" : "L"})</td>
                      <td>${Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(bebida.preco)}
                      </td>
                    </tr>
                  `;
                  })
                  .join("")}
              </table>
            </div>
          </div>
          <div>
            <h2>Outros:</h2>
            <div>
              <div>
                <h3>Geral</h3>
                <table>
                  <tr style="text-align: left">
                    <th style="width: 150px">Item</th>
                    <th style="width: 150px">KG</th>
                    <th style="width: 150px">Preço (R$)</th>
                  </tr>
                  ${resultados.outros.geral
                    .map((item) => {
                      return `
                      <tr>
                        <td>${item.nome}</td>
                        <td>${Intl.NumberFormat("pt-BR").format(
                          item.kg
                        )} kg</td>
                        <td>${Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.preco)}
                        </td>
                      </tr>
                    `;
                    })
                    .join("")}
                </table>
              </div>
              <div>
                <h3>Acompanhamentos</h3>
                <table>
                  <tr style="text-align: left">
                    <th style="width: 150px">Item</th>
                    <th style="width: 150px">KG</th>
                    <th style="width: 150px">Preço (R$)</th>
                  </tr>
                  ${resultados.outros.acompanhamentos
                    .map((item) => {
                      return `
                      <tr>
                        <td>${item.nome}</td>
                        <td>${Intl.NumberFormat("pt-BR").format(
                          item.kg
                        )} kg</td>
                        <td>${Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.preco)}
                        </td>
                      </tr>
                    `;
                    })
                    .join("")}
                </table>
              </div>
            </div>
          </div>
          <div>
            <table style="width: 100%">
              <tr>
                <td style="width: 50%">
                  <p style="font-size: 26px"><strong>Total:</strong> ${Intl.NumberFormat(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  ).format(resultados.preco_total)}</p>
                </td>
                <td style="width: 50%">
                  <p style="font-size: 26px"><strong>Rateio:</strong> ${Intl.NumberFormat(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  ).format(resultados.rateio)}</p>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <h2>Informações do evento</h2>
            <p><strong>Local:</strong> ${resultados.locacao.rua}, ${
    resultados.locacao.numero
  }, ${resultados.locacao.bairro}, ${resultados.locacao.cidade}</p>
            <p><strong>Data:</strong> ${data.dia}/${data.mes}/${data.ano}</p>
            <p><strong>Responsável:</strong> ${responsavel}</p>
            <p><strong>Contato:</strong> (${contato.substr(
              0,
              2
            )}) ${contato.substr(2, 5)}-${contato.substr(7, 10)}</p>
          </div>
        </body>
      </html>
  `;

  const file = await Print.printToFileAsync({
    html: htmlPDF,
    base64: false,
  });

  await shareAsync(file.uri);
}

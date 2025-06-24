export const generateMetadata = () => ({
  title: "Innovation Brindes - Produtos",
});

import Header from "components/Header";
import Itens from "components/Itens";

export default async function Produtos() {
  const response = await fetch(
    "https://apihomolog.innovationbrindes.com.br/api/site/v2/busca/busca-todos-produtos-dev"
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Erro na requisição: ${response.status}\n${text}`);
  }

  const json = await response.json();

  const dados = json.dados.map((e) => {
    const valor =
      e.valor_home === ("0.0" || "0.00")
        ? "10.00"
        : Number(e.valor_home).toFixed(2);
    return {
      ...e,
      valor_home: valor,
    };
  });

  return (
    <div className="mb-20">
      <Header />
      <Itens dados={dados} />
    </div>
  );
}

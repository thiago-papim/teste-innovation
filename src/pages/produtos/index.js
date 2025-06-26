import { useEffect, useState } from "react";
import Itens from "components/Itens";
import Header from "components/Header";

export default function Produtos() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await fetch(
          "https://apihomolog.innovationbrindes.com.br/api/site/v2/busca/busca-todos-produtos-dev"
        );
        const json = await response.json();

        const dadosTratados = json.dados.map((e) => {
          const valor =
            e.valor_home === "0.0" || e.valor_home === "0.00"
              ? "10.00"
              : Number(e.valor_home).toFixed(2);
          return { ...e, valor_home: valor };
        });

        console.log(dadosTratados);
        

        setDados(dadosTratados);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      }
    };

    buscarDados();
  }, []);

  return (
    <div className="mb-20">
      <Header />
      <Itens dados={dados} />
    </div>
  );
}

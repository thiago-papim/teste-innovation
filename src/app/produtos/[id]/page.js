import CarrinhoItem from "components/CarrinhoItem";
import GaleriaDeImagens from "components/GaleriaDeImagens";
import Header from "components/Header";
import { arrumarTextoMaiusculo } from "utils/limitarTexto";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const response = await fetch(
    `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${id}`
  );
  const data = await response.json();

  const titulo = arrumarTextoMaiusculo(data.nome);

  return {
    title: titulo + " | Innovation Brindes",
  };
}

export default async function Produto({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${id}`,
    { cache: "no-store" }
  );
  const data = await response.json();

  const valorFinal =
    data.valor_home === ("0.00" || "0.0") ? "10.00" : data.valor_home;
    
  data.valor_home = valorFinal;

  const verificaCores = data.cores?.length > 0;
  const imagens = data.img_produtos.map((image) => image.url);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row w-[90%] max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <GaleriaDeImagens imagens={imagens} />
        </div>

        <div className="w-full lg:w-1/2 px-6 py-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {arrumarTextoMaiusculo(data.nome)}
          </h1>
          <p className="text-xl font-semibold text-green-700">
            R$ {Number(data.valor_home).toFixed(2).replace(".", ",")}
          </p>
          <p className="text-gray-700">{data.caracteristicas}</p>

          {verificaCores && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Cores disponíveis:</p>
              <div className="flex gap-2 flex-wrap">
                {data.cores.map((cor) => (
                  <div
                    key={cor.rgb_cores}
                    title={cor.descricao_cor}
                    style={{
                      backgroundColor: cor.rgb_cores.startsWith("#")
                        ? cor.rgb_cores
                        : `#${cor.rgb_cores}`,
                    }}
                    className="w-7 h-7 rounded-full border border-gray-400 cursor-pointer hover:scale-110 transition"
                  />
                ))}
              </div>
            </div>
          )}

          <CarrinhoItem item={data} />
        </div>
      </div>
    </div>
  );
}

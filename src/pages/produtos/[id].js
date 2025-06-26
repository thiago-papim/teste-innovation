import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CarrinhoItem from "components/CarrinhoItem";
import GaleriaDeImagens from "components/GaleriaDeImagens";
import Header from "components/Header";
import { arrumarTextoMaiusculo } from "utils/limitarTexto";
import Loading from "components/Loading";

export default function Produto() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduto = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://apihomolog.innovationbrindes.com.br/api/site/v2/produto/${id}`
        );
        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const json = await response.json();
        const valorFinal =
          json.valor_home === "0.00" || json.valor_home === "0.0"
            ? "10.00"
            : json.valor_home;
        json.valor_home = valorFinal;

        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  if (loading)
    return (
      <>
        <Header />
        <Loading />
      </>
    );

  const verificaCores = data.cores?.length > 0;
  const imagens = data.img_produtos?.map((image) => image.url) || [];

  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>{arrumarTextoMaiusculo(data.nome)} | Innovation Brindes</title>
        <meta name="description" content={data.caracteristicas} />
      </Head>

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

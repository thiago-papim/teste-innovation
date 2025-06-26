import Image from "next/image";
import Link from "next/link";
import React from "react";
import { limitarTexto } from "utils/limitarTexto";
import Loading from "./Loading";

export default function Itens({ dados }) {
  const coresArr = [
    "#7d2e27",
    "#31629d",
    "#4a5d75",
    "#5a9ec1",
    "#7fbb03",
    "#424242",
    "#eeeeee",
    "#892b0d",
    "#64f735",
    "#0ee8b7",
    "#5a9ec1",
    "#ff6100",
    "#ffaf01",
    "#2f1f41",
  ];

  const valorFinal = (valor) => {
    return Number(valor).toFixed(2).replace(".", ",");
  };

  return (
    <div className="flex sm:gap-14 gap-3 flex-wrap justify-center mt-10 px-2 sm:mx-20">
      {dados.length
        ? dados.map((item, i) => (
            <div
              key={i}
              className="mb-10 sm:w-60 w-36 flex flex-col items-center"
            >
              <div className="h-20 mb-2">
                <p className="font-bold opacity-80 text-center leading-6 line-clamp-2 overflow-hidden text-ellipsis break-words">
                  {item.nome}
                </p>
                <p className="font-medium text-center opacity-65">
                  {item.codigo_produto}
                </p>
              </div>
              <div
                className="relative bg-white flex flex-col justify-between items-start sm:w-64 w-36 
          rounded-sm border-2 border-gray-200"
              >
                <p className="absolute text-sm right-1 top-0 font-extrabold text-cyan-500 bg-gray-50">
                  EXCLUSIVO!
                </p>
                <Image
                  src={item.img_home_produto}
                  alt="img-produto"
                  width={252}
                  height={260}
                  className="-mb-4"
                />
                <div className="relative flex border-2 bg-white border-gray-100 mr-5 rounded-tr-xl border-l-0 overflow-visible w-[80%] h-14">
                  <div className="relative z-10 -mt-4 ml-2 bg-white rounded-full w-20">
                    <Image
                      src="/images/caixa.svg"
                      alt="embalagem"
                      height={60}
                      width={60}
                    />
                  </div>
                  <p className="font-extrabold text-gray-500/70 leading-4 tracking-tight text-[12px] sm:py-2 sm:pl-2 pr-1 w-[200px]">
                    com embalagem especial
                  </p>
                </div>

                <p className="text-sm overflow-hidden px-4 h-24 sm:h-16 pt-3 text-gray-500/90 font-bold">
                  {limitarTexto(item.caracteristicas, 50)}
                </p>
                <p className="px-4 text-gray-500/90 font-bold mb-2 text-sm">
                  Cores:
                </p>
                <div className="flex flex-wrap w-full max-w-sm gap-1 px-4">
                  {coresArr.map((cor, i) => (
                    <React.Fragment key={`${cor}-${i}`}>
                      {(i === 6 || i === 10) && (
                        <div
                          key={`break-${i}`}
                          className="hidden sm:block w-full"
                        />
                      )}
                      <div
                        key={cor}
                        style={{
                          backgroundColor: cor.startsWith("#")
                            ? cor
                            : `#${cor}`,
                        }}
                        className="w-4 h-4 rounded-full cursor-pointer hover:scale-110 transition flex"
                      />
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex flex-col sm:items-end w-full px-3 sm:px-4 text-gray-500 font-medium -mt-4">
                  <p className="sm:text-left text-sm mt-6 sm:-mt-1">
                    a partir de <br />
                    <span className="font-extrabold text-2xl leading-5 text-gray-600">
                      R$ {valorFinal(item.valor_home)}
                    </span>
                  </p>
                  <p className="text-sm tracking-tight">
                    gerado pela melhor oferta
                  </p>
                </div>
              </div>
              <Link href={`/produtos/${item.codigo_produto}`}>
                <a className="bg-[#80BC00] text-white p-1 text-lg mt-3 rounded-md font-extrabold text-center block w-full">
                  CONFIRA
                </a>
              </Link>
            </div>
          ))
        : <Loading />}
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { limitarTexto } from "utils/limitarTexto";

export default function Itens({ dados }) {

  const valorFinal = (valor) => {
    return Number(valor).toFixed(2).replace(".", ",");
  };

  return (
    <div className="flex gap-3 flex-wrap justify-center mt-10 px-2">
      {dados.map((item, i) => (
        <div
          key={i}
          className="rounded-lg shadow-xl bg-white flex flex-col justify-between items-center sm:w-56 w-36 py-4"
        >
          <p className="text-center font-bold h-12 overflow-hidden px-2">
            {item.nome}
          </p>
          <p className="text-center text-sm h-10 overflow-hidden px-2">
            COD: {item.codigo_produto}
          </p>
          <Image
            className="p-0"
            src={item.img_home_produto}
            alt="img-produto"
            width={300}
            height={200}
          />
          <p className="text-sm overflow-hidden px-2 h-20">
            {limitarTexto(item.caracteristicas, 70)}
          </p>
          <p className="text-sm text-center border-t-1 mt-2 py-2 border-gray-200">
            A partir de
            <br />
            <span className="text-xl font-bold">
              {" "}
              R$ {valorFinal(item.valor_home)}
            </span>
          </p>
          <Link
            href={`/produtos/${item.codigo_produto}`}
            className="bg-[#80BC00] text-white p-1 text-sm w-[90%] mt-2 rounded-sm font-bold text-center"
          >
            CONFIRA
          </Link>
        </div>
      ))}
    </div>
  );
}

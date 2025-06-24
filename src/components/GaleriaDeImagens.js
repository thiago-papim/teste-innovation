"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaDeImagens({ imagens = [] }) {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);

  return (
    <div className="flex flex-col items-center gap-4 w-full bg-red-20">
      <div className="relative w-full max-w-md aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
        <Image
          src={imagemPrincipal}
          alt="Imagem principal"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto w-[100%] justify-center">
        {imagens.map((img, i) => (
          <div
            key={i}
            className={`relative w-20 h-20 cursor-pointer border-2 rounded ${
              img === imagemPrincipal ? "border-[#80BC00]" : "border-gray-300"
            }`}
            onClick={() => setImagemPrincipal(img)}
          >
            <Image
              src={img}
              alt={`Miniatura ${i + 1}`}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

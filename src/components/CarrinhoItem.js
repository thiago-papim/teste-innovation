"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppProvider";

export default function CarrinhoItem({ item }) {
  const [qtd, setQtd] = useState(1);
  const { adicionarItem } = useAppContext();

  const aumentar = () => setQtd((prev) => prev + 1);
  const diminuir = () => setQtd((prev) => (prev === 1 ? 1 : prev - 1));

  const addCarrinho = () => {
    adicionarItem({ ...item, qtd });
    setQtd(1);
  };

  return (
    <div>
      <div className="flex gap-2 items-center">
        <button
          onClick={diminuir}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl font-bold"
        >
          -
        </button>
        <p className="font-bold text-xl">{qtd}</p>
        <button
          onClick={aumentar}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl font-bold"
        >
          +
        </button>
      </div>
      <button
        onClick={addCarrinho}
        className="mt-6 bg-[#80BC00] text-white py-2 px-4 rounded-md text-sm font-bold hover:bg-[#6aa500] transition w-full"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

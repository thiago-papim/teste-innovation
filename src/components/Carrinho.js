import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "context/AppProvider";
import Image from "next/image";
import { arrumarTextoMaiusculo } from "utils/limitarTexto";
import { Alert, Snackbar } from "@mui/material";

export default function Carrinho({ open, onClose }) {
  const { itens, aumentarQtd, diminuirQtd, removerItem } = useAppContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const valorTotal = itens.reduce(
    (acc, curr) => acc + curr.qtd * curr.valor_home,
    0
  );

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          padding: 16,
        }}
      >
        <div className="flex w-full justify-between mb-4">
          <h1 className="text-2xl text-center font-bold">Resumo do Carrinho</h1>
          <button className="cursor-pointer" onClick={onClose}>
            <CloseIcon sx={{ width: 20 }} />
          </button>
        </div>
        {itens.length > 0 ? (
          itens.map((item, i) => (
            <div key={i} className="flex flex-col border-t-2 py-2">
              <div className="flex items-center">
                <button
                  className="cursor-pointer p-2"
                  onClick={() => removerItem(item.codigo_produto)}
                >
                  <CloseIcon sx={{ width: 20 }} />
                </button>
                <Image
                  src={item.img_home_produto}
                  alt="img-produto"
                  width={100}
                  height={100}
                />
                <p className="text-center font-bold h-12 overflow-hidden w-72 px-2">
                  {arrumarTextoMaiusculo(item.nome)}
                </p>
              </div>
              <div className="flex gap-3 justify-center mb-3">
                <button
                  onClick={() => diminuirQtd(item.codigo_produto)}
                  className="w-7 bg-gray-200 hover:bg-gray-300 rounded text-xl font-bold cursor-pointer"
                >
                  -
                </button>
                <p className="font-bold text-xl">{item.qtd}</p>
                <button
                  onClick={() => aumentarQtd(item.codigo_produto)}
                  className="w-7 bg-gray-200 hover:bg-gray-300 rounded text-xl font-bold cursor-pointer"
                >
                  +
                </button>
              </div>
              <p className="text-green-700 font-bold text-xl lg:text-2xl">
                R$ {(item.qtd * item.valor_home).toFixed(2).replace(".", ",")}
              </p>
            </div>
          ))
        ) : (
          <p className="font-bold text-xl text-green-700">Carrinho vazio</p>
        )}
        {itens.length > 0 && (
          <div>
            <p className="py-5 mt-5 border-t-2 font-bold text-2xl">
              Valor Total ={" "}
              <span className="text-green-700">
                R$ {valorTotal.toFixed(2).replace(".", ",")}
              </span>
            </p>
            <button
              className="mt-6 bg-[#80BC00] text-white py-2 px-4 rounded-md text-sm font-bold 
        hover:bg-[#6aa500] transition w-full cursor-pointer"
              onClick={() => setSnackbarOpen(true)}
            >
              FINALIZAR COMPRA
            </button>
            <Snackbar
              open={snackbarOpen}
              onClose={handleClose}
              autoHideDuration={4000}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Compra efetuada com sucesso!
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
    </Drawer>
  );
}

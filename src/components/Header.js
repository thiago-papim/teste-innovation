"use client";

import Image from "next/image";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge } from "@mui/material";
import { useAppContext } from "../context/AppProvider";
import { useState } from "react";
import Carrinho from "./Carrinho";
import Link from "next/link";

export default function Header() {
  const { itens } = useAppContext();
  const [open, setOpen] = useState(false);

  const abrirDrawer = (state) => () => {
    setOpen(state);
  };

  const totalQtd = itens.reduce((total, item) => total + item.qtd, 0);

  return (
    <div className="w-full bg-[#80BC00] p-3 mt-6 flex justify-between items-center sm:px-20">
      <Carrinho open={open} onClose={abrirDrawer(false)} />
      <Link href="/produtos" passHref>
        <Image
          src="/images/logo-innovation-semfundo.png"
          alt="Descrição"
          width={200}
          height={400}
          priority
        />
      </Link>
      <div className="flex flex-col sm:flex-row sm:gap-5 items-center">
        <div className="gap-5 flex items-center">
          <Badge
            onClick={abrirDrawer(true)}
            className="cursor-pointer"
            badgeContent={totalQtd}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            <LocalGroceryStoreIcon sx={{ color: "white", fontSize: 32 }} />
          </Badge>
          <Image
            className="rounded-full border-6 border-white"
            src="/images/imagem-thiago.jpeg"
            alt="Descrição"
            width={90}
            height={400}
            priority
          />
        </div>
        <div className="text-white">
          <h1 className="font-medium text-xl">Thiago Papim</h1>
          <p className="text-sm font-semibold">Quarta, 23/09/2025</p>
        </div>
      </div>
    </div>
  );
}

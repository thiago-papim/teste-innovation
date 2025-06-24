"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

const AppContext = createContext();

const initialState = { itens: [] };

function carrinhoReducer(state, { type, payload }) {
  switch (type) {
    case "INICIALIZAR_CARRINHO":
      return { itens: payload };

    case "ADICIONAR_ITEM": {
      const index = state.itens.findIndex(
        (i) => i.codigo_produto === payload.codigo_produto
      );

      if (index >= 0) {
        const itens = state.itens.map((i, idx) =>
          idx === index ? { ...i, qtd: i.qtd + payload.qtd } : i
        );
        return { itens };
      }

      return { itens: [...state.itens, payload] };
    }

    case "AUMENTAR_QTD": {
      const itens = state.itens.map((item) =>
        item.codigo_produto === payload ? { ...item, qtd: item.qtd + 1 } : item
      );
      return { itens };
    }

    case "DIMINUIR_QTD": {
      const itens = state.itens.map((item) =>
        item.codigo_produto === payload
          ? { ...item, qtd: Math.max(item.qtd - 1, 1) }
          : item
      );
      return { itens };
    }

    case "REMOVER_ITEM": {
      const itens = state.itens.filter(
        (item) => item.codigo_produto !== payload
      );
      return { itens };
    }

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(carrinhoReducer, initialState);

  useEffect(() => {
    const carrinhoLS = JSON.parse(localStorage.getItem("carrinho") || "[]");
    dispatch({ type: "INICIALIZAR_CARRINHO", payload: carrinhoLS });
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(state.itens));
  }, [state.itens]);

  const adicionarItem = useCallback(
    (item) => dispatch({ type: "ADICIONAR_ITEM", payload: item }),
    []
  );

  const aumentarQtd = useCallback(
    (codigo_produto) =>
      dispatch({ type: "AUMENTAR_QTD", payload: codigo_produto }),
    []
  );

  const diminuirQtd = useCallback(
    (codigo_produto) =>
      dispatch({ type: "DIMINUIR_QTD", payload: codigo_produto }),
    []
  );

  const removerItem = useCallback(
    (codigo_produto) =>
      dispatch({ type: "REMOVER_ITEM", payload: codigo_produto }),
    []
  );

  return (
    <AppContext.Provider
      value={{
        itens: state.itens,
        adicionarItem,
        aumentarQtd,
        diminuirQtd,
        removerItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

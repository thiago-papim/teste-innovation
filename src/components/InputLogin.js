"use client";

import { useState } from "react";
import { styled } from "../../stitches.config";
import { Lock, LockOpen, Person } from "@mui/icons-material";

const InputContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$white",
  borderRadius: "$xl",
  padding: "$md $md",
});

const InputStyle = styled("input", {
  flex: 1,
  fontSize: "$md",
  border: "none",
  outline: "none",
  paddingLeft: "0.75rem",
  backgroundColor: "transparent",
});

const IconButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: "60%",
  padding: "0 0 0 $md",
});

export default function InputForm({
  tipo = "text",
  placeholder = "",
  icone = "usuario",
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [value, setValue] = useState("");

  const renderIcone = () => {
    if (icone === "senha") {
      return (
        <IconButton onClick={() => setMostrarSenha(!mostrarSenha)}>
          {mostrarSenha ? <LockOpen /> : <Lock />}
        </IconButton>
      );
    } else if (icone === "usuario") {
      return (
        <IconButton disabled>
          <Person />
        </IconButton>
      );
    } else {
      return null;
    }
  };

  return (
    <InputContainer>
      {renderIcone()}
      <InputStyle
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={tipo === "password" && !mostrarSenha ? "password" : "text"}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

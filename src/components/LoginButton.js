"use client";

import Link from "next/link";
import { styled } from "../../stitches.config";

const LoginLink = styled("button", {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  color: "black",
  cursor: "pointer",
  height: "50px",
  width: "200px",
  borderRadius: "100px",
  userSelect: "none",
  fontWeight: "bold",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

export default function ButtonLogin() {
  return (
    <div className="flex justify-center mt-4">
      <Link href="/produtos" passHref>
        <LoginLink>Login</LoginLink>
      </Link>
    </div>
  );
}

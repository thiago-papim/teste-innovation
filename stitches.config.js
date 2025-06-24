import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#1D4ED8",
      gray: "#e5e7eb",
      black: "#000000",
    },
    radii: {
      xl: "10rem",
    },
    space: {
      sm: "8px",
      md: "16px",
    },
    fontSizes: {
      md: "16px",
    },
  },
});

import { DefaultTheme } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    blue: string
    gray: string
    grayBlue?: string;
    white: string;
    text: string;
    secendary: string;
    cardColor: string
  }
}

export const lightMode: DefaultTheme = {
  body: "hsl(227, 100%, 98%)",
  text: "hsl(220, 18%, 16%)",
  secendary: "hsl(217, 35%, 45%)",
  cardColor: "hsl(0, 0%, 100%)",
  blue: "hsl(212, 100%, 50%)",
  white: "hsl(0, 0%, 100%)",
  gray: "hsl(217, 20%, 51%)",
  grayBlue: "hsl(217, 35%, 45%)",
}
export const darkMode: DefaultTheme = {
  body: "hsl(220, 40%, 13%)",
  text: "hsl(0, 0%, 100%)",
  secendary: "hsl(0, 0%, 100%)",
  cardColor: "hsl(222, 41%, 20%)",
  blue: "hsl(212, 100%, 50%)",
  white: "hsl(0, 0%, 100%)",
  gray: "hsl(0, 0%, 100%)",
}


import { DefaultTheme } from "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    body: string
    text: string
  }
}

export const lightTheme: DefaultTheme = {
  body: '#FFF',
  text: '#363537',
}
export const darkTheme: DefaultTheme = {
  body: '#363537',
  text: '#FAFAFA',
}

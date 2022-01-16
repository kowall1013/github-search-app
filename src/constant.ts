const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  lightMode: {
    blue: "hsl(212, 100%, 50%)",
    gray: "hsl(217, 20%, 51%)",
    grayBlue: "hsl(217, 35%, 45%)",
    black: "hsl(217, 21%, 21%)",
    ash: "hsl(227, 100%, 98%)",
    white: "hsl(0, 0%, 100%)"
  },
  darkMode: {
    blue: "hsl(212, 100%, 50%)",
    white: "hsl(0, 0%, 100%)",
    black: "hsl(220, 40%, 13%)",
    grayBlue: "hsl(222, 41%, 20%)"
  },
};
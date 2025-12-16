import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    onBackground: string;
    onPaper: string;
  }

  interface PaletteOptions {
    onBackground?: string;
    onPaper?: string;
  }
}

const OKRAROD = "#90302C";

// DARK THEME – warm, moody, ochre-red accent
const darkTheme = createTheme({
  typography: { fontFamily: "'Times new roman', serif" },
  palette: {
    mode: "dark",

    primary: { main: OKRAROD, contrastText: "#1A1312" },
    secondary: { main: "#D98A6A" },

    // Softer “espresso” background instead of near-black
    background: {
      default: "#1A1312", // warm charcoal / espresso
      paper: "#241918", // lifted surface
    },

    // Your custom keys (fine to keep if you’ve extended types)
    onBackground: "#F3E6DF",
    onPaper: "#FFF5EF",

    text: {
      primary: "#F9F6EE",
      secondary: "#D9C1B8",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*::-webkit-scrollbar": {
          display: "none",
          width: 0,
          height: 0,
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: { backgroundColor: "#2A1412" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#FFF5EF",
          fontWeight: "bold",
          backgroundColor: "#3B1614",
          borderBottom: "2px solid #5A201C",
        },
        body: { color: "#FFF5EF" },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": { backgroundColor: "#1E1010" },
          "&:nth-of-type(odd)": { backgroundColor: "#241212" },
          "&:hover": { backgroundColor: "#3B1614" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#1E5F87",
          textDecorationColor: "inherit",
        },
      },
      defaultProps: {
        underline: "always",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          opacity: 0.75,
        },
      },
    },
  },
});

// LIGHT THEME – soft, creamy background with okraröd accent
const lightTheme = createTheme({
  typography: { fontFamily: "'Times new roman', sans-serif" },
  palette: {
    mode: "light",
    primary: { main: OKRAROD },
    secondary: { main: "#E79A80" },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    // --------------------------
    // Custom foreground colours
    // --------------------------
    onBackground: OKRAROD, // deep warm brown for contrast
    onPaper: "#4C1F1A", // slightly stronger for cards
    // --------------------------

    text: {
      primary: "#3A1613",
      secondary: "#6B3A34",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "*::-webkit-scrollbar": {
          display: "none",
          width: 0,
          height: 0,
        },
        "*": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: { backgroundColor: "#F6D2C9" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#3A1613",
          fontWeight: "bold",
          backgroundColor: "#F6D2C9",
          borderBottom: "2px solid #E7B29D",
        },
        body: { color: "#3A1613" },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": { backgroundColor: "#FFE7DD" },
          "&:nth-of-type(odd)": { backgroundColor: "#FFF5EF" },
          "&:hover": { backgroundColor: "#F6D2C9" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#1E5F87",
          textDecorationColor: "inherit",
        },
      },
      defaultProps: {
        underline: "always",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          opacity: 0.75,
        },
      },
    },
  },
});

export { darkTheme, lightTheme };

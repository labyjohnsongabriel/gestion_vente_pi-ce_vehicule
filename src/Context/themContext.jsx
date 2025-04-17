// src/ThemeContext.js

import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";

// 1. Création du contexte
const ThemeContext = createContext();

// 2. Hook personnalisé pour accéder au thème depuis n'importe quel composant
export const useCustomTheme = () => useContext(ThemeContext);

// 3. Provider principal
export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  // Récupération du mode depuis le localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Fonction de bascule entre clair/sombre
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  // Génération du thème avec MUI
  const theme = useMemo(() => {
    const baseTheme = createTheme({
      palette: {
        mode,
        primary: {
          main: mode === "light" ? "#1976d2" : "#90caf9",
        },
        secondary: {
          main: mode === "light" ? "#f50057" : "#ff4081",
        },
        background: {
          default: mode === "light" ? "#f5f5f5" : "#121212",
          paper: mode === "light" ? "#ffffff" : "#1e1e1e",
        },
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
        button: {
          textTransform: "none",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
    });

    return responsiveFontSizes(baseTheme);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

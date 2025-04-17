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

// Création du contexte
const ThemeContext = createContext();

// Hook personnalisé pour accéder au thème
export const useCustomTheme = () => useContext(ThemeContext);

// Provider global du thème
export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  // Charger le thème précédent depuis le localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) setMode(savedMode);
  }, []);

  // Bascule entre les deux thèmes
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // sauvegarde
  };

  // Création du thème Material UI avec typographie responsive
  const theme = useMemo(() => {
    let baseTheme = createTheme({
      palette: {
        mode,
        primary: {
          main: mode === "light" ? "#1976d2" : "#90caf9",
        },
        background: {
          default: mode === "light" ? "#f5f5f5" : "#121212",
          paper: mode === "light" ? "#ffffff" : "#1e1e1e",
        },
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
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

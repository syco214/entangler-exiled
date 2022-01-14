import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";

import "antd/dist/antd.css";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import "@fontsource/sora";

import { WalletProvider } from "../contexts/WalletContext";
import { ConnectionProvider } from "../contexts/ConnectionContext";
import Header from "./Header";
import { Swap } from "./Swap";

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFE81F",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: "#000000";
        }
      `,
    },
  },
});

export default function App() {
  return (
    <React.StrictMode>
      <ConnectionProvider>
        <WalletProvider>
          <Root>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <CssBaseline />
                <Header />
                <Routes>
                  <Route path="/" element={<Swap />} />
                </Routes>
              </BrowserRouter>
            </ThemeProvider>
          </Root>
        </WalletProvider>
      </ConnectionProvider>
    </React.StrictMode>
  );
}

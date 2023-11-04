"use client";
import "./page.scss";
import * as React from "react";
import { ThemeProvider } from "@mui/material";
import Image from "next/image";
import Logo from "public/images/logo/Logo_sin_escudo_Color_Original.svg";
// import Logo1 from 'public/images/logo/Logo_sin_escudo_Blanco.svg';
// import Logo2 from 'public/images/logo/Logo_sin_escudo_Negro.svg';
// import Logo3 from 'public/images/logo/Logo_sin_escudo_Nuestra_paleta_de_colores.svg';
import { theme } from "./styles/materialThemeForm";
import FormAge from "./components/formAge/formAge";

export default function AgePage() {
  return (
    <main className="mainAge">
      <ThemeProvider theme={theme}>
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Beer Club Logo"
          className="logo_age"
        />
        <FormAge />
      </ThemeProvider>
    </main>
  );
}

import React from "react";
import vikingAvatar from "../assets/SifLaVikinga.png";
import { Fab, Avatar } from "@mui/material";
import '../estilos/Avatar.css'

const AvatarIA = ({ onClick }) => {
  // --- Variables de Tamaño y Posición ---
  const IA_SIZE_DESKTOP = 80;
  const IA_SIZE_MOBILE = 60; // --- Estilo del FAB (Contenedor Holográfico y Pulso) ---
  const fabStyle = {
    position: "fixed",
    bottom: 60, // Ligeramente más cerca del borde
    right: 40,
    zIndex: 1001, // Aseguramos que esté sobre la notificación
    backgroundColor: "transparent",
    boxShadow: "none",
    width: IA_SIZE_DESKTOP + 15,
    height: IA_SIZE_DESKTOP + 15, // 1. Pulso Constante (El avatar está "vivo")
    animation: "cortanaPulse 2.5s ease-in-out infinite", // 2. Borde Holográfico
    border: `2px solid var(--color-accent-blue)`,
    borderRadius: "50%",
    filter: `drop-shadow(0 0 10px var(--color-accent-blue))`,

    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.15)", // Activación dramática
      transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      filter: `drop-shadow(0 0 18px var(--color-unsc-teal))`, // Brillo al pasar el mouse
      animation: "none", // Detiene el pulso de idle al hacer hover
    }, // --- Media Query: Ajuste para Móviles ---
    "@media (max-width: 768px)": {
      bottom: 20,
      right: 20,
      width: IA_SIZE_MOBILE + 10,
      height: IA_SIZE_MOBILE + 10,
    },
  }; // --- Estilo del Avatar (Imagen Holográfica) ---

  const avatarStyle = {
    width: IA_SIZE_DESKTOP,
    height: IA_SIZE_DESKTOP, // 3. Efecto Glitch y Filtro de Color
    animation: "holographicGlitch 0.4s linear infinite alternate",
    filter: "saturate(1.5) hue-rotate(180deg) brightness(1.2)", // Lo hace azul/púrpura
    img: {
      // Mantenemos el pixelated si tu imagen lo requiere
      imageRendering: "pixelated", // Aplicamos un sutil glitch a la imagen interna
      animation: "holographicGlitch 0.8s steps(2, end) infinite alternate",
    }, // Media Query para el Avatar en Móvil

    "@media (max-width: 768px)": {
      width: IA_SIZE_MOBILE,
      height: IA_SIZE_MOBILE,
    },
  };

  return (
    <Fab
      sx={fabStyle}
      aria-label="Asistente IA Sif"
      onClick={onClick}
      disableRipple
    >
      {" "}
      <Avatar src={vikingAvatar} alt="Sif IA de Combate" sx={avatarStyle} />{" "}
    </Fab>
  );
};

export default AvatarIA;

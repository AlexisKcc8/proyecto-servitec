// import {
//   CircleCheckBig,
//   Cpu,
//   Grid2x2Check,
//   Headset,
//   ShieldCheck,
//   ShoppingCart,
//   Smile,
//   Tag,
//   Truck,
//   UserCheck,
// } from "lucide-react";

export const purchaseMethod = [
  {
    id: crypto.randomUUID(),
    text: "Selecciona tu producto.",
  },
  {
    id: crypto.randomUUID(),
    text: "Contacta con nosotros",
  },
  {
    id: crypto.randomUUID(),
    text: "Selecciona el método de pago (efectivo/transferencia).",
  },
  {
    id: crypto.randomUUID(),
    text: "Envia el comprobante de pago en caso de ser transferencia.",
  },
  {
    id: crypto.randomUUID(),
    text: "Envió de producto u obtener en sucursal.",
  },
];
//--------------------------------------------------------------------------
import brandKingtons from "@assets/Brands/logo-kingston.svg";
import brandElegate from "@assets/Brands/logo-elegate.svg";
import brandIos from "@assets/Brands/logo-ios.svg";
import brandMoreka from "@assets/Brands/logo-moreka.svg";
import brandMotorola from "@assets/Brands/logo-motorola.svg";
import brandSamsung from "@assets/Brands/logo-samsung.svg";
import brandStylos from "@assets/Brands/logo-stylos.svg";
import brandTplink from "@assets/Brands/logo-tplink.svg";
export const productsBrands = [
  {
    id: crypto.randomUUID(),
    name: "kingtons",
    urlBrand: brandKingtons,
  },
  {
    id: crypto.randomUUID(),
    name: "elegate",
    urlBrand: brandElegate,
  },
  {
    id: crypto.randomUUID(),
    name: "ios",
    urlBrand: brandIos,
  },
  {
    id: crypto.randomUUID(),
    name: "moreka",
    urlBrand: brandMoreka,
  },
  {
    id: crypto.randomUUID(),
    name: "motorola",
    urlBrand: brandMotorola,
  },
  {
    id: crypto.randomUUID(),
    name: "samsung",
    urlBrand: brandSamsung,
  },
  {
    id: crypto.randomUUID(),
    name: "stylos",
    urlBrand: brandStylos,
  },
  {
    id: crypto.randomUUID(),
    name: "tpLink",
    urlBrand: brandTplink,
  },
];

export const ourServices = [
  {
    id: crypto.randomUUID(),
    name: "Reparación y mantenimiento a equipos de computo",
    description:
      "Realizamos una limpieza profunda, resolvemos problemas técnicos y llevamos a cabo actualizaciones de hardware para optimizar el rendimiento de tu computadora, dejándola como nueva y lista para cualquier tarea.",
    images: {
      imagenAvif:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.avif",
      imagenWebp:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.webp",
      imagenJpg:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.jpg",
      imagenAvifDesktop:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de sistema operativo (Windows) y paquetería Office",
    description:
      "Instalamos y configuramos Windows junto con la paquetería Office para que tu equipo esté listo para usarse de inmediato, sin complicaciones ni estrés.",
    images: {
      imagenAvif: "/imgs/our-services/instalación-de-sistema-operativo.avif",
      imagenWebp: "/imgs/our-services/instalación-de-sistema-operativo.webp",
      imagenJpg: "/imgs/our-services/instalación-de-sistema-operativo.jpg",
      imagenAvifDesktop:
        "/imgs/our-services/instalación-de-sistema-operativo-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-services/instalación-de-sistema-operativo-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-services/instalación-de-sistema-operativo-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Reparación de equipos móviles (Android/IOS)",
    description:
      "Reparamos tu dispositivo móvil con cuidado y precisión, ya sea por una pantalla rota, problemas de batería u otros fallos, para que puedas disfrutarlo como nuevo nuevamente.",
    images: {
      imagenAvif: "/imgs/our-services/Reparación-de-equipos-móviles.avif",
      imagenWebp: "/imgs/our-services/Reparación-de-equipos-móviles.webp",
      imagenJpg: "/imgs/our-services/Reparación-de-equipos-móviles.jpg",
      imagenAvifDesktop:
        "/imgs/our-services/Reparación-de-equipos-móviles-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-services/Reparación-de-equipos-móviles-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-services/Reparación-de-equipos-móviles-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Configuraciones de extensores de wifi",
    description:
      "Configuramos tus extensores de WiFi para garantizar una señal fuerte y estable en todos los rincones de tu hogar, eliminando las zonas muertas y mejorando tu experiencia de navegación.",
    images: {
      imagenAvif: "/imgs/our-services/Configuraciones-de-extensores-wifi.avif",
      imagenWebp: "/imgs/our-services/Configuraciones-de-extensores-wifi.webp",
      imagenJpg: "/imgs/our-services/Configuraciones-de-extensores-wifi.jpg",
      imagenAvifDesktop:
        "/imgs/our-services/Configuraciones-de-extensores-wifi-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-services/Configuraciones-de-extensores-wifi-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-services/Configuraciones-de-extensores-wifi-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de cámaras de videovigilancia",
    description:
      "Nos encargamos de la instalación y configuración de cámaras de seguridad, asegurando un monitoreo eficiente y brindándote la tranquilidad de proteger lo que más valoras.",
    images: {
      imagenAvif:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia.avif",
      imagenWebp:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia.webp",
      imagenJpg:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia.jpg",
      imagenAvifDesktop:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-services/Instalación-de-camaras-de-videovigilancia-laptop.jpg",
    },
  },
];

import logoVisa from "@assets/credit-cards-mercado-pago/visa-logo.svg";
import logoMastercard from "@assets/credit-cards-mercado-pago/mastercard-logo.svg";
import logoAmex from "@assets/credit-cards-mercado-pago/amex-logo.svg";
import logoCarnet from "@assets/credit-cards-mercado-pago/carnet-logo.svg";
import logoUpsi from "@assets/credit-cards-mercado-pago/Up-si-vale-logo.svg";
import logoToka from "@assets/credit-cards-mercado-pago/Toka-logo.svg";
import logoTengo from "@assets/credit-cards-mercado-pago/tengo-logo.svg";
import logoPluxee from "@assets/credit-cards-mercado-pago/pluxee-logo.svg";
import logoEndered from "@assets/credit-cards-mercado-pago/Endered-logo.svg";
export const creditCardsMercadoPago = [
  {
    id: "crypto.randomUUID()",
    name: "Visa",
    image: logoVisa,
  },
  {
    id: "crypto.randomUUID()",
    name: "Mastercard",
    image: logoMastercard,
  },
  {
    id: "crypto.randomUUID()",
    name: "American Express",
    image: logoAmex,
  },
  {
    id: "crypto.randomUUID()",
    name: "Carnet",
    image: logoCarnet,
  },
  {
    id: "crypto.randomUUID()",
    name: "UpSí Vale",
    image: logoUpsi,
  },
  {
    id: "crypto.randomUUID()",
    name: "Toka",
    image: logoToka,
  },
  {
    id: "crypto.randomUUID()",
    name: "Tengo",
    image: logoTengo,
  },
  {
    id: "crypto.randomUUID()",
    name: "Pluxee",
    image: logoPluxee,
  },
  {
    id: "crypto.randomUUID()",
    name: "Endered",
    image: logoEndered,
  },
];

import LogoTelcel from "@assets/phone-companies/telcel-logo.svg";
import LogoMovistar from "@assets/phone-companies/movistar-logo.svg";
import LogoUnefon from "@assets/phone-companies/unefon-logo.svg";
import LogoAtt from "@assets/phone-companies/at-t-logo.svg";
export const phoneCompanies = [
  {
    id: "crypto.randomUUID()",
    name: "Telcel",
    image: LogoTelcel,
  },
  {
    id: "crypto.randomUUID()",
    name: "Movistar",
    image: LogoMovistar,
  },
  {
    id: "crypto.randomUUID()",
    name: "unefon",
    image: LogoUnefon,
  },
  {
    id: "crypto.randomUUID()",
    name: "at-t",
    image: LogoAtt,
  },
];

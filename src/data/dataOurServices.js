import laptopWhite from "@assets/our-services/laptop-black-repair.png";
import phone from "@assets/our-services/android-iphone.png";
import wifi from "@assets/our-services/tp-link.png";
import windowsOffice from "@assets/our-services/windows-office.png";
import camara from "@assets/our-services/video-vigilancia.png";
export const ourServices = [
  {
    id: crypto.randomUUID(),
    name: "Reparación y mantenimiento a equipos de computo",
    subtitle: "Hazlo correr como el primer día.",
    description:
      "Optimizamos tu computadora con limpieza profunda, solución de fallas técnicas y mejoras de hardware para que funcione como nueva y esté lista para cualquier tarea.",
    image: laptopWhite,
    titleBtnAction: "⚙️ ¡Recupera el poder de tu equipo!",
    messageService:
      "Hola Servitec, estoy interesado en la reparación y mantenimiento de mi equipo de cómputo. ¿Podrían darme más información, por favor?",
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de sistema operativo (Windows) y paquetería Office",
    subtitle: "Listo para trabajar.",
    description:
      "Instalamos y configuramos Windows junto con la paquetería Office para que tu equipo esté listo para usarse de inmediato, sin complicaciones ni estrés.",
    image: windowsOffice,
    titleBtnAction: "💽 ¡Windows y Office en minutos!",
    messageService:
      "Hola Servitec, necesito ayuda para instalar el sistema operativo Windows y la paquetería Office. ¿Me podrían apoyar con este servicio?",
  },
  {
    id: crypto.randomUUID(),
    name: "Reparación de equipos móviles (Android/IOS)",
    subtitle: "Tu celular, como nuevo.",
    description:
      "Reparamos tu dispositivo móvil con cuidado y precisión, ya sea por una pantalla rota, problemas de batería u otros fallos, para que puedas disfrutarlo como nuevo.",
    image: phone,
    titleBtnAction: "📱¡Renueva tu móvil con nosotros!",
    messageService:
      "Hola Servitec, necesito reparar mi celular (Android/iOS). ¿Podrían decirme cómo funciona el servicio y qué necesito llevar?",
  },
  {
    id: crypto.randomUUID(),
    name: "Configuraciones de extensores de wifi",
    subtitle: "Conexión en cada rincón.",
    description:
      "Configuramos tus extensores de WiFi para garantizar una señal fuerte y estable en todos los rincones de tu hogar, eliminando las zonas muertas y mejorando tu experiencia de navegación.",
    image: wifi,
    titleBtnAction: "🌐📶 ¡Conéctate sin límites!",
    messageService:
      "Hola Servitec, necesito ayuda para configurar extensores de WiFi en mi hogar. ¿Qué opciones tienen disponibles?",
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de cámaras de videovigilancia",
    subtitle: "Tranquilidad a tu alcance.",
    description:
      "Nos encargamos de la instalación y configuración de cámaras de seguridad, asegurando un monitoreo eficiente y brindándote la tranquilidad de proteger lo que más valoras.",
    image: camara,
    titleBtnAction: "📹🛡️ ¡Asegura tu hogar!",
    messageService:
      "Hola Servitec, me interesa la instalación de cámaras de videovigilancia. ¿Podrían darme más detalles del servicio?",
  },
];

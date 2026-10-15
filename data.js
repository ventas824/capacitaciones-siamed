// Base de datos de ejemplo estructurada para SIAMED S.A.S.
const CATEGORIAS_OFICIALES = [
  "Normas Técnicas, Acreditación y Sistemas ISO",
  "Metrología y Gestión de Equipos de Medición",
  "Estadística, Validación e Incertidumbre (Ensayos y Calibración)",
  "Microbiología Aplicada a Laboratorios",
  "Buenas Prácticas, Auditorías y Mejora Operativa",
  "Competencias Blandas y Talento Humano",
  "Formación Práctica: Pasantías Técnicas y Estadías a la Medida"
];

const CURSOS_DATA = [
  {
    id: "CUR-01",
    titulo: "Formación de Auditores Internos en ISO/IEC 17025:2017",
    categoria: "Normas Técnicas, Acreditación y Sistemas ISO",
    modalidad: "Virtual",
    duracion: "24 horas",
    fechas: "15 al 18 de Noviembre de 2026",
    precio: "A convenir / Consultar",
    disponible: true,
    descripcionCorta: "Interpretación práctica de requisitos de gestión y técnicos orientados a laboratorios de ensayo y calibración.",
    objetivos: "Capacitar al personal técnico en la planificación, ejecución y reporte de auditorías internas bajo lineamientos de ISO 19011 e ISO/IEC 17025:2017."
  },
  {
    id: "CUR-02",
    titulo: "Aseguramiento de la Validez de los Resultados y Control de Calidad",
    categoria: "Normas Técnicas, Acreditación y Sistemas ISO",
    modalidad: "Híbrida",
    duracion: "16 horas",
    fechas: "Por programar",
    precio: "A convenir / Consultar",
    disponible: true,
    descripcionCorta: "Herramientas de control interno (gráficos de Shewhart, duplicados, materiales de referencia) y ensayos de aptitud.",
    objetivos: "Establecer estrategias eficaces para dar cumplimiento al numeral 7.7 de la norma ISO/IEC 17025."
  },
  {
    id: "CUR-03",
    titulo: "Estimación de Incertidumbre de Medición en Laboratorios",
    categoria: "Estadística, Validación e Incertidumbre (Ensayos y Calibración)",
    modalidad: "Virtual",
    duracion: "20 horas",
    fechas: "22 al 25 de Noviembre de 2026",
    precio: "A convenir / Consultar",
    disponible: true,
    descripcionCorta: "Aplicación paso a paso de la Guía GUM, fuentes de incertidumbre, presupuestos combinados y expandidos.",
    objetivos: "Desarrollar habilidades matemáticas y prácticas para modelar matemáticamente los procesos de medición y cuantificar su incertidumbre."
  },
  {
    id: "CUR-04",
    titulo: "Gestión Metrológica, Calibración y Verificación de Instrumentos",
    categoria: "Metrología y Gestión de Equipos de Medición",
    modalidad: "Presencial",
    duracion: "16 horas",
    fechas: "02 y 03 de Diciembre de 2026",
    precio: "A convenir / Consultar",
    disponible: true,
    descripcionCorta: "Cálculo de errores máximos permisibles (EMP), intervalos de calibración y análisis de certificados de calibración.",
    objetivos: "Facilitar la toma de decisiones para confirmar metrológicamente equipos antes de su puesta en servicio."
  },
  {
    id: "CUR-05",
    titulo: "Control Microbiológico de Superficies y Ambientes en Áreas Limpias",
    categoria: "Microbiología Aplicada a Laboratorios",
    modalidad: "Virtual",
    duracion: "12 horas",
    fechas: "Por programar",
    precio: "A convenir / Consultar",
    disponible: false, // Ejemplo agotado / no programado
    descripcionCorta: "Muestreo ambiental, normatividad aplicable, medios de cultivo, incubación e interpretación de recuentos.",
    objetivos: "Diseñar planes de monitoreo ambiental microbiológico para cumplimiento de buenas prácticas de manufactura."
  },
  {
    id: "CUR-06",
    titulo: "Liderazgo y Habilidades de Comunicación para Jefes de Laboratorio",
    categoria: "Competencias Blandas y Talento Humano",
    modalidad: "Virtual",
    duracion: "10 horas",
    fechas: "10 de Diciembre de 2026",
    precio: "A convenir / Consultar",
    disponible: true,
    descripcionCorta: "Gestión de equipos técnicos, manejo del estrés operativo ante auditorías y resolución de conflictos.",
    objetivos: "Fortalecer el perfil directivo de coordinadores analíticos y líderes de calidad técnica."
  }
];

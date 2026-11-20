export type CategoriaId = "amor" | "nostalgia" | "esperanza";

export type Poema = {
  id: string;
  titulo: string;
  estrofas: string[];
};

export type Categoria = {
  id: CategoriaId;
  numero: string;
  titulo: string;
  subtitulo: string;
  epigrafe: string;
  poemas: Poema[];
};

export const libro = {
  titulo: "Donde habitan\nlos versos",
  subtitulo: "Un viaje en tres estaciones del alma",
  autor: "Tu nombre aqu\u00ed",
  edicion: "Primera edici\u00f3n",
  dedicatoria:
    "Para quienes aprendieron a quedarse,\npara quienes tuvieron que partir\ny para quienes, a pesar de todo,\ntodav\u00eda eligen florecer.",
};

// Los poemas siguientes son originales de demostracion y se pueden sustituir.
export const categorias: Categoria[] = [
  {
    id: "amor",
    numero: "I",
    titulo: "El amor",
    subtitulo: "De lo que nos encuentra y nos transforma",
    epigrafe: "Hay encuentros que no terminan,\naunque cambie el nombre de los d\u00edas.",
    poemas: [
      {
        id: "la-luz",
        titulo: "Lo que queda de la luz",
        estrofas: [
          "Te encontr\u00e9 donde la tarde\nse deten\u00eda a descansar,\ny supe que hasta el silencio\nten\u00eda algo que contar.",
          "No prometimos para siempre,\nni aprendimos a volar;\nnos bast\u00f3 quedarnos cerca\ncuando empezaba a oscurecer.",
          "Desde entonces llevo un poco\nde tu luz al caminar."
        ],
      },
      {
        id: "lluvia",
        titulo: "Tu nombre en la lluvia",
        estrofas: [
          "La lluvia escribe despacio\nsobre el cristal del balc\u00f3n;\ny entre sus letras encuentro\nla sombra de tu voz.",
          "No es tristeza que te nombre,\nni costumbre de esperar:\nes que hay cosas tan peque\u00f1as\nque nos ense\u00f1an a amar.",
          "Como el agua sobre el vidrio,\ntu recuerdo sabe estar."
        ],
      },
      {
        id: "eternidad",
        titulo: "Peque\u00f1a eternidad",
        estrofas: [
          "No necesito los siglos\nni un cielo para guardar\nla manera en que tus manos\nsaben decirme: aqu\u00ed est\u00e1s.",
          "En la mesa hay dos tazas,\nen la ventana, claridad;\ny en este instante sencillo\ncabe toda la eternidad.",
        ],
      },
    ],
  },
  {
    id: "nostalgia",
    numero: "II",
    titulo: "La nostalgia",
    subtitulo: "De los lugares que viven en la memoria",
    epigrafe: "A veces volver es cerrar los ojos\ny escuchar de nuevo aquella puerta.",
    poemas: [
      {
        id: "casa",
        titulo: "La casa de antes",
        estrofas: [
          "Todav\u00eda existe una casa\ndetr\u00e1s de mi coraz\u00f3n;\ntiene la mesa de siempre\ny una tarde en el corredor.",
          "All\u00ed los relojes esperan,\nall\u00ed no envejece la voz\nde quien llamaba mi nombre\ncuando se ocultaba el sol.",
          "No s\u00e9 si queda en el mundo,\npero en m\u00ed nunca cerr\u00f3.",
        ],
      },
      {
        id: "tren",
        titulo: "El tren de las seis",
        estrofas: [
          "Cada partida deja\nuna se\u00f1al en el and\u00e9n;\nuna palabra que falta,\nun abrazo que no fue.",
          "He aprendido que la ausencia\nno se marcha con el tren:\nse acomoda en los bolsillos\ny nos acompa\u00f1a despu\u00e9s.",
        ],
      },
      {
        id: "cartas",
        titulo: "Cartas sin remite",
        estrofas: [
          "Escrib\u00ed para decirte\nlo que no pude decir:\nque el tiempo cambia las calles,\npero no lo que sent\u00ed.",
          "Guard\u00e9 las hojas dobladas\nen un caj\u00f3n de abril;\nninguna buscaba destino,\ntodas quer\u00edan salir.",
        ],
      },
    ],
  },
  {
    id: "esperanza",
    numero: "III",
    titulo: "La esperanza",
    subtitulo: "De las maneras de volver a comenzar",
    epigrafe: "Incluso la tierra m\u00e1s cansada\nconoce el idioma de la semilla.",
    poemas: [
      {
        id: "florecer",
        titulo: "La costumbre de florecer",
        estrofas: [
          "La vida no siempre avisa\ncu\u00e1ndo volver\u00e1 a brillar;\na veces todo comienza\ncon las ganas de intentar.",
          "Y aunque el suelo est\u00e9 fr\u00edo\ny sea largo despertar,\nuna flor abre sus hojas\nsin pedir permiso al mar.",
          "Quiero aprender de su fuerza:\nvolver a empezar, sin m\u00e1s.",
        ],
      },
      {
        id: "invierno",
        titulo: "Despu\u00e9s del invierno",
        estrofas: [
          "Hubo noches tan extensas\nque olvid\u00e9 c\u00f3mo amanecer;\npero el sol, paciente y terco,\nvolvi\u00f3 a tocar mi pared.",
          "No borr\u00f3 todas las sombras,\nni cur\u00f3 de golpe la sed;\nme mostr\u00f3 que hasta los d\u00edas\nse atreven a renacer.",
        ],
      },
      {
        id: "manana",
        titulo: "Un lugar para ma\u00f1ana",
        estrofas: [
          "Dejo una silla a la mesa\npara lo que ha de llegar;\nuna ventana entreabierta,\nun poco de luz y pan.",
          "No conozco los caminos\nque mis pasos tomar\u00e1n,\npero he guardado esperanza\nen el bolsillo de atr\u00e1s.",
          "Y con eso, por ahora,\nes suficiente para andar.",
        ],
      },
    ],
  },
];

export type Pagina =
  | { tipo: "dedicatoria" }
  | { tipo: "indice" }
  | { tipo: "capitulo"; categoria: Categoria }
  | { tipo: "poema"; categoria: Categoria; poema: Poema; estrofas?: string[]; continuacion?: boolean; inicioVerso?: number }
  | { tipo: "epilogo" }
  | { tipo: "fin" };

export const paginas: Pagina[] = [
  { tipo: "dedicatoria" },
  { tipo: "indice" },
  ...categorias.flatMap((categoria): Pagina[] => [
    { tipo: "capitulo", categoria },
    ...categoria.poemas.map((poema): Pagina => ({ tipo: "poema", categoria, poema })),
  ]),
  { tipo: "epilogo" },
  { tipo: "fin" },
];

export const buscarPaginaCategoria = (id: CategoriaId, listado: Pagina[] = paginas) =>
  listado.findIndex((pagina) => pagina.tipo === "capitulo" && pagina.categoria.id === id);

export const buscarPaginaPoema = (id: string, listado: Pagina[] = paginas) =>
  listado.findIndex((pagina) => pagina.tipo === "poema" && pagina.poema.id === id);

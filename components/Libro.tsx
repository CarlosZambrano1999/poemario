
"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { generarPaginas } from "@/lib/paginacion";

import {
  buscarPaginaCategoria,
  buscarPaginaPoema,
  categorias,
  libro,
  paginas as paginasIniciales,
  type Pagina,
} from "@/data/poemas";

type Giro = "siguiente" | "anterior";

type CategoriaIndice = (typeof categorias)[number];
type PoemaIndice = CategoriaIndice["poemas"][number];

type PaginaLibro = Pagina & {
  indiceCategoria?: CategoriaIndice;
  indicePoemas?: PoemaIndice[];
  indiceParte?: number;
};

function crearIndice(
  paginasOriginales: Pagina[],
  poemasPorPagina: number
): PaginaLibro[] {
  const resultado: PaginaLibro[] = [];
  const limite = Math.max(1, Math.floor(poemasPorPagina));

  for (const pagina of paginasOriginales) {
    resultado.push(pagina);

    if (pagina.tipo !== "indice") continue;

    for (const categoria of categorias) {
      const total = Math.max(
        1,
        Math.ceil(categoria.poemas.length / limite)
      );

      for (let parte = 0; parte < total; parte++) {
        const inicio = parte * limite;

        resultado.push({
          ...pagina,
          indiceCategoria: categoria,
          indicePoemas: categoria.poemas.slice(
            inicio,
            inicio + limite
          ),
          indiceParte: parte,
        });
      }
    }
  }

  return resultado;
}

function Ornament({
  small = false,
}: {
  small?: boolean;
}) {
  return (
    <svg
      className={small ? "ornament ornament-small" : "ornament"}
      viewBox="0 0 204 142"
      role="presentation"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M102 114V56M102 56c-2-20-17-33-15-42 13 2 21 13 15 42Zm0 0c2-20 17-33 15-42-13 2-21 13-15 42Z"
        strokeWidth="1.15"
      />
      <path
        d="M102 96C83 78 55 75 37 85M102 95c19-18 47-21 65-10M102 109C71 99 49 107 26 126m76-17c31-10 53-2 76 17"
        strokeWidth="1.15"
      />
      <path
        d="M79 82c-17-17-27-20-38-18 8 15 21 20 38 18Zm-16 3c-11 12-25 15-35 12 6-13 18-17 35-12Zm62-3c17-17 27-20 38-18-8 15-21 20-38 18Zm16 3c11 12 25 15 35 12-6-13-18-17-35-12Z"
        strokeWidth="1.15"
      />
      <path
        d="M102 56c-7-4-11-11-10-18 7 0 10 5 10 11 0-6 3-11 10-11 1 7-3 14-10 18ZM89 33l-8-8m34 8 8-8M27 126l-8 7m159-7 8 7"
        strokeWidth="1.15"
      />
      <circle
        cx="102"
        cy="9"
        r="2.4"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="19"
        cy="133"
        r="2"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="185"
        cy="133"
        r="2"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function ArrowIcon({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "right" ? (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      ) : (
        <path d="M20 12H4m6-6-6 6 6 6" />
      )}
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6.2C9 4 5.5 4 2 5.1V19c3.5-1.1 7-1.1 10 1.1 3-2.2 6.5-2.2 10-1.1V5.1C18.5 4 15 4 12 6.2Z" />
      <path d="M12 6.2v13.9" />
    </svg>
  );
}

function ContenidoPagina({
  pagina,
  numero,
  irA,
  paginas,
}: {
  pagina: PaginaLibro;
  numero: number;
  irA: (numero: number) => void;
  paginas: PaginaLibro[];
}) {
  if (pagina.tipo === "dedicatoria") {
    return (
      <section className="page-content page-dedication">

        <div className="dedication-body">

          <div className="small-divider" />

          <p className="dedication-text">
            {libro.dedicatoria}
          </p>
        </div>

        <span className="page-number">{numero}</span>
      </section>
    );
  }

  if (pagina.tipo === "indice") {
    const categoriaActual = pagina.indiceCategoria;
    const esResumen = !categoriaActual;

    return (
      <section className="page-content page-index">
        <div className="folio-heading">
          TABLA DE CONTENIDOS
        </div>

        <h2>Índice</h2>

        <p className="index-intro">
          {esResumen
            ? "Tres formas de sentir. Un mismo viaje."
            : categoriaActual.titulo}
        </p>

        <nav
          className="index-sections"
          aria-label="Índice de poemas"
        >
          {esResumen ? (
            categorias.map((categoria) => {
              const destino = paginas.findIndex(
                (p) =>
                  p.tipo === "indice" &&
                  p.indiceCategoria?.id === categoria.id
              );

              return (
                <div
                  className="index-category"
                  key={categoria.id}
                >
                  <button
                    type="button"
                    className="index-category-button"
                    disabled={destino < 0}
                    onClick={() => irA(destino)}
                  >
                    <span className="index-roman">
                      {categoria.numero}
                    </span>

                    <span>{categoria.titulo}</span>

                    <span className="index-dots" />

                    <span className="index-page">
                      {destino >= 0 ? destino + 1 : "—"}
                    </span>
                  </button>
                </div>
              );
            })
          ) : (
            <div className="index-category">
              <button
                type="button"
                className="index-category-button"
                onClick={() =>
                  irA(
                    buscarPaginaCategoria(
                      categoriaActual.id,
                      paginas
                    )
                  )
                }
              >
                <span className="index-roman">
                  {categoriaActual.numero}
                </span>

                <span>{categoriaActual.titulo}</span>

                <span className="index-dots" />
              </button>

              <div className="index-poems">
                {(pagina.indicePoemas ?? []).map((poema) => {
                  const destino = buscarPaginaPoema(
                    poema.id,
                    paginas
                  );

                  return (
                    <button
                      type="button"
                      key={poema.id}
                      disabled={destino < 0}
                      onClick={() => irA(destino)}
                    >
                      <span>{poema.titulo}</span>

                      <span className="index-page">
                        {destino >= 0 ? destino + 1 : "—"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav>

        <span className="page-number">{numero}</span>
      </section>
    );
  }

  if (pagina.tipo === "capitulo") {
    return (
      <section className="page-content page-chapter">


        <div className="chapter-body">
          <span className="chapter-overline">
            P A R T E
          </span>

          <span className="chapter-roman">
            {pagina.categoria.numero}
          </span>

          <Ornament small />

          <h2>{pagina.categoria.titulo}</h2>

          <p className="chapter-subtitle">
            {pagina.categoria.subtitulo}
          </p>

          <p className="chapter-epigraph">
            {pagina.categoria.epigrafe}
          </p>
        </div>

        <span className="page-number">{numero}</span>
      </section>
    );
  }

  if (pagina.tipo === "poema") {
    return (
      <article className="page-content page-poem">
        <div className="folio-heading">
          {pagina.categoria.titulo.toUpperCase()}
          &nbsp; / &nbsp;
          {pagina.categoria.numero}
        </div>

        <div className="poem-body">
          {!pagina.continuacion && (
            <h2>{pagina.poema.titulo}</h2>
          )}

          {(pagina.estrofas ?? pagina.poema.estrofas).map(
            (estrofa, index) => (
              <p key={index}>{estrofa}</p>
            )
          )}
        </div>

        <span className="page-number">{numero}</span>
      </article>
    );
  }

  if (pagina.tipo === "epilogo") {
    return (
      <section className="page-content page-dedication">
       

        <div className="dedication-body">
          <h2>
            Cuando cierre
            <br />
            este libro
          </h2>

          <div className="small-divider" />

          <p>
            Que al menos un verso
            <br />
            se vaya contigo.
          </p>

          <p className="dedication-text">
            Y que encuentre en sus propios días
            <br />
            las palabras que aquí faltaron.
          </p>
        </div>

        <span className="page-number">{numero}</span>
      </section>
    );
  }

  return (
    <section className="page-content page-ending">
   
      <div className="ending-body">

        <div className="end-word">Fin</div>

        <div className="small-divider" />

        <p>Pero nunca del todo.</p>

        <button
          type="button"
          className="text-link"
          onClick={() => {
            const indice = paginas.findIndex(
              (p) =>
                p.tipo === "indice" &&
                !p.indiceCategoria
            );
            irA(Math.max(0, indice));
          }}
        >
          Volver al índice{" "}
          <span aria-hidden="true">&#8594;</span>
        </button>
      </div>

      <span className="page-number">{numero}</span>
    </section>
  );
}

export default function Libro() {
  const [abierto, setAbierto] = useState(false);

  const [paginas, setPaginas] = useState<PaginaLibro[]>(
    () => crearIndice(paginasIniciales, 6)
  );

  const paginasRef = useRef(paginas);

  const libroAbiertoRef = useRef<HTMLDivElement | null>(
    null
  );

  const hojaMedicionRef = useRef<HTMLDivElement | null>(
    null
  );

  const [medidas, setMedidas] = useState({
    ancho: 0,
    alto: 0,
  });

  const [paginaActual, setPaginaActual] = useState(0);

  const [movil, setMovil] = useState(false);

  const [giro, setGiro] = useState<Giro | null>(null);

  const girando = useRef(false);

  const timers = useRef<
    ReturnType<typeof setTimeout>[]
  >([]);

  const inicioToque = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(max-width: 700px)"
    );

    const actualizar = () => setMovil(media.matches);

    actualizar();

    media.addEventListener("change", actualizar);

    return () =>
      media.removeEventListener("change", actualizar);
  }, []);

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  useLayoutEffect(() => {
    paginasRef.current = paginas;
  }, [paginas]);

  useLayoutEffect(() => {
    if (!abierto || !libroAbiertoRef.current) {
      return;
    }

    const elemento = libroAbiertoRef.current;

    const actualizar = () => {
      const ancho =
        elemento.clientWidth / (movil ? 1 : 2);

      const alto = elemento.clientHeight;

      setMedidas((anterior) =>
        anterior.ancho === ancho &&
        anterior.alto === alto
          ? anterior
          : { ancho, alto }
      );
    };

    const observador = new ResizeObserver(actualizar);

    observador.observe(elemento);

    actualizar();

    return () => observador.disconnect();
  }, [abierto, movil]);

  useLayoutEffect(() => {
    if (
      !abierto ||
      !medidas.ancho ||
      !medidas.alto ||
      !hojaMedicionRef.current
    ) {
      return;
    }

    const hoja = hojaMedicionRef.current;

    const contenido =
      hoja.querySelector<HTMLElement>(".page-content");

    const cabecera =
      hoja.querySelector<HTMLElement>(".folio-heading");

    const cuerpo =
      hoja.querySelector<HTMLElement>(".poem-body");

    if (!contenido || !cabecera || !cuerpo) {
      return;
    }

    const estilo = getComputedStyle(contenido);

    const espacioDisponible =
      contenido.clientHeight -
      parseFloat(estilo.paddingTop) -
      parseFloat(estilo.paddingBottom) -
      cabecera.getBoundingClientRect().height -
      3;

    const cabe: Parameters<typeof generarPaginas>[0] = (
      categoria,
      poema,
      estrofas,
      continuacion
    ) => {
      cabecera.textContent =
        `${categoria.titulo.toUpperCase()} / ${categoria.numero}`;

      cuerpo.replaceChildren();

      if (!continuacion) {
        const titulo = document.createElement("h2");

        titulo.textContent = poema.titulo;

        cuerpo.appendChild(titulo);
      }

      estrofas.forEach((estrofa) => {
        const parrafo = document.createElement("p");

        parrafo.textContent = estrofa;

        cuerpo.appendChild(parrafo);
      });

      return cuerpo.offsetHeight <= espacioDisponible;
    };

    const nuevasPaginas = crearIndice(
      generarPaginas(cabe),
      movil ? 4 : 6
    );

    const paginaVigente =
      paginasRef.current[paginaActual];

    let nuevoIndice = 0;

    if (paginaVigente) {
      nuevoIndice = nuevasPaginas.findLastIndex(
        (candidata) => {
          if (candidata.tipo !== paginaVigente.tipo) {
            return false;
          }

          if (
            candidata.tipo === "indice" &&
            paginaVigente.tipo === "indice"
          ) {
            if (!paginaVigente.indiceCategoria) {
              return !candidata.indiceCategoria;
            }

            return (
              candidata.indiceCategoria?.id ===
                paginaVigente.indiceCategoria.id &&
              (candidata.indiceParte ?? 0) <=
                (paginaVigente.indiceParte ?? 0)
            );
          }

          if (
            candidata.tipo === "capitulo" &&
            paginaVigente.tipo === "capitulo"
          ) {
            return (
              candidata.categoria.id ===
              paginaVigente.categoria.id
            );
          }

          if (
            candidata.tipo === "poema" &&
            paginaVigente.tipo === "poema"
          ) {
            return (
              candidata.poema.id ===
                paginaVigente.poema.id &&
              (candidata.inicioVerso ?? 0) <=
                (paginaVigente.inicioVerso ?? 0)
            );
          }

          return true;
        }
      );
    }

    paginasRef.current = nuevasPaginas;

    setPaginas(nuevasPaginas);

    setPaginaActual(Math.max(0, nuevoIndice));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierto, medidas, movil]);

  const irA = useCallback(
    (pagina: number, animar = true) => {
      if (
        girando.current ||
        pagina < 0 ||
        pagina >= paginas.length
      ) {
        return;
      }

      if (pagina === paginaActual) {
        return;
      }

      if (
        !animar ||
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        setPaginaActual(pagina);
        return;
      }

      girando.current = true;

      setGiro(
        pagina > paginaActual
          ? "siguiente"
          : "anterior"
      );

      timers.current.push(
        setTimeout(() => setPaginaActual(pagina), 330)
      );

      timers.current.push(
        setTimeout(() => {
          girando.current = false;
          setGiro(null);
        }, 690)
      );
    },
    [paginaActual, paginas.length]
  );

  const siguiente = useCallback(() => {
    const inicio = movil
      ? paginaActual
      : Math.floor(paginaActual / 2) * 2;

    const destino = inicio + (movil ? 1 : 2);

    if (destino < paginas.length) {
      irA(destino);
    }
  }, [movil, paginaActual, paginas.length, irA]);

  const anterior = useCallback(() => {
    const inicio = movil
      ? paginaActual
      : Math.floor(paginaActual / 2) * 2;

    const destino = inicio - (movil ? 1 : 2);

    if (destino >= 0) {
      irA(destino);
    }
  }, [movil, paginaActual, irA]);

  const cerrar = useCallback(() => {
    timers.current.forEach(clearTimeout);

    timers.current = [];

    girando.current = false;

    setGiro(null);
    setAbierto(false);
    setPaginaActual(0);
  }, []);

  useEffect(() => {
    const manejarTeclado = (evento: KeyboardEvent) => {
      if (!abierto) {
        return;
      }

      if (evento.key === "Escape") {
        cerrar();
      }

      if (evento.key === "ArrowRight") {
        evento.preventDefault();
        siguiente();
      }

      if (evento.key === "ArrowLeft") {
        evento.preventDefault();
        anterior();
      }
    };

    window.addEventListener(
      "keydown",
      manejarTeclado
    );

    return () =>
      window.removeEventListener(
        "keydown",
        manejarTeclado
      );
  }, [abierto, siguiente, anterior, cerrar]);

  const primeraVisible = movil
    ? paginaActual
    : Math.floor(paginaActual / 2) * 2;

  const tieneAnterior = primeraVisible > 0;

  const tieneSiguiente =
    primeraVisible + (movil ? 1 : 2) <
    paginas.length;

  const paginaIzquierda = paginas[primeraVisible];

  const paginaDerecha = paginas[primeraVisible + 1];

  const irAlIndice = () => {
    const indice = paginas.findIndex(
      (pagina) =>
        pagina.tipo === "indice" &&
        !pagina.indiceCategoria
    );

    if (indice >= 0) {
      irA(indice, false);
    }
  };

  const onTouchStart = (
    evento: React.TouchEvent
  ) => {
    inicioToque.current =
      evento.changedTouches[0]?.screenX ?? null;
  };

  const onTouchEnd = (
    evento: React.TouchEvent
  ) => {
    if (inicioToque.current === null) {
      return;
    }

    const diferencia =
      evento.changedTouches[0].screenX -
      inicioToque.current;

    inicioToque.current = null;

    if (Math.abs(diferencia) < 65) {
      return;
    }

    if (diferencia < 0) {
      siguiente();
    } else {
      anterior();
    }
  };

  return (
    <main
      className={
        abierto
          ? "reading-room is-open"
          : "reading-room"
      }
    >
      <header className="site-header">
        <a
          className="site-identity"
          href="#inicio"
          onClick={(evento) => {
            evento.preventDefault();
            cerrar();
          }}
          aria-label="Volver a la portada"
        >
        </a>

      </header>

      <div className="library-stage" id="inicio">
        <div className="setting-caption">
          <span className="caption-line" />

          <span className="caption-line" />
        </div>

        {!abierto ? (
          <div className="closed-scene">
            <button
              type="button"
              className="closed-book"
              aria-label="Abrir el poemario"
              onClick={() => {
                setPaginaActual(0);
                setAbierto(true);
              }}
            >
              <span
                className="cover-edge"
                aria-hidden="true"
              />

              <span className="cover-face">
                <span className="cover-inner-border">
                  <span className="cover-volume">
                    POEMARIO &nbsp; &middot; &nbsp;
                    VOLUMEN I
                  </span>

                  <Ornament />

                  <span className="cover-title">
                    {libro.titulo}
                  </span>

                  <span className="cover-rule" />

                  <span className="cover-subtitle">
                    {libro.subtitulo}
                  </span>

                  <span className="cover-author">
                    {libro.autor}
                  </span>
                </span>
              </span>
            </button>

            <div className="cover-instructions">

              <button
                type="button"
                className="open-instruction"
                onClick={() => {
                  setPaginaActual(0);
                  setAbierto(true);
                }}
              >
                Abrir el libro{" "}
              </button>

            </div>
          </div>
        ) : (
          <div className="reader-shell">
            <div className="reader-topbar">
              <span className="reader-collection">
                {libro.titulo.replace("\n", " ")}
              </span>

              <div className="reader-actions">
                <button
                  type="button"
                  className="reader-action"
                  onClick={irAlIndice}
                >
                  <BookIcon />
                  <span>Índice</span>
                </button>

                <span className="toolbar-separator" />

                <button
                  type="button"
                  className="reader-action"
                  onClick={cerrar}
                >
                  <span
                    className="close-sign"
                    aria-hidden="true"
                  >
                    &times;
                  </span>

                  <span>Cerrar</span>
                </button>
              </div>
            </div>

            <div className="book-with-arrows">
              <button
                type="button"
                aria-label="Página anterior"
                className="edge-arrow left-arrow"
                onClick={anterior}
                disabled={
                  !tieneAnterior || giro !== null
                }
              >
                <ArrowIcon direction="left" />
              </button>

              <div
                ref={libroAbiertoRef}
                className="open-book"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                aria-label="Libro abierto"
              >
                <div
                  className="paper-stack"
                  aria-hidden="true"
                />

                <div
                  className="book-spine"
                  aria-hidden="true"
                />

                {paginaIzquierda && (
                  <div
                    className="paper-page page-left"
                    key={`left-${primeraVisible}`}
                  >
                    <ContenidoPagina
                      pagina={paginaIzquierda}
                      numero={primeraVisible + 1}
                      irA={irA}
                      paginas={paginas}
                    />
                  </div>
                )}

                {!movil && paginaDerecha && (
                  <div
                    className="paper-page page-right"
                    key={`right-${primeraVisible + 1}`}
                  >
                    <ContenidoPagina
                      pagina={paginaDerecha}
                      numero={primeraVisible + 2}
                      irA={irA}
                      paginas={paginas}
                    />
                  </div>
                )}

                {giro && (
                  <div
                    className={`turning-sheet ${giro}`}
                    aria-hidden="true"
                  >
                    <span className="sheet-front" />
                    <span className="sheet-back" />
                  </div>
                )}
              </div>

              <button
                type="button"
                aria-label="Página siguiente"
                className="edge-arrow right-arrow"
                onClick={siguiente}
                disabled={
                  !tieneSiguiente || giro !== null
                }
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div
              className="paper-page page-left measurement-page"
              ref={hojaMedicionRef}
              aria-hidden="true"
              style={{
                width: medidas.ancho || 400,
                height: medidas.alto || 600,
              }}
            >
              <article className="page-content page-poem">
                <div className="folio-heading" />
                <div className="poem-body" />
              </article>
            </div>

            <div className="reader-footer">
              <button
                type="button"
                onClick={anterior}
                disabled={
                  !tieneAnterior || giro !== null
                }
                className="footer-nav"
              >
                <ArrowIcon direction="left" />
                <span>Anterior</span>
              </button>

              <div
                className="reading-progress"
                aria-live="polite"
              >
                <span className="progress-label">
                  PÁGINAS
                </span>

                <strong>
                  {movil
                    ? primeraVisible + 1
                    : `${primeraVisible + 1} - ${Math.min(
                        primeraVisible + 2,
                        paginas.length
                      )}`}
                </strong>

                <span className="progress-separator">
                  /
                </span>

                <span>{paginas.length}</span>
              </div>

              <button
                type="button"
                onClick={siguiente}
                disabled={
                  !tieneSiguiente || giro !== null
                }
                className="footer-nav"
              >
                <span>Siguiente</span>
                <ArrowIcon direction="right" />
              </button>
            </div>

            <p className="keyboard-hint">
              Usa las flechas de tu teclado o
              desliza para pasar página
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

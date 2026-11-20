import { categorias } from "@/data/poemas";
import type { Categoria, Pagina, Poema } from "@/data/poemas";

export type MedidorPagina = (
  categoria: Categoria,
  poema: Poema,
  estrofas: string[],
  continuacion: boolean
) => boolean;

function paginasDePoema(
  categoria: Categoria,
  poema: Poema,
  cabe: MedidorPagina
): Pagina[] {
  const resultado: Pagina[] = [];
  let pagina: string[] = [];
  let primerVerso = 0;
  let versosProcesados = 0;

  const esContinuacion = () => resultado.length > 0;
  const permite = (estrofas: string[]) => cabe(categoria, poema, estrofas, esContinuacion());

  const guardar = () => {
    if (!pagina.length) return;
    resultado.push({
      tipo: "poema",
      categoria,
      poema,
      estrofas: [...pagina],
      continuacion: esContinuacion(),
      inicioVerso: primerVerso,
    });
    pagina = [];
    primerVerso = versosProcesados;
  };

  const agregarVerso = (verso: string, nuevoParrafo: boolean) => {
    if (nuevoParrafo || pagina.length === 0) {
      pagina.push(verso);
    } else {
      pagina[pagina.length - 1] += "\n" + verso;
    }
    versosProcesados++;
  };

  for (const estrofa of poema.estrofas) {
    const versos = estrofa.split("\n");
    if (permite([...pagina, estrofa])) {
      pagina.push(estrofa);
      versosProcesados += versos.length;
      continue;
    }

    // A paragraph is moved intact to the next leaf whenever it fits there.
    if (pagina.length) guardar();
    if (permite([estrofa])) {
      pagina.push(estrofa);
      versosProcesados += versos.length;
      continue;
    }

    // Only exceptionally long stanzas are split, respecting verse boundaries.
    let esPrimerVersoDeEstrofa = true;
    for (const verso of versos) {
      const posible = pagina.length === 0 || esPrimerVersoDeEstrofa
        ? [...pagina, verso]
        : [...pagina.slice(0, -1), pagina[pagina.length - 1] + "\n" + verso];

      if (permite(posible)) {
        agregarVerso(verso, esPrimerVersoDeEstrofa);
        esPrimerVersoDeEstrofa = false;
        continue;
      }

      if (pagina.length) guardar();
      esPrimerVersoDeEstrofa = true;

      if (permite([verso])) {
        agregarVerso(verso, true);
        esPrimerVersoDeEstrofa = false;
        continue;
      }

      // An unusably small leaf cannot be split into pieces that fit.
      if (!permite([""])) {
        agregarVerso(verso, true);
        guardar();
        esPrimerVersoDeEstrofa = true;
        continue;
      }

      // A single extremely long verse may itself wrap beyond a leaf.
      // Split it at word boundaries as a last resort, never clip it.
      const palabras = verso.match(/\S+\s*/g) ?? [verso];
      let trozo = "";
      for (const palabra of palabras) {
        const candidato = trozo + palabra;
        if (permite([candidato])) {
          trozo = candidato;
          continue;
        }
        if (trozo) {
          agregarVerso(trozo.trimEnd(), true);
          guardar();
          trozo = "";
        }
        if (permite([palabra])) {
          trozo = palabra;
        } else {
          // A single unbreakable token: split by characters if necessary.
          for (const letra of palabra) {
            if (permite([trozo + letra])) trozo += letra;
            else {
              if (trozo) {
                agregarVerso(trozo, true);
                guardar();
              }
              trozo = letra;
            }
          }
        }
      }
      if (trozo) agregarVerso(trozo.trimEnd(), true);
      esPrimerVersoDeEstrofa = false;
    }
  }

  guardar();
  if (!resultado.length) {
    resultado.push({ tipo: "poema", categoria, poema, estrofas: [""], continuacion: false, inicioVerso: 0 });
  }
  return resultado;
}

export function generarPaginas(medir: MedidorPagina): Pagina[] {
  return [
    { tipo: "dedicatoria" },
    { tipo: "indice" },
    ...categorias.flatMap((categoria): Pagina[] => [
      { tipo: "capitulo", categoria },
      ...categoria.poemas.flatMap((poema) => paginasDePoema(categoria, poema, medir)),
    ]),
    { tipo: "epilogo" },
    { tipo: "fin" },
  ];
}

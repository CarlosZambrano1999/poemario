# Donde habitan los versos

Poemario interactivo de aspecto clasico, desarrollado en Next.js (App Router), React y TypeScript. La portada, las hojas, el indice y las tres categorias mantienen el diseno de la version inicial.

## Ejecutar

Requisitos: Node.js 20.9 o superior y acceso al registro npm para instalar dependencias.

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Editar los poemas

Los titulos, el autor, la dedicatoria, las categorias y los poemas estan en `data/poemas.ts`.

Cada poema se define con `estrofas: string[]`. Cada string es una estrofa y los saltos de verso se escriben con `\n`.

```ts
{
  id: "mi-poema",
  titulo: "Mi poema",
  estrofas: [
    "Un verso breve\ny otro verso breve.",
    "Una segunda estrofa\ncon dos versos mas."
  ]
}
```

No necesitas indicar el numero de pagina: la aplicacion lo calcula.

## Nueva paginacion automatica (v1.1)

- Al abrir el libro, mide la altura y el ancho disponible de una hoja real usando los estilos del poemario.
- Mantiene un poema corto en una sola pagina cuando cabe.
- Traslada una estrofa entera a la pagina siguiente cuando es posible.
- Si una estrofa no cabe ni en una pagina vacia, la divide por versos.
- Si un verso extremadamente largo tampoco cabe, lo divide por palabras como ultimo recurso.
- Indica `CONTINUACION` y repite el titulo discretamente en las hojas siguientes.
- Actualiza el indice, el total de paginas y la navegacion entre hojas.
- Recalcula la distribucion cuando cambia el ancho del libro, por ejemplo entre pantalla grande y celular.
- Conserva el poema y un lugar aproximado de lectura al cambiar de tamano.

Cada estrofa se conserva intacta en los datos originales; las divisiones solo se aplican a la vista.

El motor esta en `lib/paginacion.ts`, y la medicion visual en `components/Libro.tsx`. Se utiliza un elemento de medicion fuera de pantalla con la misma tipografia, ancho y espaciado que la hoja visible.

## Controles

- Abrir/cerrar libro y volver al indice.
- En escritorio se ven dos hojas; en movil, una.
- Flechas del teclado, botones anterior/siguiente, gestos tactiles.
- Se respeta la preferencia del sistema de movimiento reducido.

## Pruebas

```bash
npm run test:paginacion
npm run typecheck
npm run build
```

`test:paginacion` prueba poemas cortos, una estrofa de 121 versos, continuidad, integridad de texto, divisiones de versos excepcionalmente largos e indices. La prueba es deterministica con un medidor simulado. `typecheck` y `build` requieren `npm install`.

## Limites actuales

La compaginacion por DOM ocurre en el navegador y se recalcula en cada pantalla. El indice sigue ocupando una hoja: si en el futuro se agregan decenas de poemas, conviene darle paginacion propia. Los titulos o palabras extremadamente largos y los dispositivos muy pequenos deben validarse visualmente con el contenido definitivo.

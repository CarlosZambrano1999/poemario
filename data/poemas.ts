export type CategoriaId = "revelaciones" | "contemplaciones" | "latidos";

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
  titulo: "XXVII",
  subtitulo: "Veintisiete latidos",
  autor: "",
  edicion: "",
  dedicatoria:
    "A usted, por sus veintisiete años y por la belleza irrepetible de su existencia. Estas páginas reúnen apenas veintisiete latidos de todo aquello que las palabras no alcanzan a explicar de usted; pequeños intentos de retratar su esencia, honrar su vocación y recordarle que hay cosas tan hermosas que, aun después de escribirlas, siguen siendo imposibles de describir.",
};

// Los poemas siguientes son originales de demostracion y se pueden sustituir.
export const categorias: Categoria[] = [
  {
    id: "revelaciones",
    numero: "I",
    titulo: "Revelaciones",
    subtitulo: "De la Palabra que ilumina lo que amamos",
    epigrafe: "Hay verdades que llegan desde lo eternoy encuentran su lugar en lo más íntimo del corazón.",
    

poemas: [
  {
    id: "sabiduria-ternura",
    titulo: "1. Proverbios 31:26",
    estrofas: [
      "Cuando habla, lo hace con sabiduría; cuando instruye, lo hace con amor.",
      "La sabiduría que aprendió a hablar con ternura",
      "Hay palabras que solamente ocupan el aire\ny otras que encuentran dónde echar raíces;\npalabras que enseñan sin herir,\nque corrigen sin apagar la esperanza\ny que abren caminos donde había dudas.",
      "En ella, el conocimiento encuentra una voz,\ny la voz, una manera de cuidar.\nPorque no basta con conocer las respuestas\nsi se olvida la delicadeza de quien pregunta,\nni basta con enseñar el camino\nsi no se tiene paciencia para acompañar los pasos.",
      "Qué hermoso es encontrar sabiduría\nque no necesita hacerse distante,\ninteligencia que no desprecia las preguntas\ny firmeza que todavía sabe ser dulce.\nHay una forma de instruir que deja huella\nno porque imponga lo que sabe,\nsino porque hace sentir al otro\nque también puede aprender.",
      "Y si alguna vez ella duda del alcance de su voz,\nojalá recuerde que una enseñanza amorosa\npuede acompañar a alguien durante años;\nque hay palabras cuyo fruto tarda en aparecer,\npero que siguen creciendo en silencio.\nPorque cuando el saber se encuentra con la ternura,\nenseñar deja de ser solamente transmitir\ny se convierte en una manera de amar.",
    ],
  },
  {
    id: "oro-fuego",
    titulo: "2. Job 23:10",
    estrofas: [
      "Él, en cambio, conoce mis caminos; si me pusiera a prueba, saldría yo puro como el oro.",
      "El oro que no teme al fuego",
      "Hay caminos que solo quien los recorre conoce,\njornadas cuyo peso no se cuenta en palabras\ny pruebas que dejan preguntas\nincluso en quienes procuran permanecer firmes.\nNo toda batalla tiene testigos,\nni todo esfuerzo recibe reconocimiento.",
      "Pero Dios conoce los senderos ocultos,\nlos pasos dados con cansancio,\nlas veces que el corazón tuvo que elegir\nentre rendirse y continuar.\nNada de aquello que ocurre en secreto\nle resulta ajeno a su mirada,\nni se pierde el valor de una fidelidad\nque permanece cuando nadie la contempla.",
      "El oro no descubre su resistencia\npor permanecer lejos de la llama;\nes el fuego el que revela su naturaleza.\nY aun así, ninguna prueba vuelve sencillo el dolor,\nni hace innecesarias las lágrimas;\nsolo recuerda que el sufrimiento\nno tiene la última palabra\nsobre aquello que Dios conoce y sostiene.",
      "Que ella no confunda los días difíciles\ncon una medida de su valor,\nni las pruebas con la ausencia de propósito.\nHay procesos que todavía no comprende\ny caminos cuyo final aún no alcanza a ver,\npero puede descansar en esta certeza:\nDios conoce su andar por completo,\nincluso cuando ella apenas logra\ncomprender el siguiente paso.",
    ],
  },
  {
    id: "esperanza-esperar",
    titulo: "3. Salmo 27:13-14",
    estrofas: [
      "Pero de una cosa estoy seguro: he de ver la bondad del Señor en esta tierra de los vivientes. [14] Pon tu esperanza en el Señor; cobra ánimo y ármate de valor, ¡pon tu esperanza en el Señor!",
      "La esperanza también aprende a esperar",
      "Hay mañanas que llegan sin respuestas\ny noches en que el futuro parece lejano;\nmomentos en los que la esperanza\nno se parece a una canción victoriosa,\nsino a una pequeña llama\nque se protege del viento con ambas manos.",
      "Creer en la bondad de Dios\nno significa conocer todos los desenlaces;\nsignifica aprender a esperar\nsin exigirle al mañana que se revele,\nconfiar aunque el camino todavía se extienda\nmás allá de lo que alcanzan los ojos\ny recordar que la incertidumbre\nno puede borrar las promesas del Señor.",
      "Que cuando el cansancio visite sus días,\nella encuentre valor para continuar;\nque no confunda la demora con el abandono\nni la dificultad con el final de su historia.\nHay fuerzas que nacen lentamente,\ncomo la raíz que crece bajo la tierra\nantes de que el árbol pueda sostener sus ramas.",
      "Y cuando el corazón necesite recordar\npor qué vale la pena seguir esperando,\nque vuelva a mirar hacia Aquel\ncuya bondad no depende de las circunstancias.\nPorque la esperanza no siempre acelera los pasos;\na veces, simplemente, evita que se detengan.\nY hay una valentía profundamente hermosa\nen quien, aun sin verlo todo,\ndecide confiar una vez más.",
    ],
  },
  {
    id: "manos-proposito",
    titulo: "4. Salmo 90:17",
    estrofas: [
      "Que el favor del Señor nuestro Dios esté sobre nosotros. Confirma en nosotros la obra de nuestras manos;",
      "Que sus manos encuentren propósito",
      "Hay trabajos que comienzan mucho antes\nde que alguien pueda contemplar sus frutos:\nhoras de preparación, ideas corregidas,\npequeños intentos que vuelven a empezar\ny esfuerzos que nadie alcanza a contar.",
      "Ella conoce algo de ese camino,\nde la dedicación que exige una tarea\ncuando se desea hacerla bien,\nde la paciencia que convierte una intención\nen algo que otros pueden recibir.\nSus manos no solo cumplen labores;\ntambién dan forma a ideas,\nconstruyen recursos y preparan oportunidades.",
      "Pero qué hermoso sería que cada esfuerzo\nencontrara su sentido más profundo\nno únicamente en el resultado alcanzado,\nsino en saber para quién y para qué se realiza.\nQue Dios acompañe sus proyectos,\nafirme lo que nace de una intención buena\ny le conceda sabiduría para distinguir\naquello que merece su tiempo y sus fuerzas.",
      "Que sus manos no trabajen en vano,\nque su creatividad encuentre caminos,\nque el cansancio no le haga olvidar\nla belleza de aquello que está construyendo.\nY que, al mirar atrás después de tanto empeño,\npueda reconocer, más allá de sus propios méritos,\nla gracia de Dios sosteniendo su labor\ny dando propósito a cada paso.",
    ],
  },
  {
    id: "miedo-descansar",
    titulo: "5. Deuteronomio 33:27",
    estrofas: [
      "El Dios eterno es tu refugio; por siempre te sostiene entre sus brazos.",
      "El lugar donde el miedo puede descansar",
      "Hay días en que ser fuerte\nse parece demasiado a no detenerse,\na continuar con las manos ocupadas\naunque el corazón necesite reposo,\na sostener tantas responsabilidades\nque hasta el cansancio aprende a callarse.",
      "Pero Dios no ofrece solamente caminos por recorrer;\ntambién ofrece refugio para quien se fatiga.\nNo pide que sus hijos sean inquebrantables,\nni que oculten cada temblor de sus manos;\nles recuerda que hay brazos eternos\ncapaces de sostenerlos\ncuando sus propias fuerzas disminuyen.",
      "Que ella encuentre allí descanso\ncuando el deber le pese demasiado,\ncuando las preguntas se acumulen\ny no pueda resolverlas todas en un día.\nQue recuerde que su valor no depende\nde cuánto consigue soportar,\ny que detenerse para recuperar fuerzas\nno significa abandonar su propósito.",
      "Porque hay una ternura inmensa\nen saber que no necesita sostenerlo todo,\nque antes de volver a ponerse en pie\npuede dejar descansar su peso en Dios.\nY si alguna vez el mundo le parece demasiado grande,\nque encuentre consuelo en esta verdad:\nel refugio del Eterno no se vuelve pequeño\ncuando crecen las dificultades,\ny sus brazos no se cansan\nde sostener a quien acude a Él.",
    ],
  },
  {
    id: "nombre-oraciones",
    titulo: "6. Filemón 1:4-5",
    estrofas: [
      "Doy gracias a mi Dios siempre, haciendo mención de ti en mis oraciones, [5] porque oigo de tu amor y de la fe que tienes hacia el Señor Jesús.",
      "Su nombre entre mis oraciones",
      "Hay nombres que pronunciamos por costumbre\ny otros que llegan acompañados de gratitud,\nnombres que encuentran un lugar en las oraciones\nporque su existencia se ha convertido\nen un motivo para dar gracias a Dios.",
      "Pensar en ella desde la fe\nes reconocer que su vida no se reduce\na cuanto puede hacer o llegar a ser;\ntambién está hecha de aquello que ama,\nde la confianza que deposita en Cristo\ny de las pequeñas maneras en que su fe\nse vuelve visible en sus decisiones.",
      "Yo quisiera que mis oraciones por ella\nno fueran solamente peticiones para sus días difíciles,\nsino también agradecimientos por su existencia;\nque supieran reconocer sus esfuerzos,\ncelebrar el bien que hay en su corazón\ny encomendar a Dios aquello que yo no puedo alcanzar.\nPorque querer el bienestar de alguien\ntambién significa recordar que su vida\nestá en manos más sabias que las mías.",
      "Y si algún día ella se pregunta\nqué huella deja su manera de vivir,\nojalá encuentre en la memoria de otros\nel testimonio de su amor y de su fe.\nQue su nombre sea recordado con gratitud,\nno por una vida sin tropiezos,\nsino por una fe que procura permanecer\ny un amor que encuentra maneras de hacerse visible.",
    ],
  },
  {
    id: "flor-jardin",
    titulo: "7. Cantares 2:2",
    estrofas: [
      "«Como el lirio entre los espinos, Así es mi amada entre las doncellas».",
      "La flor que no necesita parecerse al jardín",
      "Entre tantos tallos que crecen juntos,\nhay una flor que conserva su delicadeza;\nno porque desconozca los espinos,\nsino porque su belleza no depende\nde que el terreno sea sencillo.",
      "Ella tiene una manera propia de existir,\nuna combinación de inteligencia, carácter y ternura\nque no necesita imitar a nadie\npara encontrar su lugar en el mundo.\nSu singularidad no está en ser distinta por obligación,\nsino en la naturalidad con que reúne\ntantas cualidades bajo un mismo nombre.",
      "Yo no quisiera admirarla\ncomparándola con todas las demás,\ncomo si su valor necesitara una competencia\npara poder ser reconocido.\nPrefiero contemplar aquello que la hace ella:\nsu manera de pensar, sus convicciones,\nla dedicación con que abraza su vocación\ny esos pequeños gestos que solo ella posee.",
      "Porque una flor no necesita demostrar\nque merece crecer entre las otras;\nsu belleza no disminuye por la cercanía\nde cuanto también florece a su alrededor.\nY si alguna vez ella olvida lo particular de su esencia,\nojalá recuerde que no necesita ocupar\nel lugar de ninguna otra mujer:\nhay una forma de florecer que le pertenece,\ny el mundo no necesita que la cambie.",
    ],
  },
  {
    id: "mirada-desarma",
    titulo: "8. Cantares 4:9",
    estrofas: [
      "«Cautivaste mi corazón, hermana y novia mía, con una mirada de tus ojos»",
      "La mirada que desarma mis palabras",
      "Hay miradas que apenas duran un instante\ny, sin embargo, consiguen detener una conversación,\ndesordenar los pensamientos\ny dejar al corazón buscando una explicación\nque nunca termina de encontrar.",
      "La suya tiene ese poder sobre mí:\nno necesito que diga algo extraordinario,\nni que haga un gesto dispuesto a conquistar;\na veces basta con que levante los ojos\npara que todo aquello que pensaba decir\nparezca quedarse esperando en mis labios.",
      "No sé qué guarda su mirada\ncuando permanece pensativa,\nqué historias recorren sus ojos\nni cuántas cosas descubre sin hablar.\nSolo sé que hay momentos en que encontrarme con ellos\nme recuerda que el cariño también se expresa\nen aquello que no necesita pronunciarse,\nen la cercanía que comienza antes del contacto\ny en el silencio que no resulta incómodo.",
      "Quizá por eso mis palabras se quedan cortas\ncuando intento explicar lo que sucede:\nporque no hay argumento que describa\nla forma en que una mirada puede conmoverme.\nY si algún día me preguntaran\ncuándo comenzó a cautivarme su presencia,\ntal vez no encontraría una fecha ni una escena;\nrecordaría, sencillamente, sus ojos\ny la manera en que los míos\nsiempre parecen querer volver a ellos.",
    ],
  },
  {
    id: "estacion-florecer",
    titulo: "9. Isaías 35:2",
    estrofas: [
      "Así es, habrá abundancia de flores, de cantos y de alegría.",
      "La estación que vuelve a florecer",
      "Hay temporadas en que la vida parece guardar sus colores,\ncomo un jardín que atraviesa días silenciosos\nmientras espera que las condiciones cambien\ny la tierra vuelva a ofrecer espacio\npara los brotes que todavía no se ven.",
      "Pero la esperanza habla de abundancia,\nde flores que no se limitan a sobrevivir,\nde cantos que vuelven a encontrar su voz\ny de una alegría que puede abrirse paso\ndespués de tiempos menos amables.\nNo todo lo que parece detenido\nha dejado de prepararse para florecer.",
      "Que ella pueda conocer esas estaciones,\nque sus esfuerzos encuentren descanso,\nque su vocación le regale motivos para sonreír\ny que sus días no estén hechos únicamente\nde responsabilidades que cumplir.\nQue también haya espacio para el asombro,\npara los proyectos que ilusionan,\npara la risa que llega sin ser convocada\ny para las pequeñas alegrías que alivian el alma.",
      "Porque la vida no debería medirse\nsolamente por cuánto se ha conseguido,\nsino también por los momentos\nen que el corazón vuelve a sentirse vivo.\nY si alguna estación le ha parecido demasiado larga,\nque la promesa de Dios le recuerde\nque todavía puede haber flores por descubrir,\ncantos que aún no ha escuchado\ny alegrías que no han llegado a su puerta.",
    ],
  },
  {
    id: "fortaleza-abrazar",
    titulo: "10. Nahúm 1:7",
    estrofas: [
      "“Bueno es el Señor, Una fortaleza en el día de la angustia, Y conoce a los que en Él se refugian.”",
      "La fortaleza que también sabe abrazar",
      "Hay fortalezas que se construyen con piedra,\nparedes altas y puertas que no ceden;\npero la fortaleza de Dios no se parece\na un lugar frío donde uno se esconde,\nsino a un refugio donde el corazón\npuede descansar sin fingir que no le duele.",
      "Él conoce a quienes acuden a su presencia,\na quienes llegan con preguntas sin resolver,\ncon la voz cansada y las manos vacías,\nsin saber cómo ordenar lo que sienten.\nNo necesitan presentar una versión invulnerable\npara encontrar cabida en su cuidado;\npueden llegar tal como están,\nporque su bondad no depende de las apariencias.",
      "Que ella recuerde esta verdad\ncuando la angustia nuble sus pensamientos,\ncuando las responsabilidades parezcan crecer\nmás rápido que sus fuerzas\ny cuando no encuentre palabras suficientes\npara explicar aquello que la inquieta.\nQue pueda hacer una pausa y refugiarse en Dios,\nsin sentirse culpable por necesitar descanso,\nsin creer que la fe le exige no sentir temor.",
      "Porque la bondad del Señor\nno consiste en prometer días sin tormentas,\nsino en ser refugio cuando llegan.\nY hay un consuelo profundo en saber\nque no es necesario atravesar cada dificultad a solas:\nel Dios que conoce sus caminos\ntambién conoce su corazón,\ny en medio de la angustia\nsigue siendo digno de confianza.",
    ],
  },
  {
    id: "cielo-inspira-manos",
    titulo: "11. Éxodo 31:3",
    estrofas: [
      "y lo he llenado del Espíritu de Dios, de sabiduría, inteligencia y capacidad creativa",
      "Cuando el cielo inspira las manos",
      "Hay talentos que parecen comenzar en las manos,\npero antes de tomar forma\nhan recorrido los caminos secretos de la mente:\nuna idea que se transforma,\nun detalle que encuentra su sitio,\nuna posibilidad que alguien se atreve a imaginar.",
      "En ella, la creatividad encuentra terreno fértil.\nSu inteligencia busca soluciones,\nsu imaginación descubre alternativas\ny su dedicación procura darles forma.\nA veces, aquello que comienza como una tarea\ntermina convertido en algo que lleva su sello,\ncomo si cada creación conservara\nuna pequeña huella de quien la pensó.",
      "Qué hermoso es reconocer que la capacidad de crear\nno tiene que convertirse en motivo de orgullo,\nsino en una oportunidad para servir.\nLos talentos pueden abrir puertas,\npero también pueden preparar materiales,\nfacilitar el aprendizaje, embellecer una idea\ny ayudar a otros a descubrir lo que antes no veían.\nLa creatividad se vuelve aún más valiosa\ncuando encuentra un propósito más grande que ella misma.",
      "Que Dios continúe cultivando en ella\nla sabiduría para elegir,\nla inteligencia para comprender\ny la imaginación para crear nuevos caminos.\nQue no desprecie las ideas que apenas comienzan\nni se acostumbre a esconder sus capacidades.\nY que, al mirar lo que sus manos producen,\npueda recordar que cada talento es también\nuna oportunidad de poner algo bueno en el mundo.",
    ],
  },
  {
    id: "tres-deseos",
    titulo: "12. Números 6:24-26",
    estrofas: [
      "»“El Señor te bendiga y te guarde;\n25 el Señor haga resplandecer su rostro sobre ti y te extienda su amor;\n26 el Señor mueva su rostro hacia ti y te conceda la paz”.",
      "Tres deseos para el camino de su vida",
      "Que Dios guarde sus pasos\ncuando conozca caminos nuevos\ny cuando deba volver a recorrer\naquellos que ya le resultan familiares.\nQue la proteja sin apagar su valentía,\nque la acompañe sin impedirle crecer\ny que nunca le falte un refugio\nal que acudir cuando necesite descanso.",
      "Que la luz de su rostro la alcance\nincluso en los días en que dude de sí misma;\nque su amor le recuerde que su valor\nno depende de la aprobación de otros\nni de la perfección de sus resultados.\nQue encuentre gracia para comenzar de nuevo,\npaciencia para aprender de sus errores\ny consuelo cuando las cosas no salgan\ncomo había esperado.",
      "Que Dios le conceda una paz profunda,\nde esas que no exigen que todo esté resuelto\npara poder descansar por dentro.\nQue aquiete las preocupaciones que la desvelan,\nle dé sabiduría para distinguir lo importante\ny le permita soltar aquello\nque nunca estuvo en sus manos controlar.",
      "Y si pudiera reunir en una sola oración\ntodo lo bueno que deseo para ella,\npediría que esta bendición la acompañara:\nque Dios la guarde en sus caminos,\nla abrace con su amor\ny haga de su corazón un lugar donde la paz\npueda echar raíces y permanecer.\nPorque hay regalos que se agotan con el tiempo,\npero la bendición del Señor\npuede acompañarla en cada estación de su vida.",
    ],
  },
  {
    id: "palabra-pasos",
    titulo: "13. Josué 1:8",
    estrofas: [
      "Recita siempre el libro de la Ley y medita en él de día y de noche; cumple con cuidado todo lo que en él está escrito. Así prosperarás y tendrás éxito.",
      "Que la Palabra encuentre casa en sus pasos",
      "Hay palabras que se leen una vez\ny otras que necesitan acompañar los días,\nvolver a la memoria en medio de una decisión\ny encontrar su lugar en la conducta\nmucho después de cerrar el libro.",
      "La Palabra de Dios no fue entregada\npara permanecer como tinta sobre las páginas,\nsino para iluminar el pensamiento,\norientar las decisiones\ny enseñar al corazón a reconocer\nel camino que merece ser recorrido.\nMeditar es permitir que la verdad permanezca,\nque examine nuestras intenciones\ny transforme poco a poco nuestra manera de vivir.",
      "En ella admiro esa disposición de aprender,\nesa seriedad con que procura comprender\nlo que considera importante.\nY deseo que ese amor por el conocimiento\nencuentre siempre en la Escritura\nuna fuente que no se agote con las respuestas,\nsino que la conduzca a una obediencia más profunda,\na una fe más firme\ny a una vida cada vez más coherente con lo que cree.",
      "Que nunca le falten hambre de Palabra\nni humildad para dejarse enseñar;\nque sus decisiones nazcan de la sabiduría\ny sus pasos encuentren dirección en Dios.\nPorque el verdadero fruto de meditar en la Escritura\nno consiste solamente en saber más,\nsino en permitir que aquello que se conoce\nse convierta, día tras día,\nen una manera más fiel de caminar.",
    ],
  },
  {
    id: "pasos-mios",
    titulo: "14. Rut 1:16",
    estrofas: [
      "«¡No insistas en que te abandone o en que me separe de ti! Porque iré adonde tú vayas y viviré donde tú vivas. Tu pueblo será mi pueblo y tu Dios será mi Dios.",
      "Donde sus pasos encuentren los míos",
      "Hay decisiones que se pronuncian una sola vez,\npero cuyo significado se demuestra con los años;\npromesas que no se sostienen por la emoción del instante,\nsino por la voluntad de permanecer\ncuando el camino deja de ser sencillo.",
      "Las palabras de Rut contienen esa firmeza:\nla elección de acompañar,\nde compartir un destino desconocido\ny de no permitir que la incertidumbre\ndeshaga aquello que el corazón ha decidido.\nNo se trata de ignorar las dificultades,\nsino de reconocer que hay vínculos\npor los que vale la pena caminar\nincluso cuando no se conoce el paisaje.",
      "Al pensar en este pasaje,\ncomprendo que el amor no debería ser una cadena\nque impida al otro crecer,\nsino una compañía que aprende a caminar a su lado.\nUn vínculo donde ambos puedan conservar su identidad,\ncompartir sus convicciones\ny encontrar motivos para continuar eligiéndose\nsin convertir la permanencia en una obligación vacía.",
      "Y si algún día la vida nos lleva\npor caminos que todavía no imaginamos,\nquisiera que nuestras decisiones\nnacieran de una voluntad sincera de construir,\nde una fe que nos enseñe a amar mejor\ny de una compañía que no tema madurar.\nPorque hay promesas que no se honran\nrepitiéndolas con más fuerza,\nsino convirtiéndolas, con paciencia,\nen la forma cotidiana de permanecer.",
    ],
  },
  {
    id: "vina-sola",
    titulo: "15. Isaías 27:3",
    estrofas: [
      "Yo, el Señor, soy su guardián; todo el tiempo riego mi viña.Día y noche cuido de ella para que nadie le haga daño.",
      "La viña que no queda sola",
      "Una viña necesita más que tierra fértil\npara llegar a ofrecer sus frutos;\nnecesita cuidado constante,\nagua en el tiempo oportuno\ny manos que comprendan\nque el crecimiento no puede apresurarse.",
      "Dios se presenta como guardián de su viña,\ncomo quien no olvida aquello que ha plantado\nni deja de atenderlo cuando cambia la estación.\nSu cuidado no depende de que las ramas florezcan\na la velocidad que alguien espera,\nporque conoce los tiempos de cada brote\ny sabe cuánto necesita para crecer.",
      "Que ella encuentre consuelo en esa imagen:\nsu vida no está abandonada a la intemperie,\nsus esfuerzos no escapan a la mirada de Dios\ny sus temporadas de crecimiento\nno tienen que parecerse a las de nadie más.\nQue aprenda a descansar en el cuidado divino\nsin dejar de hacer su parte,\na reconocer cuándo necesita agua\ny cuándo ha llegado el momento de esperar.",
      "Porque hasta los jardines más hermosos\natraviesan días de lluvia y temporadas secas;\nninguna raíz crece sin atravesar la tierra,\nni todo fruto aparece de inmediato.\nPero hay una promesa de cuidado\nen saber que Dios no se desentiende de su obra.\nY mientras ella continúa creciendo,\nque pueda vivir con la confianza\nde quien sabe que el Guardián de la viña\nno ha olvidado el jardín que le pertenece.",
    ],
  },
  {
    id: "montanas-firmes",
    titulo: "16. Isaías 54:10",
    estrofas: [
      "Las montañas podrán cambiar de lugar,\nlos cerros podrán venirse abajo,\npero mi amor por ti no cambiará.\nSiempre estaré a tu lado\ny juntos viviremos en paz.\nTe juro que tendré compasión de ti.",
      "Cuando hasta las montañas dejan de ser firmes",
      "Hay cosas que parecen hechas para permanecer:\nmontañas que dominan el horizonte,\ncerros que han visto pasar generaciones,\npaisajes que nos hacen creer\nque ciertas formas del mundo nunca cambiarán.\nPero incluso aquello que parece inamovible\npuede transformarse con el tiempo.",
      "En medio de esa imagen,\nDios ofrece una promesa distinta:\nsu amor no depende de la estabilidad del paisaje,\nni se deshace cuando aquello que parecía seguro\ndeja de ocupar el mismo lugar.\nSu fidelidad no necesita que la vida permanezca intacta;\npuede sostenernos precisamente\ncuando las certezas comienzan a derrumbarse.",
      "Que ella recuerde esta promesa\ncuando atraviese cambios que no esperaba,\ncuando alguna etapa termine\no cuando el futuro le exija aprender\na vivir de una manera diferente.\nQue no mida el amor de Dios\npor la ausencia de dificultades,\nsino por la firmeza de Aquel\nque permanece aun cuando todo cambia.",
      "Porque hay una paz que no nace\nde tener cada cosa en su sitio,\nsino de saber quién permanece\ncuando el mundo deja de parecer familiar.\nY si alguna montaña de su vida\nllegara a perder su antigua forma,\nque esta promesa permanezca en su corazón:\nlo que cambia a su alrededor\nno puede convertir en inconstante\nel amor con que Dios ha decidido amarla.",
    ],
  },
  {
    id: "tiempo-contar",
    titulo: "17. Jeremías 31:3",
    estrofas: [
      "Con amor eterno te he amado",
      "Antes de que el tiempo supiera contar",
      "Hay palabras que necesitan muchas páginas\npara intentar explicar lo que contienen,\ny otras que, con apenas unas pocas sílabas,\nalcanzan una profundidad\nque el pensamiento tarda en comprender.",
      "Con amor eterno te he amado.\nNo es una promesa que se limite a un día favorable,\nni un cariño que dependa de la perfección\nde quien lo recibe.\nEs la declaración de un amor\ncuya raíz no se encuentra en los méritos humanos,\nsino en el corazón de quien ama.",
      "Que ella pueda descansar en esa verdad\ncuando sus propios pensamientos la cuestionen,\ncuando no se sienta suficiente\no cuando crea que debe ganarse\naquello que Dios ofrece por gracia.\nQue no confunda sus errores con su identidad,\nni sus temporadas difíciles con el final de su historia.\nHay un amor que llama al arrepentimiento,\nacompaña el crecimiento\ny no deja de ser fiel.",
      "Y si alguna vez las palabras humanas\nle parecen demasiado frágiles para sostenerla,\nque vuelva a esta promesa sencilla,\ntan breve que cabe en un suspiro\ny tan profunda que acompaña toda una vida.\nPorque el tiempo cambia los rostros,\ntransforma los caminos\ny nos enseña a despedirnos de muchas cosas;\npero el amor eterno de Dios\nno se mide con el reloj de nuestras estaciones.",
    ],
  },
  {
    id: "camino-regreso",
    titulo: "18. Oseas 12:6 Palabra de Dios para Todos",
    estrofas: [
      "Y tú vuelve a tu Dios,\nten fiel amor, sé justo\ny confía siempre en él.",
      "El camino de regreso también florece",
      "Hay caminos que no siempre se recorren en línea recta,\npasos que necesitan corregirse\ny temporadas en que el corazón\ndebe recordar hacia dónde desea volver.\nLa fe no consiste en fingir que nunca nos desviamos,\nsino en reconocer la dirección\ny tener la humildad de regresar.",
      "Volver a Dios es más que pronunciar su nombre;\nes permitir que su voluntad vuelva a orientar la vida,\nque la fidelidad se haga visible en el trato con otros\ny que la justicia acompañe nuestras decisiones.\nEs comprender que la confianza\nno se demuestra solamente en lo que decimos creer,\nsino también en aquello que elegimos practicar\ncuando nadie nos observa.",
      "Que ella conserve un corazón dispuesto a regresar,\ncapaz de reconocer sus errores sin rendirse a ellos,\nde actuar con rectitud incluso cuando cueste\ny de seguir confiando cuando falten respuestas.\nQue su fe no se convierta en una costumbre vacía,\nsino en una relación que transforma sus prioridades,\nsu manera de amar\ny la forma en que trata a quienes la rodean.",
      "Porque la madurez espiritual no significa\nhaber llegado a un lugar donde ya no hay nada que aprender;\nsignifica permanecer dispuesta a ser enseñada,\ncorregida y conducida por Dios.\nY en ese regreso constante,\nen esa fidelidad que se renueva\ny en esa confianza que vuelve a elegirlo,\nhay una belleza serena:\nla de quien no necesita ser perfecta\npara continuar caminando con su Señor.",
    ],
  },
  {
    id: "reconocer-gloria",
    titulo: "19. Habacuc 2:14",
    estrofas: [
      "Porque se llenará la tierra con el conocimiento de la gloria del Señor\nasí como las aguas cubren los mares.",
      "Hasta que el mundo aprenda a reconocer su gloria",
      "Hay horizontes tan amplios\nque la mirada no consigue abarcar sus límites,\nmares que reciben incontables corrientes\ny aguas que cubren la tierra\nsin dejar de avanzar.",
      "Así imagina el profeta\nla plenitud del conocimiento de Dios:\nno como una verdad escondida para unos pocos,\nsino como una gloria que alcanzará\nuna extensión que hoy apenas podemos imaginar.\nLo que ahora parece fragmentario\nun día será conocido con una claridad\nque supera nuestras pequeñas perspectivas.",
      "Que esa esperanza ensanche también el corazón de ella,\nque no reduzca a Dios a lo que alcanza a comprender\nni confunda el silencio de una temporada\ncon la ausencia de su propósito.\nHay mucho que todavía no sabemos,\nmucho que permanece más allá de nuestra mirada,\ny aun así podemos seguir buscando\ncon humildad, reverencia y confianza.",
      "Porque conocer la gloria del Señor\nno es solamente aprender datos acerca de Él;\nes reconocer su grandeza,\ndejar que esa verdad ordene nuestras prioridades\ny vivir de una manera que señale hacia su bondad.\nY mientras llega el día de aquella plenitud,\nque ella encuentre alegría en seguir aprendiendo,\nen compartir lo que descubre\ny en vivir con la esperanza\nde que el conocimiento de Dios\nalcanzará mucho más lejos\nde lo que hoy pueden imaginar nuestros ojos.",
    ],
  },
  {
    id: "fragancia-cristo",
    titulo: "20. 2 Corintios 2:14",
    estrofas: [
      "Sin embargo, gracias a Dios que en Cristo siempre nos lleva triunfantes y, por medio de nosotros, esparce por todas partes la fragancia de su conocimiento.",
      "La fragancia de una vida que señala a Cristo",
      "Hay aromas que permanecen\nmucho después de que alguien se ha marchado,\nuna presencia invisible que recuerda\nque algo hermoso estuvo allí.\nNo se puede tomar entre las manos,\npero sí reconocer en el aire\ncuando vuelve a rozar la memoria.",
      "Pablo describe la difusión del conocimiento de Cristo\ncomo una fragancia que se extiende.\nLa imagen recuerda que el testimonio cristiano\nno se limita a las palabras pronunciadas,\nsino que también se manifiesta\nen la manera de vivir, servir y tratar a los demás.\nLa fe encuentra caminos para hacerse visible\nsin necesitar que cada gesto anuncie su intención.",
      "Que la vida de ella conserve esa fragancia:\nen su manera de enseñar,\nen la paciencia con que acompaña a otros,\nen sus decisiones y en la fidelidad con que sirve.\nQue quienes compartan sus días\npuedan encontrar en su conducta\nalguna razón para preguntarse\npor la esperanza que sostiene su corazón.",
      "Porque el propósito no es que la recuerden\ncomo alguien que nunca cometió errores,\nsino como alguien cuya vida apuntaba hacia Cristo.\nY aunque la fragancia no se vea\nni pueda guardarse en una vitrina,\npuede recorrer lugares que sus pasos no alcanzan\ny permanecer en corazones que quizá nunca sabrá nombrar.\nQue su testimonio sea así:\ndiscreto, sincero y extendido,\ncomo el aroma de una vida\nque ha aprendido a caminar con su Señor.",
    ],
  },
  {
    id: "obra-floreciendo",
    titulo: "21. Efesios 2:10",
    estrofas: [
      "Pues somos la obra maestra de Dios. Él nos creó de nuevo en Cristo Jesús, a fin de que hagamos las cosas buenas que preparó para nosotros tiempo atrás.",
      "La obra que todavía está floreciendo",
      "Hay obras que se contemplan como algo terminado,\ncon cada detalle en su lugar\ny cada trazo dispuesto para ser admirado;\npero hay otras cuya belleza también reside\nen aquello que todavía están llegando a ser.",
      "Ella tiene talentos que merece descubrir,\ncapacidades que aún pueden desarrollarse\ny caminos que quizá todavía no ha recorrido.\nA veces, la exigencia de hacerlo todo bien\npuede hacerle olvidar que crecer lleva tiempo,\nque aprender también implica equivocarse\ny que ninguna vida se comprende\nmirando solamente una de sus etapas.",
      "La Escritura recuerda que nuestra identidad\nno comienza en nuestros logros,\nni depende de la perfección de nuestras manos.\nSomos obra de Dios, creados en Cristo\npara caminar en las buenas obras que Él preparó.\nNo se trata de ganarnos su amor mediante el esfuerzo,\nsino de responder a su gracia\nviviendo de acuerdo con el propósito recibido.",
      "Y yo deseo que ella pueda contemplar su vida\ncon esa perspectiva más amplia:\nsin despreciar lo que ya ha aprendido,\nsin desesperarse por lo que todavía le falta\ny sin olvidar que sus talentos tienen un propósito.\nQue encuentre alegría en servir,\nhumildad para continuar creciendo\ny confianza para dar el siguiente paso.\nPorque su historia no está hecha solamente\nde lo que ha conseguido hasta ahora,\nsino también de las buenas obras\nque todavía podrá realizar caminando con Cristo.",
    ],
  },
  {
    id: "jardin-pensamientos",
    titulo: "22. Filipenses 4:8",
    estrofas: [
      "En fin, hermanos, piensen en todo lo que es verdadero, noble, correcto, puro, hermoso y admirable. También piensen en lo que tiene alguna virtud, en lo que es digno de reconocimiento. Mantengan su mente ocupada en eso.",
      "El jardín que cultiva con sus pensamientos",
      "La mente también tiene estaciones,\ndías en que las ideas florecen\ny otros en que las preocupaciones\nparecen crecer sin pedir permiso.\nNo todo pensamiento que llega\nmerece convertirse en huésped permanente,\nni toda duda merece ocupar la casa entera.",
      "Hay una sabiduría particular\nen aprender a dirigir la mirada interior,\nen reconocer lo verdadero entre tantas voces,\nlo noble entre tantas distracciones,\nlo hermoso entre las cosas que pasan inadvertidas.\nNo significa ignorar las dificultades,\nsino evitar que sean lo único\nque los ojos del corazón aprendan a contemplar.",
      "Ella, que tiene una mente tan dispuesta a analizar,\ntambién merece encontrar descanso\nen aquello que es bueno y digno de admiración.\nQue no dedique toda su inteligencia\na examinar lo que salió mal,\nni toda su atención a las imperfecciones;\nque también se permita reconocer sus avances,\ndisfrutar de lo bello\ny agradecer las cosas que sí están floreciendo.",
      "Porque aquello que contemplamos con frecuencia\ntermina influyendo en nuestra manera de vivir.\nY así como un jardín necesita cuidado\npara que las malas hierbas no lo dominen,\nla mente necesita aprender a elegir\nqué pensamientos alimentar y cuáles dejar pasar.\nQue en la suya siempre haya espacio\npara la verdad, la virtud y la belleza,\ny que nunca olvide que mirar lo bueno\ntambién es una forma de cultivar la esperanza.",
    ],
  },
  {
    id: "adorno-belleza",
    titulo: "23. 1 Timoteo 2:10",
    estrofas: [
      "Que se adornen más bien con buenas obras, como corresponde a mujeres que profesan servir a Dios.",
      "El adorno que no pierde su belleza",
      "Hay adornos que brillan mientras reciben la luz,\nque atraen la mirada por un momento\ny después vuelven a descansar\nen el silencio de las cosas materiales.\nPero existen otras formas de belleza\nque no dependen de un espejo\nni necesitan ser exhibidas para tener valor.",
      "Las buenas obras pertenecen a esa belleza:\nse reconocen en la generosidad,\nen la disposición de ayudar,\nen la honestidad que permanece\ncuando nadie está pendiente\ny en el servicio que no busca aplausos.\nSon adornos que no se llevan sobre la piel,\nsino que se manifiestan en la manera de vivir.",
      "En ella admiro esa posibilidad\nde unir sus capacidades con el servicio,\nde poner su inteligencia al alcance de otros\ny de convertir su vocación en una oportunidad\npara hacer algo bueno por quienes la rodean.\nQue nunca olvide que los talentos\nadquieren un significado más profundo\ncuando se emplean con amor y responsabilidad,\ny que la belleza de servir a Dios\nno necesita competir con ninguna otra.",
      "Porque el adorno más valioso\nno siempre es el que todos pueden contemplar,\nsino aquel cuyo efecto permanece\nen la vida de quienes lo reciben.\nQue sus manos sigan encontrando maneras de ayudar,\nque su carácter se fortalezca en lo justo\ny que sus obras hablen con sencillez\nde la fe que procura vivir.\nAsí, su belleza no será solamente algo que se admira,\nsino también algo bueno que otros podrán experimentar.",
    ],
  },
  {
    id: "voz-ensenar",
    titulo: "24. 2 Timoteo 4:2",
    estrofas: [
      "Predica la palabra; persiste en hacerlo, sea o no sea oportuno; corrige, reprende y anima con mucha paciencia, sin dejar de enseñar.",
      "La voz que permanece cuando enseñar cuesta",
      "Hay palabras que resultan fáciles de pronunciar\ncuando todos están dispuestos a escuchar,\npero enseñar también exige permanecer\ncuando la atención se dispersa,\ncuando una explicación necesita repetirse\ny cuando los resultados tardan en aparecer.",
      "La vocación de enseñar requiere más que conocimiento;\nnecesita paciencia para acompañar procesos,\nvalor para decir aquello que debe corregirse\ny sensibilidad para recordar\nque una palabra puede construir o herir.\nLa verdad no pierde su importancia por ser difícil,\npero quien la comparte necesita aprender\na hacerlo con la sabiduría y el amor\nque permiten que otros puedan recibirla.",
      "En ella encuentro una vocación\nque merece ser cultivada con cuidado:\nsu capacidad de comunicar,\nsu deseo de aprender\ny la dedicación que pone en preparar a otros.\nQue Dios le conceda discernimiento\npara saber cuándo corregir y cuándo animar,\ncómo sostener la verdad sin perder la ternura\ny cómo perseverar sin permitir\nque el cansancio apague su propósito.",
      "Porque enseñar no siempre ofrece\nla recompensa inmediata que uno espera;\na veces, la semilla queda bajo tierra\ndurante mucho tiempo antes de dar señales.\nQue ella no mida toda su labor\npor lo que consigue ver al final de cada jornada,\nsino que encuentre fuerzas para continuar\nsabiendo que la paciencia también forma parte\nde aquello que está llamada a sembrar.",
    ],
  },
  {
    id: "manos-preparadas",
    titulo: "25. Hebreos 13:21",
    estrofas: [
      "Que él los capacite en todo lo bueno para hacer su voluntad. Y que, por medio de Jesucristo, Dios cumpla en nosotros lo que le agrada. A él sea la gloria por siempre jamás. Amén.",
      "Manos preparadas para lo que Dios encomienda",
      "Hay propósitos que despiertan ilusión\ny otros que revelan cuánto nos falta aprender.\nEntre ambos se extiende el camino\nde quien desea servir a Dios\nsin confiar únicamente en sus propias fuerzas.",
      "Porque tener una vocación no significa\nestar preparada para cada dificultad,\nni poseer desde el comienzo\ntodas las respuestas que harán falta.\nTambién significa aprender, corregirse,\nrecibir dirección y permitir que Dios\nforme el carácter junto con las capacidades.\nEl propósito no elimina el proceso;\nmuchas veces, lo convierte en necesario.",
      "Que ella nunca sienta que debe hacerlo todo sola,\nni que sus talentos son suficientes\npara enfrentar cada desafío de su llamado.\nQue Dios le conceda sabiduría cuando deba elegir,\npaciencia cuando los frutos tarden,\nhumildad cuando necesite aprender\ny fortaleza cuando servir implique sacrificio.\nQue sus capacidades continúen creciendo,\npero que su confianza permanezca\nen Aquel que puede prepararla para hacer el bien.",
      "Y cuando llegue el momento de mirar atrás,\nque no vea únicamente lo que sus manos lograron,\nsino también la manera en que Dios las sostuvo,\nlas veces que recibió fuerzas inesperadas\ny las lecciones que transformaron su corazón.\nPorque el propósito más hermoso\nno consiste en construir una obra para la propia gloria,\nsino en permitir que la vida entera\nse convierta en una respuesta de gratitud\na quien la llamó, la capacitó\ny sigue obrando en ella.",
    ],
  },
  {
    id: "fuego-fe",
    titulo: "26. 1 Pedro 1:7",
    estrofas: [
      "para que la prueba de la fe de ustedes, más preciosa que el oro que perece, aunque probado por fuego, sea hallada que resulta en alabanza, gloria y honor en la revelación de Jesucristo",
      "Lo que el fuego no puede llevarse",
      "Hay procesos que nadie escogería voluntariamente,\ntemporadas en que la fe es puesta a prueba\ny el corazón debe aprender a caminar\nsin tener todas las respuestas a la mano.\nEl fuego no pregunta si estamos preparados;\nsimplemente revela aquello que necesita ser examinado.",
      "Pedro compara la fe probada con el oro,\nun metal valioso que atraviesa la llama\ny cuya pureza se pone a prueba en el proceso.\nPero la comparación no convierte el dolor en algo sencillo\nni exige que quien sufre deje de sentirse vulnerable.\nLa fe puede temblar, hacer preguntas\ny necesitar consuelo sin dejar de ser fe.",
      "Que ella encuentre fortaleza en Dios\ncuando la vida no se desarrolle como esperaba,\ncuando sus esfuerzos parezcan insuficientes\no cuando alguna prueba le haga dudar\nde cuánto puede soportar.\nQue no se juzgue por los días en que llora,\nni confunda el cansancio con una derrota espiritual.\nA veces, perseverar significa seguir confiando\nmientras se aprende a atravesar el día presente.",
      "Porque el valor de una fe\nno se mide por la ausencia de dificultades,\nsino por Aquel en quien ha puesto su confianza.\nQue, al pasar por las pruebas,\nsu esperanza no quede reducida a cenizas,\nsino que encuentre en Cristo un fundamento firme.\nY que, cuando finalmente pueda mirar atrás,\ndescubra que el fuego no tuvo la última palabra,\nque Dios permaneció fiel\ny que aquello que parecía destinado a quebrarla\nno pudo arrebatarle la esperanza\nque había aprendido a depositar en Él.",
    ],
  },
  {
    id: "temor-soltar",
    titulo: "27. 1 Juan 4:18",
    estrofas: [
      "En el amor no hay temor, sino que el perfecto amor echa fuera el temor",
      "Donde el temor aprende a soltar",
      "Hay temores que llegan sin hacer ruido,\nque se instalan entre los pensamientos\ny enseñan al corazón a esperar lo peor\nincluso cuando todavía no ha ocurrido nada.\nA veces, el miedo intenta protegernos\nconstruyendo paredes alrededor de aquello\nque más deseamos conservar.",
      "Pero el amor de Dios no alimenta esas cadenas;\nsu amor nos invita a descansar en su carácter,\na confiar en su verdad\ny a dejar de vivir como si el temor\nfuera el dueño de cada decisión.\nEl amor perfecto no significa\nque nunca volveremos a sentir inquietud,\nsino que el miedo no tiene por qué gobernarnos\ncuando aprendemos a conocer a quien nos ama.",
      "Que ella pueda descansar en esa certeza,\nque no tenga que demostrar su valor\nni vivir intentando anticipar cada pérdida.\nQue encuentre en el amor de Dios\nuna seguridad que no dependa\nde tener todo bajo control,\ny que su corazón aprenda poco a poco\na distinguir entre la prudencia que protege\ny el temor que impide vivir.",
      "Y yo también deseo aprender esa lección:\namar sin convertir la incertidumbre en una amenaza,\ncuidar sin intentar controlar cada desenlace\ny confiar en Dios incluso cuando no sé\ncómo se desarrollará el mañana.\nPorque el amor no se vuelve más verdadero\npor vivir constantemente asustado;\ncrece cuando encuentra espacio para la confianza,\npara la libertad y para la paz.\nY allí donde el amor de Dios echa raíces,\nel temor puede dejar de ocupar el trono\ny aprender, por fin, a soltar.",
    ],
  },
],
  },
  {
    id: "contemplaciones",
    numero: "II",
    titulo: "Contemplaciones",
    subtitulo: "De la belleza que merece ser mirada despacio",
    epigrafe: "«Hay bellezas que no se agotan en los ojos,sino que permanecen en quien aprende a mirar.»",

poemas: [
  {
    id: "arquitectura-mente",
    titulo: "1. La arquitectura secreta de su mente",
    estrofas: [
      "En su mente habitan mundos silenciosos,\npreguntas que florecen sin pedir permiso;\ny una hermosa manera de encontrar caminos\ndonde otros solo encuentran precipicios.",
      "Pero a veces se exige tanto\nque olvida mirar cuánto ha florecido;\nquisiera prestarle por un instante mis ojos\npara mostrarle todo lo que admiro.",
      "Que pudiera descubrirse sin reproches,\nsin medir su valor por lo que le falta;\ny abrazar con ternura esa inteligencia\nque tantas veces se juzga y se desgasta.",
      "Porque su mente no solo comprende el mundo,\ntambién transforma mi manera de mirarlo;\ny si supiera cuánto admiro lo que es,\nquizá aprendería a admirarse un poco.",
    ],
  },
  {
    id: "arte-mirar",
    titulo: "2. El arte de mirar más allá",
    estrofas: [
      "Donde otros dan por terminada una pregunta,\nella descubre una puerta entreabierta.",
      "Sigue una idea con la paciencia\nde quien escucha la lluvia hasta entenderla.",
      "A veces le duele no saberlo todo,\ncomo si una duda le restara valor.\nQuisiera decirle que incluso en su incertidumbre\nhay una forma silenciosa de valentía:\nno teme mirar lo que desconoce\nni regresar al inicio para comprenderlo.",
      "Cuando habla de lo que acaba de descubrir,\nsus ojos parecen llenarse de caminos.\nYo la escucho, y aquello que creía pequeño\nse ensancha un poco más conmigo.\nOjalá recuerde que no necesita saberlo todo\npara hacer extraordinaria su manera de buscar.",
    ],
  },
  {
    id: "raices",
    titulo: "3. Las raíces que no negocia",
    estrofas: [
      "Tiene raíces que el viento no convence,\naunque a veces le duela permanecer.",
      "No elige lo correcto porque sea fácil;\nse pregunta qué merece defender.",
      "La imagino frente a esos días\ncuando ceder parece la salida más amable.\nNo sé cuánto le cuesta decir que no,\nni qué dudas guarda cuando nadie la mira;\nsolo sé que su firmeza no hace ruido\ny aun así tiene el peso de lo verdadero.",
      "Me conmueve esa lealtad a sí misma,\ntan poco dispuesta a venderse por encajar.\nComo un árbol que se aferra a la tierra,\nno presume aquello que lo sostiene.\nY quisiera que, al sentirse sola alguna vez,\nrecordara que también es hermoso permanecer.",
    ],
  },
  {
    id: "pequenas-victorias",
    titulo: "4. Las pequeñas gran victorias",
    estrofas: [
      "Ella avanza sin pedirle aplausos al día;\nsabe que insistir también es una forma de fe.",
      "En sus manos, las promesas más pequeñas\nencuentran el modo de cumplirse.",
      "No siempre imagino fácil su camino:\nhabrá mañanas de cansancio y de dudas,\ntareas que parecen no terminar,\nmetas que se alejan mientras camina.\nPero aun en esos días la sostiene\nesa voluntad serena de intentarlo otra vez.",
      "Quisiera reunir sus victorias diminutas:\nlas veces que se levantó sin ganas,\nlos esfuerzos que nadie vio,\nlas renuncias que no contó.\nY ponerlas ante sus ojos para decirle:\nmira cuánto has logrado mientras seguías adelante.",
    ],
  },
  {
    id: "jardin-posibilidades",
    titulo: "5. El jardín de posibilidades",
    estrofas: [
      "En ella crecen talentos diferentes,\ncomo flores que no necesitan parecerse.",
      "Lo que aprende encuentra pronto sus manos;\nuna idea se vuelve intento, y el intento, camino.\nA veces la miro ocupada entre tantos brotes\ny pienso que no ve el jardín que ha cuidado.\nTal vez confunde sus dones con obligaciones,\ncomo si florecer también fuera una deuda.",
      "Quisiera que descansara de esa exigencia,\nque dejara alguna rama crecer sin vigilarla.\nNo todo debe dar fruto en la misma estación,\nni cada habilidad convertirse en una prueba.\nHay belleza en lo que todavía no comienza\ny ternura en aquello que se aprende despacio.",
      "Si algún día siente que no le alcanzan las manos,\nle recordaría que ningún jardín florece de golpe.\nCada semilla guarda su propio calendario,\ncada color llega cuando encuentra su luz.\nElla no tiene que serlo todo a la vez:\nya es un mundo hermoso mientras va creciendo.",
    ],
  },
  {
    id: "mundos-nuevos",
    titulo: "6. El hambre de los mundos nuevos",
    estrofas: [
      "Aprende como quien abre una ventana\ny enseña como quien comparte la luz.",
      "Sus preguntas nunca se quedan quietas:\nbuscan un nombre, una razón, otra orilla.\nY cuando al fin comprende algo difícil,\npiensa también en cómo hacerlo cercano,\ncomo si ninguna puerta estuviera del todo abierta\nhasta que alguien más pudiera cruzarla.",
      "Me enternece esa manera de compartir,\nde volver sencillo lo que antes daba miedo.\nImagino su paciencia buscando palabras nuevas,\nuna explicación distinta, un ejemplo pequeño.\nNo enseña para que admiren lo que sabe,\nsino para que otros descubran lo que pueden.",
      "Tal vez nunca vea hasta dónde llegan\nlas ideas que deja en otras manos.\nAlguien recordará su voz ante una dificultad,\nalguien se atreverá a preguntar de nuevo.\nY mientras ella continúa aprendiendo,\nsus pequeños descubrimientos seguirán creciendo lejos.",
    ],
  },
  {
    id: "pequeno-temblor",
    titulo: "7. El pequeño temblor",
    estrofas: [
      "Ella, tan segura al defender una idea,\na veces parece perder el hilo si estoy cerca.\nNo sé si son nervios o una coincidencia;\nsolo sé que ese instante me desarma.",
      "La frase se le queda un segundo en los labios,\nuna sonrisa llega antes de la respuesta.\nTodo ocurre tan deprisa que casi no sucede,\npero yo alcanzo a guardar ese desconcierto.\nNo porque vuelva frágil su firmeza,\nsino porque deja asomar algo muy suyo.",
      "No quisiera convertir ese temblor en promesa\nni ponerle palabras que ella no ha dicho.\nMe basta con recibir la ternura del momento,\ncon saber que hasta la calma tiene latidos.\nHay gestos que hablan apenas un instante\ny por eso mismo se quedan conmigo.",
      "Si pudiera detener una escena pequeña,\nelegiría esa pausa antes de que sonría:\nla mujer de ideas claras y mirada firme\npermitiéndose no tenerlo todo bajo control.\nEntonces mi corazón también se equivoca de ritmo,\ny encuentro una dulzura que no necesito explicar.",
    ],
  },
  {
    id: "comienza-mi-mirada",
    titulo: "8. El lugar donde comienza mi mirada",
    estrofas: [
      "Mis ojos siempre llegan primero a los suyos;\nahí el día parece bajar la voz\ny todo encuentra un poco de calma.",
      "No sé si me detiene la manera en que mira\no lo que calla mientras permanece quieta.\nA veces sus pupilas guardan una distancia\nque me invita a acercarme sin invadirla.",
      "Pienso en lo que habrán visto esos ojos:\nlas alegrías que todavía brillan,\nlos días difíciles que nadie conoce,\nlas preguntas que tal vez no ha compartido.\nQuisiera aprender a mirar sin exigir respuestas\ny querer también todo aquello que desconozco.",
      "Si alguien preguntara dónde empezó mi cariño,\nno hablaría de grandes señales.\nDiría que una tarde la miré a los ojos\ny desde entonces siempre busco volver a ellos.",
    ],
  },
  {
    id: "media-sonrisa",
    titulo: "9. Su media sonrisa",
    estrofas: [
      "Su sonrisa no siempre llega completa;\na veces se queda a mitad del camino\ny aun así ilumina cuanto tengo enfrente.",
      "Le basta levantar apenas una comisura\npara cambiar la forma de mi tarde.\nSus pómulos acompañan ese gesto diminuto,\ncomo si conocieran un secreto amable.\nYo finjo seguir prestando atención al mundo,\npero ya estoy mirando cómo sonríe.",
      "Me conmueve que no parezca darse cuenta,\nque ese gesto nazca sin intención de gustar.\nNo necesita ninguna palabra ingeniosa,\nni un instante preparado para ser recordado.\nEs ella, sencillamente, dejando escapar\nun poquito de alegría entre los labios.",
      "He visto sonrisas abiertas como ventanas\ny otras que se anuncian desde lejos.\nLa suya prefiere llegar despacio,\nsin reclamar la atención de nadie.\nSi pudiera guardar un solo detalle,\nsería esa curva que apenas comienza:\nla prueba de que un gesto pequeñísimo\npuede quedarse viviendo tanto tiempo en mí.",
    ],
  },
  {
    id: "ella-no-sabe",
    titulo: "10. Ella no sabe que la miro",
    estrofas: [
      "Cuando se distrae, el mundo la pierde un momento;\nsus pensamientos se la llevan lejos.\nYo no sé a dónde va en ese silencio,\npero me gusta verla regresar.",
      "Se acomoda el cabello sin pensarlo,\nse concentra en algo que solo ella comprende.\nEntonces no intenta verse de ningún modo;\nno hay un gesto aprendido ni una pose.\nY justamente en esa naturalidad\nencuentro la versión más cercana de su belleza,\nla que aparece cuando cree que nadie observa.",
      "Otras veces sus mejillas se encienden,\ny una vergüenza leve le cambia el rostro.\nQuisiera cuidar esos segundos sin nombrarlos,\nporque hay emociones que merecen su silencio.\nSu manera de sonrojarse me enternece\nmás de lo que alcanzo a decir.",
      "Si la memoria me concediera un álbum,\nguardaría esas escenas sin corregirlas:\nella pensando en otra cosa,\nella sonrojada antes de reír,\nella siendo ella, sin esforzarse.\nSon instantes que no necesitan repetirse\npara acompañarme cuando no está.",
    ],
  },
  {
    id: "belleza-no-explica",
    titulo: "11. La belleza no explica",
    estrofas: [
      "He intentado ponerle nombre a lo que veo,\npero siempre se me escapa una parte.\nPodría hablar de sus ojos y su sonrisa,\nde la delicadeza con que mueve las manos;\naun así, nada bastaría para decir\npor qué me conmueve tanto su presencia.",
      "Su belleza no termina en lo que miro.\nEstá también en la forma de escuchar,\nen la pausa que hace antes de responder,\nen el cuidado que pone en lo que ama.\nSon detalles tan suyos, tan pequeños,\nque una descripción los dejaría afuera.",
      "A veces busco un adjetivo distinto,\nuno que no se haya gastado de tanto decirse.\nPero ella no cabe en una palabra:\nni hermosa, ni admirable, ni perfecta.\nLa veo reír, pensar, cansarse, volver a intentar,\ny comprendo que también quiero esas partes,\nlas que no aparecen en ninguna fotografía.",
      "Tal vez querer a alguien sea reconocer\nque ninguna lista puede explicarlo todo.\nNo me enamora una suma de cualidades\nni una imagen sin sombras ni días difíciles.\nMe conmueve esa manera irrepetible\nde habitar sus propios silencios.\nY cuando alguien me pregunte qué veo en ella,\nsonreiré: hay cosas que se sienten mejor que se nombran.",
    ],
  },
  {
    id: "manos-horizontes",
    titulo: "12. Donde las manos encuentran horizontes",
    estrofas: [
      "La imagino inclinándose sobre un cuaderno,\nbuscando una palabra que un niño comprenda.\nA veces basta una explicación distinta\npara que una mirada vuelva a encenderse.\nY pienso cuánto de ella vive en ese instante.",
      "Entre lápices, preguntas y voces inquietas,\nella aprende también a escuchar.\nSabe que no todas las manos avanzan igual,\nque a veces la respuesta necesita paciencia.\nY vuelve a empezar sin hacer del error una vergüenza,\ncomo quien le ofrece otra oportunidad al día,\nhasta que algo difícil deja de dar miedo.",
      "Me conmueve imaginarla en ese oficio,\ncon la voz cansada al terminar la jornada,\ny aun así guardando una nueva idea\npara quien mañana vuelva a preguntarle.\nNo todos los gestos de amor parecen abrazos;\nalgunos tienen forma de explicación repetida\ny de una silla acercada a tiempo.",
      "Quizá sus alumnos olviden las fechas,\nlas páginas y alguna lección aprendida.\nPero tal vez recuerden cómo se sintieron\ncuando ella les dijo que podían intentarlo.\nHay semillas que crecen lejos de quien las cuida,\ny una maestra no siempre alcanza a verlas:\npor eso admiro tanto la luz que entrega.",
    ],
  },
  {
    id: "alquimia",
    titulo: "13. La alquimia de lo que entrega",
    estrofas: [
      "No se limita a terminar lo que empieza:\nbusca dejar en ello una forma de sí misma.\nPiensa, corrige, prueba otro camino,\nhasta que una idea encuentra dónde quedarse.\nLa he visto poner cariño en lo cotidiano,\naun cuando nadie se detenga a celebrarlo.",
      "Sus manos convierten el esfuerzo en algo propio,\ny su imaginación no se rinde a la primera.\nDonde otros ven una tarea más,\nella encuentra un detalle que puede mejorar.\nNo siempre sale como había imaginado;\ntambién ahí aprende a volver a comenzar.",
      "Me gustaría que supiera cuánto dicen de ella\nesas cosas pequeñas que deja bien hechas.\nNo solo el resultado, sino su empeño,\nel tiempo que nadie le devuelve,\nla idea que rehízo cuando estaba cansada.\nHay una forma de ternura en hacer algo con cuidado\ny ella la practica sin darse cuenta.",
      "Cuando el día le exija demasiado,\nquisiera que pudiera detenerse a mirar\nlo que sus manos fueron construyendo.\nNo todo su valor cabe en una entrega,\nni merece medirse por lo que falta.\nUna parte de su belleza permanece ahí:\nen el cariño que deposita en lo que hace.",
    ],
  },
  {
    id: "lapiz-suena",
    titulo: "14. El lápiz que todavía sueña",
    estrofas: [
      "Hay un lápiz imaginario entre sus dedos,\nsiempre dispuesto a inventar otro comienzo.\nOjalá nunca olvide dónde lo guarda.",
      "La imagino probando una línea distinta,\nmezclando colores, cambiando de idea.\nSu creatividad no necesita grandes escenarios;\na veces nace de mirar lo de siempre\ny descubrir una posibilidad nueva\nen el espacio que otros dejaron vacío.",
      "Pero los deberes llenan los cajones,\ny el cansancio va cubriendo los cuadernos.\nQuisiera recordarle que también merece\nhacer algo solo por el placer de hacerlo,\nsin convertir cada intento en un resultado,\nsin pedirle permiso al miedo de equivocarse.",
      "Que siga dibujando aunque no haya tiempo perfecto,\nque se permita tachar una página,\nvolver a empezar con otro color,\nreírse de una idea que salió torcida.\nNo todo lo que crea tiene que servir para algo:\na veces basta con que le devuelva la alegría.\nHay sueños que esperan una mano paciente,\ny me gusta pensar que la suya volverá a buscarlos.",
    ],
  },
  {
    id: "ternura-pizarron",
    titulo: "15. La ternura detrás del pizarrón",
    estrofas: [
      "Su ternura no siempre tiene palabras suaves;\na veces llega con una explicación distinta,\ncon una pregunta hecha sin impaciencia,\ncon el tiempo que decide regalar.",
      "Detrás del pizarrón hay días difíciles,\nniños que aprenden de formas diferentes,\nuna lección que no salió como esperaba.\nElla vuelve a reunir sus ideas,\nacomoda la voz, intenta de nuevo.\nY en ese esfuerzo que pocos ven\nse asoma una parte preciosa de su corazón.",
      "No imagino que enseñar sea sencillo,\nni que la paciencia le sobre todos los días.\nPor eso me conmueve tanto su empeño:\nno la vuelve menos humana cansarse,\nni menos buena necesitar una pausa.\nEl cariño también se reconoce\nen quien regresa dispuesto a intentarlo.",
      "Algún niño quizá olvide su nombre,\npero recordará que una vez pudo comprender.\nTal vez la gratitud llegue muchos años después,\no quizá nunca alcance a decírsela.\nY aun así habrá valido aquella tarde,\nel cuaderno abierto y la explicación repetida.\nPorque una forma discreta de amar el mundo\nes ayudar a otros a encontrar su voz.",
    ],
  },
  {
    id: "raiz-cielo",
    titulo: "16. La raíz que conversa con el cielo",
    estrofas: [
      "Su fe se parece a una raíz callada:\nno necesita exhibirse para sostenerla.\nLa acompaña en decisiones diminutas,\nen los días claros y en los que pesan,\ncomo una luz que aprende a cuidar.",
      "Admiro que vuelva a aquello en lo que cree,\nincluso cuando le cuesta encontrar calma.\nNo imagino una certeza sin preguntas,\nni una fortaleza que jamás se canse.\nPienso más bien en su modo de permanecer,\naunque el viento insista en moverla.",
      "A veces seguir creyendo también duele,\ny la esperanza parece hablar bajito.\nQuisiera que, en esos momentos,\nrecordara que ninguna raíz crece de prisa,\nque la fe puede descansar en el silencio\ny aun así continuar sosteniendo.",
      "La miro y pienso en un árbol sencillo,\ncon la tierra abrazándole los pies.\nSus ramas no dejan de buscar el cielo,\npero tampoco olvidan de dónde vienen.\nEsa manera de creer y de crecer\nme enseña una forma serena de valentía.",
    ],
  },
  {
    id: "palabras-cultivan",
    titulo: "17. Las palabras que también me cultivan",
    estrofas: [
      "Algunas cosas que ella dice se quedan,\naun después de terminar la conversación,\ncomo semillas dormidas en mi memoria.",
      "No siempre estoy de acuerdo con sus ideas,\ny precisamente por eso vuelvo a pensarlas.\nTiene una forma de mirar las preguntas\nque me invita a cambiar de lugar,\na reconocer lo que aún no comprendo\ny a escuchar antes de buscar respuesta.",
      "A veces, horas después de despedirnos,\nrecuerdo una frase que dijo sin darle importancia.\nLa llevo conmigo mientras camino,\nmientras intento resolver algo difícil.\nY de pronto descubro que he cambiado\nun poco mi manera de ver el mundo.\nTal vez ella no lo sepa;\nno todas las huellas hacen ruido al quedarse.",
      "Me gusta que entre nosotros existan palabras\nque no terminan cuando dejamos de hablar.\nSus reflexiones me enseñan a dudar con cuidado,\na mirar mis certezas sin orgullo.\nSi alguna vez me preguntara qué me ha dado,\nno sabría señalar una sola cosa:\nle mostraría lo que he aprendido a mirar\ndesde que su voz también habita mis pensamientos.",
    ],
  },
  {
    id: "pasos-dificiles",
    titulo: "18. La obediencia de los pasos difíciles",
    estrofas: [
      "Hay decisiones que duelen aun siendo propias,\ny convicciones que exigen renunciar.\nElla conoce esos cruces silenciosos\ndonde lo fácil no siempre es lo correcto.",
      "La admiro cuando se detiene a pensar,\ncuando no confunde firmeza con orgullo.\nNo necesita callar sus preguntas\npara mantenerse fiel a lo que cree.\nHay una humildad difícil en ese gesto:\nelegir con conciencia, aunque cueste.",
      "No sé qué batallas guarda por dentro,\nni cuánto pesa a veces decir que no.\nDesde fuera solo vemos una decisión;\nyo imagino el camino que la precedió.\nEso también merece ternura, no solo respeto.",
      "Quisiera que nunca confundiera obedecer\ncon dejar de escuchar su propia voz.\nSu fe y sus principios tienen sentido\nporque también los ha pensado y elegido.\nY cuando un paso se le haga pesado,\nque encuentre descanso sin sentir derrota:\nla valentía no consiste en no temblar,\nsino en caminar sin traicionarse.",
    ],
  },
  {
    id: "refugio-manos",
    titulo: "19. El refugio que lleva en las manos",
    estrofas: [
      "Ella cuida de maneras casi invisibles:\nrecuerda un detalle, pregunta de nuevo,\nnota el cansancio detrás de una sonrisa\ny se queda un poco más si hace falta.",
      "No convierte cada gesto en un anuncio,\nni cuenta las veces que ha estado presente.\nTal vez no perciba cuánto alivio cabe\nen ofrecer un momento de atención.\nA veces una persona solo necesita\nque alguien advierta que está cansada.",
      "Pienso en una casa cuando pienso en su cariño,\npero no en paredes ni en puertas cerradas.\nPienso en poder dejar a un lado el peso,\nen sentarse sin explicar la tristeza.\nHay personas que vuelven más liviana la vida\ny ella tiene algo de esa calma compartida.",
      "Ojalá también encuentre quien la cuide,\nquien recuerde sus silencios y sus días difíciles.\nPorque incluso las manos que sostienen a otros\nnecesitan a veces que alguien las sostenga.\nQuisiera ofrecerle esa misma paciencia,\nsin exigirle siempre estar bien,\nsin pedirle que sea fuerte todo el tiempo.\nQue sepa que merece el descanso\nque tantas veces procura para los demás.",
    ],
  },
  {
    id: "herencia-manos",
    titulo: "20. La herencia de las manos abiertas",
    estrofas: [
      "Lo que ella sabe no se queda encerrado;\nlo ofrece sin miedo a perder su lugar,\ncomo quien comparte una llave.",
      "Enseñar a otros también exige paciencia:\nrepetir, acompañar, dejar que se equivoquen.\nElla parece comprender que aprender\nno es seguir siempre los pasos de alguien más,\nsino encontrar el valor de caminar a solas.\nPor eso no se guarda los caminos;\nlos señala y luego permite que continúen,\naunque ya no pueda ver hasta dónde llegan.",
      "Admiro esa generosidad sin ceremonia,\nla de preparar a alguien para no necesitarla.\nNo hay aplauso inmediato en ese gesto,\nni una garantía de que vuelva agradecimiento.\nSolo la confianza de que compartir lo aprendido\npuede cambiarle el mañana a otra persona.\nY a veces ese mañana empieza\ncon una explicación sencilla y paciente.",
      "Tal vez no conozca a todos los que ayudará,\nni vea cada puerta que su enseñanza abra.\nAlguien hará mejor una tarea,\notro perderá el miedo a preguntar,\notro enseñará después lo que ella le mostró.\nAsí crece una herencia que no hace ruido,\nque no necesita llevar su nombre\npara guardar algo de sus manos.\nSi alguna vez duda de lo que ha entregado,\nquisiera mostrarle todas esas vidas\nque continúan un poco más lejos gracias a ella.",
    ],
  },
  {
    id: "gramatica-golpes",
    titulo: "21. La gramática de sus pequeños golpes",
    estrofas: [
      "A veces me toca el brazo con golpecitos,\ncomo quien llama a una puerta conocida.\nSon gestos pequeños, casi una travesura,\ny por eso mismo me hacen sonreír.\nNo sé qué intentan decir exactamente,\npero mi corazón ya reconoce su idioma.",
      "Entre una conversación y otra llegan,\nsin aviso y sin ninguna solemnidad.\nInterrumpen apenas el curso de la tarde,\ncomo una coma escrita con los dedos.\nYo los guardo sin hacer demasiado ruido,\npara que sigan siendo tan suyos.",
      "Me gusta esa forma juguetona de acercarse,\nesa confianza que no necesita explicaciones.\nA veces lo más querido de alguien\nvive en costumbres que parecen insignificantes.\nBasta que se repitan un par de veces\npara que empiecen a pertenecer a la memoria.",
      "Y si algún día llegaran a faltarme,\nsé que extrañaría esos toques diminutos.\nNo por lo que hacen, sino por quien los hace,\npor esa manera de decir «aquí estoy»\nsin convertirlo en una declaración.\nHay cariños que no escriben cartas:\nse aprenden de memoria sobre la piel.",
    ],
  },
  {
    id: "voz-ventanas",
    titulo: "22. La voz que deja las ventanas abiertas",
    estrofas: [
      "Su voz cambia cuando se siente tranquila;\nlas palabras encuentran otro ritmo\ny algo en su expresión descansa.",
      "Empieza a hablar con una libertad distinta,\ncomo si ya no necesitara medir cada gesto.\nUna frase se alarga, aparece una ocurrencia,\ny su risa llega sin pedir permiso.\nMe gusta pensar que, por un momento,\nse siente a salvo de tener que cuidarse tanto.",
      "No siempre sé qué la hace sentirse cómoda,\npero alcanzo a notar cuando sucede.\nLa conversación deja de tener bordes,\ny hasta los silencios parecen más sencillos.\nNo necesito que explique esa confianza;\nme basta con no apresurarla,\ncon disfrutar la manera en que vuelve a ser ella.",
      "Pienso en una casa con las ventanas abiertas,\nla luz cayendo despacio sobre los muebles.\nAsí se siente escucharla cuando se suelta:\nuna habitación que empieza a respirar.\nNo es que antes fuera otra persona,\nsino que se permite mostrar otra parte de sí.\nY yo, que la admiro incluso en su seriedad,\nme quedo especialmente cerca\nde esa voz que por fin puede descansar.",
    ],
  },
  {
    id: "geografia-regazo",
    titulo: "23. La geografía de un regazo",
    estrofas: [
      "Hay lugares que no aparecen en los mapas,\nyo conozco uno pequeño y silencioso:\nel espacio donde mi cabeza descansa\ny el mundo deja de pedirme respuestas.\nNo necesita nombre ni dirección;\nme basta saber que está cerca de ella.",
      "Cuando me recuesto sobre su regazo,\nel ruido de afuera pierde importancia.\nNo tengo que encontrar la frase correcta,\nni apresurar el siguiente minuto.\nSolo escuchar el tiempo pasar despacio\ny sentir que no hay nada que demostrar.",
      "En ese gesto cabe una confianza enorme,\naunque parezca una escena cualquiera.\nEl peso del día encuentra dónde quedarse,\nla inquietud afloja apenas sus manos.\nYo cierro los ojos unos segundos\ny descubro lo sencillo que es sentirse en paz.",
      "Si pudiera guardar una tarde entera,\nno elegiría la más extraordinaria.\nMe quedaría con esa quietud compartida,\ncon la cercanía sin ninguna prisa,\ncon el permiso de no decir nada.\nHay refugios que no tienen paredes;\nse recuerdan por cómo nos reciben,\ny yo recuerdo el suyo con una ternura inmensa.",
    ],
  },
  {
    id: "mundo-despues-mirada",
    titulo: "24. El mundo después de su mirada",
    estrofas: [
      "Antes, algunas cosas me pasaban de largo:\nuna sombra, el reflejo de una ventana,\nla luz deteniéndose sobre una pared.\nDesde que conozco su gusto por la fotografía,\nhe aprendido a mirar un poco más despacio.",
      "La imagino buscando un encuadre,\nesperando el instante en que todo coincide.\nNo necesita que el paisaje sea perfecto;\na veces le basta con un detalle humilde,\nuna textura, una esquina iluminada.\nY mientras me muestra aquello que encuentra,\ndescubro belleza en sitios conocidos,\ncomo si el mundo estrenara ventanas.",
      "Ahora una calle puede sorprenderme,\ny una tarde corriente merece una pausa.\nMe pregunto qué habría visto ella,\nqué luz habría elegido conservar.\nSu manera de observar se me ha quedado cerca,\nno para copiar sus ojos,\nsino para aprender a usar los míos.",
      "Quizá eso también sea una forma de cariño:\nque las pasiones del otro nos enseñen algo,\nsin pedirnos que dejemos de ser quienes somos.\nYo no conocía todos esos matices,\ny ella, sin proponérselo, me los mostró.\nDesde entonces algunas imágenes permanecen,\nno solo por lo que guardan,\nsino porque me recuerdan cómo aprendí a mirarlas.",
    ],
  },
  {
    id: "seda-instantes",
    titulo: "25. La seda de los instantes",
    estrofas: [
      "A veces mis dedos recorren su cabello\ny el tiempo parece olvidar su prisa.\nNo ocurre nada que merezca contarse,\nsolo una caricia lenta y sencilla,\nla suavidad de una hebra entre mis manos\ny la alegría callada de tenerla cerca.",
      "Me gusta que ese gesto no pida nada,\nque pueda durar apenas unos segundos.\nHay una paz que no necesita silencio absoluto,\nsolo la confianza de permanecer así,\nsin buscar otro motivo para acercarme,\nsin convertir la ternura en una promesa.",
      "Quizá ella no sospeche cuánto recuerdo\nde esos momentos tan pequeños.\nLa forma en que cae un mechón,\nla calma que llega cuando lo aparto,\nel modo en que una tarde cualquiera\nse vuelve distinta por una caricia.\nNo hace falta más para sentir cariño.",
      "La memoria conserva cosas extrañas:\nuna palabra que nadie anotó,\nla luz de una habitación,\nel roce suave de su cabello.\nCuando pienso en ella, vuelvo a ese gesto,\na la belleza de acercarme sin apuro,\na lo sencillo que es querer sin hacer ruido.\nHay instantes que se van en seguida,\npero dejan las manos llenas de ternura.",
    ],
  },
  {
    id: "idioma-brazos",
    titulo: "26. El idioma de los brazos",
    estrofas: [
      "Sus abrazos tienen una forma de silencio\nque ninguna palabra consigue repetir.\nPor un momento el día se hace pequeño\ny todo parece encontrar su lugar.",
      "No necesito ordenar mis pensamientos\nni explicar lo que me pesa por dentro.\nBasta con acercarme y sentir sus brazos,\ncon saber que podemos quedarnos así,\nsin pedirle otra cosa al instante.",
      "A veces duran apenas un suspiro,\notras me cuesta aceptar que terminen.\nHay una calma que llega con su cercanía,\ncomo si el mundo esperara afuera.\nY yo quisiera aprender a corresponderle\ncon la misma delicadeza con que me recibe.",
      "Si alguna vez las palabras me faltaran,\nno intentaría llenar todos los silencios.\nLa abrazaría sin prisa, con cuidado,\npara decirle que estoy, que la escucho,\nque también puede descansar conmigo.\nPorque hay afectos que no saben explicarse\ny encuentran en dos brazos abiertos\nsu manera más humana de permanecer.",
    ],
  },
  {
    id: "milagro-acercarse",
    titulo: "27. El breve milagro de acercarse",
    estrofas: [
      "Antes de un beso sucede algo pequeño:\nuna mirada que pregunta en silencio,\nla distancia que ambos elegimos cruzar,\nun instante suspendido entre los dos.",
      "No hacen falta escenarios perfectos,\nni palabras que prometan demasiado.\nA veces solo estamos cerca,\ny su sonrisa parece decir que sí.\nEntonces el ruido del mundo se aparta\ny todo cabe en la suavidad de un gesto.",
      "Me gusta la pausa que precede a sus labios,\nesa ternura que no necesita apresurarse.\nHay confianza en acercarnos así,\nsin tener que demostrar nada,\nsolo compartiendo un deseo sencillo.\nCuando nos separamos, algo permanece:\nla cercanía latiendo un poco más despacio.",
      "Quizá por eso recuerdo tanto besarla:\nno únicamente por el roce de sus labios,\nsino por cómo me mira antes de hacerlo,\npor la sonrisa que llega después,\npor la alegría pequeña de estar juntos.\nUn beso dura menos de lo que quisiera,\npero a veces deja un día entero iluminado.\nY cuando vuelvo a pensar en sus labios,\nlo que más extraño es la ternura de ese instante.",
    ],
  },
],

  },
  {
    id: "latidos",
    numero: "III",
    titulo: "Latidos",
    subtitulo: "De todo lo que el corazón no sabe callar",
    epigrafe: "«Y entre tantas cosas que pasan por la vida,hay una que el corazón elige volver a nombrar.»",
    
poemas: [
  {
    id: "latido-01",
    titulo: "Latido 1.",
    estrofas: [
      "Aunque no siempre esté ante mis ojos, es todo lo que quiero ver.",
    ],
  },
  {
    id: "latido-02",
    titulo: "Latido 2.",
    estrofas: [
      "No veo donde ve, yo le veo ver.",
    ],
  },
  {
    id: "latido-03",
    titulo: "Latido 3.",
    estrofas: [
      "Antes de conocerle mi mundo era gris… Pero gracias a usted ahora veo colores y matices que nunca imaginé",
    ],
  },
  {
    id: "latido-04",
    titulo: "Latido 4.",
    estrofas: [
      "8 Billones de personas en este mundo, y no dejo de pensar en una.",
    ],
  },
  {
    id: "latido-05",
    titulo: "Latido 5.",
    estrofas: [
      "¿Sabe lo que quiero? Que se me vaya la vida viéndole sonreír.",
    ],
  },
  {
    id: "latido-06",
    titulo: "Latido 6.",
    estrofas: [
      "Me tiene imaginando una vida con usted, cuando ni siquiera quería vivir la mía, por eso le quiero y le querré siempre.",
    ],
  },
  {
    id: "latido-07",
    titulo: "Latido 7.",
    estrofas: [
      "Amaba mi soledad hasta que conocí su compañía.",
    ],
  },
  {
    id: "latido-08",
    titulo: "Latido 8.",
    estrofas: [
      "Me advirtieron a que me cuidara de las tentaciones. ¿Pero cómo me resisto a esos ojitos tan lindos?",
    ],
  },
  {
    id: "latido-09",
    titulo: "Latido 9.",
    estrofas: [
      "Cuando le veo feliz, sólo ahí lo soy y a veces el doble.",
    ],
  },
  {
    id: "latido-10",
    titulo: "Latido 10.",
    estrofas: [
      "Es la única persona con la que podría pasar un domingo haciendo absolutamente nada y sentir que ha sido el mejor día de mi vida.",
    ],
  },
  {
    id: "latido-11",
    titulo: "Latido 11.",
    estrofas: [
      "Me gusta tanto que mas que besarle, quiero aprender a que sienta en casa conmigo.",
    ],
  },
  {
    id: "latido-12",
    titulo: "Latido 12.",
    estrofas: [
      "No sé qué tienen sus ojos, pero cada vez que me miran siento que el ruido del mundo se apaga por un segundo.",
    ],
  },
  {
    id: "latido-13",
    titulo: "Latido 13.",
    estrofas: [
      "Si me dieran a elegir un lugar donde quedarme a vivir, elegiría cualquier sitio donde pueda escuchar su risa.",
    ],
  },
  {
    id: "latido-14",
    titulo: "Latido 14.",
    estrofas: [
      "Me encanta cuando se distrae y no nota que la estoy mirando; en esos segundos sin pose es cuando más bonita se ve.",
    ],
  },
  {
    id: "latido-15",
    titulo: "Latido 15.",
    estrofas: [
      "Hay días pesados que se arreglan con una sola cosa: saber que voy a verle.",
    ],
  },
  {
    id: "latido-16",
    titulo: "Latido 16.",
    estrofas: [
      "Usted tiene esa manera tan suya de hacer que lo más sencillo del día se vuelva mi recuerdo favorito.",
    ],
  },
  {
    id: "latido-17",
    titulo: "Latido 17.",
    estrofas: [
      "Blondet, su nombre siempre será mi poema favorito.",
    ],
  },
  {
    id: "latido-18",
    titulo: "Latido 18.",
    estrofas: [
      "A veces me descubro sonriendo solo, y cuando me pregunto por qué, casi siempre es por algo que usted dijo.",
    ],
  },
  {
    id: "latido-19",
    titulo: "Latido 19.",
    estrofas: [
      "Me gusta cómo su voz cambia cuando está tranquila y se siente en confianza; ese es mi tono favorito suyo.",
    ],
  },
  {
    id: "latido-20",
    titulo: "Latido 20.",
    estrofas: [
      "Si supiera lo mucho que admiro su forma de esforzarse por todo, se trataría a usted misma con la mitad de ternura con la que yo la miro.",
    ],
  },
  {
    id: "latido-21",
    titulo: "Latido 21.",
    estrofas: [
      "No hace falta que diga nada; con tenerla cerca ya siento que el día valió la pena.",
    ],
  },
  {
    id: "latido-22",
    titulo: "Latido 22.",
    estrofas: [
      "Qué suerte la mía haber coincidido con alguien que no solo me gusta, sino que también me hace querer ser mejor persona.",
    ],
  },
  {
    id: "latido-23",
    titulo: "Latido 23.",
    estrofas: [
      "Me sé de memoria sus gestos pequeños, esos que usted hace sin darse cuenta y que a mí me alegran la tarde entera.",
    ],
  },
  {
    id: "latido-24",
    titulo: "Latido 24.",
    estrofas: [
      "Podría pasar horas escuchándola hablar de cualquier cosa, solo por ver cómo le brillan los ojos cuando algo le apasiona.",
    ],
  },
  {
    id: "latido-25",
    titulo: "Latido 25.",
    estrofas: [
      "Desde que llegó usted, ya no me da miedo el futuro; al contrario, me dan ganas de que llegue rápido para vivirlo a su lado.",
    ],
  },
  {
    id: "latido-26",
    titulo: "Latido 26.",
    estrofas: [
      "Un abrazo suyo tiene el poder extraño de acomodar en segundos todo lo que yo llevaba desordenado por dentro.",
    ],
  },
  {
    id: "latido-27",
    titulo: "Latido 27.",
    estrofas: [
      "No sé explicar todo lo que siento por usted, solo amo la paz de verle sonreír.",
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

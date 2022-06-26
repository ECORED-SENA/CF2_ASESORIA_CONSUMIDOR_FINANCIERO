export default {
  global: {
    componenteFormativo: 'Análisis financiero y evaluación del riesgo',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos básicos de contabilidad y análisis de indicadores financieros, en los cuales tomará en cuenta los riesgos; también se encontrará en la capacidad de analizar la información financiera de las organizaciones, mediante la recolección de información, para brindar portafolio de productos y servicios acorde con las necesidades del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Recolección de información y datos: metodologías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Centrales de riesgo: características y aplicación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios de contabilidad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estados financieros',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Indicadores financieros',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Gestión del riesgo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Informes',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Costos de producto',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Educación financiera',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis financiero',
      referencia:
        'Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. D.O 33.339.',
      tipo: 'Decreto',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      tema: 'Análisis financiero',
      referencia:
        'Moreno, J. (2014). Contabilidad básica. Grupo Editorial Patria.',
      tipo: 'Ebook',
      link: 'https://www.editorialpatria.com.mx/pdffiles/9786074386189.pdf',
    },
    {
      tema: 'Análisis financiero',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Ciclo contable [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fKYnZt2xTs4&list=PLkc5n6npRWkjKKk9kQvo7hrdPEmUuWoN8&index=4',
    },
    {
      tema: 'Gestión del riesgo',
      referencia:
        'Organización Internacional de Estandarización [ISO]. (2018). Gestión del riesgo — Directrices (ISO 31000:2018).',
      tipo: 'Norma Internacional',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
    {
      tema: 'Propuesta financiera',
      referencia:
        'TEDx Talks. (2020). Educación financiera para toda la vida | Nicolás González | TEDxMarDelPlata [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5PAIPVjGMt4',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'Estudio minucioso que se realiza de la información contable de una organización, a partir del cual se determinan unos indicadores que representan la realidad de la organización.',
    },
    {
      termino: 'Centrales de riesgo',
      significado:
        'Vigilan y reportan la información respecto al comportamiento crediticio de las personas u organizaciones.',
    },
    {
      termino: 'Contabilidad',
      significado:
        'La contabilidad es la parte de las finanzas que estudia las distintas partidas que reflejan los movimientos económicos y financieros de una empresa o entidad (Gil, 2015)',
    },
    {
      termino: 'Encuesta',
      significado:
        'Instrumento de recolección de datos para posteriormente ser analizados.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'Los estados financieros reflejan las operaciones o transacciones diarias que realiza una empresa en sus actividades, siendo resumidas en la estructura exhibida como estado financiero. Los estados financieros se alimentan de la información suministrada por los libros contables. (Elizalde, 2019)',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'Un análisis o estudio financiero se llega a basar en el cálculo de los indicadores de las finanzas, los mismos que son expresados por la eficiencia, solvencia, rendimiento, liquidez, endeudamiento y rentabilidad que posee la entidad. (Moreno, 2014).',
    },
    {
      termino: 'Riesgo',
      significado: 'La posibilidad de un suceso no deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Algarra, M. (2013). Punto de equilibrio. Registros contables III.',
      link:
        'http://registroscontables3.blogspot.com/p/punto-de-equilibrio.html',
    },
    {
      referencia:
        'Elizalde, L. (2019). Los estados financieros y las políticas contables. Revista 593 Digital Publisher CEIT, 4(5-1).',
      link:
        'https://www.593dp.com/index.php/593_Digital_Publisher/article/view/159',
    },
    {
      referencia: 'Gil, S. (2015). Contabilidad. Economipedia.',
      link: 'http://economipedia.com/definiciones/contabilidad.html',
    },
    {
      referencia:
        'Organización Internacional de Estandarización [ISO]. (2018). Gestión del riesgo — Directrices (ISO 31000:2018).',
    },
    {
      referencia:
        'Marcillo-Cedeño, C., Aguilar-Guijarro, C. y Gutiérrez-Jaramillo, N. (2021). Análisis financiero: una herramienta clave para la toma de decisiones de gerencia. Revista 593 Digital Publisher CEIT, 6(3).',
      link: 'http://doi.org/10.33386/593dp.2021.3.544',
    },
    {
      referencia:
        'Moreno, J. (2014). Contabilidad básica. Grupo Editorial Patria.',
    },
    {
      referencia: 'Palomo, M. (2014). Atención al cliente. Paraninfo.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Alejandra Tovar',
        cargo: 'Experto',
        centro: 'Regional Tolima- Centro de industria y la construcción',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital- Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

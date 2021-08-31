export default {
  global: {
    componenteFormativo: 'Base de datos para aplicaciones móviles híbridas',
    descripcionCurso:
      'El estudio del componente favorecerá afianzarse en el diseño e implementación de bases de datos dentro del desarrollo de aplicaciones móviles. Además, reconocer diferentes herramientas vigentes para realizar tal proceso y definir la opción ideal según la naturaleza del proyecto por realizar; supliendo necesidades de rendimiento, seguridad, adaptabilidad y compatibilidad necesarias, para el correcto funcionamiento de la app.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Diseño de bases de datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema gestor de base de datos (SGBD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Data management system</em> DNMS',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes de un SGBD',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Propiedad de un SGBD',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tipos de SGBD utilizados en apps móviles ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestores de bases de datos para apps móviles y relacionales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación de base de datos PostgreSQL',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sistemas gestores de bases de datos no relacionales (NoSQL)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '¿Por qué no utilizar conexión directa a base de datos?',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Beneficios de un servicio <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Configuración de Firebase a una app móvil híbrida',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Vinculación de Firebase a la aplicación móvil',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'SQLite para aplicaciones livianas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia:
        'Lázaro, D. (2018). <em>Introducción a los web services.</em> ',
      link: 'https://diego.com.es/introduccion-a-los-web-services',
    },
    {
      referencia:
        'Microsoft.com. (2021). <em>Aplicaciones web y móviles escalables mediante Azure Database for PostgreSQ.</em> ',
      link:
        'https://docs.microsoft.com/es-es/azure/architecture/solution-ideas/articles/scalable-web-and-mobile-applications-using-azure-database-for-postgresql',
    },
    {
      referencia:
        'Rodríguez, N., Martín, A., Valenzuela, A. y Chávez, S. (2009). <em>Consumo de web service desde dispositivos móviles heterogéneos.</em> ',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/19809/Documento_completo.pdf%3Fsequence%3D1 ',
    },
    {
      referencia:
        'Rómmel, F. (s.f.). <em>SQLite: la base de datos embebida.</em> ',
      link: 'https://sg.com.mx/revista/17/sqlite-la-base-datos-embebida ',
    },
    {
      referencia:
        'Silberschatz, A., Korth., H., y Sudarshan, S. (2006). <em>Fundamentos de bases de datos. McGraw-Hill.</em> ',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Peer-to-peer',
      significado:
        ' conexión con una arquitectura destinada a la comunicación entre aplicaciones. Esto permite a las personas o a los ordenadores compartir información y archivos, de uno a otro, sin necesidad de intermediarios.',
    },
    {
      termino: 'Sandbox',
      significado:
        ' plataforma aislada para ejecutar programas con seguridad y de manera separada. Se utiliza para ejecutar código nuevo o de dudosa procedencia. ',
    },
    {
      termino: 'SDK',
      significado:
        ' recopilación de un grupo de herramientas de desarrollo de software que complementa o facilita la comunicación e interacción con otra plataforma o con otro software. ',
    },
    {
      termino: 'Sistema Gestor de Base de Datos (SGBD)',
      significado:
        ' servicio principal para almacenar, procesar y proteger los datos. El SGBD proporciona acceso controlado y procesamiento de transacciones rápido, para cumplir con los requisitos de las aplicaciones consumidoras de datos más exigentes de una empresa.',
    },
    {
      termino: 'Web Service',
      significado:
        ' tecnología que utiliza un conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones.',
    },
  ],
  complementario: [
    {
      texto:
        'Casas, J. (s.f.). <em>Diseño conceptual de bases de datos. UOC.</em> ',
      tipo: 'Pagina web',
      link:
        'http://cv.uoc.edu/annotation/cb826b689abc472d8fb5b2519840058b/699689/PID_00213704/PID_00213704.html ',
    },
    {
      texto:
        'Hdeleon.net (2019). <em>¿Cómo hacer una base de datos para una app tipo Uber? [Video]. YouTube.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1yAC3m7f5Pk ',
    },
    {
      texto:
        'Cano, J. (2017). <em>Nativescript, login con firebase [Video]. YouTube.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WKfgnzl0p3E ',
    },
    {
      texto:
        'Henao, C. (2017). <em>50. Cómo crear una Base de Datos SQLite en Android [Video]. YouTube.</em> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9WiyqIcffe0 ',
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
        nombre: ' Wilson Andrés Cuervo Nieto',
        cargo: ' Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga ',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
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

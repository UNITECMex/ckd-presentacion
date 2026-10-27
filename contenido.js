/*
  CONTENIDO INSTITUCIONAL · GRUPO CKD
  Actualización inicial: 27 de octubre de 2026.
  Datos proporcionados por la dirección. No se asignan RVOE a campus o
  modalidades concretas sin confirmación adicional.

  Las fotografías aportadas se incorporaron en fotos/ y se optimizaron para web.
  Contactos y direcciones aportados el 27 de octubre de 2026.
  Contactos actualizados con datos de Plantel Toluca enviados el 27 de octubre de 2026.
*/

const ckdContent = {
  'Universidad TEC Mexiquense': {
    accent: '#348143',
    accentSecondary: '#a2bf56',
    tagline: 'Grandes emprendedores, líderes de éxito.',
    heroLogo: 'fotos/identidad/tec-logo-ajustado.png',
    mascotName: 'Leo',
    description: 'Comunidad educativa con presencia en diversos puntos de México. Conoce sus planteles, directivos y los programas académicos incluidos en la relación institucional proporcionada.',
    services: [
      'Licenciaturas', 'Maestrías', 'Doctorados',
      'Planteles y campus digital', 'Formación de líderes y emprendedores'
    ],
    campuses: [
      {
        name: 'Valle de Bravo', person: 'Lic. Armando Gallo Endeje', role: 'Coordinador del plantel',
        photo: 'fotos/directores/valle-de-bravo.webp',
        cover: 'fotos/planteles/valle-de-bravo/fachada.webp',
        address: 'Mariano Escobedo S/N, Otumba, 51200 Valle de Bravo, Méx.', phone: '729 133 6073',
        description: 'Plantel de Universidad TEC Mexiquense en Valle de Bravo, enfocado en la formación académica y el desarrollo de su comunidad estudiantil.',
        gallery: ['fotos/planteles/valle-de-bravo/galeria-01.webp','fotos/planteles/valle-de-bravo/galeria-02.webp','fotos/planteles/valle-de-bravo/galeria-03.webp','fotos/planteles/valle-de-bravo/galeria-04.webp']
      },
      {
        name: 'Toluca', person: 'Mauricio Cornejo Endeje', role: 'Director del plantel',
        photo: 'fotos/directores/mauricio-cornejo.webp',
        cover: 'fotos/planteles/toluca/fachada.webp',
        address: 'Blvr. José María Pino Suárez 708, Cuauhtémoc, 50130 Toluca de Lerdo, Méx.', phone: '56 2016 0871',
        description: 'Plantel TEC Mexiquense en Toluca, dedicado a acompañar el desarrollo profesional de sus estudiantes a través de su comunidad académica.',
        gallery: ['fotos/planteles/toluca/galeria-01.webp','fotos/planteles/toluca/galeria-02.webp','fotos/planteles/toluca/galeria-03.webp']
      },
      {
        name: 'Centro', person: 'Lic. Armando Hernández Martínez', role: 'Director del plantel',
        photo: 'fotos/directores/centro.webp',
        cover: 'fotos/planteles/centro/fachada.webp',
        address: 'Ignacio Allende 111, Centro, 50000 Toluca de Lerdo, Méx.', phone: '729 108 5051',
        description: 'Ubicado en el centro de Toluca, este plantel ofrece un entorno de comunidad universitaria y participación en actividades formativas.',
        gallery: ['fotos/planteles/centro/galeria-01.webp','fotos/planteles/centro/galeria-02.webp','fotos/planteles/centro/galeria-03.webp','fotos/planteles/centro/galeria-04.webp']
      },
      {
        name: 'Apatzingán', person: 'Mtro. Lenin Carrillo Beltrán', role: 'Director del plantel',
        photo: 'fotos/directores/apatzingan.webp',
        cover: 'fotos/planteles/apatzingan/fachada.webp',
        address: 'C. Rafael Sánchez Tapia, Aviación, 60640 Apatzingán de la Constitución, Mich.', phone: '453 137 0076',
        description: 'Plantel universitario ubicado en Apatzingán, Michoacán, que promueve la formación académica y la participación de sus estudiantes.',
        gallery: ['fotos/planteles/apatzingan/galeria-01.webp','fotos/planteles/apatzingan/galeria-02.webp','fotos/planteles/apatzingan/galeria-03.webp']
      },
      {
        name: 'Rectoría', person: 'Lic. Mauricio Cornejo Endeje', role: 'Responsable del plantel',
        photo: 'fotos/directores/mauricio-cornejo.webp',
        cover: 'fotos/planteles/rectoria/galeria-02.webp', coverLabel: 'Comunidad de Rectoría',
        address: 'Av. J. M. Morelos y P. 405, Centro, 50000 Toluca de Lerdo, Méx.', phone: '729 102 4847',
        description: 'Sede Rectoría de TEC Mexiquense, vinculada a las actividades académicas e institucionales de la comunidad universitaria.',
        gallery: ['fotos/planteles/rectoria/galeria-01.webp','fotos/planteles/rectoria/galeria-02.webp','fotos/planteles/rectoria/galeria-03.webp']
      },
      {
        name: 'Mérida', person: 'Lic. Gerardo Amaury Sánchez', role: 'Director del plantel',
        photo: 'fotos/directores/merida.webp',
        cover: 'fotos/planteles/merida/fachada.webp',
        address: 'C. 65, Jardines de Miraflores, 97168 Mérida, Yuc.', phone: '999 192 3225',
        description: 'Plantel TEC Mexiquense en Mérida, Yucatán, que impulsa la formación profesional y las experiencias académicas de su comunidad.',
        gallery: ['fotos/planteles/merida/galeria-01.webp','fotos/planteles/merida/galeria-02.webp','fotos/planteles/merida/galeria-03.webp','fotos/planteles/merida/galeria-04.webp']
      },
      {
        name: 'Campus Digital', digitalLogo: 'fotos/identidad/tec-blanco-ajustado.png', person: 'Mtro. Sebastián Gutiérrez Díaz', role: 'Responsable del campus',
        photo: 'fotos/directores/digital.webp',
        address: '', phone: '729 239 9164', virtual: true,
        description: 'Campus Digital de TEC Mexiquense, pensado para el contacto y acompañamiento académico a distancia. La atención se realiza en línea, sin dirección física publicada.',
        gallery: []
      }
    ],
    mascot: 'fotos/identidad/leon-oficial.jpg',
    sloganArt: 'fotos/identidad/tec-slogan-ajustado.png',
    education: {
      'Licenciatura': [
        ['Derecho','20192737'],
        ['Ingeniería Industrial','20193042'],
        ['Psicopedagogía','20192735'],
        ['Arquitectura','20220575'],
        ['Ciencias del Deporte','20211442'],
        ['Criminología y Criminalística','20211445'],
        ['Derecho','20210384'],
        ['Mercadotecnia','20211444'],
        ['Pedagogía','20210383'],
        ['Comunicación Digital con Enfoque en Creación de Contenidos','20251446'],
        ['Comunicación y Relaciones Públicas','20252419'],
        ['Diseño Gráfico','20251445'],
        ['Enfermería','20261945'],
        ['Ingeniería Ambiental','20252417'],
        ['Música, Producción e Iluminación de Escenarios','20252416'],
        ['Seguridad Pública y Protección Civil','20252418'],
        ['Administración de Empresas','20251442'],
        ['Contabilidad y Finanzas','20251443'],
        ['Gastronomía','20251444'],
        ['Ciencias del Deporte y Gestión Deportiva','20211654'],
        ['Derecho','20211646'],
        ['Negocios Internacionales','20211645'],
        ['Administración','20211644'],
        ['Criminología y Criminalística','20211361'],
        ['Derecho','20211363'],
        ['Ingeniería Industrial','20211362'],
        ['Pedagogía','20211643'],
        ['Administración','20211650'],
        ['Criminología y Criminalística','20211649'],
        ['Derecho','20211647'],
        ['Pedagogía','20211648']
      ],
      'Maestría': [
        ['Administración de Instituciones de Salud','20192704'],
        ['Educación','20192736'],
        ['Habilidades Directivas','20192705'],
        ['Peritaje Social','20220358'],
        ['Alta Dirección','20210381'],
        ['Gestión y Dirección del Deporte','20211443'],
        ['Juicios Orales','20210382'],
        ['Docencia en Enfermería','20225290'],
        ['Dirección, Administración y Gestión en Enfermería','20225289'],
        ['Gestión y Administración en Salud Pública','20225291'],
        ['Imagen Pública','20252420'],
        ['Publicidad Digital y Comercio Electrónico','20251447'],
        ['Administración Pública y Gobierno','20211653'],
        ['Derecho Procesal Civil y Mercantil','20232662'],
        ['Administración de Instituciones de Salud','20211641'],
        ['Ciencias Forenses y Periciales','20231110'],
        ['Habilidades Directivas','20211642'],
        ['Peritaje Social','20211364']
      ],
      'Doctorado': [
        ['Educación','20211446'],
        ['Administración y Alta Dirección','20211651'],
        ['Derecho','20211652'],
        ['Administración y Gestión de Hospitales','20230466']
      ]
    },
    notes: 'Rectora: Lic. Alejandra Trigos Cornejo. Director general y fundador: Lic. Óscar Huerta Téllez.'
  },
  'Universidad UBC': {
    heroLogo: 'fotos/identidad/ubc-logo-ajustado.png',
    education: {
      'Licenciatura': [
        ['Administración de Empresas','20230889'],
        ['Administración Hotelera y Turismo','20230896'],
        ['Ciencias de la Educación','20230892'],
        ['Derecho','20230891'],
        ['Diseño, Animación Digital y Publicidad','20230894'],
        ['Ingeniería Mecánica Automotriz y Motocicletas','20230895']
      ],
      'Maestría': [
        ['Derecho Administrativo','20230897'],
        ['Educación y Docencia Basada en Competencias y Gestión en Tecnología Educativa','20230890'],
        ['Ingeniería Financiera y Gubernamental','20230898'],
        ['Redes de Comercio y Negocios Digitales','20230893']
      ],
      'Doctorado': [] // No figura ningún doctorado UBC en la relación entregada.
    },
    accent: '#2F366B',
    accentSecondary: '#E30F20',
    description: 'Universidad privada ubicada en San Miguel Zinacantepec, Estado de México, que impulsa la formación profesional y el desarrollo de su comunidad académica.',
    services: ['6 licenciaturas', '4 maestrías', 'Atención a la comunidad estudiantil'],
    director: {
      name: 'Lic. Carla Giannelli Chávez Jiménez',
      role: 'Directora',
      photo: 'fotos/directores/ubc.webp'
    },
    address: 'J. Ma. Morelos Manzana 029, Emiliano Zapata, 51356 San Miguel Zinacantepec, Méx.',
    phone: '729 102 4844',
    cover: 'fotos/ubc/fachada.webp',
    gallery: [
      ['fotos/ubc/galeria-01.webp','Ceremonia académica'],
      ['fotos/ubc/galeria-02.webp','Comunidad universitaria'],
      ['fotos/ubc/galeria-03.webp','Actividad de estudiantes'],
      ['fotos/ubc/galeria-04.webp','Vida universitaria']
    ],
    educationPending: false,
    notes: 'Directora: Lic. Carla Giannelli Chávez Jiménez.'
  },
  'Gran Cardenal': {
    accent: '#c6ab73', accentSecondary:'#ede1c0',
    description:'Restaurante buffet ubicado en el centro de Toluca. Un espacio para disfrutar de experiencias gastronómicas y compartir momentos especiales.',
    gallery: [
      ['fotos/restaurantes/gran-cardenal-01.webp','Interior de Gran Cardenal'],
      ['fotos/restaurantes/gran-cardenal-02.webp','Buffet de Gran Cardenal'],
      ['fotos/restaurantes/gran-cardenal-03.webp','Espacios y mesas de Gran Cardenal'],
      ['fotos/restaurantes/gran-cardenal-04.webp','Experiencia gastronómica']
    ]
  },
  'La Catedral': {
    accent: '#96517b', accentSecondary:'#e1bad0',
    gallery: [
      ['fotos/restaurantes/la-catedral-01.webp','Interior de La Catedral'],
      ['fotos/restaurantes/la-catedral-02.webp','Platillos a la carta de La Catedral'],
      ['fotos/restaurantes/la-catedral-03.webp','Experiencia gastronómica en La Catedral'],
      ['fotos/restaurantes/la-catedral-04.webp','Detalles del restaurante La Catedral']
    ]
  },
  'Los Toluqueños': {
    accent:'#ac7853', accentSecondary:'#e0b68f',
    gallery: [
      ['fotos/los-toluquenos-01.jpg','Concepto del restaurante'],
      ['fotos/los-toluquenos-02.jpg','Instalaciones'],
      ['fotos/los-toluquenos-03.jpg','Ambientación']
    ]
  },
  'Salón de Eventos Gran Cardenal': {
    accent:'#c0a77a', accentSecondary:'#efe6d4',
    gallery: [
      ['fotos/salon-gran-cardenal-01.jpg','Montaje del salón'],
      ['fotos/salon-gran-cardenal-02.jpg','Instalaciones'],
      ['fotos/salon-gran-cardenal-03.jpg','Celebraciones'],
      ['fotos/salon-gran-cardenal-04.jpg','Eventos especiales']
    ]
  },
  'Casa NDOMI / Andomi': {
    accent:'#836899', accentSecondary:'#d5bbde',
    gallery: [
      ['fotos/casa-ndomi-01.jpg','Exterior'],
      ['fotos/casa-ndomi-02.jpg','Habitaciones'],
      ['fotos/casa-ndomi-03.jpg','Áreas comunes'],
      ['fotos/casa-ndomi-04.jpg','Experiencia de estancia'],
      ['fotos/casa-ndomi-05.jpg','Instalaciones'],
      ['fotos/casa-ndomi-06.jpg','Entorno']
    ]
  },
  'PUBLIK-T': {accent:'#e9e7e2',accentSecondary:'#acaaa5'},
  'Equilibria Médica': {accent:'#839678',accentSecondary:'#cfddba'},
  'CCEPM': {accent:'#357dba',accentSecondary:'#add8f0'},
  'UNISATEC': {accent:'#408e45',accentSecondary:'#bbd6b6'},
  'Certifica-TEC': {accent:'#34ad98',accentSecondary:'#a3e0d5'},
  'M&N Tecnologías': {accent:'#77a33b',accentSecondary:'#d1e3a9'},
  'UDITEX': {accent:'#529b54',accentSecondary:'#c0dfbd'},
  'Proyecta+': {accent:'#c9cbd0',accentSecondary:'#e4e5e8'},
  'TEC Mexiquense KIDS': {accent:'#81b748',accentSecondary:'#e1e7a2'},
  'Plasti Jimmy': {accent:'#d97d39',accentSecondary:'#e9c59e'},
  'León RZR': {accent:'#caa15a',accentSecondary:'#ebd7ad'},
  'Yo cuento contigo, tú cuentas conmigo': {accent:'#e5b852',accentSecondary:'#ecdaaf'},
  'UPM': {accent:'#b33344',accentSecondary:'#e7a7a6'},
  'Universidad UNG': {accent:'#c6ab73',accentSecondary:'#e8d7b2'},
  'Salón de Eventos para Niños': {accent:'#dcac66',accentSecondary:'#f2d8a9'},
  'Starfit': {accent:'#a7c258',accentSecondary:'#daebbb'},
  'Ale Trigos': {accent:'#72b7a4',accentSecondary:'#d0adce'},
  'Óscar Huerta': {accent:'#d8d0bd',accentSecondary:'#eae2d3'}
};

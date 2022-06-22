import { Cremas, Agregados, Producto } from '../../interfaces/interfaces';


export const cremas: Cremas[] = [
    {
        nombre: "Mayonesa"
    },
    {
        nombre: "Ketchup"
    },
    {
        nombre: "Aji"
    }
    , {
        nombre: "Golf"
    }
]


export const agregados: Agregados[] = [
    //   Agregados
    {
        nombre: "Huevo",
        precio: 1
    }, {
        nombre: "Huevo",
        precio: 1
    }, {
        nombre: "Jamón",
        precio: 1,
    }, {
        nombre: "Queso cheddar",
        precio: 1,
    }, {
        nombre: "Queso edam",
        precio: 1,
    }, {
        nombre: "pepinillos",
        precio: 1,
    }, {
        nombre: "Maiz desgranado",
        precio: 2,
    }, {
        nombre: "Arroz blanco ",
        precio: 2,
    }, {
        nombre: "Plátano",
        precio: 2,
    }, {
        nombre: "Tocino",
        precio: 3,
    }, {
        nombre: "Chorizo",
        precio: 3,
    }, {
        nombre: "HoT Dog",
        precio: 3,
    }, {
        nombre: "Ala Broaster",
        precio: 5,
    }, {
        nombre: "1/8 Broaster",
        precio: 7,
    }, {
        nombre: "carne clasica",
        precio: 4,
    }, {
        nombre: "carne junior",
        precio: 3,
    }, {
        nombre: "piña",
        precio: 2,
    }, {
        nombre: "Papas grandes",
        precio: 7,
    }, {
        nombre: "Papas medianas",
        precio: 5,
    }, {
        nombre: "Papas pequeñas",
        precio: 2.5,
    },
]

export const productos: Producto[] = [
    // Cheveres
    {
        nombre: "Chevere",
        tipo: "Cheveres",
        descripcion: "Pan de ajonjoli, carne, lechuga, tomate, papas al hilo y cremas",
        precio: 6
    },
    {
        nombre: "Che con queso",
        tipo: "Cheveres",
        descripcion: "Pan de ajonjoli, carne, queso, lechuga, tomate, papas al hilo y cremas",
        "precio": 7
    },
    {
        nombre: "Chevere doble con queso doble",
        tipo: "Cheveres",
        descripcion: "Pan de ajonjoli, 2 carnes, 2 quesos, lechuga, tomate, papas al hilo y cremas",
        "precio": 11
    },
    //   Hamburguesas
    {
        nombre: "Clasica",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne de casa, ensalada, Porcion de Papas + Cremas",
        "precio": 11
    },
    {
        nombre: "Royal",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne, Huevo, Queso, Jamón, Porcion de Papas + Cremas",
        "precio": 13.5
    },
    {
        nombre: "A lo Pobre",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne, Huevo, Plátano, Porción de Papas + Cremas",
        "precio": 13
    },
    {
        nombre: "Crispy Burgues",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Pollo Crispy, Porción de Papas, Ensalada + cremas",
        "precio": 12.5
    },
    {
        nombre: "Premium",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne, ensalada, Huevo, Queso, jamon, tocineta, Porción de Papas + Cremas",
        "precio": 18
    },
    {
        nombre: "Dr. Cheese",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne, queso edam, queso Cheddar, Queso Parmesano porción de papas + cremas",
        "precio": 14
    },
    {
        nombre: "Bacon-Cheese .",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne, Queso, tocineta, porción de papas + cremas",
        "precio": 15
    },
    {
        nombre: "Mixta",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, Carne + filete de Pollo + chorizo, Huevo, Ensalada, Porción de Papas + Cremas",
        "precio": 18
    },
    {
        nombre: "Doble con todo",
        tipo: "Hamburguesa",
        descripcion: "Pan de la casa, 2 Carnes, ensalada, Huevo, Queso, jamon, tocineta+Porción de Papas + Cremas",
        "precio": 22,
    },

    //   Broaster
    {
        nombre: "duo pecho + ala ",
        tipo: "Broaster",
        precio: 18,
    },
    {
        nombre: "duo pierna + encuentro",
        tipo: "Broaster",
        precio: 16,
    },
    {
        nombre: "ala",
        tipo: "Broaster",
        precio: 8,
    },
    {
        nombre: "pierna",
        tipo: "Broaster",
        precio: 9,
    },
    {
        nombre: "encuentro",
        tipo: "Broaster",
        precio: 10,
    },
    {
        nombre: "pecho",
        tipo: "Broaster",
        precio: 14,
    },
    {
        nombre: "pollo crispy 4 ",
        tipo: "Broaster",
        precio: 10,
    },
    {
        nombre: "pollo crispy 8 ",
        tipo: "Broaster",
        precio: 14
    }
    // Salchipapa
    , {
        nombre: "Junior",
        descripcion: "porción de papas mediana salchicha (hot dog) de ternera",
        tipo: "Salchipapa",
        precio: 8.5
    }
    , {
        nombre: "Grande",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera",
        tipo: "Salchipapa",
        precio: 12
    }
    , {
        nombre: "Chorizo",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera, chorizo",
        tipo: "Salchipapa",
        precio: 13.5
    }
    , {
        nombre: "Especial",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera, pollo desilachado y huevo",
        tipo: "Salchipapa",
        precio: 15.5
    }
    , {
        nombre: "Dr. Food",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera, carnes mixtas de Pepito (carne, pollo y chorizo picado), huevo, queso",
        tipo: "Salchipapa",
        precio: 19
    }
    , {
        nombre: "Venezolana",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera, carnes mixtas de Pepito (carne, pollo y chorizo picado) queso edam rayado, maiz americano desgranado",
        tipo: "Salchipapa",
        precio: 20
    }
    , {
        nombre: "Premium",
        descripcion: "porción de papas grande, salchicha (hot dog) de ternera, chorizo, pollo deshilachado, huevo, plátano, jamón, queso",
        tipo: "Salchipapa",
        precio: 21
    }
    // Chaufa
    , {
        nombre: "Pollo",
        descripcion: "Arroz, Hot Dog, trozos de pollo, tortilla de huevo.",
        tipo: "Chaufa",
        precio: 13
    }
    , {
        nombre: "Pollo Desilachado",
        descripcion: "Arroz, Hot Dog, pollo deshilachado, tortilla de huevo",
        tipo: "Chaufa",
        precio: 12
    }
    , {
        nombre: "Especial",
        descripcion: "Arroz, Hot Dog, trozos de pollo, trozos de carne, trozos de chorizo, tortilla de huevo",
        tipo: "Chaufa",
        precio: 14
    }
    , {
        nombre: "Jamon",
        descripcion: "Arroz, Hot Dog, trozos de jamon, tortilla de huevo",
        tipo: "Chaufa",
        precio: 14
    }
    , {
        nombre: "Langostino",
        descripcion: "Arroz, langostinos (CAMARONES), jamon en cubos, frejol, chino (germinados)",
        tipo: "Chaufa",
        precio: 17
    }
    , {
        nombre: "A lo pobre",
        descripcion: "Arroz, Hot Dog, pollo deshilachado, chorizo, tortilla de huevo, platano",
        tipo: "Chaufa",
        precio: 18
    }
    , {
        nombre: "A lo venezolano",
        descripcion: "Arroz, Hot Dog, trozos de pollo, trozos de jamon, tocineta, frijol chino, tortilla de huevo, pan chino.",
        tipo: "Chaufa",
        precio: 18
    }
    // Enchiladas
    , {
        nombre: "Pollo",
        descripcion: "Tortilla casera, pollo deshilachado, 2 quesos, papas al hilo",
        tipo: "Enchiladas",
        precio: 13
    }
    , {
        nombre: "Crispy",
        descripcion: "Tortilla casera, 2 quesos, Pollo crispy, Papas al hilo",
        tipo: "Enchiladas",
        precio: 14.5
    }
    , {
        nombre: "Especial",
        descripcion: "Tortilla casera, pollo deshilachado, 2 quesos, chorizo, papas al hilo",
        tipo: "Enchiladas",
        precio: 16.5
    }
    , {
        nombre: "Premium",
        descripcion: "Tortilla casera, 2 quesos, Pollo Deshilachado, Chorizo, Tocino ahumado, Huevo, Papas al hilo",
        tipo: "Enchiladas",
        precio: 19
    }
    , {
        nombre: "Trifasica",
        descripcion: "Tortilla casera, tortilla de huevo, 2 quesos, Chorizo, Pollo Deshilachado, Hot Dog, Papas al hilo",
        tipo: "Enchiladas",
        precio: 20
    }
    , {
        nombre: "Dr. Food",
        descripcion: "Tortilla casera, 2 Quesos, Pollo Deshilachado, Chorizo, Huevo, Tocino ahumado, hot dog, papas al hilo",
        tipo: "Enchiladas",
        precio: 21
    }
    // Alitas BBQ
    , {
        nombre: "Clasicas",
        tipo: "Alitas BBQ",
        precio: 16
    }
    , {
        nombre: "Bufalo (Picosas)",
        tipo: "Alitas BBQ",
        precio: 16
    }
    // Pepitos
    , {
        nombre: "Mixto",
        descripcion: "Pan de 30 cm, ensalada, carne, pollo, chorizo, queso parmesano, porción de papas, cremas",
        tipo: "Pepitos",
        precio: 20
    }
    , {
        nombre: "Con todo",
        descripcion: "Pan de 30 cm, ensalada, carne, pollo, chorizo, jamon, queso, huevo, tocineta, queso parmesano, porción de papas, cremas",
        tipo: "Pepitos",
        precio: 25
    }
    , {
        nombre: "Hawaiano",
        descripcion: "Pan de 30 cm, ensalada, carne, pollo, chorizo, queso edam rayado jamon, piña, tocino ahumado, porción de papas, cremas",
        tipo: "Pepitos",
        precio: 24
    }
    // Panini
    , {
        nombre: "Pollo Desilachado",
        descripcion: "BAGUETTE DE OREGANO CON PARMESANO, POLLO DESILACHADO, ensalada, + Cremas",
        tipo: "Panini",
        precio: 7.5
    }
    , {
        nombre: "Pollo Crispy",
        descripcion: "BAGUETTE DE OREGANO CON PARMESANO, POLLO CRISPY, ensalada, + Cremas",
        tipo: "Panini",
        precio: 9.5
    }
    , {
        nombre: "Jamon y Queso",
        descripcion: "BAGUETTE DE OREGANO CON PARMESANO, JAMON, QUESO, ensalada, + Cremas",
        tipo: "Panini",
        precio: 7.5
    }
    , {
        nombre: "Pollo al Grill",
        descripcion: "BAGUETTE DE OREGANO CON PARMESANO, POLLO GRILL, ensalada, + Cremas",
        tipo: "Panini",
        precio: 8.5
    }
    , {
        nombre: "Pollo al Grill",
        descripcion: "BAGUETTE DE OREGANO CON PARMESANO, PALTA, ensalada, + Cremas",
        tipo: "Panini",
        precio: 6.5
    }
    // Cachapas
    , {
        nombre: "Con queso fresco",
        tipo: "Cachapas",
        precio: 8
    }
    , {
        nombre: "Con 1/2 queso de mano",
        tipo: "Cachapas",
        precio: 10
    }
    , {
        nombre: "Con queso de mano",
        tipo: "Cachapas",
        precio: 13
    }
    , {
        nombre: "Con queso fresco y pollo",
        tipo: "Cachapas",
        precio: 12
    }
    , {
        nombre: "Queso de mano y cochino frito",
        tipo: "Cachapas",
        precio: 20
    }
    // Choripan
    , {
        nombre: "Sencillo",
        tipo: "Choripan",
        precio: 6
    }
    , {
        nombre: "Con papas",
        tipo: "Choripan",
        precio: 8
    }

]

export const tiposProduct = ['Cheveres', 'Hamburguesa', 'Broaster', 'Salchipapa', 'Chaufa', 'Enchiladas', 'Alitas BBQ', 'Pepitos', 'Panini', 'Cachapas', 'Choripan']

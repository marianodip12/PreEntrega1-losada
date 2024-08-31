
  const products = [
    // Categoria motherboard
    {
      id: 1,
      title: 'Motherboard ASUS ROG Strix',
      price: '15000',
      category: 'motherboard',
      description: 'Placa base ATX con soporte para procesadores Intel de última generación.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_897554-MLU69940227696_062023-O.webp',
    },
    {
      id: 2,
      title: 'Motherboard MSI B550-A PRO',
      price: '12000',
      category: 'motherboard',
      description: 'Placa base ATX con chipset B550 para procesadores AMD.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_991100-MLA78115412015_082024-O.webp',
    },
    {
      id: 3,
      title: 'Motherboard Gigabyte Z690 AORUS',
      price: '20000',
      category: 'motherboard',
      description: 'Placa base ATX con chipset Z690 para CPUs Intel.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_934577-MLA78475473799_082024-O.webp',
    },
    {
      id: 4,
      title: 'Motherboard ASRock B450M-HDV',
      price: '9000',
      category: 'motherboard',
      description: 'Placa base micro ATX con soporte para procesadores AMD.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_858671-MLU73481397698_122023-O.webp',
    },
  
    // Categoria ram
    {
      id: 5,
      title: 'Memoria RAM Corsair Vengeance 16GB',
      price: '8000',
      category: 'ram',
      description: 'Kit de memoria DDR4 de 16GB (2 x 8GB) a 3200MHz.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_805641-MLA74781352069_022024-O.webp',
    },
    {
      id: 6,
      title: 'Memoria RAM G.Skill Ripjaws 32GB',
      price: '15000',
      category: 'ram',
      description: 'Kit de memoria DDR4 de 32GB (2 x 16GB) a 3600MHz.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_702168-MLU75329231253_032024-O.webp',
    },
    {
      id: 7,
      title: 'Memoria RAM Kingston HyperX Fury 8GB',
      price: '4000',
      category: 'ram',
      description: 'Memoria DDR4 de 8GB a 2666MHz.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_675716-MLU74536926853_022024-O.webp',
    },
    {
      id: 8,
      title: 'Memoria RAM Crucial Ballistix 16GB',
      price: '8500',
      category: 'ram',
      description: 'Kit de memoria DDR4 de 16GB (2 x 8GB) a 3000MHz.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_655276-MLU74135830926_012024-O.webp',
    },
  
    // Categoría: Procesadores
    {
      id: 9,
      title: 'Procesador Intel Core i9-13900K',
      price: '40000',
      category: 'procesador',
      description: 'Procesador de 24 núcleos y 32 hilos con soporte para overclocking.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_928642-MLA47847420037_102021-E.webp',
    },
    {
      id: 10,
      title: 'Procesador AMD Ryzen 7 5800X',
      price: '30000',
      category: 'procesador',
      description: 'Procesador de 8 núcleos y 16 hilos con excelente rendimiento.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_622790-MLU72699561931_112023-E.webp',
    },
    {
      id: 11,
      title: 'Procesador Intel Core i7-13700K',
      price: '28000',
      category: 'procesador',
      description: 'Procesador de 16 núcleos y 24 hilos ideal para juegos y tareas pesadas.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_931933-MLA74782360983_022024-E.webp',
    },
    {
      id: 12,
      title: 'Procesador AMD Ryzen 5 5600X',
      price: '20000',
      category: 'procesador',
      description: 'Procesador de 6 núcleos y 12 hilos con buen rendimiento en juegos.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_709869-MLU73116059318_122023-E.webp',
    },
    {
      id: 13,
      title: 'Procesador Intel Core i5-13600K',
      price: '22000',
      category: 'procesador',
      description: 'Procesador de 14 núcleos y 20 hilos con excelente relación calidad-precio.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_859509-MLU73213842167_122023-E.webp',
    },
    {
      id: 14,
      title: 'Procesador AMD Ryzen 7 7700X',
      price: '35000',
      category: 'procesador',
      description: 'Procesador de 8 núcleos y 16 hilos con alto rendimiento para tareas multitarea.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_670184-MLA54974087756_042023-O.webp',
    },
    {
      id: 15,
      title: 'Procesador Intel Core i3-13100F',
      price: '12000',
      category: 'procesador',
      description: 'Procesador de 4 núcleos y 8 hilos ideal para presupuestos ajustados.',
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_859509-MLU73213842167_122023-E.webp',
    }
  ];
  
  
  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  
  
  export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
    
  };
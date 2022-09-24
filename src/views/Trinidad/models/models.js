export const places = {
  status: "number",
  data: [
    {
      date: "number",
      id: "number",
      name: "string",
      description: "string",
      headerImages: [
        {
          fileId: "string",
          blurHash: "string",
          url: "string",
        },
      ],
      pano: {
        fileId: "string",
        blurHash: "string",
        url: "string",
      },
      placeType: [
        {
          date: "number",
          id: "number",
          name: "string",
          classification: "boolean[3]",
        },
      ],
      routes: [
        {
          date: 1649681601336,
          visibility: true,
          id: 0,
          name: "Ruta de la Fundación",
          description:
            "Se ubica en el corazón del Centro Histórico, en la intersección de las calles de Boca y Real del Jigüe y en un entorno puramente colonial caracterizado por edificios construidos en los siglos XVIII y XIX; es el lugar escogido, según afirma la tradición oral, por el “Adelantado” don Diego Velázquez de Cuéllar como sede de la primera misa en diciembre del año de 1513. Su nombre se debe a la presencia de un árbol del jigüe que sirviera de cobija para tan importante acontecimiento. A un costado de la plaza se aprecia una cruz de madera adosada a un muro como representación de las estaciones del Vía Crucis durante la procesión de la Semana Santa.",
          places: [
            {
              id: 0,
              name: "Castillo del rey",
            },
          ],
          headerImages: [
            {
              blurHash: "LRK1][?ajtIU~pxuWVRk-;IUoft7",
              id: "61e0477e6f6dc72986ecf665",
              url: "https://ik.imagekit.io/lgqp0wffgtp/route_header_QmipGDtAy.webp",
            },
          ],
          activities: ["Montar a caballo"],
          web: "https://www.pagina.com",
          video: "https://www.youtube.com",
          content: [],
          comments: [],
        },
      ],
      phone: "",
      address: "",
      services: ["Piscina"],
      socialMedia: ["https://www.facebook.com"],
      web: "https://www.pagina.com",
      video: "https://www.youtube.com",
      latitude: 21.801503428305598,
      longitude: -79.98476050000002,
      content: [
        {
          id: 0,
          value: "<p>Esto es un texto de pruba</p>",
          type: "text",
        },
      ],
      comments: [],
    },
  ],
};

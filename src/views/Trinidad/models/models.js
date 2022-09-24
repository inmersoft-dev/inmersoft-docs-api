const models = {
  place: {
    status: "number: 200 - Ok / 422 - not found",
    data: [
      {
        date: "number: milliseconds",
        id: "number: unique id",
        name: "string: name",
        description: "string: short description",
        headerImages: [
          {
            id: "string: imageKit unique file id",
            blurHash: "string",
            url: "string",
          },
        ],
        panoramic: {
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
            date: "number",
            id: "number",
            name: "string",
            description: "string",
            headerImages: [
              {
                blurHash: "string",
                id: "string",
                url: "string",
              },
            ],
            activities: "string[]",
            web: "string",
            video: "string",
            content: [],
            comments: [],
          },
        ],
        phone: "string",
        address: "string",
        services: "string[]",
        socialMedia: "string[]",
        web: "string",
        video: "string",
        latitude: "number",
        longitude: "number",
        content: [
          {
            value: {
              content: "HTML (string)",
            },
            type: "text (string)",
          },
          {
            value: {
              url: "string",
            },
            type: "video (string)",
          },
          {
            value: {
              id: "string",
              blurHash: "string",
              url: "string",
            },
            type: "photo (string)",
          },
          {
            value: {
              title: "string",
              content: "string",
            },
            type: "accordion (string)",
          },
        ],
        comments: [
          {
            comment: "string",
            stars: "number",
          },
        ],
      },
    ],
  },
};

export default models;

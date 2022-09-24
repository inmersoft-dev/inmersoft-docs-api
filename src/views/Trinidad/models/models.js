const models = {
  place: {
    status: "number: 200 - Ok / 422 - not found",
    data: [
      {
        date: "number: date of creation's milliseconds",
        id: "number: unique id",
        name: "string: name",
        description: "string: short description",
        headerImages: [
          {
            id: "string: imageKit unique file id",
            blurHash: "string: blurHash",
            url: "string: image source url",
          },
        ],
        panoramic: {
          id: "string: imageKit unique file id",
          blurHash: "string: blurHash",
          url: "string: image source url",
        },
        placeType: [
          {
            date: "number: date of creation's milliseconds",
            id: "number: placeType unique id",
            name: "string: placeType name",
            classification:
              "boolean[3]: [dónde comer, dónde dormir, experiencia]",
          },
        ],
        noPlaceTypes: [
          {
            id: "number: placeType unique id",
            name: "string: placeType name",
          },
        ],
        routes: [
          {
            date: "number: date of creation's milliseconds",
            id: "number: unique id",
            name: "string: route name",
            description: "string: route short description",
            headerImages: [
              {
                id: "string: imageKit unique file id",
                blurHash: "string: blurHash",
                url: "string: image source url",
              },
            ],
            activities: "string[]: activities name",
            web: "string: route web site",
            video: "string: route web video",
            content: [
              {
                value: {
                  content: "string: HTML content",
                },
                type: "string: text",
              },
              {
                value: {
                  url: "string: video url",
                },
                type: "string: video",
              },
              {
                value: {
                  id: "string: imageKit unique file id",
                  blurHash: "string: blurHash",
                  url: "string: image source url",
                },
                type: "string: photo",
              },
              {
                value: {
                  title: "string: accordion title",
                  content: "string: accordion content",
                },
                type: "string: accordion",
              },
            ],
            comments: [
              {
                comment: "string: customer comment content",
                stars: "number: stars",
              },
            ],
          },
        ],
        noRoutes: [{ id: "number: unique id", name: "string: route name" }],
        phone: "string: telephone number",
        address: "string: address",
        services: "string[]: services name",
        socialMedia: "string[]: social media URLs",
        web: "string: web site",
        video: "string: web video",
        latitude: "number",
        longitude: "number",
        content: [
          {
            value: {
              content: "string: HTML content",
            },
            type: "string: text",
          },
          {
            value: {
              url: "string: video url",
            },
            type: "string: video",
          },
          {
            value: {
              id: "string: imageKit unique file id",
              blurHash: "string: blurHash",
              url: "string: image source url",
            },
            type: "string: photo",
          },
          {
            value: {
              title: "string: accordion title",
              content: "string: accordion content",
            },
            type: "string: accordion",
          },
        ],
        comments: [
          {
            comment: "string: customer comment content",
            stars: "number: stars",
          },
        ],
      },
    ],
  },
};

export default models;

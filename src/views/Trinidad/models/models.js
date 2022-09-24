const date = "number: date of creation's milliseconds";
const id = "number: unique id";
const name = "string: name";
const description = "string: short description";
const web = "string: web site";
const video = "string: web video";

const image = {
  id: "string: imageKit unique file id",
  blurHash: "string: blurHash",
  url: "string: image source url",
};

const headerImages = [image];

const panoramic = image;

const content = [
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
];

const comments = [
  {
    comment: "string: customer comment content",
    stars: "number: stars",
  },
];

const placeType = {
  date,
  id,
  name,
  classification: "boolean[3]: [dónde comer, dónde dormir, experiencia]",
};

const route = {
  date,
  id,
  name,
  description,
  headerImages,
  activities: "string[]: activities name",
  web,
  video,
  content,
  comments,
};

const place = {
  date,
  id,
  name,
  description,
  headerImages,
  panoramic,
  phone: "string: telephone number",
  address: "string: address",
  services: "string[]: services name",
  socialMedia: "string[]: social media URLs",
  web,
  video,
  latitude: "number",
  longitude: "number",
  content,
  comments,
};

const models = {
  place: {
    status: "number: 200 - Ok / 422 - not found",
    data: [{ ...place, routes: [route], placeType: [placeType] }],
  },
  route: {
    status: "number: 200 - Ok / 422 - not found",
    data: [{ ...route, places: [place] }],
  },
  placeType: {
    status: "number: 200 - Ok / 422 - not found",
    data: [{ ...placeType, places: [place] }],
  },
};

export default models;

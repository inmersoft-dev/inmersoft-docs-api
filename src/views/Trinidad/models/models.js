const date = "number: date of creation's milliseconds";
const id = "number: unique id";
const name = "string: name";
const description = "string: short description";
const title = "Úrsula Pomares decididamente maestra";
const subtitle =
  "Por Patricia Lazo Rodríguez· Publicada 22 Diciembre 2021 · Actualizado 22 Diciembre 2021";
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

const formContent = [
  {
    options: "string: [!] options for the question",
    question: "string: question topic",
    type: "string: checkbox / radio / text / emotion",
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

const news = {
  date,
  id,
  title,
  subtitle,
  headerImages,
  content,
  comments,
};

const event = {
  date,
  id,
  title,
  subtitle,
  headerImages,
  content,
  comments,
  startDate: "number: start date's milliseconds",
  endDate: "number: end date's milliseconds",
};

const survey = {
  date,
  id,
  name,
  content: formContent,
};

const text = {
  date,
  id,
  name,
  content,
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
  news: { status: "number: 200 - Ok / 422 - not found", data: [news] },
  event: { status: "number: 200 - Ok / 422 - not found", data: [event] },
  campaign: { status: "number: 200 - Ok / 422 - not found", data: [] },
  survey: { status: "number: 200 - Ok / 422 - not found", data: [survey] },
  text: { status: "number: 200 - Ok / 422 - not found", data: [text] },
};

export default models;

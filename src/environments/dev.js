import base from "./base";

const env = {
  ...base,
  api: {
    baseURL: "https://dev.pokeapi.co/api/v2/",
  },
  shouldMock: true,
};

export default env;

import dev from "./dev";
import prod from "./prod";

const environment =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? dev
    : prod;

export default environment;

import { render, screen } from "@testing-library/react";

import PokemonView from "./PokemonView";
import ditto from "./ditto.json";

test("renders PokemonView", () => {
  render(<PokemonView pokemon={ditto} />);
});

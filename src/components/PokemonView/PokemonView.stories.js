import PokemonView from "./PokemonView";
import ditto from "./ditto.json";

export default {
  title: "Pokemon/PokemonView",
  component: PokemonView,
};

export const PokemonView_1 = () => <PokemonView pokemon={ditto} />;

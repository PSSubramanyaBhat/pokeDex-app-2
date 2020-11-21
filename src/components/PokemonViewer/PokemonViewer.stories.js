import PokemonViewer from "./PokemonViewer";
import ditto from "../PokemonView/ditto.json";

export default {
  title: "Pokemon/PokemonViewer",
  component: PokemonViewer,
};

export const PokemonViewerIdle = () => <PokemonViewer />;
export const PokemonViewerLoading = () => <PokemonViewer status="loading" />;
export const PokemonViewerResolved = () => (
  <PokemonViewer status="resolved" pokemonData={ditto} />
);
export const PokemonViewerError = () => <PokemonViewer status="error" />;

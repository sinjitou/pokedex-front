import { pokemons as pkmns } from "@/lib/fake.json";
import { PokemonInterface } from "@/lib/interfaces";
import Image from "next/image";
import { PokemonCard } from "./pokemonCard";
import { PokemonDrawer } from "./pokemonDrawer";
import { Pagination } from "./ui/pagination";
import { MyPagination } from "./myPagination";

export default function Pokemons() {
  const pokemons: PokemonInterface[] = pkmns?.slice(0, 20);
  return (
    <div className="mb-6">
      <section className="mt-24 mb-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {pokemons?.map((pokemon: PokemonInterface) => {
          return (
            <PokemonDrawer key={pokemon.id} pokemon={pokemon}>
              <PokemonCard pokemon={pokemon} />
            </PokemonDrawer>
          );
        })}
      </section>
      <MyPagination max={20} />
    </div>
  );
}

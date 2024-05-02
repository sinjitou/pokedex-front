"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PokemonInterface } from "@/lib/interfaces";
import { CgPokemon } from "react-icons/cg";
import { pokemons as pkmns } from "@/lib/fake.json";
import { PokemonDrawer } from "@/components/pokemonDrawer";
import { PokemonCard } from "@/components/pokemonCard";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/components/provider/Provider";

export default function Pokedex() {
  const { isLoggedIn, catched, seen } = useContext(AppContext);

  if (!isLoggedIn) redirect("/");

  const pokemonsCatched: PokemonInterface[] = pkmns?.filter(({ id }) =>
    catched.includes(id)
  );
  const pokemonsSeen: PokemonInterface[] = pkmns?.filter(({ id }) =>
    seen.includes(id)
  );
  return (
    <main className="mt-24">
      <div className="flex items-center mb-4 mx-4">
        <CgPokemon className="mr-2 h-8 w-8" />
        <h1 className="text-3xl font-semibold">Mon pokedex</h1>
      </div>
      <Tabs defaultValue="seen" className="w-full px-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="seen">Pokemon vus</TabsTrigger>
          <TabsTrigger value="catch">Pokemon attrapés</TabsTrigger>
        </TabsList>
        <TabsContent value="seen">
          <section className="mt-4 mb-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {pokemonsSeen?.map((pokemon: PokemonInterface) => {
              return (
                <PokemonDrawer key={pokemon.id} pokemon={pokemon}>
                  <PokemonCard pokemon={pokemon} />
                </PokemonDrawer>
              );
            })}
          </section>
        </TabsContent>
        <TabsContent value="catch">
          <section className="mt-4 mb-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {pokemonsCatched?.map((pokemon: PokemonInterface) => {
              return (
                <PokemonDrawer key={pokemon.id} pokemon={pokemon}>
                  <PokemonCard pokemon={pokemon} />
                </PokemonDrawer>
              );
            })}
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
}

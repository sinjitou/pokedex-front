import { user } from "@/lib/fake.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PokemonInterface } from "@/lib/interfaces";
import { MyTooltip } from "./ui/myTooltip";
import { IoIosAdd } from "react-icons/io";
import typesEmoji from "@/lib/typeEmojis.json";
import { useContext } from "react";
import { AppContext } from "./provider/Provider";
const { isAdmin } = user;

const pokemonColor = {
  NORMAL: "#808080",
  FIGHTING: "#FF0000",
  FLYING: "#0000FF",
  POISON: "#800080",
  GROUND: "#A52A2A",
  ROCK: "#808080",
  BUG: "#00FF00",
  GHOST: "#000000",
  STEEL: "#808080",
  FIRE: "#FF0000",
  WATER: "#0000FF",
  GRASS: "#00FF00",
  ELECTRIC: "#FFFF00",
  PSYCHIC: "#FF00FF",
  ICE: "#00FFFF",
  DRAGON: "#FF0000",
  DARK: "#000000",
  FAIRY: "#FFC0CB",
};

export function PokemonCard({ pokemon }: { pokemon: PokemonInterface }) {
  const { setSeen, setCached, seen, catched } = useContext(AppContext);

  const isSeen = seen.includes(pokemon.id);
  const isCatched = catched.includes(pokemon.id);
  const { name, types, regions, id, imgUrl } = pokemon || {};
  return (
    <Card
      className={`w-full`}
      style={{
        backgroundColor: `${
          pokemonColor[types[0] as keyof typeof pokemonColor]
        }60`,
      }}
    >
      <CardContent>
        <Image
          key={id}
          src={imgUrl}
          alt={name}
          className="w-full h-auto"
          width={100}
          height={100}
        />
      </CardContent>
      <CardFooter className="w-full flex flex-col">
        <div className="flex justify-between w-full">
          <CardTitle>{name}</CardTitle>
          <div className="flex gap-1">
            {types.map((type, index) => (
              <MyTooltip
                key={index}
                title={type}
                label={typesEmoji[type as keyof typeof typesEmoji]}
                clnButton="rounded-full w-8 h-8 shadow-sm"
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end mt-4">
          {isCatched ? <p>Attrapé</p> : isSeen ? <p>Vu</p> : <p>Sauvage</p>}
        </div>
      </CardFooter>
    </Card>
  );
}

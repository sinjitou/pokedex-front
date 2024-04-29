import * as React from "react";
import { user } from "@/lib/fake.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PokemonInterface } from "@/lib/interfaces";
import { MyTooltip } from "./ui/myTooltip";
import { IoIosAdd } from "react-icons/io";
import typesEmoji from "@/lib/typeEmojis.json";
const { isAdmin } = user;

export function PokemonCard({
  pokemon,
  seen,
  catched,
}: {
  pokemon: PokemonInterface;
  seen?: boolean;
  catched?: boolean;
}) {
  const { name, types, regions, id, imgUrl } = pokemon || {};
  return (
    <Card className="w-full">
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
          {catched ? <p>Attrapé</p> : seen ? <p>Vu</p> : <p>Sauvage</p>}
        </div>
      </CardFooter>
    </Card>
  );
}

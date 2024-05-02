"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PokemonInterface } from "@/lib/interfaces";
import Image from "next/image";
import typesEmoji from "@/lib/typeEmojis.json";
import { TbMapSearch } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { Separator } from "./ui/separator";
import { IoInformationCircle } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { user } from "@/lib/fake.json";
import { Trash } from "lucide-react";
import { CgTrash } from "react-icons/cg";
import { AppContext } from "./provider/Provider";
import { useContext } from "react";

const { isAdmin } = user;

export function PokemonDrawer({
  children,
  pokemon,
}: {
  children: React.ReactNode;
  pokemon: PokemonInterface;
}) {
  const { setSeen, setCatched, seen, catched } = useContext(AppContext);
  const isSeen = seen.includes(pokemon.id);
  const isCatched = catched.includes(pokemon.id);
  const { name, types, regions, id, imgUrl, description } = pokemon || {};
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <Image
          key={id}
          src={imgUrl}
          alt={name}
          className="w-full aspect-[1/1]"
          width={100}
          height={100}
        />
        <div className="flex justify-start gap-4 w-full my-4 mb-2">
          <SheetTitle>{name}</SheetTitle>
          <div className="flex gap-1 flex-wrap">
            {types.map((type, index) => (
              <div
                key={index}
                className="flex items-center gap-1 border px-2 rounded-full"
              >
                <p>{typesEmoji[type as keyof typeof typesEmoji]}</p>
                <p className="text-sm italic">{type}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-2">
          <div className="flex gap-1 items-center mb-1">
            <IoInformationCircle />
            <h3 className="text-sm font-semibold flex align-center">
              Description
            </h3>
          </div>
          <p className={`text-sm ${!description && "italic"}`}>
            {description || "Aucune description"}
          </p>
        </div>
        <Separator />
        <div className="my-2">
          <div className="flex gap-1 items-center mb-1">
            <TbMapSearch />
            <h3 className="text-sm font-semibold flex align-center">Régions</h3>
          </div>
          <p className="text-sm">
            {regions?.map((region, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 border px-2 rounded-full"
              >
                <p className="text-sm italic">{`${region?.regionName} ${region?.regionPokedexNumber}`}</p>
              </span>
            ))}
            {!regions?.length && (
              <p className="text-sm italic">Aucune région</p>
            )}
          </p>
        </div>
        <Separator />
        <SheetFooter className="mt-4 flex flex-row flex-wrap align-center justify-end gap-2">
          <Button
            variant="outline"
            className="w-auto flex items-center"
            onClick={() => {
              const phrase = new SpeechSynthesisUtterance(
                `${name}, de type ${types.join("et ")}. Région ${regions
                  .map(
                    ({ regionName, regionPokedexNumber }) =>
                      `${regionName} #${regionPokedexNumber}`
                  )
                  .join(", ")}. ${description || "Aucune description"}`
              );
              speechSynthesis.speak(phrase);
            }}
          >
            <IoPlayCircleOutline />
          </Button>
          {isAdmin && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
              variant="outline"
              className=" flex items-center bg-red-500 hover:bg-red-900 text-white hover:text-white"
            >
              <CgTrash /> Supprimer
            </Button>
          )}
          {isCatched ? (
            <p>Attrapé</p>
          ) : isSeen ? (
            <div className="flex items-center gap-4">
              <p>Vu</p>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  const catched = localStorage.getItem("catched");
                  const newCachedArray = [
                    ...(JSON.parse(catched || "[]") || []),
                    id,
                  ];
                  localStorage.setItem(
                    "catched",
                    JSON.stringify(newCachedArray)
                  );
                  setCatched(newCachedArray);
                }}
                variant="outline"
                className="w-24 flex items-center"
              >
                Attraper
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button
                onClick={(e) => {
                  e.stopPropagation();

                  const seen = localStorage.getItem("seen");
                  const newSeenArray = [
                    ...(JSON.parse(seen || "[]") || []),
                    id,
                  ];
                  localStorage.setItem("seen", JSON.stringify(newSeenArray));
                  setSeen(newSeenArray);
                }}
                variant="outline"
                className="w-24 flex items-center"
              >
                <IoIosAdd /> Vu
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();

                  const seen = localStorage.getItem("seen");
                  const newSeenArray = [
                    ...(JSON.parse(seen || "[]") || []),
                    id,
                  ];
                  localStorage.setItem("seen", JSON.stringify(newSeenArray));
                  const catched = localStorage.getItem("catched");
                  const newCachedArray = [
                    ...(JSON.parse(catched || "[]") || []),
                    id,
                  ];
                  localStorage.setItem(
                    "catched",
                    JSON.stringify(newCachedArray)
                  );

                  setSeen(newSeenArray);
                  setCatched(newCachedArray);
                }}
                variant="outline"
                className="w-24 flex items-center"
              >
                <IoIosAdd /> Attraper
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

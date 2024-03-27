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

export function PokemonDrawer({
  children,
  pokemon,
  seen,
  catched,
}: {
  children: React.ReactNode;
  pokemon: PokemonInterface;
  seen?: boolean;
  catched?: boolean;
}) {
  const { name, types, regions, id, imgUrl, description } = pokemon || {};
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <div className="w-full">
          <Image
            key={id}
            src={imgUrl}
            alt={name}
            className="w-full aspect-[1/1]"
            width={100}
            height={100}
          />
        </div>
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
        <SheetFooter className="mt-4 flex flex-row align-center justify-end gap-2">
          <Button variant="outline" className="w-auto flex items-center">
            <IoPlayCircleOutline />
          </Button>
          {catched ? (
            <p>Attrapé</p>
          ) : seen ? (
            <div className="flex items-center gap-4">
              <p>Vu</p>
              <Button variant="outline" className="w-24 flex items-center">
                Attraper
              </Button>
            </div>
          ) : (
            <Button variant="outline" className="w-24 flex items-center">
              <IoIosAdd /> Ajouter
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

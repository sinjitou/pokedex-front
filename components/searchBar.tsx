"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import AddPokemonModal from "./addPokemonModal";

export function SearchBar({
  setModalIsOpen,
}: {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Rechercher un pokemon..." />
        <Button type="submit" className="bg-red-500">
          <IoSearchSharp />
        </Button>
        <Button onClick={() => setModalIsOpen(true)} className="bg-red-500">
          <Plus />
        </Button>
      </div>
    </>
  );
}

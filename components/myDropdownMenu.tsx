"use client";
import { LogOut, User } from "lucide-react";
import { CgPokemon } from "react-icons/cg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "./provider/Provider";

export function MyDrownDownMenu({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { setIsLoggedIn, userData } = useContext(AppContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{userData.login}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="flex items-center" href={"/profile"}>
              <User className="mr-2 h-4 w-4" />
              <span>Mon profil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="flex items-center" href={"/pokedex"}>
              <CgPokemon className="mr-2 h-4 w-4" />
              <span>Mon pokedex</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem
          onClick={() => setIsLoggedIn(false)}
          className="text-red-700"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

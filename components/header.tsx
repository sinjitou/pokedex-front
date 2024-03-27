import Image from "next/image";
import Link from "next/link";
import { isLoggedIn, user } from "@/lib/fake.json";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SearchBar } from "./searchBar";
import {} from "next/font/google";
import { MyDrownDownMenu } from "./myDropdownMenu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 mr-4">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              className="h-8 w-auto"
              width={100}
              height={100}
              src="/images/pokeball.png"
              alt="company"
            />
            <span className="hidden sm:inline font-bold text-xl text-indigo-900">
              MyPOKEDEX
            </span>
          </a>
        </div>
        <div className="hidden md:flex lg:gap-x-12">
          <Link
            key={"home"}
            href={"/"}
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Liste des pokemons
          </Link>
        </div>

        <div className="flex flex-1 justify-end">
          {isLoggedIn ? (
            <nav className="flex items-center space-x-4">
              <SearchBar />
              <MyDrownDownMenu name={user?.login}>
                <Avatar>
                  <AvatarImage
                    src={`https://api.dicebear.com/8.x/thumbs/png?seed=${user?.login}&backgroundType=gradientLinear&shapeColor=FF1B1C&backgroundColor=D01010`}
                    alt="avatar"
                  />
                  <AvatarFallback>
                    {user?.login?.slice(0, 2)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </MyDrownDownMenu>
            </nav>
          ) : (
            // todo modal connection
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Se connecter <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Rechercher un pokemon..." />
      <Button type="submit" className="bg-red-500">
        <IoSearchSharp />
      </Button>
    </div>
  );
}

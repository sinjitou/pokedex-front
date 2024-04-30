import { AuroraBackground } from "@/components/animated-background";
import HomeBg from "@/components/homeBg";
import Image from "next/image";
import { isLoggedIn } from "@/lib/fake.json";
import Pokemons from "@/components/Pokemons";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      {isLoggedIn ? <Pokemons /> : <HomeBg />}
      <Toaster richColors />
    </>
  );
}

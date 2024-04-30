// "use client";
import { AuroraBackground } from "@/components/animated-background";
import HomeBg from "@/components/homeBg";
import Image from "next/image";
import { isLoggedIn } from "@/lib/fake.json";
import Pokemons from "@/components/Pokemons";
import { Toaster } from "sonner";

export default function Home() {
  // const isLog = Boolean(localStorage.getItem("login")) || isLoggedIn;

  return (
    <>
      {/* {isLog ? <Pokemons /> : <HomeBg />}
      <Toaster richColors /> */}
    </>
  );
}

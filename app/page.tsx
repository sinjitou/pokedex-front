"use client";
import { AuroraBackground } from "@/components/animated-background";
import HomeBg from "@/components/homeBg";
import Image from "next/image";
import Pokemons from "@/components/Pokemons";
import { Toaster } from "sonner";
import { useContext } from "react";
import { AppContext } from "@/components/provider/Provider";
import { redirect } from "next/navigation";

export default function Home() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <>
      {isLoggedIn ? <Pokemons /> : <HomeBg />}
      <Toaster richColors />
    </>
  );
}

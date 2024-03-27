import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pokedex() {
  return (
    <main className="mt-24">
      <div className="flex items-center mb-4 mx-4">
        <User className="mr-2 h-8 w-8" />
        <h1 className="text-3xl font-semibold">Mon Profil</h1>
      </div>
      <div className="w-full flex justify-center px-4">
        <Tabs defaultValue="profil" className="max-w-[400px] ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profil">Mes infos</TabsTrigger>
            <TabsTrigger value="trainer">Profil Dresseur</TabsTrigger>
          </TabsList>
          <TabsContent value="profil">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Mes infos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Pseudo</Label>
                  <Input id="name" placeholder="Mon pseudo" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="trainer">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Mon profil dresseur</CardTitle>
              </CardHeader>
              {/* todo image */}
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Nom</Label>
                  <Input
                    id="current"
                    type="text"
                    placeholder="Mon nom de dresseur"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Enregistrer</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

import { Link } from "react-router";
import { Card } from "~/components/shadcn/card";
import SpeciesBackground from "~/components/species/species_background";
import SpeciesTypeChips from "~/components/species/species_type_chips";
import type Species from "~/domain/entities/species";

function padId(id: string): string {
  // pad pokemon ID with leading zeroes
  let paddedStr = "" + id;
  while (paddedStr.length < 4) {
    paddedStr = "0" + paddedStr;
  }
  return paddedStr;
}

function getPokemonSpriteSrc(id: string): string {
  const imgFileName = padId(id);
  return "/sprites/pokemon/" + imgFileName + ".webp";
}

export default async function SpeciesCard({ species }: { species: Species }) {
  return (
    <Link to={`/species/${species.id}`}>
      <Card className="relative overflow-hidden p-0 w-full xs:w-[10rem] md:w-[12rem]">
        <SpeciesBackground
          types={species.types}
          className="absolute w-full h-3/4 z-0"
        />
        <div className="relative flex flex-col items-center p-4 gap-0">
          <img
            src={getPokemonSpriteSrc(species.id)}
            width={150}
            height={150}
            alt={species.name}
            className="pt-2"
          />
          <div className="text-lg">{species.name}</div>
          <SpeciesTypeChips types={species.types} />
        </div>
      </Card>
    </Link>
  );
}

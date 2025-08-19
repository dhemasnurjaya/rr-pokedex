import SpeciesCard from "~/components/species/species_card";
import type Species from "~/domain/entities/species";

export default function SpeciesGrid({ species }: { species: Species[] }) {
  const speciesCards = species.map((s) => (
    <SpeciesCard key={s.name} species={s} />
  ));

  return (
    <div className="flex flex-wrap gap-4 justify-center">{speciesCards}</div>
  );
}

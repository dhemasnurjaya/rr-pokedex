import container from "~/injection_container";
import SpeciesGrid from "~/components/species/species_grid";
import SpeciesPagination from "~/components/species/species_pagination";
import SpeciesSearch from "~/components/species/species_seach";
import {
  useLoaderData,
  useNavigation,
  type LoaderFunctionArgs,
} from "react-router";
import type Species from "~/domain/entities/species";

const itemsPerPage = 21;

type LoaderData = {
  species: Species[];
  currentPage: number;
  pageCount: number;
};

export async function loader({
  request,
}: LoaderFunctionArgs): Promise<LoaderData> {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const query = searchParams.get("query") || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const speciesRepo = await container.items.speciesRepository;
  const pageCount = await speciesRepo.countSpeciesPage({
    searchFilter: query,
    itemsPerPage: itemsPerPage,
  });
  const species = await speciesRepo.listSpecies({
    searchFilter: query,
    limit: itemsPerPage,
    offset: (currentPage - 1) * itemsPerPage,
  });

  return { species, currentPage, pageCount };
}

export default function SpeciesPage() {
  const { species, currentPage, pageCount } = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col grow gap-4 items-center">
      <SpeciesSearch />
      <SpeciesGrid species={species} />
      <SpeciesPagination
        totalPages={pageCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

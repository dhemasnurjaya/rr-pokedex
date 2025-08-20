import { LucideLoader, LucideLoaderCircle, LucideSearch } from "lucide-react";
import { useMemo } from "react";
import { useNavigation, useSearchParams } from "react-router";

export default function SpeciesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    setSearchParams(params);
  };

  const debouncedHandleSearch = useMemo(() => {
    let timeout: NodeJS.Timeout;
    return (term: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleSearch(term);
      }, 300);
    };
  }, [setSearchParams]);

  return (
    <div className="relative flex w-full sm:w-xs">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        placeholder="Type Pokemon name or ID..."
        className="peer block w-full rounded-md border border-gray-300 py-2 pl-12"
        onChange={(e) => debouncedHandleSearch(e.target.value)}
      />
      {isLoading ? (
        <LucideLoader className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 animate-spin text-gray-400 peer-focus:text-gray-900" />
      ) : (
        <LucideSearch className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
      )}
    </div>
  );
}

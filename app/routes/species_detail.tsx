import { useParams } from "react-router";

export default function SpeciesDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Species Detail Page</h1>
      <p>Details for species with ID: {id}</p>
    </div>
  );
}

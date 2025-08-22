import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/home/layout.tsx", [
    index("routes/home/home.tsx"),
    route("berries", "routes/home/berries.tsx"),
    route("moves", "routes/home/moves.tsx"),
    route("species", "routes/home/species.tsx"),
    route("species/:id", "routes/species_detail.tsx"),
  ]),
] satisfies RouteConfig;

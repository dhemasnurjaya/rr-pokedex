import { Outlet } from "react-router";
import Navbar from "~/components/navbar";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokédex" },
    { name: "description", content: "React Router Pokédex" },
  ];
}

export default function HomeLayout() {
  return (
    <html lang="en">
      <body className="antialiased pt-14">
        <Navbar />
        <div className="flex flex-col grow p-4 md:w-full">
          <Outlet />
        </div>
      </body>
    </html>
  );
}

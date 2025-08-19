import type React from "react";
import Navbar from "~/components/navbar";
import type { Route } from "./+types/layout";
import { Outlet } from "react-router";

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
        <Navbar className="fixed top-0 left-0 right-0 h-14 flex items-center px-4 bg-navbar-background z-10" />
        <div className="flex flex-col grow p-4 md:w-full">
          <Outlet />
        </div>
      </body>
    </html>
  );
}

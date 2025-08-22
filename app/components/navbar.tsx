import { Link, useLocation } from "react-router";
import Pokeball from "~/components/pokeball";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/shadcn/navigation-menu";

const navigationMenu = [
  { label: "Species", href: "/species" },
  { label: "Moves", href: "/moves" },
  { label: "Berries", href: "/berries" },
];

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const logo = (
    <Link to="/">
      <Pokeball className="text-navbar-foreground rounded-md hover:bg-navbar-foreground hover:text-navbar-background transition-colors duration-200" />
    </Link>
  );

  const menuItems = navigationMenu.map((item) => {
    const isActive = currentPath.startsWith(item.href);
    return (
      <NavigationMenuItem
        key={item.label}
        className={`text-navbar-foreground font-semibold ${isActive ? "underline" : ""}`}
      >
        <NavigationMenuLink asChild>
          <Link to={item.href}>{item.label}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  });

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 flex items-center px-4 bg-navbar-background z-10">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex flex-row gap-4">
          {logo}
          {menuItems}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

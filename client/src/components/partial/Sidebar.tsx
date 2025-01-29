import clsx from "clsx";
import { LayoutDashboard, HousePlus, House, User } from "lucide-react";
import { useLocation } from "react-router";

export default function Sidebar() {
  const navigation = [
    { name: "Tableau de bord", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Annonces", icon: HousePlus, path: "/annonce" },
    // { name: "Propriétés", icon: House, path: "/properties" },
    // { name: "Utilisateurs", icon: User, path: "/users" },
  ];

  const location = useLocation();

  return (
    <div className="sidebar flex flex-col h-full fixed w-[240px] py-4 px-3">
      <Team team={null}/>
      <div className="flex h-full w-full justify-between flex-col">
        <nav className="flex flex-col pt-8">
          <ul className="flex flex-col gap-3">
            {navigation.map((nav, index) => (
              <div className="flex relative items-center w-full">
                <li
                  key={index}
                  className={clsx("px-2 py-2 flex gap-4 rounded-lg w-full hover:bg-border/50 cursor-pointer", {
                    "bg-border/50":
                      location.pathname === nav.path,
                  })}
                >
                  <a href={nav.path} className="flex gap-3 items-center">
                    <nav.icon className="h-[20px]" />
                    <p
                      className="text-sm font-medium text-grayprimary text-nowrap"                      
                    >
                      {nav.name}
                    </p>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </nav>
        <div className="flex w-full gap-2 border-b-[1px] border-gray-300 flex-col">
          <div>
            <div className="flex items-center justify-center h-10 w-10 border-[1px] rounded-full bg-whiteprimary border-gray-300">
              <img className="flex rounded-full h-8 w-8" />
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}


function Team({ team }) {
  return (
    <div className="flex gap-4 px-2 py-3 border border-border/50 items-center w-full rounded-md bg-white">
        <img src="" alt="User" className="w-8 h-8 rounded-md" />
        <p>Compagny name</p>
    </div>
  )
}
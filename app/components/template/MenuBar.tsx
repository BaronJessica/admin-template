"use client";

import { IconAdjustments, IconBell, IconHome, IconLogOut } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuBar() {
  return (
    <aside
      className="flex flex-col
      dark:bg-gray-900 dark:text-gray-200
      bg-gray-200 text-gray-700
    "
    >
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-700 via-indigo-900 to-purple-900
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={IconHome} />
        <MenuItem url="/adjustments" text="Ajustes" icon={IconAdjustments} />
        <MenuItem url="/notifications" text="Notificações" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("logOut")}
          text="Sair"
          icon={IconLogOut}
          className={`
            text-red-600 dark:text-red-400 hover:bg-red-600 dark:hover:text-white hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}

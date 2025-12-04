import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import IconSun from "../assets/images/icon-sun.svg";
import IconMoon from "../assets/images/icon-moon.svg";


const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const HandleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle("dark");
    setIsDark(isDarkChanged);
  };

  return (
    <div className="h-[66px] bg-Neutral-0 dark:bg-Neutral-800 flex justify-between items-center px-3 mb-6 rounded-[10px]">
      {/*Logo*/}
      <img src={isDark ? LogoDark : Logo} alt="Logo de la empresa" />

      {/*Boton dark y  light*/}
      <button
        onClick={HandleClick}
        className="bg-Neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700"
      >
        <img src={isDark ? IconSun : IconMoon} alt="" />
      </button>
    </div>
  );
};

export default Header;

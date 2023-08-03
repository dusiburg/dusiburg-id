"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} className="flex flex-row items-center gap-4 px-2.5 py-1 rounded-lg duration-200 hover:cursor-pointer hover:bg-zinc-700/40">
      {children}
    </Link>
  );
}

const Profile = () => {
  return (
    <Link href="/my" className={`flex flex-row items-center gap-2 px-2 py-1.5 rounded-lg duration-200 hover:cursor-pointer hover:bg-white/10`}>
      <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 7.832c1.57 0 2.88-1.295 2.88-2.953A2.883 2.883 0 0 0 8 2C6.443 2 5.12 3.282 5.127 4.887 5.127 6.537 6.43 7.832 8 7.832ZM3.62 14h8.76c1.21 0 1.62-.363 1.62-.99 0-1.691-2.335-4.016-6-4.016-3.672 0-6 2.325-6 4.015 0 .628.41.99 1.62.99Z"></path>
      </svg>
      <p className="text-sm">Профиль</p>
    </Link>
  );
}

const Lang = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (isDropdownOpen && !event.target.closest(".relative")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <div className={`p-1.5 rounded-lg duration-200 ${isDropdownOpen && "bg-white/10"} hover:cursor-pointer hover:bg-white/10`} onClick={dropdownHandler}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.99 3a.677.677 0 0 0-.117.013C6.97 3.081 3 7.085 3 12.001c0 4.917 3.972 8.923 8.879 8.988a.68.68 0 0 0 .247 0C17.03 20.92 21 16.915 21 12c0-4.916-3.97-8.922-8.876-8.989A.674.674 0 0 0 11.989 3Zm-.665 1.517v3.887h-2.43c.192-.719.4-1.425.683-1.976.519-1.01 1.132-1.64 1.747-1.91Zm1.35 0c.615.271 1.228.902 1.747 1.91.283.552.49 1.258.682 1.977h-2.429V4.517Zm-3.84.53a7.452 7.452 0 0 0-.459.764c-.386.752-.677 1.643-.901 2.593H5.248a7.647 7.647 0 0 1 3.586-3.357Zm6.33 0a7.647 7.647 0 0 1 3.587 3.357h-2.226c-.225-.95-.516-1.84-.902-2.593a7.434 7.434 0 0 0-.46-.764ZM4.687 9.753h2.595c-.103.734-.232 1.453-.232 2.248 0 .795.129 1.513.232 2.247H4.687a7.66 7.66 0 0 1 0-4.495Zm3.948 0h2.69v4.495h-2.69c-.113-.724-.235-1.447-.235-2.247 0-.8.122-1.523.235-2.248Zm4.04 0h2.69c.113.725.235 1.448.235 2.248 0 .8-.122 1.523-.235 2.247h-2.69V9.753Zm4.043 0h2.595a7.66 7.66 0 0 1 0 4.495h-2.595c.103-.734.232-1.452.232-2.247 0-.795-.129-1.514-.232-2.248Zm-11.47 5.844h2.227c.224.95.515 1.841.901 2.593.14.272.296.523.46.765a7.647 7.647 0 0 1-3.588-3.358Zm3.648 0h2.429v3.887c-.615-.271-1.228-.901-1.747-1.91-.283-.551-.49-1.258-.682-1.977Zm3.779 0h2.43c-.193.72-.4 1.426-.683 1.976-.519 1.01-1.132 1.64-1.747 1.911v-3.887Zm3.85 0h2.227a7.647 7.647 0 0 1-3.586 3.358c.163-.241.318-.493.458-.765.386-.752.677-1.643.902-2.593Z"></path>
        </svg>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 flex flex-col gap-2 w-64 mt-2 p-4 rounded-xl z-20 bg-zinc-800 drop-shadow-lg">
          <NavLink href="/dfa">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <p className="text-sm">RU</p>
            </div>
            <p className="text-base">Русский</p>
          </NavLink>
          <NavLink href="/laws">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <p className="text-sm">EN</p>
            </div>
            <p className="text-base">Английский</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (isDropdownOpen && !event.target.closest(".relative")) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <div className={`p-1.5 rounded-lg duration-200 ${isDropdownOpen && "bg-white/10"} hover:cursor-pointer hover:bg-white/10`} onClick={dropdownHandler}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 7.23a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.23Zm5.385 0a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23Zm6.384 1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23ZM5 12.617a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1.23Zm6.385 1a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1h1.23a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23Zm4.384-1a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23ZM6 19a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1h1.23a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1H6Zm4.385-1a1 1 0 0 0 1 1h1.23a1 1 0 0 0 1-1v-1.231a1 1 0 0 0-1-1h-1.23a1 1 0 0 0-1 1v1.23Zm6.384 1a1 1 0 0 1-1-1v-1.231a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v1.23a1 1 0 0 1-1 1h-1.23Z"></path>
        </svg>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 flex flex-col gap-2 w-80 mt-2 p-4 rounded-xl z-20 bg-zinc-800 drop-shadow-lg">
          <NavLink href="/">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
              </svg>
            </div>
            <p className="text-base">Главная</p>
          </NavLink>
          <NavLink href="/dfa">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9Zm-.75 1.537V6h-1.5V4.843c.48-.15.983-.255 1.5-.306Zm1.5 0a7.459 7.459 0 0 1 3.51 1.289L15.75 6v.75H15l-.75.75V9l1.5-.75L18 9l-.75 1.5-1.5-.75h-1.5l-1.5 1.5v1.5l1.5 1.5h1.5l.75 1.5-1.58 3.163a7.498 7.498 0 0 1-3.735.542l-1.461-1.429L9.75 15 7.5 12.75H5.25v-1.5L9 9V7.5h1.5l.75.75 1.5-.75V4.537Z"></path>
              </svg>
            </div>
            <p className="text-base">Дипломатия</p>
          </NavLink>
          <NavLink href="/laws">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.07 21h11.86c2.053 0 3.07-1.017 3.07-3.031V6.031C21 4.017 19.983 3 17.93 3H6.07C4.027 3 3 4.007 3 6.031v11.938C3 19.993 4.027 21 6.07 21ZM7.977 6.324c.528 0 .928.303 1.173.753.244-.45.655-.753 1.154-.753.83 0 1.427.636 1.427 1.486 0 1.271-1.34 2.455-2.327 3.07-.098.05-.176.108-.244.108-.059 0-.157-.049-.245-.107-.968-.685-2.337-1.8-2.337-3.07 0-.851.587-1.487 1.399-1.487ZM7 14v-1h10v1H7Zm0 3v-1.025h7V17H7Z"></path>
              </svg>
            </div>
            <p className="text-base">Законы и документы</p>
          </NavLink>
          <NavLink href="/organisations">
            <div className="p-1.5 rounded-lg bg-zinc-600/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.778 4.862h4.444c.614 0 1.111.475 1.111 1.062V7.25h2.223V5.924c0-1.76-1.493-3.187-3.334-3.187H9.778c-1.841 0-3.334 1.427-3.334 3.187V7.25h2.223V5.924c0-.587.497-1.062 1.11-1.062Z" stroke="#9EA9B7" stroke-width="0.4"></path>
                <path d="M20 7c1.1 0 2 .9 2 2v3H2V9c0-1.1.9-2 2-2h16Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17c1.105 0 2-.96 2-2.143V14h8v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-5h8v.857c0 1.184.895 2.143 2 2.143Z"></path>
              </svg>
            </div>
            <p className="text-base">Организации</p>
          </NavLink>
          <div className="flex flex-row gap-2 w-full mt-4">
            <Link href="https://t.me/dusiburgo" className="flex justify-center items-center w-full py-2 rounded-lg duration-200 bg-zinc-600/60 hover:cursor-pointer hover:bg-zinc-600/40">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
              </svg>
            </Link>
            <Link href="https://t.me/dusiburgo" className="flex justify-center items-center w-full py-2 rounded-lg duration-200 bg-zinc-600/60 hover:cursor-pointer hover:bg-zinc-600/40">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center w-full h-12">
      <div className="flex flex-row items-center justify-between w-full px-2 lg:px-12">
        <div>
          <Image src="/vercel.svg" width="126" height="126" alt="Logo" className="invert" />
        </div>
        <div className="flex flex-row gap-2">
          <Profile />
          <Lang />
          <Menu />
        </div>
      </div>
    </header>
  );
}
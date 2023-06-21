"use client"

import React, { useState } from "react";
import Image from "next/image";
import NavButton from "@/app/components/header/navbutton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: "1", text: "Главная", href: "/", icon: "house-fill" },
    { id: "2", text: "Страна", href: "/country", icon: "flag-fill" },
    { id: "3", text: "Дипломатия", href: "/foreign", icon: "globe-europe-africa" },
  ];

  const Logo = () => {
    return (
      <div className="w-9 h-9">
        <Image src="/logo.png" width={36} height={36} alt="logo" loading="lazy" />
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full sm:hidden flex flex-col justify-center items-center gap-4 z-20 bg-zinc-800/30">
        <div className="flex flex-col gap-2 w-5/6 p-3 rounded-xl shadow-lg bg-zinc-800 ring-1 ring-inset ring-zinc-700/75">
          <NavButton type="mobile" onClick={handleMenuToggle}><i className="bi bi-x-lg"></i>Закрыть меню</NavButton>
        </div>
        <div className="flex flex-col w-5/6 p-3 rounded-xl shadow-lg bg-zinc-800 ring-1 ring-inset ring-zinc-700/75">
          {links.map((link) => (
            <NavButton key={link.text} href={link.href} onClick={handleMenuToggle} type="mobile">
              <i className={`bi bi-${link.icon}`}></i>{link.text}
            </NavButton>
          ))}
        </div>
        <div className="flex flex-col gap-2 w-5/6 p-3 rounded-xl shadow-lg bg-zinc-800 ring-1 ring-inset ring-zinc-700/75">
          <NavButton href="https://vk.com/duspean_official" target="_blank" type="mobile" ><i className="bi bi-earbuds"></i>Вконтакте</NavButton>
          <NavButton href="https://t.me/dusiburg" target="_blank" type="mobile" ><i className="bi bi-telegram"></i>Telegram</NavButton>
          <NavButton href="https://discord.gg/Vm2swPcgT9" target="_blank" type="mobile" ><i className="bi bi-discord"></i>Discord</NavButton>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 z-10 w-full h-16 backdrop-blur">
        <div className="relative flex justify-between items-center h-full px-8 md:px-14 lg:px-28">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="absolute left-[50%] -translate-x-[50%] flex items-center">
            <div className="hidden sm:flex gap-2">
              {links.map((link) => (
                <NavButton key={link.id} href={link.href} type="primary">
                  {link.text}
                </NavButton>
              ))}
              <NavButton href="https://vk.com/duspean_official" target="_blank" type="primary"><i className="bi bi-earbuds"></i></NavButton>
              <NavButton href="https://t.me/dusiburg" target="_blank" type="primary"><i className="bi bi-telegram"></i></NavButton>
              <NavButton href="https://discord.gg/Vm2swPcgT9" target="_blank" type="primary"><i className="bi bi-discord"></i></NavButton>
            </div>
            <div className="sm:hidden flex gap-2">
              <NavButton onClick={handleMenuToggle}><i className="bi bi-list text-2xl"></i>Меню</NavButton>
            </div>
          </div>
          <div className="flex items-center">
            <NavButton href="/login" type="secondary">
              <i className="bi bi-box-arrow-in-left text-2xl lg:text-lg"></i>
              <div className="hidden lg:flex">Авторизация</div>
            </NavButton>
          </div>
        </div>
      </header>
      <div>
        {isMenuOpen && (
          <MobileMenu/>
        )}
      </div>
    </>
  );
}
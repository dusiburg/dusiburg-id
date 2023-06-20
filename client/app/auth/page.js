"use client"

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { handleLogin } from "@/api/auth";

export default function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginButton = async () => {
    setIsLoading(true);
    await handleLogin(login, password);
  }

  if (isLoading) {
    console.log("Loading");
  }

  return (
    <>
      <Header />
      <Main>
        <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/emojis/key.png" width={64} height={64} alt="key" loading="lazy" />
          <div className="text-3xl">Авторизация</div>
          <div className="text-base">Войдите в свой аккаунт Dusiburg ID или создайте новый</div>
        </div>
        <div className="mt-8">
          <div className="w-full flex flex-col gap-3">
            <Input value={login} placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
            <Input value={password} type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
            <Button value="Войти" onClick={() => handleLoginButton()} />
          </div>
        </div>
      </Main>
    </>
  );
}
"use client"

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/header/header";
import Center from "../components/center/center";
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import { handleLogin } from "@/app/api/auth";

export default function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButton = async () => {
    if (await handleLogin(login, password)) {
      alert("Something is happend...");
    }
  }

  return (
    <>
      <Header />
      <Center>
        <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/emojis/key.png" width={64} height={64} alt="key" loading="lazy" />
          <div className="text-3xl">Авторизация</div>
          <div className="text-base">Войдите в свой аккаунт Dusiburg ID или <a href="/register" className="text-gray-300">создайте новый</a></div>
        </div>
        <div className="mt-8">
          <div className="w-full flex flex-col gap-3">
            <Input value={login} placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
            <Input value={password} type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
            <Button value="Войти" onClick={() => handleLoginButton()} />
          </div>
        </div>
      </Center>
    </>
  );
}
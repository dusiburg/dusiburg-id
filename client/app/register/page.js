"use client"

import React, { useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Header from "@/app/components/header/header";
import Center from "@/app/components/center/center";
import Input from "@/app/components/input/input";
import Button from "@/app/components/button/button";
import { handleRegister } from "@/app/api/auth";

export default function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [step, setStep] = useState(1);

  const handleRegisterButton = async () => {
    if (await handleRegister(login, password, name, surname)) {
      alert("Something is happend...");
    }
  }

  const firstStep = () => {
    return (
      <>
        <Input value={login} placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
        <Input value={password} type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
        <Button value="Далее ->" onClick={() => setStep(2)} />
      </>
    );
  }

  const secondStep = () => {
    return (
      <>
        <Input value={name} placeholder="Имя" onChange={(e) => setName(e.target.value)} />
        <Input value={surname} placeholder="Фамилия" onChange={(e) => setSurname(e.target.value)} />
        <Button value="Регистрация" onClick={() => handleRegisterButton()} />
      </>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return firstStep();
      case 2:
        return secondStep();
      default:
        return null;
    }
  }

  return (
    <>
      <Header />
      <Center>
        <div className="flex flex-col gap-4 items-center text-center">
          <Image src="/emojis/key.png" width={64} height={64} alt="key" loading="lazy" />
          <div className="text-3xl">Регистрация</div>
          <div className="text-base"><a href="/login" className="text-gray-300">Войдите</a> в свой аккаунт Dusiburg ID или создайте новый</div>
        </div>
        <div className="mt-8">
          <div className="w-full flex flex-col gap-3">
            {renderStep()}
          </div>
        </div>
      </Center>
    </>
  );
}
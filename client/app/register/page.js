"use client"

import { useForm } from "react-hook-form";
import Link from "next/link";
import { handleLogin, hasCookie } from "@/app/api/actions";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

export default function Register() {
  const router = useRouter();

  async function isLogged() {
    if (await hasCookie("token")) {
      router.push("/my");
    }
  }
  
  isLogged();

  const { handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    if (await handleLogin(data)) {
      alert("Ошибка");
    } else {
      router.push("/my");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center px-5 md:px-10 py-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-center">Авторизация</h3>
          <div className="flex flex-col gap-2 w-80 sm:w-96 rounded-xl">
            <p className="mb-2.5 text-base text-center text-gray-100">Зарегистрируйтесь в Dusiburg ID,<br />чтобы использовать все функции!</p>
            <div className="flex flex-row gap-2 w-full mb-1.5 p-0.5 text-base rounded-lg select-none bg-zinc-800/60">
              <Link href="/login" className="w-1/2 px-2.5 py-0.5 text-center text-base rounded-lg duration-200 hover:cursor-pointer hover:bg-zinc-800">Вход</Link>
              <div className="w-1/2 px-2.5 py-0.5 text-center text-base rounded-lg bg-white text-black">Регистрация</div>
            </div>
            <Input placeholder="Логин" onChange={(event) => setValue("login", event.target.value)} />
            <Input type="password" placeholder="Пароль" onChange={(event) => setValue("password", event.target.value)} />
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <Button onClick={handleSubmit(onSubmit)} type="primary">Зарегистрироваться</Button>
          </div>
        </div>
      </div>
    </>
  );
}
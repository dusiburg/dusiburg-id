"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { handleLogin, hasCookie } from "@/app/api/actions";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

export default function Login() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const isLogged = async () => {
      if (await hasCookie("token")) {
        router.replace("/me");
      }
    };

    isLogged();
  }, []);

  const { handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    setIsError(false);
    setIsLoading(true);
    if (await handleLogin(data)) {
      setIsError(true);
      setIsLoading(false);
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
            <p className="mb-2.5 text-base text-center text-gray-100">Войдите в Dusiburg ID,<br />чтобы получить доступ к профилю!</p>
            <div className="flex flex-row gap-2 w-full mb-1.5 p-0.5 text-base rounded-lg select-none bg-zinc-800/60">
              <div className="w-1/2 px-2.5 py-0.5 text-center text-base rounded-lg bg-white text-black">Вход</div>
              <Link href="/register" className="w-1/2 px-2.5 py-0.5 text-center text-base rounded-lg duration-200 hover:cursor-pointer hover:bg-zinc-800">Регистрация</Link>
            </div>
            <Input placeholder="Логин" onChange={(event) => setValue("login", event.target.value)} />
            <Input type="password" placeholder="Пароль" onChange={(event) => setValue("password", event.target.value)} />
            {isError ? <p className="text-base text-red-400">Неправильный логин или пароль</p> : ""}
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <Button onClick={handleSubmit(onSubmit)} type="primary">Войти {isLoading ? <svg aria-hidden="true" className="w-4 h-4 ml-2 text-white animate-spin fill-sky-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg> : ""}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
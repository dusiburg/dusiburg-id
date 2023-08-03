"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { handleLogout, hasCookie } from "@/app/api/actions";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header";
import Button from "@/app/components/button";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} className="flex flex-row justify-between px-4 py-2 duration-200 hover:cursor-pointer hover:bg-zinc-700/40">
      {children}
    </Link>
  );
}

const Arrow = () => {
  return (
    <div className="flex items-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.929 14a.885.885 0 0 0 .643-.266l5.09-4.985c.225-.227.331-.46.338-.746 0-.286-.106-.525-.338-.745l-5.09-4.992A.896.896 0 0 0 9.93 2 .923.923 0 0 0 9 2.925c0 .253.106.493.292.679l4.512 4.4-4.512 4.392a.961.961 0 0 0-.292.679c0 .512.411.925.929.925Z"></path>
      </svg>
    </div>
  );
}

export default function Profile() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLogged = async () => {
      if (await hasCookie("token")) {
        return;
      } else {
        router.replace("/login");
      }
    };

    isLogged();
  }, []);

  async function handleSubmit() {
    setIsLoading(true);
    await handleLogout();
    router.push("/login");
  }

  return (
    <>
      <Header />
      <div className="flex justify-center px-5 md:px-10 py-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Профиль</h3>
          <div className="flex flex-col gap-2 w-80 sm:w-96 mt-2 py-2 rounded-xl duration-200 bg-zinc-800">
            <NavLink href="/my/settings">
              <div className="flex flex-row items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.145 22h1.72c.564 0 .986-.338 1.109-.893l.47-1.983c.32-.113.62-.235.902-.366l1.739 1.071c.46.291 1.015.244 1.4-.141l1.213-1.212c.385-.386.441-.96.13-1.429l-1.061-1.72c.131-.282.254-.583.348-.874l2.002-.47c.554-.122.883-.545.883-1.109v-1.692c0-.554-.329-.987-.883-1.109l-1.983-.479c-.104-.329-.236-.62-.348-.874l1.062-1.758c.3-.479.263-1.015-.141-1.41L18.485 4.34c-.395-.357-.893-.423-1.372-.16l-1.767 1.09a8.81 8.81 0 0 0-.893-.366l-.48-2.011C13.852 2.338 13.43 2 12.866 2h-1.72c-.574 0-.996.338-1.119.893l-.47 2.002c-.32.103-.63.225-.911.366l-1.758-1.08c-.48-.264-.968-.207-1.372.16L4.293 5.552c-.404.394-.441.93-.14 1.41L5.213 8.72c-.113.254-.235.545-.347.874l-1.984.48c-.554.121-.883.554-.883 1.108v1.692c0 .564.329.987.883 1.11l2.002.469c.094.291.216.592.348.874l-1.062 1.72c-.31.47-.254 1.043.141 1.429l1.203 1.212c.385.385.94.432 1.41.141l1.73-1.072c.281.132.582.254.901.367l.47 1.983c.123.555.545.893 1.119.893ZM12 15.29c-1.805 0-3.28-1.485-3.28-3.3A3.287 3.287 0 0 1 12 8.72c1.814 0 3.29 1.475 3.29 3.27a3.301 3.301 0 0 1-3.29 3.3Z"></path>
                </svg>
                <h4 className="text-lg">Настройки</h4>
              </div>
              <Arrow />
            </NavLink>
            <NavLink href="/my/notifications">
              <div className="flex flex-row items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.72 18H5.28C4.483 18 4 17.569 4 16.936c0-.776.672-1.483 1.331-2.177.089-.093.177-.185.263-.278.568-.607.712-1.856.78-2.868.06-3.378.924-5.71 3.18-6.554C9.876 3.915 10.749 3 12.004 3c1.247 0 2.129.915 2.442 2.059 2.264.844 3.12 3.176 3.188 6.554.06 1.012.212 2.26.772 2.868l.235.247c.673.703 1.359 1.42 1.359 2.208 0 .633-.475 1.064-1.28 1.064ZM12 21c-1.672 0-2.882-.91-3-2h6c-.128 1.09-1.338 2-3 2Z"></path>
                </svg>
                <h4 className="text-lg">Уведомления</h4>
              </div>
              <Arrow />
            </NavLink>
            <NavLink href="/my/documents">
              <div className="flex flex-row items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.07 21h11.86c2.053 0 3.07-1.017 3.07-3.031V6.031C21 4.017 19.983 3 17.93 3H6.07C4.027 3 3 4.007 3 6.031v11.938C3 19.993 4.027 21 6.07 21ZM7.977 6.324c.528 0 .928.303 1.173.753.244-.45.655-.753 1.154-.753.83 0 1.427.636 1.427 1.486 0 1.271-1.34 2.455-2.327 3.07-.098.05-.176.108-.244.108-.059 0-.157-.049-.245-.107-.968-.685-2.337-1.8-2.337-3.07 0-.851.587-1.487 1.399-1.487ZM7 14v-1h10v1H7Zm0 3v-1.025h7V17H7Z"></path>
                </svg>
                <h4 className="text-lg">Документы</h4>
              </div>
              <Arrow />
            </NavLink>
            <NavLink href="/my/organisations">
              <div className="flex flex-row items-center gap-2.5">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/>
                </svg>
                <h4 className="text-lg">Организации</h4>
              </div>
              <Arrow />
            </NavLink>
          </div>
          <div className="mt-2">
            <Button onClick={() => handleSubmit()} type="danger">Выйти из аккаунта {isLoading ? <svg aria-hidden="true" className="w-4 h-4 ml-2 text-white animate-spin fill-zinc-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg> : ""}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
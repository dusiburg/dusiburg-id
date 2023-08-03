"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/app/components/container";
import Header from "@/app/components/header";
import SideBar from "@/app/my/sidebar";
import Input from "@/app/components/input";
import Select from "@/app/components/select";
import { getCountries } from "@/app/api/getCountries";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} className="flex flex-row justify-between px-5 py-2 duration-200 hover:cursor-pointer hover:bg-zinc-700/40">
      {children}
    </Link>
  );
};

const Arrow = () => {
  return (
    <div className="flex items-center ml-5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#8a8f94" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.929 14a.885.885 0 0 0 .643-.266l5.09-4.985c.225-.227.331-.46.338-.746 0-.286-.106-.525-.338-.745l-5.09-4.992A.896.896 0 0 0 9.93 2 .923.923 0 0 0 9 2.925c0 .253.106.493.292.679l4.512 4.4-4.512 4.392a.961.961 0 0 0-.292.679c0 .512.411.925.929.925Z"></path>
      </svg>
    </div>
  );
};

export default function Settings() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const data = await getCountries();

        const modifiedCountries = data.map((country, index) => ({
          key: index + 1,
          name: country.name.charAt(0).toUpperCase() + country.name.slice(1)
        }));

        modifiedCountries.sort((a, b) => a.name.localeCompare(b.name)); // Сортировка по имени

        setCountries(modifiedCountries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountriesData();
  }, []);

  console.log(countries);

  const genders = [
    { key: "male", name: "Мужской" },
    { key: "female", name: "Женский" }
  ];  

  const handleSelect = (option) => {
    console.log("Selected option:", option.key);
  };

  const handleInputChange = (value, fieldName) => {
    console.log(`Inputed value of ${fieldName}:`, value);
  };

  return (
    <>
      <Header />
      <SideBar>
        <div className="flex flex-col gap-4 w-full">
          <Container>
            <div className="flex flex-col gap-1 mx-5">
              <h4 className="text-xl">Личные данные</h4>
              <h5 className="text-xs text-gray-200">Ваша персональная информация в Dusiburg ID</h5>
            </div>
            <div className="flex flex-col gap-4 md:gap-2 mx-5 my-2">
              <div className="flex flex-col md:flex-row gap-2">
                <Input value="Чебоксар" placeholder="Имя" onChange={(value) => handleInputChange(value, "name")} />
                <Input value="Чебоксарович" placeholder="Фамилия" onChange={(value) => handleInputChange(value, "surname")} />
              </div>
              <div className="flex flex-col md:flex-row gap-2 w-full">
                <Select options={countries} selected="34" onSelect={handleSelect} placeholder="Страна Проживания" />
                <Select options={genders} onSelect={handleSelect} placeholder="Пол" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <NavLink href="/my/citizenship">
                <div className="flex flex-row items-center gap-2.5">
                  <h4 className="text-lg">Гражданство</h4>
                </div>
                <Arrow />
              </NavLink>
            </div>
          </Container>
        </div>
      </SideBar>
    </>
  );
}
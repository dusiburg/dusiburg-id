"use server"

import { cookies } from "next/headers";
import { getErrorCode } from "@/app/api/getErrorCode";

export const handleLogin = async (login, password) => {
	try {
		const response = await fetch("http://dusiburg.ru:3301/api/login/", {
			method: "POST",
			body: JSON.stringify({ login, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			const error = await getErrorCode(response.status);
			return error;
		} else {
			const data = await response.json();
			const token = data.token;
console.log(token);
			cookies().set("token", token, { secure: true });
			window.location.replace("/me");
		}
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
};

export const handleRegister = async (login, password, name, surname) => {
	try {
		const response = await fetch("http://dusiburg.ru:3301/api/register/", {
			method: "POST",
			body: JSON.stringify({ login, password, name, surname }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			const error = await getErrorCode(response.status);
			return error;
		} else {
      window.location.replace("/login");
    }
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
};
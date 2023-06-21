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
			alert("Ошибка: " + error);
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

		if (response.ok) {
			const error = await getErrorCode(response.status);
			alert("Ошибка: " + error);
		}
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
};
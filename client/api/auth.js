export const handleLogin = async (login, password) => {
	try {
		const response = await fetch("http://dusiburg.ru:3301/api/login/", {
			method: "POST",
			body: JSON.stringify({ login, password }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			alert("Успешная авторизация");
		} else {
			alert("Ошибка: " + response.status);
		}
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
};
export const getErrorCode = async (code) => {
  try {
		const response = await fetch(`http://dusiburg.ru:3301/api/errors/${code}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const data = await response.json();
		return data.message;
	} catch (error) {
		console.error("Ошибка при выполнении запроса", error);
	}
}
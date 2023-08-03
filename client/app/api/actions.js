"use server"

import { cookies } from "next/headers";

const api = "http://dusiburg.ru:3300/api";

export async function hasCookie(name) {
  if (cookies().get(name)) {
    return true;
  } else {
    return false;
  }
}

export async function getUser() {
  const token = cookies().get("token").value;

  const response = await fetch(`${api}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    return (await response.json()).error;
  }
}

export async function handleLogin(data) {
  const response = await fetch(`${api}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const { token } = await response.json();
    cookies().set({name: "token", value: token, path: "/"})
    return null;
  } else {
    return (await response.json()).error;
  }
}

export async function handleLogout() {
  cookies().set({name: "token", value: "", path: "/"});
  return null;
}
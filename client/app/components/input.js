"use client"

import { useState } from "react";

export default function Input({ value, placeholder, onChange, type = "text" }) {
  const handleChange = (event) => {
    if (onChange) onChange(event);
  }

  return (
    <input type={type} className="block w-full px-4 py-2.5 rounded-xl focus:outline-none placeholder-text-neutral-600 border-2 border-zinc-700 bg-zinc-800" value={value} onChange={handleChange} placeholder={placeholder} autoComplete="off" />
  );
};
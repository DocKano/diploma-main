"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const LoginTeacherPage = () => {
  const [isvalid, setIsValid] = useState(true);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("login");
    const password = data.get("password");

    fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.access);
        localStorage.setItem('refresh', data.refresh);
        window.location.href = "/teacher";
      }
      else {
        setIsValid(false);
      }
    });
  }
  
  return (
    <div className="w-1/6 border rounded-lg p-4">
      <form onSubmit={handleSubmit} onChange={() => setIsValid(true)} className="flex flex-col gap-y-3">
        <h1 className="text-center text-lg">Вход в кабинет преподавателя</h1>
        <Input placeholder="Логин" name="login" isInvalid={!isvalid} type="text" />
        <Input placeholder="Пароль" name="password" isInvalid={!isvalid} type="password" />
        <Button type="submit" color="primary">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginTeacherPage;

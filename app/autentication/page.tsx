"use client";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autentication() {
  const [mood, setMood] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <h1
        className={`
        text-xl font-bold mb-5
      `}
      >
        {mood === "login"
          ? "Entre com a sua Conta"
          : "Cadastre-se na plataforma"}
      </h1>
      <AuthInput
        label="Email"
        type="email"
        value={email}
        changeValue={setEmail}
        required
      />
      <AuthInput
        label="Senha"
        type="password"
        value={senha}
        changeValue={setSenha}
        required
      />
    </div>
  );
}

"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";
import AuthInput from "../components/auth/AuthInput";
import Image from "next/image";
import { warningIcon } from "../components/icons";

const fetcher = (url: any) => fetch(url).then((res) => res.blob());

export default function Autentication() {
  const [mood, setMood] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [shouldFetchImage, setShouldFetchImage] = useState(false); // Initialize with false
  const [fatalError, setFatalError] = useState(null);

  function showFatalError(msg: any, seconds = 5) {
    setFatalError(msg);
    setTimeout(() => setFatalError(null), seconds * 1000);
  }

  const url = "https://source.unsplash.com/random";
  const { data, error } = useSWR(shouldFetchImage ? url : null, fetcher, {
    revalidateOnMount: false,
  });

  useEffect(() => {
    // Enable fetching the image when the component mounts (user accesses the page)
    setShouldFetchImage(true);
  }, []);

  const submit = () => {
    if (mood === "login") {
      console.log("login");
      showFatalError("Ocorreu um erro no login!");
    } else {
      console.log("cadastrar");
      showFatalError("Ocorreu um erro no cadastro!");
    }
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const dataUrl = URL.createObjectURL(data);

  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className={`hidden md:block w-1/2 lg:w-2/3`}>
        {data && (
          <Image
            className={`w-full max-h-screen `}
            src={dataUrl}
            alt={"test"}
            width={100}
            height={25}
          />
        )}
      </div>
      <div className={`m-10 md:w-1/2 lg:w-1/3 w-full`}>
        <h1
          className={`
            text-2xl font-bold mb-5
          `}
        >
          {mood === "login"
            ? "Entre com a sua Conta"
            : "Cadastre-se na plataforma"}
        </h1>
        {fatalError ? (
          <div
            className={`
          bg-red-400 text-white py-3 px-5 my-2 flex
          border-2 border-red-700 rounded-lg items-center
        `}
          >
            {warningIcon}
            <span className="ml-4">{fatalError}</span>
          </div>
        ) : (
          false
        )}

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
        <button
          onClick={submit}
          className={`
            w-full bg-purple-600 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
          `}
        >
          {mood === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submit}
          className={`
            w-full bg-red-600 hover:bg-red-400
            text-white rounded-lg px-4 py-3
          `}
        >
          Entrar com o google
        </button>
        {mood === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMood("register")}
              className={`
              text-purple-500 hover:text-indigo-900 font-semibold
              cursor-pointer 
            `}
            >
              &nbsp; Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMood("login")}
              className={`
          text-purple-500 hover:text-indigo-900 font-semibold
          cursor-pointer 
        `}
            >
              &nbsp; Entre com suas credenciais.
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

"use client";

import InputOne from "@/components/Input";
import "animate.css";
import { useCallback, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "@/components/ui/FooterInitial";

const Auth = () => {
  const [variant, setVariant] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
    setClicked(clicked ? false : true)
  }, []);

  const login = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <>
    <div className="h-screen">
      <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/spiderverveback.jpg')]">
        <div className="bg-black w-full h-full lg:bg-opacity-60">
          <nav className="px-12 py-5 ">
            <Image
              src="/images/logobig.png"
              width={240}
              height={130}
              alt="Logo"
              className={`animate__animated animate__fadeInDown animate__slower
              ${variant === 'login' ? "animate__fadeInDown animate__slower" : "animate__fadeInUp animate__slower"} `}
            />
          </nav>
          <div className="flex justify-around">
            <div className="px-16 py-16 mt-10">
            <h1 className={`animate__animated text-white  text-8xl font-bold mb-5 tracking-tight capitalize drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${variant === 'login' ? "animate__fadeInDown animate__slower" : "animate__fadeInUp animate__slower"}`}>
              {variant === "login" ? "Entre já e mostre" : "Registre-se agora"}
              </h1>
              <h1 className={` animate__animated
                 text-white
                  text-8xl
                   font-bold
                    mb-5
                     tracking-tight
                      capitalize
                       drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                       ${variant === 'login' ? "animate__fadeInDown animate__slower" : "animate__fadeInUp animate__slower"} `}>
                        {variant === "login" ? "as suas novidades!" : "e de sua opinião!"}
              </h1>
              <h1 className={`animate__animated
               
                 text-2xl
                  mt-8
                   font-semibold
                    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                    ${variant === 'login' ? "animate__fadeInDown animate__slower" : "animate__fadeInUp animate__slower"} `}>
                {" "}
                <span className="text-orange-400 ">
                  {" "}
                  Acompanhe os filmes que você assistiu.{" "}
                </span>
                <br />
                <span className="animate__animated
                 animate__fadeInDown
                  text-green-600">
                  {" "}
                  Salve aqueles que você deseja ver.{" "}
                </span>{" "}
                <br/>
                <span className="animate__animated
                 animate__fadeInDown
                  text-blue-400">
                  {" "}
                  Diga a seus amigos o que é bom.{" "}
                </span>{" "}
              </h1>
            </div>
             <div className={`animate__animated bg-black bg-opacity-70 px-16 py-16
              self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full
              ${variant === 'login' ? "animate__fadeInDown" : "animate__fadeInUp"}`}>
              <h2 className="text-white text-4xl mb-8 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {variant === "login" ? "Login" : "Registro"}
              </h2>

              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <InputOne
                    id="name"
                    type="text"
                    label="Username"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                  />
                )}
                <InputOne
                  id="email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <InputOne
                  type="password"
                  id="password"
                  label="Senha"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 py-3 text-white rounded-md w-full mt-10 hover:bg-orange-700 transition">
                {variant === "login" ? "Login" : "Registrar"}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FcGoogle size={32} />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                  <FaGithub size={32} />
                </div>
              </div>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "Primeira vez ao site?"
                  : "Já tem uma conta?"}
                <span
                  onClick={toggleVariant}
                  className="text-orange-400 ml-1 hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Crie uma conta!" : "Logue!"}
                </span>
              </p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
          </div>
    </>
  );
};

export default Auth;

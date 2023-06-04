"use client";

import "animate.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BiChevronsDown } from "react-icons/bi";
import Header from "@/components/ui/InicialHeader";
import { Button } from "@/components/ui/button"; 

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useState(true);

  setInterval(() => {
    if (state === true) {
      setState(false);
    } else if (state === false) {
      setState(true);
    }
  }, 4000);

  return (
    <>
      <div className="h-screen">
        <div className="relative h-full bg-[url('/images/morales.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full h-full lg:bg-opacity-60">
            <Header/>
            <div
              className="flex
           justify-around"
            >
              <div className="px-16 py-16 mt-10 flex flex-col items-center">
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-white text-4xl
                 uppercase font-bold"
                >
                  A maior rede social para
                </h1>
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-white
                  text-9xl
                   font-bold

                     tracking-tight
                     uppercase
                       drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
                >
                  Review e Notas
                </h1>
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-white text-4xl
                 uppercase font-bold"
                >
                  De Filmes e Series!
                </h1>
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-2xl
                  mt-8
                  text-orange-400
                   font-semibold
                    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                  Acompanhe os filmes que você assistiu.
                </h1>{" "}
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-2xl
                  text-green-400
                   font-semibold
                    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                  {" "}
                  Salve aqueles que você deseja ver.{" "}
                </h1>{" "}
                <h1
                  className="animate__animated
               animate__fadeInDown
                animate__slower
                 text-2xl
                  text-blue-400
                   font-semibold
                    drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                >
                  {" "}
                  Diga a seus amigos o que é bom.{" "}
                </h1>{" "}
                <Button className="bg-blue-400
                 text-white
                  rounded-md
                   w-40
                    mt-10
                     hover:bg-white
                      hover:text-black
                       transition
                        drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                          Comece Aqui
                          </Button>
              </div>
              
            </div>
            <div className="px-8 py-8 object-bottom flex justify-center flex-col items-center mt-24 ">
              <div  className={`box ${
              state
                ? "animate__animated animate__bounce animate__slower flex justify-center flex-col items-center"
                : "animate__animated animate__bounceIn animate__slower flex justify-center flex-col items-center"
            }`}>
              <p className="text-white animate__animated animate__slower animate__fadeInDown">
                Role pra baixo!
              </p>
              <BiChevronsDown
                size={62}
                className="animate__animated animate__fadeInDown animate__slower text-white"
              />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full flex flex-col items-center">
        </div>
      </div>
      
    </>
  );
}

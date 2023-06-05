"use client";

import "animate.css";
import { useState } from "react";
import Image from "next/image";
import { BiChevronsDown } from "react-icons/bi";
import FooterInicial from "@/components/ui/FooterInitial";

export default function Home() {
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
          <Image
              src="/images/logobig.png"
              width={240}
              height={130}
              alt="Logo"
              className="animate__animated animate__fadeInDown animate__sloweranimate__fadeInDown animate__slower"/>
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
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center
                 sm:space-y-0 sm:space-x-4 mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                 animate__animated animate__fadeInDown animate__slower">
            <a href="auth" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Comece Aqui
                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base bg-white
             font-medium text-center text-black rounded-lg border border-gray-300 hover:bg-gray-100
              focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700
               dark:focus:ring-gray-800">
                Veja mais
            </a>  
        </div>
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
          <h1 className="text-5xl mt-10 animate__animated animate__fadeInDown
          animate__slower font-semibold capitalize">Os maiores sucessos cinematográficos!</h1>
          
<div className="grid md:grid-cols-7 gap-4 mt-14 animate__animated animate__fadeInDown animate__slower">
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/joker.jpg" alt="Poster do Joker" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/lamb.jpg" alt="Poster de Lamb" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/wood.jpg" alt="Poster de Wood" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/som.jpg" alt="Poster de The Son" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/star.jpeg" alt="Poster de Star Wars" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/spider.jpg" alt="Poster de Spider-man" width={270} height={270}/>
    </div>
    <div>
        <Image className="h-auto max-w-full rounded-lg" src="/images/midsommar.jpg" alt="Poster de Midssomar" width={270} height={270}/>
    </div>
</div>
            <FooterInicial/>
        </div>
      </div>
      
    </>
  );
}

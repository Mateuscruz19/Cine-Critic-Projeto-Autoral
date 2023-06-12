import ButtonBlue from "./ButtonBlue";
import ButtonWhite from "./ButtonWhite";

export default function Title() {
  return (
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
      <div
        className="flex flex-col space-y-4 sm:flex-row sm:justify-center
     sm:space-y-0 sm:space-x-4 mt-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
     animate__animated animate__fadeInDown animate__slower"
      >
       <ButtonBlue/>
        <ButtonWhite/>
      </div>
    </div>
  );
}
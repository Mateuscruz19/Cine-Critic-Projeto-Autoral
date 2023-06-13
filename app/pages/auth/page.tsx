"use client";

//React
import "animate.css";
import { useState,useCallback } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/app/services/auth-service/signIn";
import { signUp } from "@/app/services/auth-service/signUp";

//Components
import Footer from "@/components/ui/FooterInitial";
import Nav from "@/components/auth/Nav";
import Title from "@/components/auth/Title";
import Form from "@/components/auth/Form";
import { toast } from 'react-toastify';

const Auth = () => {
  const router = useRouter()

  const [variant, setVariant] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [clicked, setClicked] = useState(false);

  const login = useCallback(async () => {
    try {
      await signIn(email, password);
      toast('Login realizado com sucesso!')
      router.push("/pages/dashboard/home");
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        setVariant('login');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }, []);

  function Tes() {
    console.log(email)
    console.log(name)
    console.log(password)
    console.log(confirmPassword)
  }

  return (
    <>
      <div className="h-screen">
        <div className="relative h-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/spiderverveback.jpg')]">
          <div className="bg-black w-full h-full lg:bg-opacity-60">
            <Nav variant={variant} />
            <div className="flex justify-around">
              <Title variant={variant} />
              <Form
                variant={variant}
                setVariant={setVariant}
                clicked={clicked}
                setClicked={setClicked}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                login={login}
                register={register}
                Tes={Tes}
              />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

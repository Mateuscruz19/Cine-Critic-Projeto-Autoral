"use client";

//React
import "animate.css";
import { useState } from "react";

//Components
import Footer from "@/components/ui/FooterInitial";
import Nav from "@/components/auth/Nav";
import Title from "@/components/auth/Title";
import Form from "@/components/auth/Form";

const Auth = () => {
  const [variant, setVariant] = useState("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);

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

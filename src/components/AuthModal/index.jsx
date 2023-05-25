import React, { useState } from "react";
import { useUI } from "../../Context/UIContext/UIContext";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthModal = () => {
  const { setIsLoginUserModalOpen } = useUI();

  const [isLoging, setIsLoging] = useState(false);

  return (
    <div
      className="h-screen w-screen fixed top-0 flex items-center justify-center backdrop-blur-sm z-50"
      onClick={() => setIsLoginUserModalOpen(false)}
    >
      <div
        className="w-4/5 md:w-1/2 py-12 px-4  bg-[url(https://media.tenor.com/XgFebHxbC8IAAAAC/despicable-me-minions.gif)] bg-cover rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoging ? (
          <LoginForm isLoging={isLoging} setIsLoging={setIsLoging} />
        ) : (
          <RegisterForm isLoging={isLoging} setIsLoging={setIsLoging} />
        )}
      </div>
    </div>
  );
};

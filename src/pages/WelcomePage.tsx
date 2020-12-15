import React from "react";
import { Intro } from "../components/Intro/Intro";
import { LoginForm } from "../components/LoginForm/LoginForm";

export const WelcomePage: React.FC = () => {
  return (
    <div className="intro">
      <Intro />
      <LoginForm />
    </div>
  );
};

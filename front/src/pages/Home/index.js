import React from "react";

import HomeImg from "../../assets/home.svg";
import FormCadastro from "../../components/FormCadastro";
import FormLogin from "../../components/FormLogin";

function Home() {
  return (
    <div className="container center">
      <FormCadastro></FormCadastro>
      <FormLogin />
      <img src={HomeImg} alt="home"></img>
    </div>
  );
}

export default Home;

import React from "react";

import HomeImg from "../../assets/home.svg";
import FormLogin from "../../components/FormLogin";

function Home() {
  return (
    <div className="container center">
      <FormLogin></FormLogin>
      <img src={HomeImg} alt="home"></img>
    </div>
  );
}

export default Home;

import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import Header from ".//Header";
import Footer from "./Footer";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Limg from "../public/imagens/login/img.png";

export default function Login() {

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const autMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
    let senha = document.getElementById("password");

    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.setAttribute('type', 'password');
    }
  };

  return (
    <div className="logando">
      <Header />
      <div className="pag-login">
        <div className="elem-login">
          <div className="imagem-login">
            <img src={Limg} alt="imagem-login" />
          </div>
          <div className="form-login">
            <h2 className="texto-principal">LOGIN</h2>
            <form action="#aqui usa o backend" method="post">
              <div className="formulario-grupo">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="E-mail" required autoComplete="off" />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="password"></label>
                <input
                  type={mostrarSenha ? "text" : "password"} // Usando o estado mostrarSenha para alternar entre "text" e "password"
                  id="password"
                  minLength={8}
                  maxLength={12}
                  placeholder="Senha"
                  required
                />
                <button type="button" className="icone-eye" onClick={autMostrarSenha}>
                  {mostrarSenha ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <div className="formulario-links">
                <Link to="/redefinir-senha"> Esqueceu a senha? </Link>
                <div className="formulario-grupo">
                  <center>
                    <input type="submit" defaultValue="Entrar" />
                  </center>
                </div>
                <span className="texto-criar-conta">Ainda não tem conta?</span>
                <Link to="/"> Cadastre-se </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import Himg1 from "../public/imagens/menu/logo-sala.svg";
import Himg2 from "../public/imagens/menu/zap.svg";
import Himg3 from "../public/imagens/menu/youtube.svg";
import Himg4 from "../public/imagens/menu/face.svg";
import Himg5 from "../public/imagens/menu/insta.svg";
import Himg6 from "../public/imagens/menu/tiktok.svg";

export default () => (
  <div className="tela-cab">
    <div className="retangulo">
      <div className="parte1" />
      <div className="parte2" />
      <div className="parte1" />
    </div>
    <div className="Header">
      <img className="logo-cab" src={Himg1} alt="Logo" />
      <div className="icones-cab">
        <a
          href="https://api.whatsapp.com/send/?phone=558386795396&text&type=phone_number&app_absent=0" target="_blank" ><img className="icone-cab" src={Himg2}alt="Ícone 1"/>
        </a>
        <a href="//www.facebook.com/saladamidiaoficial" target="_blank"><img className="icone-cab" src={Himg4}alt="Ícone 2" /></a>
        <a href="https://www.instagram.com/saladamidiaoficial/?igsh=ZTRneTAzd2RoZHF1n" target="_blank">
<img className="icone-cab" src={Himg5} alt="Ícone 3" />
        </a>

<a href="https://www.tiktok.com/@saladamidiamusic?_t=8IZjclsasaM&_r=1" target="_blank"> <img className="icone-cab" src={Himg6}alt="Ícone 4" />
        </a>
        <a href="https://www.youtube.com/@MhoysesDesign" target="_blank">
          <img className="icone-cab" src={Himg3} alt="Ícone 5" />
        </a>
      </div>
      <div className="linha-cab" />
      <div className="botoes-cab">
        <Link to="/inicio" className="botao-cab"> INÍCIO </Link>
        <Link to="" className="botao-cab"> SOBRE </Link>
        <Link to="/catalogo" className="botao-cab"> CATÁLOGO </Link>
        <Link to="/login" className="botao-cab botao-login"> LOGIN </Link>
      </div>
    </div>
  </div>
);

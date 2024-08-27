import React from "react";
import { Carousel } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import { carouselImages, times, trabalhos, renderizadorCards } from "./Arrays";

export default function Home() {
  return (
    <div className="pagina-inicial">
      <Header />
      <div className="telaH">
        <Carousel autoplay>
          {carouselImages.map((image) => (
            <div key={image.id}>
              <img src={image.img} className="img-carrosel" alt="logo" />
            </div>
          ))}
        </Carousel>

        <center>
          <h1 className="home-text"> PRINCIPAIS PRODUTOS </h1>
        </center>
        <div className="trabalhos-img">
          {trabalhos.map((trabalho) => (
            <div className="item" key={trabalho.id} id={trabalho.id}>
              <img src={trabalho.img} alt={trabalho.description} />
              <p className="text-descritivo">{trabalho.description}</p>
            </div>
          ))}
        </div>

        <center>
          <h1 className="home-text"> NOVIDADES </h1>
        </center>
        {renderizadorCards()}

        <center>
          <h1 className="time-text"> QUEM JÁ FEZ OU FAZ </h1>
          <h2 className="time1-text"> PARTE DO TIME </h2>
          {times.map((time) => (
            <div key={time.id} id={time.id}>
              <img src={time.img} className="times-img" />
            </div>
          ))}
        </center>
      </div>
      <Footer />
    </div>
  );
}

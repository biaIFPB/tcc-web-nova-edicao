import { Link } from "react-router-dom";

export default function Reset() {

  return(

    <div className="Reset">
      <div className="pag-login">
        <div className="elem-login">
          <div className="form-redefinir">
            <h2 className="texto-principal">REDEFINIR SENHA</h2>
            <p className="texto2">
              Informe um email e enviaremos um link <br /> para recuperar sua senha.
            </p>
            <form action="login" method="post">
              <div className="formulario-email">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="E-mail" required autoComplete="off" />
              </div>
              <div className="formulario-grupo">
                <center> <input type="submit" defaultValue="Enviar Link" /> </center>
              </div>
            </form>
              <Link to="/login" className="voltar-link"> Voltar ao Login </Link>
          </div>
        </div>
        <div className="desbo-rodape" />
      </div>
    </div>

  );
}
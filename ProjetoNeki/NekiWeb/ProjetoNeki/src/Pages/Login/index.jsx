import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  ContainerLogin,
  Formulario,
  Titulo,
  BotaoLogar,
  TextoRegistro,
  GravarSenha,
} from "./style.jsx";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../service/api.js";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ContextLoginUser } from "../../context/ContextLogin/index.jsx";


export const Login = () => {
  const [section, setSection] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const {usuarioCON, setUsuarioCON} = useContext(ContextLoginUser);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  let dados = {
    login: email,
    password: senha,
  }

  useEffect(() => {
    ReceberLogin();
  }, []);

  function ReceberLogin() {
    api
      .get(`/api/users`)
      .then((result) => {
        setLogin(result.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar " + JSON.stringify(error));
      });
  }

  function VerificaLogin() {

    login.map((login) => {
      if (login.login === dados.login && login.password === dados.password) {
       setUsuarioCON(login.id)
       console.log("ID" + login.id)
       console.log("Usuario" + usuarioCON)
       if (check){
        localStorage.setItem("senha", login.password);
       }
       return navigate("/home");
      }
      return setStatus({
        type: "error",
        mensagem: "Error: Credenciais inválidas!",
      });
    });
  }



  return (
    <>
      <Container>
        <Titulo>
          <h4 style={{ fontWeight: "bold", color: "#FFFFFF" }}>Faça Login</h4>
        </Titulo>
        <ContainerLogin>
        {status.type === "error" ? (
          <p
            style={{
              color: "#ff0000",
              position: "relative",
              top: "1vh",
            }}
          >
            {status.mensagem}
          </p>
        ) : (
          ""
        )}
          <Formulario>
            <div>
              <h8 style={{ fontWeight: "bold", color: "#858597" }}>
                Seu Username
              </h8>
              <input
                className="input"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.2",
                  border: "none",
                  display: "block",
                  width: "18vw",
                  height: "52px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#3E3E55",
                  color: "#FFFFFF",
                }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {section === 0 && (
              <div style={{ marginTop: "2vh" }}>
                <h8 style={{ fontWeight: "bold", color: "#858597" }}>
                  Sua Senha
                </h8>
                <div
                  style={{
                    display: "flex",
                    flewDirection: "row",
                    alignItems: "center",
                    gap: "0.5vw",
                    left: "2vw",
                    width: "120%",
                  }}
                >
                  <input
                    className="input"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.2",
                      border: "none",
                      display: "flex",
                      width: "15.5vw",
                      top: "2vh",
                      height: "52px",
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#3E3E55",
                      color: "#FFFFFF",
                    }}
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <a
                    onClick={() => {
                      setSection(1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                      style={{ color: "#FFFFFF" }}
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
            {section === 1 && (
              <div style={{ marginTop: "2vh" }}>
                <h8 style={{ fontWeight: "bold", color: "#858597" }}>
                  Sua Senha
                </h8>
                <div
                  style={{
                    display: "flex",
                    flewDirection: "row",
                    alignItems: "center",
                    gap: "0.5vw",
                    left: "2vw",
                    width: "120%",
                  }}
                >
                  <input
                    className="input"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.2",
                      border: "none",
                      display: "flex",
                      width: "15.5vw",
                      top: "2vh",
                      height: "52px",
                      padding: "5px",
                      borderRadius: "5px",
                      backgroundColor: "#3E3E55",
                      color: "#FFFFFF",
                    }}
                    type="text"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <a
                  onClick={() => {
                    setSection(0);
                  }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                      style={{ color: "#FFFFFF" }}
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </Formulario>
          <GravarSenha>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                onClick={() => {
                  setCheck(!check)
                }}
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{ color: "#FFFFFF" }}
              >
                Lembrar Senha
              </label>
            </div>
          </GravarSenha>
          <BotaoLogar>
            <Button
              variant="primary"
              onClick={() => {
                VerificaLogin();
              }}
              style={{
                height: "50px",
                width: "1000px",
                borderRadius: "10px",
                fontWeight: "bold",
                color: "#EFEFEF",
                backgroundColor: "#3D5CFF",
                borderColor: "#3D5CFF",
              }}
            >
              LOGAR
            </Button>
          </BotaoLogar>

          <TextoRegistro>
            <p style={{ color: "#858597" }}>
              Não tem uma conta?{" "}
              <a
                onClick={() => {
                  navigate("/cadastro");
                }}
                style={{ fontWeight: "bold" }}
              >
                Registre-se
              </a>
            </p>
          </TextoRegistro>
        </ContainerLogin>
      </Container>
    </>
  );
};

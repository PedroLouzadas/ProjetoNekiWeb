import React, { useEffect, useState, useContext } from "react";
import { CardImg } from "react-bootstrap";
import { ContainerLogin, Card } from "./style.jsx";
import api from "../service/api.js";
import Modal from "react-bootstrap/Modal";

export const CardHome = ({ pulicacao, id }) => {
  const [versao, setVersao] = useState("");

  let dados = {
    name: pulicacao.name,
    version: versao,
    description: pulicacao.description,
    imageUrl: pulicacao.imageUrl,
  };

  function handleSubmitDelete() {
    api
      .delete(
        `/api/skills/${pulicacao.id}`,
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmitEdit() {
    api
      .put(`/api/skills/${pulicacao.id}`, dados)

      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <ContainerLogin>
      <Card>
        <div style={{ position: "relative", right: "11vw" }}>
          <img
            style={{ width: "20vw", height: "20vh" }}
            src={pulicacao.imageUrl}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            right: "5vw",
            textAlign: "center",
          }}
        >
          <h8 style={{ fontWeight: "bold", color: "#858597" }}>Nome Skill:</h8>
          <h8 style={{ fontWeight: "bold", color: "#858597" }}>
            {pulicacao.name}
          </h8>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            textAlign: "center",
            left: "3vw"
          }}
        >
          <h8 style={{ fontWeight: "bold", color: "#858597" }}>Level Skill:</h8>
          <div style={{display: "flex", flewDirection: "row", alignItems: "center"}}>
            <input
              className="input"
              style={{
                fontSize: "15px",
                lineHeight: "1.2",
                border: "none",
                display: "flex",
                width: "10vw",
                height: "5vh",
                position: "relative",
                top: "1vh",
                borderRadius: "5px",
                backgroundColor: "#3E3E55",
                color: "#FFFFFF",
              }}
              type="text"
              placeholder={pulicacao.version}
              value={versao}
              onChange={(e) => setVersao(e.target.value)}
            />
            <a
            onClick={() => {
              handleSubmitEdit();
              console.log("Editado" + dados);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
              style={{color: "#FFFFFF", position: "relative", top: "1vh", left: "0.5vw"}}
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            textAlign: "center",
            width: "20vw",
            left: "5vw",
          }}
        >
          <h8 style={{ fontWeight: "bold", color: "#858597" }}>
            Descrição Skill:
          </h8>
          <h8 style={{ fontWeight: "bold", color: "#858597" }}>
            {pulicacao.description}
          </h8>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            position: "relative",
            left: "10vw",
            gap: "2.5vw",
          }}
        >
          <div>
            <a  onClick={() => {
              handleSubmitDelete();
              console.log("Excluido");
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
                style={{ color: "#FFFFFF" }}
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </Card>
      
    </ContainerLogin>
  );
};

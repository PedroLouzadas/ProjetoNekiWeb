import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #1f1f39;
  flex-direction: column;
`;

export const ContainerLogin = styled.div`
  height: 68vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f2f42;
  border-radius: 2%;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 4vh;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.div`
  display: flex;
  position: relative;
  bottom: 2vh;
`;

export const BotaoLogar = styled.div`
  display: flex;
  position: relative;
  top: 1vh;
  width: 15.5vw;
`;

export const TextoRegistro = styled.div`
  display: flex;
  position: relative;
  top: 7.5vh;
`;


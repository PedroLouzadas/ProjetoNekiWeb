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



export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.div`
  display: flex;
  position: relative;
  bottom: 2vh;
  top: 12vh;
  flex-direction: row;
  align-items: center;
`;

export const SubTitulo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  top: 5vh;
`;
export const Sair = styled.div`
  display: flex;
  position: relative;
  top: 4.5vh;
  padding-left: 85%;
`;


export const BotaoLogar = styled.div`
  display: flex;
  position: relative;
  top: 5vh;
  width: 15.5vw;
`;

export const TextoRegistro = styled.div`
  display: flex;
  position: relative;
  top: 7.5vh;
`;

export const GravarSenha = styled.div`
  display: flex;
  position: relative;
  top: 3vh;
`;

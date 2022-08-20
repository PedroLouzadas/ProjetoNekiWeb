import React, { useState, useEffect, useContext } from "react";
import { Container, Titulo, SubTitulo, Sair } from "./style.jsx";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CardHome } from "../../componentes/cardHome.jsx";
import Modal from "react-bootstrap/Modal";
import api from "../../service/api.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ContextLoginUser } from "../../context/ContextLogin/index.jsx";

export const Home = () => {
  const [section, setSection] = useState(0);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [versao, setVersao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [skillID, setSkillID] = useState("");
  const [nivelConhecimento, setNivelConhecimento] = useState("");
  const [imagem, setImagem] = useState("");
  const [skills, setSkills] = useState([]);
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);
  const [showModal3, setShowModal3] = useState(false);
  const {usuarioCON, setUsuarioCON} = useContext(ContextLoginUser);
  const handleCloseModal5 = () => setShowModal5(false);
  const handleShowModal5 = () => setShowModal5(true);
  const [showModal5, setShowModal5] = useState(false);

  function Direcionamento() {
    return navigate("/userskills");
  }

  const today = new Date();

  function formatDate(date, format) {
	//
  }

  formatDate(today, 'aa/mm/dd');

  useEffect(() => {
    ReceberSkills();
    console.log("Usuario" + usuarioCON)
  }, [render]);

  function ReceberSkills() {
    api
      .get(`/api/skills`)
      .then((result) => {
        setSkills(result.data);
        // SetDropDown();
      })
      .catch((error) => {
        console.log("Erro ao carregar " + JSON.stringify(error));
      });
  }

  function PostarUserSkills() {
    api
      .post(`/api/userSkills`, dadosUser)
      .then((result) => {
      })
      .catch((error) => {
        console.log("Erro ao carregar " + JSON.stringify(error));
      });
  }

  let dadosModal = {
    name: nome,
    version: versao,
    description: descricao,
    imageUrl: imagem,
  };

  let dadosUser= {
    user: usuarioCON,
    skill: skillID,
    knowledgeLevel: nivelConhecimento,
    updateAlt: today,
    createdAt: today,
  }

  
  function enviarDados() {
    api.post(`/api/skills`, dadosModal);
    setRender(!render);
  }

  return (
    <>
      <Container>
        <Titulo>
          <h4 style={{ fontWeight: "bold", color: "#FFFFFF" }}>
            Área do Desenvolvedor
          </h4>
        </Titulo>
        <Sair>
          <a onClick={handleShowModal3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="50%"
              fill="currentColor"
              class="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
              style={{ color: "#FFFFFF" }}
            >
              <path
                fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </a>
        </Sair>
        <SubTitulo>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              right: "5vw",
            }}
          >
            <h4 style={{ fontWeight: "bold", color: "#FFFFFF" }}>Skills</h4>
            <a onClick={handleShowModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{
                  color: "#FFFFFF",
                  position: "relative",
                  left: "0.5vw",
                  bottom: "0.8vh",
                }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
              left: "5vw",
            }}
          >
            <h4 style={{ fontWeight: "bold", color: "#FFFFFF" }}>
              User Skills
            </h4>
            <a onClick={handleShowModal5}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
                style={{
                  color: "#FFFFFF",
                  position: "relative",
                  left: "0.5vw",
                  bottom: "0.8vh",
                }}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </a>
             <a
              onClick={() => {
                Direcionamento();
              }}
             style={{position: "relative", left: "0.5vw"}}
             >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                style={{
                  color: "#FFFFFF",
                  position: "relative",
                  left: "0.5vw",
                  bottom: "0.7vh",
                }}
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </a> 
          </div>
        </SubTitulo>

        {skills?.map((size) => (
          <CardHome pulicacao={size} id={size.id} />
        ))}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header
            style={{ alignItems: "center", textAlign: "center" }}
            closeButton
          >
            <Modal.Title style={{ position: "relative", left: "8.5vw" }}>
              Cadastrar nova Skill
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Nome da Skill"
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <Form.Control
                  className="mt-2"
                  type="text"
                  placeholder="Descrição da Skill"
                  autoFocus
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <Form.Control
                  className="mt-2"
                  type="text"
                  placeholder="Versão Skill"
                  autoFocus
                  value={versao}
                  onChange={(e) => setVersao(e.target.value)}
                />
                <Form.Control
                  className="mt-2"
                  type="text"
                  placeholder="Link de Imagem da Skill"
                  autoFocus
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                enviarDados();
                handleCloseModal();
              }}
              style={{
                position: "relative",
                right: "10rem",
                width: "10rem",
                borderRadius: "50.35px",
                color: "#ffffff",
                backgroundColor: "#3D5CFF",
                borderColor: "#3D5CFF",
              }}
            >
              CADASTRAR
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal5} onHide={handleCloseModal5}>
          <Modal.Header
            style={{ alignItems: "center", textAlign: "center" }}
            closeButton
          >
            <Modal.Title style={{ position: "relative", left: "7.2vw" }}>
              Cadastrar nova User Skill
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Level da Skill"
                  autoFocus
                  value={nivelConhecimento}
                  onChange={(e) => setNivelConhecimento(e.target.value)}
                />
                <Dropdown
                  style={{
                    padding: "0",
                    width: "92.5%",
                    height: "38px",
                    position: "relative",
                    top: "2vh",
                    left: "1vw",
                    
                  }}
                >
                  <Dropdown.Toggle
                    style={{
                      width: "100%",
                      height: "38px",
                      fontWeight: "bold",
                      backgroundColor: "#f0e8e8",
          
                    }}
                    variant="light"
                    bg="light"
                    expand="lg"
                  >
                    Skills Disponíveis
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    variant="white"
                    bg="white"
                    expand="lg"
                    style={{
                      position: "absolute",
                      width: "40%",
                    }}
                  >
                    {skills.map((item) => (
                      <Dropdown.Item
                        onClick={() => {
                        setSkillID(item.id);
                        console.log("SkillID:" + skillID);
                        }}
                        href="#/action-2"
                      >
                        {item.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                PostarUserSkills();
                handleCloseModal5();
              }}
              style={{
                position: "relative",
                right: "10rem",
                width: "10rem",
                borderRadius: "50.35px",
                color: "#ffffff",
                backgroundColor: "#3D5CFF",
                borderColor: "#3D5CFF",
              }}
            >
              CADASTRAR
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          className="p-5 d-flex justify-content-center align-items-center"
          show={showModal3}
          onHide={handleCloseModal3}
        >
          <Modal.Title className="p-4 d-flex justify-content-center align-items-center">
            Tem certeza que deseja sair?
          </Modal.Title>

          <Modal.Body className="p-3 d-flex justify-content-center align-items-center">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  style={{
                    display: "flex",
                    position: "relative",
                    bottom: "2vh",
                    left: "1vw",
                  }}
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer className="d-flex justify-content-center align-items-center">
            <Button
              className="d-flex justify-content-center align-items-center"
              variant="primary"
              onClick={() => {
                localStorage.removeItem("senha"),
                navigate("/login")
              }}
              style={{
                position: "relative",
                fontWeight: "bold",
                width: "8rem",
                borderRadius: "10.35px",
                color: "#3D5CFF",
                backgroundColor: "#ffffff",
                borderColor: "#3D5CFF",
              }}
            >
              SIM
            </Button>
            <Button
              className="d-flex justify-content-center align-items-center"
              variant="primary"
              onClick={() => {
                //enviardados()
                handleCloseModal3
                
              }
              }
              style={{
                position: "relative",
                fontWeight: "bold",
                width: "8rem",
                borderRadius: "10.35px",
                color: "#ffffff",
                backgroundColor: "#3D5CFF",
                borderColor: "#3D5CFF",
              }}
            >
              NÃO
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

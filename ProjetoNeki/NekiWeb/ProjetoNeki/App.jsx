import React from "react";
import { Rotas } from "../ProjetoNeki/src/routes/rotas.jsx";
import ContextLogin from "./src/context/ContextLogin/index.jsx";


function App() {
  return (

      <ContextLogin>
      <Rotas />
      </ContextLogin>
 
  );
}

export default App;

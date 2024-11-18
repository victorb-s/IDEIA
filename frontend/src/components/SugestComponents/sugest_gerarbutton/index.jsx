import { Button } from "./styles";

function GerarBotao({func}) {
  return <Button onClick={func}>      
    Gerar Novamente
  </Button>
};

export default GerarBotao;
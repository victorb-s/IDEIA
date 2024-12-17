import { Button } from "./styles";

// eslint-disable-next-line react/prop-types
function GerarBotao({func}) {
  return <Button onClick={func}>      
    Gerar Novamente
  </Button>
};

export default GerarBotao;
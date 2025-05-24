import ProjectNavigation from "../ProjectNavigation";
import { Card, CardImg, CardInfos, Container } from "./styles";

const SectionProjetos = () => {
  const projetos = [
    {
      titulo: "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/Copia-de-Placeholder-site-6.png?w=880",
    },
    {
      titulo: "8 das 15 capitais já têm resultados; veja os dados completos",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YXnS70W2-m5oRQXVbY2MSjCQw1N7nJYdBw&s",
    },
    {
      titulo: "Jogo na França pode ser anulado após atitude de ex-Santos",
      categoria: "ESPORTES",
      imagem: "https://sportbuzz.com.br/wp-content/uploads/2024/10/zagueiro-brasileiro-pede-anulacao-de-jogo-do-lyon-750x375.jpeg.webp",
    },
    {
      titulo: "53 são detidos por fazer boca de urna em Niterói, no RJ",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://s2-oglobo.glbimg.com/gVUHCwMxogfd7wwROfafundKI2E=/0x0:4160x2858/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/u/E/O0lGjpTLettgaXi7ZaAQ/whatsapp-image-2024-10-27-at-11.34.28.jpeg",
    },
    {
      titulo: "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://s2-g1.glbimg.com/BXIpGx0T8KCy6xQaytYpxuOWFdY=/0x0:1600x854/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/L/D/CQql1SQlm5V2M7y8oPLw/whatsapp-image-2024-09-17-at-12.17.32.jpeg",
    },
    {
      titulo: "Debate de candidatos à prefeitura de São Paulo acaba em confusão!",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26I8ukFbNsGZHEJyo25pO4QnZIvssva0E7A&s",
    },
    {
      titulo: "Lula tem dreno retirado e segue bem, lúcido e orientado, dizem médicos",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://s2-g1.glbimg.com/35ggixS-9RF2JHt2aX6yNoJ8aH4=/0x0:640x359/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/p/p/TPbksZQ5mvIOzXTeiC7A/lula.webp",
    },
    {
      titulo: "Governo diz que vai liberar R$ 1,7 bilhão em emendas até esta sexta",
      categoria: "ELEIÇÕES 2024",
      imagem: "https://s2-g1.glbimg.com/tHf5SK-UQ2DZu9plyJwsCVmXyY8=/0x55:1503x900/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/O/6/IPa6BXQTigpNIsKLew9Q/globo-canal-4-20241203-2000-frame-74537.jpeg",
    },
  ];

  return (
    <Container>
      <ProjectNavigation id="projetos"/>
      {projetos.length > 0 ? (
        projetos.map((projeto, index) => (
          <Card key={index}>
            <CardImg img={projeto.imagem}>
              <div>{}</div>
            </CardImg>
            <CardInfos>
              <h2>{projeto.categoria}</h2>
              <h1>{projeto.titulo}</h1>
            </CardInfos>
          </Card>
        ))
      ) : (
        <div className="sem-projeto">Não há projetos recentes</div>
      )}
    </Container>
  );
};

export default SectionProjetos;

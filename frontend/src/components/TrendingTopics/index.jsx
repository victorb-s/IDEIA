import { useEffect, useState } from "react";
import { TopicosConteiner, Linha, Titulo, Topicos, TableHeader, TableRow, TableCell } from "./styles";

const TrendingTopics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/topics")
            .then((response) => response.json())
            .then((data) => setTopics(data))
            .catch((error) => console.error("Erro ao carregar dados:", error));
    }, []);

    return (
        <TopicosConteiner>
            <Linha />
            <Titulo>
                Em alta
            </Titulo>
            <Topicos>
                <thead>
                    <TableRow>
                        <TableHeader>Tendências</TableHeader>
                        <TableHeader>Volume de pesquisa</TableHeader>
                        <TableHeader>Iniciado</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {topics.map((topic, index) => (
                        <TableRow key={index}>
                            <TableCell>{topic.name}</TableCell>
                            <TableCell>{topic.volume}</TableCell>
                            <TableCell>{topic.started}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Topicos>
        </TopicosConteiner>
    );
};

export default TrendingTopics;

import { useEffect, useState, useRef } from "react";
import { TopicosConteiner, Titulo, Topicos, TableHeader, TableRow, TableCell } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TrendingTopics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/topics")
            .then((response) => response.json())
            .then((data) => setTopics(data))
            .catch((error) => console.error("Erro ao carregar dados:", error));
    }, []);

    return (
        <TopicosConteiner id="sugesTitulos">
            <Titulo>
                <h1>Em alta</h1>
                <div className="linha"></div>
            </Titulo>
            <Topicos>
                <thead>
                    <TableRow>
                        <TableHeader>Tendências</TableHeader>
                        <TableHeader>Volume de pesquisa</TableHeader>
                        <TableHeader>Iniciado</TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {topics.map((topic, index) => (
                        <TableRow key={index}>
                            <TableCell>{topic.name}</TableCell>
                            <TableCell>{topic.volume}</TableCell>
                            <TableCell>{topic.started}</TableCell>
                            <TableCell>
                                <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer", color: "#034C8C" }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Topicos>
        </TopicosConteiner>
    );
};

export default TrendingTopics;
import { useEffect, useState } from "react";
import { TopicosConteiner, Titulo, Topicos, TableHeader, TableRow, TableCell } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { api } from '../../../services/app';

// eslint-disable-next-line react/prop-types
const TrendingTopics = ({ id, handleSelectTopic }) => {
    const [topics, setTopics] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [categoria, setCategoria] = useState("BR")

    useEffect(() => {
        // fetch(`http://localhost:3000/api/v1/trends?category=${categoria}`)
        //     .then((response) => response.json())
        //     .then((data) => setTopics(data))
        //     .catch((error) => console.error("Erro ao carregar dados:", error));

        api.get(`/v1/trends?category=${categoria}`)
        .then((response) => setTopics(response.data))
        .catch((error) => console.error("Erro ao carregar dados:", error));
    }, [categoria]);

    return (
        <TopicosConteiner id={id}>
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
                            <TableCell>{topic.title}</TableCell>
                            <TableCell>{topic.formatted_traffic}</TableCell>
                            <TableCell>{topic.time_ago}</TableCell>
                            <TableCell>
                                <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer", color: "#034C8C" }} onClick={() => handleSelectTopic(topic.title)}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Topicos>
        </TopicosConteiner>
    );
};

export default TrendingTopics;
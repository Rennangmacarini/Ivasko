
import { useState } from "react";
import { Card } from "./Card";
import styles from "./styles.module.scss";


type Revenue = {
    id: number;
    title: string;
    image: string;
    description: string;
}


export function CardsBook() {
    //useState armazena o estado de uma variável
    //onde o primeiro elemento é o valor da variável
    //e o segundo elemento é uma função que atualiza o valor da variável

    //useState para abrir e fechar o modal
    const [showModal, setShowModal] = useState(false);

    //useState para armazenar o conteúdo do modal
    const [revenueSelected, setRevenueSelected] = useState({} as Revenue);

    const revenues = [
        {
            id: 1,
            title: "RISOTO DE MANGA",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 2,
            title: "RISOTO DE COM ABACAXI",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 3,
            title: "RISOTO DE FRANGO",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 4,
            title: "RISOTO DE PORCO",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 5,
            title: "RISOTO DE VIEIRA",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 6,
            title: "RISOTO DE GUAXINIM",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        },
        {
            id: 7,
            title: "RISOTO DE CAVALO",
            image: "/images/textura.png",
            description: "Lorem ipsum dolor sit amet",
        }
    ]

    function handleModalContent(id: number) {
        //find() retorna o primeiro elemento de um array que corresponde o parametro fornecido.
        const revenue = revenues.find(revenue => revenue.id === id);
        setRevenueSelected(revenue as Revenue);
        setShowModal(true);
    }

    return (
        <>
            <div className={styles.content}>
                <div>
                    <h1>Aperitivos</h1>
                    <img src="/images/textura.png" alt="" />
                </div>

                <div>
                    <h1>Pratos-Principais</h1>
                    <img src="/images/textura.png" alt="" />
                </div>

                <div>
                    <h1>Sobremesas</h1>
                    <img src="/images/textura.png" alt="" />
                </div>

                <div>
                    <h1>Pães e Bolos</h1>
                    <img src="/images/textura.png" alt="" />
                </div>
            </div>

            <div className={styles.text}>
                <h2>RECEITAS CHEIAS DE SABOR</h2>
                <p>Aqui você encontra produtos de cada receitas em nossas lojas</p>

                <div className={styles.cards}>
                    {
                        revenues.map(revenue => {
                            return (
                                <Card
                                    key={revenue.id}
                                    title={revenue.title}
                                    image={revenue.image}
                                    description={revenue.description}
                                    handleModal={() => handleModalContent(revenue.id)}
                                />
                            )
                        })
                    }
                </div>

                {
                    showModal && (
                        <>
                            <div className={styles.modalOverlay} onClick={() => setShowModal(false)} />

                            <div className={styles.modalContainer}>
                                <div className={styles.modalContent}>
                                    <h2>Modal {revenueSelected.id}</h2>
                                    <p>{revenueSelected.title}</p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
}

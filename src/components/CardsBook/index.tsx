import { useState } from "react";
import { Card } from "./Card";
import styles from "./styles.module.scss";

type Revenue = {
  id: number;
  title: string;
  image: string;
  description: string;
};

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
      title: "RISOTO DE CAMARÃO COM MANGA",
      image: "/img/rijoto.png",
      description: 'teste'
    },
    {
      id: 2,
      title: "CAPONATA DE BERINGELA",
      image: "./img/laponata.png",
      description: 'teste'
    },
    {
      id: 3,
      title: "MOLHO 4 QUEIJOS",
      image: "./img/molho.png",
      description: 'teste'
    },
    {
      id: 4,
      title: "CAMARÃO NA MORANGA",
      image: "./img/camaraomoranga.jpg",
      description: 'teste'
    },
    {
      id: 5,
      title: "CAMARÃO AO BAFO",
      image: "./img/camaraobafo.jpg",
      description: 'teste'
    },
    {
      id: 6,
      title: "PEPINO EM CONSERVA",
      image: "./img/pepino.png",
      description: 'teste'
    },
    {
      id: 7,
      title: "HOMUS _ PATÊ DE GRÃO DE BICO",
      image: "./img/homus.jpg",
      description: 'teste'
    },
    {
      id: 8,
      title: "PATÊ DE BERINJELA BABAGONOUSH",
      image: "./img/patebrigenla.png",
      description: 'teste'
    },
    {
      id: 9,
      title: "PATÊ DE BERINJELA E AZEITONAS",
      image: "./img/pateazeitona.png",
      description: 'teste'
    },
    {
      id: 10,
      title: "TORTA DE MORANGO",
      image: "./img/torta.png",
      description: 'teste'
    },
    {
      id: 11,
      title: "BOLO DE LARANJA",
      image: "./img/bololaranja.png",
      description: 'teste'
    },
    {
      id: 12,
      title: "PANNA COTTA",
      image: "./img/pannacottajpeg.jpeg",
      description: 'teste'
    },
    {
      id: 13,
      title: "PIZZA",
      image: "./img/pizza.png",
      description: 'teste'
    },
    {
      id: 14,
      title: "BOLO DE FUBÁ (LALANOLETO)",
      image: "./img/bolofuba-1.jpg",
      description: 'teste'
    },
    {
      id: 15,
      title: "PALETA MEXICANA NA TRAVESSA",
      image: "./img/paleta.jpg",
      description: 'teste'
    },
    {
      id: 16,
      title: "DOCE DE AMENDOIM",
      image: "./img/doceamendoim.png",
      description: 'teste'
    },
    {
      id: 17,
      title: "BOLACHA PINTADA DE NATAL",
      image: "./img/bolacha.png",
      description: 'teste'
    },
    {
      id: 18,
      title: "CUCA DOCE",
      image: "./img/cuca.jpg",
      description: 'teste'
    },
    {
      id: 19,
      title: "TORTA DE REQUEIJÃO",
      image: "./img/Tortarequijao.jpg",
      description: 'teste'
    },
    {
      id: 20,
      title: "BOLACHA DE FUBÁ E POLVILHO DOCE",
      image: "./img/bolachafuba.jpg",
      description: 'teste'
    },
    {
      id: 21,
      title: "CHINEQUE",
      image: "./img/chineque.jpg",
      description: 'teste'
    },
    {
      id: 22,
      title: "BOLO DE GENGIBRE COM LIMÃO",
      image: "./img/bologengibre.jpg",
      description: 'teste'
    },
    {
      id: 23,
      title: "CRÈME BRÛLÉE",
      image: "./img/creme.png",
      description: 'teste'
    },
    {
      id: 24,
      title: "BOLO GELADO DE PRESTÍGIO",
      image: "./img/boloprestigio.jpg",
      description: 'teste'
    },
    {
      id: 25,
      title: "BOLO DE FUBÁ",
      image: "./img/bolofuba-1.jpg",
      description: 'teste'
    },
    {
      id: 26,
      title: "CUCA DA VOVÓ",
      image: "./img/cucavovo.jpg",
      description: 'teste'
    },
    {
      id: 27,
      title: "BOLO DE BANANA FIT",
      image: "./img/bolobanana.png",
      description: 'teste'
    },
    {
      id: 28,
      title: "BOLO DE MILHO",
      image: "./img/bolomilho.jpg",
      description: 'teste'
    }

    
  ];

  function handleModalContent(id: number) {
    //find() retorna o primeiro elemento de um array que corresponde o parametro fornecido.
    const revenue = revenues.find((revenue) => revenue.id === id);
    setRevenueSelected(revenue as Revenue);
    setShowModal(true);
  }

  return (
    <>
      <div className={styles.content}>
        <div>
          <h1>Aperitivos</h1>
          <img src="./img/aperetivos.avif" alt="" />
        </div>

        <div>
          <h1>Pratos-Principais</h1>
          <img src="./img/pratos-principal.avif" alt="" />
        </div>

        <div>
          <h1>Sobremesas</h1>
          <img src="./img/sobremesa.avif" alt="" />
        </div>

        <div>
          <h1>Pães e Bolos</h1>
          <img src="./img/pao-bolo.png" alt="" />
        </div>
      </div>

      <div className={styles.text}>
        <h2>RECEITAS CHEIAS DE SABOR</h2>
        <p>Aqui você encontra produtos de cada receitas em nossas lojas.</p>

        <div className={styles.cards}>
          {revenues.map((revenue) => {
            return (
              <Card
                key={revenue.id}
                title={revenue.title}
                image={revenue.image}
                handleModal={() => handleModalContent(revenue.id)}
              />
            );
          })}
        </div>

        {showModal && (
          <>
            <div
              className={styles.modalOverlay}
              onClick={() => setShowModal(false)}
            />

            <div className={styles.modalContainer}>
              <div className={styles.modalContent}>
                <h2>{revenueSelected.title}</h2>
                <p>{revenueSelected.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

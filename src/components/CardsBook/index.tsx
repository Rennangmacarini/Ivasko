import { useState } from "react";
import { Card } from "./Card";
import styles from "./styles.module.scss";

type Revenue = {
  id: number;
  title: string;
  image: string;
  p: string;
  pone: string;
  ptwo: string;
  pthree: string;
  pfour: string;
  pfive: string;
  psix: string;
  pseven: string;
  peight: string;
  pnine: string;
  pten: string;
  peleven: string;
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

      p: ". 400g de arroz arbóreo; 01 colher de alho picado; 100g de queijo parmesão ralado;",
      pone: ". 500ml vinho branco; 02 mangas cortadas em cubos; Salsinha a gosto; Sal;",
      ptwo: ". 02 colheres de manteiga; Caldo de legumes, cenoura, batata, abobrinha, alho; Azeite de oliva;",

      pthree: "MODO DE PREPARO",

      pfour:
        "Refoga o alho no azeite, coloca o arroz e refoga. Coloca o vinho e deixe secar. Adicione o caldo e um pouco de manteiga, sempre mexendo, acrescente uma manga e deixe cozinhar até ficar cremoso. No final acerte o sal, desligue o fogo e coloque o restante de manteiga, parmesão e a manga e mexe bem.",

      pfive: "EM OUTRA PANELA:",
      psix: "Refoga o camarão c/sal e pimenta puxado no azeite, no ponto de servir coloca cachaça e flamba o camarão. Coloca mais um pouco de cachaça e deixe c/caldo p/colocar por cima do risto. Decora com salsinha e coentro. Pode substituir a manga por abacaxi.",
    },
    {
      id: 2,
      title: "CAPONATA DE BERINGELA",
      image: "./img/laponata.png",
      p: ". 1 pimentão verde em cubos, 1 pimentão vermelho em cubos, 1 pimentão amarelo em cubos",
      pone: ". 1 cebola em cubos, 2 berinjelas sem casca, raladas, meia xícara (chá) de uvas-passas",
      ptwo: "meia xícara (chá) de azeitonas sem caroço, cortadas ao meio",
      pthree: ". 1 colher (chá) de sal, 1 colher (chá) de orégano, 1 xícara (chá) de azeite",
      pfour: "MODO DE PREPARO:",
      pfive: `Em uma assadeira misture todos os ingredientes.  Leve para assar em forno médio (180°C) preaquecido, por cerca de 1 hora e 30 minutos, mexendo a cada 30 minutos. Retire do forno, espere esfriar e coloque na geladeira. Sirva gelado.`
    },
    {
      id: 3,
      title: "MOLHO 4 QUEIJOS",
      image: "./img/molho.png",
      p: ". 1 dente de alho grande espremido; 1 colher de manteiga ou margarina;",
      pone: ". 1/2 xícara de mussarela ralada; 1/2 xícara de provolone ralado;",
      ptwo: ". 1/2 xícara de parmesão ralado; 1 copo de requijão; 1 xícara de leite;",
      pthree: ". 1 caixinha de creme de leite;",
      pfour: "MODO DE PREPARO:",
      pfive:
        "Doure o alho na manteiga, junte todos os queijos, inclusive o requeijão e mexa sem parar, até que derretam e se misturem. Acrescente o creme de leite e mexa. Coloque o leite e continue a mexer até ficar homogêneo. Sirva imediatamente sobre carnes ou massas. Para ficarem mais saborosos, salpique permesão ralado por cima quando o prato já estiver composto.",
    },
    {
      id: 4,
      title: "CAMARÃO NA MORANGA",
      image: "./img/camaraomoranga.jpg",
      p: ". 1 moranga média; 1 kg de camarão limpo temperado com sal, pimenta e limão;",
      pone: ". 2 colheres de óleo para dourar; 2 cebolas picadas; 1 dente de alho amassado;",
      ptwo: ". 3 tomates sem pele e sem semente picados; 1/2 pimenta vermelha picada, sal, pimenta do reino;",
      pthree: ". 3 colheres de farinha de trigo; 200ml leite de coco;",
      pfour:
        ". 1 lt creme de leite; 1 colher de salsinha picada; 1 colher de cebolinha; 1 copo de requijão, queijo ralado",
      pfive: "MODO DE PREPARO",
      psix: `Retire a tampa da moranga e todos as sementes, passe sal em todo seu interior. Recoloque a
      tampa e embrulhe num pano de prato amarrando-a. Leve ao
      fogo numa panela grande totalmente coberta com água. Cozinhe até que espetando um garfo
      esteja macia. Retire da água, vire de cabeça para baixo para que o excesso de água escorra
      bem. Pincele a parte externa da moranga com óleo e besunte completamente com requeijão a
      parte interna. Despeje dentro da moranga e refogado de camarão. Polvilhe com queijo ralado e
      leve ao fogo para gratinar.
      Doure a cebola no óleo e acrescente o alho amassado. Mexa bem e junte o camarão já
      temperado. Deixe refogar por carca de 10 minutos ou até que o camarão mude de cor
      acrescente, então os tomates, a pimenta vermelha e a farinha de trigo diluída no leite de
      coco. Misture e deixe cozinhar por alguns minutos. Acerte o sal, desligue o fogo, junte o
      creme de leite, salsa e cebolinha. Mexa bem e despeje o refogado na moranga.`,
    },
    {
      id: 5,
      title: "CAMARÃO AO BAFO",
      image: "./img/camaraobafo.jpg",
      p: "- Camarão grande com casca 5kg;",
      pone: ". 3 cebolas picadas",
      ptwo: ". 2 cabeça de alho esmagados;",
      pthree: ". 6 limões (suco);",
      pfour: ". Alecrim, cominho, manjericão, pimenta;",
      pfive: "MODO DE PREPARO:",
      psix: ` Refoga a cabola, coloca o camarão, sal, mexe bem até o camarão mudar de cor, coloca as
      ervas, deslique, mistura o alho e o limão e coloca no camarão e pronto.`,
    },
    {
      id: 6,
      title: "PEPINO EM CONSERVA",
      image: "./img/pepino.png",
      p: "A cada copo de água, adicionar meia de vinagre, sal a gosto;",
      pone: ". 10 bolinhas de coentro;",
      ptwo: ". 1 raminho de endro;",
      pthree: ". 1 folha de louro (suco);",
      pfour: "MODO DE PREPARO:",
      pfive: `Cozinhar os vidros virados para cima, colocar panos entre os vidros, um embaixo do outro e
      cozinhar até o pepino mudar de cor.`,
    },
    {
      id: 7,
      title: "HOMUS _ PATÊ DE GRÃO DE BICO",
      image: "./img/homus.jpg",
      p: ". 250g de grão de bico;",
      pone: ". 2 colheres (sopa) de tahine;",
      ptwo: ". 1 dente de alho (ou +);",
      pthree: ". Suco de dois limões;",
      pfour: ". Sal a gosto;",
      pfive: "MODO DE PREPARO:",
      psix: ` Reserve um pouco de água em que foi cozido,Deixando o grão de bico de um dia para outro,
      após cozinhar na panela de pressão, escorre a água e bate no liquidificador com um pouco de
      água que foi cozido, coloque o alho, sal, talrine, assim ficando como um creme espesso.
      So servir mexendo um pouco, pois fica um pouco duro.`,
    },
    {
      id: 8,
      title: "PATÊ DE BERINJELA BABAGONOUSH",
      image: "./img/patebrigenla.png",
      p: ". 2 beringelas médias;",
      pone: ". 3 colheres de tahine;",
      ptwo: ". 3 dentes de alho;",
      pthree: ". Sal a gosto;",
      pfour: "MODO DE PREPARO:",
      pfive: ` Espetar as berinjelas com garfos e queima-las na chama do fogão até que todos os lados
      estejam bem passados. Pode ser que a casca fique queimada, mas isso trará o sabor de
      defumado à receita. Após, lavá-las embaixo da torneira até tirar todo o queimado da casca.
      Bater no processador com alho, o sal e o tahine até obter um creme espesso. Se necessário,
      colocar um pouco de água bem gelada para bater.`,
    },
    {
      id: 9,
      title: "PATÊ DE BERINJELA E AZEITONAS",
      image: "./img/pateazeitona.png",
      p: "- Berinjelas(quantas quiser);",
      pone: ". 1/2 copo de vinagre branco para cozinhar as beringelas;",
      ptwo: ". Azeitonas pretas e verdes; Sal a gosto; Orégano;",
      pthree: ". Alho à vontade;",
      pfour: ". Fatiar a berinjelas em fatias bem finas;",
      pfive: "MODO DE PREPARO:",
      psix: `Cozinhar em água com vinagre até o ponto de cozimento (quando elas ficarem meio
        transparentes). Após, deixe escorrer no escorredor. Esmague os dentes de alho c/sal, coloque
        as azeitonas picadas, orégano e bastante azeite de oliva. Misture bem e adicione a berinjela
        nos temperos e leve à geladeira.`,
    },
    {
      id: 10,
      title: "TORTA DE MORANGO",
      image: "./img/torta.png",
      p: "MASSA",
      pone: `. 1 colher (sopa) de banha; 2 colheres (sopa) de açúcar; 2 gemas de ovo; 4 colheres (sopa) de
      leite;`,
      ptwo: `. 1 xícara de trigo + 1 colher (sobremesa) de royal recheio: 4 bandejas de morango;`,
      pthree: `. 2 ou 3 colheres (sopa) de açúcar (depende do morango); 1 limão; 2 colheres (sopa) de
      chantilly; 2 claras;`,
      pfour: `. 2 xícaras de açúcar; 1 caixa de creme de leite;`,
      pfive: `MODO DE PREPARO`,
      psix: ` MASSA`,
      pseven: ` Colocar todos os ingredientes em um recipiente até tornar-se uma massa homogênea. Depois de
      juntar a forma com fundo removível, colocar a massa e trabalhar ela até ficar bem fina no
      fundo e na lateral.`,
      peight: `RECHEIO:`,
      pnine: `Corte os morangos em quadradinhos em quadradinhos e colocar em uma panela junto com todos os
      outros ingredientes. Ferver por uns 5 minutos até que engrosse, mexendo sem parar.`,
      pten: `CHANTLLY:`,
      peleven: `Bater as claras até deixar em neve, adicionar o açúcar e o creme de leite e misturar.`,
    },
    {
      id: 11,
      title: "BOLO DE LARANJA",
      image: "./img/bololaranja.png",
      p: " MASSA:",
      pone: ". 3 ovos; 1 xícara de óleo; 2 laranjas sem casca e sem sementes;",
      ptwo: ". 1 laranja com casca e sem sementes; 2 xícaras de trigo; 1 xícara de açúcar;",
      pthree: ". 1 colher (sopa) de fermento;",
      pfour: "-CALDINHA;",
      pfive: ". + ou - 6 laranjas(suco); 2 colheres (sopa) de açucar;",
      psix: ". 2 colheres (sopa) de amido;",
      pseven: "MODO DE PREPARO",
      peight: "MASSA:",
      pnine: ` Colocar os igredientes secos (trigo, açúcar) em um recipiente. Bater no liquidificador os
      ovos, óleo e as 3 laranjas inteiras (com e sem casca).
      Misturar no recipiente o líquido do liquidificador e em seguida adicionar o fermento.`,
      pten: "CALDINHA:",
      peleven: `Colocar todos os ingredientes, em uma panela e ferver até engrossar. Deixar a caldinha separada do bolo e na geladeira.`,
    },
    {
      id: 12,
      title: "PANNA COTTA",
      image: "./img/pannacottajpeg.jpeg",
      p: ". 1/2 colher de sopa de gelatina sem sabor, hidratar conforme instrução do pacotinho (reservir);",
      pone: ". 200ml de leite; 200ml de creme de leite; 1/4 xícara de açúcar;",
      ptwo: "MODO DE PREPARO",
      pthree: "PANNA COTTA",
      pfour: `Mistura o leite, o creme de leite e o açúcar em fogo baixo até derreter o açúcar, não deixar
      ferver. Desligar
      o fogo e colocar a gelatina dissolvida. Adicionar uma colher de chá de baunilha e misturar
      bem. Colocar para
      gelar por no mínimo 5hs.`,
      pfive: "CALDA",
      psix: ` Morangos picados (para cada caixa de morango 1 colher de açúcar), se quiser mais doce, basta
      colocar mais
      açúcar. Meia xícara de água. Deixar ferver até os morangos ficarem moles. Bater no
      liquidificador, se quiser
      pode acrescentar um pouco de suco de limão. Depois de gelado o creme, colocar a calda por  cima. `,
      pseven: "Dica:",
      peight: `pode utilizar frutas vermelhas ou as de sua preferência.`,
    },
    {
      id: 13,
      title: "PIZZA",
      image: "./img/pizza.png",
      p: ". 1kg de farinha de trigo; 1/2 sachê de fermento p/ pão;",
      pone: ". 1 colher de sopa de sal; 1 colher de açúcar;",
      ptwo: ". 2 1/2copo de água morna; 1/2 copo de azeite; 1 colher de sopa de cachaça;",
      pfour: "MODO DE PREPARO",
      pfive: `Misturar e sovar bem. Deixar crescer pelo menos 1 hora. Fazer bolinhas de massa e deixar
      descansar por mais 1h. Para abrir cada bolinha, utilize farinha para ajudar a deslizar.
      Quando ela estiver aberta, antes de colocar o molho, faça furinhos c/ a ponta do garfo para
      não fazer bolhas ao assar.`,
    },
    {
      id: 14,
      title: "BOLO DE FUBÁ (LALANOLETO)",
      image: "./img/bolofuba-1.jpg",
      p: "- Pré aqueça o forno a 200°c;",
      pone: "- Misturar em uma bacia;",
      ptwo: ". 2 xícaras de fubá; . 2 xícaras de farinha de trigo;",
      pthree: ". 2 xícaras de óleo; 1 xícara de leite; 2 ovos;",
      pfour: "MODO DE PREPARO",
      pfive: `Depois de misturar, acrescente uma colher de chá bem cheia de fermento e misturar mais um
      pouco. Leve ao forno e baixe a temperatura a 180°. Assar por 40 minutos.`,
    },
    {
      id: 15,
      title: "PALETA MEXICANA NA TRAVESSA",
      image: "./img/paleta.jpg",
      p: ". 1kg de morango;",
      pone: ". 1/2 kg açúcar;",
      ptwo: ". 1 limão;",
      pthree: ". 2 latas de leite condensado cremoso;",
      pfour: "MODO DE PREPARO",
      pfive: `No liquidificador, triture os morangos, açúcar e o limão. Dispor a metade do suco em um
      refratário e
      levar ao freezer por 1 hora ou até firmar. Fazer uma camada de leite condensado e levar ao
      freezer
      por 2 horas ou até firmar. Cobrir com o restante do suco de morango e levar ao freezer por 4
      horas
      antes de servir.`,
    },
    {
      id: 16,
      title: "DOCE DE AMENDOIM",
      image: "./img/doceamendoim.png",
      p: ". 1 pt de amendoim cru;",
      pone: ". 2 xícaras de açúcar;",
      ptwo: ". 1 xícara de água;",
      pthree: ". 1 lata de leite condensado;",
      pfour: "MODO DE PREPARO",
      pfive: `Coloca o amendoim, açúcar e a água em uma panela e deixe ferver até a água secar. Quando
      ficar cricri, mexe bem para torrar o amendoim. Quando começar a derreter no fundo coloca o
      leite condensado. Quando desgrudar do fundo vira numa forma.`,
    },
    {
      id: 17,
      title: "BOLACHA PINTADA DE NATAL",
      image: "./img/bolacha.png",
      p: ". 9 ovos;",
      pone: ". 9 colheres de banha;",
      ptwo: ". 3 xícaras de açúcar;",
      pthree: ". 1/2 pote de nata;",
      pfour: ". 3 colheres de sal-amoníaco(fermento);",
      pfive: ". 1/2 xícara de leite morno;",
      psix: ". 1kg 1/2 de farinha de trigo;",
      pseven: "MODO DE PREPARO",
      peight:
        " A massa não pode ficar muito dura, assim a bolacha apresenta uma maciez.",
    },
    {
      id: 18,
      title: "CUCA DOCE",
      image: "./img/cuca.jpg",
      p: ". 1 colher (sopa) de margarina; 2 colheres de (sopa) de óleo;",
      pone: ". 2 ovos; 1 xícara de açúcar; 1 pitada de sal; 4 xícaras de trigo;",
      ptwo: ". 10g de fermento biológico seco instantâneo; Água morna o quanto baste(+ ou - 1/4 de  xícara);",
      pthree: ". FAROFA;",
      pfour: ". 1 colher margarina; 1 colher de óleo;",
      pfive: ". 3 colheres de trigo; 4 colhere de açúcares; canela em pó;",
      psix: "MODO DE PREPARO",
      pseven: `Misture os ingredientes até que obtenha uma massa mole (mais mole que massa de pão). Sove
      com a mão (quando mais sovada, mais fofinha vai ficar). Coloque na forma e distribua
      colheradas de recheio por toda massa. Deixe crescer, depois jogue a farofa por cima e leve
      ao forno. O recheio você pode fazer brigadeiro, doce de leite, ... O que sua imaginação
      mandar!`,
    },
    {
      id: 19,
      title: "TORTA DE REQUEIJÃO",
      image: "./img/Tortarequijao.jpg",
      p: "- MASSA;",
      pone: ". 2 xícaras de trigo; 1 xícara de açúcar; 1 xícara de manteiga;",
      ptwo: ". 1 ovo; 1 colher de sopa de fermento;",
      pthree: ". 1 colher de sopa de raspas de limão; 1 pitada de sal;",
      pfour: ". RECHEIO;",
      pfive:
        ". 1 xícara de açúcar; 1 colher de sopa de manteiga; 1 colher de sopa de sal;",
      psix: ". 1 colher de sopa de raspas de limão; 3 ovos; 3 colheres de sopa de mate;",
      pseven:
        ". 800g de requeijão; 250g uvas passas umedecidas(opcional); 1 colher de sopa de polvilho doce;",
      peight: "MODO DE PREPARO",
      pnine: `Misture fermento c/ o trigo, acrescente o açúcar, o sal, as raspas do limão, manteiga, ovos,
      misture de leve c/ a colher e preencha na forma.`,
      pten: "RECHEIO",
      peleven: ` Açúcar, manteiga, sal, raspas do limão, ovos, requeijão, mate, uva passa, amido de milho e
      polvilho doce. ASSAR POR 50 MINUTOS A 250°C.`,
    },
    {
      id: 20,
      title: "BOLACHA DE FUBÁ E POLVILHO DOCE",
      image: "./img/bolachafuba.jpg",
      p: ". 3 xícaras de polvilho doce; 3 xícaras de fubá fino;",
      pone: ". 1 xícara de açúcar;",
      ptwo: ". 100g manteiga ou margarina;",
      pthree: ". 100g de banha; 3 ovos;",
      pfour: ". 1/2 xícara de água;",
      pfive: ". 1/2 xícara de leite;",
      psix: ". 2 colheres de fermento em pó;",
      pseven: "MODO DE PREPARO",
      peight:
        "Deixar o ponto de passar na máquina e amassar com trigo até a massa ficar no ponto.",
    },
    {
      id: 21,
      title: "CHINEQUE",
      image: "./img/chineque.jpg",
      p: ". 4 xícaras de farinha de trigo; 3 gemas; 1 colher de banha derretida;",
      pone: ". 1 colher de açúcar; 1 pitada de sal; 1 copo de leite morno;",
      ptwo: "RECHEIO",
      pthree:
        ". 1/2 xícara de leite; 3 colheres de açúcar; 2 colheres de margarina; 100g de coco ralado; 2 gemas;",
      pfour: "CALDA",
      pfive:
        ". 2 xícaras de açúcar confeiteiro; leite quente para derreter o açúcar em banha maria;",
      psix: "MODO DE PREPARO",
      pseven: `Dissolver o fermento no leite morno, adicionar o restante dos ingredientes que já devem
      estar bem misturados. Sovar bem e deixar descansar por
      meia hora. Dividir a massa em duas partes, abrir a massa com o rolo e passar metade do
      recheio, enrolar como rocambole e cortar em fatias e por para assar. Depois de assado
      colocar a calda.`,
    },
    {
      id: 22,
      title: "BOLO DE GENGIBRE COM LIMÃO",
      image: "./img/bologengibre.jpg",
      p: ". 3 colheres de gengibre fresco; 14 colheres de (sopa) de açúcar;",
      pone: ". 1 xícara de farinha de trigo; 1 colher (chá) de bicarbonato de sódio ou fermento;",
      ptwo: ". 1 pitada de sal; 1/2 xícara de manteiga amolecida fora da geladeira;",
      pthree:
        ". 2 colheres de raspas de limão taiti; 2 ovos; 1/4 xícara de leite; 2 colheres (sopa) suco de  limão;",
      pfour: ". Pré-aqueça o forno a 180°c;",
      pfive: "MODO DE PREPARO",
      psix: `
      No liquidificador bata o gengibre com 4 colheres (sopa) de açúcar. Misture a farinha com o
      bicarbonato e o sal e reserve. Na batedeira bata a manteiga com o açúcar restante. Junte os
      batendo sempre. As raspas de limão sempre por último (nunca bata). Junte a farinha alterando
      com o leite, batendo em velocidade baixa. Junte a mistura de açúcar com gengibre fresco e
      depois o suco de limão. Coloque a massa na forma junto com a manteiga e polvilhada de açúcar
      e canela.
      Forma de buraco, asse por 40 minutos. Retire do forno e desenforne ainda quente.`,
      pseven:
        "Cobertura: 1 xícara (chá) de açúcar de confeiteiro com limão quente em cima do bolo.",
    },
    {
      id: 23,
      title: "CRÈME BRÛLÉE",
      image: "./img/creme.png",
      p: ". 120g de açúcar; 8 gemas;",
      pone: ". 600ml de creme de leite fresco; 2 favas de baunilha;",
      ptwo: ". Pré aqueça o forno;",
      pthree:
        ". Corte as favas de baunilha no comprimento e passe a faca por dentro delas para remover as  sementes.;",
      pfour: "MODO DE PREPARO",
      pfive: ` Aqueça o creme de leite lentamente. Enquanto isso, bata as gemas com o açúcar em uma tigela
      até obter uma mistura leve e fofa. Quando o creme de leite começar a ferver retire as fervas
      de baunilha e adicione esta à mistura as gemas de ovos, mexendo continuamente. Derrame esta
      mistura no pontinhos de louça. Acomode as porções individuais sobre uma assadeira com água
      até o meio dos pontinhos e asse no forno pré-aquecido por cerca de 25 minutos ou até que o
      creme fique firme, mas ligeiramente molengo no centro. Deixe esfriar à temperatura ambiente,
      depois leve à geladeira até o momento de servir. Polvilhe com açúcar e caramelize utilizando
      o maçarico.`,
    },
    {
      id: 24,
      title: "BOLO GELADO DE PRESTÍGIO",
      image: "./img/boloprestigio.jpg",
      p: ". 3 ovos; 1 + 1/2 xícara de açucar; 3/4 xícara; 250ml de leite; 2 xícaras de trigo;",
      pone: ". Bater tudo na batedeira até homogenizar muito bem e ficar claro;",
      ptwo: ". 1 xícara de chocolate em pó 50%; 1 colher de sopa de fermento em pó;",
      pthree: "MODO DE PREPARO",
      pfour: ` Bata os ovos com o açúcar até homegenizar e ficar claro. Misture o óleo e o leite batendo
      sem parar.
      Misture bem todos os ingredientes secos e aos poucos junte com os líquidos. Continue
      batendo.
      Acrescente a manteiga e farinha, misture e leve ao forno pré aquecido em 180ºC por 45
      minutos.`,
      pfive: "RECHEIO:",
      psix: `. 2 caixas de leite condensado; 1 vidro de leite coco; 2 colheres sopa de manteiga; 100g coco
      em flocos;`,
      pseven: `Cozinhe em fogo médio até engrossar. Corte a massa ao meio, recheie molhando a massa com um
      pouco de leite condensado + 50ml de leite, 200ml a primeira e a segunda massa. Cubra a massa
      com um plástico, leve à geladeira por 4 horas.`,
      peight: "COBERTURA",
      pnine: `. 200g de chocolate ao leite; 1 cx de creme de leite;`,
      pten: `. Derreta o chocolate no micro-ondas por 30 segundos, misture o creme de leite e cubra o
      bolo.`,
    },
    {
      id: 25,
      title: "BOLO DE FUBÁ",
      image: "./img/bolofuba-1.jpg",
      p: ". 2 xícaras de fubá; 2 xícaras de farinha de trigo;",
      pone: ". 2 xícaras e meia de açúcar; 1 xícara de óleo;",
      ptwo: ". 1 xícara de leite; 2 ovos;",
      pthree: ". Uma colher de chá bem cheia de fermento.",
      pfour: "MODO DE PREPARO",
      pfive: ` Pré aqueça o forno a 200ºC.
      Misture bem todos os ingredientes, deixando para adicionar o fermento no final. Leve ao
      forno por 40 minutos a 180°C.`,
    },
    {
      id: 26,
      title: "CUCA DA VOVÓ",
      image: "./img/cucavovo.jpg",
      p: "- MASSA;",
      pone: ". 1 copo de leite morno; 1 copo de sopa de fermento de pão;",
      ptwo: ". 3 ovos; 2 xícara de açucar; 3 - 1/2 xícara de farinha de trigo;",
      pthree: ". 2 colheres de sopa de margarina em temperatura ambiente;",
      pfour: "FAROFA",
      pfive: ". 2 xícara de farinha; 2 xícara de açúcar;",
      psix: "MODO DE PREPARO",
      pseven: `Manteiga ou margarina até atingir ponto de farofa.
      Raspa de uma laranja. Misture o leite morno e o fermento e deixe crescer.
      Bata os três ovos e acrescente a mistura, mexer bem.
      Adicione o açúcar e mexer (sempre com uma colher).
      Adicione a margarina até obter uma mistura homogênea.
      Colocando o trigo aos pouco, segredo é mexer sempre com uma colher grande.
      O ponto da massa é quando começa a desgrudar da tigela, mas não totalmente.
      Junte uma forma grande com manteiga e trigo e distribua a massa uniformemente.`,
      peight: "OPCINAL: Recheio de frutas (banana, maça, pessego).",
      pnine: `Coloque o recheio e cubra com a farofa. Deixe crescer por 1 hora e meia ou até dobra de
      tamanho.Coloque ao forno por 45 minutos.`,
    },
    {
      id: 27,
      title: "BOLO DE BANANA FIT",
      image: "./img/bolobanana.png",
      p: ". 3 bananas caturras (2p/ massa e 1p/ colorir o bolo com a calda.);",
      pone: ". 4 ovos; 150g de farinha de aveia; 100ml de leite de coco;",
      ptwo: ". 50g de xilitol; 1 colher de sopa de óleo de coco;",
      pthree: ". 1 colher de canela em pó; 1 medida de fermento;",
      pfour: "MODO DE PREPARO",
      pfive: ` Bata os ovos, o leite de coco e as duas bananas no liquidificador. Acrescente a farinha e a
      bata até ficar homogêneo.
      Acrescente o fermento e misture com uma colher para a calda.
      Leve ao fogo baixo com uma colher de chá de canela.Quando estiver líquido, despeje no fundo
      da forma com a banana picada.
      Leve o bolo p/ assar, forno pré aquecido a 200°, por 35 a 40 minutos. Espere esfriar e
      desenforme ainda morno para a calda não grudar.`,
    },
    {
      id: 28,
      title: "BOLO DE MILHO",
      image: "./img/bolomilho.jpg",
      p: ". 3 ovos; 1 lata de leite condensado; 1 xícara de fubá;",
      pone: ". 3 colheres de sopa de manteiga; 2 latas de milho sem a água;",
      ptwo: ". 1 garrafa de leite de coco; 1 colher de sopa de fermento;",
      pthree: "MODO DE PREPARO",
      pfour: `Bata tudo no liquidificador (Menos o fermento que você adicione no final e mistura c/ a
      collher)
      e leva para assar em forno pré aquecido por 30 a 40 minutos. Pode desenfornar ainda quente.`,
    },
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
                  <p>{revenueSelected.p}</p>
                  <p>{revenueSelected.pone}</p>
                  <p>{revenueSelected.ptwo}</p>
                  <p>{revenueSelected.pthree}</p>
                  <p>{revenueSelected.pfour}</p>
                  <p>{revenueSelected.pfive}</p>
                  <p>{revenueSelected.psix}</p>
                  <p>{revenueSelected.pseven}</p>
                  <p>{revenueSelected.peight}</p>
                  <p>{revenueSelected.pnine}</p>
                  <p>{revenueSelected.pten}</p>
                  <p>{revenueSelected.peleven}</p>
                </div>
              </div>
          </>
        )}
      </div>
    </>
  );
}

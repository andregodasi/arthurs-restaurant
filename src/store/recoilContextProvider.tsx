"use client";

import { RecoilRoot, atom } from "recoil";
export const menuState = atom({
  key: "menuState",
  default: [
    {
      id: 1,
      name: "Energético",
      description:
        "Ricos em carboidratos simples, não possuem fibras e apresentam poucos nutrientes",
      imageSrc:
        "https://static.itdg.com.br/images/1200-630/d042c867d621701a4633d37f9d873bc8/receitas-de-comidas-italianas.jpg",
      imageAlt: "Italiana",
      dishes: [
        {
          id: 1,
          name: "Macarrão",
          description: "Macarrão com molho de tomate",
          imageSrc:
            "https://anoteareceita.com.br/wp-content/uploads/2020/01/receitas-de-macarronada-810x455.jpeg",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://anoteareceita.com.br/wp-content/uploads/2020/01/receitas-de-macarronada-810x455.jpeg",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://anoteareceita.com.br/wp-content/uploads/2020/01/receitas-de-macarronada-1-e1579558840311.jpeg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarronada-2.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://receitinhas.com.br/wp-content/uploads/2023/06/Macarronada.jpg",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "400g de macarrão (escolha o tipo de sua preferência, como espaguete, penne, ou fusilli)",
                "2 colheres de sopa de azeite de oliva",
                "1 cebola média, picada",
                "2 dentes de alho, picados",
                "800g de tomates pelados (em lata) ou 6-8 tomates frescos, sem pele e picados",
                "Sal e pimenta a gosto",
                "1 colher de chá de açúcar (opcional, para equilibrar a acidez dos tomates)",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Cozinhe a massa de acordo com as instruções da embalagem em água salgada. Escorra e reserve.",
                "Em uma panela grande, aqueça o azeite de oliva em fogo médio. Adicione a cebola e o alho, refogue até ficarem dourados.",
                "Adicione os tomates pelados (ou frescos) à panela. Se estiver usando tomates frescos, deixe cozinhando até que eles se desmanchem e formem um molho.",
                "Tempere o molho com sal, pimenta e açúcar (se estiver usando). Se estiver adicionando carne ou frango, adicione nesse momento e cozinhe até que esteja totalmente cozido.",
                "Adicione as ervas frescas (se estiver usando) e deixe o molho apurar por alguns minutos em fogo baixo.",
                "Misture a massa cozida no molho, garantindo que ela fique bem revestida.",
                "Sirva a macarronada quente, polvilhada com queijo parmesão ralado.",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Risoto",
          description: "Risoto de frango",
          imageSrc:
            "https://assets.delirec.com/images%2FeQDBqxbatSc5JplzHuBym5RD3ME3%2Frecipe%2F6dca44c5-3593-45d5-acb0-7c57e255c1fa-Risoto-de-camar%C3%A3o--gallery-0",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://assets.delirec.com/images%2FeQDBqxbatSc5JplzHuBym5RD3ME3%2Frecipe%2F6dca44c5-3593-45d5-acb0-7c57e255c1fa-Risoto-de-camar%C3%A3o--gallery-0",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://www.gntc.com.br/admin/painel/imagens_site/postagens/capa-20220115-093609-821134.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://naoca.blog.br/wp-content/uploads/2023/09/Risoto-de-Frango.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/Risoto-frango.jpg",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "1 xícara de arroz para risoto",
                "1 tablete de caldo de carne",
                "1/2 xícara de vinho branco",
                "1 colher de sopa de requeijão",
                "Queijo ralado",
                "1 litro de água fervente",
                "2 alhos amassados",
                "Champignon picado",
                "2 colheres de manteiga",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Doure o alho em uma colher de manteiga, junte o arroz e deixe refogar um instante.",
                "Coloca o vinho branco e deie ele evaporar.",
                "Coloque aos poucos a água fervida com o caldo de carne, mexendo sempre para não grudar.",
                "Quando o arroz estiver no ponto, mas não totalmente seco, desligue o fogo, coloque a manteiga, o requeijão e o champignon.",
                "Misture levemente.",
                "Polvilhe o queijo ralado e sirva quente.",
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Batata rustica",
          description: "bem temperada e crocante",
          imageSrc:
            "https://receitinhas.com.br/wp-content/uploads/2022/09/Batata-rustica-assada-com-ervas.png",
          imageAlt: "Batata rustica",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://receitinhas.com.br/wp-content/uploads/2022/09/Batata-rustica-assada-com-ervas.png",
              imagealt: "batata rustica",
            },
            {
              id: 2,
              imageSrc:
                "https://blog-obahortifruti.redeoba.com.br/wp-content/uploads/2022/11/260-88_TEXTO-BLOG-EXTRA-BATATAS-FRESCAS-NOV-22-1920X792.jpg",
              imageAlt: "Batata rustica",
            },
            {
              id: 3,
              imageSrc:
                "https://www.kitano.com.br/wp-content/uploads/2019/08/SSP_2160-Legumes-batata-cozida-tomilho-e-cebola-1.jpg",
              imageAlt: "Batata rustica",
            },
            {
              id: 4,
              imageSrc:
                "https://www.confeiteiradesucesso.com/wp-content/uploads/2020/02/receitascombatata.jpg",
              imageAlt: "Batata rustica",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "3 batatas inglesas",
                "3 colheres (sopa) de azeite",
                "Sal e pimenta-do-reino moída a gosto",
                "2 ramos de tomilho",
                "2 ramos de alecrim",
                "2 alhos casca",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Pré-aqueça o forno a 200 °C (temperatura média)",
                "Lave e seque bem as batatas e as ervas",
                "Numa tábua, corte as batatas em gomos;",
                "Transfira os gomos para uma panela, cubra com água e tempere com uma colher (chá) de sal (comum ou grosso)",
                "Leve ao fogo alto e, quando água começar a ferver, deixe cozinhar por cerca de 5 minutos;.",
                "Retire do fogo, passe as batatas para uma peneira e deixe por alguns minutos para escorrer bem a água;.",
                "Transfira para uma assadeira (de preferência antiaderente), junte as ervas, os dentes de alho com casca e regue com o azeite;",
                "Misture bem para envolver as batatas e ervas com o azeite;",
                "Tempere com sal grosso e pimenta-do-reino moída na hora;",
                "Leve ao forno preaquecido para assar por cerca de 40 minutos;",
                "Retire do forno e solte as batatas da assadeira. Prontinho!",
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Pão Recheado",
          description: "com muito recheio e sabor",
          imageSrc:
            "https://static.itdg.com.br/images/auto-auto/267f14deb94fe6c28578495c3bfd806b/pao-recheado.jpg",
          imageAlt: "Batata rustica",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://static.itdg.com.br/images/auto-auto/267f14deb94fe6c28578495c3bfd806b/pao-recheado.jpg",
              imageAlt: "Batata rustica",
            },
            {
              id: 2,
              imageSrc:
                "https://static.itdg.com.br/images/1200-630/29bb34fe6c77a207ef81674db457b268/356804-original.jpg",
              imageAlt: "Batata rustica",
            },
            {
              id: 3,
              imageSrc:
                "https://static.itdg.com.br/images/1200-675/7811a23be27a7b8d8059f9f462ae9b51/216437-original.jpg",
              imageAlt: "Batata rustica",
            },
            {
              id: 4,
              imageSrc:
                "https://static.itdg.com.br/images/360-240/0f3abf95c7338bcecc1f78b53c640e7f/354899-original.jpg",
              imageAlt: "Batata rustica",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "3 ovos",
                "1/2 copo (do de requeijão cremoso) de leite morno",
                "2 tabletes de caldo de galinha",
                "1 sachê de fermento biológico seco/em pó (ou 2 tabletes frescos)",
                "500g de linquiça calabresa",
                "15 azeitonas picadas",
                "1 cebola média",
                "1/2 copo (do de requeijão cremoso) de óleo",
                "1 colher (sopa) rasa de acúçar",
                "1kg de farinha de trigo",
                "3 tomates (italiano) picados",
                "1 gema para pincelar, pimenta, orégano, salsa, cebolinha, sementes de gergelim e papoula (opcional)",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Bater no liquidificador 2 tabletes de caldo de galinha em 1 copo e 1/2 de leite morno",
                "Acrescente 2 tabletes de fermento para pão.",
                "Em seguida os ovos, a cebola, o óleo e o açúcar - se for o fermento biológico seco/em pó, bata no liquificador tudo, exceto a farinha de trigo e o fermento seco, que serão misturados numa bacia junto à parte líquida. Depois, despeje em uma bacia e coloque a farinha até desgrudar dos dedos",
                "Depois que desgrudar das mãos coloque a massa sobre uma banca de granito para sovar (ou qualquer outra parte lisa).",
                "Eu não espero a massa dobrar de volume para abri-la e colocar o recheio, já que a massa é bem fofa. Espero crescer depois - há quem gosta de esperar a massa dobrar de volume para depois rechear.",
                "Em seguida rale (ou processe no multiprocessador) as calabresas e uma cebola. Pique 3 tomates, cebolinha e salsinha (ou coentro), cerca de 15 azeitonas num recipiente à parte e junte a calabresa moída.",
                "Divida a massa em 6 partes (seis pães grandes) e abra, individualmente com um rolo; aplique o recheio sobre a massa aberta (na espessura de uma massa fina de pizza) e enrole (sem apertar) feito um rocambole.",
                "Coloque no tabuleiro já untado, enrole os próximo",
                "Espere crescer antes de levar para assar.",
                "Faça pequenos cortes nos pães, de modo a aparecer o recheio. Se quiser uns pães mais bonitos, é só pincelar com gema e jogar gergelim, sementes de papoula e orégano por cima",
                "Coloque, então, para assar em forno brando.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Construtores",
      description:
        "Ricos em proteínas, têm a função de construir novos tecidos no organismo, como muscular e cicatrização",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0mlmdqxf-LUnZNJJDaTGx46YUOi8QHMqLw&usqp=CAU",
      imageAlt: "Indiana",
      dishes: [
        {
          id: 1,
          name: "feijoada",
          description: "feijoada com arroz e couve",
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgPa3VONa_fajm0glpt-1uwa5pPSuENijDA&usqp=CAU",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc: "https://img.saborosos.com.br/imagens/feijoada-1.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://www.emporiumpax.com.br/wp-content/uploads/2022/01/Receita-de-Feijoada-Completa.webp",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://www.socialbauru.com.br/wp-content/uploads/2019/11/Capa-feijoada-copy-1240x540.png",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PyCSANW61yoo3ac8sK6IGqHLn-6bOHGTyg&usqp=CAU",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "1 kg de feijão preto",
                "2 línguas defumadas ou salgadas",
                "1/2 kg de costelinha de porco salgada",
                "1/2 kg de lingüiça calabresa defumada",
                "1/4 kg de toucinho defumado",
                "1 rabo de porco salgado",
                "3 cebolas cortadas em cubos",
                "4 folhas de louro",
                "1/2 xícara de óleo ou banha de porco",
                "Água o quanto baste",
                "1 kg de carne seca",
                "1/2 kg de lombo de porco salgado",
                "2 paios",
                "2 pés de porco salgados",
                "2 orelhas de porco salgadas",
                "3 dentes de alho picados",
                "Pimenta malagueta amassada (opcional)",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Escolha o feijão e deixe de molho por 12 horas.",
                "Lave bem as carnes salgadas, corte em pedaços e deixe de molho em água por 12 horas, trocando a água pelo menos duas vezes",
                "Coloque o feijão para cozinhar em bastante água com as folhas de louro",
                "Em uma panela à parte, cozinhe por ½ hora as carnes salgadas, escorra a água e reserve",
                "Quando o feijão estiver começando a amolecer, coloque as carnes, a lingüiça e o paio e deixe ferver em fogo brando até estar tudo bem cozido (leva algum tempo: de 2 a 3 horas)",
                "Esquente o óleo ou banha de porco e refogue os temperos",
                "Coloque uma concha do feijão, amasse bem e deixe ferver despeje na feijoada e deixe ferver por mais 30 minutos.",
                "Sirva bem quente acompanhado de couve picada fina e refogada, farinha de mandioca crua, gomos de laranja e uma cerveja bem gelada.",
                "",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Picanha ao Forno",
          description: "bem suculenta e macia",
          imageSrc:
            "https://www.receiteria.com.br/wp-content/uploads/picanha-na-manteiga-730x548.jpeg",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://receitatodahora.com.br/wp-content/uploads/2021/09/picanha-no-forno-scaled.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTwlh5CoFD2D9Oqvq5uyJuHC_pBZ1AKlysLUCIwm3e9Y53Iwi21wiZ7LL5VG4qC5URwg&usqp=CAU",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5CEp3ufwtQgcoE7NM8jQ8JoyYgzm_0Z9-w&usqp=CAU",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKg6I9G0mCNu0-oot5We6yIKit9KHQ7RlCXQ&usqp=CAU",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "1 peça de Picanha com aproximadamente 1 Kg",
                "3 kg de sal grosso",
                "Molho",
                "4 colheres de sopa de manteiga",
                "1 cebola (picada)",
                "4 colheres de sopa de azeite",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Cubra o fundo de uma assadeira com 1 kg do sal grosso. ",
                "Coloque a picanha com a parte da gordura virada para cima. Dica: a picanha pode ser colocada para assar congelada.",
                "Cubra a carne com o restante do sal, não deixando nenhuma parte da carne exposta. ",
                "Leve a assadeira para o forno a 200 graus. ",
                "Retire a camada do sal e corte em fatias",
                "Aqueça a manteiga junto com o azeite em uma frigideira, frite a cebola por alguns instantes e derrame sobre a picanha preparada.",
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Filé de peixe assado",
          description: "muito saboroso",
          imageSrc:
            "https://www.sabornamesa.com.br/media/k2/items/cache/957f68251a4c401eb034febbf0fc418f_XL.jpg",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vR1uxspbHJdh0QAEhnTWeYDFqTWZqIGblQ&usqp=CAU",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://receitinhas.com.br/wp-content/uploads/2017/05/Depositphotos_30751591_original-730x365.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://j6t2y8j5.rocketcdn.me/wp-content/uploads/2022/04/12-receitas-de-peixe-para-a-pascoa-2.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://www.comidaereceitas.com.br/wp-content/uploads/2010/02/Peixe-em-posta-freepik-780x520.jpg",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "500 g de filé de peixe (tilápia, saint peter ou outro)",
                "2 tomates picadinhos",
                "1 cebola média picada em cubos",
                "cheiro-verde a gosto",
                "1/2 colher (sopa) de sal",
                "azeite a gosto",
                "4 batatas grande descascada em rodelas de 0,5 centímetro de espessura",
                "1/2 pimentão(se ele for grande)",
                "1 colher (sopa) cheia de alcaparras",
                "coentro a gosto (opcional)",
                "1 dente de alho (pequeno) bem espremido",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Tempere o filé de peixe com sal e alho e reserve.",
                "Misture o tomate, cebola, pimentão e alcaparras e tempere com um pouco de sal e junte o cheiro verde e coentro. Reseve.",
                "Unte um refratário com azeite, e forre com as batatas cruas.",
                "Cubra as batatas com o peixe e por cima distribua a mistura do tomate. Regue com bastante azeite e leve ao forno por mais ou menos 30 a 40 minutos.",
                "Quando secar o líquido que acumula no fundo da forma quando está assando e ficar dourado está pronto.",
                "Sirva com arroz intergal ou branco, é uma delícia!",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Reguladores",
      description:
        "Regulam e controlam as funções do organismo, mantendo o seu bom funcionamento",
      imageSrc:
        "https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/Principais-frutas-reguladoras.jpg",
      imageAlt: "Brasileira",
      dishes: [
        {
          id: 1,
          name: "Sobremesa de morango",
          description: "muito saborosa",
          imageSrc: "https://i.ytimg.com/vi/D1_2kMz3n2I/sddefault.jpg",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc: "https://i.ytimg.com/vi/D1_2kMz3n2I/sddefault.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://o.imgac.net/receita/sobremesa-de-verao-morango-29582.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://www.receiteria.com.br/wp-content/uploads/sobremesa-de-morango-1.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://superreceitas.com/wp-content/uploads/2022/07/vlcsnap-2022-07-04-16h42m54s514-e1656964769765-1024x618.jpg",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "500 ml de leite",
                "1 caixinha de creme de leite",
                "1 caixinha de morango",
                "1 caixinha de leite condensado",
                "2 colheres de amido de milho",
                "1 pacote de gelatina",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Misture o amido ao leite para não ter perigo de empelotar e coloque em uma panela.",
                "Adicione o creme de leite e o leite condensado com fogo ligado.",
                "Misture até engrosar e deixe por 5 a 10 minutos.",
                "Desligue o fogo. ele não pode ficar muito mole, deixe esfriar por 15 minutos e, ao esfriar, coloque em uma travessar o creme da uma espalhada nele.",
                "Leve a geladeira por cerca de 2 horas pra endurecer um pouquinho.",
                "Coloque os morangos quando tirar a sobremesa da geladeira, um do lado do outro.",
                "Faça a gelatina de acordo com as instruções do pacote e coloque direto na forma.",
                "Leve à geladeira por cerca de 6 horas ou até gelar.",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Salada de frutas gostosa",
          description: "A perfeita combinação de frutas",
          imageSrc:
            "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/Salada-frutas.jpg",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/Salada-frutas.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://s2.glbimg.com/LvTjCfHGfolz62EP2ipIZnZVjSw=/620x455/e.glbimg.com/og/ed/f/original/2019/05/14/salada_de_frutas.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://blog.livup.com.br/wp-content/uploads/2022/01/como-fazer-salada-de-frutas-simples-meio-1160x653.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29bqgpDZCNv6G3pK1xfBxa66PWiEhYY0BCQ&usqp=CAU",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "2 mamões papaia pequenos",
                "5 bananas",
                "5 bananas",
                "10 grãos de uva (qualquer variedade)",
                "10 cubos de gelo",
                "1 laranja média",
                "2 maçãs",
                "1 pêssego",
                "1 caixa leite condensado (opcional)",
                "1/2 colher (sopa) canela em pó",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Pique todos os ingredientes, a laranja em pedaços menores que as outras frutas, depois ela solta o caldo e a salada não fica tão ácida.",
                "Coloque tudo em um prato fundo e adicione o leite condensado (se quiser), a canela em pó e o gelo, mexa por alguns segundos e leve a geladeira por 30 minutos.",
                "Fica uma delícia.",
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Guacamole",
          description: "Um prato da cultura asteca,",
          imageSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZPrh805FLF2ZypETA2NaXIB4usytii_4fA&usqp=CAU",
          imageAlt: "Macarrão",
          allImagens: [
            {
              id: 1,
              imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFP003O6BGFYppQN6qGSyZFFY2hipCyUMU1Q&usqp=CAU",
              imageAlt: "Macarrão",
            },
            {
              id: 2,
              imageSrc:
                "https://mgtnutri.com.br/wp-content/uploads/2017/03/guacamole-recieta-original-e-variacoes.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 3,
              imageSrc:
                "https://bakeandcakegourmet.com.br/uploads/site/receitas/guacamole-qv57ksaa.jpg",
              imageAlt: "Macarrão",
            },
            {
              id: 4,
              imageSrc:
                "https://d21wiczbqxib04.cloudfront.net/6sdC2QMo410EtSKiSUMPrO6YSwM=/730x710/smart/https://osuper-vitrine-carol.s3-sa-east-1.amazonaws.com/1596738817038-guacamole-original.png",
              imageAlt: "Macarrão",
            },
          ],
          details: [
            {
              name: "Ingredientes",
              items: [
                "1 abacate brasileiro médio (ou 4 avocados)",
                "1 cebola pequena",
                "1 maço de coentro",
                "suco de 1 limão grande",
                "sal",
                "1 tomate grande sem sementes",
                "2 dentes de alho bem socado",
                "1 pimenta malagueta sem sementes",
                "azeite extra virgem",
              ],
            },
            {
              name: "Modo de preparo",
              items: [
                "Amasse o abacate com um garfo, acrescente o alho socado, o suco de limão, sal e azeite a gosto e misture como um purê",
                "Pique a cebola, o tomate e o coentro. Pique bem a pimenta",
                "Acrescente os ingredientes picados ao pure de abacate",
                "Sirva com chips, crackers, tacos, no burrito ou mesmo junto com arroz e feijão",
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default function RecoidContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

import {
  closeModal,
  showApresentationModal,
  createModal,
  createRewardModal,
  hiddenObjects,
  playAgain,
  progressBarLoad,
} from "./modais.js";

let progress = 0;

document.addEventListener("DOMContentLoaded", function () {
  const perguntas = [
    {
      pergunta:
        "Hugo conheceu Julia quando ainda eram crianças. Ela era a garota doce da turma, e ele o menino mais descolado. Apesar de estarem na mesma sala, ele demorou a perceber a presença dela.\nEm que momento da vida esse primeiro encontro aconteceu?",
      alternativas: {
        A: "No shopping",
        B: "Na universidade",
        C: "Em um curso de idiomas",
        D: "Na escola, por volta dos 9 anos, no 4º ano",
        E: "Em uma festa de família",
      },
      correta: "D",
    },
    {
      pergunta:
        "Com o tempo, Hugo começou a perceber que havia algo especial entre ele e Julia. Estavam sempre nos mesmos grupos, nos mesmos lugares, com as mesmas brincadeiras. Foi então que ele começou a sentir algo diferente.\nQual foi a principal característica da Julia que mais encantou o Hugo nessa época?",
      alternativas: {
        A: "A habilidade dela em esportes",
        B: "O jeito doce, a parceria, o carisma e o sorriso encantador",
        C: "O gosto musical parecido",
        D: "A inteligência em matemática",
        E: "A timidez e o jeito misterioso",
      },
      correta: "B",
    },
    {
      pergunta:
        "Durante a infância, Hugo era sempre o mais extrovertido entre os amigos. Mas, quando estava perto da Julia, algo mudava.\nO que Hugo sentia quando estava próximo dela?",
      alternativas: {
        A: "Sentia vontade de provocar ela só para chamar atenção",
        B: "Ficava mais calado por não gostar do grupo",
        C: "Ficava tímido e sem jeito, mesmo sendo o mais descolado da turma",
        D: "Evitava contato, achando que ela não o notava",
        E: "Não sentia nada diferente, achava tudo normal",
      },
      correta: "C",
    },
    {
      pergunta:
        "Logo nos primeiros dias de conversa, após anos afastados, Hugo e Julia perceberam que o reencontro estava sendo diferente. As conversas fluíam com leveza e sinceridade.\nO que mais surpreendeu Hugo nesse retorno de contato com Julia?",
      alternativas: {
        A: "O fato de ela ainda lembrar dele",
        B: "A facilidade de falar sobre tudo com maturidade e conexão",
        C: "O quanto ela havia mudado fisicamente",
        D: "A rapidez com que marcaram um encontro",
        E: "Que tinham gostos musicais muito parecidos",
      },
      correta: "B",
    },
    {
      pergunta:
        "Mesmo após o afastamento, Hugo não conseguia esquecê-la. Músicas, séries e até cheiros o faziam lembrar de Julia.\nQual era o detalhe curioso que fazia Hugo lembrar do cheiro da Julia?",
      alternativas: {
        A: "O perfume que ela usava e ele comprou",
        B: "O travesseiro onde ela dormiu uma vez",
        C: "Um sabonete em barra antigo",
        D: "O shampoo da mãe, que tinha o mesmo cheiro dela",
        E: "Um lenço com perfume que ele guardava",
      },
      correta: "D",
    },
    {
      pergunta:
        "Após muitos anos, Julia e Hugo estavam em países diferentes e levavam vidas totalmente distantes. Mas então, algo simples reacendeu a conexão.\nComo se iniciou o reencontro entre eles?",
      alternativas: {
        A: "Hugo sonhou com ela e decidiu procurar",
        B: "Um amigo os reencontrou e fez um grupo com os dois",
        C: "Hugo viu um story dela no Instagram e respondeu",
        D: "Julia curtiu uma foto antiga dele e ele puxou assunto",
        E: "Eles se esbarraram por coincidência em uma viagem",
      },
      correta: "C",
    },
    {
      pergunta:
        "O reencontro reacendeu sentimentos antigos. Em pouco tempo, as conversas ficaram profundas e cheias de sentido.\nQual foi um dos sinais mais claros de que esse reencontro era diferente?",
      alternativas: {
        A: "Eles brigaram menos que no passado",
        B: "Conversaram sobre temas delicados com leveza e maturidade",
        C: "Evitaram falar do que sentiram no passado",
        D: "Mantiveram tudo em segredo absoluto",
        E: "Demoraram meses para admitir que ainda se gostavam",
      },
      correta: "B",
    },
    {
      pergunta:
        "A diferença de fuso horário não impediu o carinho. Mesmo com 5 horas de diferença, as mensagens iam do bom dia ao boa noite.\nO que Hugo decidiu fazer para se aproximar ainda mais da Julia?",
      alternativas: {
        A: "Começou a gravar vídeos todos os dias",
        B: "Começou a aprender italiano por conta dela",
        C: "Comprou uma passagem e foi até ela",
        D: "Criou um blog secreto para ela",
        E: "Mandava presentes todos os meses",
      },
      correta: "B",
    },
    {
      pergunta:
        "Mesmo com a distância e sem nada oficializado de imediato, Hugo sentia algo muito forte desde o reencontro com Julia.\nQual foi o sentimento que tomou conta dele logo nos primeiros dias de conversa?",
      alternativas: {
        A: "Medo de se iludir novamente",
        B: "Insegurança com a distância",
        C: "Vontade de contar ao mundo que tinha reencontrado o amor da vida dele",
        D: "Ciúmes da nova rotina dela",
        E: "Dúvida se o sentimento era recíproco",
      },
      correta: "C",
    },
    {
      pergunta:
        "Hoje, mesmo longe fisicamente, o relacionamento de vocês se tornou algo muito maior do que simples saudade.\nComo Hugo define esse novo capítulo da vida ao lado da Julia?",
      alternativas: {
        A: "Um desafio cheio de obstáculos",
        B: "Um reencontro ainda incerto",
        C: "Uma aventura sem promessas",
        D: "Um relacionamento leve, apaixonado, fiel e baseado na lealdade",
        E: "Uma segunda chance que ainda precisa ser testada",
      },
      correta: "D",
    },
  ];

  createModal("apresentation");
  showApresentationModal();
  closeModal();

  let index = 0;
  let count = 0;

  function pegarPerguntas() {
    const q = perguntas[index];
    document.getElementById("perguntasA").innerText = q.pergunta;

    const questionNumber = document.getElementById("questionNumber");
    questionNumber.innerText = index + 1;

    const answer = document.querySelectorAll(".option-text");
    const list = ["A", "B", "C", "D", "E"];
    let letters = 0;
    answer.forEach((span) => {
      let op = list[letters];
      span.innerText = q.alternativas[op];
      letters++;
    });

    progressBarLoad(progress);
    progress += 10;
  }

  // Seleciona, desseleciona e verifica se a resposta está correta
  const circles = document.querySelectorAll(".circle");
  let selectedLetter = null;
  let rightAnswer = null;

  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      // Remove a seleção anterior
      circles.forEach((c) => {
        c.classList.remove("wrong");
        c.classList.remove("right");
      });

      // Salvar ou verificar
      selectedLetter = circle.textContent;

      if (selectedLetter === perguntas[index].correta) {
        circle.classList.add("right");
        circle.classList.remove("wrong");
        rightAnswer = false;
      } else {
        circle.classList.add("wrong");
        circle.classList.remove("right");
        rightAnswer = true;
      }
    });
  });

  // Chama a próxima pergunta
  function proximaPergunta() {
    if (!selectedLetter || rightAnswer) {
      alert("Ops!! Selecione a alternativa correta.");
    } else {
      index++;
      count++;
      if (index < perguntas.length) {
        circles.forEach((circle) => {
          circle.classList.remove("right");
          circle.classList.remove("wrong");
        });
        selectedLetter = null;

        showRewards();

        pegarPerguntas();
      } else {
        progress += 10;
        progressBarLoad(progress);
        hiddenObjects();
        createModal("gameOver");
        showApresentationModal();
        playAgain();
      }
    }
  }

  const proxima = document.getElementById("proxima");
  proxima.addEventListener("click", proximaPergunta);

  const desistir = document.getElementById("desistir");
  desistir.addEventListener("click", () => {
    hiddenObjects();
    createModal("giveUp");
    showApresentationModal();
    closeModal();
  });

  // Mostra o modal de rewards
  function showRewards() {
    if (count % 2 == 0 && count < 10 && count > 0) {
      hiddenObjects();
    }
    switch (count) {
      case 2:
        createRewardModal("firstReward");
        showApresentationModal();
        closeModal();
        break;
      case 4:
        createRewardModal("secondReward");
        showApresentationModal();
        closeModal();
        break;
      case 6:
        createRewardModal("thirdReward");
        showApresentationModal();
        closeModal();
        break;
      case 8:
        createRewardModal("fourthReward");
        showApresentationModal();
        closeModal();
        break;
    }
  }

  pegarPerguntas();
});

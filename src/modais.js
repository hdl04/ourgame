const overlay = document.getElementById("modal-overlay");
const modalContainer = document.getElementById("modal-container");
const progressBar = document.getElementById("progressBar");

const modalTypes = {
  apresentation: `<div id="modalApresentacao">
        <h2 id="h2Modal">Buon compleanno, amore mio</h2>
        <p class="pModal">Então, meu amor, mais um presentinho só que dessa vez um pouco diferente. No último presente você achou que fosse ser algo mais interativo e, pensando nisso, dessa vez, trouxe um joguinho de perguntas e respostas sobre a nossa história. Algo simples, nada muito difícil. Espero que goste! Te amo infinito infinitado.</p>
        <img id="imgCoracao" src="/imgs/coracaoCartas.png" alt="" />
        <button id="btnModal">Começar</button>
      </div>`,

  giveUp: `<div id="modalApresentacao">
        <h2 class="h2GiveUp">Acesso negado!</h2>
        <p><span class="spanGiveUp">Não dá para desistir de nós!</span></p>
        <img id="imgCoracao" src="/imgs/desistir.png" alt="" />
        <button id="btnModal">Continuar</button>
      </div>`,

  gameOver: `<div id="modalApresentacao">
        <h2 class="h2GiveUp">Complimenti, amore mio!</h2>
        <p class="pModal">Chegamos ao fim da nossa brincadeira, princesa. Espero de verdade que você tenha curtido brincar e que tenha achado divertido. Fiz do jeitinho que eu disse: um presente diferente, fora da caixinha. Isso tudo para garantir que fosse algo único e especial que nem você é para mim. <span id="sLove">Eu te amo mais do que a expansão do universo!</span></p>
        <p class="pModal">É o fim, mas ainda não acabou. Agora, como não poderia faltar, você deve entrar lá no nosso cantinho e baixar a cartinha de aniversário que estava sendo escrita.</p>
        
        <button id="btnCantinho"><a href="https://hdl04.github.io/valentines/" target="_blank">Ir para o nosso cantinho</a></button>
      </div>`,
};

const rewardsModals = {
  firstReward: `<div id="modalApresentacao">
        <h2 id="h2Modal">Ecco il tuo primo regalo</h2>
        <p class="pModal"">Tu não achou que o presente seria só esse joguinho, né? Claro que não! Aqui vai o primeiro presentinho que eu separei, espero que goste e aconselho o seu uso sem moderação. O jogo está só começando, o que será que ainda vem por ai?</p>
        <img id="imgModal" src="/imgs/valeBeijinhos.png" alt="" />
        <button id="btnModal">Continuar</button>
      </div>`,

  secondReward: `<div id="modalApresentacao">
        <h2 id="h2Modal">Ecco il tuo secondo regalo</h2>
        <p class="pModal">Opaaa, mais um presentinho! A gente já falou tanto sobre esse jantarzinho né? Esse vai ser para quando estivermos juntinhos finalmente.</p>
        <img id="imgModal" src="/imgs/valeJantar.png" alt="" />
        <button id="btnModal">Continuar</button>
      </div>`,

  thirdReward: `<div id="modalApresentacao">
        <h2 id="h2Modal">Ecco il tuo terzo regalo</h2>
        <p class="pModal">Ta chegando ao fim mas ainda não acabou! Toma mais um presentinho para usar sem moderação. Esse eu fiz para ser usado sempre que quiser porque eu nem imagino o quanto deve ser cansativo ser esse mulherão todo que você é!</p>
        <img id="imgModal" src="/imgs/valeMassagem.png" alt="" />
        <button id="btnModal">Continuar</button>
      </div>`,

  fourthReward: `<div id="modalApresentacao">
        <h2 id="h2Modal">Ecco il tuo quarto  regalo</h2>
        <p class="pModal">Ganhou mais um! Esse vale uma noitinha mais que especial com vários filminhos, pipoca, docinhos, várias besteiras para a gente curtir e ficar agarradinhos. Agora só precisamos montar nossa playlist de filmes.</p>
        <img id="imgModal" src="/imgs/valeFilmes.png" alt="" />
        <button id="btnModal">Continuar</button>
      </div>`,
};

export function backgroundClickHandler() {
  overlay.classList.remove("open");
}

export function showApresentationModal() {
  overlay.classList.add("open");
}

export function createModal(type) {
  const content = modalTypes[type];
  modalContainer.innerHTML = content;
}

export function createRewardModal(type) {
  const content = rewardsModals[type];
  modalContainer.innerHTML = content;
}

export function closeModal() {
  const btnModal = document.getElementById("btnModal");
  btnModal.addEventListener("click", () => {
    const apagados = document.querySelectorAll(".apagados");
    apagados.forEach((a) => {
      a.classList.remove("apagados");
    });

    backgroundClickHandler();
  });
}

export function hiddenObjects() {
  const apagados = document.querySelectorAll(".ligados");
  apagados.forEach((a) => {
    a.classList.add("apagados");
  });
}

export function playAgain() {
  const btnPlayAgain = document.getElementById("btnCantinho");
  btnPlayAgain.addEventListener("click", () => {
    setTimeout(() => {
      location.reload();
    }, 1000);
  });
}

export function progressBarLoad(progress) {
  progressBar.style.width = progress + "%";
}

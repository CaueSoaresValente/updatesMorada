/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Função para inicializar o AOS
function aosInit() {
    AOS.init({
        duration: 600,   // Duração da animação
        easing: 'ease-in-out',  // Tipo de easing
        once: true,  // A animação ocorre uma vez, mesmo ao rolar a página
        mirror: false  // Impede que a animação aconteça ao rolar para cima
    });
}

// Executa a função de inicialização quando o conteúdo estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    aosInit();
});

const imagens = [
  "assets/slide1.png",
  "assets/slide2.png",
  "assets/slide3.png",
  "assets/imagemdefrente.png",
  "assets/imagemmaeealex.jpg",
  "assets/img_frente.png",
  "assets/proprietarios.png"
];

let indiceAtual = 0;
let loteAtual = 0;
const tamanhoLote = 3;

function carregarMais() {
  const galeria = document.getElementById("galeria");
  const inicio = loteAtual * tamanhoLote;
  const fim = inicio + tamanhoLote;

  for (let i = inicio; i < fim && i < imagens.length; i++) {
    const img = document.createElement("img");
    img.src = imagens[i];
    img.alt = "Foto " + (i + 1);
    img.className = "img-galeria";
    img.setAttribute("data-aos", "fade-up");
    img.onclick = () => abrirModal(i);
    galeria.appendChild(img);
  }

  AOS.refresh(); // Reativa as animações para os novos elementos

  loteAtual++;
  if (loteAtual * tamanhoLote >= imagens.length) {
    document.querySelector(".mais-fotos").style.display = "none";
  }
}

function abrirModal(indice) {
  indiceAtual = indice;
  const modal = document.getElementById("modalGaleria");
  const imagemModal = document.getElementById("imagemModal");

  imagemModal.src = imagens[indice];
  modal.style.display = "flex"; // ← Aqui deve ser "flex" (não block)
  void modal.offsetWidth;
  modal.classList.add("show");
}


function fecharModal() {
  const modal = document.getElementById("modalGaleria");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function mudarImagem(direcao) {
  indiceAtual += direcao;
  if (indiceAtual < 0) indiceAtual = imagens.length - 1;
  if (indiceAtual >= imagens.length) indiceAtual = 0;
  document.getElementById("imagemModal").src = imagens[indiceAtual];
}

window.addEventListener("keydown", function (e) {
  const modal = document.getElementById("modalGaleria");
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") mudarImagem(-1);
    else if (e.key === "ArrowRight") mudarImagem(1);
    else if (e.key === "Escape") fecharModal();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  carregarMais(); // Carrega o primeiro lote automaticamente
});

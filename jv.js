const botaoMenu = document.querySelector('.menuBotao');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

// Fecha o menu ao clicar em qualquer link dentro dele
menu.addEventListener('click', (evento) => {
  if (evento.target.tagName === 'A') {
    menu.classList.remove('aberto');
  }
});

// 1. Seleciona todos os blocos de conteúdo que devem "aparecer" ao rolar
const elementosParaRevelar = document.querySelectorAll(
  '#dor h2, .dores, .se, #professor h1, #professor img, #professor iframe, ' +
  '#professor > p, .dores2, #conteudo h1, #conteudo > p, .conteudo, ' +
  '#publico h2, .publicoAlvo, #comoFunciona h2, .publicoAlvo2, ' +
  '#oferta h2, .ofertaConteudo, .preco, #faq h2, .faqSubtitulo, ' +
  'details, .footerContainer > *'
);

// 2. Marca cada um deles com a classe "reveal" (que começa invisível no CSS)
elementosParaRevelar.forEach((elemento) => {
  elemento.classList.add('reveal');
});

// 3. Cria o observador: ele vai "vigiar" cada elemento e nos avisar
//    quando ele entrar na tela
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target); // já apareceu, para de vigiar
      }
    });
  },
  { threshold: 0.15 } // dispara quando 15% do elemento já está visível
);

// 4. Manda o observador vigiar cada elemento marcado
elementosParaRevelar.forEach((elemento) => observador.observe(elemento));
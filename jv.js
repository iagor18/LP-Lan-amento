const elementosParaRevelar = document.querySelectorAll(
    '#dor h2, ' +
    '.dores, ' +
    '.se, ' +

    '#conteudo h2, ' +
    '.conteudo, ' +

    '#publico h2, ' +
    '.publicoAlvo, ' +

    '#professor h2, ' +
    '#professor img, ' +
    '#professor > p, ' +

    '#comoFunciona h2, ' +
    '.publicoAlvo2, ' +

    '#oferta h2, ' +
    '.ofertaConteudo, ' +
    '.preco, ' +

    '#faq h2, ' +
    '.faqSubtitulo, ' +
    'details, ' +

    '.footerContainer > *'
);


elementosParaRevelar.forEach((elemento) => {

    elemento.classList.add('reveal');

});


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add('visivel');

                observador.unobserve(
                    entrada.target
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementosParaRevelar.forEach((elemento) => {

    observador.observe(elemento);

});
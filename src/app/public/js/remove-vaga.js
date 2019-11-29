let tabelaVagas = document.querySelector('#vagas');
tabelaVagas.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    let vardebug = elementoClicado.dataset.type;
    console.log(vardebug);
    //debugger;

    if (elementoClicado.dataset.type == 'remocao') {
        let vagaId = elementoClicado.dataset.ref;
        console.log(vagaId);
        fetch(`http://localhost:3000/vagas/${vagaId}`, { method: 'DELETE' })
            .then(resposta => {
                let tr = elementoClicado.closest(`#vaga_${vagaId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));

    }

});
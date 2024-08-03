console.log('nokturnalplague');

    let meses = document.querySelectorAll('.janeiro, .fevereiro, .marco, .abril, .maio, .junho, .julho, .agosto, .setembro, .outubro, .novembro, .dezembro');
    let nomeMeses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

meses.forEach(function(mes){
    let dias = mes.querySelector('.dias');
    let nomeMes = mes.classList[1];
    let diasDaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    let anoSpan = document.getElementById('ano');
    let anoAtual = new Date().getFullYear(); // ano atual
    let primeiroDia = new Date(anoAtual, nomeMeses.indexOf(nomeMes), 1); // primeiro dia do mês
    let primeiroDiaDaSemana = primeiroDia.getDay(); // dia da semana do primeiro dia do mês

    console.log("O ano atual é "+anoAtual);
    console.log("O primeiro dia do mês é "+primeiroDia);
    console.log("O primeiro dia da semana é "+primeiroDiaDaSemana);

    //Ano atual
    anoSpan.textContent = anoAtual;

    // Ajusta para considerar que a semana começa no domingo (0)
    primeiroDiaDaSemana = (primeiroDiaDaSemana === 0) ? 7 : primeiroDiaDaSemana;

    // Adiciona os espaços em branco para alinhar o primeiro dia do mês
    for(let i = 1; i < primeiroDiaDaSemana; i++){
        dias.innerHTML += '<span></span>';
    }

    // Adiciona os números dos dias
    for(let i = 1; i <= new Date(anoAtual, nomeMeses.indexOf(nomeMes) + 1, 0).getDate(); i++){
        dias.innerHTML += '<span>' + i + '</span>';
        if((primeiroDiaDaSemana + i - 1) % 7 === 0){ // Adiciona quebra de linha após cada sétimo dia
            dias.innerHTML += '<br>';
        }
    }
});

function obterCadastrosLocais() {

    try {

        const dadosSalvos =
            localStorage.getItem(
                CHAVE_CADASTROS
            );

        if (!dadosSalvos) {
            return [];
        }

        const dadosConvertidos =
            JSON.parse(
                dadosSalvos
            );

        return Array.isArray(
            dadosConvertidos
        )
            ? dadosConvertidos
            : [];

    } catch (erro) {

        console.error(
            'Não foi possível recuperar os cadastros locais.',
            erro
        );

        return [];
    }
}


function salvarCadastroLocal(cadastro) {

    const cadastros =
        obterCadastrosLocais();

    cadastros.push(
        cadastro
    );

    try {

        localStorage.setItem(
            CHAVE_CADASTROS,
            JSON.stringify(
                cadastros
            )
        );

        return true;

    } catch (erro) {

        console.error(
            'Não foi possível salvar o cadastro no navegador.',
            erro
        );

        return false;
    }
}


function formatarDataCadastro(dataISO) {

    if (
        typeof dayjs === 'function' &&
        dayjs(dataISO).isValid()
    ) {

        return dayjs(dataISO)
            .format(
                'DD/MM/YYYY HH:mm'
            );
    }

    const dataCadastro =
        new Date(
            dataISO
        );

    if (
        !Number.isNaN(
            dataCadastro.getTime()
        )
    ) {

        return dataCadastro
            .toLocaleString(
                'pt-BR'
            );
    }

    return 'Data não disponível';
}


function renderizarHistoricoLocal() {

    const formulario =
        document.getElementById(
            'form-participacao'
        );

    if (!formulario) {
        return;
    }


    let historico =
        document.getElementById(
            'historico-local'
        );


    if (!historico) {

        historico =
            document.createElement(
                'section'
            );

        historico.id =
            'historico-local';

        historico.setAttribute(
            'aria-live',
            'polite'
        );

        formulario.insertAdjacentElement(
            'afterend',
            historico
        );
    }


    historico.textContent = '';


    const titulo =
        document.createElement(
            'h2'
        );

    titulo.textContent =
        'Participações salvas neste navegador';

    historico.appendChild(
        titulo
    );


    const cadastros =
        obterCadastrosLocais();


    if (cadastros.length === 0) {

        const mensagem =
            document.createElement(
                'p'
            );

        mensagem.textContent =
            'Nenhuma participação foi armazenada até o momento.';

        historico.appendChild(
            mensagem
        );

        return;
    }


    cadastros
        .slice()
        .reverse()
        .forEach(cadastro => {

            const card =
                document.createElement(
                    'article'
                );


            const nome =
                document.createElement(
                    'h3'
                );

            nome.textContent =
                cadastro.nome;


            const local =
                document.createElement(
                    'p'
                );

            local.textContent =
                `Localidade: ${cadastro.cidade} - ${cadastro.estado}`;


            const participacao =
                document.createElement(
                    'p'
                );

            participacao.textContent =
                'Participação: ' +
                (
                    nomesParticipacao[
                        cadastro.participacao
                    ] ||
                    cadastro.participacao
                );


            const data =
                document.createElement(
                    'p'
                );

            data.textContent =
                'Registrado em: ' +
                formatarDataCadastro(
                    cadastro.criadoEm
                );


            card.append(
                nome,
                local,
                participacao,
                data
            );


            historico.appendChild(
                card
            );
        });
}
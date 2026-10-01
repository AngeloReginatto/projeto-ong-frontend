const templates = {

    inicio: `
        <section>

            <h2>Quem Somos</h2>

            <picture>

                <source
                    srcset="../imagens/ong-voluntariado.png"
                    type="image/png">

                <img
                    src="../imagens/ong-voluntariado.jpg"
                    alt="Ilustração de pessoas voluntárias reunidas em uma ação social">

            </picture>

            <p>
                Somos uma organização dedicada ao desenvolvimento de ações
                sociais e projetos que buscam contribuir para a melhoria da
                qualidade de vida da comunidade.
            </p>

        </section>


        <section>

            <h2>Nossa Missão</h2>

            <p>
                Nossa missão é promover ações solidárias, incentivar o
                voluntariado e aproximar pessoas interessadas em contribuir
                para o desenvolvimento social.
            </p>

        </section>


        <section>

            <h2>Entre em Contato</h2>

            <address>

                <p>
                    E-mail:
                    <a href="mailto:angelo@reginatto.com">
                        angelo@reginatto.com
                    </a>
                </p>

                <p>
                    Telefone:
                    <a href="tel:+5551999999999">
                        (51) 99999-9999
                    </a>
                </p>

                <p>
                    Endereço: Rua Exemplo, 100 - Centro
                </p>

            </address>

        </section>
    `,


    projetos: `
        <section>

            <h2>Apresentação dos projetos sociais</h2>

            <picture>

                <source
                    srcset="../imagens/ong-voluntariado.png"
                    type="image/png">

                <img
                    src="../imagens/ong-voluntariado.jpg"
                    alt="Ilustração de pessoas voluntárias reunidas em uma ação social">

            </picture>

            <p>
                Nossos projetos buscam atender necessidades da comunidade
                por meio de campanhas solidárias, arrecadações e ações
                de voluntariado.
            </p>

        </section>


        <section class="area-alertas">

            <h2>Atualizações dos projetos</h2>

            <div
                class="alerta alerta-informacao"
                role="status">

                <strong>Informação:</strong>
                A campanha de arrecadação está recebendo novas doações.

            </div>


            <div
                class="alerta alerta-sucesso"
                role="status">

                <strong>Projeto ativo:</strong>
                As inscrições para trabalho voluntário estão abertas.

            </div>

        </section>


        <section id="campanhas">

            <h2>Campanhas de doação</h2>

            <div data-lista-projetos="campanhas"></div>

        </section>


        <section id="voluntariado">

            <h2>Oportunidades de voluntariado</h2>

            <div data-lista-projetos="voluntariado"></div>

        </section>


        <section>

            <h2>Como participar</h2>

            <p>
                Para contribuir financeiramente ou realizar trabalho
                voluntário, acesse o cadastro e informe seus dados e
                sua forma de participação.
            </p>

            <p>
                <a href="#cadastro">
                    Acessar cadastro de participação
                </a>
            </p>

        </section>


        <div
            class="toast toast-sucesso"
            role="status"
            aria-live="polite">

            <strong>
                Participação disponível
            </strong>

            <span>
                Cadastre-se para colaborar com nossos projetos.
            </span>

        </div>
    `,


    cadastro: `
        <section>

            <h2>Formulário de participação</h2>

            <form
                id="form-participacao"
                action="#"
                method="post"
                novalidate>


                <fieldset>

                    <legend>Dados pessoais</legend>


                    <p>

                        <label for="nome">
                            Nome completo:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autocomplete="name"
                            required>

                    </p>


                    <p>

                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            inputmode="numeric"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            title="Digite o CPF no formato 000.000.000-00"
                            required>

                    </p>


                    <p>

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required>

                    </p>


                    <p>

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autocomplete="tel"
                            pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                            placeholder="(51) 99999-9999"
                            title="Digite o telefone no formato (00) 00000-0000"
                            required>

                    </p>


                    <p>

                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            autocomplete="bday"
                            required>

                    </p>

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>


                    <p>

                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            inputmode="numeric"
                            pattern="[0-9]{5}-[0-9]{3}"
                            placeholder="00000-000"
                            title="Digite o CEP no formato 00000-000"
                            autocomplete="postal-code"
                            required>

                    </p>


                    <p>

                        <label for="endereco">
                            Endereço:
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            autocomplete="address-line1"
                            required>

                    </p>


                    <p>

                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            autocomplete="address-level2"
                            required>

                    </p>


                    <p>

                        <label for="estado">
                            Estado (UF):
                        </label>

                        <input
                            type="text"
                            id="estado"
                            name="estado"
                            maxlength="2"
                            pattern="[A-Za-z]{2}"
                            title="Digite a sigla do estado com duas letras"
                            autocomplete="address-level1"
                            required>

                    </p>

                </fieldset>


                <fieldset>

                    <legend>
                        Forma de participação
                    </legend>


                    <p>

                        <input
                            type="radio"
                            id="voluntariado"
                            name="participacao"
                            value="voluntariado"
                            required>

                        <label for="voluntariado">
                            Trabalho voluntário
                        </label>

                    </p>


                    <p>

                        <input
                            type="radio"
                            id="doacao"
                            name="participacao"
                            value="doacao">

                        <label for="doacao">
                            Contribuição financeira
                        </label>

                    </p>


                    <p>

                        <input
                            type="radio"
                            id="ambos"
                            name="participacao"
                            value="ambos">

                        <label for="ambos">
                            Ambos
                        </label>

                    </p>

                </fieldset>


                <p>

                    <button type="submit">
                        Enviar cadastro
                    </button>

                </p>

            </form>

        </section>
    `
};


/* =========================================================
   GERAÇÃO DINÂMICA DOS PROJETOS
   ========================================================= */

function gerarBadges(badges) {

    return badges
        .map(
            badge => `
                <span class="badge ${badge.classe}">
                    ${badge.texto}
                </span>
            `
        )
        .join('');
}


function gerarItens(itens) {

    return itens
        .map(
            item => `
                <li>
                    ${item}
                </li>
            `
        )
        .join('');
}


function gerarCardProjeto(projeto) {

    return `
        <article>

            <h3>
                ${projeto.titulo}
            </h3>

            <div class="badges-projeto">
                ${gerarBadges(projeto.badges)}
            </div>

            <p>
                ${projeto.descricao}
            </p>

            <ul>
                ${gerarItens(projeto.itens)}
            </ul>

        </article>
    `;
}


function renderizarProjetos() {

    const containers =
        document.querySelectorAll(
            '[data-lista-projetos]'
        );

    containers.forEach(container => {

        const categoria =
            container.dataset.listaProjetos;

        const projetosDaCategoria =
            projetosSociais.filter(
                projeto =>
                    projeto.categoria === categoria
            );

        container.innerHTML =
            projetosDaCategoria
                .map(gerarCardProjeto)
                .join('');
    });
}
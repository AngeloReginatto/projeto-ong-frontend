const app =
    document.getElementById(
        'app'
    );

/* =========================================================
   TEMA CLARO E ESCURO
   ========================================================= */

const botaoTema =
    document.getElementById(
        'alternar-tema'
    );


const preferenciaTemaSistema =
    window.matchMedia(
        '(prefers-color-scheme: dark)'
    );


const temaSalvo =
    localStorage.getItem(
        'tema'
    );


if (
    temaSalvo === 'claro' ||
    temaSalvo === 'escuro'
) {

    document.documentElement
        .setAttribute(
            'data-tema',
            temaSalvo
        );
}


function obterTemaAtual() {

    const temaManual =
        document.documentElement
            .getAttribute(
                'data-tema'
            );


    if (
        temaManual === 'claro' ||
        temaManual === 'escuro'
    ) {

        return temaManual;
    }


    return preferenciaTemaSistema.matches
        ? 'escuro'
        : 'claro';
}


function atualizarBotaoTema() {

    if (!botaoTema) {
        return;
    }


    const temaAtual =
        obterTemaAtual();


    if (temaAtual === 'escuro') {

        botaoTema.textContent =
            'Tema claro';

        botaoTema.setAttribute(
            'aria-label',
            'Ativar tema claro'
        );

    } else {

        botaoTema.textContent =
            'Tema escuro';

        botaoTema.setAttribute(
            'aria-label',
            'Ativar tema escuro'
        );
    }
}


if (botaoTema) {

    atualizarBotaoTema();


    botaoTema.addEventListener(
        'click',
        () => {

            const temaAtual =
                obterTemaAtual();


            const novoTema =
                temaAtual === 'escuro'
                    ? 'claro'
                    : 'escuro';


            document.documentElement
                .setAttribute(
                    'data-tema',
                    novoTema
                );


            localStorage.setItem(
                'tema',
                novoTema
            );


            atualizarBotaoTema();
        }
    );
}


preferenciaTemaSistema.addEventListener(
    'change',
    () => {

        const preferenciaSalva =
            localStorage.getItem(
                'tema'
            );


        if (
            preferenciaSalva !== 'claro' &&
            preferenciaSalva !== 'escuro'
        ) {

            atualizarBotaoTema();
        }
    }
);

/* =========================================================
   ROTEAMENTO DA SPA
   ========================================================= */

function obterRota() {

    const hash =
        window.location.hash
            .replace('#', '');

    if (!hash) {

        return {
            pagina: 'inicio',
            ancora: null
        };
    }


    const partes =
        hash.split('/');


    return {
        pagina: partes[0],
        ancora: partes[1] || null
    };
}


/* =========================================================
   RENDERIZAÇÃO DA SPA
   ========================================================= */

function renderizarRota() {

    if (!app) {
        return;
    }


    const rota =
        obterRota();


    const pagina =
        templates[rota.pagina]
            ? rota.pagina
            : 'inicio';


    app.innerHTML =
        templates[pagina];


    if (
        pagina === 'projetos'
    ) {

        renderizarProjetos();
    }


    if (
        pagina === 'cadastro'
    ) {

        renderizarHistoricoLocal();
    }


    const menuToggle =
        document.getElementById(
            'menu-toggle'
        );


    if (menuToggle) {

        menuToggle.checked =
            false;
    }


    if (rota.ancora) {

        requestAnimationFrame(
            () => {

                const destino =
                    document.getElementById(
                        rota.ancora
                    );

                if (destino) {

                    destino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

            }
        );

    } else {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/* =========================================================
   ACESSIBILIDADE DO SUBMENU
   ========================================================= */

const submenuTrigger =
    document.querySelector(
        '.submenu-trigger'
    );

const itemSubmenu =
    submenuTrigger?.closest(
        '.tem-submenu'
    );


if (
    submenuTrigger &&
    itemSubmenu
) {

    submenuTrigger.addEventListener(
        'click',
        () => {

            const aberto =
                itemSubmenu.classList.toggle(
                    'submenu-aberto'
                );

            submenuTrigger.setAttribute(
                'aria-expanded',
                String(aberto)
            );
        }
    );


    itemSubmenu.addEventListener(
        'focusout',
        event => {

            if (
                !itemSubmenu.contains(
                    event.relatedTarget
                )
            ) {

                itemSubmenu.classList.remove(
                    'submenu-aberto'
                );

                submenuTrigger.setAttribute(
                    'aria-expanded',
                    'false'
                );
            }
        }
    );
}

/* =========================================================
   NAVEGAÇÃO DA SPA
   ========================================================= */

document.addEventListener(
    'click',
    event => {

        if (
            !(
                event.target
                instanceof Element
            )
        ) {
            return;
        }


        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) {
            return;
        }


        const destino =
            link.getAttribute(
                'href'
            );


        if (
            !destino ||
            destino === '#'
        ) {
            return;
        }


        /* Link de salto para o conteúdo principal */
        if (destino === '#app') {

            event.preventDefault();

            if (app) {
                app.focus();

                app.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            return;
        }


        event.preventDefault();


        if (
            window.location.hash
            === destino
        ) {

            renderizarRota();

        } else {

            window.location.hash =
                destino;
        }
    }
);


/* =========================================================
   EVENTOS DO FORMULÁRIO
   ========================================================= */

if (app) {

    /* Validação durante a digitação */

    app.addEventListener(
        'input',
        event => {

            if (
                !(
                    event.target
                    instanceof Element
                )
            ) {
                return;
            }


            const campo =
                event.target.closest(
                    '#form-participacao input:not([type="radio"])'
                );


            if (!campo) {
                return;
            }


            campo.dataset.interagido =
                'true';


            validarCampo(
                campo
            );
        }
    );


    /* Alterações de campos */

    app.addEventListener(
        'change',
        event => {

            if (
                !(
                    event.target
                    instanceof Element
                )
            ) {
                return;
            }


            const formulario =
                event.target.closest(
                    '#form-participacao'
                );


            if (!formulario) {
                return;
            }


            if (
                event.target.matches(
                    'input[name="participacao"]'
                )
            ) {

                validarParticipacao(
                    formulario
                );
            }


            if (
                event.target.matches(
                    'input[type="date"]'
                )
            ) {

                validarCampo(
                    event.target
                );
            }
        }
    );


    /* Envio do formulário */

    app.addEventListener(
        'submit',
        event => {

            const formulario =
                event.target;


            if (
                !(
                    formulario
                    instanceof HTMLFormElement
                )
            ) {
                return;
            }


            if (
                !formulario.matches(
                    '#form-participacao'
                )
            ) {
                return;
            }


            event.preventDefault();


            const campos =
                formulario.querySelectorAll(
                    'input:not([type="radio"])'
                );


            let formularioValido =
                true;


            campos.forEach(
                campo => {

                    const valido =
                        validarCampo(
                            campo
                        );


                    if (!valido) {

                        formularioValido =
                            false;
                    }
                }
            );


            const participacaoValida =
                validarParticipacao(
                    formulario
                );


            if (!participacaoValida) {

                formularioValido =
                    false;
            }


            if (!formularioValido) {

                mostrarFeedbackFormulario(
                    formulario,
                    'Existem informações inválidas. Revise os campos destacados antes de enviar.',
                    'erro'
                );


                const primeiroErro =
                    formulario.querySelector(
                        '.campo-erro, fieldset.grupo-erro input[type="radio"]'
                    );


                if (primeiroErro) {

                    primeiroErro.focus();
                }


                return;
            }


            const participacaoSelecionada =
                formulario.querySelector(
                    'input[name="participacao"]:checked'
                );


            const cadastroLocal = {

                nome:
                    formulario
                        .querySelector(
                            '#nome'
                        )
                        .value
                        .trim(),

                cidade:
                    formulario
                        .querySelector(
                            '#cidade'
                        )
                        .value
                        .trim(),

                estado:
                    formulario
                        .querySelector(
                            '#estado'
                        )
                        .value
                        .trim()
                        .toUpperCase(),

                participacao:
                    participacaoSelecionada
                        .value,

                criadoEm:
                    new Date()
                        .toISOString()
            };


            const salvou =
                salvarCadastroLocal(
                    cadastroLocal
                );


            if (!salvou) {

                mostrarFeedbackFormulario(
                    formulario,
                    'Os dados estão válidos, mas não foi possível salvá-los neste navegador.',
                    'erro'
                );

                return;
            }


            renderizarHistoricoLocal();


            mostrarFeedbackFormulario(
                formulario,
                'Dados verificados e participação salva neste navegador com sucesso.',
                'sucesso'
            );
        }
    );
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

window.addEventListener(
    'hashchange',
    renderizarRota
);


document.addEventListener(
    'DOMContentLoaded',
    renderizarRota
);
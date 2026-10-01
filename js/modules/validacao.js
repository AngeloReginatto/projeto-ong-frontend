const regrasValidacao = {

    nome: {

        validar: valor =>
            valor.trim().length >= 3,

        mensagem:
            'Informe um nome com pelo menos 3 caracteres.'
    },


    cpf: {

        validar: valor =>
            /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/
                .test(valor),

        mensagem:
            'Digite o CPF no formato 000.000.000-00.'
    },


    email: {

        validar: (valor, campo) =>
            valor.trim() !== '' &&
            campo.validity.valid,

        mensagem:
            'Informe um endereço de e-mail válido.'
    },


    telefone: {

        validar: valor =>
            /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/
                .test(valor),

        mensagem:
            'Digite o telefone no formato (00) 00000-0000.'
    },


    nascimento: {

        validar: valor => {

            if (!valor) {
                return false;
            }

            const dataNascimento =
                new Date(
                    `${valor}T00:00:00`
                );

            const hoje =
                new Date();

            hoje.setHours(
                0,
                0,
                0,
                0
            );

            return (
                !Number.isNaN(
                    dataNascimento.getTime()
                ) &&
                dataNascimento <= hoje
            );
        },

        mensagem:
            'Informe uma data de nascimento válida e não futura.'
    },


    cep: {

        validar: valor =>
            /^[0-9]{5}-[0-9]{3}$/
                .test(valor),

        mensagem:
            'Digite o CEP no formato 00000-000.'
    },


    endereco: {

        validar: valor =>
            valor.trim().length >= 3,

        mensagem:
            'Informe o endereço.'
    },


    cidade: {

        validar: valor =>
            valor.trim().length >= 2,

        mensagem:
            'Informe a cidade.'
    },


    estado: {

        validar: valor =>
            /^[A-Za-z]{2}$/
                .test(valor),

        mensagem:
            'Informe a UF utilizando duas letras.'
    }
};


/* =========================================================
   MENSAGENS DOS CAMPOS
   ========================================================= */

function obterMensagemValidacao(campo) {

    let mensagem =
        campo.parentElement.querySelector(
            '.mensagem-validacao'
        );

    if (!mensagem) {

        mensagem =
            document.createElement(
                'small'
            );

        mensagem.className =
            'mensagem-validacao erro';

        mensagem.setAttribute(
            'role',
            'alert'
        );

        campo.insertAdjacentElement(
            'afterend',
            mensagem
        );
    }

    return mensagem;
}


/* =========================================================
   VALIDAÇÃO DE CAMPOS
   ========================================================= */

function validarCampo(campo) {

    const regra =
        regrasValidacao[
            campo.id
        ];

    if (!regra) {
        return true;
    }

    const valido =
        regra.validar(
            campo.value,
            campo
        );


    campo.classList.toggle(
        'campo-sucesso',
        valido
    );


    campo.classList.toggle(
        'campo-erro',
        !valido
    );


    campo.setAttribute(
        'aria-invalid',
        String(!valido)
    );


    const mensagem =
        obterMensagemValidacao(
            campo
        );


    if (valido) {

        mensagem.textContent = '';
        mensagem.hidden = true;

    } else {

        mensagem.textContent =
            regra.mensagem;

        mensagem.hidden = false;
    }


    return valido;
}


/* =========================================================
   VALIDAÇÃO DA PARTICIPAÇÃO
   ========================================================= */

function validarParticipacao(formulario) {

    const radios =
        formulario.querySelectorAll(
            'input[name="participacao"]'
        );


    const valido =
        [...radios].some(
            radio =>
                radio.checked
        );


    const fieldset =
        radios[0]?.closest(
            'fieldset'
        );


    if (!fieldset) {
        return valido;
    }


    fieldset.classList.toggle(
        'grupo-erro',
        !valido
    );


    let mensagem =
        fieldset.querySelector(
            '.mensagem-participacao'
        );


    if (!mensagem) {

        mensagem =
            document.createElement(
                'small'
            );

        mensagem.className =
            'mensagem-validacao erro mensagem-participacao';

        mensagem.setAttribute(
            'role',
            'alert'
        );

        fieldset.appendChild(
            mensagem
        );
    }


    if (valido) {

        mensagem.textContent = '';
        mensagem.hidden = true;

    } else {

        mensagem.textContent =
            'Selecione uma forma de participação.';

        mensagem.hidden = false;
    }


    return valido;
}


/* =========================================================
   FEEDBACK GERAL
   ========================================================= */

function mostrarFeedbackFormulario(
    formulario,
    mensagem,
    tipo
) {

    let feedback =
        formulario.querySelector(
            '.feedback-formulario'
        );


    if (!feedback) {

        feedback =
            document.createElement(
                'div'
            );

        formulario.appendChild(
            feedback
        );
    }


    feedback.className =
        'alerta feedback-formulario ' +
        (
            tipo === 'sucesso'
                ? 'alerta-sucesso'
                : 'alerta-erro'
        );


    feedback.setAttribute(
        'role',
        tipo === 'sucesso'
            ? 'status'
            : 'alert'
    );


    feedback.textContent =
        mensagem;
}
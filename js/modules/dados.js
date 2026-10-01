const CHAVE_CADASTROS = 'cadastros_ong';


const nomesParticipacao = {
    voluntariado: 'Trabalho voluntário',
    doacao: 'Contribuição financeira',
    ambos: 'Ambos'
};


const projetosSociais = [
    {
        categoria: 'campanhas',
        titulo: 'Campanha de alimentos',

        badges: [
            {
                texto: 'Doação',
                classe: 'badge-doacao'
            },
            {
                texto: 'Ativo',
                classe: 'badge-ativo'
            }
        ],

        descricao:
            'Arrecadamos alimentos não perecíveis destinados a famílias em situação de vulnerabilidade social.',

        itens: [
            'Arroz, feijão e massas.',
            'Leite e alimentos não perecíveis.',
            'Produtos de higiene e limpeza.'
        ]
    },

    {
        categoria: 'voluntariado',
        titulo: 'Participação em ações sociais',

        badges: [
            {
                texto: 'Voluntariado',
                classe: 'badge-voluntariado'
            },
            {
                texto: 'Ativo',
                classe: 'badge-ativo'
            }
        ],

        descricao:
            'Pessoas voluntárias podem colaborar na organização das campanhas, separação das doações e atendimento às atividades promovidas pela ONG.',

        itens: [
            'Apoio em campanhas de arrecadação.',
            'Organização e separação de doações.',
            'Participação em eventos e ações comunitárias.'
        ]
    }
];
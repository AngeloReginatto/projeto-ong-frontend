# Projeto ONG Front-End

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-End para Web da Universidade Cruzeiro do Sul.

A aplicação apresenta uma ONG fictícia e permite consultar projetos sociais, oportunidades de voluntariado e realizar um cadastro de participação.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Day.js
- Git
- GitHub

## Evolução do projeto

### v1.0.0

Estrutura inicial desenvolvida com HTML semântico.

### v1.1.0

Implementação de CSS, design system e layout responsivo.

### v1.2.0

Implementação de JavaScript, navegação SPA, validação de formulários, armazenamento local e modularização do código.

## Estrutura atual

```text
projeto_ong_frontend/
├── README.md
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   ├── ong-voluntariado.jpg
│   └── ong-voluntariado.png
└── js/
    ├── main.js
    └── modules/
        ├── dados.js
        ├── storage.js
        ├── templates.js
        └── validacao.js
```

## Pré-requisitos

Para executar o projeto localmente é necessário apenas:

- navegador web atualizado;
- acesso aos arquivos do projeto.

Não há necessidade de instalar dependências, pois a aplicação utiliza HTML, CSS e JavaScript executados diretamente no navegador. A biblioteca Day.js é carregada por CDN.

## Instalação e execução local

1. Clone ou baixe o repositório.
2. Acesse a pasta do projeto.
3. Abra o arquivo `html/index.html` em um navegador.

O projeto não requer instalação de pacotes ou geração de build para execução local.

## Build e testes

A versão atual não utiliza ferramentas de build ou uma suíte automatizada de testes. A validação é realizada diretamente no navegador e por meio das ferramentas de desenvolvimento e acessibilidade utilizadas durante o projeto.

## Versionamento

O projeto utiliza Git e GitHub, com organização baseada em GitFlow:

- `main` - versões estáveis
- `develop` - integração do desenvolvimento
- `feature/*` - desenvolvimento de novas funcionalidades

As versões são identificadas por tags seguindo o Versionamento Semântico.
const requests = [
  {
    id: "question_name",
    answers: {},
  },
  {
    id: "question_income",
    answers: { question_name: "Ju" },
    question_name: "Ju",
  },
  {
    id: "question_invest",
    answers: {
      question_name: "Ju",
      question_income: "2000",
    },
  },
  {
    id: "question_investment_time",
    answers: {
      question_name: "Ju",
      question_income: "2000",
      question_invest: "A",
    },
  },
  {
    id: "question_???",
    answers: {
      question_name: "Ju",
      question_income: "2000",
      question_invest: "A",
      question_investment_time: "3-5",
    },
  },
];

const responses = [
  {
    id: "question_name",
    next: "question_income",
    height: 86,
    messages: [
      {
        received: true,
        text:
          "Vamos calcular o seu poder aquisitivo (poder de compra) para avaliar suas possibilidades de conseguir créditos e realizar seus sonhos! Você fornecerá alguns dados e receberá sua analise de crédito. Para isso temos que fazer algumas perguntas sobre a sua movimentação financeira.\n\nPrimeiramente, como podemos chamar você? (Use seu primeiro nome ou um apelido).",
      },
    ],
    buttons: [],
    inputs: [
      {
        type: "text",
        name: "name",
        placeholder: "CHAT_LABEL_INPUTTEXT",
      },
    ],
    responses: ["Meu nome é {{name}}."],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_income",
    next: "question_invest",
    height: 86,
    messages: [
      {
        received: true,
        text:
          "Qual é a sua renda mensal hoje? (Não se preocupe, todas as informações aqui são sigilosas).",
      },
    ],
    buttons: [],
    inputs: [
      {
        type: "number",
        name: "amount",
        placeholder: "CHAT_LABEL_AMOUNT",
      },
    ],
    responses: [" R$ {{amount}}."],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_invest",
    next: "question_profession",
    height: 237,
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Ok! E você se considera um trabalhador/empreendedor informal?\n\nComo por exemplo, costureira, pipoqueiro, marmiteiro, vendedor de utensílios, alimentos, produtos etc.",
      },
    ],
    buttons: [
      {
        value: "Sim",
        display: "Sim sou trabalhador/ empreendedor informal",
        label: {
          title: "Sim",
        },
      },
      {
        value: "Não",
        display: "Não",
        label: {
          title: "Não",
        },
      },
    ],
    inputs: [],
    responses: ["Sim sou trabalhador/ empreendedor informal"],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_profession",
    next: "question_investment_time",
    height: 237,
    messages: [
      {
        received: true,
        text:
          'Legal! E como você descreveria sua atividade? Exemplo "Costuro e vendo mascaras"',
      },
    ],
    buttons: [],
    inputs: [
      {
        type: "text",
        name: "activity",
        placeholder: "CHAT_LABEL_INPUTTEXT",
      },
    ],
    responses: ["Como {{activity}}."],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_investment_time",
    height: 237,
    next: "question_payment_methods",
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Que bacana! Precisamos saber as forma que vc recebe o pagamento por seus produtos/serviços",
      },
    ],
    buttons: [],
    inputs: [],
    responses: [],
    rows: [],
    radio: [],
    name: "paymentMethods",
    checkbox: [
      {
        value: "Dinheiro em espécie",
        label: { title: "Dinheiro em espécie" },
      },
      {
        value: "Maquininha de cartão",
        label: { title: "Maquininha de cartão" },
      },
      {
        value: "Tranferências",
        label: { title: "Tranferências" },
      },
      { value: "Boletos", label: { title: "Boletos" } },
      {
        value: "Aplicativos",
        label: { title: "Mais de 10 anos" },
      },
    ],
  },
  {
    id: "question_payment_methods",
    height: 237,
    next: "question_interest",
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Selecione as empresa de máquina de cartão que você mais utiliza?",
      },
    ],
    buttons: [],
    inputs: [],
    responses: [],
    rows: [],
    radio: [],
    name: "paymentMethodForms",
    checkbox: [
      {
        value: "Pag Seguro",
        label: { title: "Pag Seguro" },
      },
      {
        value: "Mercado Pago",
        label: { title: "Mercado Pago" },
      },
      {
        value: "Rede",
        label: { title: "Rede" },
      },
      {
        value: "Ton",
        label: { title: "Ton" },
      },
      {
        value: "SafraPay",
        label: { title: "SafraPay" },
      },
      {
        value: "Stone",
        label: { title: "Stone" },
      },
      {
        value: "GetNet",
        label: { title: "GetNet" },
      },
    ],
  },
  {
    id: "question_interest",
    next: "end",
    height: 237,
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Quais dessas categorias abaixo você se encaixa?",
      },
    ],
    buttons: [],
    inputs: [],
    responses: [],
    rows: [],
    name: "categories",
    checkbox: [
      { value: "CLT", label: { title: "CLT" } },
      { value: "Microempreendedor com MEI", label: { title: "Microempreendedor com MEI" } },
      { value: "Empreendedor", label: { title: "Empreendedor" } },
      { value: "PJ (Pessoa Jurídica)", label: { title: "PJ (Pessoa Jurídica)" } },
      { value: "Autônomo Regularizado", label: { title: "Autônomo Regularizado" } },
      { value: "Autônomo Informal", label: { title: "Autônomo Informal" } },
    ],
    radio: [],
  },
];

module.exports = {
  requests,
  responses,
};

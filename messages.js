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
      }
    ],
    buttons: [],
    inputs: [
      {
        type: "text",
        name: "name",
        placeholder: "CHAT_LABEL_INPUTTEXT"
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
        text: "Qual é a sua renda mensal hoje?^500 (Não se preocupe,^400 todas as informações aqui são sigilosas).^1000",
      },
    ],
    buttons: [],
    inputs: [
      {
        type: "number",
        name: "amount",
        placeholder: 'CHAT_LABEL_AMOUNT'
      },
    ],
    responses: [" R$ {{amount}}."],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_invest",
    next: "question_investment_time",
    height: 237,
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Ok! ^1000 E você já investiu alguma vez? ^1000 Sem considerar a Poupança!",
      },
    ],
    buttons: [
      {
        value: "A",
        label: {
          title: "Sim, já investi",
        },
      },
      {
        value: "B",
        label: {
          title: "Não, nunca investi",
        },
      },
    ],
    inputs: [],
    responses: [],
    rows: [],
    radio: [],
    checkbox: [],
  },
  {
    id: "question_investment_time",
    height: 237,
    next: "question_interest",
    messages: [
      { type: "string", received: true, text: "Há quanto tempo você já investe?^1000" },
    ],
    buttons: [],
    inputs: [],
    responses: [],
    rows: [],
    radio: [
    ],
    checkbox: [
      { value: "1",  name: 'age', label: { title: "Menos de 1 ano" } },
      { value: "1-3", name: 'age', label: { title: "Entre 1 e 3 anos" } },
      { value: "3-5", name: 'age', label: { title: "Entre 3 e 5 anos" } },
      { value: "5-10", name: 'age', label: { title: "Entre 5 e 10 anos" } },
      { value: "10", name: 'age', label: { title: "Mais de 10 anos" } },
    ],
  },
  {
    id: "question_interest",
    next: "question_???",
    height: 237,
    messages: [
      {
        type: "string",
        received: true,
        text:
          "Quando o assunto é administrar seus investimentos, ^500 você acha isso uma tarefa... ^1000",
      },
    ],
    buttons: [
    ],
    inputs: [],
    responses: [],
    rows: [],
    radio: [
      { value: "1",  name: 'age', label: { title: "Menos de 1 ano" } },
      { value: "1-3", name: 'age', label: { title: "Entre 1 e 3 anos" } },
      { value: "3-5", name: 'age', label: { title: "Entre 3 e 5 anos" } },
      { value: "5-10", name: 'age', label: { title: "Entre 5 e 10 anos" } },
      { value: "10", name: 'age', label: { title: "Mais de 10 anos" } },
    ],
    checkbox: [],
  },
];

module.exports = {
  requests,
  responses
}
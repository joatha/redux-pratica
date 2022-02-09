import { createStore } from "redux";

function reducer() {
  return [
    {
      id: 1,
      title: "Inicianto com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    },
    {
      id: 2,
      title: "Inicianto com React",
      lessons: [
        { id: 5, title: "Primeira aula" },
        { id: 6, title: "Segunda aula" },
        { id: 7, title: "Terceira aula" },
        { id: 8, title: "Quarta aula" }
      ]
    },
    {
      id: 3,
      title: "Inicianto com React",
      lessons: [
        { id: 5, title: "Primeira aula" },
        { id: 6, title: "Segunda aula" },
        { id: 7, title: "Terceira aula" },
        { id: 8, title: "Quarta aula" }
      ]
    }
  ];
}

const store = createStore(reducer);

export default store;

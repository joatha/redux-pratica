import { createStore } from "redux";

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Inicianto com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ]
    }
  ]
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SET_LESSON_ACTIVE") {
    return {
      ...state,
      activeLesson: action.lessons,
      activeModule: action.module
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;

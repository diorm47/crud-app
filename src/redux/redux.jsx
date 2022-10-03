const defaultState = {
  persons: [
    {
      id: 1,
      name: "Diyor",
      age: 18,
      gender: "Erkak",
      place: "Mingbuloq",
    },
    {
      id: 2,
      name: "Abror",
      age: 18,
      gender: "Erkak",
      place: "Yangiqo'rg'on",
    },
    {
      id: 3,
      name: "Sanjar",
      age: 19,
      gender: "Erkak",
      place: "Mingbuloq",
    },
    {
      id: 4,
      name: "Shaxzod",
      age: 56,
      gender: "Erkak",
      place: "Mingbuloq",
    },
    {
      id: 5,
      name: "Jack",
      age: 29,
      gender: "Erkak",
      place: "New-York",
    },
    {
      id: 6,
      name: "Cool",
      age: 40,
      gender: "Erkak",
      place: "New-York",
    },
    {
      id: 7,
      name: "Nancy",
      age: 67,
      gender: "Ayol",
      place: "New-York",
    },
  ],
  modal: false,
  edit: [],
  setMode: false,
  searchED: "",
};

const ADD_PERSON = "ADD_PERSON";
const REMOVE_PERSON = "REMOVE_PERSON";
const EDIT_PERSON = "EDIT_PERSON";
const TOGGLE_MODAL = "TOGGLE_MODAL";
const SEARCH = "SEARCH";
const SET_EDIT_MODE = "SET_EDIT_MODE";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, persons: [...state.persons, action.payload] };

    case REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (persons) => persons.id !== action.payload
        ),
      };

    case EDIT_PERSON:
      return {
        ...state,
        edit: (state.edit = action.payload),
        persons: state.persons.map((person) =>
          person.id === state.edit.id
            ? { ...person, ...action.payload }
            : person
        ),
      };

    case SET_EDIT_MODE:
      return {
        ...state,
        setMode: (state.setMode = action.payload),
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        modal: (state.modal = action.payload),
      };

    case SEARCH:
      return {
        ...state,
        searchED: (state.searchED = action.payload),
      };

    default:
      return state;
  }
};

export const addPersonAction = (payload) => ({ type: ADD_PERSON, payload });

export const removePersonAction = (payload) => ({
  type: REMOVE_PERSON,
  payload,
});

export const editPersonAction = (payload) => ({
  type: EDIT_PERSON,
  payload,
});
export const setEditModeAction = (payload) => ({
  type: SET_EDIT_MODE,
  payload,
});

export const toggleModal = (payload) => ({
  type: TOGGLE_MODAL,
  payload,
});

export const searchAction = (payload) => ({
  type: SEARCH,
  payload,
});

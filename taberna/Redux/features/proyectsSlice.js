import { createSlice } from "@reduxjs/toolkit";

export const proyectsSlice = createSlice({
  name: "proyects",
  initialState: {
    value: [],
    proyectReview: [],
    proyectById: [],
    find: [],
    flag: false,
  },
  reducers: {
    getSearchByAZ: (state, action) => {
      state.find = action.payload;
    },
    getSearchByZA: (state, action) => {
      state.find = action.payload;
    },
    getNameByMm: (state, action) => {
      state.find = action.payload;
    },
    getNameBymM: (state, action) => {
      state.find = action.payload;
    },
    getproyects: (state, action) => {
      state.value = action.payload;
    },
    getByAZ: (state, action) => {
      state.value = action.payload;
    },
    getByZA: (state, action) => {
      state.value = action.payload;
    },
    getByMm: (state, action) => {
      state.value = action.payload;
    },
    getBymM: (state, action) => {
      state.value = action.payload;
    },
    getProyectById: (state, action) => {
      return {
        ...state,
        proyectById: action.payload,
      };
    },

    getproyectReview: (state, action) => {
      return {
        ...state,
        proyectReview: action.payload,
      };
    },
    createproyect: (state, action) => {
      return {
        ...state,
        value: [action.payload, ...state.value],
      };
    },
    getproyectsByTech: (state, action) => {
      state.value = [...action.payload];
    },
    getproyectsByDeveloper: (state, action) => {
      state.value = [...action.payload];
    },
    searchproyect: (state, action) => {
      return {
        ...state,
        find: [...action.payload],
      };
    },
    setFlag: (state, action) => {
      return {
        ...state,
        flag: action.payload,
      };
    },
    clearFind: (state, action) => {
      return {
        ...state,
        find: [...action.payload],
      };
    },
    cleanproyectById: (state, action) => {
      return {
        ...state,
        proyectById: [],
      };
    },
  },
});

export const {
  getByAZ,
  getSearchByAZ,
  getSearchByZA,
  getByZA,
  getByMm,
  getBymM,
  getNameByMm,
  getNameBymM,
  getproyects,
  createproyect,
  searchproyect,
  getProyectById,
  getproyectReview,
  cleanproyectById,
  getproyectsByTech,
  getproyectsByDeveloper,
  setFlag,
  clearFind,
} = proyectsSlice.actions;

export default proyectsSlice.reducer;
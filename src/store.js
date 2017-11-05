import createStore from "redux-zero";

const initialState = { 
  list: [
    { title: "European Hit Radio", url: "http://84.46.162.57:8000/ehr_m" },
    { title: "Power Hit Radio", url: "https://power-stream.tv3.lt:8080/PHR.mp3" },
  ],
  active: null,
  playing: false,
  loading: false
};

const store = createStore(initialState);

export default store;
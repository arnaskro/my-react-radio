import createStore from "redux-zero";

const initialState = { 
  list:  [
    { title: "European Hit Radio", url: "http://84.46.162.57:8000/ehr_m" },
    { title: "Power Hit Radio", url: "https://power-stream.tv3.lt:8080/PHR.mp3" },
    { title: "Zip FM", url: "http://84.46.205.13:80/zipfm128.mp3" },
    { title: "M-1", url: "http://stream.m-1.fm/m1/aacp64" },
    { title: "M-1 Plius", url: "http://radio.m-1.fm/m1plius/aacp64" }
  ],
  active: null,
  playing: false,
  loading: false,
  volume: 70
};

const store = createStore(initialState);

export default store;
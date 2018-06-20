import createStore from "redux-zero";

const initialState = { 
  list:  [
    { title: "European Hit Radio", url: "http://82.135.234.195:8000/ehr.mp3" },
    { title: "Power Hit Radio", url: "https://power-stream.tv3.lt:8080/PHR.mp3" },
    { title: "Zip FM", url: "http://84.46.205.13:80/zipfm128.mp3" },
    { title: "M-1", url: "http://radio.m-1.fm:80/m1/mp3" },
    { title: "M-1 Plius", url: "http://radio.m-1.fm:80/m1plius/mp3" },
    { title: "Laluna", url: "http://radio.m-1.fm:80/laluna/mp3" },
    { title: "RadioCentras", url: "http://84.46.205.13:80/rc128.mp3" },
    { title: "GOLD FM", url: "http://82.135.234.195:8000/goldfm.mp3" },
    { title: "Ruskoje Radio", url: "http://5.20.223.18:80/rrb128.mp3" },
    { title: "Kelyje (Klaipeda)", url: "http://82.135.234.195:8000/kelyje_klaipeda.mp3" },
    { title: "Lietus", url: "http://radio.m-1.fm:80/lietus/mp3" }
  ],
  active: null,
  playing: false,
  loading: false,
  volume: 70
};

const store = createStore(initialState);

export default store;
const actions = store => ({
  changeRadio:  (state, selectedRadio)  => ({ active: selectedRadio, playing: true, loading: false }),
  toggleRadio:  (state)                 => (state.playing ? { playing: false, loading: false } : { playing: false, loading: true }),
  setPlaying:   (state)                 => ({ playing: true, loading: false }),
  setLoading:   (state)                 => ({ playing: false, loading: true }),
  reset:        (state)                 => ({ playing: false, loading: false, active: null }),
  changeVolume: (state, volume)         => ({ volume })
})

export default actions;
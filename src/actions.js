const actions = store => ({
  changeRadio: (state, selectedRadio) => ({ active: selectedRadio, playing: true, loading: false }),
  toggleRadio: state => {
    if (state.playing)
      return { playing: false, loading: false }
    else
      return { playing: false, loading: true }
  },
  setPlaying: state => ({ playing: true, loading: false }),
  setLoading: state => ({ playing: false, loading: true }),
  changeVolume: (state, volume) => ({ volume })
})

export default actions;
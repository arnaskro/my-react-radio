const actions = store => ({
  changeRadio: (state, selectedRadio) => ({ active: selectedRadio, playing: false, loading: false }),
  toggleRadio: state => {
    if (state.playing)
      return { playing: false, loading: false }
    else
      return { playing: false, loading: true }
  },
  setPlaying: state => ({ playing: true, loading: false })
})

export default actions;
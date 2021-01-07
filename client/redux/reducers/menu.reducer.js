function menuReducer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return (state = !state)
    default:
      return state
  }
}

export { menuReducer }

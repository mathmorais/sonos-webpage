import { darkTheme } from '../../constants/theme'

function themeReducer(state = darkTheme, action) {
  switch (action.type) {
    case 'TOGGLE':
      return (state = action.payload)
    default:
      return state
  }
}

export { themeReducer }

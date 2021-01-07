import GlobalStyles from '../styles/global'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { themeReducer } from '../../redux/reducers/theme.reducer.js'
import { menuReducer } from '../../redux/reducers/menu.reducer.js'
const MyApp = ({ Component, pageProps }) => {
  const store = createStore(
    combineReducers({
      theme: themeReducer,
      menu: menuReducer
    })
  )

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

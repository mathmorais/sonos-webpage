import { useDispatch, useSelector } from 'react-redux'
import { themeToggle } from '../redux/actions/theme.action'
import { lightTheme, darkTheme } from '../constants/theme'

import Switch from '../components/Switch'

const SwitchContainer = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  function handleChangeInput() {
    dispatch(themeToggle(theme === lightTheme ? darkTheme : lightTheme))
  }

  return <Switch handleChangeInput={handleChangeInput} />
}

export default SwitchContainer

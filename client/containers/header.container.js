import { useState } from 'react'
import Header from '../components/Header'
import { menuToggle } from '../redux/actions/menu.action.js'
import { useDispatch, useSelector } from 'react-redux'
const HeaderContainer = () => {
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const menuState = useSelector(state => state.menu)

  const handleToggle = () => {
    return setToggle(!toggle)
  }

  // Function to dispatch a action for the menuToggle state
  const handleMenuToggle = () => {
    return dispatch(menuToggle())
  }

  return (
    <Header
      handleMenuToggle={handleMenuToggle}
      handleToggle={handleToggle}
      menuState={menuState}
      toggleState={toggle}
    />
  )
}

export default HeaderContainer

import PersonIcon from '../public/svg/person.svg'
import SearchIcon from '../public/svg/search.svg'
import BagIcon from '../public/svg/bag.svg'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const MobileMenu = () => {
  const menuToggle = useSelector(state => state.menu)

  return (
    <div id={menuToggle ? 'toggle_menu' : ''} className="mobile_menu">
      <div className="content">
        <div className="user_actions">
          <div className="icons">
            <PersonIcon />
            <SearchIcon />
            <BagIcon />
          </div>
        </div>
        <Link href="/en">
          <h2>Overview</h2>
        </Link>
        <Link href="/en">
          <h2>Sound</h2>
        </Link>
        <Link href="/en">
          <h2>SONOS App</h2>
        </Link>
        <Link href="/en">
          <h2>Connect & integrate</h2>
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu

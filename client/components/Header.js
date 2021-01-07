import Link from 'next/link'
import PersonIcon from '../public/svg/person.svg'
import SearchIcon from '../public/svg/search.svg'
import BagIcon from '../public/svg/bag.svg'
import DropdownContainer from '../containers/dropdown.container.js'

const Header = ({ handleToggle, toggleState, handleMenuToggle, menuState }) => {
  return (
    <header>
      <div className="brand_logo">
        <h1>SONOS</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/" prefetch={false}>
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>
              <a>Sound</a>
            </Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>
              <a>SONOS App</a>
            </Link>
          </li>
          <li>
            <Link href="/" prefetch={false}>
              <a>Connect & integrate</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user_actions">
        <PersonIcon />
        <SearchIcon />
        <BagIcon />
        <DropdownContainer
          handleToggle={handleToggle}
          toggleState={toggleState}
        />
      </div>
      <div className="mobile_action_open">
        <input id="open" type="checkbox" onChange={handleMenuToggle}></input>
        <label className="action_button" htmlFor="open"></label>
      </div>
    </header>
  )
}

export default Header

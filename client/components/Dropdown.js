import DropdownIcon from '../public/svg/dropdown.svg'

const Dropdown = ({ handleToggle, toggleState, currentLang, items }) => {
  return (
    <div className="dropdown">
      <h1>{currentLang}</h1>
      <DropdownIcon onClick={handleToggle} />
      <div id={toggleState ? 'toggle' : ''} className="action">
        {items}
      </div>
    </div>
  )
}

export default Dropdown

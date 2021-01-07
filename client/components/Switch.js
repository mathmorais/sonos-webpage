const Switch = ({ handleChangeInput }) => {
  return (
    <div className="theme_switcher">
      <p>Black</p>
      <div className="switch_container">
        <input
          onChange={handleChangeInput}
          type="checkbox"
          id="checkbox"
          title="Change theme"
        ></input>
        <label htmlFor="checkbox"></label>
      </div>
      <p>White</p>
    </div>
  )
}

export default Switch

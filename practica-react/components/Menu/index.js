import PropTypes from "prop-types"

export const Menu = (props) => {
    const {
        customClass,
        textButton
    } = props
  return (
    <button className={`${customClass}`}>{textButton}</button>
  )
}

Menu.propTypes = {
    customClass: PropTypes.string,
    textButton: PropTypes.string.isRequired
}

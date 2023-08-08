import PropTypes from "prop-types"

const Card = (props) => {
  const {
    classText,
    classEfect,
    textCard
  } = props

  return (
    <div className="card">
      <div className={`${classEfect}`}></div>
      <p className={`text-position ${classText}`}>{textCard}</p>
    </div>
  )
}

Card.propTypes = {
  classText: PropTypes.string,
  classEfect: PropTypes.string,
  textCard: PropTypes.string
}

export default Card


// export const Card = ({children, customClase}) => {
//   return (
//     <article className={`card ${customClase}`}>{children}</article>
//   )
// }

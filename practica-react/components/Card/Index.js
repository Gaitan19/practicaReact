
export const Card = ({children, customClase}) => {
  return (
    <article className={`card ${customClase}`}>{children}</article>
  )
}

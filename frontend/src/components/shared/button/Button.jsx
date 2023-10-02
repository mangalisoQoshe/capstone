

function Button({style,onClick,children}) {
  return (
    <button className={style} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
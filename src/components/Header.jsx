
export const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>

        <nav className="header__links">
          <a className="header__link" href=".">About me</a>
        </nav>
      </div>
    </header>
  )
}
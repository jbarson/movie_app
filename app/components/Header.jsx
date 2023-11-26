import styles from './header.module.css'

function Header({children}) {
  return (
    <header className={styles.header}>
        {children}
        <div
          className={styles.menu}
          aria-haspopup="true"
          role="button"
          id="mainMenuOptions"
          aria-expanded="false"
          aria-label="Menu"
          tabIndex="0"
        />
      </header>
  )
}

export default Header
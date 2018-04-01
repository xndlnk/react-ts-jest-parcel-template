import * as React from 'react'
import styles from './App.css'

const logo = require('./logo.svg')

interface AppPropsType {}
interface AppStateType {}

class App extends React.Component<AppPropsType, AppStateType> {
  public render () {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Test</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

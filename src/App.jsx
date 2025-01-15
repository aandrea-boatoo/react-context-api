import './App.css'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import MainComponent from './Components/MainComponent'
import GlobalContext from './contexts/GlobalContext'

function App() {
  return (
    <GlobalContext.Provider value={getData()}>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </GlobalContext.Provider>
  )
}

export default App

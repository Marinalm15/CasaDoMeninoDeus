import { MovimentContextProvider } from './Context/departamentosContext'
import './index.css'
import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { Equipa } from './pages/Equipa'

function App() {

  return (
    <>
      <Header />
      <MovimentContextProvider>
        <Equipa />
      </MovimentContextProvider>
      <Footer />
    </>
  )
}

export default App

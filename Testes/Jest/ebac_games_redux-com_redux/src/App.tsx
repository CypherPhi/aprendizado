import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos/Produtos'

import { GlobalStyle } from './styles'

import { configuraStore } from './store'

const store = configuraStore()

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App

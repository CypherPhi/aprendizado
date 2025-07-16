import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizacaoProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'acao',
  imagem: '',
  plataformas: ['ps4'],
  preco: 99.9,
  precoAntigo: 129.9,
  titulo: 'God of War'
}

describe('testes para o Produto', () => {
  test('deve renderizar o componente Produto', () => {
    renderizacaoProvider(<Produto game={jogo} />)
    expect(screen.getByText('God of War')).toBeInTheDocument
  })

  test('deve adicionar um item no carrinho', () => {
    const { store } = renderizacaoProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('adicionar-carrinho')
    fireEvent.click(botao)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})

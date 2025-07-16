import { screen } from '@testing-library/react'
import Header from '../index'
import { renderizacaoProvider } from '../../../utils/tests'

describe('testes para o Header', () => {
  test('deve renderizar o Header', () => {
    renderizacaoProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument
  })

  test('deve renderizar com itens', () => {
    renderizacaoProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'rpg',
              imagem: '',
              plataformas: ['pc'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'The Witcher 3'
            },
            {
              id: 2,
              categoria: 'acao',
              imagem: '',
              plataformas: ['ps4'],
              preco: 99.9,
              precoAntigo: 129.9,
              titulo: 'God of War'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('carrinho-header').innerHTML).toContain('2 itens')
  })
})

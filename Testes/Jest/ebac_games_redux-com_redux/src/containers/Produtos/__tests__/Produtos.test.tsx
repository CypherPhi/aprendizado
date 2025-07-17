import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderizacaoProvider } from '../../../utils/tests'
import Produtos from '../Produtos'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
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
  },
  {
    id: 3,
    categoria: 'acao',
    imagem: '',
    plataformas: ['xbox'],
    preco: 89.9,
    precoAntigo: 109.9,
    titulo: 'Halo Infinite'
  },
  {
    id: 4,
    categoria: 'acao',
    imagem: '',
    plataformas: ['switch'],
    preco: 79.9,
    precoAntigo: 99.9,
    titulo: 'Zelda Breath of the Wild'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, resp, ctx) => {
    return resp(ctx.json(mocks))
  })
)

describe('teste do container Produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('deve renderizar corretamente', () => {
    renderizacaoProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument
  })

  test('deve renderizar corretamente com a listagem', async () => {
    renderizacaoProvider(<Produtos />)
    await waitFor(() => {
      expect(screen.getByText('The Witcher 3')).toBeInTheDocument
    })
  })
})

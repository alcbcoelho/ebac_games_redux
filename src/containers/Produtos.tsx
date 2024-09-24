import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetGamesQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: games, isLoading } = useGetGamesQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {games?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos

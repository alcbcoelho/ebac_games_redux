import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  items: Game[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // Reducer: função que recebe o estado inicial e a ação a ser feita
    // Payload: nesse caso, o jogo a ser adicionado no carrinho
    add: (state, action: PayloadAction<Game>) => {
      const game = action.payload

      if (state.items.find((g) => g.id === game.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(game)
      }
    }
  }
})

export const { add } = carrinhoSlice.actions
export default carrinhoSlice.reducer

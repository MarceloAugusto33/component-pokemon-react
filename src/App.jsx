import './App.css'
import { PokemonFinder } from './components/PokemonFinder'

export function App() {
  return (
    <div className="container">
      <div className="card">
        <img src="https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
        <h1>ACHE SEU POKEMON</h1>
        <PokemonFinder />
      </div>
    </div>
  )
}
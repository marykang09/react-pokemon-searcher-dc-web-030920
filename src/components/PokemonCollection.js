import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  render() {
    return (
      <div>
        <h3>Pokemon Collection</h3>
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon => 
                                <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection

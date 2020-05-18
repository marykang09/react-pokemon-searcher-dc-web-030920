import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemonCollection: [],
      searchText: ""
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => this.setState({
          pokemonCollection: data
      }))
  }

  handleSearch = (event) => {
    console.log("searching..")
    this.setState({
      searchText: event.target.value 
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemonCollection: [...this.state.pokemonCollection, pokemon]
    })
  }

  render() {
    let searchedPokemon = this.state.pokemonCollection.filter(pokemon => 
                                        pokemon.name.includes(this.state.searchText))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <br />
        <Search onChange={this.handleSearch} value={this.state.searchText}/>
        <br />
        <PokemonCollection pokemon={searchedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage

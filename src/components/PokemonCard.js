import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = { 
      clicked: false
    }
  }

  changePic = () => {
    console.log("clicked pic")

    this.setState({
      clicked: !this.state.clicked
    })

  }

  render() {
    let hp = this.props.pokemon.stats.find(stats => stats.name === "hp").value

    let frontImage = this.props.pokemon.sprites.front

    let backImage = this.props.pokemon.sprites.back

    let image
      if (this.state.clicked ? image = backImage : image = frontImage)


    return (
      
      <Card onClick={this.changePic} >
        <div>
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <div className="header">Name: {this.props.pokemon.name}</div>
          </div>
          <br></br>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {hp}
            </span>
          </div>
        </div>
      </Card>

    )
  }
}

export default PokemonCard

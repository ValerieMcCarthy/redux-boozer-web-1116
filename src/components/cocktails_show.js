import React from 'react'
import { connect } from 'react-redux'
import { selectCocktail } from '../actions'


class CocktailShow extends React.Component {
  render() {
    {if (!this.props.currentCocktail) {
      return <div></div>
    } else {
      let cocktail = this.props.currentCocktail
      return <div className="col-md-4"><h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      </div>
    }}
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
    currentCocktail: findCocktail(state.cocktails, state.currentCocktail)
  }
}

function findCocktail(cocktails, id) {
  return cocktails.find(function(cocktail) {
    return id == cocktail.id
  })
}

export default connect(mapStateToProps)(CocktailShow)

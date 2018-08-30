import React, { Component } from "react"
import { connect } from "react-redux"
import { About } from "../components/About"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class AboutContainer extends Component {
  render() {
    const { addToFavorite, favorite, delFromFavorite, genre } = this.props
    return (
      <div>
        <About
          geners={genre}
          delFavorite={delFromFavorite}
          favoriteAdd={addToFavorite}
          favorite={favorite}
          id={this.props.match.params.number}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    genre: store.genre.data,
    favorite: store.favorite.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: item => dispatch(addFavorite(item)),
    delFromFavorite: item => dispatch(delFavorite(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer)

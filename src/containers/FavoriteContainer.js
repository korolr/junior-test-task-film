import React, { Component } from "react"
import { connect } from "react-redux"
import { Favorite } from "../components/Favorite"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class FavoriteContainer extends Component {
  render() {
    const { addToFavorite, favorite, delFromFavorite, genre } = this.props
    return (
      <div>
        <Favorite
          geners={genre}
          delFromFavorite={delFromFavorite}
          addToFavorite={addToFavorite}
          favoriteItems={favorite}
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
)(FavoriteContainer)

import React, { Component } from "react"
import { connect } from "react-redux"
import { Search } from "../components/Search"
import { getFilm } from "../actions/filmActions"
import { getGenre } from "../actions/genreActions"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class SearchContainer extends Component {
  render() {
    const {
      getFilmAction,
      addToFavorite,
      favorite,
      delFromFavorite,
      genre,
    } = this.props
    return (
      <div>
        <Search
          id={this.props.match.params.number}
          getMoreFilms={getFilmAction}
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
    favorite: store.favorite.data,
    genre: store.genre.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFilmAction: id => dispatch(getFilm(id)),
    getFilmGanre: () => dispatch(getGenre()),
    addToFavorite: item => dispatch(addFavorite(item)),
    delFromFavorite: item => dispatch(delFavorite(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)

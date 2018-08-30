import React, { Component } from "react"
import { connect } from "react-redux"
import { Home } from "../components/Home"
import { getFilm } from "../actions/filmActions"
import { getGenre } from "../actions/genreActions"
import { addFavorite, delFavorite } from "../actions/favoriteActions"

class HomeContainer extends Component {
  componentDidMount = () => {
    if (this.props.film.data.length === 0) {
      this.props.getFilmGanre()
      this.props.getFilmAction(1)
    }
  }
  render() {
    const {
      film,
      getFilmAction,
      addToFavorite,
      favorite,
      delFromFavorite,
      genre,
    } = this.props
    return (
      <div>
        <Home
          film={film.data}
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
    film: store.film,
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
)(HomeContainer)

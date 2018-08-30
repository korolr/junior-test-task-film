import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export class FilmAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.state = { desGener: "", add: false }
  }
  componentDidMount() {
    if (this.props.item.genre_ids) {
      this.props.item.genre_ids.map(item => {
        this.props.generId.map(number => {
          if (item === number.id) {
            this.setState((prevState, props) => ({
              desGener: prevState.desGener + number.name + "  ",
            }))
          }
          return null
        })
        return null
      })
    } else if (this.props.item.genres) {
      this.props.item.genres.map(item => {
        this.props.generId.map(number => {
          if (item.id === number.id) {
            this.setState(prevState => ({
              desGener: prevState.desGener + number.name + "  ",
            }))
          }
          return null
        })
        return null
      })
    }
    this.props.favorite.map(fav => {
      if (this.props.item.id === fav.id) {
        this.setState({ add: true })
      }
      return null
    })
  }
  render() {
    const { favoriteAdd, item, delFavorite } = this.props
    return (
      <div>
        <Link to={`/film/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            style={{ width: "207px" }}
            alt="none"
          />
          <h4 style={{ marginTop: "2px" }}>{item.title}</h4>
        </Link>

        <p style={{ marginTop: "-10px" }}>{this.state.desGener}</p>
        {this.state.add ? (
          <Button
            style={{ marginLeft: "44px" }}
            onClick={() => {
              delFavorite(item)
              this.setState({ add: false })
            }}
          >
            Удалить выбранное
          </Button>
        ) : (
          <Button
            bsStyle="primary"
            style={{ marginLeft: "30px" }}
            onClick={() => {
              favoriteAdd(item)
              this.setState({ add: true })
            }}
          >
            Добавить в избранное
          </Button>
        )}
      </div>
    )
  }
}

FilmAlbum.propTypes = {
  generId: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  favoriteAdd: PropTypes.func.isRequired,
  delFavorite: PropTypes.func.isRequired,
}

export default FilmAlbum

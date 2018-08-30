import React from "react"
import { Grid, Row } from "react-bootstrap"
import axios from "axios"
import { api } from "../utils/api"
import { Button } from "react-bootstrap"
import RecommendList from "./RecommendList"
import PropTypes from "prop-types"

export class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movie: {}, desGener: "", add: false, recommend: [] }
  }

  _updateState = id => {
    var self = this
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`
      )
      .then(function(response) {
        document.title = response.data.original_title
        self.setState({ movie: response.data })

        if (self.state.movie.genres) {
          self.state.movie.genres.map(item => {
            self.props.geners.map(number => {
              if (item.id === number.id) {
                self.setState(prevState => ({
                  desGener: prevState.desGener + number.name + "  ",
                }))
              }
              return null
            })
            return null
          })
        }
        self.props.favorite.map(fav => {
          if (self.state.movie.id === fav.id) {
            self.setState({ add: true })
          }
          return null
        })
      })

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api}&language=en-US&page=1
        `
      )
      .then(function(response) {
        self.setState({ recommend: response.data.results })
      })
  }

  componentWillReceiveProps(newProps) {
    this.setState(() => ({
      desGener: "",
    }))
    this.setState({ add: false })
    this._updateState(newProps.id)
  }
  componentDidMount() {
    this._updateState(this.props.id)
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <img
            src={`https://image.tmdb.org/t/p/w300${
              this.state.movie.poster_path
            }`}
            alt="none"
          />
          <h1>{this.state.movie.original_title}</h1>
          <p>{this.state.movie.status}</p>
          <h3>{this.state.desGener}</h3>
          <h3>{this.state.movie.overview}</h3>
          {this.state.add ? (
            <Button
              onClick={() => {
                this.props.delFavorite(this.state.movie)
                this.setState({ add: false })
              }}
            >
              Удалить выбранное
            </Button>
          ) : (
            <Button
              bsStyle="primary"
              onClick={() => {
                this.props.favoriteAdd(this.state.movie)
                this.setState({ add: true })
              }}
            >
              Добавить в избранное
            </Button>
          )}
          <RecommendList recommend={this.state.recommend} />,
        </Row>
      </Grid>
    )
  }
}

About.propTypes = {
  geners: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  favoriteAdd: PropTypes.func.isRequired,
  delFavorite: PropTypes.func.isRequired,
}

export default About

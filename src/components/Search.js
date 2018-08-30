import React from "react"
import FilmAlbum from "./FilmAlbum"
import { Grid, Row } from "react-bootstrap"
import axios from "axios"
import { api } from "../utils/api"
import { Content, Film } from "./Style"
import PropTypes from "prop-types"

export class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  _getResult = id => {
    var self = this
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${id}&page=1&include_adult=false`
      )
      .then(function(response) {
        self.setState(() => ({ data: response.data.results }))
      })
  }
  componentDidMount() {
    document.title = `Поиск ${this.state.data}`
    this._getResult(this.props.id)
  }

  componentWillReceiveProps(newProps) {
    this._getResult(newProps.id)
  }

  render() {
    const { geners, addToFavorite, favoriteItems, delFromFavorite } = this.props
    return (
      <Grid>
        <Row className="show-grid">
          <Content>
            {this.state.data.length === 0 ? (
              <p>Ничего нет :(</p>
            ) : (
              this.state.data.map(item => (
                <Film key={item.id}>
                  <FilmAlbum
                    item={item}
                    generId={geners}
                    favorite={favoriteItems}
                    favoriteAdd={addToFavorite}
                    delFavorite={delFromFavorite}
                  />
                </Film>
              ))
            )}
          </Content>
        </Row>
      </Grid>
    )
  }
}

Search.propTypes = {
  geners: PropTypes.array.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  delFromFavorite: PropTypes.func.isRequired,
}

export default Search

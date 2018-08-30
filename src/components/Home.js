import React from "react"
import FilmAlbum from "./FilmAlbum"
import { Grid, Row } from "react-bootstrap"
import { Content, Film } from "./Style"
import PropTypes from "prop-types"

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { numberPage: 1 }
  }

  componentDidMount() {
    document.title = "Главная"
    window.addEventListener("scroll", this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      this.setState({ numberPage: this.state.numberPage + 1 })

      this.props.getMoreFilms(this.state.numberPage)
    }
  }

  render() {
    const {
      film,
      geners,
      addToFavorite,
      favoriteItems,
      delFromFavorite,
    } = this.props
    return (
      <Grid>
        <Row className="show-grid">
          <Content>
            {film.map(item => (
              <Film key={item.id}>
                <FilmAlbum
                  item={item}
                  generId={geners}
                  favorite={favoriteItems}
                  favoriteAdd={addToFavorite}
                  delFavorite={delFromFavorite}
                />
              </Film>
            ))}
          </Content>
        </Row>
      </Grid>
    )
  }
}

Home.propTypes = {
  film: PropTypes.array.isRequired,
  geners: PropTypes.array.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  delFromFavorite: PropTypes.func.isRequired,
}

export default Home

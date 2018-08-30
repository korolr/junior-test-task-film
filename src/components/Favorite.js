import React from "react"
import FilmAlbum from "./FilmAlbum"
import { Grid, Row } from "react-bootstrap"
import { Content, Film } from "./Style"
import PropTypes from "prop-types"

export class Favorite extends React.Component {
  componentDidMount() {
    document.title = "Избранное"
  }
  render() {
    const { geners, addToFavorite, favoriteItems, delFromFavorite } = this.props
    return (
      <Grid>
        <Row className="show-grid">
          <Content>
            {favoriteItems.length > 0 ? (
              favoriteItems.map(item => (
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
            ) : (
              <p>Пока ничего нет</p>
            )}
          </Content>
        </Row>
      </Grid>
    )
  }
}

Favorite.propTypes = {
  geners: PropTypes.array.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  delFromFavorite: PropTypes.func.isRequired,
}

export default Favorite

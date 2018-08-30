import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function RecommendList(props) {
  const recommend = props.recommend
  const listItems = recommend.map(item => {
    return (
      <div style={{ margin: "10px" }} key={item.id}>
        <Link to={`/film/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt="none"
            style={{ width: "210px" }}
          />
          <p>{item.title}</p>
        </Link>
      </div>
    )
  })
  return (
    <div>
      <h2>Reccomend:</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {listItems}
      </div>
    </div>
  )
}

RecommendList.propTypes = {
  recommend: PropTypes.array.isRequired,
}

export default RecommendList

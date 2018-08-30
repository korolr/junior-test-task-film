import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import FavoriteContainer from "../containers/FavoriteContainer"
import HomeContainer from "../containers/HomeContainer"
import AboutContainer from "../containers/AboutContainer"
import SearchContainer from "../containers/SearchContainer"

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/favorite" component={FavoriteContainer} />
        <Route path="/film/:number" component={AboutContainer} />
        <Route path="/search/:number" component={SearchContainer} />
      </Switch>
    )
  }
}

export default Main

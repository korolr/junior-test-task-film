import React, { Component } from "react"
import Header from "./Header"
import { Switch, Route } from "react-router-dom"
import FavoriteContainer from "../containers/FavoriteContainer"
import HomeContainer from "../containers/HomeContainer"
import AboutContainer from "../containers/AboutContainer"
import SearchContainer from "../containers/SearchContainer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/favorite" component={FavoriteContainer} />
          <Route path="/film/:number" component={AboutContainer} />
          <Route path="/search/:number" component={SearchContainer} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App

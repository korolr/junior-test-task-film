import React from "react"
import {
  Navbar,
  FormGroup,
  FormControl,
  Button,
  Nav,
  NavItem,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import history from "../history"

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { search: "Поиск" }
  }

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      history.push(`/search/${this.state.search}`)
    }
  }
  handleSubmit = event => {
    history.push(`/search/${this.state.search}`)
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Кинохи</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/" style={{ color: "#77778c" }}>
                Все фильмы
              </Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/favorite" style={{ color: "#77778c" }}>
                Избранное{" "}
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl
                  onKeyPress={this.handleKeyPress}
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </FormGroup>{" "}
              <Button type="submit" onClick={this.handleSubmit}>
                Отправить
              </Button>
            </Navbar.Form>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header
